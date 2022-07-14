// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => entrada
// Não é um numero => Não é um numero

const resultado = fizzBuzz (11);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number') {
        return "Não é um numero";
    } else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz';
    } else if (entrada % 5 === 0) {
        return "Buzz";
    } else if (entrada % 3 === 0){
        return "Fizz";
    } else {
        return entrada;
    }
}