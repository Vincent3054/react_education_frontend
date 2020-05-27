const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        include: path.join(__dirname, "dist/assets"),
        loader: "file-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.(pdf|svg)$/,
        use: "file-loader?name=[path][name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html"),
      // favicon: path.join(__dirname, "public", "favicon.ico")
    }),
    new Dotenv(),
  ],
  devServer: {
    port: dotenv.parsed.APP_PORT || 8000,
    host: dotenv.parsed.APP_HOST || "localhost",
    inline: true,
    hot: false,
  },
};
