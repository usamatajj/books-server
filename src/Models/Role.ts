import { model, Schema, Model, Document } from 'mongoose';

const thisSchema = new Schema({

  role_name: {
    type: String
  },
  status: {
    type: String
  }
});

// module.exports = mongoose.model("User", userSchema);
export const Role = model('Role', thisSchema);
