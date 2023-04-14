import express from "express";
export const api = express();

// /highscores

// GET gets a list of 10 entries sorted by fastest time in JSON
api.get("/highscores", (req, res) => {
  const highscores = [];

  // TODO: code to retrieve the top ten plays from database

  res.type("application/json").status(200).json(highscores).send();
});
// POST sends a new highscore to be added
api.post("/highscores", (req, res) => {
  const newHighscore = req.body.json();

  // Check that req.body is correct format
  // Log into database

  res.status(201).send(newHighscore);
});
//

//  /word
// GET sends a random word (default is 5 characters and unique letters)
api.get("/word", (res, req) => {
  const word = "";
  // Code to randomize a word from an array.

  // TODO: add querystrings.

  // Querystrings

  // length=number
  // the desired length of the word
  // unique=boolean
  // wether all letters have to be unique or not

  res.status(200).send(word);
});
