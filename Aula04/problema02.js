/*Contexto:
Você está desenvolvendo um sistema para um professor que deseja automatizar a atribuição de conceitos com base na média final de seus alunos.
Enunciado:
Peça ao usuário para digitar o nome e sua média final (de 0 a 10) e atribua um conceito:
Menor que 5 → "Conceito D (Reprovado)"
De 5 a 6.9 → "Conceito C" 
De 7 a 8.9 → "Conceito B" 
De 9 a 10 → "Conceito A (Excelente)"
Exiba o conceito correspondente à média informada. */
const prompt = require('prompt-sync')();
const nome = prompt("Por favor informe o seu nome: ");
const nota = Number(prompt(` ${nome}, informe a sua média:`));

if(nota<5){
    console.log(`${nome} com base na sua nota ${nota} seu Conceito Final é: D (Reprovado)`);
}else if(nota<=6.9){
    console.log(`${nome} com base na sua nota ${nota} seu Conceito Final é: C (Aprovado)`);
}else if(nota<=8.9){
     console.log(`${nome} com base na sua nota ${nota} seu Conceito Final é: B (Aprovado)`);
}else{
    console.log(`${nome} com base na sua nota ${nota} seu Conceito Final é:  A (Excelente)`);
}

