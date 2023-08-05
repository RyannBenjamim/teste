// ------------- CLASS ACCOUNT ------------- //
export class Account {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }

    getAccount() {
        return {
            name: this.name,
            email: this.email,
            password: this.password
        }
    }
}