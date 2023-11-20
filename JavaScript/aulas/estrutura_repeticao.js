const notas = [];

notas.push(5);
notas.push(7);
notas.push(5);
notas.push(2);
notas.push(5);

console.log(notas.length);

for (let i = 0; i < notas.length; i++){
    console.log(i);
}

const nome = 'Vitor J Guerra';

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
    console.log(i);
    //console.log(nome);
}

let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = (soma / (notas.length));
console.log(soma);
console.log(media);
