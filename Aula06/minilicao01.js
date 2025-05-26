let chico = 1.50;
let ze = 1.10;
let anos = 0;
do{
    chico+=0.02;
    ze+=0.03;
    anos++;
}while(ze < chico);
console.log(`Será necessário ${anos} anos para Zé ser maior que Chico.`);
console.log(`Altura Zé: ${ze.toFixed(2)} Altura Chico: ${chico.toFixed(2)}`);


