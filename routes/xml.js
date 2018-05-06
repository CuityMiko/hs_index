/**
 * XmlRouter
 */
var Xml = require('../controller/xml.js');

module.exports = function(app) {
  // Xml
  app.get('/xml', Xml.index);
};