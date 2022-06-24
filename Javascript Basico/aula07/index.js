/* Aritméticos + - * /
* + = Adição e Concatenação
*/ 

const num1 = 5
const num2 = 5
console.log(num1 + num2) // 10

const num3 = "5"
const num4 = "5"
console.log(num3 + num4) // 55

// ** = Potenciação 
// % = Resto da Divisão


// Operador de incremento ++
let contador = 1;
contador++; // 2 // Pré incremento
contador++; // 3
contador++; // 4
++contador; // 5 Nesse caso primeiro ele faz a conta e depois executa a ação
console.log(contador++) // Aqui ele incrementou também, mas não apareceu pq ele printou antes 

// Decremento --
let contador1 = 10;
contador--; // 9 // Pré incremento
--contador; // 8 // Pós incremento
console.log(contador++); // NÃO É UMA BOA PRÁTICA

const passo = 2;
let contador2 = 0;

contador2 = contador2 + passo;
console.log(contador2) // Assim pula de dois em dois
contador2 = contador2 + passo;
console.log(contador2)
contador2 = contador2 + passo;
console.log(contador2)

contador2 += passo; // Assim é mais facil de fazer o bgl de cima
console.log(contador2)

contador *= 10;
contador *= 10;
contador *= 10;
console.log(contador)

const n1 = 10;
const n2 = "Abacate";
console.log(n1 * n2); // Retorna NaN = Resultado inesperado (Not a Number)

// O js sempre tenta corrigir o erro, se fosse um numero dentro da string, ele tentaria corrigir. 

// FORMAS DE CONVERTER STRNG PRA NUMBER

const n3 = 10;
const n4 = parseInt("5.2") // ele só vê o Inteiro, remove o float  
const n5 = parseFloat(2.3)
const n6 = Number(2.8) // Aqui ele se vira
console.log(n3 + n4 + n5 + n6)

