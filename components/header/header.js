/**
 * Global header
 */
'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './header.styl'

class Header extends React.Component {
  render () {
    return <header styleName="root">
      <div>Logo</div>
      <div>Search</div>
    </header>
  }
}

export default CSSModules(Header, styles)
