console.log("Script loaded correctly");

let vip = ["Marco", "Anna", "Luca"];
let nome = prompt("Inserisci il tuo nome:");
if(vip.includes(nome)) console.log("Sei nella lista VIP");
else console.log("Sei nella lista standard");