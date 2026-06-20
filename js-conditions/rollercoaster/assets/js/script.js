console.log("Script loaded correctly");

let age = prompt("Declare the user's age: ");
age = Number(age);
let height = prompt("Declare the user's height(cm): ");
height = Number(height);

if (age >= 14 && height >= 140) {
    console.log("Have fun");
} else {
    console.log("Access Denied: user does not meet the requirements");
}
