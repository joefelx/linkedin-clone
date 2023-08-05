import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User";
import UserType from "../types/User";

const generateToken = (user: UserType) => {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};

async function authenticateUser(email: string, password: string) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid username or password");

  const isPasswordValid: Boolean = await bcrypt.compare(
    password,
    user.password
  );
  if (!isPasswordValid) throw new Error("Invalid username or password");

  const token = generateToken(user);

  return { token, user };
}

async function registerUser(name: string, email: string, password: string) {
  const user = new User({ name, email, password });
  await user.save();
  const token = generateToken(user);

  return { token, user };
}

export { authenticateUser, registerUser };
