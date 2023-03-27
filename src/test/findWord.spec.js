import { findWord, hasMultipleChars, randomizeWord } from '../js/findWord.js';
import { describe, expect } from "vitest";

const mockArray = ['apple', 'banana', 'cherry', 'orange', 'grape', 'lemon', 'lime', 'kiwi', 'peach', 'pear'];

/**
 * Test Strategy:
 * 
 * The purpose of these tests is to cover as many outcomes as possible.
 * The idea is to make unit tests for many parts of the coming project that combined
 * with more tests of other units serve as an integration test. 
 * 
 * I have tried to isolate parts of the functionality from findWord(), mainly since i
 * applied a TDD approach working with one part at a time. 
 * 
 * These tests are meant to be used later in CI as checks to prevent regression.
 * 
 */
describe("Class findWord", () =>{

    test("Handles the event of no words matching ", () => {
        expect(findWord(mockArray, 10, true)).toBe(
            "There isnt a matching word for 10 letters while allowing multiple characters"
        )
        expect(findWord(mockArray, 2, false)).toBe(
            "There isnt a matching word for 2 letters while not allowing multiple characters"
        )
    })
    test("Randomizes a word, returns a string greater than 0", () => {
        expect(typeof randomizeWord(mockArray)).toBe("string");
        expect(randomizeWord(mockArray).length).toBeGreaterThan(0);
    })
    test("Returns a string and of the correct length when such a parameter is supplied. Default is 5 characters long", () => {
        // The word returned should be a string and the same length as the length submitted.
        expect(typeof findWord(mockArray)).toBe("string");
        expect(findWord(mockArray).length).toEqual(5);
        expect(findWord(mockArray, 6).length).toEqual(6);
    })

    test('Returns true/false depending on if a word has multiple characters or not.', () => {
        // 'orange' should return false
        expect(hasMultipleChars(mockArray[3])).toEqual(
            false
        )
        //'apple' should return true
        expect(hasMultipleChars(mockArray[0])).toEqual(
            true
        )
    });
});
