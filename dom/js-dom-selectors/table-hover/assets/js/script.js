const rows = document.querySelectorAll("#table-body tr");
rows.forEach(row => {
  row.addEventListener("mouseenter", () => row.classList.add("table-active"));
  row.addEventListener("mouseleave", () => row.classList.remove("table-active"));
});