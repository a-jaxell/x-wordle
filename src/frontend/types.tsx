export type SettingsObject = {
    uniqueLetters: boolean
    wordLength: number
}

export interface GameData extends SettingsObject  {
    id: number
    guesses: string[]
    starttime: Date
    endtime: Date
}
