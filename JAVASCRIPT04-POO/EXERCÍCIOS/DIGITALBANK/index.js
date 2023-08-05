const App = require("./App")

App.createUser("ryancosta@gmail.com", "Ryan Costa Benjamim")
App.createUser("samiacosta@gmail.com", "Sâmia Costa Benjamim")
App.createUser("felipespindola@gmail.com", "Felipe Spindola")

App.deposit("ryancosta@gmail.com", 100000)

App.transfer("ryancosta@gmail.com", "samiacosta@gmail.com", 5000)

App.changeLoanFee(10)

App.takeLoan("felipespindola@gmail.com", 2000, 24)

console.log(App.findUser("ryancosta@gmail.com"))
console.log(App.findUser("ryancosta@gmail.com").account)
console.log(App.findUser("samiacosta@gmail.com"))
console.log(App.findUser("samiacosta@gmail.com").account)
console.log(App.findUser("felipespindola@gmail.com"))
console.log(App.findUser("felipespindola@gmail.com").account.loans[0].installments)

