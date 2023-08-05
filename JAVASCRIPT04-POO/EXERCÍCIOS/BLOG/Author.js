const Post = require("./Post")

class Author {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.posts = []
    }

    addPost(title, content) {
        const post = new Post(title, content, this.name)
        this.posts.push(post)

        return post
    }
}

module.exports = Author