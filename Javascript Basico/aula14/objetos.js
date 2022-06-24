// Da pra alterar os valores dentro do array mesmo com const, só não tem como reatribuir

function criaPessoa (nome, sobrenome, idade) {
    return {  nome: nome, sobrenome: sobrenome, idade: idade }
}

const pessoa1 = criaPessoa('Nicole', 'Brito', 21);
const pessoa2 = criaPessoa('João', 'Silva', 20);
const pessoa3 = criaPessoa('Maria', 'Santos', 19);
const pessoa4 = criaPessoa('Pedro', 'Santos', 18);


const pessoa = {
    nome: 'Luiz',
    idade: 23,

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
};

pessoa.falar();

