let num1 = 15.9987654; //number
let num2 = 2.1 //number

console.log(num1.toString() + num2); //converte temporariamente
console.log(typeof num1);

num2 = num2.toString() //altera permanentemente

console.log(num1.toFixed(2));

num3 = 10
console.log(Number.isInteger(num3)) // = true or false
let temp = num3 - "Olá"
console.log(Number.isNaN(temp))

//IEEE 754-2008 = padrão que o js segue