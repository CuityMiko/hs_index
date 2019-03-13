/**
 * ShareRouter
 */
var Share = require('../controller/share.js');

module.exports = function(app) {
  // Share
  app.get('/share', Share.index);
};