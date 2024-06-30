import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();
const port = 3000;
app.use(express.json());
dotenv.config();

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

app.get("/", (req, res) => {
  res.send("working");
});

//routes
app.use("/api/auth", authRoutes);
