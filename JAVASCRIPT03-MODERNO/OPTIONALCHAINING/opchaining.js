// Exemplos de como usar o Optional Chaining

const usuario = {
    nome: 'Ryan',
    email: 'ryancosta@gmail.com',
    endereco: {
        logradouro: 'Rua Castelo Branco',
        complemento1: '123',
        complemento2: 'Ap 1000',
        cidade: {
            nome: 'Castanhal',
            estado: {
                nome: 'Pará',
                sigla: 'PA'
            }
        }
    },
    /*metodo() {
        return this.nome
    }*/
}

console.log(usuario?.endereco?.cidade?.estado?.nome)

console.log(usuario.metodo?.()) /* Uso em funções, apenas em casos onde estamos passando a referência de uma função.

Não fuciona na chamada de funções - Ex -> metodo?.() XXX*/