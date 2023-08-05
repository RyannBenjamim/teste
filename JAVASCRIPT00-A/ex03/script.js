let pilotName = prompt("Qual o seu nome piloto:");

let velocity = 0;

velocity = prompt(pilotName + ", a que velocidade você gostaria de acelerar a nave?");

let confirmVelocity = confirm("Entraremos na velocide de "+velocity+" Km/s, você deseja confirmar essa velocidade?");

if (confirmVelocity == true) {
    alert(pilotName + ", a nave está a "+ velocity+" Km/s.");
} else {
    velocity = prompt("a que velocidade você gostaria de acelerar a nave?");
    alert(pilotName + ", a nave está a "+ velocity+" Km/s.");
}

if (velocity <= 0) {
    alert("A nave está parada, considere partir e aumentar a velocidade");
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais");
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter");
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir");
} else {
    alert("Velocidade perigosa. Controle automático forçado");
}

alert("Piloto: "+pilotName);
alert("Velocidade: "+velocity+" Km/s")
