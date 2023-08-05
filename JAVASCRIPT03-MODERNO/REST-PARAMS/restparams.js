// EXEMPLO DE USO DO REST PARAMS

function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(sum(1, 2))
console.log(sum(2, 2, 2, 2))
console.log(sum(1, 2, 7, 4, 5, 9, 2, 4))