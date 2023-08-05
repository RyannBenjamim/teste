const Author = require("./Author");

const fulano = new Author("Fulano Silva", 27)

const post = fulano.addPost("Poema do Cumi", "Lorem ipsum isic...")

post.addComment("Raimundinho", "Uma verdadeira bosta")
post.addComment("Esther", "Achei lindo!")

console.log(fulano)
console.log(post)