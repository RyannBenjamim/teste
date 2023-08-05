module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js'
    },
    mode: 'production'
}