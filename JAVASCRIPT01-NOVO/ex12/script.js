let cartas = [1, 23, 45, "A"]
let esc

do {
    esc = prompt("Cartas atuais do baralho\n"+cartas+"\n[1] Adicionar uma carta\n[2] Retirar uma carta\n[3] Sair")

    if (esc === "1") {
        let nome = prompt("Qual a carta:")
        cartas.push(nome)
    } else if (esc === "2") {
        let atendido = cartas.pop()
        alert(`Carta puxada: ${atendido}`)
    } else if (esc === "3") {
        alert("Finalizando....")
    } else {
        alert("Opção inválida!")
    }
} while (esc !== "3")