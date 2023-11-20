/*
O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura*altura)

Elabore um algorítmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obseso;
- Acima de 40 Obesidade Grave;
*/

const peso = 65;
const altura = 1.70;
//const imc = peso / (altura * altura);
const imc = peso / Math.pow(altura, 2);

console.log(imc);

if (imc < 18.5) {
    console.log('Abaico do peso!')

} if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal!')

} if (imc > 25 && imc <= 30) {
    console.log('Acima do peso!')

} if (imc > 30 && imc <= 40) {
    console.log('Obeso!')
    
} if (imc > 40) {
    console.log('Obesidade Grave!')
}
