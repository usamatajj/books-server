import { model, Schema, Model, Document } from 'mongoose';
import mongoose from "mongoose"

const bookSchema = new Schema({

  _id: {
    type: String,
    default: () => Math.random().toString(36).substring(2), // Generates a random string
  },
  
  bookName: {
    type: String
  },

  author: {
    type: String
  },

  boardId: { type: Schema.Types.String, 
    ref: 'Board',
    required: true,
    validate: {
      validator: async function (value) {
        const doc = await mongoose.model('Board').findById(value);
        return doc !== null;
      },
      message: 'Board does not exist.',
    },
  },

  classId: { type: Schema.Types.String, 
    ref: 'Class',
    required: true,
    validate: {
      validator: async function (value) {
        const doc = await mongoose.model('Class').findById(value);
        return doc !== null;
      },
      message: 'Class does not exist.',
    },
  },

  status :{
    type :String,
    default: 'active'
  },

  image:{
    type : String
  },
  previewPath: {
    type: String
  },

  pdfPath: { type: String},

  quantityAvailable: {type: Number}


});

export const Book = model('Book', bookSchema);
