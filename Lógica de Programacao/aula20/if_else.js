/*
Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite
*/

//IF pode ser utilizado sozinho
// Else sempre precisa de um If
// else if pode ter vários na checagem
// só pode ter um else

const hora = 44;


if (hora >= 0 && hora <= 11) {
    console.log("Bom dia")
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite")
} else {
    console.log("Tenha um bom dia :)")
}

