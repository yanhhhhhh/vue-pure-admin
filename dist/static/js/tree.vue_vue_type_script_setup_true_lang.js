import{d as l,a as m,o as s,i as h,h as n}from"./index.js";const p=l({__name:"tree",setup(u){const o=(i,r,a)=>{setTimeout(()=>{a([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])},1e3)},t=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],d=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}],e=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return(i,r)=>{const a=m("pure-table");return s(),h("div",null,[n(a,{data:t,columns:e,"row-key":"id",border:"","default-expand-all":"",class:"mb-6"}),n(a,{data:d,columns:e,"row-key":"id",border:"",lazy:"",load:o,"tree-props":{children:"children",hasChildren:"hasChildren"}})])}}});export{p as _};