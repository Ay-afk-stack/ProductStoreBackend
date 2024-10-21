require("dotenv").config();

const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoute");

app.use(express.json());

const connectToDatabase = require("./database/database");

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  connectToDatabase();
  console.log("Server started at http://localhost:5000");
});
