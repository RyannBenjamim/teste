// Get e Set
class Wallet {
    #amount
    #username
    constructor() {
        this.#amount = 100.99 * 100 // 10099
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log("[ERRO] o nome precisa ser do tipo string")
        }
    }

    get username() {
        return this.#username
    }
}

const carteira = new Wallet()

console.log(carteira.amount)

carteira.username = 'Fulano'
console.log(carteira.username)
console.log(carteira.username = 'Ryan')
console.log(carteira.username)

