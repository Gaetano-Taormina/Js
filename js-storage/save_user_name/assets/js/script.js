const greetingArea = document.getElementById('greetingArea');
const formArea = document.getElementById('formArea');
const savedName = document.getElementById('savedName');
const nameInput = document.getElementById('nameInput');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');

function checkStorage() {
  const name = localStorage.getItem('username');
  if (name) {
    savedName.textContent = name;
    greetingArea.style.display = 'block';
    formArea.style.display = 'none';
  } else {
    greetingArea.style.display = 'none';
    formArea.style.display = 'block';
  }
}

saveBtn.addEventListener('click', () => {
  if (nameInput.value.trim()) {
    localStorage.setItem('username', nameInput.value.trim());
    checkStorage();
  }
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('username');
  checkStorage();
});

checkStorage();