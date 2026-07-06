const clockEl = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);