/*
Operadores Lógicos
&& -> AND (e)
|| -> OR (ou)
! -> NOT (não)
*/

const expressaoAnd = true && true && false && true;
const expressaoOr = true || false

console.log(expressaoAnd); //false
console.log(expressaoOr); //true 
console.log(!true); //false 

const usuario = 'nic' //form que um usuario digitou
const senha = '1234' //form que usuario digitou

const vaiLogar = usuario === 'nic' && senha === '1234'
console.log(vaiLogar); //true
