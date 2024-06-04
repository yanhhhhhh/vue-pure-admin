var U=(R,s,d)=>new Promise((f,r)=>{var c=n=>{try{m(d.next(n))}catch(g){r(g)}},b=n=>{try{m(d.throw(n))}catch(g){r(g)}},m=n=>n.done?f(n.value):Promise.resolve(n.value).then(c,b);m((d=d.apply(R,s)).next())});import{M as p}from"./motion-CZEfGeOn.js";import{d as E,U as I,a as k,r as N,e as _,f as z,b as F,w as o,i as l,u as e,ac as y,fC as w,g as M,h as v,t as V,L as S,fY as A}from"./index-DDFqk3Tf.js";import{u as P,a as G}from"./verifyCode-iBWT6Frx.js";import{u as x}from"./hooks-CGCmHbsX.js";import{d as B}from"./lock-fill-BZPnsoM7.js";import{d as H}from"./iphone-CgGaW-_Y.js";const L={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},W={class:"w-full flex justify-between"},Q=E({__name:"LoginRegist",setup(R){const{t:s}=I(),d=k(!1),f=k(!1),r=N({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),c=k(),{isDisabled:b,text:m}=P(),n=[{validator:(h,a,u)=>{a===""?u(new Error(y(w("login.purePassWordSureReg")))):r.password!==a?u(new Error(y(w("login.purePassWordDifferentReg")))):u()},trigger:"blur"}],g=h=>U(this,null,function*(){f.value=!0,h&&(yield h.validate(a=>{a?d.value?setTimeout(()=>{S(y(w("login.pureRegisterSuccess")),{type:"success"}),f.value=!1},2e3):(f.value=!1,S(y(w("login.pureTickPrivacy")),{type:"warning"})):f.value=!1}))});function T(){P().end(),A().SET_CURRENTPAGE(0)}return(h,a)=>{const u=_("el-input"),i=_("el-form-item"),C=_("el-button"),$=_("el-checkbox"),D=_("el-form");return z(),F(D,{ref_key:"ruleFormRef",ref:c,model:r,rules:e(G),size:"large"},{default:o(()=>[l(e(p),null,{default:o(()=>[l(i,{rules:[{required:!0,message:e(y)(e(w)("login.pureUsernameReg")),trigger:"blur"}],prop:"username"},{default:o(()=>[l(u,{modelValue:r.username,"onUpdate:modelValue":a[0]||(a[0]=t=>r.username=t),clearable:"",placeholder:e(s)("login.pureUsername"),"prefix-icon":e(x)(e(L))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])]),_:1}),l(e(p),{delay:100},{default:o(()=>[l(i,{prop:"phone"},{default:o(()=>[l(u,{modelValue:r.phone,"onUpdate:modelValue":a[1]||(a[1]=t=>r.phone=t),clearable:"",placeholder:e(s)("login.purePhone"),"prefix-icon":e(x)(e(H))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(p),{delay:150},{default:o(()=>[l(i,{prop:"verifyCode"},{default:o(()=>[M("div",W,[l(u,{modelValue:r.verifyCode,"onUpdate:modelValue":a[2]||(a[2]=t=>r.verifyCode=t),clearable:"",placeholder:e(s)("login.pureSmsVerifyCode"),"prefix-icon":e(x)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),l(C,{disabled:e(b),class:"ml-2",onClick:a[3]||(a[3]=t=>e(P)().start(c.value,"phone"))},{default:o(()=>[v(V(e(m).length>0?e(m)+e(s)("login.pureInfo"):e(s)("login.pureGetVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),l(e(p),{delay:200},{default:o(()=>[l(i,{prop:"password"},{default:o(()=>[l(u,{modelValue:r.password,"onUpdate:modelValue":a[4]||(a[4]=t=>r.password=t),clearable:"","show-password":"",placeholder:e(s)("login.purePassword"),"prefix-icon":e(x)(e(B))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(p),{delay:250},{default:o(()=>[l(i,{rules:n,prop:"repeatPassword"},{default:o(()=>[l(u,{modelValue:r.repeatPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>r.repeatPassword=t),clearable:"","show-password":"",placeholder:e(s)("login.pureSure"),"prefix-icon":e(x)(e(B))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(p),{delay:300},{default:o(()=>[l(i,null,{default:o(()=>[l($,{modelValue:d.value,"onUpdate:modelValue":a[6]||(a[6]=t=>d.value=t)},{default:o(()=>[v(V(e(s)("login.pureReadAccept")),1)]),_:1},8,["modelValue"]),l(C,{link:"",type:"primary"},{default:o(()=>[v(V(e(s)("login.purePrivacyPolicy")),1)]),_:1})]),_:1})]),_:1}),l(e(p),{delay:350},{default:o(()=>[l(i,null,{default:o(()=>[l(C,{class:"w-full",size:"default",type:"primary",loading:f.value,onClick:a[7]||(a[7]=t=>g(c.value))},{default:o(()=>[v(V(e(s)("login.pureDefinite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),l(e(p),{delay:400},{default:o(()=>[l(i,null,{default:o(()=>[l(C,{class:"w-full",size:"default",onClick:T},{default:o(()=>[v(V(e(s)("login.pureBack")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{Q as _,L as d};
