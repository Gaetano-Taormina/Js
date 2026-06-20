const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', () => {
  loadBtn.textContent = "Loading...";
  loadBtn.disabled = true;
  setTimeout(() => {
    loadBtn.textContent = "Completed";
    loadBtn.style.backgroundColor = "lightgreen";
  }, 2500);
});