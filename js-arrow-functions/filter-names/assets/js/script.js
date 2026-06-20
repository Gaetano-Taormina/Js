const names = ["Al", "Bob", "Alice", "John", "Elizabeth"];
const valid = names.filter(n => n.length >= 3 && n.length <= 5);
console.log("Valid names:", valid);