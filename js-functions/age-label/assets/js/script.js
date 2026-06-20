console.log("Script loaded correctly");

function etichettaEta(eta) {
    if (eta < 18) {
        return "Minorenne";
    } else if (eta <= 35) {
        return "Giovane Adulto";
    } else if (eta <= 60) {
        return "Adulto";
    } else {
        return "Senior";
    }
}
console.log(etichettaEta(25));