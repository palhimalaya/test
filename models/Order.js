import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending", required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
