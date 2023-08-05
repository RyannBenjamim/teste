// KEYDOWN FUNCTIONS
import { calculate } from "./calc.js"
const allowedKeys = ['(', ')', '/', '*', '-', '+', '.', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
const input = document.getElementById('input')

function addNewValue(keyBtn) {
    keyBtn.addEventListener('click', function() {
        const value = keyBtn.dataset.value
        input.value += value
    })
}

function keyChecker(ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        if (allowedKeys.slice(0, 6).includes(ev.key)) {
            input.value += ` ${ev.key} `
        } else {
            input.value += ev.key
        }
        return
    }

    if (ev.key == 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (ev.key == 'Enter') {
        calculate()
    }
}

export {addNewValue, keyChecker}