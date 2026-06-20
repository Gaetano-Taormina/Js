const cities = ["Rome", "New York", "Paris"];
const multiWord = cities.some(c => c.includes(" "));
console.log("Has multi-word city:", multiWord);