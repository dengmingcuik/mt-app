(function(t){function e(e){for(var r,n,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return l.p+"static/js/"+({}[t]||t)+"."+{"chunk-0efc7e18":"888f81b6","chunk-1b2d16ed":"7c80d110","chunk-22507924":"32b7aa53","chunk-29f833c0":"9584701e","chunk-2a7caf30":"800c9cad","chunk-2d0ac9ae":"5025342b"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-0efc7e18":1,"chunk-1b2d16ed":1,"chunk-22507924":1,"chunk-29f833c0":1,"chunk-2a7caf30":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="static/css/"+({}[t]||t)+"."+{"chunk-0efc7e18":"ff8c12b2","chunk-1b2d16ed":"b6ae1426","chunk-22507924":"e1700b24","chunk-29f833c0":"99c7d868","chunk-2a7caf30":"c3cc456c","chunk-2d0ac9ae":"31d6cfe0"}[t]+".css",s=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===r||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09b0":function(t,e,a){},2329:function(t,e,a){},"365c":function(t,e,a){"use strict";var r=a("5530"),n=a("bc3a"),s=a.n(n);s.a.defaults.baseURL="http://open.duyiedu.com",s.a.interceptors.request.use((function(t){return t.params=Object(r["a"])(Object(r["a"])({},t.params),{},{appkey:"duxingzhe_1553994650506"}),t}));var o=s.a;e["a"]={getHotWordsList:function(){return o.get("/api/meituan/header/searchHotWords.json")},getSearchList:function(){return o.get("/api/meituan/header/search.json")},getMenuList:function(){return o.get("/api/meituan/index/nav.json")},getContainer:function(){return o.get("/api/meituan/index/resultsByKeywords.json")},getGoodsList:function(){return o.get("/api/meituan/list/goodsList.json")},getClassicList:function(){return o.get("/api/meituan/list/classify.json")},getAreaList:function(){return o.get("/api/meituan/list/areaList.json")},getHotCity:function(){return o.get("/api/meituan/city/hot.json")},getRecents:function(){return o.get("/api/meituan/city/recents.json")},getProvince:function(){return o.get("/api/meituan/city/province.json")},getPosition:function(){return o.get("/api/meituan/city/getPosition.json")},getDetail:function(){return o.get("/api/meituan/product/detail.json")},getLove:function(){return o.get("/api/meituan/list/recommend.json")},login:function(t){return o.get("/api/meituan/login",{params:t})},register:function(t){return o.get("/api/meituan/register",{params:t})}}},"4f7a":function(t,e,a){"use strict";a("2329")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={},i=o,l=a("2877"),c=Object(l["a"])(i,n,s,!1,null,null,null),u=c.exports,d=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-default"},[a("el-container",[a("el-header",{attrs:{height:""}},[a("my-header")],1),a("el-main",[a("router-view")],1),a("el-footer",{attrs:{height:""}},[a("my-footer")],1)],1)],1)},v=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-header"},[a("el-row",[a("top-bar")],1),a("el-row",[a("search-bar")],1)],1)},h=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"m-header-topbar m-header"},[a("el-col",{attrs:{span:10}},[a("geo")],1),a("el-col",{attrs:{span:14}},[a("m-nav")],1)],1)},m=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-geo"},[a("div",{staticClass:"position"},[a("i",{staticClass:"el-icon-location"}),t._v(" "+t._s(t.$store.state.position.name)+" "),a("router-link",{staticClass:"changeCity",attrs:{to:{name:"changeCity"}}},[t._v(" 切换城市 ")]),t._v(" [ "),t._l(t.nearList,(function(e,r){return a("a",{key:r,attrs:{href:"#"}},[t._v(t._s(e.name)+" ")])})),t._v(" ] ")],2),t.$store.state.userName?t._e():a("div",{staticClass:"m-user"},[a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[t._v(" 登录 ")]),a("router-link",{staticClass:"register",attrs:{to:{name:"register"}}},[t._v(" 立即注册 ")])],1)])},b=[],k=a("365c"),C={data:function(){return{nearList:[]}},watch:{"$store.state.position":function(){this.nearList=this.$store.state.position.nearCity}},created:function(){var t=this;k["a"].getPosition().then((function(e){t.nearList=e.data.data.nearCity,t.$store.commit("setPosition",e.data.data)}))}},w=C,y=Object(l["a"])(w,g,b,!1,null,null,null),j=y.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-nav"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"list"},[a("router-link",{attrs:{to:"/"}},[t._v("我的美团")]),a("dl",[a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("我的订单")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("我的收藏")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("抵用券")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("账户设置")])],1)])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("手机APP")])],1),a("li",{staticClass:"list bd"},[a("router-link",{attrs:{to:"/"}},[t._v("商家中心")]),a("dl",[a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("美团餐饮商家中心")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("登录商户中心")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("美团智能收银")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("我想合作")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("手机免费开店")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("餐饮代理商招募")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("商家申请开票")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("免费合作美团排队")])],1)])],1),a("li",{staticClass:"list"},[a("router-link",{attrs:{to:"/"}},[t._v("美团规则")]),a("dl",[a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("规则中心")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("规则目录")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("规则评议院")])],1)])],1),a("li",{staticClass:"list site"},[a("router-link",{attrs:{to:"/"}},[t._v("网站导航")]),a("div",{staticClass:"subContainer"},[a("dl",{staticClass:"hotel"},[a("dt",[t._v("酒店旅游")]),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("国际机票")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("火车票")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("民宿")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("经济型酒店")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("主题酒店")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("商务酒店")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("公寓")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("豪华酒店")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("客栈")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("青年旅社")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("度假酒店")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("别墅")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("农家院")])],1)]),a("dl",{staticClass:"food"},[a("dt",[t._v("吃美食")]),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("烤鱼")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("特色小吃")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("烧烤")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("火锅")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("代金券")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("自助餐")])],1)]),a("dl",{staticClass:"movie"},[a("dt",[t._v("看电影")]),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("热门电影")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("热门影院")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("热映电影口碑榜")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("最受欢迎电影")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("国内票房榜")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("北美票房榜")])],1),a("dd",[a("router-link",{attrs:{to:"/"}},[t._v("电影排行榜")])],1)]),t._m(0)])],1)])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",{staticClass:"app"},[a("dt",[t._v("手机应用")]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png",title:"外卖app",alt:"外卖app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png",title:"民宿app",alt:"民宿app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png",title:"点评app",alt:"点评app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png",title:"猫眼app",alt:"猫眼app"}})])])}],O={},E=O,P=Object(l["a"])(E,L,x,!1,null,null,null),$=P.exports,S={components:{Geo:j,MNav:$}},T=S,A=(a("c496"),Object(l["a"])(T,_,m,!1,null,null,null)),N=A.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-panel"},[a("el-row",{staticClass:"m-header-searchbar"},[a("el-col",{staticClass:"left",attrs:{span:3}},[a("img",{attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png",alt:"美团"}})]),a("el-col",{staticClass:"center",attrs:{span:15}},[a("div",{staticClass:"wrapper"},[a("el-input",{attrs:{placeholder:"请输入内容"},on:{focus:t.handleFocus,blur:t.handleBlur,input:t.handleInput},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}}),t.isHot?a("dl",{staticClass:"hotPlace"},[a("dt",[t._v("热门搜索")]),t._l(t.hotPlaceList,(function(e,r){return a("dd",{key:r},[a("router-link",{attrs:{to:{name:"goods",params:{name:e}}}},[t._v(t._s(e))])],1)}))],2):t._e(),t.isSearch?a("dl",{staticClass:"searchList"},t._l(t.searchList,(function(e,r){return a("dd",{key:r},[a("router-link",{attrs:{to:{name:"goods",params:{name:e}}}},[t._v(t._s(e))])],1)})),0):t._e()],1),a("p",{staticClass:"suggest"},t._l(t.suggestList,(function(e,r){return a("router-link",{key:r,attrs:{to:{name:"goods",params:{name:e}}}},[t._v(t._s(e))])})),1)])],1)],1)},B=[],W=(a("4de4"),a("caad"),a("2532"),{data:function(){return{searchWord:"",hotPlaceList:[],searchList:[],suggestList:[],isFocus:!1}},created:function(){var t=this;k["a"].getHotWordsList().then((function(e){t.hotPlaceList=e.data.data,t.suggestList=e.data.data}))},computed:{isHot:function(){return this.isFocus&&!this.searchWord},isSearch:function(){return this.isFocus&&this.searchWord}},methods:{handleFocus:function(){this.isFocus=!0},handleBlur:function(){var t=this;setTimeout((function(){t.isFocus=!1}),500)},handleInput:function(){var t=this,e=this.searchWord;k["a"].getSearchList().then((function(a){t.searchList=a.data.data.list.filter((function(t){return t.includes(e)}))}))}}}),D=W,F=(a("cb9e"),Object(l["a"])(D,M,B,!1,null,null,null)),H=F.exports,I={components:{TopBar:N,SearchBar:H}},q=I,U=(a("f7b9"),Object(l["a"])(q,p,h,!1,null,null,null)),G=U.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"com-footer"},[a("div",{staticClass:"footer-content"},[a("div",{staticClass:"footer-link clearfix"},[a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("用户帮助")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("申请退款")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("常见问题")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("用户协议")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("隐私政策")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("反诈骗公告")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("消费者权益保障")])])]),a("dl",[a("dt",[t._v("美团服务")]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团外卖")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团酒店")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("猫眼电影")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团配送")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团云")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("大众点评")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团民宿")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("无人配送")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("商家合作")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团餐饮商户中心")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美食商家入驻(非外卖)")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团外卖开店申请")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团收银官网")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("外卖配送加盟申请")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("美团餐饮学院")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("酒店商家入驻")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("境内度假商家入驻")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("综合商家入驻")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团民宿房东商家入驻")])]),a("dd",[a("a",{attrs:{href:"#"}},[t._v("商家开票申请")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团智能收银机")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团餐饮开放平台")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团收单")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("免费使用美团排队")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("快驴进货商家合作")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团闪购商家入驻")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("代理商加盟")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团外卖代理商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("到店餐饮代理商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("非餐饮代理商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团联盟")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团收银招募线上分销商")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团5S服务商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团收单渠道代理商招募")])])]),a("dl",[a("dt",[t._v("美团规则")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("规则中心")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("规则目录")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("规则评议院")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("关注美团")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("美团新浪微博")])])]),a("dl",[a("dt",[t._v("公司信息")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("关于我们")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("投资者关系")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("加入我们")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("商户诚信公约及管理办法")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("保险经纪资质")])])]),a("dl",[a("dt",[t._v("廉正举报")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#",target:"_self"}},[t._v("廉正举报平台")])])]),a("dl",[a("dt",[t._v("知识产权")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("知识产权维权平台")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("消费者服务热线")]),a("dd",[t._v("外卖消费者："),a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("10109777")])]),a("dd",[t._v("猫眼消费者："),a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("10105335")])]),a("dd",[t._v("其他消费者："),a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("10107888")])])]),a("dl",[a("dt",[t._v("商家服务热线")]),a("dd",[t._v("外卖&餐饮商家："),a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("10105557")])]),a("dd",[t._v(" 休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家："),a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("10100107")])])]),a("dl",[a("dt",[t._v("投诉举报专区")]),a("dd",[t._v(" 违法和不良信息举报电话："),a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("4006018900")])]),a("dd",[t._v(" 举报邮箱："),a("a",{attrs:{rel:"nofollow",href:"#",target:"_self"}},[t._v("tousujubao@meituan.com")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("网上有害信息举报")])])]),a("dl",[a("dt",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("商家自助入驻美团入口")])])]),a("dl",[a("dt",[a("a",{attrs:{rel:"nofollow",href:"#"}},[t._v("供应商注册入口")])])])])]),a("div",{staticClass:"footer-copyright clearfix"},[a("div",{staticClass:"footer-copyright-left"},[a("p",[t._v(" ©美团网团购 meituan.com"),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"#"}},[t._v("京ICP证070791号")]),a("a",{attrs:{href:"#"}},[t._v("京ICP备10211739号")])]),a("p",[a("a",{attrs:{href:"#"}},[t._v("广播电视节目制作经营许可证（京）字第03889号")])]),a("p",[a("a",{attrs:{href:"#"}},[t._v("食品经营许可证")]),a("a",{attrs:{href:"#"}},[t._v("互联网药品信息服务资格证")])]),a("p",[a("a",{attrs:{href:"#"}},[t._v("医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号")])])]),a("div",{staticClass:"footer-copyright-right"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"beianicon",attrs:{src:"https://p0.meituan.net/travelcube/d0289dc0a46fc5b15b3363ffa78cf6c719256.png"}}),t._v("京公网安备 11000002002052号")]),a("div",{staticClass:"footer-copyright-cert"},[a("a",{staticClass:"bus-license",attrs:{href:"#",title:"营业执照"}},[a("img",{attrs:{src:"https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"}}),a("p",[t._v("北京三快科技有限公司")])]),a("a",{staticClass:"sp-ft sp-ft--record",attrs:{href:"#",title:"备案信息"}},[t._v("备案信息")])])])])])])}],R={},z=R,Q=(a("8504"),Object(l["a"])(z,J,K,!1,null,null,null)),V=Q.exports,X={components:{MyHeader:G,MyFooter:V}},Y=X,Z=(a("4f7a"),Object(l["a"])(Y,f,v,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-index"},[a("el-row",[a("el-col",{attrs:{span:5}},[a("my-menu")],1),a("el-col",{attrs:{span:19}},[a("my-life")],1)],1),a("el-row",[a("container",{attrs:{nav:t.istyle}})],1),a("el-row",[a("container",{attrs:{nav:t.recomment}})],1)],1)},at=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-menu"},[a("dl",{staticClass:"nav"},[a("dt",[t._v("全部分类")]),t._l(t.menuList,(function(e,r){return a("dd",{key:r,on:{mouseenter:function(a){return t.navEnter(e)},mouseleave:t.navLeave}},[a("i",{class:e.type}),t._v(" "+t._s(e.name)+" "),a("span",{staticClass:"arrow"})])}))],2),t.curDetail?a("div",{staticClass:"detail",on:{mouseenter:t.detailEnter,mouseleave:t.detailLeave}},[t._l(t.curDetail.items,(function(e,r){return[a("h4",{key:r},[t._v(t._s(e.title))]),t._l(e.items,(function(e,r){return a("span",{key:e+r},[t._v(t._s(e))])}))]}))],2):t._e()])},nt=[],st={data:function(){return{curDetail:null,menuList:[]}},created:function(){var t=this;k["a"].getMenuList().then((function(e){t.menuList=e.data.data}))},methods:{navEnter:function(t){clearTimeout(this.timer),this.curDetail=t},navLeave:function(){var t=this;t.timer=setTimeout((function(){t.curDetail=null}),200)},detailEnter:function(){clearTimeout(this.timer)},detailLeave:function(){this.curDetail=null}}},ot=st,it=Object(l["a"])(ot,rt,nt,!1,null,null,null),lt=it.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-life"},[a("el-row",[a("ul",{staticClass:"nav"},[a("li",[a("router-link",{staticClass:"takeout",attrs:{to:"/"}},[t._v("美团外卖")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("猫眼电影")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("美团酒店")])],1),a("li",[a("router-link",{staticClass:"apartment",attrs:{to:"/"}},[t._v("民宿/公寓")])],1),a("li",[a("router-link",{staticClass:"business",attrs:{to:"/"}},[t._v("商家入驻")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("美团公益")])],1)])]),a("el-row",[a("el-col",{attrs:{span:14}},[a("slider")],1),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"m-life-pic"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"m-life-login"},[a("h4",[a("img",{attrs:{src:"https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg",alt:""}})]),a("p",{staticClass:"m-life-login-name"},[t._v(" Hi！"+t._s(t.$store.state.userName?t.$store.state.userName:"你好")+" ")]),t.$store.state.userName?a("div",[a("ul",{staticClass:"row"},[a("li",[a("i",{staticClass:"el-icon-s-order"}),a("div",[t._v("我的订单")])]),a("li",[a("i",{staticClass:"el-icon-star-on"}),a("div",[t._v("我的收藏")])]),a("li",[a("i",{staticClass:"el-icon-s-ticket"}),a("div",[t._v("抵用券")])])]),a("ul",{staticClass:"row"},[a("li",[a("i",{staticClass:"el-icon-s-finance"}),a("div",[t._v("余额")])]),a("li",[a("i",{staticClass:"el-icon-more"}),a("div",[t._v("更多")])])])]):[a("p",[a("router-link",{attrs:{to:{name:"register"}}},[a("el-button",{attrs:{round:""}},[t._v("注册")])],1)],1),a("p",[a("router-link",{attrs:{to:{name:"login"}}},[a("el-button",{attrs:{round:""}},[t._v("立即登录")])],1)],1)]],2)])],1),a("el-row",[a("el-col",{attrs:{span:7}},[a("div",{staticClass:"m-life-hotel"})]),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"m-life-music"})]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"m-life-coop"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"m-life-downapp"},[a("img",{attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png",alt:""}}),a("p",[t._v("美团APP手机版")]),a("p",{staticClass:"last-p"},[a("span",{staticClass:"red"},[t._v("1元起")]),t._v("吃喝玩乐")])])])],1)],1)},ut=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide"},[a("el-carousel",{attrs:{height:"240px"}},t._l(t.imgList,(function(t,e){return a("el-carousel-item",{key:e},[a("img",{attrs:{src:t.src,alt:""}})])})),1)],1)},ft=[],vt={data:function(){return{imgList:[{href:"#",src:"http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"},{href:"#",src:"http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"},{href:"#",src:"http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"},{href:"#",src:"http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"},{href:"#",src:"https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"}]}}},pt=vt,ht=Object(l["a"])(pt,dt,ft,!1,null,null,null),_t=ht.exports,mt={components:{Slider:_t}},gt=mt,bt=(a("a7ed"),Object(l["a"])(gt,ct,ut,!1,null,null,null)),kt=bt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-istyle"},[a("dl",{class:t.nav.class,on:{mouseover:t.handleOver}},[a("dt",[t._v(t._s(t.nav.title))]),t._l(t.nav.list,(function(e,r){return a("dd",{key:r,class:{active:t.kind===e.tab},attrs:{"data-type":e.tab}},[t._v(" "+t._s(e.taxt)+" ")])}))],2),a("ul",{staticClass:"ibody"},t._l(t.containerObj[t.kind],(function(e,r){return a("li",{key:r},[a("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"never"}},[a("img",{staticClass:"image",attrs:{src:e.image}}),a("div",{staticClass:"cbody"},[a("div",{staticClass:"title",attrs:{title:e.title}},[t._v(t._s(e.title))]),a("div",{staticClass:"sub-title",attrs:{title:e.subTitle}},[t._v(t._s(e.subTitle))]),a("div",{staticClass:"price-info"},[a("span",{staticClass:"current-price-wrapper"},[a("span",{staticClass:"price-symbol numfont"},[t._v("¥")]),a("span",{staticClass:"current-price numfont"},[t._v(t._s(e.price))])]),a("span",{staticClass:"sold bottom-right-info"},[t._v(t._s(e.address))])])])])],1)})),0)])},wt=[],yt={props:["nav"],data:function(){return{kind:"all",containerObj:{}}},created:function(){var t=this;k["a"].getContainer().then((function(e){t.containerObj=e.data.data}))},methods:{handleOver:function(t){var e=t.target,a=e.tagName.toLowerCase();if("dd"!==a)return!1;this.kind=e.getAttribute("data-type")}}},jt=yt,Lt=(a("fc41"),Object(l["a"])(jt,Ct,wt,!1,null,null,null)),xt=Lt.exports,Ot={data:function(){return{istyle:{class:"istyle",title:"有格调",list:[{tab:"all",taxt:"全部"},{tab:"food",taxt:"约会聚餐"},{tab:"spa",taxt:"丽人SPA"},{tab:"movie",taxt:"电影演出"},{tab:"travel",taxt:"品质出游"}]},recomment:{class:"youhui",title:"很优惠",list:[{tab:"all",taxt:"全部"},{tab:"food",taxt:"美食"},{tab:"spa",taxt:"休闲"}]}}},components:{MyMenu:lt,MyLife:kt,Container:xt}},Et=Ot,Pt=(a("6670"),Object(l["a"])(Et,et,at,!1,null,null,null)),$t=Pt.exports;r["default"].use(d["a"]);var St=new d["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"defaultPage",redirect:"/index",component:tt,children:[{path:"/index",name:"index",component:$t},{path:"/changeCity",name:"changeCity",component:function(){return a.e("chunk-22507924").then(a.bind(null,"7749"))}},{path:"/s/:name",name:"goods",component:function(){return a.e("chunk-0efc7e18").then(a.bind(null,"e615"))}},{path:"/detail",name:"detail",component:function(){return a.e("chunk-2a7caf30").then(a.bind(null,"7230"))}}]},{path:"/blank",name:"BlankPage",component:function(){return a.e("chunk-2d0ac9ae").then(a.bind(null,"19f6"))},children:[{path:"/login",name:"login",component:function(){return a.e("chunk-1b2d16ed").then(a.bind(null,"914f"))}},{path:"/register",name:"register",component:function(){return a.e("chunk-29f833c0").then(a.bind(null,"22d6"))}}]}]}),Tt=a("2f62");r["default"].use(Tt["a"]);var At=new Tt["a"].Store({strict:!0,state:{position:{},userName:"",cityAllList:[]},mutations:{setPosition:function(t,e){t.position=e},setUserName:function(t,e){t.userName=e},setCityAllList:function(t,e){t.cityAllList=e}}}),Nt=a("5c96"),Mt=a.n(Nt);a("0fae"),a("5aea");r["default"].use(Mt.a),r["default"].directive("document-click",{bind:function(t,e){document.addEventListener("click",e.value,!1)}}),r["default"].config.productionTip=!1,new r["default"]({router:St,store:At,render:function(t){return t(u)}}).$mount("#app")},"5aea":function(t,e,a){},6670:function(t,e,a){"use strict";a("93a8")},"7b2e":function(t,e,a){},"7ef5":function(t,e,a){},8504:function(t,e,a){"use strict";a("7ef5")},"93a8":function(t,e,a){},a0cd:function(t,e,a){},a7ed:function(t,e,a){"use strict";a("7b2e")},b1b8:function(t,e,a){},c496:function(t,e,a){"use strict";a("a0cd")},cb9e:function(t,e,a){"use strict";a("f178")},f178:function(t,e,a){},f7b9:function(t,e,a){"use strict";a("b1b8")},fc41:function(t,e,a){"use strict";a("09b0")}});
//# sourceMappingURL=app.434e76f5.js.map