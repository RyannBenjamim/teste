const Comment = require("./Comment")

class Post {
    constructor(title, content, author) {
        this.title = title
        this.contents = content
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(name, content) {
        const comment = new Comment(name, content)
        this.comments.push(comment)
    }
}

module.exports = Post