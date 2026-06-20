# Exercise 15

**Italiano:**

Chiedi la temperatura esterna. Se fa freddo (< 15°C), chiedi se piove. Se piove stampa "Metti impermeabile", altrimenti "Metti giacca". Se non fa freddo (>= 15°C), stampa "Vai leggero".

**English:**

Ask for the outside temperature. If it is cold (< 15°C), ask if it is raining. If it is raining print "Wear raincoat", otherwise "Wear jacket". If it is not cold (>= 15°C), print "Go light".

## Reasoning

**Italiano:**

```text
* Chiedi la temperatura esterna
* Se la temperatura è minore di 15:
  * chiedi se piove
  * Se piove:
    * stampa "Metti impermeabile"
  * Altrimenti:
    * stampa "Metti giacca"
* Altrimenti (temperatura >= 15):
  * stampa "Vai leggero"
```

**English:**

```text
* Ask for the outside temperature
* If the temperature is less than 15:
  * ask if it is raining
  * If it is raining:
    * print "Wear raincoat"
  * Otherwise:
    * print "Wear jacket"
* Otherwise (temperature >= 15):
  * print "Go light"
```
