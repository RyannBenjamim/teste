let op

do {
    op = prompt("MENU:\n[1] Um\n[2] Dois\n[3] Três\n[4] Quatro\n[5] Encerrar\n:")

    if (op != 5) {
        alert("Você escolheu a opção: " + op)
    }

} while (op != 5)

alert("Sistema sendo encerrado...")