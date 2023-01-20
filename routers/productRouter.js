import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  listAllProducts,
  listProductsByName,
} from "../controllers/productsController.js";
import validateProduct from "../middlewares/validation.js";
import productSchema from "../schemas/productSchema.js";

const productsRouter = Router();

productsRouter
  .route("/")
  .post(validateProduct(productSchema), addProduct)
  .get(validateProduct(productSchema), listAllProducts);
productsRouter
  .route("/:productName")
  .put(validateProduct(productSchema), editProduct)
  .get(validateProduct(productSchema), listProductsByName)
  .delete(validateProduct(productSchema), deleteProduct);

export default productsRouter;
