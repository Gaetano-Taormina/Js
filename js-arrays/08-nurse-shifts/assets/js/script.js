console.log("Script loaded correctly");

let turni = ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"];
let m = 0, p = 0, n = 0;
for(let i=0; i<turni.length; i++) {
    if(turni[i] == "mattina") m++;
    else if(turni[i] == "pomeriggio") p++;
    else if(turni[i] == "notte") n++;
}
console.log("Mattina: " + m + ", Pomeriggio: " + p + ", Notte: " + n);