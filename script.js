function classificarHeroi() {
    // Solicita o nome do herói
    let nome = prompt("Qual é o nome do herói?");
    
    // Solicita a quantidade de experiência (XP) do herói
    let xp = parseInt(prompt("Quantos pontos de experiência o herói tem?"), 10);
    
    // Valida se a entrada de XP é um número válido
    if (isNaN(xp) || xp < 0) {
        alert("Por favor, insira um número válido para a experiência.");
        return;
    }
    
    // Variável para armazenar o nível do herói
    let nivel;
    let imagemSrc = ""; // Variável para armazenar o caminho da imagem

    // Usando estrutura de decisão (if/else) para classificar o herói baseado na XP
    if (xp < 1000) {
        nivel = "Ferro";
        imagemSrc = "assets/Ferro.png"; // Substitua com o caminho correto da imagem
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
        imagemSrc = "assets/Bronze.png"; // Substitua com o caminho correto da imagem
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
        imagemSrc = "assets/Prata.png"; // Substitua com o caminho correto da imagem
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
        imagemSrc = "assets/Ouro.png"; // Substitua com o caminho correto da imagem
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
        imagemSrc = "assets/Platina.png"; // Substitua com o caminho correto da imagem
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
        imagemSrc = "assets/Ascendente.png"; // Substitua com o caminho correto da imagem
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
        imagemSrc = "assets/Imortal.png"; // Substitua com o caminho correto da imagem                                    
    } else {
        nivel = "Radiante";
        imagemSrc = "assets/Radiante.png"; // Substitua com o caminho correto da imagem
    }


    // Exibe a mensagem com o nome e nível do herói
    alert(`O Herói de nome "${nome}" está no nível de ${nivel} com ${xp} pontos de experiência!`);
    
    // Alterando a imagem do herói
    let heroiImg = document.getElementById("heroi-img");
    heroiImg.src = imagemSrc; // Define o caminho da imagem com base no nível
    heroiImg.alt = `${nivel} Hero Image`; // Altera o texto alternativo da imagem

    let nomeHeroiH2 = document.getElementById("nome-heroi");
    nomeHeroiH2.innerText = `${nome} - Classe: ${nivel}`; // Define o nome do herói como o conteúdo do <h2>
}
