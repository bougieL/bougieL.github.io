(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{545:function(t,e,r){"use strict";r.r(e);var _=r(8),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"/images/2020/04/13/01.jpg",alt:"",width:"1200",height:"433",loading:"lazy"}})]),t._v(" "),r("h3",{attrs:{id:"_2019-11-29-什么是-hashtable-如何解决冲突"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-29-什么是-hashtable-如何解决冲突"}},[t._v("#")]),t._v(" 2019-11-29: 什么是 HashTable ? 如何解决冲突")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[t._v("一种键值对数据结构")])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-28-websocket-怎么实现长连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-28-websocket-怎么实现长连接"}},[t._v("#")]),t._v(" 2019-11-28: Websocket 怎么实现长连接")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.zhihu.com/question/20215561",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket 是什么原理？为什么可以实现持久连接？"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("基于 http\n"),r("ul",[r("li",[t._v("101 switch protocol")]),t._v(" "),r("li",[t._v("Websocket 只需要一次 HTTP 握手，所以说整个通讯过程是建立在一次连接/状态中，也就避免了 HTTP 的非状态性，服务端会一直知道你的信息，直到你关闭请求，这样就解决了接线员要反复解析 HTTP 协议，还要查看 identity info 的信息。")])])])])])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-27-js-执行分为几个阶段-每个阶段分别做了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-27-js-执行分为几个阶段-每个阶段分别做了什么"}},[t._v("#")]),t._v(" 2019-11-27: js 执行分为几个阶段，每个阶段分别做了什么")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5c7a9b92518825153f784e14",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 引擎线程的执行过程的三个阶段"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("语法分析阶段\n"),r("ul",[r("li",[t._v("分析该 js 脚本代码块的语法是否正确，如果出现不正确，则向外抛出一个语法错误（SyntaxError），停止该 js 代码块的执行，然后继续查找并加载下一个代码块；如果语法正确，则进入预编译阶段。")]),t._v(" "),r("li",[t._v("变量提升在此阶段完成")])])]),t._v(" "),r("li",[t._v("预编译阶段\n"),r("ul",[r("li",[t._v("创建执行上下文")]),t._v(" "),r("li",[t._v("建立作用域")])])]),t._v(" "),r("li",[t._v("执行阶段")])])])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-26-什么是-webassembly-应用场景有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-26-什么是-webassembly-应用场景有哪些"}},[t._v("#")]),t._v(" 2019-11-26: 什么是 WebAssembly，应用场景有哪些")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/WebAssembly",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebAssembly"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/web/wa-lo-webassembly-status-and-reality/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebAssembly 现状与实战"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("在网页上运行 C/C++ RUST 语言")]),t._v(" "),r("li",[t._v("AssemblyScript")]),t._v(" "),r("li",[t._v("优点\n"),r("ul",[r("li",[t._v("体积小：由于浏览器运行时只加载编译成的字节码，一样的逻辑比用字符串描述的 JS 文件体积要小很多；")]),t._v(" "),r("li",[t._v("加载快：由于文件体积小，再加上无需解释执行，WebAssembly 能更快的加载并实例化，减少运行前的等待时间；")])])]),t._v(" "),r("li",[t._v("场景\n"),r("ul",[r("li",[t._v("AutoCAD web 版")]),t._v(" "),r("li",[t._v("Google Earth")])])])])])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-25-object-is-和-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-25-object-is-和-的区别"}},[t._v("#")]),t._v(" 2019-11-25: "),r("code",[t._v("Object.is")]),t._v(" 和 "),r("code",[t._v("===")]),t._v(" 的区别")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.is()"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("两者基本相同")]),t._v(" "),r("li",[t._v("Object.is(NaN, NaN) // true")]),t._v(" "),r("li",[t._v("NaN === NaN // false")]),t._v(" "),r("li",[t._v("Object.is(0, +0) // true")]),t._v(" "),r("li",[t._v("Object.is(0, -0) // false")])])])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-24-什么是-quic-协议-基本原理是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-24-什么是-quic-协议-基本原理是什么"}},[t._v("#")]),t._v(" 2019-11-24: 什么是 QUIC 协议，基本原理是什么")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32553477",target:"_blank",rel:"noopener noreferrer"}},[t._v("科普：QUIC 协议原理分析"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("Quic 全称 quick udp internet connection，“快速 UDP 互联网连接”\n"),r("ul",[r("li",[t._v("减少了 TCP 三次握手及 TLS 握手时间。")]),t._v(" "),r("li",[t._v("改进的拥塞控制。")]),t._v(" "),r("li",[t._v("避免队头阻塞的多路复用。")]),t._v(" "),r("li",[t._v("连接迁移。")]),t._v(" "),r("li",[t._v("前向冗余纠错。")])])])])])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-23-什么是-tcp-拥塞-拥塞控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-23-什么是-tcp-拥塞-拥塞控制"}},[t._v("#")]),t._v(" 2019-11-23: 什么是 TCP 拥塞，拥塞控制")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容安全策略( CSP )"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/09/csp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Security Policy 入门教程"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("通过 HTTP 头信息的 Content-Security-Policy 的字段")]),t._v(" "),r("li",[t._v("通过网页的<meta>标签")])])])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"_2019-11-22-什么是-csp-内容安全策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-22-什么是-csp-内容安全策略"}},[t._v("#")]),t._v(" 2019-11-22: 什么是 CSP（内容安全策略）")]),t._v(" "),r("details",[r("summary",[t._v("好好想想先 😌 ")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参考链接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容安全策略( CSP )"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/09/csp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Security Policy 入门教程"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("一句话")])]),t._v(" "),r("ul",[r("li",[t._v("通过 HTTP 头信息的 Content-Security-Policy 的字段")]),t._v(" "),r("li",[t._v("通过网页的<meta>标签")])])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);