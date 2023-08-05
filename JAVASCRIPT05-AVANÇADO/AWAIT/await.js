async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') 
        return Promise.reject('[ERRO] Apenas números são aceitos')

    return a - b
}

// EXIBINDO RESULTADO DO JEITO "NORMAL"
/*async function execute() {
    asyncSubtract(3, 5).then((result) => {
        console.log(result)
    }).catch((erro) => {
        console.log(erro)
    })
}*/

// EXIBINDO RESULTADO COM AWAIT
/*async function execute() {
    const result = await asyncSubtract(10, 4)
    console.log(result)
}*/

// COMO EXIBIR ERRO USANDO AWAIT
async function execute() {
    try {
        const result = await asyncSubtract(10, false)
        console.log(result)
    } catch(erro) {
        console.log(erro)
    }
}

execute()
