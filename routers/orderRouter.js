import express from "express";
import { createOrder, getAllOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/").get(getAllOrder).post(createOrder);

export default orderRouter;
