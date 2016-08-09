#!/usr/bin/env node
'use strict'
require('babel-register')
const request = require('request')
const app = require('../app')
const config = require('../config')
const utils = require('./utils')

utils.log('Formated app', JSON.stringify(utils.flatten(app), null, 2))

utils.log(`Saving design to ${config.db}`)

request({
  url: config.db,
  method: 'POST',
  json: true,
  body: app
}, function (err, res) {
  if (err) return utils.error(err.message)
  console.log('Success', res.body)
})
