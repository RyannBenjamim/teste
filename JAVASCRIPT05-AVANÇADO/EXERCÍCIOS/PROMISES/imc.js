// Função que calcula o imc
const calculateImc = (peso, altura) => {
    return new Promise((resolve, reject) => {
        if ((typeof peso !== 'number') || (typeof altura !== 'number')) {
            reject('[ERRO] Os dois parâmetros precisam ser do tipo number')
        } else {
            const imc = peso / (altura * altura)
            resolve(imc)
        }
    })
}

// Função que mostra o resultado
const showImc = (peso, altura) => {
    calculateImc(peso, altura)
        .then((imc) => {
            return imc.toFixed(2)
        })
        .then((imcValue) => {
            if (imcValue < 18.5) {
                console.log(`IMC: ${imcValue}, Status: Magreza`)
            } else if (imcValue <= 24.9) {
                console.log(`IMC: ${imcValue}, Status: Normal`)
            } else if (imcValue <= 29.9) {
                console.log(`IMC: ${imcValue}, Status: Sobre peso`)
            } else if (imcValue <= 39.9) {
                console.log(`IMC: ${imcValue}, Status: Obsidade`)
            } else {
                console.log(`IMC: ${imcValue}, Status: Obsidade grave`)
            }
        })
        .catch((erro) => {
            console.log(`error: ${erro}`)
        })

        console.log("Finalizado!")
}

showImc(150, 2)