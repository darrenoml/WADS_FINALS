import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatbotLogSchema = new Schema({
  ticket_id: [
    { type: Schema.Types.ObjectId, ref: 'Tickets', required: true }
  ],
  user_question: {
    type: String,
    required: true,
  },
  bot_answer: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const chatbotLogModel = mongoose.model('ChatbotLog', chatbotLogSchema);
export default chatbotLogModel;
