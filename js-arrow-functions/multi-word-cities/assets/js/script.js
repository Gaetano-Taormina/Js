console.log("Script loaded correctly");

const citta = ["Roma", "Milano", "New York", "Napoli"];
const piuParole = citta.some(c => c.includes(" "));
console.log(piuParole);