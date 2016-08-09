'use strict'
module.exports = {
  _id: '_design/scratch',
  validate_doc_update: require('./validate_doc_update'),
  views: require('./views')
}
