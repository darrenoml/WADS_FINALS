import express from 'express';
import chatbotLogModel from '../models/chatbotLogModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const logs = await chatbotLogModel.find();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const log = await chatbotLogModel.findById(id);
    if (!log) return res.status(404).json({ message: "Log not found" });
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { ticket_id, user_question, bot_answer } = req.body;

    if (!ticket_id || !user_question || !bot_answer) {
      return res.status(400).json({ message: "Please fill in the required fields." });
    }

    const newLog = await chatbotLogModel.create({
      ticket_id,
      user_question,
      bot_answer
    });

    res.status(201).json({ message: "Created a new log successfully!", newLog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLog = await chatbotLogModel.findByIdAndDelete(id);
    if (!deletedLog) {
      return res.status(404).json({ message: "Log not found" });
    }
    res.status(200).json({ message: "Log deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
