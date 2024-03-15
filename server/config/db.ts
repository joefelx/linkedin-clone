import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect("");
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

export default connectDB;
