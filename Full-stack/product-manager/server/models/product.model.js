const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters long"]
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [.1, "Its gotta cost something!"],
      max: [9999, "We dont support products that expensive"]
    },
    description: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Surely that doesn't describe it..."],
      maxlength: [150, "Dont get crazy thats to long!"]
    }
  }, { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
