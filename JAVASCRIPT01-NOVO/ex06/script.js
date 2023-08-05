const turista = prompt("Seu nome:")

let cidades = ""
let op = "1"
while (op !== "0") {
    op = prompt("Você já visitou alguma cidade? [Sim = 1/ Não = 0]:")

    if (op === "1") {
        let cidade = prompt("Qual o nome da cidade?")
        cidades += ` ${cidade}`
    } else if (op !== "1" && op !== "0") {
        alert("Opção inválida!")
    }
}

alert(`Nome do turista: ${turista}\nCidades visitadas: ${cidades}`)