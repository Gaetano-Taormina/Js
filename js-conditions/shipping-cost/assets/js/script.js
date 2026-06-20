console.log("Script loaded correctly");

let totale = prompt("Inserisci il totale del carrello:");
if (totale > 50) {
    console.log("Spedizione gratuita");
} else {
    console.log("Costo di spedizione: 5 euro");
}