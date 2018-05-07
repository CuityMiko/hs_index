/**
 * NoticeRouter
 */
var Notice = require('../controller/notice.js');

module.exports = function(app) {
  // Notice
  app.get('/notice', Notice.index);
};