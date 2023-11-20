/*
1 - Crie uma classe para representar pessoas.
as pessoas possuem os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70 kg, 1,75m e peça ao José para dizer o
valor do IMC.
*/

class Pessoa {
    //atributos
    nome;
    peso;
    altura;

    //construtor
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever() {
        console.log(`Nome: ${this.nome}, peso: ${this.peso}, altura: ${this.altura}`);
    }

    calcularImc(){
        return this.peso / (Math.pow(this.altura, 2));

    }

}

function classificarImc(pessoa){
    const calcularImc = pessoa.calcularImc();
    if (calcularImc < 18.5) {
        return 'Abaico do peso!';
    
    } if (calcularImc>= 18.5 && calcularImc <= 25) {
        return 'Peso normal!';
    
    } if (calcularImc > 25 && calcularImc <= 30) {
        return 'Acima do peso!';
    
    } if (calcularImc > 30 && calcularImc <= 40) {
        return'Obeso!';
        
    } if (calcularImc > 40) {
        return 'Obesidade Grave!';
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose);

jose.descrever();

console.log(jose.calcularImc());

console.log(classificarImc(jose));
