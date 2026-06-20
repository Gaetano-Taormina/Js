console.log("Script loaded correctly");

let n = prompt("Inserisci N:");
let somma = 0;
for (let i = 1; i <= n; i++) {
    somma += Number(i);
}
console.log("Somma: " + somma);