# Exercise 5

**Italiano:**

simula uno stato di "caricamento": cambia il testo di un elemento appena cliccato un pulsante e cambialo nuovamente dopo qualche secondo

**English:**

simulate a 'loading' state: change the text of an element upon clicking a button and change it again after a few seconds

## Reasoning

**Italiano:**

```text
- AL CLICK sul pulsante
  - Cambia il testo del pulsante o elemento in "Caricamento..."
  - Avvia un timer di qualche secondo (setTimeout)
  - QUANDO il timer scade
    - Cambia il testo del pulsante in "Completato"
```

**English:**

```text
- ON CLICK of the button
  - Change the button or element text to "Loading..."
  - Start a timer of a few seconds (setTimeout)
  - WHEN the timer expires
    - Change the button text to "Completed"
```