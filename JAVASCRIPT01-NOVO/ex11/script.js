let fila = [" 1 - Ryan", " 2 - Sâmia", " 3 - Lice", " 4 - Naldo"]
let esc

do {
    esc = prompt(`MENU\n${fila}\n[1] Novo paciente\n[2] Consultar paciente\n[3] Sair`)

    if (esc === "1") {
        let nome = prompt("Nome do paciente:")
        fila.push(` ${fila.length+1} - ${nome}`)
    } else if (esc === "2") {
        let atendido = fila.shift()
        alert(`Chamando o paciente: ${atendido}`)
    } else if (esc === "3") {
        alert("Finalizando....")
    } else {
        alert("Opção inválida!")
    }
} while (esc !== "3")
