import express from 'express';
import chatbotLogModel from "../models/chatbotLogModel.js";

const router = express.Router();

router.get('/', async (req, res) => {
  // return all chatbot logs
  try {
    const logs = await chatbotLogModel.find();
    res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.get('/:id', async (req, res) => {
  // return specific chatbot log
  try {
    const {id} = req.params;
    const getLog = await chatbotLogModel.findById(id);
    res.status(200).json(getLog);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.post('/', async (req, res) => {
  // create new chatbot log
  try {
    const {ticket_id, user_question, bot_answer} = req.body;

    if (!ticket_id || !user_question || !bot_answer) {
      return res.status(400).json({message:"Please fill in the required fields."})
    }

    const newLog = await chatbotLogModel.create({
      ticket_id
      ,user_question 
      ,bot_answer
    });

    res.status(200).json({message:"Created a new log successfully!", newLog})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.delete('/:id', async (req, res) => {
  // delete chatbot log (admin)
  try {
    const id = req.params;
    const deleteLog = await chatbotLogModel.findByIdAndDelete(id);

    if (!deleteLog) {
      return res.status(404).json({message:"Log not found"});
    }

    res.status(200).json({message:"Log deleted successfully"});
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

export default router;
