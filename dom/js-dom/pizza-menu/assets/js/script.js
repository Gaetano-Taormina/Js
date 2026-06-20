const menu = [
  { name: "Margherita", price: 5 },
  { name: "Pepperoni", price: 7 },
  { name: "Hawaiian", price: 8 }
];
const list = document.getElementById("menu-list");
menu.forEach(pizza => {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = pizza.name;
  const span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";
  span.textContent = "$" + pizza.price;
  li.appendChild(span);
  list.appendChild(li);
});