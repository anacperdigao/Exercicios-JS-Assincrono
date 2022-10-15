//----- Vou simular uma função que demora a ter retorno com o setTimeOut em milesimos de segundo

function tempoAleatorio (min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    setTimeout(()=> {
        console.log(msg)
    }, tempo)
}

//espera('Frase 1', tempoAleatorio(1, 3))
//espera('Frase 2', tempoAleatorio(1, 3))
//espera('Frase 3', tempoAleatorio(1, 3))

//----- Até aqui, se eu der F8, as funções nao terão ordem definida pra serem executadas
//----- E é aí que entra a Promise e tem que ter .then

function esperaComPromise(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(msg)
        }, tempo)
    })

}

esperaComPromise('Frase 4', tempoAleatorio(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaComPromise('Frase 5', tempoAleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaComPromise('Frase 6', tempoAleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
