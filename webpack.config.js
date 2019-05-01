const path = require('path');

module.exports = (env) => {
    const environment = env || 'production';

    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
    },
    optimization: {
        minimize: true
      },
    module: {
        rules: [
            {
              test: /\.js$/,
              loader: "babel-loader"
            },
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader'},
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                }
              ]
            }
          ]
        }
      }};