const input = document.getElementById("pass-input");
const error = document.getElementById("error-msg");
input.addEventListener("blur", () => {
  if (input.value.trim() === "") {
    error.classList.remove("d-none");
  } else {
    error.classList.add("d-none");
  }
});