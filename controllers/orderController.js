import asyncHandler from "express-async-handler";
import Order from "../models/Order";

// Create a new order
const createOrder = asyncHandler(async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.send({ message: "Order created successfully", data: order });
  } catch (error) {
    res.status(400).send({ message: "Failed to create order", error });
  }
});
// Get all orders
const getAllOrder = asyncHandler(async (req, res) => {
  try {
    const orders = await find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific order
const getSpecificOrder = asyncHandler(getOrder, (req, res) => {
  res.json(res.order);
});
// Update an existing order
const updateOrder = asyncHandler(async (req, res) => {
  try {
    const order = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) return res.status(404).send({ message: "Order not found" });
    res.send({ message: "Order updated successfully", data: order });
  } catch (error) {
    res.status(400).send({ message: "Failed to update order", error });
  }
});

// Delete an order
const deleteOrder = asyncHandler(getOrder, async (req, res) => {
  try {
    await res.order.remove();
    res.json({ message: "Deleted Order" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getOrder = asyncHandler(async (req, res, next) => {
  let order;
  try {
    order = await findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: "Cannot find order" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.order = order;
  next();
});

export { createOrder, getAllOrder, getSpecificOrder, updateOrder, deleteOrder };
