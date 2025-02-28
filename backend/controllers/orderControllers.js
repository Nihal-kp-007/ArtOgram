import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
  console.log("first");
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    paymentResult,
    subTotalPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (cartItems && cartItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
    const order = new Order({
      orderItems: cartItems.map((x) => ({
        ...x,
        product: x.productId._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      paymentResult,
      subTotalPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(200).json(createOrder);
  }
});

const getMyOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate({
    path: "orderItems",
    populate: {
      path: "product",
      model: "Product",
    },
  });
  res.json(orders);
});

export { addOrderItems, getMyOrder };
