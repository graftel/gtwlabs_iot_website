import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/src/app';

const server = express();

var views_path = process.cwd().replace(/\\/g, '/') + "/server/views/";
// set the view engine to ejs
server.set('view engine', 'ejs');
server.set('views', views_path);
server.use(express.static('src/public'));
// use res.render to load up an ejs view file

// index page 
server.get('/', (req, res) => {
  const html = renderToString(<App />);

  console.log(html);
  res.render('index',{body: html});
});

server.listen(3000, () => {
  console.log('Hello World listening on port 3000!');
});
