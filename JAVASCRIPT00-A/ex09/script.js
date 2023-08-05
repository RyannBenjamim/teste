const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

const maisQueNoveTripulantes = hitchedSpaceships.filter((spaceship) => spaceship[1] > 9)
const NomeMaisQueNoveTripu = maisQueNoveTripulantes.map((spaceship) => spaceship[0])

const indexPrimeiraNaveNaoEngatada = hitchedSpaceships.findIndex((spaceship) => spaceship[2] == false)

const spaceshipsUppercase = hitchedSpaceships.map((spaceship) => spaceship[0].toUpperCase())

alert(`Dados:\nNaves com mais de 9 trupulantes: ${NomeMaisQueNoveTripu.join(", ")}\n
Plataforma da primeira nave não engatada: Número ${indexPrimeiraNaveNaoEngatada+1}\n
Naves em caixa alta: ${spaceshipsUppercase.join(", ")}`)
