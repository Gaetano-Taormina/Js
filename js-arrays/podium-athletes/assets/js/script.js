console.log("Script loaded correctly");

let atleti = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
let punteggi = [78, 93, 86, 91, 82];
// Semplificazione: ordinare manualmente o iterare per trovare i top 3
// Soluzione sintetica: si copia l'array, si ordina in decrescente per trovare i top 3
let pCopia = [...punteggi].sort((a,b)=>b-a);
let oro = atleti[punteggi.indexOf(pCopia[0])];
let argento = atleti[punteggi.indexOf(pCopia[1])];
let bronzo = atleti[punteggi.indexOf(pCopia[2])];
console.log("Oro: " + oro + ", Argento: " + argento + ", Bronzo: " + bronzo);