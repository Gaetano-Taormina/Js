console.log("Script loaded correctly");

const nomi = ["Bo", "Luca", "Marco", "Massimiliano"];
const corti = nomi.filter(nome => nome.length >= 3 && nome.length <= 5);
console.log(corti);