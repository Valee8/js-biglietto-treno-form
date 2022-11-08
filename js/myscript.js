// Variabile per nome e cognome passeggero
const nome = document.getElementById("nome-passeggero");

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

// Variabile per numero carrozza
const carrozza = document.getElementById("numero-carrozza");

// Variabile per il contenuto del biglietto
const biglietto = document.getElementById("biglietto");

// Variabile per il prezzo del biglietto
let prezzoBiglietto = document.getElementById("prezzo");

// variabile per codice cp
const codiceCp = document.getElementById("codice-cp");

// Variabile che contiene il prezzo al chilometro
const prezzoAlKm = 0.21;

// Variabile che contiene lo sconto per i minorenni
const scontoMinorenni = 0.2;

// Variabile che contiene lo sconto per gli over 65
const scontoOver = 0.4;

// carrozza contiene numero random tra 1 e 10
carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;

// codiceCp contiene numero random tra 1 e 99999
codiceCp.innerHTML = Math.floor(Math.random() * 99999) + 1;

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
        nome.innerHTML = nomeInserito;

        // Prezzo del biglietto comparira' nell'html
        prezzoBiglietto.innerHTML = (prezzoAlKm * kmInseriti).toFixed(2);

        // Se l'utente seleziona minorenne applico lo sconto per i minorenni
        if (select.value === "minorenne") {
            prezzoBiglietto.innerHTML = (prezzoBiglietto.innerHTML - prezzoBiglietto.innerHTML * scontoMinorenni).toFixed(2);
            console.log("prezzo biglietto minorenni: ", prezzoBiglietto);

        } 
        // Se l'utente seleziona over applico lo sconto per gli over 65
        else if (select.value === "over") {
            prezzoBiglietto.innerHTML = (prezzoBiglietto.innerHTML - prezzoBiglietto.innerHTML * scontoOver).toFixed(2);
            console.log("prezzo biglietto over 65: ", prezzoBiglietto);

        } 
        // Altrimenti non applico nessuno sconto
        else {
            console.log("prezzo biglietto non scontato: ", prezzoBiglietto);

        }

        // Faccio apparire il simbolo dell'euro dopo il prezzo
        prezzoBiglietto.innerHTML += "&euro;";
    }
 

);

// Funzione per quando viene cliccato il bottone annulla
cancelButton.addEventListener("click",

    function() {
        // Faccio scomparire il contenuto del biglietto e aggiungo la classe hidden a #biglietto
        biglietto.className = "hidden";
        
    }

);