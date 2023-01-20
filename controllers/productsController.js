import expressAsyncHandler from "express-async-handler";
import Product from "../models/products.js";

export const addProduct = expressAsyncHandler(async (req, res) => {
  const {
    productName,
    brand,
    costPrice,
    sellingPrice,
    category,
    quantityInStocks,
    buyDate,
    description,
  } = req.body;
  try {
    const products = await Product.create({
      productName,
      brand,
      costPrice,
      sellingPrice,
      category,
      quantityInStocks,
      buyDate,
      description,
    });
    res.send({
      message: "Product Added",
      products,
    });
  } catch (error) {
    res.send({
      message: "Failed to add product.",
    });
  }
});

export const editProduct = expressAsyncHandler(async (req, res) => {
  const {
    productName,
    brand,
    costPrice,
    sellingPrice,
    category,
    quantityInStocks,
    buyDate,
    description,
  } = req.body;
  try {
    const products = await Product.findOneAndUpdate(
      {
        productName,
      },
      {
        productName,
        brand,
        costPrice,
        sellingPrice,
        category,
        quantityInStocks,
        buyDate,
        description,
      }
    );
    res.send({
      message: "product edited",
      products,
    });
  } catch (error) {
    res.send({
      message: "Failed to edit Product.",
    });
  }
});

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { productName } = req.params;
    const products = await Product.findOneAndDelete({
      productName: productName,
    });
    res.send({
      message: "Product Deleted",
      products,
    });
  } catch (error) {
    res.send({
      message: "Failed to delete product",
    });
  }
});

export const listProductsByName = expressAsyncHandler(async (req, res) => {
  try {
    const { productName } = req.params;
    const products = await Product.findOne({ productName: productName });
    res.send({
      message: "Product found-",
      products,
    });
  } catch (error) {
    res.send({
      message: "Product not found!!",
    });
  }
});

export const listAllProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({
      products,
    });
  } catch (error) {
    res.send({
      message: "Error Listing Items",
    });
  }
});
