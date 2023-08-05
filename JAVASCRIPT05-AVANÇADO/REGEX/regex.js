// Exemplo de uso de uma regex

function PhoneNumber(PhoneNumberString) {
    const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g, "")
    console.log(fixedString)
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber("+   hdhd55 (19) 99h99-   9kkd999"))