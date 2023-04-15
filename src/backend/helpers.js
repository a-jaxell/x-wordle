import {v4 as uuidv4} from 'uuid';
import findWord from '../js/findWord';
import Ordel from '../js/matchWord';

import words5 from './words/words5';
import words6 from './words/words6';
import words7 from './words/words6';
import words8 from './words/words6';
import words9 from './words/words6';
import words10 from './words/words6';

const wordLists = {5: words5, 6: words6, 7: words7, 8: words8, 9: words9, 10: words10}
  /*
  * This function takes an object with requested settings
  * for a game. It then creates a new game based on those
  * settings. 
  */
 function createGame({length, unique}){
     
    const newGameData = {
        ...object,
        id: uuidv4(),
        starttime: new Date(),
        endtime: null,
        guesses: [],
        completed: null,
        correctWord: findWord(wordLists[length], length, unique)
    }
    const responseData = {
      id: newGameData.id,
      guess: [],
      matches: []
    }
    // TODO: Add dataBaseGame to database 

    return responseData;
  }

  /*
  * This Function takes an gameObject and checks
  * if its id is in the data base and then 
  * checks if the guesses[0] is correct.
  * After it responds with an object containing 
  */
  function updateGame({id, guess}){
      // unshift
      //TODO : fetch gamedata from database with id
      // If no game data, return error

      let gameData;
      const responseData = matchWord(guess, gameData.correctWord);

  }