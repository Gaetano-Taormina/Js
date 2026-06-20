console.log("Script loaded correctly");

let classifica = ["Anna", "Marco", "Luca", "Giulia"];
let ritirato = "Marco";
let indice = classifica.indexOf(ritirato);
if(indice !== -1) classifica.splice(indice, 1);
console.log("Classifica aggiornata:", classifica);