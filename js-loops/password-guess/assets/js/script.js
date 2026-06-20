const secret = "1234";
let attempts = 3;
while (attempts > 0) {
  let guess = prompt("Enter password:");
  if (guess === secret) {
    alert("Welcome");
    break;
  }
  attempts--;
}
if (attempts === 0) alert("Blocked");