class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            console.log("[ERRO] Senha incorreta!")
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'ryancosta@gmail.com',
    password: '123456'
}

const myAccount = new Account(user)

console.log(myAccount.getBalance('ryancosta@gmail.com', "123456"))