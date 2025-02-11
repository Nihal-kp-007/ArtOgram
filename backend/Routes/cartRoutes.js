import express from "express";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cartControllers.js";

const router = express.Router();
router.route("/add").post(addToCart);
router.route("/remove").delete(removeFromCart);
router.route("/:userId").get(getCartItems);

export default router;
