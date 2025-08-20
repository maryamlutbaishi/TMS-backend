const { List } = require("../models/Movie");
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

//get all lists
const showAll = async (req, res) => {
  try {
    const allLists = await List.find();
    console.log(allLists);
    res.status(200).json(allLists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get one list
const oneList = async (req, res) => {
  try {
    const foundList = await List.findById(req.params.id);
    res.status(200).json(foundList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//edit lists
const edit = async (req, res) => {
  try {
    const foundList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(foundList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteList = async (req, res) => {
  try {
    const foundList = await List.findByIdAndDelete(req.params.id);
    res.status(200).json(foundList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  showAll,
  edit,
  deleteList,
  oneList,
};
