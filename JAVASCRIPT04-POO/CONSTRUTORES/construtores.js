// Criando a função construtora / forma antiga
function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = (quantity) => {
        this.inStock += quantity
    }
    this.save = () => {
        console.log("Salva no banco de dados!")
    }
}

const author = {name: "Fulano"}
const tags = ["Ficção", "Aventura", "Syfy"]

const livro01 = new Book("Livro 01", 404, tags, author)
console.log(livro01)
const livro02 = new Book("Livro 02", 604, tags, author)
console.log(livro02)

