import{r as u,K as p,A as g}from"./index-IxQI2uTX.js";import{b as o}from"./data-A51rtDuo.js";function S(r,n){const l=u([]),s=[{type:"selection",reserveSelection:!0,align:"left"},{label:"ID",prop:"id",width:80},{label:"日期",prop:"date",minWidth:120},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],c=p({pageSize:5,currentPage:1,layout:"prev, pager, next",total:o.length,background:!0,small:!0});return{columns:s,pagination:c,selectValue:l,tableDataEdit:o,onSure:()=>{r.value.blur(),g(`当前选中的数据为：${JSON.stringify(l.value)}`,{type:"success"})},onClear:()=>{const{clearSelection:e}=n.value.getTableRef();e()},removeTag:({id:e})=>{var a;const{toggleRowSelection:t}=n.value.getTableRef();t((a=o.filter(i=>i.id==e))==null?void 0:a[0],!1)},handleSelectionChange:e=>{const t=[];e.forEach(a=>{t.push({label:a.name,id:a.id})}),l.value=t}}}export{S as useColumns};