var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


var APP_DIR = ;

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
            //{ test: /\.css$/,  loader: path.join(__dirname, 'server', 'style-collector') + '!css-loader' },
            { test:  /\.json$/, loader: 'json-loader' }
            //{ test: /\.ejs$/, loader: 'ejs-loader?variable=data' }
        ]
    }
},
{
  name: 'client',
  entry: path.resolve(__dirname, 'src/client/app') + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }

}

];

