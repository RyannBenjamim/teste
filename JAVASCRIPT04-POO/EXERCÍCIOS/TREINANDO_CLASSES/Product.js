// Classe Product
class Product {
    constructor(name, desc, price) {
        this.name = name
        this.desc = desc
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        const discountValue = this.price - (this.price * discount) / 100
        return discountValue
    }
}

const escovaPet = new Product(
    'Escova removedora de pelos', 
    'Remova os pelos do seu gato',
    80)

console.log(escovaPet)
escovaPet.addToStock(100)
console.log(escovaPet)
console.log(escovaPet.calculateDiscount(15))