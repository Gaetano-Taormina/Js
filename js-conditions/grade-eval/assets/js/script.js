console.log("Script loaded correctly");

let n = prompt("Enter a number between 1 and 10: ");
n = Number(n);

if (n < 6) {
    console.log("Insufficient");
} else if (n <= 7) {
    console.log("Sufficient");
} else if (n <= 9) {
    console.log("Good");
} else {
    console.log("Excellent");
}