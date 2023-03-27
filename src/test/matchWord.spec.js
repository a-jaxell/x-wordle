import { describe, expect } from "vitest";
import Ordel from "../js/matchWord.js";

/*
 Test Strategy
 Aim is to test as many aspects and various inputs
 Since the input is checked against a regex the different inputs are
 narrowed down. The goial is to have good cover and implement these tests in
 CI as the project evolves. 
*/

describe("Class Ordel", () => {
  test("Input method adds parameters to two seperate arrays, turns them to lower case and splits them", () => {
    const ordel = new Ordel();
    ordel.input("Cykla", "Hallå");

    expect(ordel.guessedWord).toEqual(["h", "a", "l", "l", "å"]);
    expect(ordel.correctWord).toEqual(["c", "y", "k", "l", "a"]);
  });

  test("Gives an error when unallowed characters are used.", () => {
    const ordel = new Ordel();

    //since the regex checks for letters only, there isnt a typeof check for string
    expect(ordel.input("123z<", "ääk9l")).toBe(
      "Submitted strings may only contain letters and can't be empty."
    );
    expect(ordel.input(1234, true)).toBe(
      "Submitted strings may only contain letters and can't be empty."
    );
  });

  test("Match the letter in guessedWord against correctWord, push an object containing letter and outcome to an array", () => {
    const ordel = new Ordel();
    ordel.input("Cykla", "Hallå");

    expect(ordel.match()).toEqual([
      { letter: "h", result: "incorrect" },
      { letter: "a", result: "mismatched" },
      { letter: "l", result: "incorrect" },
      { letter: "l", result: "correct" },
      { letter: "å", result: "incorrect" },
    ]);
  });
  test("Does not give erroneous feedback when multiple duplicate chars is submitted", () => {
    
    //Makes sure that the function works as intended when theres multiple characters present in the guess.
    
    const ordel = new Ordel();
    ordel.input("Cykla", "aaaaa");

    expect(ordel.match()).toEqual([
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "incorrect" },
      { letter: "a", result: "correct" },
    ]);
  });
});
