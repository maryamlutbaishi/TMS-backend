const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  mood: {
    type: String,
  },
});

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  cast: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  relaceDate: {
    type: Date,
  },
  review: [reviewSchema],
});

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  movie: [movieSchema],
});
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lists: [ListSchema],
  favorite: {
    type: [movieSchema],
    default: [],
  },
  toWatch: {
    type: [movieSchema],
    default: [],
  },
  watched: {
    type: [movieSchema],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
const List = mongoose.model("List", ListSchema);
const Review = mongoose.model("Review", reviewSchema);
const Movie = mongoose.model("Movie", movieSchema);
module.exports = {
  List,
  Review,
  Movie,
  User,
};
