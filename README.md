# bitred

> A Vue.js project
> 开发工具选用 VS Code + webstorm
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##目录介绍
```
  src
      components          // 路由组件存放目录
        Index             // 所有首页.vue文件存放目录
          banner          // 首页banner
          bithot          // 比特红介绍
          ContactUs       // 加入我们
          features        // 平台特色
          retailers       // 电商社交
          team            // 团队信念
          Index           // 比特红首页文件
        Join_us
          // 只有输入了正确的十一位手机号才会发送验证码，默认点不动的状态
          getcode         // 获取验证码组件
          partnerPrice    // 合伙人价格目录
      config              // 配置rem
        rem.js            // rem配置文件 1rem = 100px
      pages               // 公共组件存放目录
        Footer            // 底部组件
        Header            // 导航组件
        Logo              // Logo组件
      router              // 配置路由
      App.vue             // 入口文件
      main.js             // vue核心管理文件
```
