const petsModel = require('../models/petsModel');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  // return all pets
  try {
    const pets = await petsModel.find();
    res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.get('/:id', async (req, res) => {
  // return specific pet
  try {
    const {id} = req.params;
    const getPet = await petsModel.findById(id);
    res.status(200).json(getPet);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.post('/', async (req, res) => {
  // create new pet (admin)
  try {
    const {pet_name, pet_image, pet_sex, pet_desc, pet_type} = req.body;

    if (!pet_name || !pet_image || !pet_sex || !pet_type) {
      return res.status(400).json({message:"Please fill in the required fields."})
    }

    const newPet = await petsModel.create({
      pet_name
      ,pet_image
      ,pet_sex
      ,pet_desc
      ,pet_type
    });

    res.status(200).json({message:"Created a new pet successfully!", newPet})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.put('/:id', async (req, res) => {
  // update pet (admin)
  try {
    const {id} = req.params;
    const {pet_name, pet_image, pet_sex, pet_desc, pet_type} = req.body;

    const updateData = {
      pet_name
      ,pet_image
      ,pet_sex
      ,pet_desc
      ,pet_type
    };

    const putPet = await petsModel.findByIdAndUpdate(id, updateData, {new:true});

    if (!putPet) {
      return res.status(404).json({message:"Pet not found"});
    }

    res.status(200).json({message: "Pet updated successfully!", putPet});
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

router.delete('/:id', async (req, res) => {
  // delete pet (admin)
  try {
    const id = req.params;
    const deletePet = await petsModel.findByIdAndDelete(id);

    if (!deletePet) {
      return res.status(404).json({message:"Pet not found"});
    }

    res.status(200).json({message:"Pet deleted successfully"});
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
});

module.exports = router;
