var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

//console.log('Node Modules: '+ JSON.stringify(nodeModules));
module.exports = [
{
    // The configuration for the server-side rendering
    name: 'server',
    target: 'node',
    entry: './server/routes/server.js',
    output: {
        path: path.join(__dirname, './server/bin'),
        publicPath: path.join(__dirname, './server/bin'),
        filename: 'server.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
            { test : /\.jsx?/,

                loaders: [
                    'babel-loader'
                    //,'jsx-loader'
                ]
            },
            {test: /\.css$/, use: [
                'style-loader',
                'css-loader'
                ]
              },
            {test:  /\.json$/, loader: 'json-loader' },
            {test: /(\.eot|\.woff2|\.jpg|\.ttf|\.svg)/, loader: 'file-loader'},
        ]
    }
},
{
  name: 'client',
  entry: path.resolve(__dirname, 'client/src') + '/app.js',
  output: {
    path: path.join(__dirname, './server/public/js'),
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          { test : /\.jsx?/,

              loaders: [
                  'babel-loader'
                  //,'jsx-loader'
              ]
          },
          {test: /\.css$/, use: [
            'style-loader',
            'css-loader'
            ]
          },
          {test:  /\.json$/, loader: 'json-loader' },
          {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
          },
      ]
  }

}

];
