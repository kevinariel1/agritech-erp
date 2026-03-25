import { PrismaClient } from '@prisma/client'
import { PrismaPostgres } from '@prisma/adapter-pg'
import pg from 'pg'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPostgres(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const hash = (pw) => hashSync(pw, 10);

  // Users
  const admin = await prisma.user.create({ data: {
    name: 'Admin Utama', email: 'admin@agri.com',
    passwordHash: hash('password123'), role: 'ADMIN'
  }});
  const farmer = await prisma.user.create({ data: {
    name: 'Budi Santoso', email: 'budi@agri.com',
    passwordHash: hash('password123'), role: 'FARMER'
  }});
  const buyer = await prisma.user.create({ data: {
    name: 'Resto Nusantara', email: 'buyer@agri.com',
    passwordHash: hash('password123'), role: 'BUYER'
  }});

  // Warehouse
  const warehouse = await prisma.warehouse.create({ data: {
    name: 'Gudang Utama BSD', location: 'Tangerang Selatan', capacityKg: 10000
  }});

  // Farm + Crop + Batch
  const farm = await prisma.farm.create({ data: {
    ownerId: farmer.id, name: 'Kebun Budi',
    location: 'Bogor, Jawa Barat', areaHectares: 2.5
  }});
  const crop = await prisma.crop.create({ data: {
    farmId: farm.id, name: 'Cabai Merah', variety: 'TM 999',
    plantedAt: new Date('2025-01-01'), expectedHarvest: new Date('2025-03-01')
  }});
  await prisma.batch.create({ data: {
    cropId: crop.id, warehouseId: warehouse.id,
    quantityKg: 500, status: 'available'
  }});

  console.log('Seed complete');
}

main().catch(console.error).finally(() => prisma.$disconnect());