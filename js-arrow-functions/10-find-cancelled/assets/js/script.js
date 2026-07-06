console.log("Script loaded correctly");

const stati = ["confermata", "in attesa", "annullata", "confermata"];
const annullata = stati.find(s => s === "annullata");
console.log(annullata);