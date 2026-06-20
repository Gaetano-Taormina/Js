console.log("Script loaded correctly");

const consumi = [5, 12, 3, 20];
consumi.forEach(c => {
    if(c > 10) console.warn("Alto consumo: " + c);
    else console.log("Consumo: " + c);
});