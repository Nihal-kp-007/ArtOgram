import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keywordCondition = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};
  const count = await Product.countDocuments({ ...keywordCondition });
  const products = await Product.find({ ...keywordCondition })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

const productReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  const alreadyReviewed = product.reviews.find((review) =>
    review.user.toString() === req.user._id.toString()
  );
  if (alreadyReviewed) {
    res.status(400);
    throw new Error("You have already reviewed this product.");
  }else{
    const review = {
        name: req.user.name,
        user: req.user._id,
        rating: Number(rating),
        comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
    
      const updateReview = await product.save();
    
      res.status(201).json(updateReview);
  }
  
});


export { getProducts, getProductById, productReview};
