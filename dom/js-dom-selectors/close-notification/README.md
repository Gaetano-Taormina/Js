# Esercizio 2

**Italiano:**
In pagina c'è una notifica, falla scomparire quando l'utente clicca sulla "X" di chiusura.

**English:**
There is a notification on the page, make it disappear when the user clicks the closing "X".

## Reasoning

**Italiano:**

```text
* Seleziona il bottone tramite `getElementById`
* Seleziona l'elemento notifica tramite `getElementById`
* Associa un Event Listener al click del bottone:
  * All'evento click:
    * Invoca il metodo `remove()` sull'elemento notifica
```

**English:**

```text
* Select the button using `getElementById`
* Select the notification element using `getElementById`
* Attach a click Event Listener to the button:
  * On click event:
    * Call the `remove()` method on the notification element
```
