(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{531:function(t,a,e){"use strict";e.r(a);var r=e(8),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"/images/2019/12/01/1.jpeg",alt:"",width:"1200",height:"532",loading:"lazy"}})]),t._v(" "),e("h3",{attrs:{id:"_2019-06-10-new-操作发生了什么-如何用函数实现-✅✅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-10-new-操作发生了什么-如何用函数实现-✅✅"}},[t._v("#")]),t._v(" 2019-06-10: new 操作发生了什么？如何用函数实现？✅✅")]),t._v(" "),e("details",[e("summary",[t._v("好好想想先 😌 ")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("参考链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("new 运算符"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("strong",[t._v("一句话")]),t._v(" "),e("ol",[e("li",[t._v("创建一个以这个函数为原型的空对象.")]),t._v(" "),e("li",[t._v("将函数的 "),e("code",[t._v("prototype")]),t._v(" 赋值给对象的 "),e("code",[t._v("__proto__")]),t._v(" 属性")]),t._v(" "),e("li",[t._v("将对象作为函数的 "),e("code",[t._v("this")]),t._v(" 传进去。如果有 "),e("code",[t._v("return")]),t._v(" 出来东西是对象的话就直接返回 "),e("code",[t._v("return")]),t._v(" 的内容，没有的话就返回创建的这个对象")])])]),t._v(" "),e("li",[e("strong",[t._v("代码实现")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("objectFactory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Constructor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("rest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" instance\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"_2019-06-09-什么是-javascript-迭代器和生成器-✅✅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-09-什么是-javascript-迭代器和生成器-✅✅"}},[t._v("#")]),t._v(" 2019-06-09: 什么是 javascript 迭代器和生成器？✅✅")]),t._v(" "),e("details",[e("summary",[t._v("好好想想先 😌 ")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("参考链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators",target:"_blank",rel:"noopener noreferrer"}},[t._v("迭代器和生成器"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://harttle.land/2018/09/29/es6-iterators.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6 迭代器：Iterator, Iterable 和 Generator"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000010747122",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6 系列---迭代器（Iterator）与生成器（Generator）"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("strong",[t._v("一句话")]),t._v(" "),e("ul",[e("li",[t._v("迭代器是一个拥有 next()方法的特殊对象，每次调用 next() 都返回一个结果对象 "),e("code",[t._v("{ done: boolean, value: any }")])]),t._v(" "),e("li",[t._v("生成器是一种返回迭代器的函数，通过 function 关键字后的星号（*）来表示")])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);