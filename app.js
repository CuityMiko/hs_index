var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//加载ueditor 模块
var ueditor = require("ueditor");
//图片验证码
var svgCaptcha = require('svg-captcha');

var app = express();
// var mongoose=require('./config/mongoose.js');
// var db=mongoose();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//这里周期只设置为20秒，为了方便测试
//secret在正式用的时候务必修改
//express中间件顺序要和下面一致

app.use(session({//session持久化配置
  secret: "jxchexie",
  key: "jxchexie",
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//超时时间
  saveUninitialized: true,
  resave: false,
}));

// 路由
require('./routes/index')(app);

// 打包的静态文件默认访问
// 此处用于React Web打包后的项目访问方式
// React router的history模式一般为browserhistory，但是此种方式的URL不能在浏览器中赋值
// 解决方式就是将React项目打包文件作为服务器资源渲染，即放在public目录下进行访问
// 如果不是React项目则注释以下代码
// 值得一提的是，Vue项目没有如上问题，则不需要以下代码
app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
