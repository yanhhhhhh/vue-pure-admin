import{R as h}from"./index-CqQbWeH7.js";import{T as C,E as g}from"./index.esm-1fuENI-8.js";import{d as R,a as w,P as y,z as E,e as V,f as l,b as u,w as d,k as b,l as k,u as r,g as x,i,F as B}from"./index-BfJLwqhi.js";const L={class:"wangeditor"},c="default",O=R({name:"MultiEditor",__name:"EditorMulti",setup(U){const f=[{value:"<p>测试一</p>"},{value:"<p>测试二</p>"},{value:"<p>测试三</p>"},{value:"<p>测试四</p>"}],o=w([]);f.forEach(e=>{o.value.push({value:e.value,editorRef:y()})});const p={excludeKeys:"fullScreen"},m={placeholder:"请输入内容..."},v=(e,n)=>{o.value[n].editorRef=e};return E(()=>o.value.map(e=>{e.editorRef!=null&&e.editorRef.destroy()})),(e,n)=>{const _=V("el-row");return l(),u(_,{gutter:30,justify:"space-around"},{default:d(()=>[(l(!0),b(B,null,k(o.value,(t,s)=>(l(),u(r(h),{key:s,value:11},{default:d(()=>[x("div",L,[i(r(C),{editor:t.editorRef,defaultConfig:p,mode:c,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),i(r(g),{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,defaultConfig:m,mode:c,style:{height:"300px","overflow-y":"hidden"},onOnCreated:a=>v(a,s)},null,8,["modelValue","onUpdate:modelValue","onOnCreated"])])]),_:2},1024))),128))]),_:1})}}});export{O as _};
