import { useState } from "react";
import { Settings } from "../components/Settings";

type SettingsObject = {
  uniqueLetters: boolean;
  wordLength: number;
};

export const SettingsContainer = () => {
  const [settings, setSettings] = useState<SettingsObject>({
    wordLength: 5,
    uniqueLetters: true,
  });
  const handleChange = ({target}: Event) => {
    const { id, value } = target;
    
    setSettings((prev) => {
        id.value ? prev.wordLength = value : prev.uniqueLetters = id.checked;
    })
  };
  return <Settings handleChange={handleChange} settings={settings} />;
};
