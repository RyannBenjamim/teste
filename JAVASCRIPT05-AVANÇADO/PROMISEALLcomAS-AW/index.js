// USANDO ASYNC E AWAIT COM UMA PROMISE ALL

function waitFor(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [1, 2, 3, 4, 5]

async function execute() {
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))

    console.log(squares)
}

execute()