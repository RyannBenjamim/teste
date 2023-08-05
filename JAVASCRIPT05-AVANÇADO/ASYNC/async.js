// FUNÇÕES ASYNC
/* -> As funções async são uma maneira de transformar
      qualquer função em uma promise */

// EXEMPLOS

async function asyncSum(a, b) {
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') 
        return Promise.reject('[ERRO] Apenas números são aceitos')

    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract("23", 20)

Promise.all([sumResult, subtractResult]).then((results) => {
    console.log(results)
}).catch(erro => {
    console.log(erro)
})

// ------------------- PROMISES + MAP ------------------- //

const numbers = [4, 9, false, 3, 77]

async function asyncSquare(x) {
    if (typeof x !== 'number') 
        return Promise.reject('[ERRO] Apenas números são aceitos')
        
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then((squares) => {
    console.log(squares)
}).catch((erro) => {
    console.log(erro)
})