import{S as f}from"./vue-json-pretty-CKFKvik3.js";import{d as y,a as B,e as l,f as r,k as d,i as e,w as o,F as h,l as k,b as q,u as x}from"./index-BfJLwqhi.js";const I=y({__name:"detail",props:{data:{type:Array,default:()=>[]}},setup(s){const a=s,p=[{label:"IP 地址",prop:"ip"},{label:"地点",prop:"address"},{label:"操作系统",prop:"system"},{label:"浏览器类型",prop:"browser"},{label:"所属模块",prop:"module"},{label:"请求时间",prop:"requestTime"},{label:"请求方法",prop:"method"},{label:"请求耗时",prop:"takesTime"},{label:"请求接口",prop:"url",copy:!0},{label:"TraceId",prop:"traceId",copy:!0}],c=B([{title:"响应头",name:"responseHeaders",data:a.data[0].responseHeaders},{title:"响应体",name:"responseBody",data:a.data[0].responseBody},{title:"请求头",name:"requestHeaders",data:a.data[0].requestHeaders},{title:"请求体",name:"requestBody",data:a.data[0].requestBody}]);return(v,H)=>{const u=l("PureDescriptions"),n=l("el-scrollbar"),m=l("el-tab-pane"),b=l("el-tabs");return r(),d("div",null,[e(n,null,{default:o(()=>[e(u,{border:"",data:s.data,columns:p,column:5},null,8,["data"])]),_:1}),e(b,{modelValue:"responseBody",type:"border-card",class:"mt-4"},{default:o(()=>[(r(!0),d(h,null,k(c.value,(t,_)=>(r(),q(m,{key:_,name:t.name,label:t.title},{default:o(()=>[e(n,{"max-height":"calc(100vh - 240px)"},{default:o(()=>[e(x(f),{data:t.data,"onUpdate:data":i=>t.data=i},null,8,["data","onUpdate:data"])]),_:2},1024)]),_:2},1032,["name","label"]))),128))]),_:1})])}}});export{I as _};
