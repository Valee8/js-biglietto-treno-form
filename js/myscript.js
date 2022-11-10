// Variabile per contenuto input name
const inputName = document.getElementById("name");

// Variabile per contenuto input km
const inputKm = document.getElementById("km");

// Variabile per bottone genera
const addButton = document.getElementById("genera");

// Variabile per bottone annulla
const cancelButton = document.getElementById("annulla");

// Variabile per il select
const select = document.getElementById("age");

// Variabile per il contenuto del biglietto
const biglietto = document.getElementById("biglietto");

// Variabile per il prezzo del biglietto
let prezzoBiglietto;

// Variabile per lo sconto
let sconto;

// Variabile che contiene il prezzo al chilometro
const prezzoAlKm = 0.21;

// Variabile che contiene lo sconto per i minorenni
const scontoMinorenni = 0.2;

// Variabile che contiene lo sconto per gli over 65
const scontoOver = 0.4;

// Funzione per quando viene cliccato il bottone genera
addButton.addEventListener("click", 

    function() {

        // Se i campi che l'utente deve inserire sono vuoti appare un messaggio di avviso
        if (inputName.value.length === 0 || inputKm.value.length === 0) {
            alert("Ci sono campi vuoti");
        }
        // Altrimenti si genera il biglietto e aggiungo la classe show a #biglietto
        else {
            biglietto.classList = "show";
        }

        // Variabile che contiene il valore di inputKm
        const kmInseriti = inputKm.value;

        // Nome e cognome inserito dall'utente apparirà sul nome del passeggero
        document.getElementById("nome-passeggero").innerHTML = inputName.value;
        
        // carrozza contiene numero random tra 1 e 10
        document.getElementById("numero-carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

        // codiceCp contiene numero random tra 1 e 99999
        document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * 99999) + 1;

        // Calcolo prezzo del biglietto 
        prezzoBiglietto = prezzoAlKm * kmInseriti;

        // Imposto lo sconto a zero
        sconto = 0;

        // Se l'utente seleziona minorenne applico lo sconto per i minorenni
        if (select.value === "minorenne") {
            // Assegno a sconto il valore di scontoMinorenni
            sconto = scontoMinorenni;

            // Stampo il tipo di biglietto
            document.getElementById("tipo-biglietto").innerHTML = `Sconto del ${sconto*100}&percnt;`;

        } 
        // Se l'utente seleziona over applico lo sconto per gli over 65
        else if (select.value === "over") {
            // Assegno a sconto il valore di scontoOver
            sconto = scontoOver;

            // Stampo il tipo di biglietto
            document.getElementById("tipo-biglietto").innerHTML = `Sconto del ${sconto*100}&percnt;`;
        } 
        else {
            // Stampo il tipo di biglietto
            document.getElementById("tipo-biglietto").innerHTML = `Biglietto standard`;
        }

        prezzoBiglietto -= prezzoBiglietto * sconto;

        console.log("Prezzo biglietto: ", prezzoBiglietto);

        // Stampo prezzo del biglietto
        document.getElementById("prezzo").innerHTML = `${prezzoBiglietto.toFixed(2)}&euro;`;
    }

);

// Funzione per quando viene cliccato il bottone annulla
cancelButton.addEventListener("click",

    function() {
        // Faccio scomparire il contenuto del biglietto e aggiungo la classe hidden a #biglietto
        biglietto.className = "hidden";
    }

);