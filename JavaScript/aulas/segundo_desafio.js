/*Faça um programa calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio do combustível do carro por KM;
5 - Distância em KM da viagem;

Imprimir no console o valor que será gasto de combustível para realizar esta viagem.
*/

const valorEtanol = 5.79;
const valorGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
let tipoDeCombustivelNoCarro = 'Gasolina';
const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGastoEtanol = litrosConsumidos * valorEtanol;
const valorGastoGasolina = litrosConsumidos * valorGasolina;

if(tipoDeCombustivelNoCarro === 'Etanol') {
    console.log(valorGastoEtanol.toFixed(2))
}else{
    console.log(valorGastoGasolina.toFixed(2))
}
