console.log("Script loaded correctly");

let totale = 0;
let prezzo = -1;
while (prezzo != 0) {
    prezzo = prompt("Inserisci prezzo (0 per finire):");
    if (prezzo != 0) {
        totale += Number(prezzo);
    }
}
console.log("Totale spesa: " + totale);