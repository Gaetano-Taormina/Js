console.log("Script loaded correctly");

let temp = [20, 22, 19, 24, 25, 21, 18];
let min = temp[0], max = temp[0], somma = 0;
for(let i=0; i<temp.length; i++) {
    if(temp[i] < min) min = temp[i];
    if(temp[i] > max) max = temp[i];
    somma += temp[i];
}
console.log("Min: " + min + ", Max: " + max + ", Media: " + (somma/temp.length));