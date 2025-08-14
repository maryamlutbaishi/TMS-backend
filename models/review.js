const { Schema, model } = require("mongoose");


const reviewSchema = new Schema({
  reating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  mood: {
    type: String,
  },
});

const Review = model("Review", reviewSchema);
module.exports = Review;
