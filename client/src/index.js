import React from 'react';
import {render} from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
window.jQuery = window.$ = require('jquery');
require('bootstrap');

render(<App/>, document.getElementById('reactbody'));
