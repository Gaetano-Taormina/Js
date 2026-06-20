console.log("Script loaded correctly");

function statoSpedizione(codice) {
    if (codice === 1) return "In elaborazione";
    if (codice === 2) return "Spedito";
    if (codice === 3) return "Consegnato";
    return "Stato sconosciuto";
}
console.log(statoSpedizione(2));