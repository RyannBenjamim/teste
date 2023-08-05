let spaceshipname = prompt("Digite o nome da nave:")

let spaceshipvelocity = 0

let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n[1] Acelerar a nave em 5km/s\n[2] Desacelerar a nave em 5k/s\n[3] Imprimir dados da nave\n[4] Sair do programa\n:")
    }

    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5

    if (newVelocity < 0) {
        newVelocity = 0
    }

    return newVelocity
}

function printSpaceship(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + " km/s")
}

do {
    chosenOption = showMenu()

    switch (chosenOption) {
        case "1":
            spaceshipvelocity = speedUp(spaceshipvelocity)
            break
        case "2":
            spaceshipvelocity = slowDown(spaceshipvelocity)
            break
        case "3":
            printSpaceship(spaceshipname, spaceshipvelocity)
            break
        case "4":
            alert("Saindo do sistema...")
            break
        default:
            break
    }

} while (chosenOption != 4)


