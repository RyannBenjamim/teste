let imoveis = []
let op

do {
    op = prompt(`Imóveis cadastrados = ${imoveis.length}\n\n[1] Salvar novo imóvel\n[2] Ver imóveis cadastrados\n[3] Sair`)

    switch (op) {
        case "1":
            let obj = {}
            obj.nome = prompt("Nome do proprietário:")
            obj.quartosQuant = prompt("Quantidade de quartos:")
            obj.banheirosQuant = prompt("Quantidade de banheiros:")
            let garagemOp = prompt("Possui garagem: [S/N]")
            if (garagemOp.toUpperCase() == "S") {
                obj.garagem = true
            } else {
                obj.garagem = false
            }
            imoveis.push(obj)
            break
        case "2":
            let exibir = ""
            for (let i = 0; i < imoveis.length; i++) {
                exibir += `Imóvel ${i+1}:\nProprietário: ${imoveis[i].nome}\nQuartos: ${imoveis[i].quartosQuant}\nBanheiros: ${imoveis[i].banheirosQuant}\nPossui garagem: ${imoveis[i].garagem}\n`
            }

            alert(exibir)
            break
        case "3":
            alert("Saindo do sistema...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (op !== "3")