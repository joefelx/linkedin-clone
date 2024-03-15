import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect("mongodb+srv://joefelix:mynameisjoefelix2003@joedb.a0ltp9j.mongodb.net/linkedin?retryWrites=true&w=majority");
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

export default connectDB;
