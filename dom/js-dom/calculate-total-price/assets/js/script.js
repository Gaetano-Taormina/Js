const PRICE = 10;
const qty = document.getElementById('qty');
const total = document.getElementById('total');
qty.addEventListener('input', () => {
    const q = parseInt(qty.value) || 0;
    total.textContent = q * PRICE;
});