(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{543:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"/images/2020/04/02/1.jpeg",alt:"",width:"1200",height:"503",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"_2019-11-20-什么是重绘-repaint-和回流-reflow-怎样优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-20-什么是重绘-repaint-和回流-reflow-怎样优化"}},[t._v("#")]),t._v(" 2019-11-20: 什么是重绘（repaint）和回流（reflow），怎样优化")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a9923e9518825558251c96a",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的回流与重绘 (Reflow & Repaint)"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("浏览器使用流式布局")]),t._v(" "),a("li",[t._v("回流必将引起重绘，重绘不一定会引起回流")]),t._v(" "),a("li",[t._v("会导致回流的操作：\n"),a("ul",[a("li",[t._v("页面首次渲染")]),t._v(" "),a("li",[t._v("浏览器窗口大小发生改变")]),t._v(" "),a("li",[t._v("元素尺寸或位置发生改变")]),t._v(" "),a("li",[t._v("元素内容变化（文字数量或图片大小等等）")]),t._v(" "),a("li",[t._v("元素字体大小变化")]),t._v(" "),a("li",[t._v("添加或者删除可见的 DOM 元素")]),t._v(" "),a("li",[t._v("激活 CSS 伪类（例如：:hover）")]),t._v(" "),a("li",[t._v("查询某些属性或调用某些方法")])])]),t._v(" "),a("li",[t._v("重绘\n"),a("ul",[a("li",[t._v("当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。")])])]),t._v(" "),a("li",[t._v("性能\n"),a("ul",[a("li",[t._v("浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。")])])]),t._v(" "),a("li",[t._v("怎样优化\n"),a("ul",[a("li",[t._v("CSS\n"),a("ul",[a("li",[t._v("避免使用 table 布局。")]),t._v(" "),a("li",[t._v("尽可能在 DOM 树的最末端改变 class。")]),t._v(" "),a("li",[t._v("避免设置多层内联样式。")]),t._v(" "),a("li",[t._v("将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。")]),t._v(" "),a("li",[t._v("避免使用 CSS 表达式（例如：calc()）。")])])]),t._v(" "),a("li",[t._v("JavaScript\n"),a("ul",[a("li",[t._v("避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。")]),t._v(" "),a("li",[t._v("避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。")]),t._v(" "),a("li",[t._v("也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。")]),t._v(" "),a("li",[t._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。")]),t._v(" "),a("li",[t._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])])])])])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-19-base-64-编码原理-和二进制的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-19-base-64-编码原理-和二进制的区别"}},[t._v("#")]),t._v(" 2019-11-19: base 64 编码原理，和二进制的区别")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cc573c85188252e741ccbb6",target:"_blank",rel:"noopener noreferrer"}},[t._v("史上最详细的经典面试题 从输入 URL 到看到页面发生了什么？"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("TODO")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-18-输入-url-到浏览器返回页面的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-18-输入-url-到浏览器返回页面的过程"}},[t._v("#")]),t._v(" 2019-11-18: 输入 url 到浏览器返回页面的过程")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cc573c85188252e741ccbb6",target:"_blank",rel:"noopener noreferrer"}},[t._v("史上最详细的经典面试题 从输入 URL 到看到页面发生了什么？"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("DNS 解析")]),t._v(" "),a("li",[t._v("发起 TCP 连接")]),t._v(" "),a("li",[t._v("发送 HTTP 请求")]),t._v(" "),a("li",[t._v("服务器处理请求并返回 HTTP 报文")]),t._v(" "),a("li",[t._v("浏览器解析渲染页面")]),t._v(" "),a("li",[t._v("连接结束。")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-17-es6-模块和-commonjs-模块的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-17-es6-模块和-commonjs-模块的区别"}},[t._v("#")]),t._v(" 2019-11-17: ES6 模块和 CommonJS 模块的区别")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000017878394",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入 CommonJs 与 ES6 Module"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("CommonJs 导出的是变量的一份拷贝，ES6 Module 导出的是变量的绑定（export default 是特殊的）")]),t._v(" "),a("li",[t._v("CommonJs 是单个值导出，ES6 Module 可以导出多个")]),t._v(" "),a("li",[t._v("CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层")]),t._v(" "),a("li",[t._v("CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-16-js-实现精确定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-16-js-实现精确定时器"}},[t._v("#")]),t._v(" 2019-11-16: JS 实现精确定时器")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("一句话")]),t._v(" "),a("ul",[a("li",[t._v("循环或递归进行时间比对")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("manualTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" time\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("recall")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("运用相对精确，下一次定时器补上上一次的时间差")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  elapsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n  elapsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elapsed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" elapsed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elapsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.0'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elapsed\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" diff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" time\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" diff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-15-ascii-unicode-utf-8-编码原理-三者之间有什么关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-15-ascii-unicode-utf-8-编码原理-三者之间有什么关系"}},[t._v("#")]),t._v(" 2019-11-15: ASCII, unicode, utf-8 编码原理，三者之间有什么关系")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("字符编码笔记：ASCII，Unicode 和 UTF-8"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("TODO")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-14-上传文件怎样获取进度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-14-上传文件怎样获取进度"}},[t._v("#")]),t._v(" 2019-11-14: 上传文件怎样获取进度")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000008791342",target:"_blank",rel:"noopener noreferrer"}},[t._v("文件上传进度提示"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("TODO")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-13-为什么-false-而-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-13-为什么-false-而-true"}},[t._v("#")]),t._v(" 2019-11-13: 为什么 "),a("code",[t._v("[] == false")]),t._v(" 而 "),a("code",[t._v("!![] === true")])]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.h5jun.com/post/why-false-why-true.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么 [ ] 是 false 而 !![ ] 是 true"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("跟 ES 规范有关")]),t._v(" "),a("li",[t._v("[] == false\n"),a("ul",[a("li",[t._v("ToPrimitive([]) == ToNumber(false)")]),t._v(" "),a("li",[t._v("[].valueOf().toString() == 0")]),t._v(" "),a("li",[t._v('"" == 0')])])]),t._v(" "),a("li",[t._v("!![] === true\n"),a("ul",[a("li",[t._v("对于非操作符 ! 会执行 ToBoolean 方法")]),t._v(" "),a("li",[t._v("!!ToBoolean([]) === true")])])])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-12-什么是-devops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-12-什么是-devops"}},[t._v("#")]),t._v(" 2019-11-12: 什么是 DevOps")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://baike.baidu.com/item/devops/2613029",target:"_blank",rel:"noopener noreferrer"}},[t._v("devops （过程、方法与系统的统称）"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("它是一种重视“软件开发人员（Dev）”和“IT 运维技术人员（Ops）”之间沟通合作的文化、运动或惯例。透过自动化“软件交付”和“架构变更”的流程，来使得构建、测试、发布软件能够更加地快捷、频繁和可靠。")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_2019-11-11-get-和-post-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-11-11-get-和-post-区别"}},[t._v("#")]),t._v(" 2019-11-11: get 和 post 区别")]),t._v(" "),a("details",[a("summary",[t._v("好好想想先 😌 ")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参考链接")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cb67cf1518825324e689f69",target:"_blank",rel:"noopener noreferrer"}},[t._v("get 和 post 的区别？"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("一句话")])]),t._v(" "),a("ul",[a("li",[t._v("get 用来获取数据，post 用来提交数据")]),t._v(" "),a("li",[t._v("get 参数有长度限制（受限于 url 长度，具体的数值取决于浏览器和服务器的限制，最长 2048 字节），而 post 无限制。")]),t._v(" "),a("li",[t._v('get 请求的数据会附加在 url 之 ，以 " ？ "分割 url 和传输数据，多个参数用 "&"连接，而 post 请求会把请求的数据放在 http 请求体中。')]),t._v(" "),a("li",[t._v("get 是明文传输，post 是放在请求体中。")]),t._v(" "),a("li",[t._v("get 可被缓存。")]),t._v(" "),a("li",[t._v("部分浏览器 post 会发送客户端会发送两个数据包（header 和 body 分开发送）")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);