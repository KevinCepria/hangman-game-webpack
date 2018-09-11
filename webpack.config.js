const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    // watch: true,
    module:{
        rules:[{
           test:/\.js$/,
        exclude: /node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime'], //for async await
                }
            }
        }]
    },
    devServer:{
        contentBase: path.resolve(__dirname,'public'),
        publicPath: '/scripts/'
    },
    devtool:'source-map'
}