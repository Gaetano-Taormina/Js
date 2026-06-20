# Exercise 3

**Italiano:**

Un tracker di spedizioni usa codici numerici. Scrivi una funzione che riceve un codice (1, 2, 3) e restituisce "In elaborazione" per 1, "Spedito" per 2, "Consegnato" per 3. Se il codice non esiste, restituisce "Stato sconosciuto".

**English:**

A shipping tracker uses numerical codes. Write a function that receives a code (1, 2, 3) and returns "Processing" for 1, "Shipped" for 2, "Delivered" for 3. If the code does not exist, it returns "Unknown status".

## Reasoning

**Italiano:**

```text
* Dichiara una funzione che accetta un codice
  * Se il codice corrisponde a "spedito":
    * Restituisci "In transito"
  * Altrimenti se corrisponde a "consegnato":
    * Restituisci "Consegnato"
  * Altrimenti:
    * Restituisci "Stato sconosciuto"
```

**English:**

```text
* Declare a function that accepts a code
  * If the code matches "shipped":
    * Return "In transit"
  * Else if it matches "delivered":
    * Return "Delivered"
  * Otherwise:
    * Return "Unknown status"
```
