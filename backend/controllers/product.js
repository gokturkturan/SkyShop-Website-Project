import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/product.js";

// @desc Fetch all products
// @route GET /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// @desc Fetch a product
// @route GET /api/product/:id
const getProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error("Product not Found");
  }
  res.json(product);
});

const productController = { getProducts, getProduct };
export default productController;