# Exercise 23

**Italiano:**

data una lista di parole, verifica che nessuna abbia un carattere maiuscolo

**English:**

given a list of words, verify that none have an uppercase character

## Reasoning

**Italiano:**

```text
* Dichiariamo una costante `words` contenente un array di stringhe
* Dichiariamo una costante `allLower` e le assegniamo il risultato di `words.every()`
  * Passiamo un'arrow function al metodo `every`
  * Per ogni parola, verifichiamo se è strettamente uguale alla parola in minuscolo (`w.toLowerCase()`)
* Stampiamo il risultato della verifica in console
```

**English:**

```text
* Declare a constant `words` containing an array of strings
* Declare a constant `allLower` and assign the result of `words.every()`
  * Pass an arrow function to the `every` method
  * For each word, check if it's strictly equal to the word in lowercase (`w.toLowerCase()`)
* Print the result of the verification to the console
```
