

Data struktur

hämta från backend 

{
    id:                                     // Unikt id, kanske använda sig av en generator som uuid
    start-time: new Date();                 // Start tid
    guesses: []                             // bokstavskombinationer, .length är antal gissningar
    end-time: null                          // är null, läggs till när ordet gissat är rätt
    guess:                                  // ordet som är senaste gissningen.
    word-length:                            // hur långt ordet är
    unique:                                 // Är det unika bokstäver i ordet eller förekommer dubbletter
}
