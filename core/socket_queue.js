/**
 * socket.io
 * @param {*} server 
 */
const Producer = require('super-queue').Producer;
const Consumer = require('super-queue').Consumer;
const Monitor = require('super-queue').Monitor;
const config = require('../config/site_conf.js');

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

let _queuedata = [];

// 监听队列
c.listen(msg => {
    console.log(msg)
    if (msg && msg.data) {
        _queuedata.push(msg.data)
    }
    // msg.data = 消息内容
    // msg.expire = 消息过期秒时间戳
    // msg.reject(err) 消息处理出错
    // msg.resolve(result) 消息处理成功
    // msg.checkTimeout(callback) 检查执行是否超时，如果在expire之后的时间还没有响应，则自动响应一个MessageProcessingTimeoutError，并执行回调函数
});

// 处理队列
let dealqueue = (server) => {
    setTimeout(() => {
        console.log(_queuedata)
        if (_queuedata.length > 0) {
            let _data = _queuedata.shift();
            _scoket(server, _data);
        }
        dealqueue(server);
    }, 1000)
}

let _scoket = (server, data) => {
    console.log('-----dsdsadsadsadsadsa------------')
    let io = require('socket.io')(server);
    //监听连接事件
    io.on("connection", (socket) => {
        // 监听客户端发送过来的消息
        io.emit('queue', data);
        // socket.on("send", (msg) => {
        //     // 给客户端发送消息
        //     // socket.emit("notice",msg);
        //     // 给所有客户端广播消息
        //     let _sender =  msg.split(':')[0];
        //     io.emit(_sender, msg.split(':')[1]);
        // });
    })
}

module.exports = (server) => {
    dealqueue(server);
}