const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const baseManifest = require("./chrome/manifest.json");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");
const config = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "./static/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "altCart",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#000000",
      },
      manifest: "manifest.json",
      filename: "index.html",
      template: "./static/index.html",
      hash: true,
    }),
    new CopyPlugin([
      {
        from: "chrome/background.js",
        to: "background.js",
      },
    ]),
    new CopyPlugin([
      {
        from: "chrome/content.js",
        to: "content.js",
      },
    ]),
    new CopyPlugin([
      {
        from: "chrome/icons",
        to: "icons",
      },
    ]),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
module.exports = config;

// const webpack = require("webpack");
// const path = require("path");
// // const fileSystem = require("fs")
// // const env = require("./utils/env")
// const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const baseManifest = require("./chrome/manifest.json");
// const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");

// // const alias = {};

// // const secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

// // const fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

// // if (fileSystem.existsSync(secretsPath)) {
// //   alias["secrets"] = secretsPath;
// // }

// const config = {
//   mode: "development",
//   devtool: "inline-source-map",
//   entry: {
//     popup: path.join(__dirname, "chrome", "js", "./static/index.js"),
//     content: path.join(__dirname, "chrome", "js", "./chrome/content.js"),
//     background: path.join(__dirname, "chrome", "js", "./chrome/background.js")
//   },
//   output: {
//     path: path.resolve(__dirname, "./build"),
//     filename: "[name].js"
//   },
//   resolve: {
//     extensions: ["*", ".js"]
//   },
//   plugins:
//   // [
//   //   new CleanWebpackPlugin(),
//   //   // expose and write the allowed env vars on the compiled bundle
//   //   new webpack.EnvironmentPlugin(["NODE_ENV"]),
//   //   new CopyWebpackPlugin([{
//   //     from: "./chrome/manifest.json",
//   //     transform: function (content, path) {
//   //       // generates the manifest file using the package.json informations
//   //       return Buffer.from(JSON.stringify({
//   //         description: process.env.npm_package_description,
//   //         version: process.env.npm_package_version,
//   //         ...JSON.parse(content.toString())
//   //       }))
//   //     }
//   //   }]),
//     [new HtmlWebpackPlugin({
//       title: "altCart", // change this to your app title
//       meta: {
//         charset: "utf-8",
//         viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
//         "theme-color": "#000000"
//       },
//       manifest: "manifest.json",
//       filename: "index.html",
//       template: "./static/index.html",
//       hash: true
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "./chrome/background.js"),
//       filename: "background.js",
//       chunks: ["background"]
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "./chrome/content.js"),
//       filename: "content.js",
//       chunks: ["content"]
//     }),
//     new CopyPlugin([
//       {
//         from: "chrome/icons",
//         to: "icons"
//       }
//     ]),
//     new WebpackExtensionManifestPlugin({
//       config: {
//         base: baseManifest
//       }
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"]
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ["file-loader"]
//       }
//     ]
//   }
// };
// module.exports = config;
