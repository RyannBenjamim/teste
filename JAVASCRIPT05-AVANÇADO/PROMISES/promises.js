// CRIAÇÃO DA PROMISE
const myPromise = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if (nome === "Matheus") {
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('Usuário Matheus não encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// ENCADEAMENTO DE THEN
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if (nome === "Matheus") {
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('Usuário Matheus não encontrado!')
    }
})

myPromise2
    .then((data) => {
        return data.toUpperCase()
    })
    .then((stringModificada) => {
        console.log(stringModificada)
    })

// RETORNO DO CATCH
const myPromise3 = new Promise((resolve, reject) => {
    const nome = "João"

    if (nome === "Matheus") {
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('Usuário Matheus não encontrado!')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    })
    .catch((erro) => {
        console.log(`Aconteceu um erro: ${erro}`)
    })

// RESOLVER VÁRIAS PROMISES COM ALL
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log("Depois das promises")

// RESOLVER VÁRIAS PROMISES COM RACE
// A primeira que for executada será retornada
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolverAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// FETCH REQUEST NA API DO GITHUB
// FETCH API

const username = 'RyannBenjamim'

fetch(`https://api.giub.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json'
    },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O Nome do usuário é: ${data.name}`)
})
.catch((erro) => {
    console.log(`Houve algum erro: ${erro}`)
})