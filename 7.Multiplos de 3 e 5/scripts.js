function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    
    for(let x = 0; x <= limite; x++){
        if (x % 3 === 0) {
            multiplosDe3 += x;
        } else if  (x % 5 === 0) {
            multiplosDe5 += x;
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}


somar(10)