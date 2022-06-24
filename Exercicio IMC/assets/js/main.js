//Capturar submit do formulário

const form = document.querySelector('#form'); 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu nível IMC é ${imc}. Você está ${nivelImc}`

    setResultado(msg, true)
});

function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'no peso normal', 'em sobrepeso', 'em obesidade grau 1', 'em obesidade grau 2','em obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    } 
    
    if (imc >= 34.9) {
        return nivel[4]
    } 
    
    if (imc >= 29.9) {
        return nivel[3]
    }
    
    if (imc >= 24.9) {
        return nivel[2]
    }
    
    if (imc >= 18.5) {
        return nivel[1]
    }
    
    if (imc < 18.5) {
        return nivel[0]
    }
}

//Calcula o IMC
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Cria o paragrafo
function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';


    
    const p = criaP();

    if (isValid) { p.classList.add('p-resultado');
} else {
    p.classList.add('bad')
}

    p.innerHTML = msg 
    resultado.appendChild(p);
}