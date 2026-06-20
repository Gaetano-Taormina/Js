console.log("Script loaded correctly");

const temperature = [5, 2, -1, 4];
const sottoZero = temperature.some(t => t < 0);
console.log("C'è stato gelo? " + sottoZero);