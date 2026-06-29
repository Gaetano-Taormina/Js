const colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#cce5ff", "#e2e3e5"];
let currentIndex = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}, 3000);