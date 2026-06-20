# Exercise 1

**Italiano:**

* Dato un array di prodotti e uno di quantità, stampa se il prodotto è esaurito o se le scorte sono basse.

**English:**

* Given an array of products and one of quantities, print if the product is out of stock or if the stock is low.

## Reasoning

**Italiano:**

```text
* dichiarare array prodotti
* dichiarare array quantità
* dichiarare soglia per le scorte basse
* ciclo for per iterare su entrambi gli array:
  * se la quantità del prodotto è 0:
    * stampare che il prodotto è esaurito
  * altrimenti se la quantità è minore della soglia:
    * stampare che le scorte sono basse
  * altrimenti:
    * stampare che il prodotto è disponibile
```

**English:**

```text
* declare array for products
* declare array for quantities
* declare low stock threshold
* loop through both arrays:
  * if the product quantity is 0:
    * print that the product is out of stock
  * else if the quantity is lower than the threshold:
    * print that the stock is low
  * otherwise:
    * print that the product is in stock
```
