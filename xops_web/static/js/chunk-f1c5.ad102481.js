(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f1c5"],{"/veO":function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"e",function(){return o}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var s=a("t3Un");function r(e){return Object(s.a)({url:"api/scan/devices/"+e+"/",method:"delete"})}function o(e){return Object(s.a)({url:"api/scan/devices/"+e+"/",method:"get"})}function l(){return Object(s.a)({url:"api/scan/setting/",method:"get"})}function n(e){return Object(s.a)({url:"api/scan/setting/",method:"post",data:e})}function i(e){return Object(s.a)({url:"api/scan/excu/",method:"post",data:e})}},"7eVN":function(e,t,a){"use strict";a.r(t);var s=a("/veO"),r=a("7Qib"),o={name:"Base",data:function(){return{form_base:{id:"",add_time:"",hostname:"",port:"",username:"",password:"",key_filename:"",auth_type:"",status:"",sys_hostname:"",mac_address:"",sn_number:"",os_type:"",device_type:"",error_message:""},is_Readonly:!0,types:[{value:"password",label:"密码认证"},{value:"key_filename",label:"密钥认证"}]}},created:function(){var e=this;Object(s.e)(this.$route.query.id).then(function(t){e.form_base=t,e.form_base.add_time=Object(r.b)(e.form_base.add_time),e.form_base.modify_time=Object(r.b)(e.form_base.modify_time)})},methods:{closeTag:function(){this.$store.dispatch("delView",this.$store.state.tagsView.visitedViews.slice(-1)[0]),this.$router.go(-1)}}},l=(a("NHX6"),a("KHd+")),n=Object(l.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.form_base,size:"small","label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"主机名"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.sys_hostname,callback:function(t){e.$set(e.form_base,"sys_hostname",t)},expression:"form_base.sys_hostname"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"IP/域名",prop:"hostname"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.hostname,callback:function(t){e.$set(e.form_base,"hostname",t)},expression:"form_base.hostname"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"认证类型"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{disabled:e.is_Readonly,placeholder:"请选择认证类型"},model:{value:e.form_base.auth_type,callback:function(t){e.$set(e.form_base,"auth_type",t)},expression:"form_base.auth_type"}},e._l(e.types,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"SSH端口"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.port,callback:function(t){e.$set(e.form_base,"port",t)},expression:"form_base.port"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.username,callback:function(t){e.$set(e.form_base,"username",t)},expression:"form_base.username"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"password"===e.form_base.auth_type?"密码":"秘钥路径"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.password,callback:function(t){e.$set(e.form_base,"password",t)},expression:"form_base.password"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"SN编号"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.sn_number,callback:function(t){e.$set(e.form_base,"sn_number",t)},expression:"form_base.sn_number"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"系统类型"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.os_type,callback:function(t){e.$set(e.form_base,"os_type",t)},expression:"form_base.os_type"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"设备类型"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.device_type,callback:function(t){e.$set(e.form_base,"device_type",t)},expression:"form_base.device_type"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"MAC地址"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{readonly:e.is_Readonly},model:{value:e.form_base.mac_address,callback:function(t){e.$set(e.form_base,"mac_address",t)},expression:"form_base.mac_address"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"入库时间"}},[a("span",{staticStyle:{width:"300px"}},[e._v(e._s(e.form_base.add_time))])])],1)],1),e._v(" "),a("el-row",[e.form_base.error_message?a("el-form-item",{attrs:{label:"错误信息"}},[a("el-input",{staticStyle:{width:"720px"},attrs:{readonly:e.is_Readonly,type:"textarea"},model:{value:e.form_base.error_message,callback:function(t){e.$set(e.form_base,"error_message",t)},expression:"form_base.error_message"}})],1):e._e()],1),e._v(" "),a("el-form-item",{attrs:{size:"medium"}},[a("div",{staticStyle:{display:"inline-block",margin:"70px 0px",float:"left"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.closeTag}},[e._v("返回")])],1)])],1)},[],!1,null,"13a6a082",null);n.options.__file="form_base.vue";t.default=n.exports},NHX6:function(e,t,a){"use strict";var s=a("d9cr");a.n(s).a},d9cr:function(e,t,a){}}]);