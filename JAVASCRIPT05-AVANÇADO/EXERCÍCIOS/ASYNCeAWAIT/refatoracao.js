// Função que calcula o imc
const calculateImc = async (peso, altura) => {
    if ((typeof peso !== 'number') || (typeof altura !== 'number')) {
        return Promise.reject('[ERRO] Os dois parâmetros precisam ser do tipo number')
    }

    const imc = peso / (altura * altura)
    return imc.toFixed(2)
}

// Função que mostra o resultado
const showImc = async (peso, altura) => {
    try {
        const imcValue = await calculateImc(peso, altura)

        if (imcValue < 18.5) console.log(`IMC: ${imcValue}, Status: Magreza`)
        else if (imcValue <= 24.9) console.log(`IMC: ${imcValue}, Status: Normal`)
        else if (imcValue <= 29.9) console.log(`IMC: ${imcValue}, Status: Sobre peso`)
        else if (imcValue <= 39.9) console.log(`IMC: ${imcValue}, Status: Obsidade`)
        else console.log(`IMC: ${imcValue}, Status: Obsidade grave`)

    } catch(erro) {
        console.log(`error: ${erro}`)
    }

    console.log("Finalizado!")
}

showImc(150, 2)