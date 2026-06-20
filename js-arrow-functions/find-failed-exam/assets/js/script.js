console.log("Script loaded correctly");

const voti = [28, 30, 15, 22];
const primoBocciato = voti.find(voto => voto < 18);
console.log(primoBocciato);