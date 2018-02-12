import express from 'express';
import App from '../../client/src/app';

const server = express();

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', (req, res) => {
  const html = renderToString(<App />);

  res.render('index',{body: html});
});

server.listen(3000, () => {
  console.log('Hello World listening on port 3000!');
});
