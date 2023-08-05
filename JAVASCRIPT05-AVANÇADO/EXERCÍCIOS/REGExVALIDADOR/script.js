const form = document.querySelector('form')

const userInputs = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
}

function resetFormStyles(inputs) {
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('error', 'success')
        document.querySelector(`#${key}_error`).textContent = ""
    })
}

function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error('Senha inválida.')
        err.input = 'password'
        throw err
    }
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    resetFormStyles(userInputs)

    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}_error`).textContent = err.message
    }
})

