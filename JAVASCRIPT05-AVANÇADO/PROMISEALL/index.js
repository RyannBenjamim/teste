// EXECUTANDO MAIS DE UMA PROMISE POR VEZ

function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

// PROMISE ALL
/* -> Retorna um array com o resultado das promises,
      Porém se uma for rejeitada, todas são rejeitadas por tabela */

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 20)

Promise.all([sumResult, subtractResult]).then((results) => {
    console.log(results)
}).catch(erro => {
    console.log(erro)
})

// PROMISES + MAP

const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number') {
            reject('Não é número')
        } else {
            resolve(x * x)
        }
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then((squares) => {
    console.log(squares)
}).catch((erro) => {
    console.log(erro)
})