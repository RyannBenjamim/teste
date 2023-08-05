const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`Idade: ${ageInYears} anos`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Faltam ${daysToNextBirthday} dias para o próximo aniversário`)
}

birthday('2001/11/19')