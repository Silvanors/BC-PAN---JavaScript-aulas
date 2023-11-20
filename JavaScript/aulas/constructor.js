class Pessoa {
    //atributos
    nome;
    idade;
    anoDeNascimento;

    //construtor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    //metodo
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

//const vitor = new Pessoa(Vitor, 25);
const silvano = new Pessoa('Silvano', 43);
//vitor.nome = 'Vitor J Guerra';
//vitor.idade = 25;

//const silvano = new Pessoa();
//silvano.nome = 'Silvano Rodrigues';
//silvano.idade = 43;

//vitor.descrever();
silvano.descrever();

console.log(silvano);
