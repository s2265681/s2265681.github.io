(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{389:function(e,t,a){"use strict";a.r(t);var v=a(16),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"vue项目实战1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目实战1"}},[e._v("#")]),e._v(" vue\b项目实战1")]),e._v(" "),a("pre",[a("code",[e._v("1. 路由守卫\n2. 登录状态保存\n3. 接口mock\n4. 令牌的原理：bearer token Authorization: Bewaer <token>\n5. 跨域和请求代理\n")])]),e._v(" "),a("p",[a("strong",[e._v("->cube-ui")])]),e._v(" "),a("ul",[a("li",[e._v("适合的 ui 库 （移动端 cube-ui pc element-ui）")]),e._v(" "),a("li",[e._v("扩展性")]),e._v(" "),a("li",[e._v("登录页面 检查点")]),e._v(" "),a("li",[e._v("http 拦截器 深入理解令牌机制")]),e._v(" "),a("li",[e._v("注销")]),e._v(" "),a("li",[e._v("安装自定义字体 npm install less less-loader --save-dev")])]),e._v(" "),a("h2",{attrs:{id:"选择一个合适的-ui-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择一个合适的-ui-库"}},[e._v("#")]),e._v(" 选择一个合适的 ui 库")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191111114902881.png",alt:"市面上的ui库"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("VUX: https://vux.li/ 一个凑合的 Vue.js 移动端 UI 组件库")])]),e._v(" "),a("li",[a("p",[e._v("Mint UI 基于 Vue.js 的移动端组件库")])]),e._v(" "),a("li",[a("p",[e._v("推荐 Cube-ui 滴滴 https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start")])]),e._v(" "),a("li",[a("p",[e._v("https://didi.github.io/cube-ui/#/zh-CN")])]),e._v(" "),a("li",[a("p",[e._v("推荐 vant 有赞 https://youzan.github.io/vant/#/zh-CN/intro")])])]),e._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),a("h2",{attrs:{id:"基于-vue，cube-ui-的移动端框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-vue，cube-ui-的移动端框架"}},[e._v("#")]),e._v(" 基于 vue，cube-ui 的移动端框架")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue create cube-ui\ncd cube-ui\nvue add router\nvue add vuex\nvue add cube-ui\nnpm run serve\n\n")])])]),a("h2",{attrs:{id:"扩展性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展性"}},[e._v("#")]),e._v(" 扩展性")]),e._v(" "),a("p",[e._v("任何 UI 库都不能完全满足开发需求，需要自己定制化开发")]),e._v(" "),a("h2",{attrs:{id:"登录页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录页面"}},[e._v("#")]),e._v(" 登录页面")]),e._v(" "),a("p",[e._v("vue add router\nvue add vuex")]),e._v(" "),a("h2",{attrs:{id:"路由守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫"}},[e._v("#")]),e._v(" 路由守卫")]),e._v(" "),a("p",[e._v("router.beforEach()\nto.meta.auth 去控制")]),e._v(" "),a("h2",{attrs:{id:"接口的-mock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口的-mock"}},[e._v("#")]),e._v(" 接口的 mock")]),e._v(" "),a("ul",[a("li",[e._v("在开发服务器中配一个 before(app){...}")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' devServer:{\n     before(app) {\n         // 模拟后台服务器 express 写法\n         app.get("/api/login", function(req, res) {\n           const { username, passwd } = req.query;\n           // console.log(username,passwd);\n           if (username == "kaikeba" && passwd == "123") {\n             res.json({ code: 1, token: "jilei" });\n           } else {\n             res.status(401).json({ code: 0, message: "用户名或者密码错误" });\n           }\n         });\n    }\n }\n\n')])])]),a("h2",{attrs:{id:"令牌验证机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#令牌验证机制"}},[e._v("#")]),e._v(" 令牌验证机制")]),e._v(" "),a("p",[e._v("客户端---\x3e服务器 如果客户端没有令牌，给回一个 401 状态码，\n客户端去登录---获得 token，存到 cookie 或者 localStory 里面---\x3e服务端 返回")]),e._v(" "),a("h2",{attrs:{id:"http-拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-拦截器"}},[e._v("#")]),e._v(" http 拦截器")]),e._v(" "),a("p",[e._v("每次请求都携带令牌\n创建一个 axios 的拦截器")]),e._v(" "),a("h2",{attrs:{id:"注销-app-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注销-app-vue"}},[e._v("#")]),e._v(" 注销 -> app.vue")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("清楚 token 缓存的两种情况")]),e._v(" "),a("ul",[a("li",[e._v("1、 主动注销")]),e._v(" "),a("li",[e._v("2、 token 过期")])])]),e._v(" "),a("li",[a("p",[e._v("需要做的事情")]),e._v(" "),a("ul",[a("li",[e._v("1、清空缓存")]),e._v(" "),a("li",[e._v("2、重置登录状态")])])])]),e._v(" "),a("h2",{attrs:{id:"http-拦截响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-拦截响应"}},[e._v("#")]),e._v(" http 拦截响应")]),e._v(" "),a("p",[e._v("统一处理 401 状态吗，清理 token 跳转 login")]),e._v(" "),a("h2",{attrs:{id:"深入令牌机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入令牌机制"}},[e._v("#")]),e._v(" 深入令牌机制")]),e._v(" "),a("p",[a("strong",[e._v("前端 Bearer Token 规范")])]),e._v(" "),a("ul",[a("li",[e._v("概念：描述在 HTTP 访问 OAuth2 保护自愿时如何使用令牌的规范")]),e._v(" "),a("li",[e._v("特点：令牌就是身份证明，无需证明令牌的所有权")]),e._v(" "),a("li",[e._v("具体规定：在请求头中定义 Authorization:Bear < token >")])]),e._v(" "),a("p",[a("strong",[e._v("json Web Token")])]),e._v(" "),a("ul",[a("li",[e._v("概念：令牌具体定义方式")]),e._v(" "),a("li",[e._v("规定：令牌由三部分构成“头.载荷.签名”")]),e._v(" "),a("li",[e._v("头：包含加密算法、令牌类型等信息")]),e._v(" "),a("li",[e._v("载荷：包含用户信息、签发时间和过期时间等信息")]),e._v(" "),a("li",[e._v("签名：根据头、载荷及迷药加密得到的哈希串 Hmac Shal 256")]),e._v(" "),a("li",[e._v("token:加密防篡改\n")])]),e._v(" "),a("h2",{attrs:{id:"配置代理服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置代理服务器"}},[e._v("#")]),e._v(" 配置代理服务器")]),e._v(" "),a("ul",[a("li",[e._v("修改配置文件，启用开发服务器代理，vue.config.js")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' devServer:{\n     //代理配置\n     proxy:{\n         "/api":{\n             target:"http://127.0.0.1:3000",\n             changOrigin:true\n         }\n     },\n     // before(app){...}\n }\n\n')])])]),a("h2",{attrs:{id:"真实数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真实数据"}},[e._v("#")]),e._v(" 真实数据")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("service--\x3e service.js")])]),e._v(" "),a("li",[a("p",[e._v("node service/service.js")])]),e._v(" "),a("li",[a("p",[e._v("跨域： 挡在浏览器中发送请求的适合只要三端（协议名，端口号，域名）不同，浏览器会拒绝你的请求，")])]),e._v(" "),a("li",[a("p",[e._v("解决跨域的方案，\n配置代理，\ncors")])]),e._v(" "),a("li",[a("p",[e._v("部署到服务器上一般都是 nginx 反向代理 就不存在跨域问题了")])])]),e._v(" "),a("p",[e._v("promise 简单来讲 做一些异步操作，异步操作的同步化，在.then 中去得到异步请求的结果，.catch 中捕获异常，")]),e._v(" "),a("p",[e._v('Promise.resove("返回成功") Promise.reject("返回失败")')])])}),[],!1,null,null,null);t.default=s.exports}}]);