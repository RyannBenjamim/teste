let vagas = []

const listarVagas = () => {
    let txtVagas = ""

    vagas.forEach((vaga)=> {
        txtVagas += `Indice: ${vaga.indice}\nNome: ${vaga.nome}\nQuantidade de candidatos: ${vaga.quantCandidatos}\n\n`
    })

    alert(`Vagas:\n\n${txtVagas}`)
}

const criarVaga = () => {
    let nome
    let descricao
    let dataLimite
    let confirm

    do {
        nome = prompt("Nome da vaga")
        descricao = prompt("Descrição da vaga")
        dataLimite = prompt("Data limite")

        confirm = prompt("Confirmar criação da vaga? [S/N]")
    } while (confirm.toUpperCase() !== "S")

    vagas.push({indice: vagas.length,
                nome: nome,
                quantCandidatos: 0,
                candidatos: [],
                descricao: descricao,
                dataLimite: dataLimite,})

    alert("Vaga criada!")
}

const visualizarVaga = () => {
    let indice = Number(prompt("Digite o indice da vaga"))

    const vagaIndi = vagas.find((vaga) => vaga.indice === indice)

    if (vagaIndi !== undefined) {
        let txtCandidatos = ""
        vagaIndi.candidatos.forEach((candidato, index) => {
            txtCandidatos += `${index+1} - ${candidato}\n`
        })

        alert(`Dados da vaga\n\nÍndice: ${vagaIndi.indice}\nNome: ${vagaIndi.nome}\nQuantidade de candidatos: ${vagaIndi.quantCandidatos}\nCandidatos:\n${txtCandidatos}\nDescrição: ${vagaIndi.descricao}\nData limite: ${vagaIndi.dataLimite}`)
    } else {
        alert("Essa vaga não existe!")
    }
}

const inscreverCandidato = () => {
    let confirm = ""

    do {
        const nome = prompt("Nome do candidato")
        const indice = Number(prompt("Indice da vaga desejada"))

        const vagaIndi = vagas.find((vaga) => vaga.indice === indice)

        if (vagaIndi !== undefined) {
            alert(`Dados da vaga\n\nÍndice: ${vagaIndi.indice}\nNome: ${vagaIndi.nome}\nQuantidade de candidatos: ${vagaIndi.quantCandidatos}\nDescrição: ${vagaIndi.descricao}\nData limite: ${vagaIndi.dataLimite}`)

            confirm = prompt("Deseja confirmar a inscrição do candidato? [S/N]")

            if (confirm.toUpperCase() === "S") {
                vagas[vagaIndi.indice].candidatos.push(nome)
                vagas[vagaIndi.indice].quantCandidatos++
                alert("Candidato cadastrado!")
            } else {
                alert("Ação cancelada!")
            }
        } else {
            alert("Essa vaga não existe!")
        }
    } while (confirm.toUpperCase() !== "S")
}

const excluirVaga = () => {
    let confirm = ""

    do {
        const indice = Number(prompt("Indice da vaga que deseja excluir"))

        const vagaIndi = vagas.find((vaga) => vaga.indice === indice)

        if (vagaIndi !== undefined) {
            alert(`Dados da vaga\n\nÍndice: ${vagaIndi.indice}\nNome: ${vagaIndi.nome}\nQuantidade de candidatos: ${vagaIndi.quantCandidatos}\nDescrição: ${vagaIndi.descricao}\nData limite: ${vagaIndi.dataLimite}`)

            confirm = prompt("Deseja confirmar a exclusão dessa vaga? [S/N]")

            if (confirm.toUpperCase() === "S") {
                vagas.splice(indice, 1)
                alert("Vaga excluida!")
            } else {
                alert("Ação cancelada!")
            }
        } else {
            alert("Essa vaga não existe!")
        }
    } while (confirm.toUpperCase() !== "S")
}

/* ------------------- Funções principais ------------------- */

const showMenu = () => {
    return prompt("SISTEMA DE GERENCIAMENTO DE VAGAS\n\n[1] Listar vagas disponíveis\n[2]Criar uma nova vaga\n[3] Visualizar uma vaga\n[4] Inscrever um candidato\n[5] Excluir uma vaga\n[6] Sair do sistema")
}

const initSystem = () => {
    let op

    do {
        op = showMenu()

        switch(op) {
            case "1":
                listarVagas()
                break
            case "2":
                criarVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo do sistema...")
                break
            default:
                alert("Opção inválida!")
        }
    } while (op !== "6")
}

initSystem()