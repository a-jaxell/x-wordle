//Creates a box for a letter input

interface GuessWordType {
  word: string[];
  onChange: Function;
  handleSubmit: Function
  currentGuess: string[]
}

export function GuessWord({ word, onChange,currentGuess, handleSubmit }: GuessWordType) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        {word.map((e, i) => {
          return (
            <input
              onChange={onChange}
              maxLength={1}
              key={i}
              id={i}
              type="text"
            />
          );
        })}
        <button type="submit">Guess</button>
      </form>
      <p id='currentGuess'>{currentGuess.join('')}</p>
    </>
  );
}
