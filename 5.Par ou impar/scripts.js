function exibirTipo(limite) {
    for(let x = 1; x <= limite; x++){
        // if (x % 2 == 0){
        //     console.log("Numero par: " + x)
        // } else {
        //     console.log("Numero impar: " + x)
        // }
        // x % 2 == 0
        // ? console.log("Numero par: " + x)
        // : console.log("Numero impar: " + x);

        console.log(`Numero ${x % 2 == 0 ? 'par' : 'impar'}: ${x}`);
    }
}

exibirTipo(20)