var m=(n,c,a)=>new Promise((s,o)=>{var p=t=>{try{i(a.next(t))}catch(r){o(r)}},l=t=>{try{i(a.throw(t))}catch(r){o(r)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(p,l);i((a=a.apply(n,c)).next())});import{r as g,a as d,m as z,i as C,e as T,d9 as P,L as f,an as L,dv as R}from"./index-BfJLwqhi.js";import{a as Y}from"./system-BWmVTpBi.js";import{u as w}from"./hooks-D7Y_N4LE.js";function x(n){const c=g({module:"",status:"",operatingTime:""}),a=d([]),s=d(!0),o=d(0),{tagStyle:p}=w(),l=g({total:0,pageSize:10,currentPage:1,background:!0}),i=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"序号",prop:"id",minWidth:90},{label:"操作人员",prop:"username",minWidth:100},{label:"所属模块",prop:"module",minWidth:140},{label:"操作概要",prop:"summary",minWidth:140},{label:"操作 IP",prop:"ip",minWidth:100},{label:"操作地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"操作状态",prop:"status",minWidth:100,cellRenderer:({row:e,props:y})=>C(T("el-tag"),{size:y.size,style:p.value(e.status)},{default:()=>[e.status===1?"成功":"失败"]})},{label:"操作时间",prop:"operatingTime",minWidth:180,formatter:({operatingTime:e})=>P(e).format("YYYY-MM-DD HH:mm:ss")}];function t(e){}function r(e){}function h(e){o.value=e.length,n.value.setAdaptive()}function v(){o.value=0,n.value.getTableRef().clearSelection()}function b(){const e=n.value.getTableRef().getSelectionRows();f(`已删除序号为 ${L(e,"id")} 的数据`,{type:"success"}),n.value.getTableRef().clearSelection(),u()}function S(){f("已删除所有日志数据",{type:"success"}),u()}function u(){return m(this,null,function*(){s.value=!0;const{data:e}=yield Y(R(c));a.value=e.list,l.total=e.total,l.pageSize=e.pageSize,l.currentPage=e.currentPage,setTimeout(()=>{s.value=!1},500)})}const W=e=>{e&&(e.resetFields(),u())};return z(()=>{u()}),{form:c,loading:s,columns:i,dataList:a,pagination:l,selectedNum:o,onSearch:u,clearAll:S,resetForm:W,onbatchDel:b,handleSizeChange:t,onSelectionCancel:v,handleCurrentChange:r,handleSelectionChange:h}}export{x as useRole};
