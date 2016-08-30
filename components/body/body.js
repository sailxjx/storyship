'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './body.styl'
import StoryFalls from '../story-falls'

class Body extends React.Component {
  render () {
    return <div styleName="root">
      <StoryFalls></StoryFalls>
    </div>
  }
}

export default CSSModules(Body, styles)
