function numerosPrimos(limite) {
    for (let numero = 0; numero < limite; numero++) {

        if(numPrimo(numero)) console.log(numero);
    }
}

function numPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            return false;
        }
    }
    return true
}

numerosPrimos(20)