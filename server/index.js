import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(express.json());
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
