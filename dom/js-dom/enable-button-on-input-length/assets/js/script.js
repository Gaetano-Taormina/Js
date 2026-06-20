const input = document.getElementById('myInput');
const btn = document.getElementById('myBtn');
input.addEventListener('input', () => {
    btn.disabled = input.value.length < 3;
});