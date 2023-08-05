// Character Class
class Character {
    constructor(name, atk, df) {
        this.name = name
        this.life = 1000
        this.atk = Number(atk)
        this.df = Number(df)
    }

    attack(target) {
        const damage = this.atk - target.df

        if (damage > 0) {
            target.life -= damage
            this.lifeCheck(target)
        } else if (damage === 0) {
            console.log("Empate de poderes!, atk igual a def")
        } else {
            console.log(`Ataque negado! ${this.name} é mais fraco que ${target.name}`)
        }
    }

    lifeCheck(target) {
        if (target.life <= 0) {
            this.attackMsg(target, 0)
            target.life = 0
        } else {
            this.attackMsg(target, 1)
        }
    }

    attackMsg(target, status) {
        if (status === 1) {
            console.log(`${this.name} atacou ${target.name}`)
            console.log(`${target.name} ficou com ${target.life} pontos de vida`)
        } else {
            console.log(`${target.name} foi morto, pontos de vida zerados!`)
        }
    }
}

module.exports = Character