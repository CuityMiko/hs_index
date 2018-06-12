/**
 * IndexController
 */
var log4js = require('log4js');
var mongoAppender = require('log4js-node-mongodb');

log4js.addAppender(
    mongoAppender.appender({
        connectionString: 'mongodb://47.97.190.44:27017/logs2',
        collectionName: 'mylog'
    }),
    'cheese2'
);

exports.index = function(req, res) {
    var logger = log4js.getLogger('cheese2');
    logger.trace('Entering cheese testing');
    logger.debug('Got cheese.');
    logger.info('Cheese is Gouda.');
    logger.warn('Cheese is quite smelly.');
    logger.error('Cheese is too ripe!');
    logger.fatal('Cheese was breeding ground for listeria.');
    // log objects
    logger.info({id: 1, name: 'wayne'});
    logger.info([1, 2, 3]);
    res.render('index');
};