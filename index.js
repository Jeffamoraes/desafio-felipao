// Função para gerar uma mensagem com base na XP
function calcularNivelDeHeroi(nome, xp) {
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    return `${nome} é um herói de nível ${nivel} com ${xp} pontos de experiência.`;
}

// Defina o nome e a quantidade de experiência do herói
const nomeDoHeroi = "Super Herói";
const xpDoHeroi = 7500; // Altere o valor da XP conforme necessário

// Chame a função para calcular o nível e exibir a mensagem
const mensagemDoHeroi = calcularNivelDeHeroi(nomeDoHeroi, xpDoHeroi);
console.log(mensagemDoHeroi);