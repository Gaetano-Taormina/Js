# Utilizzo di Bootstrap nei Progetti

In questa cartella, per i progetti da `es_1` a `es_10`, è stato integrato **Bootstrap 5.3.8** per velocizzare la creazione di interfacce web responsive e migliorare l'aspetto visivo e il layout delle pagine.

## Come è stato integrato

All'interno di ciascun file `index.html`, Bootstrap è stato caricato direttamente tramite CDN (Content Delivery Network). Sono stati inseriti due riferimenti principali:

### 1. Fogli di Stile (CSS)

Il CSS di Bootstrap è stato aggiunto all'interno della sezione `<head>` per includere tutte le classi di utilità, la tipografia e il sistema a griglia:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
```

### 2. JavaScript Interattivo

Il file JavaScript è stato aggiunto all'interno del `<body>` o nell'`<head>` con l'attributo `defer` per far funzionare correttamente tutti i componenti interattivi (come alert, modali o dropdown) forniti dal framework:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" defer></script>
```

## Come usarlo negli esercizi

A partire da questa configurazione, potrai utilizzare tutte le classi standard di Bootstrap direttamente nel codice HTML degli esercizi (ad esempio: `container`, `row`, `col`, `btn btn-primary`, `form-control`, `badge`, ecc.) senza dover scrivere manualmente regole CSS aggiuntive, a meno che non si voglia personalizzare ulteriormente lo stile nel file `style.css` locale.
