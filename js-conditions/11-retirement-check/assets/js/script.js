console.log("Script loaded correctly");

let gender = prompt("Enter the user's gender: (M/F)");
let age = prompt("Enter age: ");
age = Number(age);

if ((gender === "M" || gender === "m") && age >= 67) {
    console.log("You can retire");
} else if ((gender === "F" || gender === "f") && age >= 62) {
    console.log("You can retire");
} else {
    console.log("You still have to work");
}