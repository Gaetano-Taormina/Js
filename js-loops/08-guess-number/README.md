# Exercise 8

**Italiano:**

Il computer sceglie un numero segreto (es. 7). Chiedi all'utente di indovinarlo. Continua finché l'utente non indovina il numero corretto.

**English:**

The computer chooses a secret number (e.g. 7). Ask the user to guess it. Continue until the user guesses the correct number.

**Italiano:**

```text
- Scegli un numero casuale da 1 a 100
- Ciclo infinito:
  - Chiedi il tentativo all'utente
  - Se è uguale al target:
    - Stampa 'Corretto' e interrompi
  - Se minore:
    - Stampa 'Troppo basso'
  - Se maggiore:
    - Stampa 'Troppo alto'
```

**English:**

```text
- Pick random target number 1 to 100
- Infinite loop:
  - Prompt user guess
  - If equals target:
    - Print 'Correct' and break
  - If lower:
    - Print 'Too low'
  - If higher:
    - Print 'Too high'
```