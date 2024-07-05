import User from "../models/user.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const updateUser = async (req, res, next) => {
  //Check if the user is logged in
  if (req.user._id !== req.params.userId) {
    return next(
      errorHandler(403, "You are not authorized to perform this action")
    );
  }
  //Check if password exists
  if (req.body.password) {
    //Password length should be more then 6
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password must be at least 6 characters long")
      );
    }
    //Hash the password
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  //Check if username exists
  if (req.body.username) {
    //Username length should be between 7 and 20
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters long")
      );
    }
    //Username must not contain spaces
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username must not contain spaces"));
    }
    //Username must be lowercase
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowerCase"));
    }
    //Username can only contain letters and numbers
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
  }
  try {
    //Update the user
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  //Check if user is logged in
  if (req.user._id != req.params.userId) {
    return next(
      errorHandler(403, "You are not authorized to perform this action")
    );
  }
  try {
    //Delete the user
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res, next) => {
  try {
    //Clear the cookie i.e sign Out
    res.clearCookie("access_token");
    res.status(200).json({ message: "Signout successful" });
  } catch (err) {
    next(err);
  }
};
