# vue_route

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 路由 
一组key-value的对应关系
多个路由经过路由器管理
一个key-value 称为路由规则  多个路由route规则由router管理
1.—个路由就是一组映射关系(key - value)
2.key为路径, value可能是function或componente
## 路由分类
1.后端路由:
1)理解: value是function，用于处理客户端提交的请求。<
2)工作过程:服务器接收到一个请求时,根据请求路径找到匹配的函数来处理请求返回响应数据。
2.前端路由: 
1)理解: value是component，用于展示页面内容。‘
2)工作过程:当浏览器的路径改变时,对应的组件就会显示。

## 为了实现SPA（single page web application） 应用
1.单页Web 应用(single page web application，SPA)。
2.整个应用只有一个完整的页面。
3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新。
4.数据需要通过ajax请求获取。
