import { model, Schema, Model, Document } from 'mongoose';

const boardSchema = new Schema({
  _id: {
    type: String,
    default: () => Math.random().toString(36).substring(2), // Generates a random string
  },
  boardName: {
    type: String
  },
  image: {
    type: String
  },

});



export const Board = model('Board', boardSchema);
