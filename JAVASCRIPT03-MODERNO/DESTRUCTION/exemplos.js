// -------- DESTRUCTION EM OBJETOS -------- //

const pessoa = {
    name: 'Elton',
    age: 26
}

// "Retirando" o age de dentro do objeto
const { age } = pessoa
console.log(age)

/* Dessa maneira podemos escolher o nome que
vamos usar como referência para o atributo age*/
const { age: idade } = pessoa
console.log(idade)

// -------- DESTRUCTION EM ARRAYS -------- //

// "Retirando" banana e pera de dentro do array
const fruits = ["banana", "pera", "uva"]

const [b, p] = fruits
console.log(b, p)

// "Retirando apenas os dois últimos elementos do array"

const [, ba, uv] = fruits
console.log(ba, uv)

/*Usando o ...rest para armazenar o resto dos
elementos do array que não foram desestruturados*/

const [banana, ...rest] = fruits

console.log(banana)
console.log(rest)

// -------- DESTRUCTION EM FUNÇÕES -------- //

// Função com objetos

function liquidificador({ pera, ...rest }) {
    console.log(pera, rest)
}

const frutas = {
    banana: "banana",
    pera: "pera",
    maça: "maça"
}
liquidificador(frutas)

// Função com arrays

function series([ dw, ...rest ]) {
    console.log(dw, rest)
}

series(["Doctor Who", "Stranger Things", "Dark"])

// Exemplos mais complexos

const brasil = {
    populacao: '212.6 milhões',
    renda_per_capita: 'us$ 6.796,84',
    capital: 'Brasilia',
    religiao: {
        catolica: '64.6%',
        protestante: '22.2%'
    },
    regioes: [
        'norte',
        'nordeste',
        'centro-oeste',
        'sul',
        'sudeste',
    ]
}

const { capital, religiao: { catolica }, regioes: [reg1, ...resto] } = brasil

console.log(capital)
console.log(catolica)
console.log(reg1)
console.log(resto)

/* Guardando o valor de capital apenas se ele não for undefined, se o capital não existir a string "Não informado"
fica guardada na variável" */

const { capital: capital_do_pais = "Não informado" } = brasil
console.log(capital_do_pais)