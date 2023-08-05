// Classe User
class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(em, pw) {
        if (em === this.email) {
            if (pw === this.password) {
                console.log("Bem vindo ao sistema!")
            } else {
                console.log("[ERRO] Senha incorreta")
            }
        } else {
            console.log("[ERRO] E-mail incorreto")
        }
    }
}

const user1 = new User("Ryan Costa Benjamim", "ryancosta@gmail.com", "ryan123")
console.log(user1)

user1.login("ryancosta@gmail.com", "ryan123")