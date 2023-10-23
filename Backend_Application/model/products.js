const mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  productname: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 300
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = new mongoose.model("product", ProductSchema);