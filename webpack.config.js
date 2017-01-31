var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.ts',
        vendor: './src/vendor.ts',
        polyfill: './src/polyfill.ts',
        style: './src/style/main.less'
    },
    output: {
        filename: "./dest/[name].js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.less', '.css']
    }
};