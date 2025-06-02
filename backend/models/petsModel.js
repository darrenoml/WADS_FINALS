import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  // Add other pet fields as needed
}, {
  timestamps: true,
});

const petsModel = mongoose.model('Pets', petSchema);
export default petsModel;
