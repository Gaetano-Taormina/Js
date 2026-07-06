# Exercise 1

**Italiano:**

crea un input e un paragrafo. Mentre l'utente digita nell'input, il testo del paragrafo si aggiorna in tempo reale

**English:**

Create an input and a paragraph. As the user types in the input, the text of the paragraph updates in real time.

## Reasoning

**Italiano:**

```text
- Seleziona l'elemento input tramite il suo ID
- Seleziona l'elemento paragrafo tramite il suo ID
- Aggiungi un ascoltatore di eventi all'input per l'evento "input"
    - QUANDO l'utente digita qualcosa nell'input:
        - Leggi il valore testuale corrente dell'input
        - Assegna questo valore al contenuto di testo del paragrafo
```

**English:**

```text
- Select the input element by its ID
- Select the paragraph element by its ID
- Add an event listener to the input for the "input" event
    - WHEN the user types something in the input:
        - Read the current text value of the input
        - Assign this value to the text content of the paragraph
```
