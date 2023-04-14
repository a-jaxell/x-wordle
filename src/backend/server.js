import express from "express";
import words5 from './words/words5.js'
import {findWord} from '../js/findWord.js'
import ejs from 'ejs';
import {highscores} from '../js/mock.js'

const app = express();

app.listen(5080);
app.set("view engine", "ejs");
app.set("views", './src/backend/templates');
app.use(express.static("./public"));

// Route for startpage
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Routes for /highscores
app.get("/highscore", (req, res) => {

  //TODO : Code that filters the database of highscores and
  // returns the 10 fastest ones.

  // currently sends mock data
  res.render("highscore.ejs", { highscores });
});
// POST sends a new highscore to be added
app.post("/highscore", (req, res) => {
  const newHighscore = {};

  // TODO: Check format of req.body
  // Add req.body to database

  res.status(201).send(newHighscore);
});
// /word
// GET sends a random word (default is 5 characters and unique letters)
app.get("/word", async (req, res) => {

  // Assign query string arguments to variables
  const length = Number(req.query.length) || 5;
  const multiple = req.query.multiple === 'true';
  
  const array = words5.words;

  // sets a random from the given array
  // TODO: add code to include words from 5-10 letters long
  const word = await findWord(array, length, multiple);
  
  res.status(200).send(await word);
});

// Gives 404 response and appropriate text for any requests not in the middleware stack
app.use((req, res, next) => {
  res.status(404).send("No such content!");
});
