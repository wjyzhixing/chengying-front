"use strict";(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[6350],{32882:(e,n,t)=>{t.r(n),t.d(n,{addHaRoleToHosts:()=>oe,clearGroupList:()=>J,disableInstance:()=>ee,getALLProducts:()=>ie,getHealthCheck:()=>M,getHostConfig:()=>$,getHostsList:()=>Y,getServiceConfigList:()=>ue,getServiceGroup:()=>P,getServiceList:()=>W,modifyMultiAllHosts:()=>fe,modifyMultiSingleField:()=>me,modifyProductConfigAll:()=>_e,operateExtension:()=>U,refreshProductAndService:()=>ve,resetMultiServiceConfig:()=>pe,resetServiceConfig:()=>de,resetServices:()=>he,setConfigFile:()=>ae,setCurrentProduct:()=>ce,setCurrentService:()=>se,setRedService:()=>re,setResartServiceList:()=>q,setServiceConfigModify:()=>le,setServiceGroupStart:()=>D,setServiceGroupStop:()=>F,setServiceRollRestartState:()=>ge,startInstance:()=>ne,startService:()=>K,stopInstance:()=>te,stopService:()=>Q});var r=t(44845),o=t(78914),i=t.n(o),c=t(77766),a=t.n(c),u=t(2991),s=t.n(u),l=t(86902),d=t.n(l),p=t(3649),_=t.n(p),f=t(66419),m=t.n(f),v=t(65420),g=t.n(v),h=t(19996),y=t.n(h),S=t(41511),b=t.n(S),E=t(14310),C=t.n(E),R=t(20116),T=t.n(R),Z=t(34074),I=t.n(Z),j=t(39649),k=t.n(j),w=t(20368),A=t.n(w),L=t(63978),B=t.n(L),H=t(45360),G=t(19528),O=t(56466);function x(e,n){var t=d()(e);if(C()){var r=C()(e);n&&(r=T()(r).call(r,(function(n){return I()(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t,o,c=null!=arguments[n]?arguments[n]:{};n%2?i()(t=x(Object(c),!0)).call(t,(function(n){(0,r.Z)(e,n,c[n])})):k()?A()(e,k()(c)):i()(o=x(Object(c))).call(o,(function(n){B()(e,n,I()(c,n))}))}return e}function z(e,n){var t=void 0!==g()&&y()(e)||e["@@iterator"];if(!t){if(b()(e)||(t=function(e,n){var t;if(!e)return;if("string"==typeof e)return N(e,n);var r=_()(t=Object.prototype.toString.call(e)).call(t,8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return m()(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw i}}}}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var P=function(e,n,t,r){return function(o){G.BZ.getServiceGroup(e,r).then((function(e){0===(e=e.data).code?function(){var r=0,c="",u=[],l="sub0_0";if(t&&""!==t)for(var p in e.data.groups){var _;i()(_=e.data.groups[p]).call(_,(function(e,n){var o;e.service_name===t&&(c=e,l=a()(o="sub".concat(r,"_")).call(o,n));u.push("f".concat(r))})),r++}else{var f,m=sessionStorage.getItem("service_object");s()(f=d()(e.data.groups)).call(f,(function(n,t){if(0!==t||m||(c=e.data.groups[n][0]),m){var r,o="string"==typeof m?JSON.parse(m):{group:"",objectValue:""};if(n===o.group)s()(r=e.data.groups[n]).call(r,(function(e,n){var r;e.service_name===o.objectValue&&(c=e,l=a()(r="sub".concat(t,"_")).call(r,n))}));sessionStorage.removeItem("service_object")}u.push("f".concat(t))}))}if(!c&&1===u.length&&"f0"===u[0]&&"sub0_0"===l){var v=d()(e.data.groups)[0];c=v&&e.data.groups[v]&&e.data.groups[v][0]||""}n(c,u,l),o({type:O.S9.GET_SERVICE_GROUP,payload:e.data.groups})}():H.Z.error(e.msg)}))}},D=function(e,n){return function(t){G.BZ.setServiceGroupStart(e).then((function(e){X(e,"",n,(function(){t({type:O.S9.UPDATE_SERVICE_LIST,payload:e.data})}))}))}},M=function(e){return function(n){G.BZ.getHealthCheck(e).then((function(e){var t=e.data;0===t.code?n({type:O.S9.GET_HEALTH_LIST,payload:t.data}):H.Z.error(t.msg)}))}},F=function(e,n){return function(t){G.BZ.setServiceGroupStop(e).then((function(e){X(e,"",n,(function(){t({type:O.S9.UPDATE_SERVICE_LIST,payload:e.data})}))}))}},U=function(e,n){return function(n){G.BZ.operateExtension(e)}},q=function(e){return function(n){n({type:O.S9.GET_RESART_SERVICE,payload:e})}},J=function(){return{type:O.S9.CLEAR_SERVICE_LIST}},W=function(e,n){return function(t){G.BZ.getServiceList(e).then((function(e){0===(e=e.data).code?(t({type:O.S9.GET_SERVICES,payload:e.data.services}),n(e.data.services[0])):H.Z.error(e.msg)}))}},Y=function(e,n){var t=e.service_name;return function(r){G.BZ.getServiceHostsList(e).then((function(e){0===(e=e.data).code?(r({type:O.S9.GET_HOSTS,payload:{use_cloud:e.data.use_cloud,hosts:e.data.list,service:t}}),n&&n(e.data.use_cloud,e.data.list)):H.Z.error(e.msg)}))}},$=function(e,n){return function(t){G.BZ.getServiceHostConfig(e).then((function(e){0===(e=e.data).code?(t({type:O.S9.GET_HOST_CONFIG,payload:e.data.result}),n()):H.Z.error(e.msg)}))}},K=function(e,n){return function(){G.BZ.startService(e).then((function(e){X(e,"服务启动成功！",n)}))}},Q=function(e,n){return function(){G.BZ.stopService(e).then((function(e){X(e,"服务关闭成功！",n)}))}};function X(e,n,t,r){0===(e=e.data).code?(r&&r(),n&&H.Z.success(n)):H.Z.error(e.msg),t&&t()}var ee=function(e){var n=e.instance_index,t=e.service_name;return{type:O.S9.DISABLE_INSTANCE,payload:{instance_index:n,service_name:t}}},ne=function(e,n){var t=e.service_name;return function(r){G.BZ.startServiceInstance(e).then((function(o){0===(o=o.data).code?(r({type:O.S9.START_INSTANCE,payload:{instance_index:e.instance_index,service_name:t}}),n&&n()):H.Z.error(o.msg)}))}},te=function(e,n){var t=e.service_name;return function(r){G.BZ.stopServiceInstance(e).then((function(o){0===(o=o.data).code?(r({type:O.S9.STOP_INSTANCE,payload:{instance_index:e.instance_index,service_name:t}}),n()):H.Z.error(o.msg)}))}},re=function(e){return{type:O.S9.SET_RED_SERVICE,payload:e}},oe=function(e,n){return{type:O.S9.ADD_HA_ROLE,payload:{roles:e,service_name:n}}},ie=function(){return function(e){G.BZ.getProductList({limit:0}).then((function(n){if(0===(n=n.data).code){var t,r=[],o=z(n.data.list);try{for(o.s();!(t=o.n()).done;){var i=t.value;1===i.is_current_version&&r.push(i)}}catch(e){o.e(e)}finally{o.f()}e({type:O.S9.GET_ALL_PRODUCTS,payload:r})}}))}},ce=function(e){return{type:O.S9.SET_CURRENT_PRODUCT,payload:e}},ae=function(e){return{type:O.S9.SET_CONFIG_FILE,payload:e}},ue=function(e,n){return function(t,r){var o=r().ServiceStore,c=o.cur_service,a=o.configFile,u=n||c;G.BZ.getServiceConfig(V(V({},e),{},{file:e.file||a})).then((function(e){var n=e.data,r=n.code,o=n.data,c=n.msg;if(0===r){var a={},s=(null==o?void 0:o.list)||[];i()(s).call(s,(function(e){a[e.config]=V(V({},e),{},{iconType:0})})),u.Config=a,t({type:O.S9.SET_CURRENT_SERVICE,payload:u})}else H.Z.error(c)}))}},se=function(e,n){return n?function(t){t(ue(n,e))}:{type:O.S9.SET_CURRENT_SERVICE,payload:e}},le=function(e){return{type:O.S9.SET_CONFIG_MODIFY,payload:{cur_service:e}}},de=function(e){var n=e.product_name,t=e.service_name;return function(r){G.BZ.resetServiceConfig({product_name:n,service_name:t,pid:e.pid,product_version:e.product_version,field_path:e.field_path}).then((function(n){0===(n=n.data).code?r(ve(e)):H.Z.error(n.msg)}))}},pe=function(e){var n=e.product_name,t=e.service_name;return function(r){G.BZ.resetMultiServiceConfig({product_name:n,service_name:t,pid:e.pid,product_version:e.product_version,field_path:e.field_path,hosts:e.hosts}).then((function(n){0===(n=n.data).code?r(ve(e)):H.Z.error(n.msg)}))}},_e=function(e,n){var t=e.product_name,r=e.service_name;return function(o){G.BZ.modifyProductConfigAll({product_name:t,service_name:r},n).then((function(n){0===(n=n.data).code?(H.Z.success("保存成功"),o(ve(e))):H.Z.error(n.msg)}))}},fe=function(e,n){var t=e.product_name,r=e.service_name;return function(o){G.BZ.modifyMultiAllHosts({product_name:t,service_name:r},n).then((function(n){0===(n=n.data).code?(H.Z.success("保存成功"),o(ve(e))):H.Z.error(n.msg)}))}},me=function(e,n){var t=e.product_name,r=e.service_name;return function(o){G.BZ.modifyMultiAllHosts({product_name:t,service_name:r},n).then((function(n){0===(n=n.data).code?(H.Z.success("保存成功"),o(ve(e))):H.Z.error(n.msg)}))}},ve=function(e){var n=e.product_name,t=e.service_name;return function(r,o){var c=o().ServiceStore.configFile;G.BZ.getProductList({limit:0}).then((function(o){if(0===(o=o.data).code){var a,u=o.data.list,s=null,l=null,d=z(u);try{for(d.s();!(a=d.n()).done;){var p=a.value;if("product_version"in e){var _=e.product_version;p.product_name===n&&p.product_version===_&&(s=p)}else p.product_name===n&&(s=p)}}catch(e){d.e(e)}finally{d.f()}if(s)for(var f in s.product.Service)f===t&&(l=s.product.Service[f]);r({type:O.S9.REFRESH_PROD_SERVICE,payload:{products:u,cur_product:s,cur_service:l}}),G.BZ.getServiceConfig({product_name:n,service_name:t,product_version:s.product_version,file:c}).then((function(e){var n=e.data,t=n.code,o=n.data;if(0===t){var c=(void 0===o?{}:o).list,a=void 0===c?[]:c;i()(a).call(a,(function(e){l.Config[e.config]=e})),r({type:O.S9.SET_CURRENT_SERVICE,payload:l})}}))}else H.Z.error(o.msg)}))}},ge=function(e,n){return{type:O.S9.SWITCH_SERVICE_RESTART,payload:{service_name:e,isRestart:n}}},he=function(){return{type:O.S9.GET_SERVICES,payload:[]}}},57201:(e,n,t)=>{t.d(n,{B:()=>r,b:()=>o});var r=[{title:"运维中心",icon:"emicon-jiqunguanli",code:"menu_ops_center",url:"/opscenter",level:"first",routers:["/opscenter/overview","/opscenter/service","/opscenter/hoststatus","sub_menu_diagnose"],children:[{title:"概览",icon:"emicon-gailan",code:"sub_menu_overview",url:"/opscenter/overview",level:"second",routers:[],children:[]},{title:"服务",icon:"emicon-fuwu",code:"sub_menu_service",url:"/opscenter/service",level:"second",routers:[],children:[]},{title:"主机",icon:"emicon-zhuji",code:"sub_menu_host",url:"/opscenter/hoststatus",level:"second",routers:[],children:[]},{title:"诊断",icon:"emicon-zhenduan",code:"sub_menu_diagnose",url:"/opscenter/diagnosis",level:"second",routers:["/opscenter/diagnosis/log","/opscenter/diagnosis/event","/opscenter/diagnosis/config","/opscenter/diagnosis/inspectionReport","/opscenter/diagnosis/backup"],children:[{title:"日志查看",icon:"emicon-rizhichakan",code:"sub_menu_diagnose_log",url:"/opscenter/diagnosis/log",level:"three",routers:[],children:[]},{title:"事件诊断",icon:"emicon-shijianzhenduan",code:"sub_menu_diagnose_event",url:"/opscenter/diagnosis/event",level:"three",routers:[],children:[]},{title:"配置变更",icon:"emicon-peizhibiangeng",code:"sub_menu_diagnose_config_change",url:"/opscenter/diagnosis/config",level:"three",routers:[],children:[]},{title:"巡检报告",icon:"emicon-xunjianbaogao",code:"sub_menu_diagnose",url:"/opscenter/diagnosis/inspectionReport",level:"three",routers:[],children:[]},{title:"备份管理",icon:"emicon-beifenguanli",code:"sub_menu_diagnose_backup",url:"/opscenter/diagnosis/backup",level:"three",routers:[],children:[]}]}]},{title:"部署中心",icon:"emicon-yingyongguanli",code:"menu_deploy_center",url:"/deploycenter",level:"first",routers:["/deploycenter/cluster","/deploycenter/appmanage","/deploycenter/deployed"],children:[{title:"集群管理",icon:"emicon-jiqunguanli1",code:"sub_menu_cluster_manage",url:"/deploycenter/cluster",level:"second",routers:["/deploycenter/cluster/list","/deploycenter/cluster/create","/deploycenter/cluster/create/edit","/deploycenter/cluster/create/add","/deploycenter/cluster/detail/index","/deploycenter/cluster/detail/host","/deploycenter/cluster/detail/imagestore","/deploycenter/cluster/detail/namespace","/deploycenter/cluster/detail/deployed","/deploycenter/cluster/detail/history","/deploycenter/cluster/detail/patchHistory","/deploycenter/cluster/detail/echoList","/deploycenter/cluster/detail/echoDetail"],children:[{title:"集群列表",icon:"emicon-rizhichakan",code:"sub_menu_cluster_list",url:"/deploycenter/cluster/list",level:"three",routers:[],children:[]},{title:"添加集群",icon:"emicon-shijianzhenduan",code:"sub_menu_cluster_edit",url:"/deploycenter/cluster/create",level:"three",routers:[],children:[]}]},{title:"组件管理",icon:"emicon-zujianguanli",code:"sub_menu_product_manage",url:"/deploycenter/appmanage",level:"second",routers:["/deploycenter/appmanage/products","/deploycenter/appmanage/installs"],children:[{title:"组件列表",icon:"emicon-rizhichakan",code:"sub_menu_product_list",url:"/deploycenter/appmanage/products",level:"three",routers:[],children:[]},{title:"部署组件",icon:"emicon-shijianzhenduan",code:"sub_menu_product_deploy",url:"/deploycenter/appmanage/installs",level:"three",routers:[],children:[]}]},{title:"告警监控",icon:"emicon-jiankonggaojing2",code:"sub_menu_monitor",url:"/deploycenter/deployed",level:"second",routers:["/deploycenter/monitoring/dashboard","/deploycenter/monitoring/dashdetail","/deploycenter/monitoring/alert","/deploycenter/monitoring/addAlert"],children:[{title:"仪表盘",icon:"emicon-rizhichakan",code:"sub_menu_dashboard",url:"/deploycenter/monitoring/dashboard",level:"three",routers:[],children:[]},{title:"告警",icon:"emicon-shijianzhenduan",code:"sub_menu_alert",url:"/deploycenter/monitoring/alert",level:"three",routers:[],children:[]}]}]},{title:"平台管理",icon:"emicon-yingyongguanli",code:"menu_platform_manager",url:"/platform",level:"first",routers:["/platform/scriptManager","/platform/backup"],children:[{title:"备份配置",icon:"emicon-shijianzhenduan",code:"sub_menu_configuration_backup_config",url:"/platform/backup",level:"second",routers:[],children:[]},{title:"脚本管理",icon:"emicon-yunweijiaobenpingtaibeifen",code:"sub_menu_platform_manager_scriptManager",url:"/platform/scriptManager",level:"second",routers:[],children:[]},{title:"集群巡检",icon:"emicon-yunweijiaobenpingtaibeifen",code:"sub_menu_platform_manager_cluster_inspection",url:"/platform/clusterInspection",level:"second",routers:[],children:[]}]},{title:"系统配置",icon:"",code:"menu_system_configuration",url:"/systemconfig",level:"first",routers:["/systemconfig/security","/systemconfig/globalConfig"],children:[{title:"平台安全",icon:"emicon-jiankonggaojing2",code:"sub_menu_configuration_platformsecurity_config",url:"/systemconfig/security",level:"second",routers:[],children:[]},{title:"全局配置",icon:"emicon-shijianzhenduan",code:"sub_menu_configuration_platformsecurity_config_view",url:"/systemconfig/globalConfig",level:"second",routers:[],children:[]}]},{title:"用户管理",icon:"",code:"menu_user_manage",url:"/usercenter",level:"first",routers:["/usercenter/members","/usercenter/role","/usercenter/role/view","/usercenter/selfinfo","/usercenter/audit"],children:[{title:"成员管理",icon:"emicon-chengyuanguanli",code:"sub_menu_user_manage",url:"/usercenter/members",level:"second",routers:[],children:[]},{title:"角色管理",icon:"emicon-jiaoseguanli",code:"sub_menu_role_manage",url:"/usercenter/role",level:"second",routers:[],children:[]},{title:"个人信息",icon:"emicon-gerenxinxi",code:"sub_menu_user_info",url:"/usercenter/selfinfo",level:"second",routers:[],children:[]},{title:"安全审计",icon:"emicon-shenji",code:"menu_security_audit",url:"/usercenter/audit",level:"second",routers:[],children:[]}]}],o=[{title:"总览",icon:"emicon-gailan",code:"sub_menu_detail_overview",isShow:!0,key:"index"},{title:"主机资源",icon:"emicon-fuwu",code:"sub_menu_detail_host",isShow:!0,key:"host"},{title:"镜像仓库",icon:"",code:"sub_menu_detail_image_store",isShow:!0,key:"imagestore"},{title:"命名空间",icon:"",code:"sub_menu_detail_namespace",isShow:!0,key:"namespace"},{title:"已部署组件",icon:"",code:"sub_menu_detail_deployed",isShow:!0,key:"deployed"},{title:"部署历史",icon:"",code:"sub_menu_detail_history",isShow:!0,key:"history"},{title:"补丁包",icon:"",code:"sub_menu_detail_patch",isShow:!0,key:"patchHistory"},{title:"集群命令",icon:"",isShow:!0,key:"echoList"},{title:"集群命令详情",icon:"",isShow:!1,key:"echoDetail"}]},51447:(e,n,t)=>{e.exports=t.p+"images/03a3b2c6272d5759815f.png"}}]);