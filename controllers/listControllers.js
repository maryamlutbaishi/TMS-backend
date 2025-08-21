const { User } = require("../models/Movie");
const axios = require("axios");

const create = async (req, res) => {
  try {
    const { userId, name } = req.body;
    if (!userId || !name) {
      return res.status(400).json({ message: "Missing userId or name" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.lists.some((l) => l.name === name)) {
      return res.status(400).json({ message: "List already exists" });
    }

    const newList = { name, movie: [] };
    user.lists.push(newList);
    await user.save();

    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const showAll = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      favorite: user.favorite,
      toWatch: user.toWatch,
      watched: user.watched,
      customLists: user.lists,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addMovie = async (req, res) => {
  try {
    const { userId, listName } = req.params;
    const movie = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (["favorite", "toWatch", "watched"].includes(listName)) {
      user[listName].push(movie);
    } else {
      const targetList = user.lists.find((l) => l.name === listName);
      if (!targetList)
        return res.status(404).json({ message: "List not found" });
      targetList.movie.push(movie);
    }

    await user.save();
    res.json({ message: `Movie added to ${listName}!`, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const removeMovie = async (req, res) => {
  try {
    const { userId, listName, movieId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (["favorite", "toWatch", "watched"].includes(listName)) {
      user[listName] = user[listName].filter((m) => m.id !== parseInt(movieId));
    } else {
      const targetList = user.lists.find((l) => l.name === listName);
      if (!targetList)
        return res.status(404).json({ message: "List not found" });
      targetList.movie = targetList.movie.filter(
        (m) => m.id !== parseInt(movieId)
      );
    }

    await user.save();
    res.json({ message: `Movie removed from ${listName}!`, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  create,
  showAll,
  addMovie,
  removeMovie,
};
