// Primeira opcao
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'acima de R$1000', minimo: 1000, maximo: 99999}
];

// Factory Function

function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000)
]

// Constructor Function

function faixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new faixaPreco('d', 10, 20),
    new faixaPreco('e', 20, 30),
    new faixaPreco('f', 30, 40)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)