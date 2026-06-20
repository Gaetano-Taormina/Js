# Exercise 16

**Italiano:**

Chiedi il saldo attuale e l'importo da prelevare. Prima verifica se l'importo è positivo. Se lo è, verifica se il saldo è sufficiente. Se sì, stampa "Prelievo effettuato" e il nuovo saldo, altrimenti stampa "Saldo insufficiente".

**English:**

Ask for the current balance and the amount to withdraw. First check if the amount is positive. If it is, check if the balance is sufficient. If yes, print "Withdrawal successful" and the new balance, otherwise print "Insufficient balance".

## Reasoning

**Italiano:**

```text
* Chiedi saldo e importo
* Se l'importo è maggiore di zero:
  * Se il saldo è maggiore o uguale all'importo:
    * sottrai l'importo
    * stampa il nuovo saldo
  * Altrimenti:
    * stampa "Saldo insufficiente"
* Altrimenti:
  * stampa un errore (importo non positivo)
```

**English:**

```text
* Ask for balance and amount
* If the amount is greater than zero:
  * If the balance is greater than or equal to the amount:
    * subtract the amount
    * print the new balance
  * Otherwise:
    * print "Insufficient balance"
* Otherwise:
  * print an error (amount not positive)
```
