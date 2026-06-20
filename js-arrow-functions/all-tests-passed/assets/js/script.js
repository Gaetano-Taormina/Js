console.log("Script loaded correctly");

const test = [true, true, true, false];
const tuttiSuperati = test.every(t => t === true);
console.log("Tutti superati? " + tuttiSuperati);