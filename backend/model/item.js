import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the item schema for products
const itemSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productQty: {
      type: Number,
      required: true,
      min: 1,
    },
    productRate: {
      type: Number,
      required: true,
      min: 0,
    },
    productTotal: {
      type: Number,
      required: true,
      min: 0,
      default: function () {
        return this.productQty * this.productRate;
      },
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
