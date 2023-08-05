function showMenu() {
    const op = prompt("MENU\n[1] Área do triângulo\n[2] Área do retângulo\n[3] Área do quadrado\n[4] Área do trapézio\n[5] Área do circulo\n[6] Sair do sistema")

    return op
}

function executeMenu() {
    let opesc
    do {
        opesc = showMenu()

        switch (opesc) {
            case "1":
                let baseTri = prompt("Valor da base:")
                let alturaTri = prompt("Valor da altura:")
                alert("Resultado: " + triangulo(baseTri, alturaTri))
                break
            case "2":
                let baseRet = prompt("Valor da base:")
                let alturaRet = prompt("Valor da altura:")
                alert("Resultado: " + retangulo(baseRet, alturaRet))
                break
            case "3":
                let lado = prompt("Valor do lado:")
                alert("Resultado: " + quadrado(lado))
                break
            case "4":
                let baseMaior = prompt("Valor da Base maior:")
                let baseMenor = prompt("Valor da Base menor:")
                let alturaTra = prompt("Valor da altura:")
                alert("Resultado: " + trapezio(baseMaior, baseMenor, alturaTra))
                break
            case "5":
                let raio = prompt("Valor do raio:")
                alert("Resultado: " + circulo(raio))
                break
            case "6":
                alert("Saindo do sistema...")
                break
            default:
                alert("Opção inválida!")
        }
    } while (opesc !== "6")
}

function triangulo(b, a) {
    return (b * a) / 2
}

function retangulo(b, a) {
    return b * a
}

function quadrado(l) {
    return l * 2
}

function trapezio(bmaior, bmenor, a) {
    return ((Number(bmaior) + Number(bmenor)) * a) / 2
}

function circulo(r) {
    return 3.14 * (r*2)
}

// Inicializando
executeMenu()