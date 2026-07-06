# Exercise 3

**Italiano:**

crea un input e un pulsante disabilitato. Abilita il pulsante solo quando l'input contiene almeno 3 caratteri

**English:**

Create an input and a disabled button. Enable the button only when the input contains at least 3 characters.

## Reasoning

**Italiano:**

```text
* Selezioniamo l'input e il pulsante dal DOM
* Aggiungiamo un ascoltatore per l'evento 'input' sul campo di testo
* Impostiamo la proprietà 'disabled' del pulsante a 'true' se la lunghezza è < 3, altrimenti 'false'
```

**English:**

```text
* Select the input and button from the DOM
* Add an event listener for the 'input' event on the text field
* Set the 'disabled' property of the button to 'true' if the length is < 3, else 'false'
```
