const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const thief = new Thief("Bandido", 250, 100)
const mage = new Mage("O Mago", 300, 200, 100)
const warrior = new Warrior("Thorfinn", 500, 250, 300)

console.log(warrior.getPosition())
warrior.atk
warrior.changePosition()
console.log(warrior.getPosition())
warrior.changePosition()
warrior.attack(mage)
warrior.changePosition()
console.log(warrior.df)
console.log(thief.atk)
thief.attack(warrior)
warrior.changePosition()
warrior.attack(thief)
warrior.attack(thief)
warrior.attack(thief)
