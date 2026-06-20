# Esercizio 7

**Italiano:**
Un campo password richiede una validazione; mostra un messaggio di errore se l'utente esce lascia l'input senza aver scritto nulla.

**English:**
A password field requires validation; show an error message if the user leaves the input without typing anything.

## Reasoning

**Italiano:**

```text
- Seleziona l'input e l'elemento errore
- Aggiungi un evento on blur all'input:
  - Se il valore e' vuoto:
    - Mostra l'errore
  - Altrimenti:
    - Nascondi l'errore
```

**English:**

```text
- Select the input and error element
- Add blur event to the input:
  - If value is empty:
    - Show error
  - Else:
    - Hide error
```
