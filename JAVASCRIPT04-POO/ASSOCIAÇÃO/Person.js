const Address = require("./Address")

class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }
}

// Segunda opção de fazer a associação
class Person2 {
    constructor(name, street, number, neighborhood, city, state) {
        this.name = name
        this.address = new Address(street, number, neighborhood, city, state)
    }
}

module.exports = Person