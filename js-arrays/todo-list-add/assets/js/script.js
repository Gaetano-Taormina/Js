console.log("Script loaded correctly");

let tasks = ["Fare la spesa", "Studiare JS"];
let newTask = prompt("Nuova attività:");
if(newTask) tasks.push(newTask);
console.log("Task aggiornati:", tasks);