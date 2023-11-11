/*Faça um programa calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio do combustível do carro por KM;
3 - Distância em KM da viagem;

Imprimir no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustível = 5.79;
const kmPorLitros = 1;
const distanciaEmKm = 100;

let gastoComCombustivel = (distanciaEmKm / kmPorLitros)*precoCombustível;

console.log(gastoComCombustivel)