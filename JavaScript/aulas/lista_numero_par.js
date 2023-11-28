//Crie um programa que percorra uma lista e imprima cada número encontrado

const lista = [];

lista.push(1);
lista.push(2);
lista.push(6);
lista.push(3);
lista.push(7);
lista.push(9);
lista.push(10);

for(let i = 0; i <= lista.length; i++) {
    if((lista[i]% 2) === 0){
        console.log(lista[i]);
    }
}