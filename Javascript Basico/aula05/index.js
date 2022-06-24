// Diferenças em Var e Let

var  nome = "Luiz"
// Var tem como redeclarar a variavel, isso foi corrigido com o let no ESCMAScript 2015 (ES6), que é uma padronização da linguagem criada pela ECMA International.

nome = "Nicole" // NÃO FAÇA ISSO. Cria uma variavel global. 

let nome = "Nicole"
let nome = "Luiz" // Não tem como, para redeclarar é só usar o "nome" sem o let
