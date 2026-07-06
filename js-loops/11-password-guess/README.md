# Esercizio 11 / Exercise 11

**Italian:** L'utente ha 3 tentativi per indovinare la password. Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato".

**English:** The user has 3 attempts to guess the password. Print "Welcome" if successful within the allowed attempts, otherwise "Blocked".

## Reasoning

**Italiano:**

```text
- Imposta i tentativi a 3
- Finche tentativi > 0:
  - Chiedi password
  - Se password è corretta:
    - Stampa 'Benvenuto' e interrompi il ciclo
  - Decrementa tentativi
- Se tentativi === 0:
  - Stampa 'Bloccato'
```

**English:**

```text
- Set attempts to 3
- While attempts > 0:
  - Prompt password
  - If correct:
    - Print 'Welcome' and break
  - Decrement attempts
- If attempts === 0:
  - Print 'Blocked'
```
