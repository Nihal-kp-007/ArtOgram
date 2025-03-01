import express from "express";
import { getProductById, getProducts, productReview } from "../controllers/productControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();
router.route("/").get(getProducts);
router.route("/:id").get(getProductById)
router.route("/:id/review").put(protect ,productReview)

export default router;
