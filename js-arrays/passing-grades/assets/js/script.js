console.log("Script loaded correctly");

let nomi = ["Mario", "Luigi", "Anna"];
let voti = [5, 8, 6];
for(let i=0; i<nomi.length; i++) {
    if(voti[i] >= 6) console.log(nomi[i] + " ha la sufficienza");
    else console.log(nomi[i] + " non ha la sufficienza");
}