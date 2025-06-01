const express = require('express');
const router = express.Router();
import ticketModel from "ticketModel.js";

router.post('/', async (req, res) => {
  // submit adoption request
  try {
    const {adopter_id, pet_id, message, status, ticket_opened} = req.body;

    if (!adopter_id || !pet_id || !message || !status || !ticket_opened) {
      return res.status(400).json({message:"Please fill in the required fields."})
    }

    const newTicket = await ticketModel.create({
      adopter_id
      ,pet_id
      ,message
      ,status
      ,ticket_opened
    });

    res.status(200).json({message:"Created a new ticket successfully!", newTicket})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.get('/:userId', async (req, res) => {
  // get all tickets by pet adopter
  try {
    const {id} = req.params;
    const tickets = await ticketModel.find({adopter_id: id});
    res.status(200).json(tickets);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.get('/all', async (req, res) => {
  // admin view all tickets
  try {
    const tickets = await ticketModel.find();
    res.status(200).json(tickets);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.patch('/:id/status', async (req, res) => {
  // update ticket status
  try {
    const {id} = req.params;
    const {adopter_id, pet_id, message, status, ticket_opened} = req.body;

    const updateData = {
      adopter_id
      ,pet_id
      ,message
      ,status
      ,ticket_opened
    };

    const putTicket = await ticketModel.findByIdAndUpdate(id, updateData, {new:true});

    if (!putTicket) {
      return res.status(404).json({message:"Ticket not found"});
    }

    res.status(200).json({message: "Ticket updated successfully!", putTicket});
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

module.exports = router;