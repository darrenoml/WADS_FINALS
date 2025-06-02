import express from 'express';
import mongoose from 'mongoose';
import petsRoutes from './routes/pets.js';
import ticketsRoutes from './routes/tickets.js';
import chatbotLogRoutes from './routes/chatbotLog.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/pets', petsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/chatbotlog', chatbotLogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
