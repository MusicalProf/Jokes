const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Joke setup is required"],
      minlength: [10, "Joke isn't long enough"],
    },
    punchline: {
      type: String,
      required: [true, "Sooooo, what's the punchline?"],
      minlength: [3, "Punchline isn't long enough"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
