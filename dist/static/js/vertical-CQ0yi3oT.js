import{s as v,a as h}from"./vue-virtual-scroller.esm-Coe3b_nr.js";import{d as x,r,c as g,k as d,e as w,x as I,g as o,l as V,m as l,j as m,u as p,t as y,_ as C}from"./index-Bp-Azfsb.js";const k={class:"dynamic-scroller-demo"},b={class:"flex-ac mb-4 shadow-2xl"},z={class:"flex items-center"},B=x({__name:"vertical",setup(N){const i=r([]),t=r("");for(let e=0;e<800;e++)i.value.push({id:e});const u=g(()=>{if(!t.value)return i.value;const e=t.value;return i.value.filter(a=>a.id==e)});return(e,a)=>{const _=d("el-input"),f=d("IconifyIconOnline");return w(),I("div",k,[o("div",b,[V(" 垂直模式 vertical "),l(_,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),class:"!w-[350px]",clearable:"",placeholder:"Filter..."},null,8,["modelValue"])]),l(p(h),{items:u.value,"min-item-size":54,class:"scroller"},{default:m(({item:s,index:c,active:n})=>[l(p(v),{item:s,active:n,"size-dependencies":[s.id],"data-index":c,"data-active":n,title:`Click to change message ${c}`,class:"message"},{default:m(()=>[o("div",z,[l(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),o("span",null,y(s.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title"])]),_:1},8,["items"])])}}}),S=C(B,[["__scopeId","data-v-7ec069cd"]]);export{S as default};
