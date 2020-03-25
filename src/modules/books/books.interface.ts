import * as mongoose from 'mongoose';

export interface Books extends mongoose.Document {
    id:String,
    name:String,
    price:Number,
}