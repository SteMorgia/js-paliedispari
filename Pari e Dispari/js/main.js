const sceltaUtente = prompt('scegli pari o dispari');
console.log (sceltaUtente);
const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log (numeroUtente);
const min = 1;
const max = 5;
let somma ;




const numeroCasuale = generaNumeroCasuale (min, max);
console.log (numeroCasuale);
somma = numeroUtente + numeroCasuale;
console.log (somma);
    

function checkPariDispari ( somma ) {
    if ( somma % 2 == 0 ) {
        return 'pari';
    } else {
        return 'dispari'
    }

}
if (checkPariDispari(somma) == 'pari' && sceltaUtente == 'pari') {
    alert('hai vinto');
} else if (checkPariDispari(somma) == 'dispari' && sceltaUtente == 'dispari') {
    alert('hai vinto');
} else {
    alert('vince il computer');
}








function generaNumeroCasuale(min, max) {
    if (typeof min == "number" && typeof max == "number") {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return false;
    }
}