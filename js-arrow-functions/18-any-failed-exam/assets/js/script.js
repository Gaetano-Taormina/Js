console.log("Script loaded correctly");

const votiUniversita = [28, 30, 17, 24];
const qualcheBocciatura = votiUniversita.some(v => v < 18);
console.log("Qualche esame non superato? " + qualcheBocciatura);