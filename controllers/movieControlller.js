const Movie = require("../models/Movie");
const axios = require("axios");
const apiKey = process.env.api_key;

//searching
const search = async (req, res) => {
  try {
    const input = req.query.query;
    let allResults = [];
    for (let page = 1; page <= 5; page++) {
      const result = await axios.get(
        `${process.env.tmdbURL}search/multi?query=${input}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`
      );
      allResults = [...allResults, ...result.data.results];
    }
    console.log(allResults);
    res.status(201).json(allResults);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  search,
};
