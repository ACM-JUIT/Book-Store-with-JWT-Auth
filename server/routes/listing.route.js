import express from "express";
import { addListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/addlisting", verifyToken, addListing);

export default router;
