// Nessa aula iremos trabalhar com as estruturas condicionais simples.

//Estrutura condicional simples:

/*
if(condição){
     bloco de instruções
 }

 operadores relacionais: (>, <, >=, <=, !==)
*/
const idade = 15;
if(idade >= 18){
    console.log(`Eu sou um miniadulto e tenho ${idade} anos.`);
}
/*
if(condição){
     bloco de instruções
 }else{
    bloco de instruções
 }
 operadores relacionais: (>, <, >=, <=, !==)
*/
if(idade >= 18){
    console.log(`Eu sou um miniadulto e tenho ${idade} anos.`);
}else{
    console.log(`Não sou miniadulto e tenho ${idade} anos.`);
}

//configurando o prompt-sync
const prompt = require('prompt-sync')();
const idade02 = Number(prompt("Digite a sua Idade: "));
if(idade02 >= 18){
    console.log(`Eu sou adulto - ${idade02} anos.`);
}else{
    console.log(`Não sou adulto -  ${idade02} anos.`);
}

