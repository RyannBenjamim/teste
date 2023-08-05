class Comment {
    constructor(name, content) {
        this.name = name
        this.contents = content
        this.createdAt = new Date()
    }
}

module.exports = Comment