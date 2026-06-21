const form = document.getElementById('myForm');
const inputs = document.querySelectorAll('.required-input');
const errorMsg = document.getElementById('errorMsg');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) valid = false;
    });
    errorMsg.style.display = valid ? 'none' : 'block';
    if (valid) alert('Form submitted!');
});