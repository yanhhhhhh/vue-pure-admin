import{d as y,L as g,r as w,dL as c,e as s,f as d,k as i,i as l,w as n,g as o,B as b,F as k,l as C,O as x,av as B,a8 as S,dY as V}from"./index-BQLilEpU.js";const P=o("p",{class:"mb-2"}," 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ",-1),L={class:"card-header"},F=y({name:"PermissionPage",__name:"index",setup(N){var t;const m=g(()=>({width:"85vw",justifyContent:"start"})),a=w((t=c())==null?void 0:t.username),p=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function _(){c().loginByUsername({username:a.value,password:"admin123"}).then(r=>{r.success&&(B().removeItem("async-routes"),S().clearAllCachePage(),V())})}return(r,u)=>{const v=s("el-option"),f=s("el-select"),h=s("el-card");return d(),i("div",null,[P,l(h,{shadow:"never",style:x(m.value)},{header:n(()=>[o("div",L,[o("span",null,"当前角色："+b(a.value),1)])]),default:n(()=>[l(f,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=e=>a.value=e),class:"!w-[160px]",onChange:_},{default:n(()=>[(d(),i(k,null,C(p,e=>l(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])])}}});export{F as default};