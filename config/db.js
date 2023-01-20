import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
