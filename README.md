# 介绍

北部湾大学校园网自动登录

## 环境需要

[NODE.js](https://nodejs.org/zh-cn/download/)

## 使用步骤

* 第一步

```cmd
git clone https://github.com/xmoli/bbgu-campus-auth.git
cd bbgu-campus-auth
npm install
```

* 第二步

将用户名、密码和运营商名分别填入config.json中的username、password和ISP中。

* 最后
  
```cmd
npm run start
```

或者运行用node运行main.js

## 高级

* linux使用cron。
* windows用计算机管理->系统工具->任务计划程序库。
在每天早上启动一次，就不用手动登录了。
