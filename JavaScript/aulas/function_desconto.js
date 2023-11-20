const precoEtiqueta = 100;
const condicaoDePagamento = '4';
// 1 - const precoDebito = (precoEtiqueta - (precoEtiqueta * 0.1));
// 2 - const precoDinheiroPix = precoEtiqueta - (precoEtiqueta * 0.15);
// 3 - const precoDuasVezes = precoEtiqueta;
// 4 - const precoAcimaDuasVezes = precoEtiqueta + (precoEtiqueta * 0.1);

//console.log(precoDebito);

function aplicarDesconto (valor, desconto){
    return valor - (valor * (desconto / 100)); 

}

function aplicarJuros (valor, juros) {
    return valor + (valor * (juros / 100));

}


if (condicaoDePagamento === '1') {
    console.log(aplicarDesconto(precoEtiqueta, 10));

} if (condicaoDePagamento === '2') {
    console.log(aplicarDesconto(precoEtiqueta, 15));

} if (condicaoDePagamento === '3') {
    console.log(precoEtiqueta);

} else if (condicaoDePagamento === '4') {
    console.log(aplicarJuros(precoEtiqueta, 10));

}
