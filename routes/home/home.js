'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './home.styl'

class Home extends React.Component {
  render () {
    return <div>Homepage</div>
  }
}

export default CSSModules(Home, styles)
