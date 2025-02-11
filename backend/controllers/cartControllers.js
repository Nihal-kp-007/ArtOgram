import asyncHandler from "../middlewares/asyncHandler.js";
import Cart from "../models/cartModel.js";
import User from "../models/userModel.js";

const addToCart = asyncHandler(async (req, res) => {
  const { userId, id } = req.body;
  const user = await User.findOne({ _id: userId });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const existingCartItem = await Cart.findOne({ userId, id });
  if (existingCartItem) {
    res.status(400).json({ message: "Product is already in the cart" });
  } else {
    const newCartItem = new Cart({
      userId,
      id,
    });
    await newCartItem.save();

    res.json({ message: "Product added to cart" });
  }
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;

  const cartItem = await Cart.findOneAndDelete({
    userId: userId,
    productId: productId,
  });

  if (!cartItem) {
    res.status(400).json({ message: "Product not found in cart" });
  } else {
    res.json({ message: "Product removed from cart" });
  }
});

const getCartItems = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const cartItems = await Cart.find({ userId }).populate("id");

  res.json(cartItems);
});

export { addToCart, removeFromCart, getCartItems };
