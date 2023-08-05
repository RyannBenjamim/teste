class Book {
    constructor(title, ) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const eragon = new Book("Eragon")
console.log(eragon)
const eldest = new Book("Eldest")
console.log(eldest)

eragon.publish()
eldest.publish()

console.log(eragon)
console.log(eldest)