import mongoose from "mongoose";

const InvestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  security_type: { type: String, required: true },
  multiple_invest: { type: Number, required: true },
  profile_img: { type: String, default: null },
  min_invest: { type: Number, required: true },
  get_price: { type: Number, required: true },
  total_price: { type: Number, required: true },
  maturity:{type:Date,required:true},
  tags: { type: String, default:''},
});

export default mongoose.models.Invest || mongoose.model("Invest", InvestSchema);
