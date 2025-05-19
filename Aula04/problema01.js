/* Um sistema de cadastro de pessoas para atividades comunitárias precisa identificar a faixa etária de cada inscrito para direcionar as atividades mais adequadas.
Peça ao usuário que digite sua idade e nome e classifique a pessoa nas seguintes faixas:
Menor que 12 → "Criança"
De 12 a 17 → "Adolescente"
De 18 a 59 → "Adulto"
60 ou mais → "Idoso"
saída: Exemplo: “Fulano está na faixa: Adulto”
*/
const prompt = require('prompt-sync')();
const nome = prompt("Digite seu nome: ");
const idade = Number(prompt(`${nome}, por favor informe sua idade: `));

if(idade<12){
    console.log(`${nome} está na faixa: Criança🧒`);
}else if(idade<=17){
    console.log(`${nome} está na faixa: Adolescente👧`);
}else if(idade<=59){
    console.log(`${nome} está na faixa: Adulto 😒`);
}else{
    console.log(`${nome} está na faixa: Idoso👴`);
}

