//1 - Definisco il prezzo del biglietto in base km (0.21 € al km)
const costoPerkm = 0.21;
let km = 1;
let priceTicket = km * costoPerkm;

//2 - Permetto all'utente di inserire il numero di chilometri che vuole percorrere.
let kmDapercorrere = prompt("Inserisci i km da percorrere")

//3 - Permetto all'utente di inserire la propria età.
let etaUtente = prompt("Inserisci l'età")

//4 - Applico gli sconti in base all'età
if (etaUtente <= 18){
    sconto = 0.2;
}

else if (etaUtente >= 65){
    sconto = 0.4;
}

else{
    sconto = 0;
}

//5 - Calcolo del prezzo finale del biglietto
let finalPrice = priceTicket * (etaUtente - sconto)

//6 - Output in console
console.log(`Il prezzo del biglietto è: ${finalPrice}`)
alert(`Il prezzo finale del biglietto è: ${finalPrice}`)

