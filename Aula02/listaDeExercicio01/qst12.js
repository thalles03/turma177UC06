// 12. Um trabalhador ganha por hora. Guarde o valor da hora trabalhada e o número de horas, 
// depois calcule o salário final.
const nome = "Jorel da Silva";
const inss = 11;
let valorHora = 15.50;
let horasTrabalhadas = 456;
let salarioBruto = horasTrabalhadas * valorHora;
let salarioLiquido = salarioBruto - (salarioBruto*inss/100);

console.log(
    `O Sálario de ${nome} é ${salarioLiquido.toFixed()} R$.`
)
