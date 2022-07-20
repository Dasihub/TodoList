const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.tsx")],
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    target: "web",
    stats: "only-error",
    devtool: "source-map",
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.browser": true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
}
