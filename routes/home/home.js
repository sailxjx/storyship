'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './home.styl'
import Header from '../../components/header'
import StoryFalls from '../../components/story-falls'

class Home extends React.Component {
  render () {
    return <div>
      <Header></Header>
      <StoryFalls></StoryFalls>
      Homepage 首页
    </div>
  }
}

export default CSSModules(Home, styles)
