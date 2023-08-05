import { Account } from "./account.js"

async function checkEmail(email) {
    const accounts = await fetch('http://localhost:3000/accounts').then(res => res.json())
    return accounts.find((account) => email === account.email)
}

async function checkPassword(password) {
    const accounts = await fetch('http://localhost:3000/accounts').then(res => res.json())
    return accounts.find((account) => password === account.password)
}

async function checkLogin(email, password) {
    const accounts = await fetch('http://localhost:3000/accounts').then(res => res.json())
    return accounts.find((account) => account.email === email && account.password === password)
}

// -------------- CADASTRO -------------- //

document.querySelector('.form-created-account form').addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const nameSU = document.querySelector('#nameSU')
    const emailSU = document.querySelector('#emailSU')
    const passwordSU = document.querySelector('#passwordSU')
    const account = new Account(nameSU.value, emailSU.value, passwordSU.value)

    const result = await checkEmail(account.email)

    if (result) {
        emailSU.classList.add('error')
        emailSU.value = "Email já cadastrado no sistema"
    } else {
        await fetch('http://localhost:3000/accounts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(account.getAccount()),
        })

        document.querySelector('.create-account-btn').textContent = 'Success'
        setTimeout(() => {
            document.querySelector('.create-account-btn').textContent = 'Create account'
        }, 2000)

        document.querySelector('.hometext').textContent = `Bem vindo ${result.name}`
        window.location.href = '../html/home.html'
    }
})

// -------------- LOGIN -------------- //

document.querySelector('.form-login form').addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const emailSI = document.querySelector('#emailSI')
    const passwordSI = document.querySelector('#passwordSI')

    const result = await checkLogin(emailSI.value, passwordSI.value)
    console.log(result)

    if (result) {
        //document.querySelector('.hometext').textContent = `Bem vindo ${result.name}`
        window.location.replace('../home.html')
    } else {
        emailSI.classList.add('error')
        emailSI.value = ""
        emailSI.placeholder = "Acesso negado"
        passwordSI.classList.add('error')
        passwordSI.value = ""
        passwordSI.placeholder = "Acesso negado"
    }
})

// -------------- FORMS JS -------------- //

const boxSignUp = document.querySelector('.form-created-account')
const boxSignIn = document.querySelector('.form-login')
const signup = document.querySelector('.form-options .created-account')
const signin = document.querySelector('.form-options .login')

signup.addEventListener('click', () => {
    boxSignIn.style.display = 'none'
    boxSignUp.style.display = 'block'
})

signin.addEventListener('click', () => {
    boxSignUp.style.display = 'none'
    boxSignIn.style.display = 'block'
})