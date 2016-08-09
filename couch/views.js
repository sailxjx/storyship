'use strict'
/* global emit */

let views = module.exports = {}

views.articles = {
  map: function (doc) {
    if (doc.type === 'article') emit(doc._id, doc)
  }
}
