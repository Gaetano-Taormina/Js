# Exercise 4

**Italiano:**

simula un reindirizzamento: al click su un tasto cambia testo di un paragrafo e ricarica la pagina dopo X secondi

**English:**

simulate a redirect: on button click, change a paragraph's text and reload the page after X seconds

## Reasoning

**Italiano:**

```text
- AL CLICK sul pulsante
  - Cambia il testo del paragrafo in "Reindirizzamento in corso..."
  - Avvia un timer di X secondi (setTimeout)
  - QUANDO il timer scade
    - Ricarica la pagina (location.reload)
```

**English:**

```text
- ON CLICK of the button
  - Change the paragraph text to "Redirecting..."
  - Start a timer of X seconds (setTimeout)
  - WHEN the timer expires
    - Reload the page (location.reload)
```