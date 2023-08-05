// Thief Class
const Character = require("./Character");

class Thief extends Character {
    attack(target) {
        const damage = this.atk - target.df
        
        if (damage > 0) {
            target.life -= 2 * damage
            this.lifeCheck(target)
        } else if (damage === 0) {
            console.log("Empate de poderes!, atk igual a def")
        } else {
            console.log(`Ataque negado! ${this.name} é mais fraco que ${target.name}`)
        }
    }
}

module.exports = Thief