// script.js

// Função para obter os dados de entrada
function obterDadosHeroi() {
    const nome = document.getElementById("nome").value;
    const xp = parseInt(document.getElementById("xp").value);
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    return { nome, xp, vitorias, derrotas };
}

// Função para validar os dados de entrada
function validarXP(xp) {
    if (isNaN(xp)) {
        exibirMensagem("Por favor, insira um valor numérico para o XP.");
        return false;
    }
    return true;
}

// Função para definir o nível do herói com base no XP
function definirNivel(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    }
}

// Função para calcular o saldo de ranqueadas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para exibir a mensagem de resultado
function exibirMensagem(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}

// Função principal para classificar o herói
function classificarHeroi() {
    // Obtém e valida os dados
    const { nome, xp, vitorias, derrotas } = obterDadosHeroi();
    if (!validarXP(xp)) return;

    // Determina o nível do herói
    const nivel = definirNivel(xp);
    
    // Calcula o saldo de ranqueadas
    const saldoVitorias = calcularSaldo(vitorias, derrotas);

    // Exibe o resultado com o nível e saldo de ranqueadas
    exibirMensagem(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
    
    // Exibe o botão "Nova Consulta"
    document.getElementById("novaConsulta").style.display = "inline-block";
}

// Função para resetar os campos e o resultado
function novaConsulta() {
    // Limpa os campos de entrada e o resultado
    document.getElementById("nome").value = "";
    document.getElementById("xp").value = "";
    document.getElementById("vitorias").value = "";
    document.getElementById("derrotas").value = "";
    exibirMensagem("");

    // Oculta o botão "Nova Consulta"
    document.getElementById("novaConsulta").style.display = "none";
}

// Adiciona eventos de clique aos botões
document.getElementById("submit").addEventListener("click", classificarHeroi);
document.getElementById("novaConsulta").addEventListener("click", novaConsulta);
