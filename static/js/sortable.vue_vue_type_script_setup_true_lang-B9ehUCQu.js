import{b as t}from"./data-epd1a1cr.js";import{d as r,e as n,f as s,b as p,u as l}from"./index-BfJLwqhi.js";const d=r({__name:"sortable",setup(c){const a=[{label:"日期",prop:"date",sortable:!0},{label:"姓名",prop:"name"},{label:"地址",prop:"address",formatter:({address:e})=>`格式化后的内容：${e}`}];return(e,m)=>{const o=n("pure-table");return s(),p(o,{data:l(t),columns:a,"default-sort":{prop:"date",order:"ascending"}},null,8,["data"])}}});export{d as _};
