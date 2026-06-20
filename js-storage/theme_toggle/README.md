# Exercise 4

**Italiano:**

permetti all'utente di cambiare il tema (chiaro/scuro) e mantieni la scelta

**English:**

allow the user to change the theme (light/dark) and keep the choice

## Reasoning

**Italiano:**

```text
- ALL'AVVIO della pagina
  - Recupera il tema salvato dal Local Storage
  - SE esiste un tema salvato
    - Applica il tema al body
- AL CLICK sul pulsante di cambio tema
  - SE il tema attuale è chiaro
    - Cambia il tema in scuro
    - Salva la scelta "scuro" nel Local Storage
  - ALTRIMENTI
    - Cambia il tema in chiaro
    - Salva la scelta "chiaro" nel Local Storage
```

**English:**

```text
- ON page load
  - Retrieve the saved theme from Local Storage
  - IF a saved theme exists
    - Apply the theme to the body
- ON CLICK of the theme toggle button
  - IF the current theme is light
    - Change the theme to dark
    - Save the "dark" choice in Local Storage
  - ELSE
    - Change the theme to light
    - Save the "light" choice in Local Storage
```