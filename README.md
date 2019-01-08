# mt-app

> My praiseworthy Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
# mogodb
mogodb 启动
--windows下
  mongod.exe --dbpath "D:\mongoDB\data\db"
  安装：
https://segmentfault.com/a/1190000012858527

# Redis
--Windows下 
  redis-server

--CentOs 7下
  1. 出现 cc: command not found错误：
    yum install gcc
  2. 出现
      CC adlist.o
    In file included from adlist.c:34:0:
    zmalloc.h:50:31: fatal error: jemalloc/jemalloc.h: No such file or directory
    #include <jemalloc/jemalloc.h>
                                  ^
    compilation terminated.
    make: *** [adlist.o] Error 1

    解决：将make改为make MALLOC=libc，推测是因为编译库的问题。
  ####### 安装连接：
    https://www.jianshu.com/p/99debf9bf211 
  ####### 开机自启动连接：
    https://www.jianshu.com/p/20b761ae993c


For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
