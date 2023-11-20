/*
Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o
preço de etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tebela a seguir para ler qual a condição de pagamento adequado.

Código Condição de pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Adima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const condicaoDePagamento = 'precoDebito';
//const precoDebito = (precoEtiqueta - (precoEtiqueta * 0.1));
//const precoDinheiroPix = precoEtiqueta - (precoEtiqueta * 0.15);
//const precoDuasVezes = precoEtiqueta;
//const precoAcimaDuasVezes = precoEtiqueta + (precoEtiqueta * 0.1);

//console.log(precoDebito);



if (condicaoDePagamento === 'precoDebito') {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));

} if (condicaoDePagamento === 'precoDinheiroPix') {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));

} if (condicaoDePagamento === 'precoDuasVezes') {
    console.log(precoEtiqueta);

} else if (condicaoDePagamento === 'precoAcimaDuasVezes') {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));

}
