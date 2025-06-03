import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import petsRoutes from './routes/pets.js';
import ticketsRoutes from './routes/tickets.js';
import chatbotLogRoutes from './routes/chatbotLog.js';
import authRoutes from './routes/auth.js'; // <-- Add this if not yet included

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// ✅ CORS configuration to allow credentials
app.use(cors({
  origin: 'http://localhost:3023', // replace with your frontend URL in prod
  credentials: true
}));

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/pets', petsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/chatbotlog', chatbotLogRoutes);
app.use('/api/users', authRoutes); // <-- login/register with cookies

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
