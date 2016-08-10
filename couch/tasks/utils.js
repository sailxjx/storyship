'use strict'
const util = require('util')
const chalk = require('chalk')

function flatten (app) {
  for (let key in app) {
    let value = app[key]
    switch (toString.call(value)) {
      case '[object Object]':
        app[key] = flatten(value)
        break
      case '[object Function]':
        // Remove function name in design docs
        app[key] = value.toString().replace(`function ${key}`, 'function ')
        break
      default:
    }
  }
  return app
}

module.exports = {
  flatten: flatten,
  info: function () {
    console.log(chalk.green('[info ] ') + util.format.apply(util, arguments))
  },
  error: function () {
    console.error(chalk.red('[error] ') + util.format.apply(util, arguments))
  }
}
