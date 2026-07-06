const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

textInput.addEventListener('input', function() {
    const valoreScritto = textInput.value;
    textOutput.innerText = valoreScritto;
});
