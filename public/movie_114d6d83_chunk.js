webpackJsonp([4],{19:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),i=a(o),s=n(57),r=a(s),c=n(55),l=a(c),u=n(22),d=(a(u),n(58)),f=a(d),p=function(t){return new Promise(function(e,n){var a=new r.default(l.default.CACHEMODE.SESSION),o=a.GetData(t);o?e(o):i.default.locationData().then(function(o){var i={pageindex:1};f.default.Getmoviedata(t,i).then(function(n){a.SetData(t,n),e(n)},function(t){n(t)}).catch(function(t){n(t)})},function(t){n(t)})})};e.default={in_theatersData:function(){return p("in_theaters")},coming_soonData:function(){return p("coming_soon")},top250Data:function(){return p("top250")}}},20:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),i=a(o),s=n(55),r=a(s),c=n(57),l=a(c);e.default={locationData:function(){var t=new l.default(r.default.CACHEMODE.SESSION),e=t.GetData("location");return new Promise(function(n,a){null==e?i.default.getLocation().then(function(e){t.SetData("location",e),n(e)},function(t){a(t)}):n(e)})}}},21:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),s=n(22),r=a(s),c=n(23),l=a(c),u=function(){function t(){o(this,t)}return i(t,null,[{key:"getLocation",value:function(){return new Promise(function(t,e){l.default.Jsonp(r.default.apiurl.bmapurl.getLocationUrl,{}).then(function(e){var n={province:e.content.address_detail.province,city:e.content.address_detail.city.substring(0,e.content.address_detail.city.length-1),city_code:e.content.address_detail.city_code,address:e.content.address,long:e.content.point.x,lat:e.content.point.y};t(n)}).catch(function(t){e(t)})})}}]),t}();e.default=u},55:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i=n(56),s=a(i);e.default=o({},s)},56:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CACHEMODE={SESSION:"session",LOCAL:"LOCAL"}},57:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),s=n(55),r=a(s),c=function(){function t(e){o(this,t),this.mode=e}return i(t,[{key:"GetData",value:function(t){if(r.default.CACHEMODE.SESSION===this.mode){var e=sessionStorage.getItem(t);return e?JSON.parse(e):null}if(r.default.CACHEMODE.LOCAL===this.mode){var n=localStorage.getItem(t);return n?JSON.parse(n):null}return null}},{key:"SetData",value:function(t,e){r.default.CACHEMODE.SESSION===this.mode?sessionStorage.setItem(t,JSON.stringify(e)):r.default.CACHEMODE.LOCAL===this.mode&&localStorage.setItem(t,JSON.stringify(e))}},{key:"DeleteData",value:function(t){r.default.CACHEMODE.SESSION===this.mode?sessionStorage.removeItem(t):r.default.CACHEMODE.LOCAL===this.mode&&localStorage.removeItem(t)}}]),t}();e.default=c},58:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),i=a(o),s=n(23),r=a(s),c=n(20),l=a(c);e.default={Getmoviedata:function(t,e){var n=i.default.apiurl.doubanurl.movie,a=n+"/"+t;return new Promise(function(t,n){l.default.locationData().then(function(o){var s={start:(e.pageindx-1)*i.default.page.pagesize,count:i.default.page.pagesize,city:o.city,q:e.q||""};r.default.Jsonp(a,s).then(function(e){t(e)},function(t){n(t)}).catch(function(t){n(t)})},function(t){n(t)})})},Getmoviedetail:function(t){var e=i.default.apiurl.doubanurl.movie,n=e+"/subject/"+t;return new Promise(function(t,e){var a={};r.default.Jsonp(n,a).then(function(e){t(e)},function(t){e(t)}).catch(function(t){e(t)})})}}},69:function(t,e,n){n(70);var a=n(17)(n(72),n(73),"data-v-33c62ee5",null);t.exports=a.exports},70:function(t,e,n){var a=n(71);"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);n(15)("01758d44",a,!0)},71:function(t,e,n){e=t.exports=n(8)(),e.push([t.id,".movieitem[data-v-33c62ee5]{padding:10px;margin-left:-10px;display:flex;flex-direction:row}.iteminfo[data-v-33c62ee5]{margin-left:9px;display:flex;flex-direction:column}.title[data-v-33c62ee5]{font-size:18px}.cls[data-v-33c62ee5]{margin-top:9px;color:#696969}image[lazy=loading][data-v-33c62ee5]{width:40px;height:300px;margin:auto}",""])},72:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=a(o),s=n(58),r=a(s),c=n(22),l=a(c),u=n(2);e.default={data:function(){return{pageindex:2,pagecount:1,movielist:[],allLoaded:!1,Loaded:!1,total:0,info:""}},props:["movietype","search","initpage"],methods:{initdata:function(){u.Indicator.open({text:"加载中...",spinnerType:"fading-circle"});var t=this;switch(t.movietype){case"in_theaters":i.default.in_theatersData().then(function(e){u.Indicator.close(),t.pagecount=Math.ceil(parseInt(e.total)/l.default.page.pagesize),t.movielist=e.subjects});break;case"coming_soon":i.default.coming_soonData().then(function(e){u.Indicator.close(),t.pagecount=Math.ceil(parseInt(e.total)/l.default.page.pagesize),t.movielist=e.subjects});break;case"top250":i.default.top250Data().then(function(e){u.Indicator.close(),t.pagecount=Math.ceil(parseInt(e.total)/l.default.page.pagesize),t.movielist=e.subjects});break;case"search":setTimeout(function(){u.Indicator.close()},1);break;default:u.Indicator.close()}},loadBottom:function(){var t=this.judgeToend();t?(this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded(),(0,u.Toast)("到底啦！")):this.getpageData()},getpageData:function(){var t=this,e={pageindx:t.pageindex,q:t.search||""};u.Indicator.open({text:"加载中...",spinnerType:"fading-circle"}),r.default.Getmoviedata(t.movietype,e).then(function(e){if(u.Indicator.close(),t.Loaded=!0,t.$refs.loadmore.onBottomLoaded(),t.total=e.total,t.loadinfo(),t.pagecount=Math.ceil(parseInt(e.total)/l.default.page.pagesize),e.subjects.length>0){var n=t.$root.$data.lodash.concat(t.movielist,e.subjects);t.movielist=n,t.pageindex++}else(0,u.Toast)("数据加载失败！")},function(e){u.Indicator.close(),t.Loaded=!0,t.$refs.loadmore.onBottomLoaded(),(0,u.Toast)("数据加载失败！")}).catch(function(e){u.Indicator.close(),t.Loaded=!0,t.$refs.loadmore.onBottomLoaded(),(0,u.Toast)("数据加载失败！")})},judgeToend:function(){return this.pageindex>this.pagecount},loadinfo:function(){this.search&&this.search.length>0&&this.total>0&&(this.info="共找到"+this.total+"项“"+this.search+"”相关的内容"),this.search&&this.search.length>0&&this.total<=0&&(this.info="暂无“"+this.search+"”相关的内容")}},mounted:function(){this.initdata()},watch:{search:function(){this.movielist=[],this.pageindex=1,this.info="",this.getpageData()}}}},73:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-cell",{directives:[{name:"show",rawName:"v-show",value:t.info.length>0,expression:"info.length>0"}],attrs:{title:t.info}}),t._v(" "),n("mt-loadmore",{ref:"loadmore",attrs:{bottomPullText:"上拉刷新",bottomDropText:"释放更新",bottomLoadingText:"信息加载中,请耐心等待...","bottom-method":t.loadBottom,"bottom-loaded":t.Loaded,"bottom-all-loaded":t.allLoaded}},t._l(t.movielist,function(e){return n("mt-cell-swipe",{key:e.id,attrs:{"is-link":"",to:"/movie/detail/"+e.id,right:[{content:"收藏",style:{background:"#2E8B57",color:"#fff",padding:"39px 10px"},handler:function(){}}]}},[n("div",{staticClass:"movieitem",attrs:{slot:"icon"},slot:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.small,expression:"movie.images.small"}],attrs:{alt:e.title}}),t._v(" "),n("div",{staticClass:"iteminfo"},[n("strong",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"cls"},[t._v("类型："+t._s(e.genres.join("、")))]),t._v(" "),n("div",{staticClass:"cls"},[t._v("\n                        导演："),t._l(e.directors,function(a,o){return n("span",{key:a.id},[t._v(t._s(a.name)),o!=e.directors.length-1?n("span",[t._v("、")]):t._e()])})],2),t._v(" "),n("span",{staticClass:"cls"},[t._v("上映时间："+t._s(e.year)+"年")]),t._v(" "),n("span",{staticClass:"cls"},[t._v("评分："),e.rating.average?n("mt-badge",{attrs:{type:"error"}},[t._v(t._s(e.rating.average)+"分")]):n("span",{staticStyle:{color:"#BEBEBE"}},[t._v("暂无评分")])],1)])])])}))],1)},staticRenderFns:[]}},75:function(t,e,n){n(76);var a=n(17)(n(78),n(79),"data-v-7b9b2e2a",null);t.exports=a.exports},76:function(t,e,n){var a=n(77);"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);n(15)("22ec79fc",a,!0)},77:function(t,e,n){e=t.exports=n(8)(),e.push([t.id,".mint-tab-container-item[data-v-7b9b2e2a]{margin-bottom:60px}",""])},78:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(69),i=a(o);e.default={data:function(){return{selected:"1",isfixed:!1}},methods:{fixedTop:function(){window.onscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>=100?this.isfixed=!0:this.isfixed=!1}.bind(this)},defaultTab:function(){switch(this.$route.params.type){case"in_theaters":this.selected="1";break;case"coming_soon":this.selected="2";break;case"top250":this.selected="3";break;default:this.selected="1"}}},mounted:function(){this.$store.dispatch("showbackbtn"),this.defaultTab()},components:{intheatersMovieList:i.default,comingsoonMovieList:i.default,top250MovieList:i.default}}},79:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-navbar",{attrs:{fixed:t.isfixed},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"1"}},[t._v("正在热映")]),t._v(" "),n("mt-tab-item",{attrs:{id:"2"}},[t._v("即将上映")]),t._v(" "),n("mt-tab-item",{attrs:{id:"3"}},[t._v("口碑榜单")])],1),t._v(" "),n("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},["1"===t.selected?n("mt-tab-container-item",{attrs:{id:"1"}},[n("intheatersMovieList",{attrs:{movietype:"in_theaters"}})],1):t._e(),t._v(" "),"2"===t.selected?n("mt-tab-container-item",{attrs:{id:"2"}},[n("comingsoonMovieList",{attrs:{movietype:"coming_soon"}})],1):t._e(),t._v(" "),"3"===t.selected?n("mt-tab-container-item",{attrs:{id:"3"}},[n("top250MovieList",{attrs:{movietype:"top250"}})],1):t._e()],1)],1)},staticRenderFns:[]}}});