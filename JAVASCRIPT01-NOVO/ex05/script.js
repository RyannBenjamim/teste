const valorEmMetros = prompt("Digite o valor em metros")

const escolha = prompt("[1] Milímitro (mm)\n[2] Centímetro (cm)\n[3] Decímetro (dm)\n[4] dacâmetro (dam)\n[5] Hectômetro (hm)\n[6] Quilômetro (km)\n:")

let valorConvertido = 0

switch (escolha) {
    case "1":
        valorConvertido = valorEmMetros * 1000
        alert(`${valorEmMetros} m em mm = ${valorConvertido}`)
        break
    case "2":
        valorConvertido = valorEmMetros * 100
        alert(`${valorEmMetros} m em cm = ${valorConvertido}`)
        break
    case "3":
        valorConvertido = valorEmMetros * 10
        alert(`${valorEmMetros} m em dm = ${valorConvertido}`)
        break
    case "4":
        valorConvertido = valorEmMetros / 10
        alert(`${valorEmMetros} m em dam = ${valorConvertido}`)
        break
    case "5":
        valorConvertido = valorEmMetros / 100
        alert(`${valorEmMetros} m em hm = ${valorConvertido}`)
        break
    case "6":
        valorConvertido = valorEmMetros / 1000
        alert(`${valorEmMetros} m em km = ${valorConvertido}`)
        break
    default:
        alert("Opção inválida:")
        break
}
