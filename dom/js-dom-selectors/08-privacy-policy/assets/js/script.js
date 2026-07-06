const checkbox = document.getElementById("privacy-check");
const btn = document.getElementById("register-btn");
checkbox.addEventListener("change", () => {
  btn.disabled = !checkbox.checked;
});