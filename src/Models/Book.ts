import { model, Schema, Model, Document } from 'mongoose';

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

  boardId: { type: Schema.Types.ObjectId, ref: 'Board' },

  classId: { type: Schema.Types.ObjectId, ref: 'Class' },

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
