(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{505:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"/images/2019/05/13/E5qn7d.png",alt:"E5qn7d.png",width:"1200",height:"630",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("本文是"),s("a",{attrs:{href:"https://yjhjstz.gitbooks.io/deep-into-node/content/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Node.js：核心思想与源码分析"),s("OutboundLink")],1),t._v(" 的读书笔记。一些难理解的和必要重要的点先暂时记录在这里了。")]),t._v(" "),s("h2",{attrs:{id:"架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),s("h3",{attrs:{id:"四大部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四大部分"}},[t._v("#")]),t._v(" 四大部分")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/05/13/E5qLEd.jpg",alt:"E5qLEd.jpg",width:"822",height:"534",loading:"lazy"}}),t._v("\nNode.js 主要分为四大部分，Node Standard Library，Node Bindings，V8，Libuv")]),t._v(" "),s("ul",[s("li",[t._v("Node Standard Library 是我们每天都在用的标准库，如 Http, Buffer 模块。")]),t._v(" "),s("li",[t._v("Node Bindings 是沟通 JS 和 C++的桥梁，封装 V8 和 Libuv 的细节，向上层提供基础 API 服务。这一层是支撑 Node.js 运行的关键，由 C/C++ 实现。")]),t._v(" "),s("li",[t._v("V8 是 Google 开发的 JavaScript 引擎，提供 JavaScript 运行环境，可以说它就是 Node.js 的发动机。")]),t._v(" "),s("li",[t._v("Libuv 是专门为 Node.js 开发的一个封装库，提供跨平台的异步 I/O 能力。")]),t._v(" "),s("li",[t._v("C-ares：提供了异步处理 DNS 相关的能力。")]),t._v(" "),s("li",[t._v("http_parser、OpenSSL、zlib 等：提供包括 http 解析、SSL、数据压缩等其他的能力。")])]),t._v(" "),s("h3",{attrs:{id:"v8-架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-架构"}},[t._v("#")]),t._v(" V8 架构")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/05/14/EI6npR.png",alt:"EI6npR.png",width:"549",height:"479",loading:"lazy"}})]),t._v(" "),s("p",[t._v("现在 JS 引擎的执行过程大致是：源代码 ---\x3e抽象语法树 ---\x3e字节码 ---\x3eJIT---\x3e本地代码。")]),t._v(" "),s("p",[t._v("V8 更加直接的将抽象语法树通过 JIT 技术转换成本地代码，放弃了在字节码阶段可以进行的一些性能优化，但保证了执行速度。 在 V8 生成本地代码后，也会通过 Profiler 采集一些信息，来优化本地代码。虽然，少了生成字节码这一阶段的性能优化， 但极大减少了转换时间。")]),t._v(" "),s("h3",{attrs:{id:"gc-garbage-collection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc-garbage-collection"}},[t._v("#")]),t._v(" GC (Garbage Collection)")]),t._v(" "),s("p",[t._v("垃圾回收器解决基本问题就是，识别需要回收的内存。一旦辨别完毕，这些内存区域即可在未来的分配中重用，或者是返还给操作系统。一个对象当它不是处于活跃状态的时候它就死了。一个对象处于活跃状态，当且仅当它被一个根对象或另一个活跃对象指向。根对象被定义为处于活跃状态，是浏览器或 V8 所引用的对象。比如说全局对象属于根对象，因为它们始终可被访问；浏览器对象，如 DOM 元素，也属于根对象，尽管在某些场合下它们只是弱引用。")]),t._v(" "),s("h2",{attrs:{id:"模块加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块加载"}},[t._v("#")]),t._v(" 模块加载")]),t._v(" "),s("h3",{attrs:{id:"四种模块类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四种模块类型"}},[t._v("#")]),t._v(" 四种模块类型")]),t._v(" "),s("ul",[s("li",[t._v("builtin module: Node 中以 c++ 形式提供的模块，如 tcp_wrap、contextify 等")]),t._v(" "),s("li",[t._v("constants module: Node 中定义常量的模块，用来导出如 signal, openssl 库、文件访问权限等常量的定义。如文件访问权限中的 O_RDONLY，O_CREAT、signal 中的 SIGHUP，SIGINT 等。")]),t._v(" "),s("li",[t._v("native module: Node 中以 JavaScript 形式提供的模块，如 http,https,fs 等。有些 native module 需要借助于 builtin module 实现背后的功能。如对于 native 模块 buffer , 还是需要借助\nbuiltin node_buffer.cc 中提供的功能来实现大容量内存申请和管理，目的是能够脱离 V8 内存大小使用限制。")]),t._v(" "),s("li",[t._v("3rd-party module: 以上模块可以统称 Node 内建模块，除此之外为第三方模块，典型的如 express 模块。")])]),t._v(" "),s("h3",{attrs:{id:"模块加载原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块加载原理"}},[t._v("#")]),t._v(" 模块加载原理")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lib/module.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'missing path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path must be a string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_load")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isMain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Module._load REQUEST %s parent: %s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" filename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_resolveFilename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cachedModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cachedModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cachedModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NativeModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nonInternalExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load native module %s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" NativeModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" module "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isMain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module\n    module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hadException "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    hadException "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hadException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("如果模块在缓存中，返回它的 exports 对象。")]),t._v(" "),s("li",[t._v("如果是原生的模块，通过调用 NativeModule.require() 返回结果。")]),t._v(" "),s("li",[t._v("否则，创建一个新的模块，并保存到缓存中。")])]),t._v(" "),s("h2",{attrs:{id:"global-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-对象"}},[t._v("#")]),t._v(" Global 对象")]),t._v(" "),s("h3",{attrs:{id:"全局对象和全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局对象和全局变量"}},[t._v("#")]),t._v(" 全局对象和全局变量")]),t._v(" "),s("h4",{attrs:{id:"全局对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局对象"}},[t._v("#")]),t._v(" 全局对象")]),t._v(" "),s("ul",[s("li",[t._v("global：表示 Node 所在的全局环境，类似于浏览器的 window 对象。")]),t._v(" "),s("li",[t._v("process：该对象表示 Node 所处的当前进程，允许开发者与该进程互动。")]),t._v(" "),s("li",[t._v("console：指向 Node 内置的 console 模块，提供命令行环境中的标准输入、标准输出功能。")])]),t._v(" "),s("h4",{attrs:{id:"全局函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局函数"}},[t._v("#")]),t._v(" 全局函数")]),t._v(" "),s("ul",[s("li",[t._v("setTimeout()：用于在指定毫秒之后，运行回调函数。")]),t._v(" "),s("li",[t._v("setImmediate(): 下一次事件循环调用。")]),t._v(" "),s("li",[t._v("clearTimeout()：用于终止一个 setTimeout 方法新建的定时器。")]),t._v(" "),s("li",[t._v("setInterval()：用于每隔一定毫秒调用回调函数。")]),t._v(" "),s("li",[t._v("clearInterval()：终止一个用 setInterval 方法新建的定时器。")]),t._v(" "),s("li",[t._v("require()：用于加载模块。")])]),t._v(" "),s("h4",{attrs:{id:"伪全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪全局变量"}},[t._v("#")]),t._v(" 伪全局变量")]),t._v(" "),s("p",[t._v("有一些对象实际上是模块内部的局部变量，指向的对象根据模块不同而不同，但是所有模块都适用，可以看作是伪全局变量")]),t._v(" "),s("ul",[s("li",[t._v("__filename：指向当前运行的脚本文件名。")]),t._v(" "),s("li",[t._v("__dirname：指向当前运行的脚本所在的目录。")]),t._v(" "),s("li",[t._v("module")]),t._v(" "),s("li",[t._v("exports")])]),t._v(" "),s("h2",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),s("p",[t._v("事件循环的职责，就是不断得等待事件的发生，然后将这个事件的所有处理器，以它们订阅这个事件的时间顺序，依次执行。当这个事件的所有处理器都被执行完毕之后，事件循环就会开始继续等待下一个事件的触发，不断往复。\n当同时并发地处理多个请求时，以上的概念也是正确的，可以这样理解：在单个的线程中，事件处理器是一个一个按顺序执行的。")]),t._v(" "),s("h3",{attrs:{id:"node-js-中的事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-中的事件循环"}},[t._v("#")]),t._v(" Node.js 中的事件循环")]),t._v(" "),s("p",[t._v("Node 采用 V8 作为 JavaScript 的执行引擎，同时使用 libuv 实现事件驱动式异步 I/O。其事件循环就是采用了 libuv 的默认事件循环。")]),t._v(" "),s("h2",{attrs:{id:"buffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffer"}},[t._v("#")]),t._v(" Buffer")]),t._v(" "),s("p",[t._v("在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Nodejs 处理二进制数据，每当需要在 Nodejs 中处理 I/O 操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。")]),t._v(" "),s("h2",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),s("p",[t._v("事件中心，发布订阅模式。")]),t._v(" "),s("h2",{attrs:{id:"domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" Domain")]),t._v(" "),s("p",[t._v("捕获异步回调中的异常，基于 Event 模块实现。已废弃。")]),t._v(" "),s("h2",{attrs:{id:"stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[t._v("#")]),t._v(" Stream")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/data.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v(".pipe()")]),t._v(" 方法会自动帮助我们监听 data 和 end 事件。")]),t._v(" "),s("h2",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),s("h3",{attrs:{id:"网络模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[t._v("#")]),t._v(" 网络模型")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/06/05/VUrZAe.gif",alt:"VUrZAe.gif",width:"480",height:"305",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"socket-抽象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socket-抽象"}},[t._v("#")]),t._v(" Socket 抽象")]),t._v(" "),s("p",[t._v("Socket 是对 TCP/IP 协议族的一种封装，是应用层与 TCP/IP 协议族通信的中间软件抽象层。它把复杂的 TCP/IP 协议族隐藏在 Socket 接口后面，对用户来说，一组简单的接口就是全部，让 Socket 去组织数据，以符合指定的协议。")]),t._v(" "),s("p",[t._v("Socket 还可以认为是一种网络间不同计算机上的进程通信的一种方法，利用三元组（ip 地址，协议，端口）就可以唯一标识网络中的进程，网络中的进程通信可以利用这个标志与其它进程进行交互。\nSocket 起源于 Unix ，Unix/Linux 基本哲学之一就是“一切皆文件”，都可以用“打开(open) –> 读写(write/read) –> 关闭(close)”模式来进行操作。因此 Socket 也被处理为一种特殊的文件。")]),t._v(" "),s("h2",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),s("h3",{attrs:{id:"子进程-child-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子进程-child-process"}},[t._v("#")]),t._v(" 子进程 (child_process)")]),t._v(" "),s("p",[t._v("child_process 是 Node 的一个十分重要的模块，通过它可以实现创建多进程，以利用单机的多核计算资源。虽然，Nodejs 天生是单线程单进程的，但是有了 child_process 模块，可以在程序中直接创建子进程，并使用主进程和子进程之间实现通信。")]),t._v(" "),s("p",[t._v("每个进程各自有不同的用户地址空间，任何一个进程的全局变量在另一个进程中都看不到，所以进程之间要交换数据必须通过内核， 在内核中开辟一块缓冲区，进程 1 把数据从用户空间拷到内核缓冲区，进程 2 再从内核缓冲区把数据读走，内核提供的这种机制称为进程间通信。")])])}),[],!1,null,null,null);a.default=e.exports}}]);