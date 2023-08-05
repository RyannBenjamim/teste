// Polimorfismo exemplo de uso
class Vehicle {
    move() {
        console.log("O Veículo está se movendo!")
    }
}

class Bike extends Vehicle {
    move() {
        console.log("A Bicicleta está se movendo!")
    }
}

class Car extends Vehicle {
    move(velocity) {
        console.log(`O Carro está se movendo a ${velocity}km/h!`)
    }
}

const vehicle = new Vehicle()
const bike = new Bike()
const car = new Car()

vehicle.move()
bike.move()
car.move(150)