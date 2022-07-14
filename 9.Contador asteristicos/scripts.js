function exibirAsteristicos(linhas) {
    // let padrao = '';
    // for(let linha = 1; linha <= linhas; linha++){
    //     padrao += '*';
    //     console.log(padrao)
    // }
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let x = 0; x < linha; x++){
            padrao += '*';
        }
        console.log(padrao);
    }
}

exibirAsteristicos(20)