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
 ## mogodb 启动
  ### windows下
  mongod.exe --dbpath "D:\mongoDB\data\db"

  ### CentOs 7下
  #### 安装：
    https://segmentfault.com/a/1190000012858527
  #### 开机自启动：
    https://blog.csdn.net/qq_30788845/article/details/80919842
  #### 远程连接的问题：
    https://www.cnblogs.com/chenhaoyu/p/9965067.html

# Redis
  ## Windows下 
    `redis-server`

  ## CentOs 7下
  #### 安装连接：
  https://www.jianshu.com/p/99debf9bf211 
#### 开机自启动连接：
  https://www.jianshu.com/p/20b761ae993c
  1. 出现 cc: command not found错误：
    `yum install gcc`
  2. 出现
    ``` 
      CC adlist.o
    In file included from adlist.c:34:0:
    zmalloc.h:50:31: fatal error: jemalloc/jemalloc.h: No such file or directory
    #include <jemalloc/jemalloc.h>
    
    compilation terminated.
    make: *** [adlist.o] Error 1
    ```
    > 解决：将make改为make MALLOC=libc，推测是因为编译库的问题。


  3. 启动、关闭、重启
    `/etc/init.d/redis5 stop`
    `/etc/init.d/redis5 start`
    `/etc/init.d/redis5 restart`

  4. 连接远程Redis
    主要修改两个配置：
    将 bind 127.0.0.1 注释      #bind 127.0.0.1
    将protected-mode yes  改成  protected-mode no
    保存，并重新启动redis服务。
