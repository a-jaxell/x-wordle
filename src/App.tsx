import { useState } from "react";
import "./App.css";
import { GuessWordContainer } from "./frontend/containers/GuessWordContainer";
import { styles } from "./frontend/styles";
function App() {
  // Dummy word
  // TODO: Replace assignment with request to backend API
  // Possibly a game object that consists of data related to a game session

  return (
    <div className='App'>
      <h1 className={styles.h1}>X-WORDLE</h1>
      <GuessWordContainer />

      <nav>
        {/* Highscore button should direct to the SSR Highscore page */}
        <button className={styles.button.primary}>
          Highscore
        </button>
        {/* About button should render the static page */}
        <button className={styles.button.primary}>About</button>
      </nav>
    </div>
  );
}

export default App;

// skapa en rad rutor beroende på hur långt ordet är som blir passat in i komponenten
// varje ruta är ett input fönster
// det ska gå att skriva in
// endast bokstäver i
// de är tomma per default
