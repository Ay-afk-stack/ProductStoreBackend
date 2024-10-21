require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection Successful!");
  } catch (err) {
    console.error(`error:${err}`);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
