# Coding Rules

## Introduzione

Che senso ha? - Si

## Struttura del Codice

1. **Organizzazione del codice**
```
/my-repo
├── index.html
├── css
│   ├── style.css
├── js
│   ├── script.js
├── assets
│   ├── (immagini)
│   ├── (altro)
└── README.md
```
2. **Nomi di File e Cartelle**
* file → camelCase
* cartelle → snake case (eg. nome_cartella)

## CSS

1.  **Metodologia di Denominazione:**
    
Nomi in inglese
    
2.  **Struttura del Foglio di Stile:**

Ordine del foglio HTML
```css
.parent .child {
  // cose
}
```
  
3.  **Utilizzo di Classi e ID:**
    
- ID univoci per pagina
- classi e id kebab case (eg. btn-submit)

## JavaScript

1.  **Convenzioni di Denominazione:**
    
    -   Uso di camelCase per variabili e funzioni.
    -   Costanti e variabili globali uppercase snake (eg. const PI_GRECO = 3.14)
      
2.  **Commenti nel Codice:**
    
    -   Commentare cosa fa la funzione
      
3.  **Gestione delle Variabili:**

    **NON USATE VAR!!!**
    - const per array e oggetti
    - const riferimenti al DOM
    - let per le altre variabili
    - Evitare variabili globali non necessarie.

## Controllo del Codice

1.  **Regole:**
  * utilizzare nomi evocativi per i commit
  * commit: a task terminato (non vanno usati per salvare)
  * branching: 1 branch per milestone con eventuali sotto branch per i gruppi
  * merge: **PARLARE PRIMA DI FARE MERGE CHE FACCIAMO ASSIEME!**
