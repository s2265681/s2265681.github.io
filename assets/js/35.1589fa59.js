(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{371:function(e,n,s){"use strict";s.r(n);var t=s(16),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"可持久化mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可持久化mysql"}},[e._v("#")]),e._v(" 可持久化Mysql")]),e._v(" "),s("ul",[s("li",[e._v("node.js 中实现持久化的多种方法")]),e._v(" "),s("li",[e._v("myusql 下载、安装和配置")]),e._v(" "),s("li",[e._v("node.js 中原声 mysql 驱动模块的应用")]),e._v(" "),s("li",[e._v("掌握 node.js 中的 ORM 模块 Sequelize 的应用")]),e._v(" "),s("li",[e._v("掌握 Sequelize 的应用案例")]),e._v(" "),s("li",[e._v("了解数据库设计的原理\n"),s("ul",[s("li",[e._v("设计规范和反范式")]),e._v(" "),s("li",[e._v("ORM 带来的进步")]),e._v(" "),s("li",[e._v("全栈关注点 - 快速迭代 + 易于横向性能扩展")])])])]),e._v(" "),s("p",[s("strong",[e._v("docker 轻量级的虚拟机")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("文档 https://yeasy.gitbooks.io/docker_practice/install/mac.html")])]),e._v(" "),s("li",[s("p",[e._v("Docker Compose")])])]),e._v(" "),s("p",[s("strong",[e._v("Node.js 中实现持久化的方法")])]),e._v(" "),s("ul",[s("li",[e._v("文件系统 fs")]),e._v(" "),s("li",[e._v("数据库\n"),s("ul",[s("li",[e._v("关系型数据库-mysql")]),e._v(" "),s("li",[e._v("文档型数据可-mongodb")]),e._v(" "),s("li",[e._v("键值对型数据库-redis")])])])]),e._v(" "),s("h4",{attrs:{id:"文件系统数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件系统数据库"}},[e._v("#")]),e._v(" 文件系统数据库")]),e._v(" "),s("p",[e._v("-> fs.db")]),e._v(" "),s("ul",[s("li",[e._v("操作")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  [nodemon] starting `node fsdb.js`\n  操作文件系统---mongodb\n  set a 100\n  set a 100\n  写入成功\n  [nodemon] restarting due to changes...\n  [nodemon] starting\n  get a\n  get a\n  100\n  set b 888\n  set b 888\n  写入成功\n\n")])])]),s("h4",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" mysql")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("安装 mysql 模块")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i mysql --save\n")])])]),s("p",[e._v("基本使用\n// mysql.js\nconst mysql = require('mysql');")]),e._v(" "),s("p",[e._v("// 链接配置\nconst cfg = {\nhost:'',\nuser:'root',\npassword:'',\ndatabase:'\n}")]),e._v(" "),s("p",[e._v("// 创建链接\nconst con = mysql.createConnect(cfg)")]),e._v(" "),s("p",[e._v("// 连接\ncon.connect(err=>{\nif(err){\nthrow err;\n}\n})")]),e._v(" "),s("ul",[s("li",[e._v("ES2017 写法")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// mysql2\n(async ()=>{\n  // get the client\n  const mysql = require('mysql2/promise);\n  // 连接配置\n    const cfg = {\n      host:'',\n      user:'root',\n      password:'example',\n      database:'’\n    }\n   // create the connection\n   const connection = await mysql.createConnetion(cfg);\n})\n\n")])])]),s("p",[s("strong",[e._v("传统设计模式")]),e._v("\n原型->设计模型->具体功能")])])]),e._v(" "),s("h3",{attrs:{id:"node-js-orm-sequelize-中间件操作数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-orm-sequelize-中间件操作数据库"}},[e._v("#")]),e._v(" Node.js ORM - Sequelize 中间件操作数据库")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("概述：基于 Promise 的 ORM 支持多种数据库、事务、关联等")])]),e._v(" "),s("li",[s("p",[e._v("安装：npm i sequelize mysql2 -S")])]),e._v(" "),s("li",[s("p",[e._v("基本使用\n->sequelize.js")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  (async ()=>{\n    const Sequelize = require("sequelize");\n    // 建立连接\n    const sequelize = new Sequelize("kaikeba","root","example",{\n      host:"localhost",\n      dialect:"mysql",\n      operatorAliases:false\n    })\n  })\n')])])]),s("p",[s("strong",[e._v("数据库中间件")])]),e._v(" "),s("ul",[s("li",[e._v("在不使用 sql 语句的情况下，去操作数据库")])]),e._v(" "),s("p",[s("strong",[e._v("传统数据库弹性不足")])]),e._v(" "),s("ul",[s("li",[e._v("数据库修改、程序修改 灵活性不强")])]),e._v(" "),s("p",[s("strong",[e._v("sequelize校验")]),e._v("\n可以通过校验功能验证模型字段格式、内容、校验会在creat、update和save时自动运行")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' price:{\n   validate:{\n     isFloat:{msg:"价格字段请输入数字"},\n     min:{args:[0],msg:"价格字段必须大雨0"}\n   }\n },\n stock:{\n   validate:{\n     isNumeric:{\n       msg:"库存字段请输入数字"\n     }\n   }\n }\n\n')])])])])]),e._v(" "),s("p",[s("strong",[e._v("模型扩展，可添加模型实例方法或类方法扩展模型")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  // 添加类级别的方法\n    Fruit.classify = function (name) {\n        const tropicFruits = ['香蕉','芒果','椰子'] // 热带水果\n        return tropicFruits.includes(name)?\"热带水果\":\"其他水果\";\n      };\n   // 使用方法\n     ['香蕉','草莓'].forEach(f=>console.log(f+'是'+Fruit.classify(f)));\n\n  // 添加类方法\n\n    //  写一个类方法\n    Fruit.prototype.totalPrice = function(count) {\n        return (this.price * count).toFixed(2);\n    }\n\n  // 使用\n    Fruit.findAll().then(fruits =>{\n      const [f1] = fruits;\n      console.log(`买5kg${f1.name}需要¥${f1.totalPrice(5)}`,'f1.name')\n    })\n\n")])])]),s("p",[s("strong",[e._v("sequlize实例 TODO List范例")]),e._v("\nhttps://github.com/BayliSade/TodoList")]),e._v(" "),s("ul",[s("li",[e._v("DeleteFlg实现")]),e._v(" "),s("li",[e._v("定义模型后生成crud界面，包括有效性检查")])])])}),[],!1,null,null,null);n.default=a.exports}}]);