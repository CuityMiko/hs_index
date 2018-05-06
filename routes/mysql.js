/**
 * MysqlRouter
 */
var Mysql = require('../controller/mysql.js');

module.exports = function(app) {
  // users 
  app.get('/mysql', Mysql.index);

  app.get('/mysql/user', Mysql.user);

  app.get('/mysql/user/:id', Mysql.user);

  app.post('/mysql/user/add', Mysql.adduser)

  app.post('/mysql/user/modify', Mysql.modifyuser)

  app.get('/mysql/pager/:pageindex/:pagesize', Mysql.pager)
};