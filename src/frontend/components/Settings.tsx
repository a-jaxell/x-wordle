import { SettingsObject } from "../types";

const styles = {
  select: "text-black px-2",
  label: "text-black px-2",
};

type SettingsProps = {
  handleLengthChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleUniqueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  settings: SettingsObject;
};

function Settings({
  handleLengthChange,
  handleUniqueChange,
  settings,
}: SettingsProps) {
  return (
    <>
      <label className={styles.label} htmlFor="letters-select">
        How long?
      </label>
      <select
        value={settings.wordLength}
        onChange={(ev) => handleLengthChange(ev)}
        className={styles.select}
        id="wordLength"
      >
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label className={styles.label} htmlFor="unique-letters">
        Unique letters
      </label>
      <input
        onChange={(ev) => handleUniqueChange(ev)}
        id="uniqueLetters"
        type="checkbox"
      />
    </>
  );
}
export default Settings;
