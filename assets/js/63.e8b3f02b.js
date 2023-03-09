(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{517:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"/images/2020/02/10/2.jpeg",alt:"",width:"1200",height:"578",loading:"lazy"}})]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#为什么要做第三方客户端"}},[t._v("为什么要做第三方客户端")])]),a("li",[a("a",{attrs:{href:"#从哪些方面优化第三方客户端体验"}},[t._v("从哪些方面优化第三方客户端体验")])]),a("li",[a("a",{attrs:{href:"#用-electron-实现第三方网页客户端"}},[t._v("用 Electron 实现第三方网页客户端")]),a("ul",[a("li",[a("a",{attrs:{href:"#首先要创建一个隐藏的网页"}},[t._v("首先要创建一个隐藏的网页")])]),a("li",[a("a",{attrs:{href:"#抓取隐藏网页中的接口"}},[t._v("抓取隐藏网页中的接口")])]),a("li",[a("a",{attrs:{href:"#抓取隐藏网页中的-html-内容"}},[t._v("抓取隐藏网页中的 html 内容")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"为什么要做第三方客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做第三方客户端"}},[t._v("#")]),t._v(" 为什么要做第三方客户端")]),t._v(" "),a("ul",[a("li",[t._v("首先是为了获得更好的用户体验。如下图所示，左侧是第三方微博客户端 "),a("em",[t._v("Share")]),t._v("，右侧是 "),a("em",[t._v("V2EX")]),t._v(" 第三方客户端。两者的特点都是界面都很简洁，功能比较纯粹。早期也有很多第三方贴吧 APP、视频软件 APP，但是随着大厂流量战争越打越强，就对这些第三方 APP 进行了封杀。")]),t._v(" "),a("li",[t._v("其次我们可以在第三方客户端中加入广告和捐赠功能，来获得一部分额外收入。🍭")]),t._v(" "),a("li",[t._v("最后就是在有一定用户量后开源出来可以吸一波 Star。不过这个和上面有点矛盾，因为开源出来后你加入的广告就可能被别人去掉后重新编译打包了。甚至里面的捐赠支付二维码会被改成其他人的二维码。这一点就看个人取舍了。")])]),t._v(" "),a("StyledImg",{staticStyle:{width:"80%"},attrs:{src:"/images/2020/02/12/1.png",shadow:"",center:""}}),t._v(" "),a("h2",{attrs:{id:"从哪些方面优化第三方客户端体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从哪些方面优化第三方客户端体验"}},[t._v("#")]),t._v(" 从哪些方面优化第三方客户端体验")]),t._v(" "),a("ol",[a("li",[t._v("使客户端功能更纯粹。现在无论什么 APP 都要加新闻、直播、钱包、小视频的功能（说的就是微信、百度、微博这些毒瘤 😡）。我们封装第三方客户端时首当其冲就是要去掉这些无用功能。")]),t._v(" "),a("li",[t._v("去除广告。幸运破解器也可以帮助去除，不过成功率较低。")]),t._v(" "),a("li",[t._v("使用贴合原生系统的设计风格。安卓使用 material design，苹果使用 cupertino 设计风格（这个名子来自 flutter，官方没有具体名子）。")]),t._v(" "),a("li",[t._v("动画贴近原生。使用系统级的过渡动画，这样会使 APP 界面切换更流畅。如何检测动画是否是系统级的？在开发者选项中将动画速度切换成 0.5 倍，如果 APP 的动画速度也变慢了，说明动画是系统级的。在 flutter 中，由于控件都是使用 Skia 绘制的，而非原生控件，动画引擎也是内建的，所以无法使用系统内建动画，跟系统有一股割裂感。这也是我不喜欢 flutter 的一点。")]),t._v(" "),a("li",[t._v("增加特色功能。如主题换肤、特殊权限破解（如看视频免 vip 等等，但是随着这些鉴权逐渐迁往服务端，现在基本不可能实现了，只能想办法找一些漏洞）。")])]),t._v(" "),a("h2",{attrs:{id:"用-electron-实现第三方网页客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-electron-实现第三方网页客户端"}},[t._v("#")]),t._v(" 用 Electron 实现第三方网页客户端")]),t._v(" "),a("p",[t._v("Electron 本身便是一个浏览器，在实现第三方网页客户端上有天然优势。传统方法抓取网页 api 的方式是尽可能的模拟请求头，但是在 electron 中我们可以用 webview 访问这个网页，然后将 webview 中的请求到的接口抓取过来。这样本质和直接访问原网页没有任何不同，但是我们可以在抓到接口后对页面进行自定义，添加更多自定义功能。")]),t._v(" "),a("h3",{attrs:{id:"首先要创建一个隐藏的网页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先要创建一个隐藏的网页"}},[t._v("#")]),t._v(" 首先要创建一个隐藏的网页")]),t._v(" "),a("p",[t._v("electron 里面据我所知的有两种方法。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过 "),a("code",[t._v("BrowserWindow")]),t._v(" 主进程中创建"),a("br"),t._v("\n设置 "),a("code",[t._v("BrowserWindow")]),t._v(" 的 show 属性为 "),a("code",[t._v("false")]),t._v("，此时 window 示例在主进程中，渲染进程想要获取数据需要通过 ipc 和主进程通信。这样做的的好处是在主进程中能更方便的进行更高权限的操作。")])]),t._v(" "),a("li",[a("p",[t._v("在渲染进程中直接通过 "),a("code",[t._v("webview")]),t._v(" 创建"),a("br"),t._v("\n创建一个隐藏的 "),a("code",[t._v("webview")]),t._v(" 去访问相关网页地址。好处非常明显，获取数据不用和主进程通信，操作基本在渲染进程完成。")])])]),t._v(" "),a("h3",{attrs:{id:"抓取隐藏网页中的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓取隐藏网页中的接口"}},[t._v("#")]),t._v(" 抓取隐藏网页中的接口")]),t._v(" "),a("p",[t._v("使用 debgguer 工具获取网页中请求的接口。这个 degguer 和 chrome 中的非常相似，不过是没有界面的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BrowserWindow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" win "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Debugger attach failed : '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detach'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Debugger detached due to : '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Network.requestWillBeSent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.github.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Network.enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("只有运行 attach 方法后，接口才会被捕捉到，类似 chrome 中不开启开发者工具就不会捕捉请求。抓取到想要的数据后需要运行 detach 方法，不然内存会爆表。")]),t._v(" "),a("h3",{attrs:{id:"抓取隐藏网页中的-html-内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓取隐藏网页中的-html-内容"}},[t._v("#")]),t._v(" 抓取隐藏网页中的 html 内容")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("executeJavaScript")]),t._v(" 方法获取 dom 元素，在页面加载完成后执行。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'did-finish-load'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document.getElementById(\"username\").innerHTML'")]),t._v("\n  win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeJavaScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("username")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("有以上两个方法肯定能够很轻松的制作出网页第三方客户端，如果有时间和精力的话 🤟")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);