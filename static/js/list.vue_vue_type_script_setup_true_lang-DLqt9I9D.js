var u=(f,l,o)=>new Promise((r,i)=>{var n=t=>{try{e(o.next(t))}catch(s){i(s)}},a=t=>{try{e(o.throw(t))}catch(s){i(s)}},e=t=>t.done?r(t.value):Promise.resolve(t.value).then(n,a);e((o=o.apply(f,l)).next())});import{V as m}from"./index-CK0P7Clo.js";import{d as _,a as c,e as p,A as x,f as h,b,w as g,B as w,i as T,u as R}from"./index-BfJLwqhi.js";const D=_({__name:"list",setup(f){const l=c(),o=c(!0),r=c([]),i=[{type:"seq",field:"seq",title:"序号",width:100},{field:"name",title:"名称",sortable:!0},{field:"role",title:"角色"},{field:"sex",title:"性别"}];function n(){return u(this,null,function*(){o.value=!0;const a=[];for(let e=0;e<500;e++)a.push({id:e,name:"Test"+e,role:"Developer",sex:"男"});r.value=a,setTimeout(()=>{o.value=!1},500)})}return n(),(a,e)=>{const t=p("vxe-grid"),s=x("loading");return h(),b(R(m),{vxeTableRef:l.value,columns:i,title:"虚拟表格",onRefresh:n},{default:g(({size:d,dynamicColumns:v})=>[w(T(t,{ref_key:"vxeTableRef",ref:l,"show-overflow":"",height:"500",size:d,"row-config":{isHover:!0},"scroll-y":{enabled:!0},columns:v,data:r.value},null,8,["size","columns","data"]),[[s,o.value]])]),_:1},8,["vxeTableRef"])}}});export{D as _};
