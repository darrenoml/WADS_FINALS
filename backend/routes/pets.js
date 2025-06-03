import express from 'express';
import petsModel from '../models/petsModel.js';
import auth from '../middlewares/auth.js';
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
router.post('/add', auth, async (req, res) => {
  try {
    const newPet = new petsModel(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;