// Warrior Class
const Character = require("./Character");

class Warrior extends Character {
    #position
    constructor(name, atk, df, shield) {
        super(name, atk, df)
        this.shield = shield
        this.#position = true
    }

    getPosition() {
        if (this.#position === true) {
            return "Ataque"
        } else {
            return "Defesa"
        }
    }

    attack(target) {
        if (this.#position === true) {
            const damage = this.atk - target.df

            if (damage > 0) {
                target.life -= damage
                this.lifeCheck(target)
            } else if (damage === 0) {
                console.log("Empate de poderes!, atk igual a def")
            } else {
                console.log(`Ataque negado! ${this.name} é mais fraco que ${target.name}`)
            }
        } else {
            console.log("Você só pode atacar se estiver em modo de ataque")
        }
    }

    changePosition() {
        if (this.#position === true) {
            this.#position = false
            this.df += this.shield
        } else {
            this.#position = true
            this.df -= this.shield
        }
    }
}

module.exports = Warrior