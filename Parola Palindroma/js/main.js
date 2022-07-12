const parola = prompt('inserisci una parola');

parolaPalindroma(parola);







function parolaPalindroma (palindroma) {
    for (let i = palindroma.length; i > 0; i--) {
        if (palindroma[i] = palindroma.charAt(palindroma.length)-1 ) {
            console.log('Palindroma')
        } else {
            console.log('Non palindroma')
        }
    }
}