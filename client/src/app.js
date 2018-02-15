import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import { Router, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute.js';
import { store } from './components/reduxStore.js';
import HomePage from './HomePage/HomePage'
import LoginMain from './UserManagement/loginMain'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <StaticRouter>
          <Route path="/" component={HomePage}/>
          <Route path="/login" component={LoginMain}/>
        </StaticRouter>
      </Provider>
    );
  }
}

export default App;
