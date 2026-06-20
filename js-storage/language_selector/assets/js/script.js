const langSelect = document.getElementById('langSelect');

// Recupera la lingua dal Local Storage e impostala se esiste
if (localStorage.getItem('language')) {
  langSelect.value = localStorage.getItem('language');
}

// Salva la nuova lingua quando l'utente la cambia
langSelect.addEventListener('change', () => {
  localStorage.setItem('language', langSelect.value);
});