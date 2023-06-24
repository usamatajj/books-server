import { model, Schema, Model, Document } from 'mongoose';

const userSchema = new Schema({

  userName: {
    type: String
  },
  phone: {
    type: String
  },

  status :{
    type :String,
    default: 'active'
  },

  userType: {
    type: String
  },

  profilePic: { type: String},
  purchasedBooks: { type: Schema.Types.ObjectId, ref: 'Book' },

});

export const User = model('User', userSchema);
