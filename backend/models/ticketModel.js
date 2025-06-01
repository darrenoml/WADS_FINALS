import mongoose from "mongoose";
import petsModel from "petsModel.js";
import userModel from "userModel.js";

const ticketSchema = mongoose.Schema({
    ticket_id:{
        type:Int
        ,required:true
        ,index:true
    },
    adopter_id:[
        {type: Schema.Types.ObjectId, ref: 'Users', required:true}
    ],
    pet_id:[
        {type: Schema.Types.ObjectId, ref: 'Pets', required:true}
    ],
    responder_id:[
        {type: Schema.Types.ObjectId, ref: 'Users'}
    ],
    message:{
        type: String
        ,default: ""
    },
    status:{
        type: String
        ,default: "Pending"
    },
    ticket_opened:{
        type: Date
        ,required:true
    },
    ticket_handled:{
        type: Date
    },
    ticket_closed:{
        type:Date
    }
}, {
    timestamps:{
        createdAt: true
    }
})

export default mongoose.model('Tickets', ticketSchema)