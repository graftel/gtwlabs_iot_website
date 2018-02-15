import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomePage from '../HomePage/HomePage'
import LoginMain from '../UserManagement/loginMain'


module.exports = (
  <div>
    <Route path="/" component={HomePage}/>
    <Route path="/login" component={LoginMain}/>
  </div>
)
