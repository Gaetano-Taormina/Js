# Exercise 1

**Italiano:**

Crea una lista della spesa e aggiungi un nuovo articolo quando l'utente clicca sul pulsante.

**English:**

Create a shopping list and add a new item when the user clicks the button.

## Reasoning

**Italiano:**

```text
* Seleziona l'elemento della lista
* Seleziona l'input di testo
* Seleziona il pulsante di aggiunta
* Aggiungi un event listener al pulsante per il click:
  * Al click, prendi il valore dell'input
  * Se il valore non è vuoto:
    * crea un nuovo elemento `li`
    * imposta il testo del `li`
    * aggiungi il `li` alla lista
  * Svuota l'input
```

**English:**

```text
* Select the list element
* Select the text input
* Select the add button
* Add a click event listener to the button:
  * On click, get the input value
  * If the value is not empty:
    * create a new `li` element
    * set the `li` text
    * append the `li` to the list
  * Clear the input
```
