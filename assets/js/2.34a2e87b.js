(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(t,e,n){},358:function(t,e,n){},359:function(t,e,n){},360:function(t,e,n){},361:function(t,e,n){},362:function(t,e,n){},363:function(t,e,n){},372:function(t,e,n){"use strict";n(357)},373:function(t,e,n){"use strict";n(358)},374:function(t,e,n){"use strict";n(359)},375:function(t,e,n){"use strict";n(360)},376:function(t,e,n){"use strict";n(361)},377:function(t,e,n){"use strict";n(362)},378:function(t,e,n){"use strict";n(363)},383:function(t,e,n){"use strict";n.r(e);n(10),n(20),n(25),n(82),n(366),n(368),n(369),n(36),n(370),n(371),n(203),n(117),n(204);var s=n(356),i={data:function(){return{icons:{mdiHome:s.d}}},computed:{homeUrl:function(){return this.$url("/")},homeButtonText:function(){return this.$config().homeButtonText}}},o=(n(372),n(55)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-title",{staticClass:"w-homebtn"},[n("v-btn",{attrs:{large:"",depressed:"",exact:"",to:t.homeUrl}},[n("v-icon",[t._v(t._s(t.icons.mdiHome))]),t._v(" "),t.homeButtonText?n("span",{staticClass:"d-none d-md-block"},[t._v(t._s(t.homeButtonText))]):t._e()],1)],1)}),[],!1,null,null,null).exports,l={computed:{homeUrl:function(){return this.$url("/")}}},c=(n(373),Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"w-logo",attrs:{to:this.homeUrl}},[e("v-img",{staticClass:"image",attrs:{src:"/imgs/android-chrome-512x512.png"}}),this._v(" "),e("h3",{staticClass:"title"},[this._v("DCFV")])],1)}),[],!1,null,null,null).exports),r=n(112),u={components:{Logo:c,HomeButton:a},data:function(){return{drawer:null,selectedLocaleIndex:0,icons:{mdiTranslate:s.e,mdiChevronDown:s.a},styles:{left:"initial",right:"initial"}}},computed:{localeList:function(){var t=this.$site.locales;return Object.values(t).map((function(t){var e={};return e.title=t.selectText,e.value=t.lang,e}))}},watch:{selectedLocaleIndex:function(t){this.changeLocaleIndex(t)}},methods:{setLocale:function(t){this.$vuetify.lang.current=t,localStorage.setItem("current-locale",t)},changeLocaleIndex:function(t){var e=this.localeList,n=this.$lang,s=e[t].value,i=window.location,o=i.protocol,a=i.host,l=i.href,c=new RegExp("^".concat(o,"//").concat(a)),r=l.replace(c,""),u=new RegExp("^/".concat(n,"/")),d=r.replace(u,"/".concat(s,"/"));d!==r&&(this.$router.push(d),this.setLocale(s))},initLocale:function(){var t=Object(r.c)();this.setLocale(t);var e=this.localeList.map((function(t){return t.value})).indexOf(t);this.selectedLocaleIndex=e},onNavIconClick:function(){this.$emit("navIconClick"),this.drawer=!this.drawer}},mounted:function(){this.initLocale()}},d=(n(374),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"l-wrapper p-header",style:t.styles,attrs:{app:"","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{staticClass:"d-block d-md-none",on:{click:t.onNavIconClick}}),t._v(" "),n("Logo",{staticClass:"d-none d-md-flex"}),t._v(" "),n("HomeButton",{staticClass:"p-header-homebutton"}),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{depressed:""}},"v-btn",i,!1),s),[n("v-icon",[t._v(t._s(t.icons.mdiTranslate))]),t._v(" "),n("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.icons.mdiChevronDown))])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item-group",{attrs:{mandatory:"",color:"primary"},model:{value:t.selectedLocaleIndex,callback:function(e){t.selectedLocaleIndex=e},expression:"selectedLocaleIndex"}},t._l(t.localeList,(function(e,s){return n("v-list-item",{key:s},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null).exports),v={components:{Logo:c},data:function(){return{selectedItem:null}},computed:{sideLinks:function(){var t=this;return(this.$config().navList||[]).map((function(e){var n={};return n.title=e.title,n.url=t.$url(e.url),n}))}}},h=(n(375),Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"p-sider sticky"},[n("div",{staticClass:"d-block d-md-none"},[n("div",{staticClass:"p-sider-head"},[n("Logo")],1),t._v(" "),n("v-divider")],1),t._v(" "),n("v-list",[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.sideLinks,(function(e,s){return n("v-list-item",{key:s,attrs:{to:e.url}},[n("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1)],1)}),[],!1,null,null,null).exports),m=(n(60),n(61),{data:function(){var t=[];return t.push({to:"/",icon:s.d}),{links:t}},computed:{siteTitle:function(){return Object(r.d)(this)},siteDesc:function(){return this.$config().description||""}}}),p=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",t._l(t.links,(function(e,s){return n("v-btn",{key:s,staticClass:"mx-3 white--text",attrs:{icon:"",exact:"",target:e.href?"_blank":"",href:e.href,to:t.$url(e.to)}},[n("v-icon",{attrs:{size:"24px"}},[t._v("\n          "+t._s(e.icon)+"\n        ")])],1)})),1),t._v(" "),t.siteDesc?n("v-card-text",{staticClass:"white--text pt-0"},[t._v(t._s(t.siteDesc))]):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t._v("\n      © 2020 — "+t._s((new Date).getFullYear())+" "),n("strong",[t._v(t._s(t.siteTitle))])])],1)],1)}),[],!1,null,null,null).exports,f={data:function(){return{hidden:!0,icons:{mdiChevronUp:s.b}}},methods:{onScroll:function(){this.hidden=window.scrollY<=0},onClick:function(){this.$vuetify.goTo(0,{duration:1e3,easing:"easeOutCubic"})}},mounted:function(){this.onScroll()}},_=(n(376),Object(o.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-fab-transition",[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:!this.hidden,expression:"!hidden"},{name:"scroll",rawName:"v-scroll",value:this.onScroll,expression:"onScroll"}],staticClass:"mx-2 w-gotop",attrs:{fab:""},on:{click:this.onClick}},[e("v-icon",{attrs:{large:""}},[this._v("\n      "+this._s(this.icons.mdiChevronUp)+"\n    ")])],1)],1)}),[],!1,null,null,null).exports),w={},x=(n(377),{Header:d,Sider:h,Loading:Object(o.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-loading",attrs:{title:"2"}},[e("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[e("path",{attrs:{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}})])])}),[],!1,null,null,null).exports,BackToTop:_,Footer:p});"undefined"!=typeof window&&(x.AsyncRoot=function(){return n.e(6).then(n.bind(null,388))});var g={components:x,data:function(){return{ready:!1,drawer:null,contentStyles:{"padding-left":0}}},computed:{contentCols:function(){var t=12;return this.$vuetify.breakpoint.width>=960&&(t=9),t}},methods:{onNavIconClick:function(){this.drawer=!this.drawer}},mounted:function(){this.ready=!0}},C=(n(378),Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"l-wrapper"},[n("div",{staticClass:"w-layout-async"},[n("no-ssr",[n("AsyncRoot")],1)],1),t._v(" "),n("v-navigation-drawer",{staticClass:"l-wrapper d-md-none",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("Sider")],1),t._v(" "),n("Header",{on:{navIconClick:t.onNavIconClick}}),t._v(" "),n("v-main",{staticClass:"l-wrapper p-main",style:t.contentStyles},[n("v-container",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.ready,expression:"!ready"}],staticClass:"w-layout-loading"},[n("Loading")],1),t._v(" "),n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}]},[n("v-col",{staticClass:"d-none d-md-block",attrs:{cols:"3"}},[n("Sider")],1),t._v(" "),n("v-col",{attrs:{cols:t.contentCols}},[n("Content")],1)],1)],1),t._v(" "),n("BackToTop")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null));e.default=C.exports}}]);