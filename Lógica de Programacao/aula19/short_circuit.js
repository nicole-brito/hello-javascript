/*
&& -> false && true "é valor mesmo"
|| -> true || false -> Retorna o valor verdadeiro

FALSY VALUES:
*false
0
'' "" ´´
null / undefined 
NaN
*/

console.log('Nicole' && 0 && 'Maria') //0 (retorna o valor falso)

console.log('Nicole' && 'Maria') //Maria

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); //false

console.log(vaiExecutar || falaOi()); //Oi

console.log(0 || false || null || 'Nicole' || true) //Nicole (Retorna o primeiro valor verdadeiro)

const corUsuario = null; 
const corPadrao = corUsuario || 'preto';

console.log(corPadrao) //Preto

const corUsuario1 = 'rosa'; 
const corPadrao1 = corUsuario || 'preto';

console.log(corPadrao) //Rosa

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //false (Mas é a const c)

