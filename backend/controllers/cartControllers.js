import asyncHandler from "../middlewares/asyncHandler.js";
import Cart from "../models/cartModel.js";
import User from "../models/userModel.js";

const addToCart = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const existingCartItem = await Cart.findOne({ userId: _id, productId });
  if (existingCartItem) {
    res.status(400).json({ message: "Product is already in the cart" });
  } else {
    const newCartItem = new Cart({
      userId: _id,
      productId,
    });
    await newCartItem.save();

    res.json({ message: "Product added to cart" });
  }
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const { _id } = req.user;
  const cartItem = await Cart.findOneAndDelete({
    userId: _id,
    productId,
  });

  if (!cartItem) {
    res.status(400).json({ message: "Product not found in cart" });
  } else {
    res.json({ message: "Product removed from cart" });
  }
});

const getCartItems = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const cartItems = await Cart.find({ userId: _id }).populate("productId");

  const subTotalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.productId.price;
    return total + itemPrice;
  }, 0);

  // Shipping cost logic
  const shippingPrice = subTotalPrice == 0 ? 0 : 5;

  // Calculate the total price (subtotal + shipping if needed)
  const totalPrice =
    subTotalPrice >= 100 ? subTotalPrice : subTotalPrice + shippingPrice;

  res.json({
    cartItems,
    totalPrice,
    subTotalPrice,
    shippingPrice: subTotalPrice >= 100 ? 0 : shippingPrice,
  });
});

export { addToCart, removeFromCart, getCartItems };
