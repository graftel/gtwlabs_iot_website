import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store } from './components/reduxStore.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'bootstrap'
import routes from './components/routes'

import Home from './HomePage/HomePage'
import LoginMain from './UserManagement/LoginMain'
import NotFound from './ErrorPage/notfound'
//window.jQuery = window.$ = require('jquery')
//require('bootstrap')
//{renderRoutes(routes)}
//<Route exact path='/' component={Home}/>
//<Route path='/login' component={LoginMain}/>
render((
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
), document.getElementById('reactbody'));
