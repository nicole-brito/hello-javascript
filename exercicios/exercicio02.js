let nome = "Nicole";
let sobrenome = "Brito";
let anoDeNascimento = 2001;
const idade = 2022 - anoDeNascimento;
let altura = 1.75;
let peso = 63
const imc = peso / (altura * altura);

console.log(nome, sobrenome,", tem", idade, "anos, peso ", peso, "kg.", altura, "de altura e seu IMC é de", imc.toFixed(2))

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
