(function(e){function t(t){for(var a,i,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)i=u[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("dac5"),n("6e26"),n("9604"),n("df67");var a=n("6e6d"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("abd1"),{name:"app",components:{}}),u=i,s=n("6691"),c=Object(s["a"])(u,r,o,!1,null,null,null),l=c.exports,d=n("2427"),p=n.n(d),f=n("3bc2"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",{staticClass:"index-JMUSj_0"},[n("div",{staticClass:"index-1DPx9_0"},[n("div",{staticClass:"index-2S5Ah_0",attrs:{"aria-label":"当前地址：广州市人民政府，轻点两下重新选择",role:"button"}},[n("svg",{staticClass:"index-okfdP_0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 31"}},[n("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"}})]),n("span",{staticClass:"index-2uW_v_0"},[e._v("广州市人民政府")]),n("svg",{staticClass:"index-2iXz3_0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"}},[n("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"}})])])])]),n("van-search",{staticClass:"search",attrs:{"input-align":"center",placeholder:"搜索饿了么商家、商品名称",background:"#0af"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("van-grid",{attrs:{"column-num":5}},[n("router-link",e._l(e.entriesComputed,function(e,t){return n("van-grid-item",{key:t,attrs:{to:"`/detail/${index}`",icon:e.icon,text:e.name}})}),1)],1),n("van-divider",{style:{padding:"0 33px"}},[e._v("推荐商家")]),n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:e._f("handleMenu")(e.menu)},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("van-dropdown-item",{attrs:{options:e._f("handleMenu")(e.menu)},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o"}},[e._v("标签")]),n("van-tabbar-item",{attrs:{icon:"search"}},[e._v("标签")]),n("van-tabbar-item",{attrs:{icon:"friends-o"}},[e._v("标签")])],1)],1)},m=[],h=(n("7364"),n("63ff"),n("e71e")),b=(n("f763"),{data:function(){return{value1:"",active:0,entries:[],value:0,menu:[]}},computed:{entriesComputed:function(){return this.entries.slice(0,10)}},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios("https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/gongge");case 2:return t=e.sent,this.entries=t.data[0].entries,e.next=6,this.$axios("https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/nav");case 6:n=e.sent,this.menu=n.data.outside.inside_sort_filter;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),filters:{handleMenu:function(e){var t=[];return e.forEach(function(e){e.text=e.name,t.push(e)}),t}}}),x=b,w=(n("cccb"),Object(s["a"])(x,v,m,!1,null,null,null)),_=w.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("详情页（感冒头疼暂未完成，会补上的）")])},y=[],k={props:["default","sidebar"]},j=k,O=Object(s["a"])(j,g,y,!1,null,null,null),C=O.exports,M=(n("f471"),n("a337")),P=(n("37e9"),n("168b")),$=(n("f029"),n("536d")),S=(n("1050"),n("8618")),F=(n("5324"),n("43aa")),z=(n("e712"),n("962f")),E=(n("d6e1"),n("754b")),J=(n("9d3d"),n("e37f")),T=function(){a["a"].use(J["a"]),a["a"].use(z["a"]).use(E["a"]),a["a"].use(F["a"]),a["a"].use($["a"]).use(S["a"]),a["a"].use(M["a"]).use(P["a"])};a["a"].use(f["a"]);var B=[{path:"/home",component:_},{path:"/detail",component:C}],R=new f["a"]({routes:B});a["a"].prototype.$axios=p.a,T(),a["a"].config.productionTip=!1,new a["a"]({router:R,render:function(e){return e(l)}}).$mount("#app")},abd1:function(e,t,n){},cccb:function(e,t,n){"use strict";var a=n("cdbf"),r=n.n(a);r.a},cdbf:function(e,t,n){}});
//# sourceMappingURL=app.e8d7cc9e.js.map