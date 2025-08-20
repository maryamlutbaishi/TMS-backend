const mongoose = require("mongoose");
const bcrypt =require("bcrypt")
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
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
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
    required: [true, "username is required"],
    unique: [true, "username already taken please pick another username"],
  },
  passwordHash: {
    type: String,
    required: [true, "password is required"],
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
userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.passwordHash);
};
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
