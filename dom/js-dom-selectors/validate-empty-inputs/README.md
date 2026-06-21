# Esercizio 4

**Italiano:**

Un utente sta compilando un profilo; seleziona tutti gli input e valida che non siano vuoti quando il form viene inviato.

**English:**

A user is filling out a profile; select all inputs and validate that they are not empty when the form is submitted.

## Reasoning

**Italiano:**

```text
* Selezioniamo il form e tutti gli elementi input al suo interno
* Aggiungiamo un ascoltatore per l'evento 'submit' sul form, prevenendo il comportamento di default
* Iteriamo su tutti gli input per controllare che nessuno sia vuoto
* Se sono tutti validi procediamo, altrimenti mostriamo un messaggio d'errore
```

**English:**

```text
* Select the form and all input elements within it
* Add an event listener for the 'submit' event on the form, preventing default behavior
* Iterate over all inputs to check that none are empty
* If all are valid, proceed, otherwise show an error message
```
