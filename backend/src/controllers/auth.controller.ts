import { Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma';
import { generateToken } from '../utils/jwt';
import { sendSuccess, sendError } from '../utils/response';
import { AuthRequest, RegisterBody, LoginBody } from '../types/auth.types';
import { UserRole } from '../../generated/prisma';

// POST /api/auth/register
export const register = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const body = req.body as RegisterBody;
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      role,
      // Farmer
      farmName,
      farmAddress,
      farmCity,
      farmProvince,
      // Distributor
      companyName,
      distributorAddress,
      distributorCity,
      distributorProvince,
      // Retailer
      storeName,
      storeAddress,
      storeCity,
      storeProvince,
      storeType,
    } = body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName || !role) {
      sendError(res, 'email, password, firstName, lastName and role are required', 400);
      return;
    }

    // Validate role
    const validRoles: UserRole[] = ['FARMER', 'DISTRIBUTOR', 'RETAILER', 'ADMIN'];
    if (!validRoles.includes(role)) {
      sendError(res, `role must be one of: ${validRoles.join(', ')}`, 400);
      return;
    }

    // Check email uniqueness
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      sendError(res, 'Email is already registered', 409);
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user + role-specific profile in a transaction
    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          phone,
          role,
        },
      });

      if (role === 'FARMER') {
        if (!farmName || !farmAddress || !farmCity || !farmProvince) {
          throw new Error('farmName, farmAddress, farmCity, farmProvince are required for FARMER');
        }
        await tx.farm.create({
          data: {
            userId: newUser.id,
            name: farmName,
            address: farmAddress,
            city: farmCity,
            province: farmProvince,
          },
        });
      }

      if (role === 'DISTRIBUTOR') {
        if (!companyName || !distributorAddress || !distributorCity || !distributorProvince) {
          throw new Error(
            'companyName, distributorAddress, distributorCity, distributorProvince are required for DISTRIBUTOR'
          );
        }
        await tx.distributor.create({
          data: {
            userId: newUser.id,
            companyName,
            address: distributorAddress,
            city: distributorCity,
            province: distributorProvince,
          },
        });
      }

      if (role === 'RETAILER') {
        if (!storeName || !storeAddress || !storeCity || !storeProvince) {
          throw new Error(
            'storeName, storeAddress, storeCity, storeProvince are required for RETAILER'
          );
        }
        await tx.retailer.create({
          data: {
            userId: newUser.id,
            storeName,
            address: storeAddress,
            city: storeCity,
            province: storeProvince,
            storeType,
          },
        });
      }

      return newUser;
    });

    // Generate token
    const token = generateToken({ userId: user.id, email: user.email, role: user.role });

    sendSuccess(
      res,
      {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      },
      'Registration successful',
      201
    );
  } catch (err) {
    next(err);
  }
};

// POST /api/auth/login
export const login = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body as LoginBody;

    if (!email || !password) {
      sendError(res, 'Email and password are required', 400);
      return;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      sendError(res, 'Invalid email or password', 401);
      return;
    }

    if (!user.isActive) {
      sendError(res, 'Account is deactivated. Contact support.', 403);
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      sendError(res, 'Invalid email or password', 401);
      return;
    }

    const token = generateToken({ userId: user.id, email: user.email, role: user.role });

    sendSuccess(res, {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    }, 'Login successful');
  } catch (err) {
    next(err);
  }
};

// GET /api/auth/me  (protected)
export const getMe = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        emailVerified: true,
        createdAt: true,
        farm: {
          select: { id: true, name: true, city: true, province: true },
        },
        retailer: {
          select: { id: true, storeName: true, city: true, province: true },
        },
        distributor: {
          select: { id: true, companyName: true, city: true, province: true },
        },
      },
    });

    if (!user) {
      sendError(res, 'User not found', 404);
      return;
    }

    sendSuccess(res, { user });
  } catch (err) {
    next(err);
  }
};

// PATCH /api/auth/me  (protected)
export const updateMe = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { firstName, lastName, phone } = req.body as {
      firstName?: string;
      lastName?: string;
      phone?: string;
    };

    const user = await prisma.user.update({
      where: { id: userId },
      data: { firstName, lastName, phone },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
      },
    });

    sendSuccess(res, { user }, 'Profile updated');
  } catch (err) {
    next(err);
  }
};

// PATCH /api/auth/change-password  (protected)
export const changePassword = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { currentPassword, newPassword } = req.body as {
      currentPassword: string;
      newPassword: string;
    };

    if (!currentPassword || !newPassword) {
      sendError(res, 'currentPassword and newPassword are required', 400);
      return;
    }

    if (newPassword.length < 8) {
      sendError(res, 'New password must be at least 8 characters', 400);
      return;
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      sendError(res, 'User not found', 404);
      return;
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      sendError(res, 'Current password is incorrect', 401);
      return;
    }

    const hashed = await bcrypt.hash(newPassword, 12);
    await prisma.user.update({ where: { id: userId }, data: { password: hashed } });

    sendSuccess(res, null, 'Password changed successfully');
  } catch (err) {
    next(err);
  }
};
