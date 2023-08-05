const getTransactionsUrl = 'http://localhost:3000/transactions'

function renderTransactions(transactions) {
    const transaction = document.createElement('div')
    transaction.classList.add('transaction')
    transaction.id = transactions.id

    const div = document.createElement('div')

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = transactions.name

    const value = document.createElement('p')
    value.classList.add('value')
    value.textContent = "R$ " + (transactions.value).toFixed(2)

    const id = document.createElement('p')
    id.classList.add('id')
    id.textContent = `Id: ${transactions.id}`

    div.append(name, value, id)

    const deleteBtn = document.createElement('div')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash">'
    // Evento de delete
    deleteBtn.addEventListener('click', async () => {
        await fetch(`${getTransactionsUrl}/${transactions.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'Application/json'
            }
        })

        document.querySelector('.transactions').innerHTML = ""

        getTransactions()
    })

    transaction.append(div, deleteBtn)
    document.querySelector('.transactions').appendChild(transaction)
    balanceUpdade()
}

async function getTransactions() {
    const response = await fetch(getTransactionsUrl)
    const data = await response.json()

    data.forEach(renderTransactions)
}

function transactionData() {
    return {
        name: document.querySelector('.new-transaction #name').value,
        value: Number(document.querySelector('.new-transaction #value').value)
    }
}

async function balanceUpdade() {
    const response = await fetch(getTransactionsUrl)
    const transactions = await response.json()

    const balance = transactions.reduce((value, transaction) => {
        return value + transaction.value
    }, 0)

    document.querySelector('.balance').textContent = `Saldo: R$ ${balance.toFixed(2)}`
}

getTransactions()

const form = document.querySelector('.new-transaction')
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const response = await fetch(getTransactionsUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(transactionData())
    })

    form.reset()
    const savedTransaction = await response.json()
    renderTransactions(savedTransaction)
})

const editeBtn = document.querySelector('.edite-btn')
editeBtn.addEventListener('click', async () => {
    const inputId = document.querySelector('#id').value

    if (inputId === "") alert('[ERR0] Digite um número de id')
    else {
        const transactionId = await fetch(`${getTransactionsUrl}/${inputId}`)
        if (transactionId) {
            await fetch(`${getTransactionsUrl}/${inputId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(transactionData())
            })

            document.querySelector('.transactions').innerHTML = ""
            getTransactions()
        } else {
            alert('[ERRO] Transação não encontrada')
        }
    }
})