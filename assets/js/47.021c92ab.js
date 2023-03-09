(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{505:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"/images/2019/05/02/EtjGbq.png",alt:"EtjGbq.png",width:"1108",height:"512",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("Github Pages 不能运行动态程序，只能输出一些静态内容。因此 Github Pages 非常适合用于前端项目的展示。可用于存放项目介绍、项目文档或者个人博客。本文介绍了怎么用 Travis CI 自动化部署 Github Pages。")]),t._v(" "),s("h2",{attrs:{id:"关于-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-ci"}},[t._v("#")]),t._v(" 关于 CI")]),t._v(" "),s("p",[t._v("持续集成（Continuous integration）是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试）来验证，从而尽早地发现集成错误。目前 github 开源项目用的较多的 CI 主要是 Circle CI 和 Travis CI，两者都是利用容器技术来适配不同项目环境。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://marketplace-screenshots.githubusercontent.com/7/edd31f74-33e3-11e7-8899-c8ceb4d795d2",alt:"Circle CI",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://marketplace-screenshots.githubusercontent.com/4/39671580-33e9-11e7-8b05-45f514dad0b8",alt:"Travis CI",loading:"lazy"}})]),t._v(" "),s("p",[t._v("(图一 CIrcle CI，图二 Travis CI)")]),t._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("h3",{attrs:{id:"_1-安装-github-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-github-app"}},[t._v("#")]),t._v(" 1. 安装 Github App")]),t._v(" "),s("p",[t._v("在 "),s("a",{attrs:{href:"https://github.com/marketplace",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Market Place"),s("OutboundLink")],1),t._v(" 安装 Travis CI。安装时选择你想要的项目权限。\n"),s("img",{attrs:{src:"/images/2019/05/02/ENCylT.png",width:"50%",alt:"ENCylT.png",title:"ENCylT.png"}})]),t._v(" "),s("h3",{attrs:{id:"_2-配置-github-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-github-token"}},[t._v("#")]),t._v(" 2. 配置 Github Token")]),t._v(" "),s("p",[t._v("配置 Github Token 用于 Travis CI 对你项目的访问权限，配置完了之后 "),s("strong",[t._v("不要刷新页面，先点一下 Token 后面的复制按钮")]),t._v("，因为你只能看见这个 Token 一次，刷新了它就没了 😂 不得不赞一下 Github 的安全性 👍\n"),s("img",{attrs:{src:"/images/2019/05/03/ENjIns.png",alt:"ENjIns.png",width:"1200",height:"254",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"_3-加密-github-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-加密-github-token"}},[t._v("#")]),t._v(" 3. 加密 Github Token")]),t._v(" "),s("p",[t._v("以下是 Travis CI 官方文档的 Github Pages 配置示例：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set in the settings page of your repository, as a secure variable")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep_history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),s("p",[s("code",[t._v("$GITHUB_TOKEN")]),t._v(" 是加密后的环境变量。如果不加密直接提交明文到一个 Repo 的话，github 会直接删除掉这个 token，简直太安全了 😂 加密步骤为")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("gem "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" travis      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Travis CI 官方 cli 工具")]),t._v("\ntravis login --pro      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录 Travis CI ，账号密码为你 Github 的账号密码")]),t._v("\ntravis encrypt "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>'")]),t._v(" --add     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加密 github token 并自动添加至配置文件")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-配置-travis-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置-travis-yml"}},[t._v("#")]),t._v(" 4. 配置 "),s("code",[t._v(".travis.yml")])]),t._v(" "),s("p",[t._v("完整的 "),s("code",[t._v(".travis.yml")]),t._v(" 配置示例，需要将前面加密的 github token 解密，当然只有 Travis CI 知道解密后的结果是啥 👊")]),t._v(" "),s("p",[t._v("地址："),s("a",{attrs:{href:"https://github.com/bougieL/bougie-design/blob/master/.travis.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bougie Design Travis CI config"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" composer config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("global github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('oauth.github.com "$GITHUB_TOKEN"\n'),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("r ./.docz/dist/* .\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep_history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TTQLIDz0jL4FRFrpq6DDocxLiELUSpJsj9phdmjW9Eg9kna73KjPF2XmZaWFvkObZU3og/7Thr/iwsXQqfdq8gHShhLkHZAZqgvWqbjMIQABYIFqqqUE9grrPdrLXWVAidh+nET+pjes8VX92NBz6HA+i/15+PugVwYhC85AGyNN2JRL7nxCwh2ECiKATRiX+cLmVqFwTGpzqHovAiBFnap17whWa4C4uVEzdBwjQAZKw+IFxiiJIA7hkFTTThS11uCx//Dr7/A1X7c6ZLao/qiwvW8fNAbhV5ZA6dx4a0vtLwj6lprjcwWuGQX/vutKHnpdNpxeIDhmLNspN1U7YxjgUZJXgFjpE6tw1I8N6nSRpzhPUlrXPkKUAdN9x2jN20NSUeFDSl0FhazPwhGWzlSQb0gNyH1U04wvw3QB2VP/3UvTiyCZjum6prTpuXy/D262smG97o0/0XlNySX6MC+OLQNDIVgzO4YO2IHVB8lW6CBSMeTlcE8a4yvHwmGQpLKnX6tY06/n8lvjgZgPKZaRZL6aVrBE+/104Gt/aBFpraZZpiXJjXjdm4TO3N+u8gT8+gkDJ0BvzrX7Kf/W/WouecziCJgzYCB7y8eqec4kmZKRs2O6zyKJ0SbPrW54UuCmjFzTLEmdRCXRLIbEQsWvS5x+FKKwGNGRcrgPjxY=\n")])])]),s("h3",{attrs:{id:"_5-触发-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-触发-ci"}},[t._v("#")]),t._v(" 5. 触发 CI")]),t._v(" "),s("p",[t._v("一般默认是 git push 时触发，也可以修改成 tag 时触发，push 后可以到 travis-ci.com 查看 CI 日志。如果出现下图所示日志，则表明部署 Github Pages 成功了\n"),s("img",{attrs:{src:"/images/2019/05/03/ENzmkt.png",width:"50%",alt:"ENzmkt.png",title:"ENzmkt.png"}})]),t._v(" "),s("h3",{attrs:{id:"_6-查看-github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看-github-pages"}},[t._v("#")]),t._v(" 6. 查看 Github Pages")]),t._v(" "),s("p",[t._v("Travis CI 会自动创建一个叫 gh-pages 的分支，如图所示：\n"),s("img",{attrs:{src:"/images/2019/05/03/ENz8mj.png",width:"50%",alt:"ENz8mj.png",title:"ENz8mj.png"}})]),t._v(" "),s("p",[t._v("到项目设置中设置 Github Pages 分支为 gh-pages：\n"),s("img",{attrs:{src:"/images/2019/05/03/EUSNbd.png",alt:"EUSNbd.png",width:"1200",height:"485",loading:"lazy"}})]),t._v(" "),s("p",[t._v("访问 "),s("code",[t._v("https://your-github-id.github.io/repo-name/")]),t._v(" 即可访问 Github Pages 了。需要注意的是 Github Pages 的 root path 不是 "),s("code",[t._v("/")]),t._v("，而是 "),s("code",[t._v("/repo-name/")]),t._v("，因此在打包时记得把基础路由设置成 "),s("code",[t._v("/repo-name/")]),t._v("，否则会出现资源路径错误的情况。")]),t._v(" "),s("h2",{attrs:{id:"_2019-06-23-更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-23-更新"}},[t._v("#")]),t._v(" 2019-06-23 更新")]),t._v(" "),s("p",[t._v("换了一个 Repo ，继续用原来的 "),s("code",[t._v("GitHub Token")]),t._v(" 不知道怎么就行不通了。")]),t._v(" "),s("p",[t._v("错误截图：\n"),s("img",{attrs:{src:"/images/2019/06/23/ZicXHf.png",alt:"ZicXHf.png",width:"1086",height:"124",loading:"lazy"}})]),t._v(" "),s("p",[t._v("对比正确截图为：\n"),s("img",{attrs:{src:"/images/2019/06/23/Zig5q0.png",alt:"Zig5q0.png",width:"1022",height:"202",loading:"lazy"}})]),t._v(" "),s("p",[t._v("看错误应该是 Token 认证出了问题。难道是一个 "),s("code",[t._v("Token")]),t._v(" 只能给一个仓库使用？抑或是一个 "),s("code",[t._v("Token")]),t._v(" 只能给一台机器使用？网上找了半天也没找到结果。"),s("code",[t._v("CI")]),t._v(" 还是适合用于软件自动化测试、"),s("code",[t._v("tag")]),t._v(" 发版，用于部署 "),s("code",[t._v("GitHub Pages")]),t._v(" 似乎有点小题大做了，最终决定改用 "),s("code",[t._v("Netlify")]),t._v(" 无脑部署了。"),s("code",[t._v("Netlify")]),t._v(" 具有配置重定向的功能，因此可以防止 "),s("code",[t._v("SPA")]),t._v(" 网站刷新 404。")]),t._v(" "),s("p",[t._v("配置方法为，在站点根目录创建 "),s("code",[t._v("_redirects")]),t._v(" 文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/*      /index.html       200\n")])])]),s("p",[t._v("最后的 200 状态码必须要写，不写的话会默认状态码为 302 ，页面地址会变为 "),s("code",[t._v("/index.html")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"附-阮老师对几个-持续-概念的解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附-阮老师对几个-持续-概念的解释"}},[t._v("#")]),t._v(" 附：阮老师对几个“持续“概念的解释")]),t._v(" "),s("h3",{attrs:{id:"一、概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概念"}},[t._v("#")]),t._v(" 一、概念")]),t._v(" "),s("p",[s("strong",[t._v("持续集成（Continuous integration）指的是，频繁地（一天多次）将代码集成到主干。")])]),t._v(" "),s("p",[t._v("它的好处主要有两个。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("（1）快速发现错误。")]),t._v(" 每完成一点更新，就集成到主干，可以快速发现错误，定位错误也比较容易。")]),t._v(" "),s("p",[s("strong",[t._v("（2）防止分支大幅偏离主干。")]),t._v(" 如果不是经常集成，主干又在不断更新，会导致以后集成的难度变大，甚至难以集成。")])]),t._v(" "),s("p",[s("strong",[t._v("持续集成的目的，就是让产品可以快速迭代，同时还能保持高质量。")]),t._v(" 它的核心措施是，代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。")]),t._v(" "),s("p",[t._v('Martin Fowler 说过，"持续集成并不能消除 Bug，而是让它们非常容易发现和改正。"')]),t._v(" "),s("p",[t._v("与持续集成相关的，还有两个概念，分别是持续交付和持续部署。")]),t._v(" "),s("h3",{attrs:{id:"二、持续交付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、持续交付"}},[t._v("#")]),t._v(" 二、持续交付")]),t._v(" "),s("p",[s("strong",[t._v("持续交付（Continuous delivery）指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。")]),t._v(" 如果评审通过，代码就进入生产阶段。")]),t._v(" "),s("p",[t._v("持续交付可以看作持续集成的下一步。它强调的是，不管怎么更新，软件是随时随地可以交付的。")]),t._v(" "),s("h3",{attrs:{id:"三、持续部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、持续部署"}},[t._v("#")]),t._v(" 三、持续部署")]),t._v(" "),s("p",[s("strong",[t._v("持续部署（continuous deployment）是持续交付的下一步，指的是代码通过评审以后，自动部署到生产环境。")])]),t._v(" "),s("p",[t._v("持续部署的目标是，代码在任何时刻都是可部署的，可以进入生产阶段。")]),t._v(" "),s("p",[t._v("持续部署的前提是能自动化完成测试、构建、部署等步骤。它与持续交付的区别，可以参考下图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015092302.jpg",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("（"),s("a",{attrs:{href:"http://blog.crisp.se/2013/02/05/yassalsundman/continuous-delivery-vs-continuous-deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),s("OutboundLink")],1),t._v("）")]),t._v(" "),s("h3",{attrs:{id:"四、流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、流程"}},[t._v("#")]),t._v(" 四、流程")]),t._v(" "),s("p",[t._v("根据持续集成的设计，代码从提交到生产，整个过程有以下几步。")]),t._v(" "),s("h4",{attrs:{id:"_4-1-提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-提交"}},[t._v("#")]),t._v(" 4.1 提交")]),t._v(" "),s("p",[t._v("流程的第一步，是开发者向代码仓库提交代码。所有后面的步骤都始于本地代码的一次提交（commit）。")]),t._v(" "),s("h4",{attrs:{id:"_4-2-测试-第一轮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-测试-第一轮"}},[t._v("#")]),t._v(" 4.2 测试（第一轮）")]),t._v(" "),s("p",[t._v("代码仓库对 commit 操作配置了钩子（hook），只要提交代码或者合并进主干，就会跑自动化测试。")]),t._v(" "),s("p",[t._v("测试有好几种。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("单元测试：针对函数或模块的测试")]),t._v(" "),s("li",[t._v("集成测试：针对整体产品的某个功能的测试，又称功能测试")]),t._v(" "),s("li",[t._v("端对端测试：从用户界面直达数据库的全链路测试")])])]),t._v(" "),s("p",[t._v("第一轮至少要跑单元测试。")]),t._v(" "),s("h4",{attrs:{id:"_4-3-构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-构建"}},[t._v("#")]),t._v(" 4.3 构建")]),t._v(" "),s("p",[t._v("通过第一轮测试，代码就可以合并进主干，就算可以交付了。")]),t._v(" "),s("p",[t._v("交付后，就先进行构建（build），再进入第二轮测试。所谓构建，指的是将源码转换为可以运行的实际代码，比如安装依赖，配置各种资源（样式表、JS 脚本、图片）等等。")]),t._v(" "),s("p",[t._v("常用的构建工具如下。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("a",{attrs:{href:"http://jenkins-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://Travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.codeship.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Codeship"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://stridercd.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strider"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("Jenkins 和 Strider 是开源软件，Travis 和 Codeship 对于开源项目可以免费使用。它们都会将构建和测试，在一次运行中执行完成。")]),t._v(" "),s("h4",{attrs:{id:"_4-4-测试-第二轮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-测试-第二轮"}},[t._v("#")]),t._v(" 4.4 测试（第二轮）")]),t._v(" "),s("p",[t._v("构建完成，就要进行第二轮测试。如果第一轮已经涵盖了所有测试内容，第二轮可以省略，当然，这时构建步骤也要移到第一轮测试前面。")]),t._v(" "),s("p",[t._v("第二轮是全面测试，单元测试和集成测试都会跑，有条件的话，也要做端对端测试。所有测试以自动化为主，少数无法自动化的测试用例，就要人工跑。")]),t._v(" "),s("p",[t._v("需要强调的是，新版本的每一个更新点都必须测试到。如果测试的覆盖率不高，进入后面的部署阶段后，很可能会出现严重的问题。")]),t._v(" "),s("h4",{attrs:{id:"_4-5-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-部署"}},[t._v("#")]),t._v(" 4.5 部署")]),t._v(" "),s("p",[t._v("通过了第二轮测试，当前代码就是一个可以直接部署的版本（artifact）。将这个版本的所有文件打包（ "),s("code",[t._v("tar filename.tar *")]),t._v(" ）存档，发到生产服务器。")]),t._v(" "),s("p",[t._v("生产服务器将打包文件，解包成本地的一个目录，再将运行路径的符号链接（symlink）指向这个目录，然后重新启动应用。这方面的部署工具有"),s("a",{attrs:{href:"http://www.ansible.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ansible"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://www.chef.io/chef/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chef"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://puppetlabs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppet"),s("OutboundLink")],1),t._v("等。")]),t._v(" "),s("h4",{attrs:{id:"_4-6-回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-回滚"}},[t._v("#")]),t._v(" 4.6 回滚")]),t._v(" "),s("p",[t._v("一旦当前版本发生问题，就要回滚到上一个版本的构建结果。最简单的做法就是修改一下符号链接，指向上一个版本的目录。")])])}),[],!1,null,null,null);a.default=r.exports}}]);