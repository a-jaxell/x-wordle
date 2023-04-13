import {SettingsObject } from '../types'

const styles = {
    select: "text-black px-2",
    label: "text-black px-2",
}

export const Settings = (handleChange: Function , settings: SettingsObject) => {
  return (
    <>
      <label className={styles.label} htmlFor="letters-select">How long?</label>
      <select onChange={(ev)=> handleChange(ev)} className={styles.select} id='wordLength'>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label className={styles.label} htmlFor="unique-letters">Unique letters</label>
      <input onChange={(ev)=> handleChange(ev)} id="uniqueLetters" type="checkbox" />
    </>
  );
};
