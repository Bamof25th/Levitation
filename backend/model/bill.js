import mongoose from "mongoose";


const billSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    items: {
      type: [],
      ref: "Item",
      required: true,
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Bill = mongoose.model("Bill", billSchema);

export default Bill;
