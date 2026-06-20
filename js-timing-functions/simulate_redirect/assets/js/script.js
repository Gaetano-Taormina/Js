const redirectBtn = document.getElementById('redirectBtn');
const statusMsg = document.getElementById('statusMsg');

redirectBtn.addEventListener('click', () => {
  statusMsg.textContent = "Redirecting...";
  redirectBtn.disabled = true;
  setTimeout(() => {
    location.reload();
  }, 3000);
});