const target = Math.floor(Math.random() * 100) + 1;
while (true) {
  let guess = parseInt(prompt("Guess a number between 1 and 100:"));
  if (guess === target) {
    alert("Correct!");
    break;
  } else if (guess < target) {
    alert("Too low");
  } else {
    alert("Too high");
  }
}