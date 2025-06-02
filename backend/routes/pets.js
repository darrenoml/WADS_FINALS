import express from 'express';
import petsModel from '../models/petsModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pets = await petsModel.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add other CRUD routes here (create, update, delete)

export default router;
