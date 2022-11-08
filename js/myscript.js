const nome = document.getElementById("nome");

const chilometri = document.getElementById("chilometri");

const inputName = document.getElementById("name");

const inputKm = document.getElementById("km");

const addButton = document.getElementById("genera");

const cancelButton = document.getElementById("annulla");

const select = document.getElementById("age");

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