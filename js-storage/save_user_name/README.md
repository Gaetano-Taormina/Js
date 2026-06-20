# Exercise 1

**Italiano:**

salva il nome inserito dall'utente e mostralo in pagina al ricaricamento

**English:**

save the name entered by the user and display it on the page upon reload

## Reasoning

**Italiano:**

```text
- SE l'utente inserisce un nome nel form
  - Salva il nome nel Local Storage
- ALL'AVVIO della pagina
  - SE esiste un nome salvato nel Local Storage
    - Mostra il nome nella pagina
  - ALTRIMENTI
    - Mostra il form di inserimento
```

**English:**

```text
- IF the user enters a name in the form
  - Save the name in Local Storage
- ON page load
  - IF a saved name exists in Local Storage
    - Display the name on the page
  - ELSE
    - Show the input form
```