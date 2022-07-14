// Velocidade maxima de 70
// A cada 5km acima do limite, você ganha 1 ponto na carteira
// Utilizando o Math.floor
// Caso pontos maior que 12 => "Carteira suspensa"

verificarVelocidade (40)

function verificarVelocidade(velocidade) {
    const valorVelocidadeMaxima = 70;
    const kmPontos = 5;
    if (velocidade <= valorVelocidadeMaxima) {
        console.log('Velocidade permitida.');
    } else {
        const pontos = Math.floor((velocidade - valorVelocidadeMaxima) / kmPontos);
        if (pontos >= 12) {
            console.log("Carteira suspensa!");
        } else {
            console.log(`Pontos: ${pontos}`);
        }
    }
}