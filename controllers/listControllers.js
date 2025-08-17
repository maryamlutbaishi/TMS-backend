const List = require("../Movie");
const axios = require("axios");

//create a list
const create = async (req, res) => {
  try {
    const createdList = await List.create(req.body);
    res.status(201).json(createdList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
