// Mage Class
const Character = require("./Character");

class Mage extends Character {
    constructor(name, atk, df, magic_pts) {
        super(name, atk, df)
        this.magic_pts = Number(magic_pts)
    }

    attack(target) {
        const damage = (this.atk + this.magic_pts) - target.df
        
        if (damage > 0) {
            target.life -= damage
            this.lifeCheck(target)
        } else if (damage === 0) {
            console.log("Empate de poderes!, atk igual a def")
        } else {
            console.log(`Ataque negado! ${this.name} é mais fraco que ${target.name}`)
        }
    }

    heal(target) {
        if (target.life === 0) {
            console.log("Esse personagem já está morto")
        } else {
            const bonus = 2 * this.magic_pts
            target.life += bonus
            console.log(`${target.name} agora tem ${target.life} pontos de vida`)
        }
    }
}

module.exports = Mage