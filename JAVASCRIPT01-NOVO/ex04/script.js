let nome1 = prompt("Nome do personagem Atacante:")
let poderDeAtaque = Number(prompt("Poder de ataque:"))

let nome2 = prompt("Nome do personagem defensor:")
let vida = Number(prompt("Quantidade de pontos de vida:"))
let poderDeDefesa = Number(prompt("Poder de defesa:"))

let escudoEsc = prompt("Possui um escudo: [S = 1/ N = 0]")
let escudo

if (escudoEsc == "1") {
    escudo = true
} else {
    escudo = false
}

let dano = 0
if (poderDeAtaque > poderDeDefesa && escudo == false) {
    dano = poderDeAtaque - poderDeDefesa
    console.log("1")
} else if (poderDeAtaque > poderDeDefesa && escudo == true) {
    dano = (poderDeAtaque - poderDeDefesa) / 2
    console.log("2")
} else if (poderDeAtaque <= poderDeDefesa) {
    dano = 0
    console.log("")
}

vida -= dano

alert(`Dano sofrido pelo ${nome2}: ${dano}\nPontos de vida: ${vida}`)
