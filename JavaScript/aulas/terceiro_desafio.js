/*

    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre de facultade calcule e imprima
    sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota3) / 3;

    Classificação:
    -Média menor que 5, reprovado;
    -Média entre 5 e 7, recuperação;
    -Média acima de 7, passou de semestre;
    */

    const notaUm = 1;
    const notaDois = 2;
    const notaTres = 1;
    const media = (notaUm + notaDois + notaTres)/3;
    console.log(media);

    if (media < 5) {
        console.log('reprovado')
    } if (media >= 5 && media <= 7){
        console.log('recuperação!')
    } else {
        console.log('passou de semestre!')
    }