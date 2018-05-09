/**
 * QueueController
 */
let _queue = require('../core/queue.js')

let _queuedata = [];

// 监听队列
_queue.c.listen(msg => {
    console.log(msg)
    _queuedata.push(msg)
    // msg.data = 消息内容
    // msg.expire = 消息过期秒时间戳
    // msg.reject(err) 消息处理出错
    // msg.resolve(result) 消息处理成功
    // msg.checkTimeout(callback) 检查执行是否超时，如果在expire之后的时间还没有响应，则自动响应一个MessageProcessingTimeoutError，并执行回调函数
});

exports.index = function(req, res) {
    // 消息入队
    let _num =  Math.floor(Math.random() * 10000);
    const data = 'info:' + _num; // 消息内容，必须为字符串类型
    const maxAge = 10;      // 消息有效时间，当省略此参数时使用默认的maxAge值
    _queue.p.push({data, maxAge}, (err, ret) => {
        if (err) {
            // 消息处理出错
            // 如果超过指定时间消费者未返回处理结果，则会返回MessageProcessingTimeoutError
            console.error(err);
        } else {
            // 消息的处理结果
            console.log(ret);
        }
    });
    res.render('queue/index');
};

// 处理队列
let dealqueue = () => {
    if (_queuedata.length > 0) {
        setTimeout(() => {
            if (_queuedata.length > 0) {
                let _data = _queuedata.shift();
                dealqueue();
            }
        }, 3000)   
    }
}

exports.info = (req, res) => {
    res.render('queue/info');
}

exports.getinfo = (req, res) => {
    if (_queuedata.length > 0) {
        res.json(`当前队列有${_queuedata.length}个消息正在等待中...`);
    } else {
        res.json('暂无等待...')
    }
}

// 处理队列
exports.deal = (req, res) => {
    if (_queuedata.length > 0) { 
        dealqueue();
        res.json('正在处理...')
    } else {
        res.json('暂无处理...')
    }
}