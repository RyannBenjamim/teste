const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Castelo Branco", 682, "Santa Lídia", "Castanhal", "PA")
const ryan = new Person("Ryan", addr)

console.log(addr)
console.log(ryan)
console.log(ryan.address.fullAddress())