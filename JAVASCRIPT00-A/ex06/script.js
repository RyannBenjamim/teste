let nome = prompt("Digite a palavra que será invertida:")
let nomeInvert = ""

for (i = nome.length-1; i >= 0; i--) {
    if (nome[i] == "e") {
        break
    } else {
        nomeInvert += nome[i]
    }
}

alert("Palavra normal "+nome+"\nPalavra invertida: "+nomeInvert)