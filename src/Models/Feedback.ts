import { model, Schema, Model, Document } from 'mongoose';

const thisSchema = new Schema({

  rating: {
    type: Number
  },
  feedback: {
    type: String
  },
  provider_id: { type: Schema.Types.ObjectId, ref: 'Provider' },
  customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
});

// module.exports = mongoose.model("User", userSchema);
export const Feedback = model('Feedback', thisSchema);
