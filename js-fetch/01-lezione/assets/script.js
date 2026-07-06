// Esempio di utilizzo di Fetch API
console.log("Script caricato correttamente!");

// Esempio di richiesta Fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Errore:', error));