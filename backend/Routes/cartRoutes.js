import express from "express";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../controllers/cartControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();
router.route("/:userId").get(protect, getCartItems);
router.route("/add").post(protect, addToCart);
router.route("/remove").delete(protect, removeFromCart);

export default router;
