import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AgriTech ERP API is running' });
});

// Routes will be added here
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// etc...

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});