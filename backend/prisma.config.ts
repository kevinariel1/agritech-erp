import { defineConfig } from '@prisma/config'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  datasource: {
    // This replaces the url in your schema
    url: process.env.DATABASE_URL 
  }
})