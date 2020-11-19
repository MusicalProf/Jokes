const Joke = require("../models/jokes.model");

// Get all the jokes.
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allTheJokes) => res.json({ jokes: allTheJokes }))
    .catch((err) =>
      res.json({ message: "Not finding any jokes here pal.", error: err })
    );
};

// Get One Joke
module.exports.findOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params._id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) =>
      res.json({ message: "Not finding a joke here pal.", error: err })
    );
};

// Create new jokes
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
    .catch((err) =>
      res.json({
        message: "That joke wasn't good enough. Try again.",
        error: err,
      })
    );
};

// Update an existing Joke
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// Delete an existing joke
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((err) =>
      res.json({
        message: "This joke must be too good to get rid of!",
        error: err,
      })
    );
};

// Get a Random joke.
module.exports.findRandom = (req, res) => {
  Joke.find()
    .then((jokes) => {
      let rand = Math.floor(Math.random() * jokes.length);
      res.json({ joke: jokes[rand] });
    })
    .catch((err) =>
      res.json({
        message: "Your joke isn't good enough to be in here.",
        error: err,
      })
    );
};
