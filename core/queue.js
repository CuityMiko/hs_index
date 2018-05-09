// 使用模块输出的promise属性下的Producer
const Producer = require('super-queue').Producer;
const Consumer = require('super-queue').Consumer;
const Monitor = require('super-queue').Monitor;
const config = require('../config/site_conf.js');

const p = new Producer({
  // 队列名称
  queue: 'my_queue',
  // 设置Redis数据库连接
  redis: {host: config.siteConf.redishost, port: config.siteConf.redisport, db: 4},
  // 默认的消息有效时间(s)，为0表示永久
  maxAge: 0,
  // 心跳时间周期（s），默认2秒
  heartbeat: 1,
});

const c = new Consumer({
  // 队列名称
  queue: 'my_queue',
  // 设置Redis数据库连接
  redis: {host: config.siteConf.redishost, port: config.siteConf.redisport, db: 4},
  // 处理能力，如果当前消费者正在处理的消息数量超过该值则不再接收新消息，为0表示不限制
  capacity: 0,
  // 心跳时间周期（s），默认2秒
  heartbeat: 1,
});

// 初始化成功，触发start事件
// 注意：一定要在触发此事件后再使用push()，否则可能无法收到消息处理结果
p.on('start', () => {
  console.log('queue start working');
});

module.exports = {p, c};

// 退出
// p.exit();