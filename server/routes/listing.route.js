import express from "express";
import {
  addListing,
  deleteListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/add", verifyToken, addListing);
router.delete("/delete:listingid", verifyToken, deleteListing);

export default router;
