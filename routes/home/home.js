'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './home.styl'
import Header from '../../components/header'
import Body from '../../components/body'

class Home extends React.Component {
  render () {
    return <div>
      <Header></Header>
      <Body></Body>
    </div>
  }
}

export default CSSModules(Home, styles)
