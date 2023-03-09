(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{498:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"/images/2019/06/02/V83dBD.png",alt:"V83dBD.png",width:"1200",height:"897",loading:"lazy"}})]),t._v(" "),s("p",[t._v("最近研究了 Flutter 并且略微有了一些成果，上图是简单实现了一个豆瓣第三方客户端。")]),t._v(" "),s("p",[t._v("加了一些 Flutter, Dart 的交流群，对用户交流的问题印象比较深的一个是：用了 Flutter 为什么一些底层交互还是要通过写原生（java/objective-c/swift）来调用？这一点和 React Native 是类似的。这是跨平台开发的通病，这点没有哪个跨平台开发框架能够完美解决。")]),t._v(" "),s("h2",{attrs:{id:"flutter-的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的性能"}},[t._v("#")]),t._v(" Flutter 的性能")]),t._v(" "),s("p",[t._v("我们使用 Flutter，最关注的就是 Flutter 的性能了。以下摘自一位国外开发者对 Flutter 性能的描述。\n原文地址："),s("a",{attrs:{href:"https://hackr.io/blog/react-native-vs-flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native vs Flutter"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("When it comes to performance, Flutter’s approach is quite different than that of React Native, or even NativeScript. Flutter’s application is compiled using arm C/C++ library so that it’s closer to machine language and gives a better native performance. Not just the UI components are compiled, but the whole thing.")])]),t._v(" "),s("blockquote",[s("p",[t._v("Dart is quite a performant language on its own, and many people believe that in terms of performance, Flutter has got the upper hand, although it’s hard to definitely judge as there are many factors involved in the performance.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/06/02/V83y9I.png",alt:"V83y9I.png",width:"933",height:"545",loading:"lazy"}})]),t._v(" "),s("p",[t._v("以上是对 Flutter 性能的介绍，大致意思是 Flutter 的应用程序是使用 arm C / C ++库编译(AOT/运行前编译)的，不仅仅编译了 UI 层，基本上所有东西懂编译了，然后就是 Dart 语言的高性能带来的优势。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/2019/06/02/V83gjf.png",alt:"V83gjf.png",width:"720",height:"385",loading:"lazy"}})]),t._v(" "),s("p",[t._v("而 React Native 的 Javascript 是运行时编译(JIT)的，并且需要通过 React Native Bridge (V8 引擎) 做一层转换，因而性能上就弱于 Flutter。")]),t._v(" "),s("p",[t._v("目前社区比较公认的一个 APP 性能排行是：Native > Flutter > React Native > Ionic(H5 Hybrid)")]),t._v(" "),s("blockquote",[s("p",[t._v("附上闲鱼对 Flutter 和 RN 性能的真机对比："),s("a",{attrs:{href:"https://juejin.im/post/5b9606055188255c7c6541c3",target:"_blank",rel:"noopener noreferrer"}},[t._v("流言终结者- Flutter 和 RN 谁才是更好的跨端开发方案？ - 闲鱼技术-灯阳"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"flutter-开发体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-开发体验"}},[t._v("#")]),t._v(" Flutter 开发体验")]),t._v(" "),s("p",[t._v("Flutter 的 Hotreload 是优于 React Native 的，局部更新完全不会重载页面，如果有较大改动，破坏了主线程的话，则需要重新载入。")]),t._v(" "),s("p",[t._v("Flutter 使用 Dart 语言开发，Dart 是强类型语言，Google 做这个语言是指望取代 JS 的位置的。由于强类型语言的特性， Dart 的性能是优于 JS 的，但是开发效率上就不如 JS 了。")]),t._v(" "),s("p",[t._v("JSX 的出现可以说是改变了 JS 书写页面的方式，然而 Dart 并没有 DartX，因此 Flutter 组件通常是这样的：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JMenuGroupTitle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JMenuGroupTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EdgeInsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromLTRB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Theme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("primaryColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              fontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("复杂的组件嵌套只会更多，往往多了你就不知道哪两个括号是一对了，这一点经常会浪费开发者时间。")]),t._v(" "),s("p",[t._v("Flutter 的状态管理基本和 React 相同，都是 Flux 架构的实现，另外也有 ReactiveX Dart，类似于 ReactiveX JS。")]),t._v(" "),s("p",[t._v("关于网络请求和数据持久化基本和 React Native 没有区别。")]),t._v(" "),s("h2",{attrs:{id:"flutter-的未来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的未来"}},[t._v("#")]),t._v(" Flutter 的未来")]),t._v(" "),s("p",[t._v("目前 Flutter 在国内比较有名的应用就是闲鱼 App 了，然而闲鱼 App 的质量并不高，使用过程中经常会有一些闪现、样式错乱、滑动卡顿等 bug。")]),t._v(" "),s("p",[t._v("在使用 Flutter 开发的过程中也明显感受到了一些不如原生的地方，例如在安卓上路由切换动画跟系统动画不一致，Tab 滑动有略微卡顿、长列表特殊条件下会出现滚动闪现的问题等等。")]),t._v(" "),s("p",[t._v("Flutter 需要类似 JSX 的东西来做语法转化，使代码结构更清晰。")]),t._v(" "),s("p",[t._v("Flutter 内置了一些 Fuchsia 的 api，适用于下一代安卓系统，在未来肯定会有更广阔的用武之地。")])])}),[],!1,null,null,null);a.default=n.exports}}]);