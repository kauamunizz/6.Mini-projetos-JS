// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [90, 90, 90];

console.log(mediaAluno(array));

function mediaAluno(notas){
    const media = calcularMedia(notas)

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';

    // return media < 59
        // ? 'F'
        // : media < 69
        // ? 'D'
        // : media < 79
        // ? 'C'
        // : media < 89
        // ? 'B'
        // : 'A';
}

function calcularMedia(array){
    let soma = 0;

    for(let valor of array){
        soma += valor;
    }
    return soma / array.length;
}

