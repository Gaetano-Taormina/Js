# Exercise 8

**Italiano:**

anima una progress bar aumentando la sua larghezza gradualmente fino al 100%

**English:**

animate a progress bar by gradually increasing its width up to 100%

## Reasoning

**Italiano:**

```text
- ALL'AVVIO della pagina o dell'animazione
  - Imposta la larghezza iniziale della progress bar a 0
  - Avvia un timer ripetitivo (setInterval)
  - AD OGNI intervallo
    - Incrementa la larghezza di un valore fisso
    - Aggiorna lo stile della progress bar con la nuova larghezza
    - SE la larghezza raggiunge o supera il 100%
      - Ferma il timer ripetitivo (clearInterval)
```

**English:**

```text
- ON page load or animation start
  - Set the initial progress bar width to 0
  - Start a repetitive timer (setInterval)
  - AT EACH interval
    - Increment the width by a fixed value
    - Update the progress bar style with the new width
    - IF the width reaches or exceeds 100%
      - Stop the repetitive timer (clearInterval)
```