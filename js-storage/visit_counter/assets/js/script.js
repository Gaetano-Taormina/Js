const counterEl = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

let count = parseInt(localStorage.getItem('visitCount')) || 0;
count++;
localStorage.setItem('visitCount', count);
counterEl.textContent = count;

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('visitCount');
  location.reload();
});