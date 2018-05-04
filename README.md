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
+ 6. 