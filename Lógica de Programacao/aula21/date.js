const data = new Date();

console.log(data) //2022-06-25T13:47:00.369Z

console.log(data.toString());//Sat Jun 25 2022 10:50:57 GMT-0300 (Horário Padrão de Brasília)

console.log(data.toDateString());//Sat Jun 25 2022

const data1 = new Date('2020-06-25 13:47:00');

console.log(data1) //2020-06-25T13:47:00.000Z

console.log('Dia', data1.getDate()) //Dia 25
console.log('Mês', data1.getMonth()) //Mês 5 (Junho) - 0 (Janeiro)
console.log('Ano', data1.getFullYear()) //Ano 2020
console.log('Dia da Semana', data1.getDay()) //Dia da Semana 5 (Sexta-feira) - 0 (Domingo) 
console.log('Hora', data1.getHours()) //Hora 13
console.log('Minutos', data1.getMinutes()) //Minutos 47
console.log('Segundos', data1.getSeconds()) //Segundos 0
console.log('Milisegundos', data1.getMilliseconds()) //Milisegundos 0
console.log('Diferença de Horário', data1.getTimezoneOffset()) //Diferença de Horário -180

console.log(Date.now()) //1593990980000

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(hoje) {
    const dia = zeroAEsquerda(hoje.getDate());
    const mes = zeroAEsquerda(hoje.getMonth() + 1);
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
} 

const hoje = new Date();
const dataBrasil = formataData(hoje);
console.log(dataBrasil) //2022-06-25T14:02:21.721Z