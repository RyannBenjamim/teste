import {label, input, br, name} from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ for: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())
console.log(name)