webpackJsonp([13],{"5frL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{lang:window.localStorage.getItem("lang")?window.localStorage.getItem("lang"):"zh"}},watch:{lang:function(e){this.$i18n.locale="zh"===e?"zh":"en"===e?"en":"zh",this.$store.commit("SET_LANG",e)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],attrs:{name:"",id:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.lang=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"zh"}},[e._v("中文")]),e._v(" "),n("option",{attrs:{value:"en"}},[e._v("English")])]),e._v(" "),n("div",[e._v(e._s(e.$t("message.hello")))])])},staticRenderFns:[]},r=n("VU/8")(a,l,!1,null,null,null);t.default=r.exports}});