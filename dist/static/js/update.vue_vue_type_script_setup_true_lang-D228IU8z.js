var U=(k,s,n)=>new Promise((r,u)=>{var V=d=>{try{m(n.next(d))}catch(c){u(c)}},_=d=>{try{m(n.throw(d))}catch(c){u(c)}},m=d=>d.done?r(d.value):Promise.resolve(d.value).then(V,_);m((n=n.apply(k,s)).next())});import{M as f}from"./motion-BearIZcZ.js";import{d as E,Z as S,a as P,r as T,e as g,f as $,b as z,w as a,h as o,u as e,l as D,g as x,t as C,af as b,fv as h,L as F,fN as I}from"./index-BXHkKmv3.js";import{u as R,a as M}from"./verifyCode-DI6uV6N4.js";import{u as y}from"./hooks-CFzL8YXt.js";import{d as N}from"./lock-fill-BZPnsoM7.js";import{d as j}from"./iphone-CgGaW-_Y.js";const A={class:"w-full flex justify-between"},O=E({__name:"update",setup(k){const{t:s}=S(),n=P(!1),r=T({phone:"",verifyCode:"",password:"",repeatPassword:""}),u=P(),{isDisabled:V,text:_}=R(),m=[{validator:(w,l,t)=>{l===""?t(new Error(b(h("login.passwordSureReg")))):r.password!==l?t(new Error(b(h("login.passwordDifferentReg")))):t()},trigger:"blur"}],d=w=>U(this,null,function*(){n.value=!0,w&&(yield w.validate((l,t)=>{if(l)setTimeout(()=>{F(b(h("login.passwordUpdateReg")),{type:"success"}),n.value=!1},2e3);else return n.value=!1,t}))});function c(){R().end(),I().SET_CURRENTPAGE(0)}return(w,l)=>{const t=g("el-input"),p=g("el-form-item"),v=g("el-button"),B=g("el-form");return $(),z(B,{ref_key:"ruleFormRef",ref:u,model:r,rules:e(M),size:"large"},{default:a(()=>[o(e(f),null,{default:a(()=>[o(p,{prop:"phone"},{default:a(()=>[o(t,{modelValue:r.phone,"onUpdate:modelValue":l[0]||(l[0]=i=>r.phone=i),clearable:"",placeholder:e(s)("login.phone"),"prefix-icon":e(y)(e(j))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:100},{default:a(()=>[o(p,{prop:"verifyCode"},{default:a(()=>[D("div",A,[o(t,{modelValue:r.verifyCode,"onUpdate:modelValue":l[1]||(l[1]=i=>r.verifyCode=i),clearable:"",placeholder:e(s)("login.smsVerifyCode"),"prefix-icon":e(y)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),o(v,{disabled:e(V),class:"ml-2",onClick:l[2]||(l[2]=i=>e(R)().start(u.value,"phone"))},{default:a(()=>[x(C(e(_).length>0?e(_)+e(s)("login.info"):e(s)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(f),{delay:150},{default:a(()=>[o(p,{prop:"password"},{default:a(()=>[o(t,{modelValue:r.password,"onUpdate:modelValue":l[3]||(l[3]=i=>r.password=i),clearable:"","show-password":"",placeholder:e(s)("login.password"),"prefix-icon":e(y)(e(N))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:200},{default:a(()=>[o(p,{rules:m,prop:"repeatPassword"},{default:a(()=>[o(t,{modelValue:r.repeatPassword,"onUpdate:modelValue":l[4]||(l[4]=i=>r.repeatPassword=i),clearable:"","show-password":"",placeholder:e(s)("login.sure"),"prefix-icon":e(y)(e(N))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:250},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",type:"primary",loading:n.value,onClick:l[5]||(l[5]=i=>d(u.value))},{default:a(()=>[x(C(e(s)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(f),{delay:300},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",onClick:c},{default:a(()=>[x(C(e(s)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{O as _};