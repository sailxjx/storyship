#!/usr/bin/env node
'use strict'
require('babel-register')
const PouchDB = require('pouchdb')
const app = require('../app')
const config = require('../config')
const utils = require('./utils')

const client = new PouchDB(config.db)

utils.info('Formated app', JSON.stringify(utils.flatten(app), null, 2))

utils.info(`Saving ddoc to ${config.db}`)

// Read old design
client.get(app._id).then(function (ddoc) {
  if (ddoc && ddoc._rev) {
    utils.info('Found old ddoc, override...')
    app._rev = ddoc._rev
    return client.put(app)
  }
  throw new Error('Ddoc not found')
}).catch(function (err) {
  if (err.error === 'not_found') {
    utils.info('Ddoc not exist, creating...')
    return client.post(app)
  }
  throw err
})
.then(function () {
  utils.info('Success')
})
.catch(function (err) {
  utils.error(err.message)
})
