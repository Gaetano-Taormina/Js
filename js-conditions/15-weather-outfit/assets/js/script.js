console.log("Script loaded correctly");

let temperatura = prompt("Inserisci la temperatura esterna:");
if (temperatura < 15) {
    let piove = prompt("Piove? (si/no)");
    if (piove == "si") {
        console.log("Metti impermeabile");
    } else {
        console.log("Metti giacca");
    }
} else {
    console.log("Vai leggero");
}