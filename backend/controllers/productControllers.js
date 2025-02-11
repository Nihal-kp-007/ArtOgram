import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// const addToCart = asyncHandler(async (req, res) => {
//   const { userId, id: productId } = req.body;
//   const user = await User.findOne({ _id: userId });

//   if (!user) {
//     res.status(404);
//     throw new Error("User not found");
//   }

//   const productExists = user.cart.includes(productId);

//   if (productExists) {
//     res.status(400).json({ message: "Product is already in the cart" });
//   } else {
//     const isUpdate = await User.updateOne(
//       { _id: userId },
//       {
//         $addToSet: { cart: productId },
//       }
//     );

//     if (isUpdate.modifiedCount > 0) {
//       res.json({ message: "Product added to cart" });
//     } else {
//       res.status(404);
//       throw new Error("Cart not found");
//     }
//   }
// });

// const getCartItems = asyncHandler(async (req, res) => {
//   console.log("afdsfdg");
//   const { userId } = req.body;
//   console.log(userId);
//   console.log(userId);
//   const data = await User.findOne({ _id: userId }).populate("cart");
//   if (data) {
//     res.json(data);
//   } else {
//     res.status(404);
//     throw new Error("cart items not found");
//   }
// });

// const deleteCartItem = asyncHandler(async (req, res) => {
//   const { id } = req.body;
//   const response = await Product.deleteMany({ id: { $in: id } });
//   if (response) {
//     res.send({ code: 200, message: "delete" });
//   } else {
//     res.send({ code: 200, message: "server err" });
//   }
// });

export { getProducts, getProductById,};
