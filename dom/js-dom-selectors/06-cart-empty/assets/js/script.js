document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    this.parentElement.remove();
  });
});