var I=(l,m,s)=>new Promise((u,f)=>{var p=t=>{try{c(s.next(t))}catch(i){f(i)}},r=t=>{try{c(s.throw(t))}catch(i){f(i)}},c=t=>t.done?u(t.value):Promise.resolve(t.value).then(p,r);c((s=s.apply(l,m)).next())});import{r as F,a as o,m as O,i as _,e as j,db as x,dd as R,gg as z,ah as N,ag as P,$ as V,N as q,L as $}from"./index-DDFqk3Tf.js";import{_ as A}from"./form.vue_vue_type_script_setup_true_lang-B_JWMohF.js";import{e as B}from"./system-CWINuJKb.js";import{u as G}from"./hooks-DKJ4_fQr.js";import"./index-BFIarRhn.js";function E(){const l=F({name:"",status:null}),m=o(),s=o([]),u=o(!0),{tagStyle:f}=G(),p=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:a,props:e})=>_(j("el-tag"),{size:e.size,style:f.value(a.status)},{default:()=>[a.status===1?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:a})=>x(a).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:210,slot:"operation"}];function r(a){}function c(a){a&&(a.resetFields(),t())}function t(){return I(this,null,function*(){u.value=!0;const{data:a}=yield B();let e=a;R(l.name)||(e=e.filter(n=>n.name.includes(l.name))),R(l.status)||(e=e.filter(n=>n.status===l.status)),s.value=z(e),setTimeout(()=>{u.value=!1},500)})}function i(a){if(!a||!a.length)return;const e=[];for(let n=0;n<a.length;n++)a[n].disabled=a[n].status===0,i(a[n].children),e.push(a[n]);return e}function H(a="新增",e){var n,d,h,g,b,D,v,k;N({title:`${a}部门`,props:{formInline:{higherDeptOptions:i(P(s.value)),parentId:(n=e==null?void 0:e.parentId)!=null?n:0,name:(d=e==null?void 0:e.name)!=null?d:"",principal:(h=e==null?void 0:e.principal)!=null?h:"",phone:(g=e==null?void 0:e.phone)!=null?g:"",email:(b=e==null?void 0:e.email)!=null?b:"",sort:(D=e==null?void 0:e.sort)!=null?D:0,status:(v=e==null?void 0:e.status)!=null?v:1,remark:(k=e==null?void 0:e.remark)!=null?k:""}},width:"40%",draggable:!0,fullscreen:V(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>q(A,{ref:m}),beforeSure:(S,{options:T})=>{const W=m.value.getRef(),Y=T.props.formInline;function y(){$(`您${a}了部门名称为${Y.name}的这条数据`,{type:"success"}),S(),t()}W.validate(C=>{C&&y()})}})}function M(a){$(`您删除了部门名称为${a.name}的这条数据`,{type:"success"}),t()}return O(()=>{t()}),{form:l,loading:u,columns:p,dataList:s,onSearch:t,resetForm:c,openDialog:H,handleDelete:M,handleSelectionChange:r}}export{E as useDept};
