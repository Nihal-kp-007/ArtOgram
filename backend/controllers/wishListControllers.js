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
  if (req.method === "POST") {
    const existingWishListItem = await WishList.findOne({
      userId: _id,
      productId,
    });
    if (existingWishListItem) {
      await WishList.findOneAndDelete({
        userId: _id,
        productId,
      });
      res.json({ message: "Product removed from WishList" });
    } else {
      const newWishListItem = new WishList({
        userId: _id,
        productId,
      });
      await newWishListItem.save();
      res.json({ message: "Product added to WishList" });
    }
  }
});

const getWishListItems = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const wishListItems = await WishList.find({ userId: _id }).populate(
    "productId"
  );
  res.json({ wishListItems });
});

export { addTOwisList, getWishListItems };
