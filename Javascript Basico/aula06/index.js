// Tipos de dados primitivos

const nome = "Nicole" //String
const nome1 = 'Nicole' //String
const nome2 = `Nicole` //String
const num = 10 //Number
const num1 = 1.0 //Number
let nomeAluno; // Undefined = Variavel declarada mas não inicializada, não aponta para local nenhum na memória
const sobrenome = null //Nulo, não aponta para local na memória, mas é usado para quando, em algum momento, precisaremos desconfigurar a variável. 
const boolean = true; //Ou false. Sim ou não, apenas duas possibilidades de valor. Valor lógico, usado para mudar o fluxo. 


console.log(typeof nome, num1) //Verifica o tipo da variável.Null é considerado objeto (mas é um bug)

const a = [1,2]
const b = [a]

console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
let d = a;

console.log(c, d) // 2

a = 3;
console.log(c, d) // 3, 2
