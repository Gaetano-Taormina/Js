# Exercise 2

**Italiano:**

crea un pulsante e un input password. Al click, cambia il tipo dell'input da password a text e viceversa

**English:**

Create a button and a password input. On click, change the input type from password to text and vice versa.

## Reasoning

**Italiano:**

```text
- Seleziona l'input della password tramite il suo ID
- Seleziona il pulsante tramite il suo ID
- Aggiungi un ascoltatore di eventi al pulsante per il click
    - QUANDO l'utente clicca sul pulsante:
        - Leggi il valore dell'attributo "type" dell'input
        - SE il tipo è uguale a "password":
            - Cambia l'attributo "type" in "text"
            - Cambia il testo del pulsante in "Nascondi password"
        - ALTRIMENTI:
            - Cambia l'attributo "type" in "password"
            - Cambia il testo del pulsante in "Mostra password"
```

**English:**

```text
- Select the password input by its ID
- Select the button by its ID
- Add a click event listener to the button
    - WHEN the user clicks the button:
        - Read the value of the "type" attribute of the input
        - IF the type is equal to "password":
            - Change the "type" attribute to "text"
            - Change the button text to "Nascondi password"
        - ELSE:
            - Change the "type" attribute to "password"
            - Change the button text to "Mostra password"
```
