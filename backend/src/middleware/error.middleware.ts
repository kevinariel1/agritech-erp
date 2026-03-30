import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Unhandled error:', err);

  // Prisma known request error
  if (err.constructor.name === 'PrismaClientKnownRequestError') {
    const prismaError = err as Error & { code: string; meta?: { target?: string[] } };

    if (prismaError.code === 'P2002') {
      const field = prismaError.meta?.target?.[0] ?? 'field';
      sendError(res, `A record with this ${field} already exists`, 409);
      return;
    }

    if (prismaError.code === 'P2025') {
      sendError(res, 'Record not found', 404);
      return;
    }
  }

  sendError(res, err.message || 'Something went wrong', 500);
};

export const notFound = (_req: Request, res: Response): void => {
  sendError(res, 'Route not found', 404);
};
