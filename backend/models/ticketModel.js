import mongoose from 'mongoose';

const { Schema } = mongoose;

const ticketSchema = new Schema({
  ticket_id: {
    type: Number,
    required: true,
    index: true,
  },
  adopter_id: [
    { type: Schema.Types.ObjectId, ref: 'Users', required: true }
  ],
  pet_id: [
    { type: Schema.Types.ObjectId, ref: 'Pets', required: true }
  ],
  responder_id: [
    { type: Schema.Types.ObjectId, ref: 'Users' }
  ],
  message: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'Pending',
  },
  ticket_opened: {
    type: Date,
    required: true,
  },
  ticket_handled: Date,
  ticket_closed: Date,
}, {
  timestamps: true,
});

const ticketModel = mongoose.model('Tickets', ticketSchema);
export default ticketModel;
