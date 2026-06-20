const product = { name: "Laptop", quantity: 5 };
const badge = document.getElementById("stock-badge");
if (product.quantity > 0) {
  badge.className = "badge bg-success";
  badge.textContent = "In Stock (" + product.quantity + ")";
} else {
  badge.className = "badge bg-danger";
  badge.textContent = "Out of Stock";
}