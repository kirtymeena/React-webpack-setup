const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, "/dist"), //bundle output path
        filename: '[name].js',
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "src/index.html"
    //     }),
    // ],
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/, //style files,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/public/icons/[name].[ext]'
                }
            }
        ]
    }
}