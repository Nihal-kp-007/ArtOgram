import express from "express";
import { addOrderItems, getMyOrder } from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();
router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrder);

export default router;
