import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect("mongodb://127.0.0.1/linkedin");
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

export default connectDB;
