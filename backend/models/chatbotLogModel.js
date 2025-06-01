import mongoose from 'mongoose';
import ticketModel from "ticketModel.js";

const chatbotLogSchema = mongoose.Schema({
    ticket_id:[
        {type: Schema.Types.ObjectId, ref: 'Tickets', required:true}
    ],
    user_question:{
        type:String
        ,required:true
    },
    bot_answer:{
        type:String
        ,required:true
    }
}, {
    timestamps: true
})

export default mongoose.model('ChatbotLog', chatbotLogSchema)