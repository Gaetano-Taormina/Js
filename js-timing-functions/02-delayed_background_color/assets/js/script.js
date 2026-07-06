const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {
  colorBtn.disabled = true;
  colorBtn.textContent = "Wait...";
  setTimeout(() => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#fff' : 'lightblue';
    colorBtn.disabled = false;
    colorBtn.textContent = "Change color in 2 seconds";
  }, 2000);
});