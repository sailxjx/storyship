#!/usr/bin/env node
/**
 * Init component directory
 * Commands:
 * - init <path>  // Init package in the path, use the name of path as the package name
 * - init         // Init package in current directory.
 */
'use strict'

const fs = require('fs')
const path = require('path')

function init () {
  let name, moduleName
  let root = process.argv[3]
  if (root) {
    fs.mkdirSync(root)
    name = path.basename(root)
    process.chdir(root)
  } else {
    root = process.cwd()
    name = path.basename(root)
  }
  moduleName = name.split('-').map((name) => name[0].toUpperCase() + name.slice(1)).join('')
  // package.json
  fs.writeFileSync('./package.json', JSON.stringify({
    'name': moduleName,
    'version': '0.0.0',
    'private': true,
    'main': `./${name}.js`
  }, null, 2))
  // ${name}.js
  fs.writeFileSync(`./${name}.js`, `'use strict'
import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './${name}.styl'

class ${moduleName} extends React.Component {
  render () {
    return <div></div>
  }
}

export default CSSModules(${moduleName}, styles)
`)
  // ${name}.styl
  fs.writeFileSync(`./${name}.styl`, '')

  console.log(`${moduleName} initialized.`)
}

switch (process.argv[2]) {
  case 'init':
    init()
    break
  default:
    console.error(`Undefined command ${process.argv[2]}`)
}
