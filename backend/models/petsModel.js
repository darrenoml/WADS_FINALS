import mongoose from 'mongoose';

const petSchema = mongoose.Schema({
    pet_name: {
        type: String
        ,required: true
        ,index: true
    },
    pet_image: {
        type: String
        ,required: true
    },
    pet_sex: {
        type: char
        , required: true
    },
    pet_desc: {
        type: String
        ,maxLength: 500
        ,default: ""
    },
    pet_type: {
        type: String
        ,required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Pets', petSchema)