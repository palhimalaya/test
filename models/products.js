import mongoose, { mongo } from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
    },
    quantityInStocks: {
      type: Number,
      required: true,
    },
    buyDate: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Products", productSchema);

export default Product;
