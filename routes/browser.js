/* eslint-disable jsx-quotes */
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={About}/>
  </Router>
), document.getElementById('app'))
