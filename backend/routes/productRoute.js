const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts);

router.patch("/:id", updateProduct);

module.exports = router;
