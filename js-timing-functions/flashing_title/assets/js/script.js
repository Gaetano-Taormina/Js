const flashingTitle = document.getElementById('flashingTitle');
let isRed = true;

setInterval(() => {
  if (isRed) {
    flashingTitle.style.color = 'blue';
  } else {
    flashingTitle.style.color = 'red';
  }
  isRed = !isRed;
}, 500);