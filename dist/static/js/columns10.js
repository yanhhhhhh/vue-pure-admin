import{u as t,w as u}from"./xlsx.js";import{a as i}from"./data2.js";import{r as m,D as b,q as f}from"./index.js";function w(){const s=m(b(i,!0)),e=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return{columns:e,dataList:s,exportExcel:()=>{const a=s.value.map(o=>{const p=[];return e.forEach(c=>{p.push(o[c.prop])}),p}),r=[];e.forEach(o=>{r.push(o.label)}),a.unshift(r);const l=t.aoa_to_sheet(a),n=t.book_new();t.book_append_sheet(n,l,"数据报表"),u(n,"pure-admin-table.xlsx"),f("导出成功",{type:"success"})}}}export{w as useColumns};