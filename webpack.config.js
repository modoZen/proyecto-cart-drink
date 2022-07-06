const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv       = require('dotenv-webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  output:{
    filename: 'app.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: 'public/index.html'
    }),
    new Dotenv()
  ],
  resolve:{
    alias:{
      '@components': path.resolve(__dirname,'src/components/'),
      '@icons': path.resolve(__dirname,'src/assets/icons/'),
      '@sass': path.resolve(__dirname,'src/sass/'),
    }
  },
  module:{
    rules:[
      {
          test:/\.(js|jsx)$/,
          exclude: /node_modules/,
          use:{
              loader: 'babel-loader',
              options:{
                  presets:[
                  '@babel/preset-env',
                  '@babel/preset-react'
                  ],
                  plugins:[
                  "@babel/plugin-transform-runtime"
                  ]
              }
          }
      },
      {
        test:/\.(png|jp(e*)g|svg|gif)$/,
        type:'asset'
      },
      {
        test: /\.(css|scss)$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    },
    ]
  },
  devServer:{
    historyApiFallback: true
  }
}
