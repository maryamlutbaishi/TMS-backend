const Movie = require("../Movie");
const axios = require("axios");
apiKey = process.env.api_key;

//searching
const search = async () => {
  const result = await axios.get(
    `${process.env.tmdbURL}search/movie?query=call&include_adult=false&language=en-US&page=1'&api_key=${apiKEY}`
  );
  console.log(result.data);
};
testFunction();

module.exports = {
  search,
};
