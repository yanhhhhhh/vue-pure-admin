import{d as y,p as w,a as b,fN as c,e as s,f as d,j as m,h as l,w as n,l as o,t as g,F as k,k as C,s as x,au as S,ac as V,fZ as B}from"./index-BXHkKmv3.js";const N=o("p",{class:"mb-2"}," 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ",-1),P={class:"card-header"},F=y({name:"PermissionPage",__name:"index",setup(U){var t;const i=w(()=>({width:"85vw",justifyContent:"start"})),a=b((t=c())==null?void 0:t.username),p=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function _(){c().loginByUsername({username:a.value,password:"admin123"}).then(r=>{r.success&&(S().removeItem("async-routes"),V().clearAllCachePage(),B())})}return(r,u)=>{const v=s("el-option"),f=s("el-select"),h=s("el-card");return d(),m("div",null,[N,l(h,{shadow:"never",style:x(i.value)},{header:n(()=>[o("div",P,[o("span",null,"当前角色："+g(a.value),1)])]),default:n(()=>[l(f,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=e=>a.value=e),class:"!w-[160px]",onChange:_},{default:n(()=>[(d(),m(k,null,C(p,e=>l(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])])}}});export{F as default};