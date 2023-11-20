/*
1 - Crie uma classe para representar carros.
os carros possuem uma marca, uma cor, e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê 
o valor gasto em reais para realizar este percurso.
*/

class Carro {
    //atributos
    marca;
    cor;
    gastoMedioPorKm;

    //construtor
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //metodo
    descrever () {
        console.log(`Marca: ${this.marca}, cor: ${this.cor}, Km/l: ${this.gastoMedioPorKm}`);
    }

    calcularValorPercurso(distancia, preco) {
        return distancia * this.gastoMedioPorKm  * preco;
    
    }
    
}


/*
function calcularValorPercurso(distancia, preco) {
    console.log(valorDoPercurso = (distancia / gastoMedioPorKm ) * preco);

}
*/


const uno = new Carro ('Fiat', 'Vermelho', (1/20));
const trezentosSete = new Carro ('Peugeot', 'Prata', (1/10));

//calcularValorPercurso(100, 5);

uno.descrever();

uno.calcularValorPercurso(70, 5);

console.log(uno.calcularValorPercurso(70, 5));

trezentosSete.descrever();

console.log(trezentosSete.calcularValorPercurso(70, 5));