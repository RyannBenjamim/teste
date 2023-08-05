let quantDinheiro = Number(prompt("Sua quantidade de dinheiro:"))
let op

do {
    op = prompt(`Você tem: ${quantDinheiro} $ Reais\n\n[1] Adicionar\n[2] Retirar\n[3] Sair\n:`)
    
    let quant = 0
    if (op === "1") {
        quant = Number(prompt("Quanto você deseja adicionar:"))
        quantDinheiro += quant
    } else if (op == 2) {
        quant = Number(prompt("Quanto você deseja retirar:"))
        quantDinheiro -= quant
    } else if (op == 3) {
        alert("Encerrando o sistema...")
    } else {
        alert("Opção inválida!")
    }
    
} while (op != 3)