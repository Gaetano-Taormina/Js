console.log("Script loaded correctly");

const lista = document.querySelector('#lista');
const input = document.querySelector('#nuovo-articolo');
const bottone = document.querySelector('#aggiungi');

bottone.addEventListener('click', () => {
    const testo = input.value.trim();
    if (!testo) return; 

    const li = document.createElement('li');
    li.textContent = testo;
    lista.appendChild(li);

    input.value = '';
    input.focus();
});