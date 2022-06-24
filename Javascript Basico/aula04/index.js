// Constantes com const

/* Não pode redeclarar a mesma const que daí dá erro de sintaxe
* Não pode usar palavras reservadas (let, if...)
* Tem que ter nomes significativos
* Não pode começar com número 
* Primeira letra minuscula
* Sem traços e espaços
* Utilizamos camelCase
* Case-sensitive: letra mauiscula e minuscula faz diferença
* NÃO UTILIZE VAR, UTILIZE CONST
*/ 

const nome = "André"; //Nesse caso tem que sempre declarar, e não dá pra modificar
console.log(nome);

// Atribuição de variáveis
const primeiroNum = 5;
const segundoNum = 10;
const resultado = primeiroNum * segundoNum;
console.log(resultado);
const resultadoDuplicado = resultado * 2
console.log(resultadoDuplicado);

// Para ter certeza do tipo de dado: 
console.log (typeof (resultado));
