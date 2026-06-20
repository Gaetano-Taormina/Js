# Exercise 5

**Italiano:**

gestisci la selezione della lingua e ricorda la preferenza dell'utente

**English:**

manage language selection and remember the user's preference

## Reasoning

**Italiano:**

```text
- ALL'AVVIO della pagina
  - Recupera la lingua salvata dal Local Storage
  - SE esiste una lingua salvata
    - Applica la lingua all'interfaccia utente
- AL CAMBIO di selezione nel menu della lingua
  - Salva la nuova lingua selezionata nel Local Storage
  - Aggiorna i testi dell'interfaccia nella nuova lingua
```

**English:**

```text
- ON page load
  - Retrieve the saved language from Local Storage
  - IF a saved language exists
    - Apply the language to the user interface
- ON CHANGE of selection in the language menu
  - Save the newly selected language in Local Storage
  - Update the interface texts to the new language
```