function escreverMeuNome (nome){
    return 'Meu nome é ' + nome + ',';
}

function verificarMaioridade(idade){
    if (idade >= 18) {
        console.log(escreverMeuNome('silvano') + ' e maior de idade!');
    } else {
        console.log('Menor');
    }
}

escreverMeuNome('silvano');
escreverMeuNome('andré');

verificarMaioridade(22);