#!/usr/bin/env node
'use strict'
require('babel-register')
const request = require('request')
const app = require('../app')
const config = require('../config')
const utils = require('./utils')

utils.log('Formated app', JSON.stringify(utils.flatten(app), null, 2))

utils.log(`Saving design to ${config.db}`)

// Read old design
request({
  url: config.db + '/' + app._id,
  method: 'GET',
  json: true
}, function (err, res) {
  if (err) return utils.error(err.message)
  if (res.body && res.body._rev) {
    utils.log('Found old design, override...')
    app._rev = res.body._rev
  }
  // Override design
  request({
    url: config.db,
    method: 'POST',
    json: true,
    body: app
  }, function (err, res) {
    if (err) return utils.error(err.message)
    console.log('Success', res.body)
  })
})
