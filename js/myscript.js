const nome = document.getElementById("nome-passeggero");

const inputName = document.getElementById("name");

const inputKm = document.getElementById("km");

const addButton = document.getElementById("genera");

const cancelButton = document.getElementById("annulla");

const select = document.getElementById("age");

const carrozza = document.getElementById("numero-carrozza");

const biglietto = document.getElementById("biglietto");

let prezzoBiglietto = document.getElementById("prezzo");

const codiceCp = document.getElementById("codice-cp");

// Variabile che contiene il prezzo al chilometro
const prezzoAlKm = 0.21;

// Variabile che contiene lo sconto per i minorenni
const scontoMinorenni = 0.2;

// Variabile che contiene lo sconto per gli over 65
const scontoOver = 0.4;

carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;

codiceCp.innerHTML = Math.floor(Math.random() * 99999) + 1;

addButton.addEventListener("click", 

    function() {

        if (inputName.value.length === 0 || inputKm.value.length === 0) {
            alert("Ci sono campi vuoti");
        }
        else {
            biglietto.classList = "show";
        }
    
        const nomeInserito = inputName.value;

        const kmInseriti = inputKm.value;

        nome.innerHTML = nomeInserito;

        prezzoBiglietto.innerHTML = (prezzoAlKm * kmInseriti).toFixed(2);

        if (select.value === "minorenne") {
            prezzoBiglietto.innerHTML = (prezzoBiglietto.innerHTML - prezzoBiglietto.innerHTML * scontoMinorenni).toFixed(2);
            console.log("prezzo biglietto minorenni: ", prezzoBiglietto);

        } 
        else if (select.value === "over") {
            prezzoBiglietto.innerHTML = (prezzoBiglietto.innerHTML - prezzoBiglietto.innerHTML * scontoOver).toFixed(2);
            console.log("prezzo biglietto over 65: ", prezzoBiglietto);

        } 
        else {
            console.log("prezzo biglietto non scontato: ", prezzoBiglietto);

        }

        prezzoBiglietto.innerHTML += "&euro;";
    }
 

);

cancelButton.addEventListener("click",

    function() {

        biglietto.className = "hidden";
        
    }

);