console.log("Script loaded correctly");

const scadenze = [30, 15, 5, 2];
const urgente = scadenze.find(s => s <= 7);
console.log("Documento urgente scade tra " + urgente + " giorni");