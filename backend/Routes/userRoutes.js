import express from "express";
import {
  addAddress,
  authUser,
  deleteUser,
  getAddress,
  getAllUsers,
  getUser,
  logout,
  registerUser,
  updateAddress,
  updateUser,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();
router.route("/").post(registerUser).get(protect,getAllUsers);
router.route("/auth").post(authUser);
router.route("/profile").put(protect, updateUserProfile);
router.route("/logout").post(logout);
router.route("/address").post(protect, addAddress).get(protect, getAddress)
router.route("/updateaddress").put(protect, updateAddress)
router.route("/:id").put(protect, updateUser).get(protect,getUser).delete(protect,deleteUser)

export default router;
