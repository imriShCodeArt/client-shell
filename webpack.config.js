const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const path = require("path");
const name = process.env.APP_NAME_CLIENT_SHELL || require("./package.json").name;

const port = process.env.PORT_CLIENT_SHELL || 4000;

module.exports = {
  output: {
    publicPath: "http://localhost:" + port + "/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      shared: path.resolve(__dirname, "./shared"),
      providers: path.resolve(__dirname, "./providers"),
    },
  },

  devServer: {
    port: port,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: name,
      filename: "remoteEntry.js",
      remotes: {
        components: "components@http://localhost:4001/remoteEntry.js",
        cards: "cards@http://localhost:4002/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: deps["@emotion/react"],
        },
        "react-intl": {
          singleton: true,
          requiredVersion: deps["react-intl"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      title: name,
      favicon: "./src/assets/favicon.ico",
    }),
  ],

  optimization: {
    runtimeChunk: "single",
  },
};
