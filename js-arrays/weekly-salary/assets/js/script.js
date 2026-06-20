console.log("Script loaded correctly");

let ore = [40, 35, 45, 38, 42];
let stipendio = 0;
for(let i=0; i<ore.length; i++) {
    stipendio += ore[i] * 15;
    if(ore[i] > 40) stipendio += (ore[i] - 40) * 5;
}
console.log("Stipendio settimanale: " + stipendio + "€");