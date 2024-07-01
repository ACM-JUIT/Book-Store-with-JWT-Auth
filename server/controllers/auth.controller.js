import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !username.trim() === "" ||
    !email.trim() === "" ||
    !password.trim() === ""
  ) {
    return next(errorHandler(400, "Please provide all the fields"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    //JWT AUTH
    const token = createToken(newUser._id);

    res.status(200).json({ email, token });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {};
