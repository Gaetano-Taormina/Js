console.log("Script loaded correctly");

let saldo = prompt("Inserisci il saldo attuale:");
let prelievo = prompt("Inserisci l'importo da prelevare:");

if (prelievo > 0) {
    if (saldo >= prelievo) {
        let nuovoSaldo = saldo - prelievo;
        console.log("Prelievo effettuato. Nuovo saldo: " + nuovoSaldo);
    } else {
        console.log("Saldo insufficiente");
    }
} else {
    console.log("Importo non valido");
}