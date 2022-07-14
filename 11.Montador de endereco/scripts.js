let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco) {
    for (let key in endereco) {
        console.log(key,endereco[key]);
    }
}

exibirEndereco(endereco);