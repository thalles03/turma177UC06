const prompt = require('prompt-sync')();
let sair;

do {
    const x = Number(prompt("Informe a nota 01: "));
    const y = Number(prompt("Informe a nota 02: "));
    const z = Number(prompt("Informe a nota 03: "));
    if (x >= 0 && x <= 10 && y >= 0 && y <= 10 && z >= 0 && z <= 10) {
        const opcao = parseInt(prompt("Digite 1 para média aritmética, 2 média geomêtrica, 3 média ponderada: "));
        let resultado = 0;
        switch (opcao) {
            case 1:
                resultado = (x + y + z) / 3;
                console.log(`Sua média aritmética é: ${resultado.toFixed(2)}`);
                break;
            case 2:
                resultado = Math.cbrt(x * y * z);
                console.log(`Sua média geometrica é: ${resultado.toFixed(2)}`);
                break;
            case 3:
                resultado = (x * 2 + y * 3 + z * 5) / 10;
                console.log(`Sua média ponderada é: ${resultado.toFixed(2)}`);
                break;
            default:
                console.log("Opção inválida!");

        }

    } else {
        console.log("Não será possivel proseguir com o programa.");
    }
    sair = prompt("Deseja realizar um novo cálculo? Digite Sim para Continuar ou Não para encerrar: ");
}while(sair.toLowerCase()!== 'não' );