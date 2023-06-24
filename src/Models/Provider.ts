import { model, Schema, Model, Document } from 'mongoose';

const thisSchema = new Schema({

  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  rating: {
    type: String
  },
  profile_pic: {
    type: String
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  menu_ids: [{ type: Schema.Types.ObjectId, ref: 'Menu' }],
  order_ids: [{ type: Schema.Types.ObjectId, ref: "Order" }]
});

thisSchema.index({ location: "2dsphere" })
export const Provider = model('Provider', thisSchema);
