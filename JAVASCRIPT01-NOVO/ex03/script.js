let car = prompt("Nome do veículo 1:")
let velocityCar = prompt("Velocidade do veículo 1:")

let car2 = prompt("Nome do veículo 2:")
let velocityCar2 = prompt("Velocidade do veículo 2:")

if (velocityCar > velocityCar2) {
    alert(`O veículo ${car} é mais rápido`)
} else if (velocityCar2 > velocityCar) {
    alert(`O veículo ${car2} é mais rápido`)
} else {
    alert("O dois veículos tem a mesma velocidade")
}