const parola = prompt('inserisci una parola');
const risultato = parolaPalindroma(parola);

function parolaPalindroma (stringa) {
    // prendo la lunghezza totale della parola
    const lunghezza = parola.length;

    // uso il ciclo FOR per dividere la parola in 2 metà
    for (let i = 0; i < lunghezza / 2; i++) {

        //valido il primo e l'ultimo carattere come uguali
        if (parola[i] !== parola[lunghezza - 1 -i]) {
            alert('non è palindroma');
        } 
    }
    alert('La parola è palindroma');
}










