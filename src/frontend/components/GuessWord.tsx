//Creates a box for a letter input
import { styles } from '../styles'
interface GuessWordType {
  word: string[];
  handleChange: Function
  handleSubmit: Function
  currentGuess: string[]
}

export function GuessWord({ word, handleChange, currentGuess, handleSubmit }: GuessWordType) {
  return (
    <>
      <form className={styles.guessForm}
        onSubmit={(ev) => handleSubmit(ev)}
      >
        {word.map((e, i) => {
          return (
            <input
              className={styles.input}
              onChange={(ev) => handleChange(ev)}
              maxLength={1}
              key={i}
              id={i.toString()}
              type="text"
            />
          );
        })}
        <br/>
        <button className={styles.button.secondary} type="submit">Guess</button>
      </form>
      <p className={styles.guess} id='currentGuess'>{currentGuess.join('')}</p>
    </>
  );
}
