/* 
Primitivos (Valores imutaveis) = string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referencia (Mutavel) = array, object, function - passados por referencia
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
let c = [...a]
console.log(a, b, c);
