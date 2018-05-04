/**
 * ShareRouter
 */
var Mysql = require('../controller/mysql.js');

module.exports = function(app) {
  // Share
  app.get('/mysql/users', Mysql.index);
};