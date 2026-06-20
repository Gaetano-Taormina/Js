const box = document.getElementById("comment-box");
const count = document.getElementById("char-count");
const max = 100;
box.addEventListener("input", () => {
  count.textContent = max - box.value.length;
});