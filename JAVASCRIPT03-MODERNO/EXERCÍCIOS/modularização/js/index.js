import { themes } from "./themes.js"
import { copy } from "./copy.js"
import { addNewValue, keyChecker } from "./keydown.js"
import { clear, calculate } from './calc.js';

document.querySelectorAll('.charKey').forEach(addNewValue)

document.querySelector("#input").addEventListener('keydown', keyChecker) 

document.getElementById('clear').addEventListener('click', clear)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copy)

document.getElementById('themeSwitcher').addEventListener('click', themes)

