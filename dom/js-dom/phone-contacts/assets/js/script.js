const contacts = [
  { name: "Alice", phone: "123-456-7890" },
  { name: "Bob", phone: "987-654-3210" }
];
const list = document.getElementById("contact-list");
contacts.forEach(contact => {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-action cursor-pointer";
  li.textContent = contact.name;
  li.style.cursor = "pointer";
  li.addEventListener("click", () => alert("Phone: " + contact.phone));
  list.appendChild(li);
});