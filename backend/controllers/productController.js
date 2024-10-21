const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error("Error in fetching products:", err);
    res.status(500).json({ success: false, messagee: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }
  try {
    await Product.create({
      name,
      price,
      image,
    });
    res
      .status(201)
      .json({ success: true, message: "Product created successfully!" });
  } catch (err) {
    console.error("Error in create product:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "No Product Found!" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: `Product deleted successfully!` });
  } catch (err) {
    console.error("Error in deleting product:", err);
    res.status(500).json({ success: false, message: "Server Error!" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    await Product.findByIdAndUpdate(id, { name, price, image });
    res
      .status(200)
      .json({ success: true, message: "Product updated successfully!" });
  } catch (err) {
    res.status(500).json({ sucess: false, message: "Server Error" });
  }
};

module.exports = { getProducts, createProduct, deleteProduct, updateProduct };
