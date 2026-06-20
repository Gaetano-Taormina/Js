console.log("Script loaded correctly");

const parole = ["ciao", "mondo", "sole"];
const tutteMinuscole = parole.every(p => p === p.toLowerCase());
console.log(tutteMinuscole);