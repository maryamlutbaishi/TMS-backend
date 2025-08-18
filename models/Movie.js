const mongoose = require("mongoose");

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
  review:[reviewSchema],
});

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  movie: [movieSchema],
});

const reviewSchema = new mongoose.Schema({
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



const List = mongoose.model("List", ListSchema);
module.exports = List;
