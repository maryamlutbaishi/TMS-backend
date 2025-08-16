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
});

const ListSchema = new mongoose.Schema({
  movie: [movieSchema],
});

const List = model("List", ListSchema);
module.exports = List;
