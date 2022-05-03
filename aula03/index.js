// Variáveis com Let. Tem duas formas de fazer variável Let e Var, mas var é mais antigo

let nome = "Otavio"; 

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2002');
console.log('Maria teve um filho com ', nome, 'em 2005');
console.log('O filho de ', nome, ' se chama Eduardo');

let ano; 
console.log(ano); // Declara vazio
// Retorna UNDEFINED, mas não dá erro
ano = 2002; // Inicializando a variável
console.log(ano);
ano = 1998; // Modificou a variável
console.log(ano)

/* Não pode redeclarar a mesma variavel que daí dá erro de sintaxe
* Não pode usar palavras reservadas (let, if...)
* Tem que ter nomes significativos
* Não pode começar com número 
* Primeira letra minuscula
* Sem traços e espaços
* Utilizamos camelCase
* Case-sensitive: letra mauiscula e minuscula faz diferença
*/ 

