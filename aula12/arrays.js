//Um array é uma lista de coisas, com um index para cada objeto

const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)
console.log(alunos[1])
console.log(alunos[0])

//Editar um valor
alunos[0] = 'Fabio'
console.log(alunos)

//Add um valor
alunos[3] = 'Costela'
console.log(alunos)
//Add sem saber o tamanho do array
alunos[alunos.length] = 'Fernanda'
alunos[alunos.length] = 'Geiser'
alunos[alunos.length] = 'Sherlock'
//Outra função que adiciona no fim
alunos.push('Armando')
alunos.push('Otavio')

//Para adicionar no começo:
alunos.unshift('Gustavo')
//console.log(alunos)

//Para remover do final
const removido = alunos.pop();
console.log(removido)

//Para removeer o primeiro
const primeiroRemovido = alunos.shift();
console.log(primeiroRemovido)
console.log(alunos)

// Essa função torna o elemento vazio
delete alunos[1];
console.log(alunos)

//undefined aparece quando vc tenta acessar algo que não existe

console.log(alunos.slice(0, -1))

console.log(typeof alunos) //object
console.log(alunos instanceof Array) // Tá perguntando se é array. Retorna true