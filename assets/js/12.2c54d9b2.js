(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{278:function(t,s,a){},289:function(t,s,a){"use strict";a(278)},302:function(t,s,a){"use strict";a.r(s);var i=a(26),n={computed:{tags(){return Object(i.d)(this.$site).map(t=>{const s=this.$tag.list.find(s=>s.name===t.id);if(s)return{name:t.name,path:s.path,...t}}).filter(Boolean)}}},e=(a(289),a(3)),l=Object(e.a)(n,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content__default"},[s("h1",{staticClass:"content__title"},[t._v("标签")]),t._v(" "),s("ul",{staticClass:"tags-list"},t._l(t.tags,(function({path:a,name:i,coverImg:n,desc:e}){return s("li",{key:a},[s("router-link",{staticClass:"wrapper",attrs:{to:a}},[s("img",{attrs:{src:n,alt:i,loading:"lazy"}}),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"title"},[t._v(t._s(i))]),t._v(" "),s("div",{staticClass:"desc"},[t._v("\n            "+t._s(e.substr(0,42))+t._s(e.length>42?"...":"")+"\n          ")])])])],1)})),0)])}),[],!1,null,null,null);s.default=l.exports}}]);