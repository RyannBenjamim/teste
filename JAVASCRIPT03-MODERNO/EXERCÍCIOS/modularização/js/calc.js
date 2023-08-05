// CALCULOS
const resultInput = document.getElementById('result')

function clear() {
    input.value = ""
    input.focus()
}

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

export {clear, calculate}