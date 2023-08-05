const jogadoresSection = document.getElementById("jogadoresSection")
const btnEscalar = document.getElementById("btnEscalar")
const btnRemover = document.getElementById("btnRemover")

const posicao = document.getElementById("posicao")
const nome = document.getElementById("nome")
const numero = document.getElementById("numero")

btnEscalar.addEventListener("click", () => {
    const confirmar = confirm("Deseja confirmar a escalação de "+nome.value+"?")

    if (confirmar === false) {
        alert("Escalação cancelada!")
        posicao.value = ""
        nome.value = ""
        numero.value = ""
        return
    }

    const h3 = document.createElement("h3")
    h3.innerText = "Jogador " + nome.value

    const div = document.createElement("div")

    const jogNome = document.createElement("p")
    jogNome.innerText = "Nome: " + nome.value
    const jogPosicao = document.createElement("p")
    jogPosicao.innerText = "Posição: " + posicao.value
    const jogNumero = document.createElement("p")
    jogNumero.innerText = "Número: " + numero.value
    jogNumero.classList.add("numeros")
    jogNumero.id = numero.value

    div.appendChild(jogNome)
    div.appendChild(jogPosicao)
    div.appendChild(jogNumero)

    jogadoresSection.append(h3, div)

    posicao.value = ""
    nome.value = ""
    numero.value = ""
})

btnRemover.addEventListener("click", () => {
    const numeroRemover = prompt("Informe o número da camisa do jogador que deseja remover")

    const h3s = document.getElementsByTagName("h3")
    const divs = document.getElementsByTagName("div")
    const numeros = document.getElementsByClassName("numeros")

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i].id === numeroRemover) {

            const conf = confirm("Deseja confirmar a remoção?")
            if (conf) {
                jogadoresSection.removeChild(h3s[i])
                jogadoresSection.removeChild(divs[i])
                return
            } else {
                alert("Remoção cancelada!")
                return
            }
        }
    }

    alert("Esse jogador não está na escalação!")
})