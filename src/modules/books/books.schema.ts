import * as mongoose from 'mongoose';

export const booksSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        unique: true,
        required: true
    },
    price:{
        type: String,
        unique: true
    },
})