let nave = {
    velocity: 0,
    speedUp: function(acelere) {
        this.velocity += acelere
    }
}

nave.nome = prompt("Digite o nome da nave:")
nave.tipo = prompt("Digite o tipo da nave:")
nave.maxVel = prompt("Digite a velocidade máxima da nave em km/s:")

const menu = () => {
    let op
    while (op != 1 && op != 2) {
        const op = prompt("Você deseja acelerar ou parar a nave?\n[1] Acelerar\n[2] Parar\n:")
        if (op == 1) {
            return true
        } else if (op == 2) {
            return false
        } else {
            alert("Opção inválida!")
        }
    }
}

do {
    const valorMenu = menu() 

    if (valorMenu == true) {
        const newVelocity = prompt("Quantos km/s você deseja acelerar?")
        nave.speedUp(Number(newVelocity))

        if (nave.velocity > nave.maxVel){ 
            alert("[ERRO] Você está querendo entrar na velocidade " + nave.velocity + " km/s porém a velocidade máxima da sua nave é " + nave.maxVel + " km/s")

            nave.speedUp(Number(newVelocity)*-1)
        } 
    } else {
        alert("Dados finais:\nNome: " + nave.nome + "\nTipo: " + nave.tipo + "\nVelocidade máxima: " + nave.maxVel + " km/s \nVelocidade atual: " + nave.velocity + " km/s")
        console.log(nave)
        break
    }
} while (valorMenu = true)
