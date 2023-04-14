import { useState, useEffect } from "react";
import { GuessWord } from "../components/GuessWord";

export const GuessWordContainer = () => {
  // This is the state keeping check on what letters are in the guess array
  const [guessWord, setGuessWord] = useState<string[]>([]);

  // Mock word to be replaced with data from API
  // TODO: rework so it is stored in a state with other values from the backend
  // TODO: Write code for keeping it on the backend
  const word = ["b", "a", "n", "a", "n"];
  

  // Add each letter from n input fields into an array on submit. where n is the length of the current word.
  const addLetterToArray = (event: Event) => {
    const newArrayValue = [...guessWord];
    newArrayValue[event.target.id] = event.target.value;
    setGuessWord(newArrayValue);
    console.log(guessWord);
  };

  const handleSubmit = (event: Event) => {
    // This event checks wether the guessed word matches or not.
    // TODO: Logic for interaction with the backend.

    event.preventDefault();
    let target = document.getElementById("currentGuess");

    if (word.join("") === guessWord.join("")) {
      target.innerText = "correct";
    } else {
      target.innerText = "incorrect";
    }
  };

  return (
    <GuessWord
      word={word}
      currentGuess={guessWord}
      handleChange={addLetterToArray}
      handleSubmit={handleSubmit}
    />
  );
};
