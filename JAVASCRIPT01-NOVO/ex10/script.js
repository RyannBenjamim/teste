const palavra = prompt("Digite uma palavra:")
let deTrasPraFrente = ""

for (let i = palavra.length; i > 0; i--) {
    deTrasPraFrente += palavra[i-1]
}

if (palavra === deTrasPraFrente) {
    alert("É um palíndromo")
} else {
    alert("Não é um palíndromo\n\n" + palavra + "\n" + deTrasPraFrente)
}
