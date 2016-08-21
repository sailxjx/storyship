/**
 * Story falls on the left of homepage
 */
'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './story-falls.styl'
import EmbeddedEditor from '../embedded-editor'

class StoryFalls extends React.Component {
  render () {
    return <div>
      <EmbeddedEditor></EmbeddedEditor>
    </div>
  }
}

export default CSSModules(StoryFalls, styles)
