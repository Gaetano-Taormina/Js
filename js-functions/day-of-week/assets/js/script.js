console.log("Script loaded correctly");

let day = Number(prompt("Insert a number between 1 and 7:"));
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (day >= 1 && day <= 7) {
    console.log(week[day - 1]);
} else {
    console.log("Error");
}
