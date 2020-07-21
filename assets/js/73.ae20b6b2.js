(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{472:function(v,_,t){"use strict";t.r(_);var e=t(44),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"从url输入到页面展现？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从url输入到页面展现？"}},[v._v("#")]),v._v(" 从URL输入到页面展现？")]),v._v(" "),t("h3",{attrs:{id:"理解："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解："}},[v._v("#")]),v._v(" 理解：")]),v._v(" "),t("p",[t("strong",[v._v("一、 网络通信方面")])]),v._v(" "),t("p",[v._v("1、 网路分层")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("why？ 使计算机间的识别数据传输通讯和网络互联等复杂的问题简单化")])]),v._v(" "),t("li",[t("p",[v._v("what?")]),v._v(" "),t("p",[t("strong",[v._v("OSI体系结构：")]),v._v(" 1、物理层 2、数据链路层 3、网络层 4、运输层 5、会话层 6、表示层 7、应用层")]),v._v(" "),t("p",[t("strong",[v._v("TCP/IP体系结构")]),v._v("：1、网络接口层 2、网络层IP 3、运输层 4、应用层")]),v._v(" "),t("p",[t("strong",[v._v("五层协议的体系结构：")]),v._v(" 1、 物理层 2、数据链路层 3、 网络层 4、运输层 5、应用层")])]),v._v(" "),t("li",[t("p",[v._v("物理层：通过物理手段将设备链接在一起：传输0/1电信号（比特流）")])]),v._v(" "),t("li",[t("p",[v._v("数据链路层：规定了一套协议，专门给0/1信号进行分组，规定不同的组代表什么意思--以太网协议")])]),v._v(" "),t("li",[t("p",[v._v("网络层（主机到主机的通信）：只有同一个子网内的计算机可以完成广播，不是一个子网，会发给网关，由网关转发")])]),v._v(" "),t("li",[t("p",[v._v("IP协议：判断两个计算机是否在同一个子网中")])]),v._v(" "),t("li",[t("p",[v._v("子网掩码：规定网络部分全为1，主机部分全为0，通过IP地址和子网掩码and运算，对结果对比判断是否在同一个子网下。")])]),v._v(" "),t("li",[t("p",[v._v("ARP协议：通过广播的形式携带着要发送给对方的IP地址，对方收到包后会解析对比IP地址，匹配则把自己的MAC地址交给对方。")])]),v._v(" "),t("li",[t("p",[v._v("运输层（建立端到端的通信）：通过物理层/数据链路层以及网络层的互相协调，可以成功的把数据从计算机A传到计算机B，但是计算机B中有多个应用程序，计算机不知道将数据发给哪个应用程序，所以端口上场了，端口范围0～65535，前1023个端口被系统占用， 传输层常见两大协议TCP协议和UDP协议")])]),v._v(" "),t("li",[t("p",[v._v("UDP协议：用户数据报协议，无连接的协议，与TCP协议一样用于处理数据包")]),v._v(" "),t("p",[v._v("特点：面向无连接、单播、多播、广播、不可靠性、头部开销小，传输数据报文高效，----直播")])]),v._v(" "),t("li",[t("p",[v._v("TCP协议")]),v._v(" "),t("p",[v._v("传输控制协议，是一种面向连接的、可靠的、基于字节流的传输层通讯协议，TCP是面向连接的可靠的协议流，不间断的数据结构流通传输  --- 不丢包")])]),v._v(" "),t("li",[t("p",[v._v("TCP三次握手")])])]),v._v(" "),t("p",[v._v("​       1、你好，是小刘吗？ 2、 是的，你是面试官吗   3、对我是")]),v._v(" "),t("p",[v._v("​        【1】、客户端向服务端发送连接请求报文段，该报文段中包含自身的数据通讯初始序列号，请求发送后，客户端进入"),t("code",[v._v("SYN-SENT")]),v._v("状态")]),v._v(" "),t("p",[v._v("​       【2】、服务端收到请求报文段后，如果同意连接，会发送一个应答，应答中也包含自身的数据通讯初始序号，发送完成后，进入"),t("code",[v._v("SYN-RECEIVED")]),v._v("状态")]),v._v(" "),t("p",[v._v("​        【3】、当客户端收到连接同意应答后，向服务端发送一个确认报文，发送完后进入"),t("code",[v._v("ESTABLISHED")]),v._v("状态，服务端收到这个应答后也进入"),t("code",[v._v("ESTABLISHED")])]),v._v(" "),t("p",[v._v("​     为什么三次而不是两次：防止网络异常，出现失效的连接请求报文段被服务端接收的情况，产生错误")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("TCP的四次挥手")]),v._v(" "),t("p",[v._v("1、 您的情况我知道了，等通知吧")]),v._v(" "),t("p",[v._v("2、好的好的")]),v._v(" "),t("p",[v._v("3、希望可以一起共事")]),v._v(" "),t("p",[v._v("4、滴滴。。")]),v._v(" "),t("p",[v._v("【1】、若客户端A任务数据发送完成，则向服务端B发送连接释放请求。")]),v._v(" "),t("p",[v._v("【2】、B收到后，告诉应用层释放TCP连接，然后发送ACK包，并进入"),t("code",[v._v("CLOSE_WAIT")]),v._v("状态，表示A到B的连接释放了，B不再接收A的请求了，但是B此时仍可发给A")]),v._v(" "),t("p",[v._v("【3】、B此时还有数据会继续发送，完毕后会向A发送释放请求，然后B进入"),t("code",[v._v("LAST-ACK")]),v._v("状态")]),v._v(" "),t("p",[v._v("【4】、A收到释放请求后，向B发送确认应答，此时A进入"),t("code",[v._v("TIME-WAIT")]),v._v("状态，该状态会持续一段时间2MSL，如果该时间段内没有B的重发请求，就进入"),t("code",[v._v("CLOSED")]),v._v("状态，B收到应答也进入"),t("code",[v._v("CLOSED")]),v._v("状态")])]),v._v(" "),t("li",[t("p",[v._v("为何客户端最后还等待2MSL")])])]),v._v(" "),t("p",[v._v("​       客户端需要保证最后一次发送的ACK报文到服务器，如果服务器未收到，可以请求客户端重发，这样客户端还有时间再发，重启2MSL计时")]),v._v(" "),t("ul",[t("li",[v._v("TCP/IP的并发限制")])]),v._v(" "),t("p",[v._v("​      浏览器对同一个域名下的并发的TCP连接是有限制的(2-10个)")]),v._v(" "),t("p",[v._v("​      而且在HTTP1.0中往往一个资源下载就需要对应一个TCP/IP请求")]),v._v(" "),t("ul",[t("li",[v._v("TCP协议特点")])]),v._v(" "),t("p",[v._v("​       1、面向连接，是指发送数据之前必须在两端建立连接，建立连接的方法就是 "),t("code",[v._v("三次握手")]),v._v("，这样能建立可靠的连接，为数据的可靠传输打下了基础")]),v._v(" "),t("p",[v._v("​      2、仅支持单播传输")]),v._v(" "),t("p",[v._v("​      3、面向字节流：不像UDP那样一个个报文独立传输，而是1⃣️字节流方式进行传播")]),v._v(" "),t("p",[v._v("​      4、可靠传输：对于可靠传输，判断丢包，误码靠的是TCP的段编号以及确认号")]),v._v(" "),t("p",[v._v("​      5、提供拥塞控制")]),v._v(" "),t("p",[v._v("​      6、TCP提供全双工通信")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[v._v("对比")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("UDP")]),v._v(" "),t("th",{staticStyle:{"text-align":"left"}},[v._v("TCP")])])]),v._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("是否连接")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("无连接")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("面向连接")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("是否可靠")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("不可靠传输，不使用流量控制和拥塞控制")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("可靠传输，使用流量控制和拥塞控制")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("连接个数")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("支持一对一，一对多，多对一和多对多通信")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("只能一对一通信")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("传输方式")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("面向报文")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("面向字节流")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("首部开销")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("首部开销小，仅8字节")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("首部最小20字节，最大60字节")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("适用场景")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("适用于实时应用 ( IP电话、视频会议、直播等 )")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("适用于要求可靠传输的应用，例如文件传输")])])])]),v._v(" "),t("p",[v._v("TCP向上层提供面向连接的可靠服务 ，UDP向上层提供无连接不可靠服务")]),v._v(" "),t("p",[v._v("虽然 UDP 并没有 TCP 传输来的准确，但是也能在很多实时性要求高的地方有所作为")]),v._v(" "),t("p",[v._v("对数据准确性要求高，速度可以相对较慢的，可以选用 TCP")]),v._v(" "),t("ul",[t("li",[v._v("应用层")])]),v._v(" "),t("p",[v._v("应用层是最接触用户的，上面基层收到了传输层的数据后，TCP/UDP协议传来各种程序的包后，需要不同的协议来规定数据的格式，才能渲染解读，如网络HTTP协议，文件传输FTP协议，电子邮箱SMTP、域名解析DNS，远程登录Telnet协议等")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DNS是什么")]),v._v(" "),t("p",[t("code",[v._v("Domain Name System")]),v._v(" 域名系统，是一种组织成域层次结构的计算机和网络服务命名系统，用于TCP/IP网络，作用将域名和IP地址相互映射的一个分布式数据库，主机名和域名转换成IP地址的工作")])]),v._v(" "),t("li",[t("p",[v._v("为什么需要DNS")]),v._v(" "),t("p",[v._v("网络通讯大部分基于TCP/IP协议，他们是基于IP地址的，所以计算机在网络上进行通讯时只能识别252.9.4.131.12之类的IP地址，而不能认识域名")])]),v._v(" "),t("li",[t("p",[v._v("域名结构")])])]),v._v(" "),t("p",[v._v("www.qq.com.")]),v._v(" "),t("p",[v._v(". 代表根域名 com是一级域名 qq是二级域名 www是三级域名")]),v._v(" "),t("p",[v._v(".  -> .com -> qq.com -> www.qq.com")]),v._v(" "),t("p",[v._v("​")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DNS解析之路")]),v._v(" "),t("p",[v._v("1、浏览器缓存、系统缓存、路由器缓存、DNS缓存")]),v._v(" "),t("p",[v._v("2、根域名服务器、顶级域名服务器、主域名服务器、保存结果至缓存")]),v._v(" "),t("p",[v._v("递归查询、迭代查询")])]),v._v(" "),t("li",[t("p",[v._v("DNS优化")])])]),v._v(" "),t("p",[v._v("​       1、 善用缓存TTL，善于设置时间长短")]),v._v(" "),t("p",[v._v("​       2、负载均衡：DNS服务器对每个查询将以DNS文件中主机记录的IP地址按顺序返回不同的解析结果，将客户端的访问引导到不同的机器上去，使得不同的客户端访问不同的服务器")]),v._v(" "),t("p",[t("strong",[v._v("二、 页面渲染方面")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("进程与线程")]),v._v(" "),t("p",[v._v("1、"),t("strong",[v._v("什么进程")]),v._v("：CPU资源"),t("strong",[v._v("分配")]),v._v("的最小单位---进行中的程序，独立运行且拥有自己的资源空间的任务程序")]),v._v(" "),t("p",[v._v("进程包括运行中的程序和程序所使用到的内存和系统资源")]),v._v(" "),t("p",[v._v("CPU运行一个进程时其他进程处于非运行状态，CPU使用时间片轮转调度算法来实现同时运行多个进程")]),v._v(" "),t("p",[v._v("2、"),t("strong",[v._v("什么是线程")]),v._v("：CPU"),t("strong",[v._v("调度")]),v._v("的最小单位，是建立在一次进程的基础上的一次程序运行单位，程序中的一个执行流，一个进程可以有多个线程。")]),v._v(" "),t("p",[v._v("一个进程中，有一个执行流成为单线程，即执行时，必须前一个处理好，后一个才执行")]),v._v(" "),t("p",[v._v("一个 "),t("code",[v._v("进程")]),v._v(" 中有多个执行流称作 "),t("code",[v._v("多线程")]),v._v("，允许单个程序创建多个并行的线程来完成个字的任务。")])]),v._v(" "),t("li",[t("p",[v._v("进程和线程的区别")]),v._v(" "),t("p",[v._v("进程是操作系统分配资源的最小单位，线程是程序执行的最小单位。")]),v._v(" "),t("p",[v._v("一个进程有一个或多个线程组成，线程可理解为一个进程中代码的不同执行路线")]),v._v(" "),t("p",[v._v("进程之间相互独立，线程共享程序的内存空间")])]),v._v(" "),t("li",[t("p",[v._v("多进程和多线程")]),v._v(" "),t("p",[v._v("【多进程：】多进程是在同一时间内，计算机系统允许两个或两个以上的进程运行，进程间不相互干扰")])])]),v._v(" "),t("p",[v._v("​    【多线程：】程序中包含多个执行流，一个程序可以同时运行不同的线程来执行不同的任务，允许单个程序创建多个并行执行线程来完成各自任务")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("JS为什么是单线程")]),v._v(" "),t("p",[v._v("根用途有关，作为浏览器的脚本语言，主要用于用户互动以及操作dom，决定了他只能单线程，否在会带来很复杂的同步问题。")])])]),v._v(" "),t("p",[v._v("为了更好的利用多核CPU的计算能力，HTML5提出了Web Worker标准，郧西javascript创建多个线程，但是子线程完全受注线程控制，而且不得操作DOM，没有改变Javascript单线程的本质")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器相关")])]),v._v(" "),t("li",[t("p",[v._v("浏览器是多进程的：")]),v._v(" "),t("p",[v._v("1、 包含Browser进程（主控，协调）与用户交互，创建销毁其他进程，网络资源的下载等")]),v._v(" "),t("p",[v._v("2、第三方插件进程，使用使创建")]),v._v(" "),t("p",[v._v("3、GPU进程，用于3D/动画绘图，绘制到用户界面上")]),v._v(" "),t("p",[v._v("4、renderer渲染进程（重）：浏览器内核，页面渲染、脚本执行、事件处理")]),v._v(" "),t("p",[v._v("渲染进程是多线程的，页面的渲染，JS的执行，事件的循环，都是在渲染进程内执行")])]),v._v(" "),t("li",[t("p",[v._v("渲染进程Renderer的主要线程")]),v._v(" "),t("p",[t("strong",[v._v("GUI渲染线程")]),v._v("：负责渲染浏览器界面，解析HTML，CSS构建DOM树和RenderObject树，          布局和绘制等。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("当我们修改一些元素的颜色背景色，页面会重绘")])]),v._v(" "),t("li",[t("p",[v._v("当我们修改一些元素的尺寸会引发页面的回流，重新计算元素的位置大小")])]),v._v(" "),t("li",[t("p",[v._v("GUI线程和JS引擎线程是互斥的")])]),v._v(" "),t("li",[t("p",[v._v("当JS引擎执行时，GUI线程会被挂起")])]),v._v(" "),t("li",[t("p",[v._v("GUI更新会被保存在一个队列中等到JS引擎空闲时立即执行")])])]),v._v(" "),t("p",[t("strong",[v._v("JS引擎线程")])]),v._v(" "),t("ul",[t("li",[v._v("JS引擎线程就是JS内核，负责处理Javascript脚本（如V8引擎）运行代码")]),v._v(" "),t("li",[v._v("一直等待任务队列中的任务到来，然后加以处理")]),v._v(" "),t("li",[v._v("GUI渲染线程与JS引擎线程是互斥的，js引擎线程会阻塞GUI渲染线程")])]),v._v(" "),t("p",[t("strong",[v._v("事件触发线程")])]),v._v(" "),t("ul",[t("li",[v._v("属于浏览器而不是JS引擎，用来控制事件循环，并且管理着一个事件队列(task queue)")]),v._v(" "),t("li",[v._v("当js执行碰到事件绑定和一些异步操作,会走事件触发线程将对应的事件添加到对应的线程中(比如定时器操作，便把定时器事件添加到定时器线程)，等异步事件有了结果，便把他们的回调操作添加到事件队列，等待js引擎线程空闲时来处理。")]),v._v(" "),t("li",[v._v("当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理")]),v._v(" "),t("li",[v._v("因为JS是单线程，所以这些待处理队列中的事件都得排队等待JS引擎处理")])]),v._v(" "),t("p",[t("strong",[v._v("定时触发器线程")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("setInterval")]),v._v(" 与 "),t("code",[v._v("setTimeout")]),v._v(" 所在线程")]),v._v(" "),t("li",[v._v("浏览器定时计数器并不是由JavaScript引擎计数的 (因为JavaScript引擎是单线程的，如果处于阻塞线程状态就会影响记计时的准确)")])]),v._v(" "),t("p",[t("strong",[v._v("异步http请求线程")])]),v._v(" "),t("ul",[t("li",[v._v("在XMLHttpRequest在连接后是通过浏览器新开一个线程请求")]),v._v(" "),t("li",[v._v("将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中再由JavaScript引擎执行")]),v._v(" "),t("li",[v._v("简单说就是当执行到一个http异步请求时，就把异步请求事件添加到异步请求线程，等收到响应 (准确来说应该是http状态变化)，再把回调函数添加到事件队列，等待js引擎线程来执行")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("渲染过程")])]),v._v(" "),t("p",[v._v("​    "),t("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9OUFVMVXJIZkpvamJjMGVKOERhWVJYZXppYjRFMnhoRlhCaWFDU0lCQVd5MDRUU1VsNVlWNmhiWHZBQ2M5Y3dmZXFYSFhOcnVpYjlicWNqQ2NJaWJBVjFWeEEvNjQw?x-oss-process=image/format,png",alt:"pic"}})]),v._v(" "),t("h3",{attrs:{id:"解析html构建dom树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析html构建dom树"}},[v._v("#")]),v._v(" 解析HTML构建DOM树")]),v._v(" "),t("p",[v._v("首先，发起请求拿到页面 HTML 内容，这个内容它是0/1这样的原始 "),t("code",[v._v("字节流")])]),v._v(" "),t("p",[v._v("接着，浏览器拿到这些 HTML 的原始字节，根据文件的指定编码 (例如 UTF-8) 将它们转换成各个 "),t("code",[v._v("字符")])]),v._v(" "),t("p",[v._v("然后通过词法解析：我们把字符流解析成了 词 (Token)")]),v._v(" "),t("p",[v._v("语法解析：开始结束标签配对、属性赋值好、父子关系这些都连接好了，最终就构成了 "),t("code",[v._v("DOM")]),v._v(" 树")]),v._v(" "),t("h3",{attrs:{id:"解析css构建cssom树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析css构建cssom树"}},[v._v("#")]),v._v(" 解析CSS构建CSSOM树")]),v._v(" "),t("p",[t("code",[v._v("CSS")]),v._v(" 字节转换成字符，接着词法解析与法解析，最后构成 "),t("code",[v._v("CSS对象模型(CSSOM)")]),v._v(" 的树结构")]),v._v(" "),t("p",[v._v("节点样式是可以继承的")]),v._v(" "),t("p",[v._v("所以在构建的过程中浏览器得递归 "),t("code",[v._v("DOM")]),v._v(" 树来确定元素到底是什么样式，为了 "),t("code",[v._v("CSSOM")]),v._v(" 的完整性，只有等构建完毕才能进入到下一个阶段，所以就算 "),t("code",[v._v("DOM")]),v._v(" 已经构建完了，也得等 "),t("code",[v._v("CSSOM")]),v._v("，然后才能进入下一个阶段")]),v._v(" "),t("p",[v._v("所以 "),t("code",[v._v("CSS")]),v._v(" 的加载速度与构建 "),t("code",[v._v("CSSOM")]),v._v(" 的速度会影响首屏渲染速度，这就是我们常说的 "),t("code",[v._v("CSS")]),v._v(" 资源的加载会阻塞渲染")]),v._v(" "),t("p",[v._v("怎么优化？DOM树要小，CSS尽量用 "),t("code",[v._v("id")]),v._v(" 和 "),t("code",[v._v("class")]),v._v(" 少直接用标签😄")]),v._v(" "),t("h3",{attrs:{id:"解析javascript脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析javascript脚本"}},[v._v("#")]),v._v(" 解析JavaScript脚本")]),v._v(" "),t("p",[t("strong",[v._v("「JS会对DOM节点进行操作，浏览器无法预测未来的DOM节点的具体内容，为了防止无效操作，节省资源，只能阻塞DOM树的构建」")])]),v._v(" "),t("p",[v._v("若不阻塞DOM树的构建，若 JS 删除了某个DOM节点A，那么浏览器为构建此节点A花费的资源就是无效的")]),v._v(" "),t("p",[v._v("若在 HTML 头部加载 JS 文件，由于 JS 阻塞，会推迟页面的首绘，所以为了加快页面渲染，一般将 JS 文件放到HTML 底部进行加载，或是对 JS 文件执行 "),t("code",[v._v("async")]),v._v(" 或 "),t("code",[v._v("defer")]),v._v(" 加载")]),v._v(" "),t("h3",{attrs:{id:"构建渲染树-呈现树-render-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建渲染树-呈现树-render-tree"}},[v._v("#")]),v._v(" 构建渲染树/呈现树(Render Tree)")]),v._v(" "),t("p",[t("code",[v._v("CSSOM 树")]),v._v("和 "),t("code",[v._v("DOM 树")]),v._v(" 合并成渲染树，"),t("code",[v._v("渲染树")]),v._v(" 只包含渲染网页所需的节点，然后用于计算每个可见元素的布局，并输出给绘制流程，将像素渲染到屏幕上")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器首先会从DOM树的根节点开始遍历每个可见节点")])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("例如脚本标记、元标记等有些节点不可见，因为它们不会体现在渲染输出中，所以会被忽略")]),v._v(" "),t("li",[v._v("某些节点通过 CSS 隐藏，因此在渲染树中也会被忽略，例如一个 "),t("code",[v._v("span")]),v._v(" 标签有 "),t("code",[v._v("display: none")]),v._v(" 属性，也会被忽略")])])]),v._v(" "),t("li",[t("p",[v._v("对于每个可见节点，找到其对应的的 CSSOM 规则并应用它们")])]),v._v(" "),t("li",[t("p",[v._v("输出可见节点，连同其内容和计算的样式")])])]),v._v(" "),t("h3",{attrs:{id:"布局-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布局-layout"}},[v._v("#")]),v._v(" 布局(Layout)")]),v._v(" "),t("p",[v._v("计算了哪些节点应该是可见的以及它们的计算样式，但我们还没有计算它们在设备 视口[2] 内的确切位置和大小，这就是 "),t("code",[v._v("布局")]),v._v(" ( Layout ) 阶段，也称为 "),t("code",[v._v("自动重排")]),v._v(" 或 "),t("code",[v._v("回流")]),v._v(" ( Reflow )")]),v._v(" "),t("h3",{attrs:{id:"绘制-painting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绘制-painting"}},[v._v("#")]),v._v(" 绘制(Painting)")]),v._v(" "),t("p",[v._v("它们的计算样式以及几何信息，我们将这些信息传递给最后一个阶段将渲染树中的每个节点转换成屏幕上的实际像素，也就是俗称的 "),t("code",[v._v("绘制")]),v._v(" 或 "),t("code",[v._v("栅格化")])]),v._v(" "),t("h4",{attrs:{id:"重绘-repaint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[v._v("#")]),v._v(" 重绘(Repaint)")]),v._v(" "),t("p",[v._v("元素发生的改变只是影响了元素的一些外观之类的时候（例如，背景色，边框颜色，文字颜色等），此时只需要应用新样式绘制这个元素就可以了，这叫做 "),t("code",[v._v("重绘")]),v._v(" ( Repaint )")]),v._v(" "),t("h4",{attrs:{id:"回流-reflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[v._v("#")]),v._v(" 回流 (Reflow)")]),v._v(" "),t("p",[v._v("上面我们已经说过了 "),t("code",[v._v("回流")]),v._v(" ，当然也叫 "),t("code",[v._v("重排")]),v._v(" ，要知道，"),t("code",[v._v("回流")]),v._v(" 一定伴随着 "),t("code",[v._v("重绘")]),v._v(" ，"),t("code",[v._v("重绘")]),v._v(" 却可以单独出现，对比来看，显然回流的成本开销要高于重绘，而且一个节点的回流往往还会导致子节点以及同级节点的回流，所以优化方案中一般都包括，尽量避免 "),t("code",[v._v("回流")])]),v._v(" "),t("p",[t("strong",[v._v("什么会引起回流？")])]),v._v(" "),t("ul",[t("li",[v._v("页面渲染初始化")]),v._v(" "),t("li",[v._v("DOM结构改变，比如删除了某个节点")]),v._v(" "),t("li",[v._v("render树变化，比如减少了padding")]),v._v(" "),t("li",[v._v("窗口 "),t("code",[v._v("resize")])])]),v._v(" "),t("h4",{attrs:{id:"如何减少和避免回流重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何减少和避免回流重绘"}},[v._v("#")]),v._v(" 如何减少和避免回流重绘")]),v._v(" "),t("p",[v._v("回流开销太大了，那么我们肯定是要优化的")])])}),[],!1,null,null,null);_.default=a.exports}}]);