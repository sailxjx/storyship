'use strict'
/* eslint-disable no-throw-literal */

module.exports = function (doc, oldDoc, user, secObj) {
  switch (doc.type) {
    case 'article': break
    default: throw { forbidden: 'Invalid doc type' }
  }

  return null
}
