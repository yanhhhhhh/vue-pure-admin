import{d as w,a as k,e as r,f as E,k as M,i as o,w as t,u as e,h as s,B as N,a3 as P,ac as z,_ as A}from"./index-BfJLwqhi.js";import{useMenu as F}from"./hook-Bk24w0f5.js";import{R as L,P as O}from"./refresh-BHl5PEdT.js";import{u as m}from"./hooks-DvWrX7Jr.js";import{d as U}from"./delete-Ce0TSdK5.js";import{d as j}from"./edit-pen-Ci7W0xNM.js";import{d as v}from"./add-circle-line-DOJqVT3s.js";import"./form.vue_vue_type_script_setup_true_lang-iV3gzPhO.js";import"./index-CqQbWeH7.js";import"./index-Cu0TiWAB.js";import"./index-W6o8gQ8o.js";import"./system-BWmVTpBi.js";import"./sortable.esm-6WsHlDA5.js";import"./epTheme-Q1ReNrvo.js";import"./collapse-B5XoSySz.js";const q={class:"main"},G=w({name:"SystemMenu",__name:"index",setup(H){const f=k(),d=k(),{form:c,loading:u,columns:C,dataList:R,onSearch:_,resetForm:x,openDialog:p,handleDelete:$,handleSelectionChange:S}=F();return(J,a)=>{var h;const B=r("el-input"),g=r("el-form-item"),i=r("el-button"),T=r("el-form"),V=r("el-popconfirm"),I=r("pure-table");return E(),M("div",q,[o(T,{ref_key:"formRef",ref:f,inline:!0,model:e(c),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:t(()=>[o(g,{label:"菜单名称：",prop:"title"},{default:t(()=>[o(B,{modelValue:e(c).title,"onUpdate:modelValue":a[0]||(a[0]=n=>e(c).title=n),placeholder:"请输入菜单名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(g,null,{default:t(()=>[o(i,{type:"primary",icon:e(m)("ri:search-line"),loading:e(u),onClick:e(_)},{default:t(()=>[s(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(m)(e(L)),onClick:a[1]||(a[1]=n=>e(x)(f.value))},{default:t(()=>[s(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(O),{title:"菜单管理（仅演示，操作后不生效）",columns:e(C),isExpandAll:!1,tableRef:(h=d.value)==null?void 0:h.getTableRef(),onRefresh:e(_)},{buttons:t(()=>[o(i,{type:"primary",icon:e(m)(e(v)),onClick:a[2]||(a[2]=n=>e(p)())},{default:t(()=>[s(" 新增菜单 ")]),_:1},8,["icon"])]),default:t(({size:n,dynamicColumns:D})=>[o(I,{ref_key:"tableRef",ref:d,adaptive:"",adaptiveConfig:{offsetBottom:45},"align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto",loading:e(u),size:n,data:e(R),columns:D,"header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(S)},{operation:t(({row:l})=>{var y;return[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(m)(e(j)),onClick:b=>e(p)("修改",l)},{default:t(()=>[s(" 修改 ")]),_:2},1032,["size","icon","onClick"]),N(o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(m)(e(v)),onClick:b=>e(p)("新增",{parentId:l.id})},{default:t(()=>[s(" 新增 ")]),_:2},1032,["size","icon","onClick"]),[[P,l.menuType!==3]]),o(V,{title:`是否确认删除菜单名称为${e(z)(l.title)}的这条数据${((y=l==null?void 0:l.children)==null?void 0:y.length)>0?"。注意下级菜单也会一并删除，请谨慎操作":""}`,onConfirm:b=>e($)(l)},{reference:t(()=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(m)(e(U))},{default:t(()=>[s(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]}),_:2},1032,["loading","size","data","columns","header-cell-style","onSelectionChange"])]),_:1},8,["columns","tableRef","onRefresh"])])}}}),me=A(G,[["__scopeId","data-v-f33b4d5a"]]);export{me as default};
