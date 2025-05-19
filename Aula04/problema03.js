/*Contexto:
Um supermercado quer oferecer descontos progressivos de acordo com o valor total da compra. Você foi encarregado de desenvolver esse cálculo automático.
Enunciado:
Peça ao cliente o seu nome e o valor total da compra e aplique os seguintes descontos:
Até R$100 → sem desconto
De R$100,01 a R$300 → 5% de desconto
De R$300,01 a R$500 → 10% de desconto
Acima de R$500 → 15% de desconto
Exiba o valor final com o desconto aplicado e o percentual usado.
Exemplo: “Desconto de 10%. Valor final: R$270,00” */
const prompt = require('prompt-sync')();
const nome = prompt("Digite o seu nome: ");
const valorCompra = Number(`${nome}, informe o valor da sua compra: `);

let valorTotal = 0;
if (valorCompra > 0 && valorCompra <= 100) {
    console.log(` ${nome}, sua compra no valor de ${valorCompra} não obteve desconto.`);
} else if (valorCompra <= 300) {
    valorTotal = valorCompra - (valorCompra * 5 / 100);
    console.log(` ${nome}, sua compra no valor de ${valorCompra} obteve 5% de desconto. Total Final: ${valorTotal}`);
} else if (valorCompra <= 500) {
    valorTotal = valorCompra - (valorCompra * 10 / 100);
    console.log(` ${nome}, sua compra no valor de ${valorCompra} obteve 10% de desconto. Total Final: ${valorTotal}`);
} else if (valorCompra > 500) {
    valorTotal = valorCompra - (valorCompra * 15 / 100);
    console.log(` ${nome}, sua compra no valor de ${valorCompra} obteve 15% de desconto. Total Final: ${valorTotal}`);
}else{
    console.log("Dados inválidos... Tente novamente.")
}

