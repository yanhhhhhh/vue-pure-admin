var d=(v,p,o)=>new Promise((e,i)=>{var n=t=>{try{c(o.next(t))}catch(u){i(u)}},r=t=>{try{c(o.throw(t))}catch(u){i(u)}},c=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);c((o=o.apply(v,p)).next())});import{a as b,ah as w,r as f,n as E,y as R,db as h,L as V}from"./index-BfJLwqhi.js";import{b as k}from"./data-Cp2rVKlw.js";function O(v,p,o){const e=b(k),i=w(e.value),n=b([1,3,4]),r=f({sexValue:"",searchDate:""}),c=[{value:0,label:"男"},{value:1,label:"女"}],t=[{type:"selection",reserveSelection:!0,align:"left"},{label:"ID",prop:"id",width:50},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"地址",prop:"address"},{label:"日期",prop:"date",minWidth:120}],u=f({pageSize:5,currentPage:1,layout:"prev, pager, next",total:e.value.length,background:!0,small:!0}),m=a=>{const l=[];a.forEach(s=>{l.push({label:s.name,id:s.id})}),n.value=l},x=()=>{if(e.value=i,!h(r.sexValue)){let a=c.map(l=>l.value===Number(r.sexValue)&&l.label).filter(Boolean)[0];e.value=e.value.filter(l=>l.sex===a)}h(r.searchDate)||(e.value=e.value.filter(a=>a.date===r.searchDate)),u.total=e.value.length},S=()=>{p.value.resetFields(),g(),e.value=i,u.total=e.value.length},D=({id:a})=>{var s;const{toggleRowSelection:l}=o.value.getTableRef();l((s=e.value.filter(T=>T.id==a))==null?void 0:s[0],!1)},g=()=>{const{clearSelection:a}=o.value.getTableRef();a()},y=()=>{v.value.blur(),V(`当前选中的数据为：${JSON.stringify(n.value)}`,{type:"success"})};return E(n,()=>d(this,null,function*(){yield R();const{toggleRowSelection:a}=o.value.getTableRef();n.value.forEach(l=>{e.value.forEach(s=>{s.id===l&&a(s)})})}),{immediate:!0}),{searchForm:r,sexOptions:c,columns:t,pagination:u,selectValue:n,tableData:e,onSure:y,onClear:g,onReset:S,onSearch:x,removeTag:D,handleSelectionChange:m}}export{O as useColumns};
