import{useColumns as T}from"./columns-B15bNcxd.js";import{d as z,r as p,k as t,e as d,f as x,j as o,g as F,m as l,u as e,x as N,F as U,y as P,l as i,aG as j}from"./index-Bp-Azfsb.js";const E={class:"m-4"},q=z({__name:"index",setup(G){const f=p(),_=p(),g=p(),{searchForm:r,sexOptions:b,columns:y,pagination:s,selectValue:c,tableData:C,onSure:V,onClear:h,onReset:v,onSearch:R,removeTag:Y,handleSelectionChange:D}=T(g,f,_);return(L,n)=>{const S=t("el-option"),k=t("el-select"),u=t("el-form-item"),w=t("el-date-picker"),m=t("el-button"),B=t("el-form"),M=t("pure-table");return d(),x(k,{ref_key:"selectRef",ref:g,modelValue:e(c),"onUpdate:modelValue":n[2]||(n[2]=a=>j(c)?c.value=a:null),class:"!w-[200px]",placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","value-key":"id",onRemoveTag:e(Y),onClear:e(h)},{empty:o(()=>[F("div",E,[l(B,{ref_key:"formRef",ref:f,inline:!0,model:e(r)},{default:o(()=>[l(u,{prop:"sexValue"},{default:o(()=>[l(k,{modelValue:e(r).sexValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e(r).sexValue=a),class:"!w-[120px]",placeholder:"请选择性别",teleported:!1,clearable:""},{default:o(()=>[(d(!0),N(U,null,P(e(b),a=>(d(),x(S,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{prop:"searchDate"},{default:o(()=>[l(w,{modelValue:e(r).searchDate,"onUpdate:modelValue":n[1]||(n[1]=a=>e(r).searchDate=a),class:"!w-[150px]",type:"date",placeholder:"请选择日期",format:"YYYY/MM/DD","value-format":"YYYY-MM-D"},null,8,["modelValue"])]),_:1}),l(u,{class:"float-right !mr-0"},{default:o(()=>[l(m,{type:"primary",text:"",bg:"",onClick:e(R)},{default:o(()=>[i(" 查询 ")]),_:1},8,["onClick"]),l(m,{text:"",bg:"",onClick:e(v)},{default:o(()=>[i(" 重置 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),l(M,{ref_key:"tableRef",ref:_,"row-key":"id",alignWhole:"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},data:e(C).slice((e(s).currentPage-1)*e(s).pageSize,e(s).currentPage*e(s).pageSize),columns:e(y),pagination:e(s),onSelectionChange:e(D)},null,8,["header-cell-style","data","columns","pagination","onSelectionChange"]),l(m,{class:"absolute bottom-[25px] left-[20px]",type:"primary",size:"small",text:"",bg:"",onClick:e(V)},{default:o(()=>[i(" 确定 ")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{q as _};
