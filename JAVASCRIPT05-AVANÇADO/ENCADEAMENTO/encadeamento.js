// EXEMPLO DE ENCADEAMENTO DE PROMISES
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('Age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

// ESTRUTURA DO ENCADEAMENTO
getAge('sjsjssj')
    .then((age) => {
        return checkAge(age)
    })
    .then((isOver18) => {
        if (isOver18) {
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }
    })
    .catch((erro) => {
        console.log(erro.message)
    })