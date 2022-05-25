// Mandar um valor e retornar um valor

function saudacao(nome) {
    return `Bom dia ${nome}!`
}

saudacao('Luiz'); 
//saudacao('João'); 
//saudacao('Maria'); 

const variavel = saudacao('Luiz'); 
console.log(variavel)

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado //return encerra a função
}

console.log(soma(2, 2)); //4
console.log(soma('Nicole ', 'Brito'))
console.log(soma(2))

const raiz = function(n) {
    return Math.sqrt(n)
};

console.log(raiz(9))

//outra forma de criar uma função
const raizq = (n) => n ** 0.5; 

console.log(raizq(9))