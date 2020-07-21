(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{466:function(e,t,n){"use strict";n.r(t);var a=n(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"vue-router-vuex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-vuex"}},[e._v("#")]),e._v(" vue-router/vuex")]),e._v(" "),n("ol",[n("li",[e._v("vue-router 基础配置")]),e._v(" "),n("li",[e._v("路由传参")]),e._v(" "),n("li",[e._v("子路由")]),e._v(" "),n("li",[e._v("路由重定向")]),e._v(" "),n("li",[e._v("路由守卫")]),e._v(" "),n("li",[e._v("vuex 数据流")]),e._v(" "),n("li",[e._v("Store")]),e._v(" "),n("li",[e._v("state")]),e._v(" "),n("li",[e._v("mutation")]),e._v(" "),n("li",[e._v("action")])]),e._v(" "),n("p",[e._v("要点")]),e._v(" "),n("ol",[n("li",[e._v("vue-router 多页面")]),e._v(" "),n("li",[e._v("vuex 管理数据")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    vue create vue-router\n    cd  vue-router\n    npm run serve\n\n\n\n")])])]),n("h2",{attrs:{id:"vue-router"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[e._v("#")]),e._v(" Vue-Router")]),e._v(" "),n("p",[e._v("vue add router || npm install vue-router")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("路由传参\n路径传参\nquery 传参")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  {\n         path: '/b/:id',  // 路由传参 /b/123  this.$route里面取\n         name:'pageB',\n         props:true,\n         component:PageB\n  }\n\n  路由设置 props:true\n  props:['id'],\n  this.id 直接取到\n")])])])]),e._v(" "),n("li",[n("p",[e._v("命名视图\n给 router-view 取个名字")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n{\n  path: '/a',\n  name:'pageA',\n  components: {\n    default:PageA,\n    david:Test\n  }\n},\n 展示多个视图\n  <router-view/>\n  <router-view name=\"david\"/>\n\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[e._v("导航守卫（路由的生命周期）\n// -> main.js - 全局守卫\n// 常用 beforeEach")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("router.beforeEach((to,from,next)=>{\n    if(to.fullPath === '/shoppingCart'){\n      next('/login')\n    }\n     window.console.log('beforeEach',to,from)\n     next()\n})\n\n router.beforeResolve((to,from,next)=>{\n window.console.log('beforeResolve',to,from)\n next()\n })\n\n router.afterEach((to,from,next)=>{\n window.console.log('afterEach',to,from)\n next()\n })\n\n")])])]),n("ul",[n("li",[e._v("路由独享守卫")])]),e._v(" "),n("p",[e._v("写在配置里面 -> router/index.js\nbeforeEnter:(to,from,next)=>{\nconsole.lgo('before enter);\nnext()\n}")]),e._v(" "),n("ul",[n("li",[e._v("组件内的守卫")])]),e._v(" "),n("p",[e._v("-> pageA.vue")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  export default {\n   \n        beforeRouteEnter(to,from,next){\n            //...组件对象路由confim前调用\n            // 不能调用this\n            // 因为守卫执行前，组件还没有被创建\n            \n        },\n        beforeRouteUpdate(to,from,next){\n            // 当前组件改变，该组件被复用时调用\n            // 可以访问this实俐\n            // 组件之间跳来跳去 会发现更新 进入下一个组件 但是只是参数变可以执行这个\n            <router-link to="/a/122">AA1</router-link> \n            <router-link to="/a/222233">AA2</router-link> \n        },\n        beforeRouteLeave(to,from,next){\n            //...\n            // 导航离开该组件的对应路由时调用\n            // 可以访问组件this\n            // 通常来判断用户还没用保存修改之前突然离开\n        }\n  } \n\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("路由异步加载，异步组件 通过webpack 懒加载组件 除首页外 触发的时候再加载\n{\npath:'test',\n// component: Test\n// 异步组件\n// 好处：可以按需加载\ncomponent:()=>import('./view/Test')\n}")])])])]),e._v(" "),n("h2",{attrs:{id:"vuex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[e._v("#")]),e._v(" Vuex")]),e._v(" "),n("p",[e._v("cd vue-vuex\nnpm run serve")]),e._v(" "),n("p",[e._v("npm install vuex --save 安装\nvue add vuex  // 这种就集成好了 推荐")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://vuex.vuejs.org/vuex.png",alt:""}})]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  -> store/index.js\n\nimport Vue from 'vue'\nimport Vuex from 'vuex'\n\nVue.use(Vuex)\n\nexport default new Vuex.Store({\n  state: {\n  },\n  mutations: {\n  },\n  actions: {\n  },\n  modules: {\n  }\n})\n\n\nimport Vue from 'vue'\nimport Vuex from 'vuex'\nVue.use(Vuex)\nexport default new Vuex.Store({\n  state: {\n    count:1\n  },\n  mutations: {\n    increment(state){\n       state.count ++ \n    },    \n    decrement(state){\n      state.count --\n   }\n  },\n  actions: {\n    increment:({commit})=>{\n      commit('increment')\n    },\n    decrement:(obj)=>{\n      window.console.log(obj,'obg++')\n      obj.commit('decrement')\n    }\n  },\n  getters:{\n    money:state=>`¥${state.count*1000}`\n  },\n  // modules 维护处理多套数据\n  modules: {\n  }\n})\n\n\n\n")])])]),n("ol",[n("li",[e._v("getters\n有时候我们需要从store中派生出一些状态，我们可以理解为组件中的计算属性一样的用法")])]),e._v(" "),n("p",[e._v("要对数据进行处理再返回")]),e._v(" "),n("p",[e._v("page.vue 中使用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" computed:{\n   money(){\n     return this.$store.getters.monry;\n   }\n }\n")])])]),n("p",[e._v("store.js 中的写法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("getters:{\n  money:state=>`¥${state.count*1000}`\n}\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Action\nMutation必须是同步的，Action 是异步的Mutation\n是触发Mutation的时机")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  actions: {\n    increment:({commit})=>{\n      commit('increment')\n    },\n    decrement:(obj)=>{\n      window.console.log(obj,'obg++')\n      obj.commit('decrement')\n    }\n  }\n\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[e._v("mapState")])]),e._v(" "),n("li",[n("p",[e._v("mapAction\n组件里的事件与action里面的事件做一个映射（可以减少很多代码）")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);