//               0123456789
let umaString = "Um \"texto\"" //Caractere de escape

console.log(umaString);

// É indexado e iterável. O 0 é o primeiro.

console.log(umaString[5]);
//e

console.log(umaString.concat(' ', 'tem', ' ', 'letras')); //Concatenar de um jeito mais difícil
//Um "texto" tem letras

console.log(umaString.indexOf('texto'))
//4

console.log(umaString.lastIndexOf('l', 3))
//-1

console.log(umaString.match(/[a-z]/g)); //Expressões Regulares
//[ 'm', 't', 'e', 'x', 't', 'o' ]

console.log(umaString.search(/x/));
//6

console.log(umaString.replace ('Um', 'Outro'));
//Outro "texto"
 
console.log(umaString.replace (/t/g, 'f'));
//Um "fexfo"

console.log(umaString.length)
//10

console.log(umaString.slice(4, 9));
//texto

console.log(umaString.slice(-7));
//"texto"

console.log(umaString.split(' ', 3));
//[ 'Um', '"texto"' ]