import express from "express";
import {
  addListing,
  deleteListing,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/add", verifyToken, addListing);
router.delete("/delete:listingid", verifyToken, deleteListing);
router.put("/update:listingid", verifyToken, updateListing);

export default router;
