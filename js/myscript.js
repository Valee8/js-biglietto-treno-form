const nome = document.getElementById("nome");

const chilometri = document.getElementById("chilometri");

const inputName = document.getElementById("name");

const inputKm = document.getElementById("km");

const addButton = document.getElementById("genera");

const cancelButton = document.getElementById("annulla");

const select = document.getElementById("age");

const biglietto = document.getElementById("biglietto");

let nomeInserito;

let kmInseriti;

// Variabile che contiene il prezzo al chilometro
const prezzoAlKm = 0.21;

// Variabile che contiene lo sconto per i minorenni
const scontoMinorenni = 0.2;

// Variabile che contiene lo sconto per gli over 65
const scontoOver = 0.4;

// Variabile che contiene il prezzo del biglietto
let prezzoBiglietto;

addButton.addEventListener("click", 

    function() {

        biglietto.className = "active";

        nomeInserito = inputName.value;

        kmInseriti = inputKm.value;

        nome.innerHTML = nomeInserito;

        chilometri.innerHTML = kmInseriti;

        prezzoBiglietto = prezzoAlKm * kmInseriti;

        if (select.value === "minorenne") {
            prezzoBiglietto -= prezzoBiglietto * scontoMinorenni;
            console.log("prezzo biglietto minorenni: ", prezzoBiglietto);

        } 
        else if (select.value === "over") {
            prezzoBiglietto -= prezzoBiglietto * scontoOver;
            console.log("prezzo biglietto over 65: ", prezzoBiglietto);

        } 
        else {
            prezzoBiglietto = prezzoBiglietto;
            console.log("prezzo biglietto non scontato: ", prezzoBiglietto);

        }

    }

);

cancelButton.addEventListener("click",

    function() {

        biglietto.className = null;
        
    }

);