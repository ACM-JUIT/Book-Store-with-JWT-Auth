import express from "express";
import { authRoutes, userRoutes } from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB!!");
  })
  .catch((err) => {
    console.log(err, "error occured");
  });

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

app.get("/test", (req, res) => {
  res.send("working");
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

//middleware to handle errors and stuff
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
