class Pessoa {
    //atributos
    nome;
    idade;

    //metodo
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const silvano = new Pessoa();
silvano.nome = 'Silvano Rodrigues';
silvano.idade = 43;

vitor.descrever();
silvano.descrever();
