# Exercise 3

**Italiano:**

rendi visibile un testo nascosto dopo alcuni secondi dal caricamento

**English:**

make hidden text visible a few seconds after loading

## Reasoning

**Italiano:**

```text
- ALL'AVVIO della pagina
  - Il testo bersaglio ha lo stile impostato su invisibile
  - Avvia un timer di alcuni secondi (setTimeout)
  - QUANDO il timer scade
    - Modifica lo stile del testo per renderlo visibile
```

**English:**

```text
- ON page load
  - The target text has its style set to invisible
  - Start a timer of a few seconds (setTimeout)
  - WHEN the timer expires
    - Modify the text style to make it visible
```