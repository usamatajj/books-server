import { model, Schema, Model, Document } from 'mongoose';

const classSchema = new Schema({
  _id: {
    type: String,
    default: () => Math.random().toString(36).substring(2), // Generates a random string
  },
  className: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  gradee: {
    type: String,
  },
});

export const Class = model('Class', classSchema);
