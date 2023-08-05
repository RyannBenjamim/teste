// Usando then e catch
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            if (true) {
                reject("A promise foi rejeitada")
            } else {
                console.log('Resolvendo a promise....')
                resolve("Resultado")
            }
        }, 1000 * 2)
    })
}

execute().then((result) => {
    console.log("Resultado: " + result)
})
.catch((erro) => {
    console.log("Erro: " + erro)
})
.finally(() => {
    console.log("A promise foi finalizada")
})