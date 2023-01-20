import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import usersRouter from "./routers/users.js";
import productsRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";

const app = express();
dotenv.config();

app.use(express.json());

connectDB();
const PORT = process.env.PORT || 3008;

app.use(express.json()); //I added this to destructure the contents of req.body(). installing parser didn't work!!

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", orderRouter);

const server = app.listen(PORT, console.log(`Server started on port ${PORT}`));

// app.listen(
//   process.env.PORT,
//   console.log(`server is listening to port: ${process.env.PORT} `)
// );
