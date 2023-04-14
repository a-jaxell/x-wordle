import { useState } from "react";
import Settings from "../components/Settings";

type SettingsObject = {
  uniqueLetters: boolean;
  wordLength: string;
};

function SettingsContainer() {
  const [settings, setSettings] = useState<SettingsObject>({
    wordLength: "5",
    uniqueLetters: false,
  });
  const wordLengthChange = (
      event: React.ChangeEvent<HTMLSelectElement>
      ): void => {
          const { id, value } = event.target;
          setSettings((prevSettings) => ({
              ...prevSettings,
              [id]: value,
            }));
            console.log(settings);
  };
  const uniqueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [id]: event.target.checked,
    }));
  };

  return (
    <Settings
      handleLengthChange={wordLengthChange}
      handleUniqueChange={uniqueChange}
      settings={settings}
    />
  );
}
export default SettingsContainer;
