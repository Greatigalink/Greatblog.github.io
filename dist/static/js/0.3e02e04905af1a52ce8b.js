webpackJsonp([0],{"85Bp":function(t,a,s){t.exports=s.p+"static/img/qq.f985219.jpg"},F09S:function(t,a){},URam:function(t,a,s){t.exports=s.p+"static/img/email.3af1998.jpg"},ebUW:function(t,a,s){t.exports=s.p+"static/img/wechat.11d218a.jpg"},m8Qx:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"aboutblog"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("section",{staticClass:"aboutblog-link"},[t._m(2),t._v(" "),e("aside",{staticClass:"aboutblog-call"},[e("el-avatar",{staticClass:"aboutblog-call-li"},[e("img",{attrs:{src:s("85Bp")}})]),t._v(" "),e("el-avatar",{staticClass:"aboutblog-call-li"},[e("img",{attrs:{src:s("ebUW")}})]),t._v(" "),e("el-avatar",{staticClass:"aboutblog-call-li"},[e("img",{attrs:{src:s("URam")}})])],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"aboutblog-me"},[a("header",{staticClass:"aboutblog-title"},[a("span",[a("i",{staticClass:"el-icon-s-custom"},[this._v(" ")]),this._v("关于博主")])]),this._v(" "),a("section",{staticClass:"aboutblog-li"},[a("aside",{staticClass:"aboutblog-li-p"},[a("span",[this._v("性别男, 家乡云南, 高中毕业考到了湖南, 现计算机专业大三在读")])]),this._v(" "),a("aside",{staticClass:"aboutblog-li-p"},[a("span",[this._v("\n          我学的不是太好, 大一大二混的有点多 ,直到后来看到同学做的前端项目,\n          发现挺有趣的, 所以自己也想尝试一下, 学了Html\n          Js,Css, 在大三这个特殊的寒假里, 又独自在家学习了Vue, 所以想着写一个博客,\n          一来练练手巩固所学知识, 二来作为一个长期记录学习生活的地方\n        ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"aboutblog-web"},[s("header",{staticClass:"aboutblog-title"},[s("span",[s("i",{staticClass:"el-icon-s-home"},[t._v(" ")]),t._v("关于本站")])]),t._v(" "),s("section",{staticClass:"aboutblog-li"},[s("aside",{staticClass:"aboutblog-li-p"},[s("span",[t._v("前端:")]),t._v(" "),s("span",{staticStyle:{color:"#55BCC9","font-weight":"bold"}},[t._v("Vue + Vuex + Vue Router, Element-Ui")]),t._v(" "),s("span",[t._v(",页面样式整体风格参考了一些优秀的博客")])]),t._v(" "),s("aside",{staticClass:"aboutblog-li-p"},[s("span",[t._v("后端:")]),t._v(" "),s("span",{staticStyle:{color:"#55BCC9","font-weight":"bold"}},[t._v("express + MySql")])]),t._v(" "),s("aside",{staticClass:"aboutblog-li-p"},[s("span",[t._v("数据交互:")]),t._v(" "),s("span",{staticStyle:{color:"#55BCC9","font-weight":"bold"}},[t._v("axios")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"aboutblog-title"},[a("span",[a("i",{staticClass:"el-icon-phone"},[this._v(" ")]),this._v("联系我")])])}]};var i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"LeaveSay"}},[t._m(0),t._v(" "),s("div",{staticClass:"LeaveSay-input"},[s("section",{staticClass:"ly-input-name"},[s("el-input",{attrs:{placeholder:"请输入名字",clearable:""},model:{value:t.inputname,callback:function(a){t.inputname=a},expression:"inputname"}})],1),t._v(" "),s("section",{staticClass:"ly-input-email"},[s("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:t.inputemail,callback:function(a){t.inputemail=a},expression:"inputemail"}})],1),t._v(" "),s("section",{staticClass:"ly-input-content"},[s("el-input",{attrs:{type:"textarea",rows:7,placeholder:"请输入内容"},model:{value:t.inputcon,callback:function(a){t.inputcon=a},expression:"inputcon"}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"LeaveSay-head"},[a("span",[this._v("留言板")])])}]};var n={name:"BlogAbout",components:{"about-blog":s("VU/8")({name:"Aboutblog"},e,!1,function(t){s("s30C")},null,null).exports,"leave-say":s("VU/8")({name:"LeaveSay",data:function(){return{inputname:"",inputemail:"",inputcon:""}}},i,!1,function(t){s("zbyT")},null,null).exports},data:function(){return{hello:!1,name:!1}},mounted:function(){this.hello=!0,this.name=!0}},l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"about-auto"}},[a("section",{staticClass:"about-head"},[a("section",{staticClass:"about-author"},[a("transition",{attrs:{name:"el-zoom-in-center"}},[a("aside",{directives:[{name:"show",rawName:"v-show",value:this.hello,expression:"hello"}]},[a("span",{staticStyle:{"font-size":"45px"}},[this._v("Hello, everyone!")])])]),this._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("aside",{directives:[{name:"show",rawName:"v-show",value:this.name,expression:"name"}],staticStyle:{"margin-top":"10px"}},[a("span",{staticStyle:{"font-size":"20px"}},[this._v("我是努力'向前")])])])],1)]),this._v(" "),a("section",{staticClass:"about-con"},[a("about-blog"),this._v(" "),a("leave-say")],1)])},staticRenderFns:[]};var o=s("VU/8")(n,l,!1,function(t){s("F09S")},null,null);a.default=o.exports},s30C:function(t,a){},zbyT:function(t,a){}});