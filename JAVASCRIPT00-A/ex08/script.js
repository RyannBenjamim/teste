let velocity = 150

function desacelerar(vel, imprimir) {
    let newVelocity = vel - 20

    if (newVelocity < 0) {
        newVelocity = 0
    }

    imprimir(newVelocity)
    return newVelocity
}

while (velocity > 0) {
    velocity = desacelerar(velocity, function(vel) {
        console.log("Desacelerando.. Velocidade atual: " + vel + " km/s")
    })
}

console.log("A nave está parada, as comportas podem ser abertas")

