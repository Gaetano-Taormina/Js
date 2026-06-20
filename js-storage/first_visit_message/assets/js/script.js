const messageEl = document.getElementById('message');
const visited = localStorage.getItem('visited');

if (!visited) {
  messageEl.textContent = "It\'s your first time here! Welcome!";
  localStorage.setItem('visited', 'true');
} else {
  messageEl.textContent = "Welcome back! You have visited this site before.";
}