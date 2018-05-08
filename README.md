### CJ_FE 基于node搭建的http-server，可提供api调用

+ 1. 默认端口号为3003，可在config/site_conf文件下修改port字段
+ 2. 项目运行
```bash

# git clone
git clone https://github.com/CuityMiko/hs_index.git
or
git clone -b api https://github.com/CuityMiko/hs_index.git

# install
cd hs_index
npm install

# install node-dev
npm install node-dev -g

# run
npm start

# browser
http://localhost:3003/
```
+ 3. api 分支封装了httphelper和requesthelper
+ 4. mysql 分支封装mysql的增删改查
+ 5. 获取参数方式：
```
1.url?id= => req.query.id
2.url/:id => req.params.id
3.post请求 => req.body.id
```
+ 6. mongodb分支使用mongoose实现增删改查
```
# mongodb启动
mongod --dbpath D:\config\mongodb\data

# url
http://localhost:27017/

# mongoose
npm i mongoose promise.prototype.finally -S

# Linux配置
mongod --dbpath /root/opt/db/mongodb/data --logpath /root/opt/db/mongodb/data/logs/mongo.log --logappend -fork -port 27017
/sbin/iptables -I INPUT -p tcp --dport 3003 -j ACCEPT
/sbin/iptables -I INPUT -p tcp --dport 27017 -j ACCEPT

mongoose中也使用promise语法，但是使用mongoose中自带的promise语法会产生警告
解决方式是在引入mongoose后将mongoose的promise改为es6的promise：
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
```
+ 7. socketio分支nodejs实现socket.io
```
# install
npm i socket.io -S

# socket.io客户端跨域调用
var socket = io.connect('47.97.190.44:3003');
// 监听从服务器端传过来的消息
socket.on("notice", function(msg) {
    console.log(msg);
    if (msg) {
        console.log(msg);
    }
});

# 给不同的客户端推送消息：通过userid监听不同的用户
客户端：socket.on(userid,(msg) => {})
服务端：io.emit(userid, msg)
```
+ 8. redis分支nodejs实现redis
```
# install
npm i redis -S
```
+ 9. queue分支nodejs实现消息队列