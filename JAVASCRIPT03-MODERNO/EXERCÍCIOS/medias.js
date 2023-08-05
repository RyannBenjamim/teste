// MÉDIA ARITMÉTICA SIMPLES
const mediaSimples = (...numeros) => {
    const total = numeros.length
    const soma = numeros.reduce((acc, numero) => acc + numero, 0)
    return soma / total
}

// MÉDIA ARITMÉTICA PONDERADA
const mediaPonderada = (...numeros) => {
    const soma = numeros.reduce((acc, numero) => acc + (numero.p ?? 1), 0)
    const somaPeso = numeros.reduce((acc, {n, p}) => acc + (n * (p ?? 1)), 0)
    return somaPeso / soma
}

// MEDIANA
const mediana = (...numeros) => {
    const numerosOrd = [...numeros]
    numerosOrd.sort((a, b) => a - b)
    const total = numeros.length

    if (total % 2 == 0) {
        let meio01 = (total / 2) - 1
        let meio02 = meio01 + 1
        const mediana = mediaSimples(numerosOrd[meio01], numerosOrd[meio02])
        return mediana
    } else {
        const pos = Math.round((total / 2) - 1)
        const mediana = numerosOrd[pos]
        return mediana
    }
}

// MODA
const moda = (...numeros) => {
    let modaPos = 0
    let maior = 0
    let quantAtual = 0
    
    for (let i = 0; i <= numeros.length; i++) {
        numeros.forEach((numero) => {
            if (numeros[i] === numero) {
                quantAtual++
            }
        })

        if (quantAtual >= maior) {
            maior = quantAtual
            modaPos = i
        }
        quantAtual = 0
    }
    const moda = numeros[modaPos]
    return moda
}

const modaObc = (...numeros) => {
    const quantidades = numeros.map(num => [
        num,
        numeros.filter((n) => num === n).length
    ])
    quantidades.sort((a, b) => b[1] - a[1])
    return quantidades[0][0]
}