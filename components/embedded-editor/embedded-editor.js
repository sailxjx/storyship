/**
 * Embedded editor on the top of story falls
 */
'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './embedded-editor.styl'

class EmbeddedEditor extends React.Component {
  render () {
    return <div styleName="root">
      <avatar styleName="avatar">
        <img styleName="avatar-image" title="avatar" src="https://avatars2.githubusercontent.com/u/909853?v=3&s=460"/>
      </avatar>
      <textarea styleName="editor" placeholder="Write your story..."></textarea>
    </div>
  }
}

export default CSSModules(EmbeddedEditor, styles)
