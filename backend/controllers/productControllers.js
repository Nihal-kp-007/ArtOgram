import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id).populate("user");
  console.log(product.user)
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


export { getProducts, getProductById,};
