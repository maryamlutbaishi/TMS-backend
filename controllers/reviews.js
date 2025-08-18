const Review = require("../models/review");
async function creatreview(req, res) {
  try {
    const createdreview = await Review.create(req.body);
    res.status(201).json(creatreview);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}
async function reviewIndex(req, rse) {
  try {
    const allreview = await Review.find();
    if (allreview.length) {
      rse.status(200).json(allreview);
    } else {
      rse.status(204);
    }
  } catch (err) {
    console.log(err);
  }
}

async function showreview(req, res) {
  try {
    const review = await Review.findById(req.params.id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
async function deletreview(req, res) {
  try {
    const deletedreview = await Review.findByIdAndDelete(req.params.id);
    if (deletedreview) {
      res.status(200).json(deletedreview);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
async function updatereview(req, res) {
  try {
    const updatedreview = await Review.findByIdAndDelete(req.params.id);
    if (updatedreview) {
      res.status(200).json(updatedreview);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  creatreview,
  reviewIndex,
  showreview,
  deletreview,
  updatereview,
};
