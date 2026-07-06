console.log("Script loaded correctly");

let posti = [2, 0, 4, 7, 12, 8];
let passeggeri = prompt("Numero passeggeri:");
for(let i=0; i<posti.length; i++) {
    if(posti[i] >= passeggeri) {
        console.log("Assegnata carrozza numero " + (i+1));
        break;
    }
}