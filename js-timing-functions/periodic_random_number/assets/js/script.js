const numberDisplay = document.getElementById("number-display");

function generateAndShow() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  numberDisplay.textContent = randomNum;
}

generateAndShow();
setInterval(generateAndShow, 2000);