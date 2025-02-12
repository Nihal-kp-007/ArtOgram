import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import { addTOwisList, getWishListItems } from "../controllers/wishListControllers.js";

const router = express.Router();
router.route("/getProducts").get(protect, getWishListItems);
router.route("/add").post(protect, addTOwisList);
// router.route("/remove").delete(protect, removeFromCart);

export default router;
