//Solução 1
const h1 = document.querySelector('.container h1');
const data = new Date()
h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;


    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
        diaSemanaTexto = '';
        return diaSemanaTexto;

    }

}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = '';
            return nomeMes;
    }
    
}


h1.innerHTML = getDiaSemanaTexto(data.getDay()) + ', ' + data.getDate() + ' de ' + getNomeMes(data.getMonth()) + ' de ' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes();


//Solução 2
const h2 = document.querySelector('.container h2');

const data2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h2.innerHTML = data.toLocaleString('pt-BR', opcoes);

//Solução 3

const h3 = document.querySelector('.container h3');
const data3 = new Date();

function getNomeMes3(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[numeroMes];
}

function getDiaSemanaTexto3(diaSemana) {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return dias[diaSemana];
}

h3.innerHTML = getDiaSemanaTexto3(data3.getDay()) + ', ' + data3.getDate() + ' de ' + getNomeMes3(data3.getMonth()) + ' de ' + data3.getFullYear() + ' ' + data3.getHours() + ':' + data3.getMinutes();

