import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect("mongodb://localhost/linkedin");
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

export default connectDB;
