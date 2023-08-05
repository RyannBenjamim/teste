let numero = Number(prompt("Digite um número:"))
let resultado = ""

for (let i = 1; i <= 20; i++) {
    resultado += (numero * i) + "\n" 
}

alert("Resultado da tabuada de " + numero + "\n\n" + resultado)