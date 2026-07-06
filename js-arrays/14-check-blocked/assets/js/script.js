console.log("Script loaded correctly");

let bloccati = ["user123", "hater99"];
let nuovoAmico = "hater99";
if(bloccati.includes(nuovoAmico)) console.log("Non puoi aggiungere questo utente");
else console.log("Utente aggiunto");