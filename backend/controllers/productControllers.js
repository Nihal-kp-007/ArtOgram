import Product from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export { getProducts };
