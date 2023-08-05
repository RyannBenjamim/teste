const jogador01 = document.getElementById('jogadorX')
const jogador02 = document.getElementById('jogadorO')
const quadros = document.querySelectorAll('.quadros')
const audioClick = document.querySelector('#click')
const audioWin = document.querySelector('#win')
let results = document.querySelector('.results p')
let nameJog01 = ""
let nameJog02 = ""
let pontosJ01 = 0
let pontosJ02 = 0
let controle = false // False = partida não começou
let controleDeRodada = 01 // Jogador da vez
let empateControle = 0 // Se a variável for igual a 9, ocorreu um empate


//inicializando as informações para começar o jogo
function inicializarDados() {
    controle = true
    controleDeRodada = 01
    empateControle = 0
    nameJog01 = document.getElementById('jogadorx').value
    nameJog02 = document.getElementById('jogadorO').value

    quadros.forEach(function(quadro) {
        quadro.innerText = ""
        quadro.dataset.mark = ""
        quadro.dataset.click = "no"
        quadro.style.backgroundColor = '#212529'
    })
}

// INICIALIZANDO O JOGO
document.querySelector('form').addEventListener('submit', function(ev) {
    ev.preventDefault()

    audioClick.play()
    //Resetando as informações para começar o jogo
    pontosJ01 = 0
    pontosJ02 = 0
    inicializarDados()

    document.getElementById('jog01').innerText = `${nameJog01}: ${pontosJ01}`
    document.getElementById('jog02').innerText = `${nameJog02}: ${pontosJ02}`
    results.innerText = `Agora é a vez de ${nameJog01} jogar!`
})

// Começar mais uma partida 
document.querySelector('.tela02 button').addEventListener('click', function() {
    audioClick.play()
    inicializarDados()
})

quadros.forEach(function(quadro) {
    quadro.addEventListener('click', function() {
        if (controle === true && quadro.dataset.click === 'no') {
            audioClick.play()
            empateControle++
            quadro.dataset.click = "si"

            if (controleDeRodada == 01) {
                quadro.innerText = 'X'
                quadro.dataset.mark = "x"
                controleDeRodada = 02
                results.innerText = `Agora é a vez de ${nameJog02} jogar!`
            } else {
                quadro.innerText = 'O'
                quadro.dataset.mark = "o"
                controleDeRodada = 01
                results.innerText = `Agora é a vez de ${nameJog01} jogar!`
            }

            avaliarVitoriaX()
            avaliarVitoriaO()
            analiseDeEmpate()
        }
    }) // FIM QUADRO CLICK
}) // FIM QUADROS FOR EACH

const quadro01 = document.getElementById('quadro01')
const quadro02 = document.getElementById('quadro02')
const quadro03 = document.getElementById('quadro03')
const quadro04 = document.getElementById('quadro04')
const quadro05 = document.getElementById('quadro05')
const quadro06 = document.getElementById('quadro06')
const quadro07 = document.getElementById('quadro07')
const quadro08 = document.getElementById('quadro08')
const quadro09 = document.getElementById('quadro09')

function marcarAreasDaVitoria(a1, a2, a3) {
    a1.style.backgroundColor = '#ff0043'
    a2.style.backgroundColor = '#ff0043'
    a3.style.backgroundColor = '#ff0043'
}

function vitoriaX() {
    results.innerText = `****  Vitória de ${nameJog01}!  ****`
    atualizarPlacarX()
    audioWin.play()
}

function atualizarPlacarX() {
    pontosJ01++
    document.getElementById('jog01').innerText = `${nameJog01}: ${pontosJ01}`
}

function vitoriaO() {
    results.innerText = `****  Vitória de ${nameJog02}!  ****`
    atualizarPlacarO()
    audioWin.play()
}

function atualizarPlacarO() {
    pontosJ02++
    document.getElementById('jog02').innerText = `${nameJog02}: ${pontosJ02}`
}

function avaliarVitoriaX() {
    if (quadro01.dataset.mark === 'x' && quadro02.dataset.mark === 'x' && quadro03.dataset.mark === 'x') {
        console.log('foi nesse')
        marcarAreasDaVitoria(quadro01, quadro02, quadro03)
        controle = false
        vitoriaX()
    } else if (quadro04.dataset.mark === 'x' && quadro05.dataset.mark === 'x' && quadro06.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro04, quadro05, quadro06)
        controle = false
        vitoriaX()
    } else if (quadro07.dataset.mark === 'x' && quadro08.dataset.mark === 'x' && quadro09.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro07, quadro08, quadro09)
        controle = false
        vitoriaX()
    } else if (quadro01.dataset.mark === 'x' && quadro04.dataset.mark === 'x' && quadro07.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro01, quadro04, quadro07)
        controle = false
        vitoriaX()
    } else if (quadro02.dataset.mark === 'x' && quadro05.dataset.mark === 'x' && quadro08.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro02, quadro05, quadro08)
        controle = false
        vitoriaX()
    } else if (quadro03.dataset.mark === 'x' && quadro06.dataset.mark === 'x' && quadro09.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro03, quadro06, quadro09)
        controle = false
        vitoriaX()
    } else if (quadro01.dataset.mark === 'x' && quadro05.dataset.mark === 'x' && quadro09.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro01, quadro05, quadro09)
        controle = false
        vitoriaX()
    } else if (quadro03.dataset.mark === 'x' && quadro05.dataset.mark === 'x' && quadro07.dataset.mark === 'x') {
        marcarAreasDaVitoria(quadro03, quadro05, quadro07)
        controle = false
        vitoriaX()
    }
}

function avaliarVitoriaO() {
    if (quadro01.dataset.mark === 'o' && quadro02.dataset.mark === 'o' && quadro03.dataset.mark === 'o') {
        console.log('foi nesse')
        marcarAreasDaVitoria(quadro01, quadro02, quadro03)
        controle = false
        vitoriaO()
    } else if (quadro04.dataset.mark === 'o' && quadro05.dataset.mark === 'o' && quadro06.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro04, quadro05, quadro06)
        controle = false
        vitoriaO()
    } else if (quadro07.dataset.mark === 'o' && quadro08.dataset.mark === 'o' && quadro09.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro07, quadro08, quadro09)
        controle = false
        vitoriaO()
    } else if (quadro01.dataset.mark === 'o' && quadro04.dataset.mark === 'o' && quadro07.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro01, quadro04, quadro07)
        controle = false
        vitoriaO()
    } else if (quadro02.dataset.mark === 'o' && quadro05.dataset.mark === 'o' && quadro08.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro02, quadro05, quadro08)
        controle = false
        vitoriaO()
    } else if (quadro03.dataset.mark === 'o' && quadro06.dataset.mark === 'o' && quadro09.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro03, quadro06, quadro09)
        controle = false
        vitoriaO()
    } else if (quadro01.dataset.mark === 'o' && quadro05.dataset.mark === 'o' && quadro09.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro01, quadro05, quadro09)
        controle = false
        vitoriaO()
    } else if (quadro03.dataset.mark === 'o' && quadro05.dataset.mark === 'o' && quadro07.dataset.mark === 'o') {
        marcarAreasDaVitoria(quadro03, quadro05, quadro07)
        controle = false
        vitoriaO()
    }
}

function analiseDeEmpate() {
    if (empateControle === 9 && controle === true) {
        results.innerText = "---- Empate! ----"
        atualizarPlacarX()
        atualizarPlacarO()
    }
}