/**
 * mongodb数据库连接
 */
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

// 配置文件
const config = require('../config/site_conf.js');

// 数据库
let _mongourl = config.siteConf.mongodburl + 'school';

// 创建数据库连接
const db = mongoose.createConnection(_mongourl);

// 链接错误
db.on('error',(err)=>{
    console.log(`mongodb数据库连接失败！错误提示：${err}`);
});

// 连接成功
db.once('open', ()=>{
    console.log('mongodb数据库连接成功！')
});

module.exports={ mongoose,db }