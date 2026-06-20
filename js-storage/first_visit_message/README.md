# Exercise 2

**Italiano:**

mostra un messaggio diverso se è la prima volta che l'utente visita il sito

**English:**

show a different message if it is the user's first time visiting the site

## Reasoning

**Italiano:**

```text
- ALL'AVVIO della pagina
  - SE non esiste il flag "visited" nel Local Storage
    - Mostra il messaggio di benvenuto per la prima visita
    - Salva il flag "visited" nel Local Storage
  - ALTRIMENTI
    - Mostra il messaggio per i visitatori di ritorno
```

**English:**

```text
- ON page load
  - IF the "visited" flag does not exist in Local Storage
    - Show the welcome message for the first visit
    - Save the "visited" flag in Local Storage
  - ELSE
    - Show the message for returning visitors
```