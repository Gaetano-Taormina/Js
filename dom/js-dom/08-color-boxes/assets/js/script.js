const colors = ["red", "blue", "green", "yellow", "purple"];
const container = document.getElementById("box-container");
colors.forEach(color => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = color;
  container.appendChild(box);
});