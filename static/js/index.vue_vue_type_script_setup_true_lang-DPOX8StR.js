import{useColumns as v}from"./columns-DXqxHJ21.js";import{d as g,e as n,f as s,k as p,i as l,w as t,g as d,t as w,u as e,b as x,h as c}from"./index-BfJLwqhi.js";const B={class:"flex"},N={class:"w-[400px]"},V={key:1},M=g({__name:"index",setup($){const{editMap:m,columns:u,dataList:r,onEdit:k,onSave:f,onCancel:y}=v();return(E,S)=>{const C=n("el-scrollbar"),a=n("el-button"),h=n("pure-table");return s(),p("div",B,[l(C,null,{default:t(()=>[d("code",null,[d("pre",N," "+w(e(r)),1)])]),_:1}),l(h,{"row-key":"id","align-whole":"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},data:e(r),columns:e(u)},{operation:t(({row:b,index:o})=>{var i;return[(i=e(m)[o])!=null&&i.editable?(s(),p("div",V,[l(a,{class:"reset-margin",link:"",type:"primary",onClick:_=>e(f)(o)},{default:t(()=>[c(" 保存 ")]),_:2},1032,["onClick"]),l(a,{class:"reset-margin",link:"",onClick:_=>e(y)(o)},{default:t(()=>[c(" 取消 ")]),_:2},1032,["onClick"])])):(s(),x(a,{key:0,class:"reset-margin",link:"",type:"primary",onClick:_=>e(k)(b,o)},{default:t(()=>[c(" 修改 ")]),_:2},1032,["onClick"]))]}),_:1},8,["header-cell-style","data","columns"])])}}});export{M as _};
