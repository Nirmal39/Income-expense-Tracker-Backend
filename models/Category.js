import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    type: {
        type: String,
        default:"expense"
    },
}, {timestamps: true})

export const Category = mongoose.model('Category', schema)