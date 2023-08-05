let name = prompt("Nome da espaçonave:")
let newName = ""
let substituir = prompt("Qual caractere você deseja substituir?")
let substituto = prompt("Qual caracterere entrará no lugar?")

for (i = 0; i < name.length; i++) {
    console.log(i)
    if (name[i] == substituir) {
        newName += substituto
    } else {
        newName += name[i]
    }
}

alert("Nome antigo: "+name+"\nNome atualizado: "+newName)