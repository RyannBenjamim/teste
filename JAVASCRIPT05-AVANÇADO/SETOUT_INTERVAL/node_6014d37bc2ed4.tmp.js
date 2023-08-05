// setInterval Exemplos de uso

console.log("Programa iniciado!")

let seconds = 0

setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
}, 1000 * 3)