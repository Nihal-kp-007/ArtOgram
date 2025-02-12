import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import WishList from "../models/wishListModel.js";

const addTOwisList = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const existingwishListItem = await WishList.findOne({
    userId: _id,
    productId,
  });
  if (existingwishListItem) {
    res.status(400).json({ message: "Product is already in the WishList" });
  } else {
    const newWishListItem = new WishList({
      userId: _id,
      productId,
    });
    await newWishListItem.save();

    res.json({ message: "Product added to WishList" });
  }
});

const getWishListItems = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const wishListItems = await WishList.find({ userId: _id }).populate("productId");
  res.json({wishListItems});
});

export { addTOwisList, getWishListItems };
