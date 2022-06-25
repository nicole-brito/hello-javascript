// ? :

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário Normal')
}

//Pra encurtar pode usar operação ternária

const pontos = 1000;
const nivelUsuario = pontos >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || 'Preto'

console.log(corPadrao)