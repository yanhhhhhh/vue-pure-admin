var c=(p,n,t)=>new Promise((o,s)=>{var i=e=>{try{r(t.next(e))}catch(l){s(l)}},a=e=>{try{r(t.throw(e))}catch(l){s(l)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,a);r((t=t.apply(p,n)).next())});import{d as u,a as m,r as d,m as g,e as _,f as b,k as f,i as h,v,u as y,$ as w,g as x,db as S,gb as W}from"./index-DDFqk3Tf.js";const k=x("h3",{class:"my-8"},"安全日志",-1),M=u({name:"SecurityLog",__name:"SecurityLog",setup(p){const n=m(!0),t=m([]),o=d({total:0,pageSize:10,currentPage:1,background:!0,layout:"prev, pager, next"}),s=[{label:"详情",prop:"summary",minWidth:140},{label:"IP 地址",prop:"ip",minWidth:100},{label:"地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"时间",prop:"operatingTime",minWidth:180,formatter:({operatingTime:a})=>S(a).format("YYYY-MM-DD HH:mm:ss")}];function i(){return c(this,null,function*(){n.value=!0;const{data:a}=yield W();t.value=a.list,o.total=a.total,o.pageSize=a.pageSize,o.currentPage=a.currentPage,setTimeout(()=>{n.value=!1},200)})}return g(()=>{i()}),(a,r)=>{const e=_("pure-table");return b(),f("div",{class:v(["min-w-[180px]",y(w)()?"max-w-[100%]":"max-w-[70%]"])},[k,h(e,{"row-key":"id","table-layout":"auto",loading:n.value,data:t.value,columns:s,pagination:o},null,8,["loading","data","pagination"])],2)}}});export{M as _};
