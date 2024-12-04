import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema(
  {
    email: { type: String, required: true ,unique: true },
    deletedAt: { type: Date, default: null }, // for checking if user have unsubscribed
  },
  { timestamps: true }
);
const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscribeSchema);

export default Subscriber;
