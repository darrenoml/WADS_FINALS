import express from 'express';
import ticketModel from '../models/ticketModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tickets = await ticketModel.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add other CRUD routes here (create, update, delete)

export default router;
