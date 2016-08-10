'use strict'
/* global describe, it */
const app = require('../app')

describe('Storyship/Couch', function () {
  it('validate_doc_update', function () {
    // Invalid doc type
    try {
      app.validate_doc_update({ type: 'unknown' })
    } catch (err) {
      err.should.eql({ forbidden: 'Invalid doc type' })
    }
    // Valid doc type
    app.validate_doc_update({type: 'article'})
  })
})
