const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  images: {
    type: Array,
    default: [],
  },
  description: String,
  content: String,
  colors: Array,
  sizes: Array,
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  rating: Number,
  category: {
    type: String,
    required: true,
  },
  company: String,
});

module.exports = mongoose.model("Products", productSchema);
