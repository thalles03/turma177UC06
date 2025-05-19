//Questão 05 - classificar notas
const prompt = require('prompt-sync')();
const nota = Number(prompt("Por favor informe uma nota de 0 a 10: "));
if(nota<5){
    console.log(` Infelizmente você está Reprovado, sua nota é: ${nota}`);
}else if(nota<=6.9){
    console.log(`Você está em Recuperação, sua nota final foi: ${nota}`);
}else{
    console.log(`Parabéns! Você foi aprovado 🎉 Sua nota final foi: ${nota}`);
}




