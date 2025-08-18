const Movie = require("../models/Movie");
const axios = require("axios");
const apiKey = process.env.api_key;

//searching
const search = async (req, res) => {
  try {
    const input = req.query.query;
    const result = await axios.get(
      `${process.env.tmdbURL}search/movie?query=${input}&include_adult=false&language=en-US&page=1'&api_key=${apiKey}`
    );
    res.status(201).json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const details=async (req,res) =>{
   try {
    const movieId= req.params.id;
    const result = await axios.get(
      `${process.env.tmdbURL}movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    res.status(201).json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
}
}
module.exports = {
  search,
  details,
};
