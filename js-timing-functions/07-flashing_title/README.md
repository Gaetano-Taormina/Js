# Exercise 7

**Italiano:**

fai lampeggiare un titolo alternandone il colore ogni mezzo secondo

**English:**

make a title flash by alternating its color every half second

## Reasoning

**Italiano:**

```text
- ALL'AVVIO della pagina
  - Definisci due colori per il lampeggio
  - Avvia un timer ripetitivo ogni 500 millisecondi (setInterval)
  - AD OGNI intervallo
    - SE il colore attuale è il primo colore
      - Imposta il secondo colore
    - ALTRIMENTI
      - Imposta il primo colore
```

**English:**

```text
- ON page load
  - Define two colors for the flashing effect
  - Start a repetitive timer every 500 milliseconds (setInterval)
  - AT EACH interval
    - IF the current color is the first color
      - Set the second color
    - ELSE
      - Set the first color
```