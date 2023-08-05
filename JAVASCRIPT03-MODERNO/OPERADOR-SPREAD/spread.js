// EXEMPLOS DE USO DO OPERADOR SPREAD

// CLONANDO UM ARRAY:
const numeros = [1, 2, 3, 4, 5]

console.log(numeros)
console.log(...numeros)

let numerosClone = [...numeros]
numerosClone.pop()

console.log(numeros)
console.log(numerosClone)

// TRANSFORMANDO UM ARRAY EM UM OBJETO:
let objNumeros = {...numeros}
console.log(objNumeros)

// CLONANDO UM OBJETO
let person = {
    name: 'Ryan',
    age: 21,
    city: 'Castanhal'
}

let personClone = {...person}
personClone.series = ['Dark', 'Stranger Things']

console.log(person)
console.log(personClone)