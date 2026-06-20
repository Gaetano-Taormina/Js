const pw1 = document.getElementById('pw1');
const pw2 = document.getElementById('pw2');
const error = document.getElementById('error');
pw2.addEventListener('input', () => {
    error.style.display = pw1.value !== pw2.value ? 'block' : 'none';
});