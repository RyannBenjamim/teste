// EXEMPLOS DE DESTRUCTION

let person = {
    name: 'Ryan',
    age: 21,
    series: ['Dark', 'Doctor Who', 'Stranger Things']
}

let {name, age} = person
console.log(name, age)

let {series} = person // Destruction com array

let [a, b, c] = series
console.log(a, b, c)

// Destruction com funções
function exemploUser({name, age, series}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        age,
        series
    }
}

console.log(exemploUser(person))