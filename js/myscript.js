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
    
        // Variabile che contiene il valore di inputName
        const nomeInserito = inputName.value;

        // Variabile che contiene il valore di inputKm
        const kmInseriti = inputKm.value;

        // Nome inserito dall'utente nell'input comparira' nell'html
        document.getElementById("nome-passeggero").innerHTML = nomeInserito;
        
        // carrozza contiene numero random tra 1 e 10
        document.getElementById("numero-carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

        // codiceCp contiene numero random tra 1 e 99999
        document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * 99999) + 1;

        // Calcolo prezzo del biglietto 
        prezzoBiglietto = prezzoAlKm * kmInseriti;

        // Se l'utente seleziona minorenne applico lo sconto per i minorenni
        if (select.value === "minorenne") {
            prezzoBiglietto -= prezzoBiglietto * scontoMinorenni;
            // Stampo il tipo di biglietto
            document.getElementById("tipo-biglietto").innerHTML = `Sconto del 20&percnt;`;
            
            console.log("prezzo biglietto minorenni: ", prezzoBiglietto);

        } 
        // Se l'utente seleziona over applico lo sconto per gli over 65
        else if (select.value === "over") {
            prezzoBiglietto -= prezzoBiglietto * scontoOver;
            // Stampo il tipo di biglietto
            document.getElementById("tipo-biglietto").innerHTML = `Sconto del 40&percnt;`;

            console.log("prezzo biglietto over 65: ", prezzoBiglietto);

        } 
        else {
            // Stampo il tipo di biglietto
            document.getElementById("tipo-biglietto").innerHTML = `Biglietto Standard`;

            console.log("prezzo biglietto non scontato: ", prezzoBiglietto);
        }

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