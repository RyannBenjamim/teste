let olderName = prompt("Nome da pessoa mais velha:");
let olderAge = prompt("Idade da pessoa mais velha:");

let yongName = prompt("Nome da pessoa mais nova:");
let yongAge = prompt("Idade da pessoa mais nova:");

let differenceAge = olderAge - yongAge;

alert(`Pessoa mais velha: \n Nome: ${olderName} \n Idade: ${olderAge}`);
alert(`Pessoa mais nova: \n Nome: ${yongName} \n Idade: ${yongAge}`);

alert(`A diferença de idade entre ${olderName} e ${yongName} é de ${differenceAge} anos.`); 