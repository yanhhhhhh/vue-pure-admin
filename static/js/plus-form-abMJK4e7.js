var Ke=Object.defineProperty,He=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var Ve=(s,o,i)=>o in s?Ke(s,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[o]=i,D=(s,o)=>{for(var i in o||(o={}))Xe.call(o,i)&&Ve(s,i,o[i]);if(ke)for(var i of ke(o))Je.call(o,i)&&Ve(s,i,o[i]);return s},re=(s,o)=>He(s,We(o));var Pe=(s,o,i)=>new Promise((d,n)=>{var b=a=>{try{y(i.next(a))}catch(m){n(m)}},E=a=>{try{y(i.throw(a))}catch(m){n(m)}},y=a=>a.done?d(a.value):Promise.resolve(a.value).then(b,E);y((i=i.apply(s,o)).next())});import{a as T,aF as we,n as W,aX as Le,fv as Ze,p as M,fw as Qe,u as e,cY as xe,d as ee,f as t,b as v,a5 as g,W as L,aq as j,aD as el,r as he,fx as Re,ap as Q,l as A,w as h,b4 as K,k as F,F as N,cd as me,h as H,t as q,j as R,cf as _e,B as Be,fy as Oe,i as x,bN as ve,g as be,v as Ue,cC as ll,a6 as Ce,q as Ee,c0 as de,bk as al,bw as ol,bB as tl,bz as sl,bG as ul,c1 as rl,cg as nl,ck as Ae,cl as Ne,cq as dl,cw as il,cE as pl,cF as cl,cJ as fl,cL as ml,S as w,fz as vl,cD as hl,bR as bl,bY as yl,cI as gl,bZ as je,bC as kl,ci as Vl,dc as Pl,bt as Cl,s as El,bq as Te,bX as Tl,cU as Se}from"./index-DDFqk3Tf.js";import{e as ue,i as z,h as Ie,t as Sl,a as Ge,_ as le,v as ze,j as Il,k as Fe,g as se,l as Fl,b as oe,m as pe,c as ne,n as $l,o as Dl,s as wl,f as ce,d as Ll}from"./_plugin-vue_export-helper-BfCDSgiS.js";const fe=s=>{ue(s)||console.error("Uncaught TypeError: ",`options expected Array but got ${Sl(s)}`)},Rl=s=>{const o=T([]),i=T(!1);if(!s.options)o.value=[],i.value=!0;else if(we(s.options))W(s.options,d=>{o.value=d,i.value=!0},{immediate:!0});else if(ue(s.options))o.value=[...s.options],i.value=!0;else if(z(s.options)){const d=s.options,n=d(s);Ie(n)?n.then(b=>{o.value=b,i.value=!0,fe(o.value)}).catch(b=>{throw b}):(o.value=n,i.value=!0)}else Ie(s.options)?s.options.then(n=>{o.value=n,i.value=!0,fe(o.value)}).catch(n=>{throw n}):(i.value=!0,fe(s.options));return{customOptions:o,customOptionsIsReady:i}},_l=s=>(o,i)=>Bl(o,i,e(s)),Bl=(s,o,i)=>xe(i,s,s).replace(/\{(\w+)\}/g,(d,n)=>{var b;return`${(b=o==null?void 0:o[n])!=null?b:`{${n}}`}`}),Ol=s=>{const o=M(()=>e(s).name),i=we(s)?s:T(s);return{lang:o,locale:i,t:_l(s)}},ie=s=>{const o=Le(Ze,T());return Ol(M(()=>o.value||Qe))},Ul=Symbol("tableFormFieldRefInjectionKey"),Al=["datetimerange","daterange","monthrange"],Nl=["rate","input-number","slider"],jl=["checkbox","cascader","plus-date-picker","plus-input-tag","transfer"];var Gl=ee({name:"PlusRender",__name:"index",props:{renderType:{default:void 0},callbackValue:{default:""},customFieldProps:{default:()=>({})},render:{},params:{default:()=>({})},handleChange:{}},setup(s){const o=s,i=T();W(()=>o.callbackValue,n=>{i.value=n},{flush:"post",immediate:!0});const d=()=>{if(!o.render)return;const n=D({},o.params),b=o.renderType==="form"?o.render(i.value,o.handleChange,n):o.render(i.value,n);if(el(b)){const E=o.renderType==="form"?D(D({modelValue:i.value},o.customFieldProps),b.props):D(D({},o.customFieldProps),b.props);return re(D({},b),{props:E})}else if(Ge(b))return b};return(n,b)=>n.renderType==="form"?(t(),v(L(d),g({key:0,modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=E=>i.value=E)},n.customFieldProps),null,16,["modelValue"])):(t(),v(L(d),j(g({key:1},n.customFieldProps)),null,16))}}),zl=le(Gl,[["__file","index.vue"]]);const $e=zl;var Ml=ee({name:"PlusRadio",__name:"index",props:{modelValue:{type:[String,Number,Boolean],default:""},options:{default:()=>[]},isCancel:{type:Boolean,default:!0},fieldSlots:{default:void 0},fieldChildrenSlot:{default:void 0}},emits:["change","update:modelValue"],setup(s,{expose:o,emit:i}){const d=s,n=i,b=T(),E=T(),y=he({radio:""});W(()=>d.modelValue,f=>{y.radio=f},{immediate:!0});const a=Re(),m=(f,U,p)=>{if(!(Reflect.has(a,"disabled")||p!=null&&p.disabled)){if(d.isCancel)f.preventDefault();else return;y.radio===U?y.radio="":y.radio=U,n("update:modelValue",y.radio),n("change",y.radio)}},k=f=>{d.isCancel||(n("update:modelValue",f),n("change",f))};return o({radioInstance:b,radioGroupInstance:E}),(f,U)=>(t(),v(e(_e),g({ref_key:"radioGroupInstance",ref:E,modelValue:y.radio,"onUpdate:modelValue":U[0]||(U[0]=p=>y.radio=p),class:"plus-radio"},f.$attrs),Q({default:h(()=>[e(ze)?(t(!0),F(N,{key:0},A(f.options,p=>(t(),v(e(me),g({key:`${p.label}${p.value}`,ref_for:!0,ref_key:"radioInstance",ref:b,label:p.value},p.fieldItemProps,{onClick:_=>m(_,p.value,p.fieldItemProps),onChange:_=>k(p.value)}),{default:h(()=>[e(z)(p.fieldSlot)?(t(),v(L(p.fieldSlot),g({key:0,"model-value":y.radio,column:d},p),null,16,["model-value"])):e(z)(f.fieldChildrenSlot)?(t(),v(L(f.fieldChildrenSlot),g({key:1,"model-value":y.radio,column:d},p),null,16,["model-value"])):(t(),F(N,{key:2},[H(q(p==null?void 0:p.label),1)],64))]),_:2},1040,["label","onClick","onChange"]))),128)):(t(),F(N,{key:1},[R(" element-plus 版本号大于等于2.6.0 "),(t(!0),F(N,null,A(f.options,p=>(t(),v(e(me),g({key:`${p.label}${p.value}`,ref_for:!0,ref_key:"radioInstance",ref:b,value:p.value},p.fieldItemProps,{onClick:_=>m(_,p.value,p.fieldItemProps),onChange:_=>k(p.value)}),{default:h(()=>[e(z)(p.fieldSlot)?(t(),v(L(p.fieldSlot),g({key:0,"model-value":y.radio,column:d},p),null,16,["model-value"])):e(z)(f.fieldChildrenSlot)?(t(),v(L(f.fieldChildrenSlot),g({key:1,"model-value":y.radio,column:d},p),null,16,["model-value"])):(t(),F(N,{key:2},[H(q(p==null?void 0:p.label),1)],64))]),_:2},1040,["value","onClick","onChange"]))),128))],64))]),_:2},[A(f.fieldSlots,(p,_)=>({name:_,fn:h(P=>[(t(),v(L(p),j(K(P)),null,16))])}))]),1040,["modelValue"]))}}),Yl=le(Ml,[["__file","index.vue"]]);const ql=Yl,Kl={class:"plus-date-picker__middle"};var Hl=ee({name:"PlusDatePicker",__name:"index",props:{modelValue:{default:()=>[]},rangeSeparator:{default:"/"},valueFormat:{default:"YYYY-MM-DD HH:mm:ss"},type:{default:"datetime"},startProps:{default:()=>({})},endProps:{default:()=>({})},startDisabledDate:{type:Function,default:(s,o)=>o?s.getTime()>new Date(o).getTime():!1},endDisabledDate:{type:Function,default:(s,o)=>o?s.getTime()<new Date(o).getTime():!1}},emits:["change","focus","update:modelValue"],setup(s,{expose:o,emit:i}){const d=s,n=i,{t:b}=ie(),E=Re(),y=M(()=>D(D({},E),d.startProps)),a=M(()=>D(D({},E),d.endProps)),m=T(),k=T(),f=he({start:"",end:""}),U=T(!1),p=c=>{U.value=!0,n("focus",c)},_=()=>{U.value=!1},P=c=>d.startDisabledDate&&z(d.startDisabledDate)?d.startDisabledDate(c,f.end):!1,I=c=>d.endDisabledDate&&z(d.endDisabledDate)?d.endDisabledDate(c,f.start):!1;W(()=>d.modelValue,c=>{const[Y,G]=c;f.start=Y,f.end=G},{immediate:!0});const V=()=>{const c=[f.start,f.end];n("update:modelValue",c),n("change",c)};return o({startPickerInstance:m,endPickerInstance:k}),(c,Y)=>Be((t(),F("div",{class:Ue(["plus-date-picker",{"is-focus":U.value}])},[x(e(ve),g({ref_key:"startPickerInstance",ref:m,modelValue:f.start,"onUpdate:modelValue":Y[0]||(Y[0]=G=>f.start=G),type:c.type,"value-format":c.valueFormat,placeholder:e(b)("plus.datepicker.startPlaceholder"),"disabled-date":P,class:"plus-date-picker__start",clearable:""},y.value,{onChange:V,onFocus:p}),null,16,["modelValue","type","value-format","placeholder"]),be("span",Kl,q(c.rangeSeparator),1),x(e(ve),g({ref_key:"endPickerInstance",ref:k,modelValue:f.end,"onUpdate:modelValue":Y[1]||(Y[1]=G=>f.end=G),"value-format":c.valueFormat,type:c.type,placeholder:e(b)("plus.datepicker.endPlaceholder"),"disabled-date":I,class:"plus-date-picker__end",clearable:""},a.value,{onChange:V,onFocus:p}),null,16,["modelValue","value-format","type","placeholder"])],2)),[[e(Oe),_]])}}),Wl=le(Hl,[["__file","index.vue"]]);const Xl=Wl;var Jl=ee({name:"PlusInputTag",__name:"index",props:{modelValue:{default:()=>[]},trigger:{default:()=>["blur","enter","space"]},inputProps:{default:()=>({})},tagProps:{default:()=>({})},limit:{default:1/0},formatTag:{type:Function,default:void 0},retainInputValue:{type:Boolean,default:!1}},emits:["update:modelValue","change","remove","blur","enter","space"],setup(s,{expose:o,emit:i}){const d=s,n=i,b=T(),E=T(),y=T(),a=he({tags:[],inputValue:"",isFocus:!1}),{t:m}=ie();W(()=>d.modelValue,P=>{a.tags=P.slice(0,d.limit)},{immediate:!0});const k=()=>{a.isFocus=!1},f=()=>{var P;a.isFocus=!0,(P=b.value)==null||P.focus()},U=P=>{a.tags=a.tags.filter(I=>I!==P),n("remove",P),n("update:modelValue",a.tags),n("change",a.tags)},p=()=>{a.inputValue.trim()&&!a.tags.includes(a.inputValue.trim())&&a.tags.length<d.limit&&a.tags.push(a.inputValue.trim()),d.retainInputValue||(a.inputValue=""),n("update:modelValue",a.tags),n("change",a.tags)},_=(P,I)=>{n(I,a.inputValue,P),(ue(d.trigger)?d.trigger:Ge(d.trigger)?[d.trigger]:["blur","enter","space"]).includes(I)&&p()};return o({inputInstance:b,tagInstance:E}),(P,I)=>Be((t(),F("div",{ref_key:"plusInputTagInstance",ref:y,class:Ue(["plus-input-tag",{"is-focus":a.isFocus}]),onClick:f},[(t(!0),F(N,null,A(a.tags,V=>(t(),v(e(ll),g({ref_for:!0,ref_key:"tagInstance",ref:E,key:V,class:"plus-input-tag__tag"},P.tagProps,{closable:"",onClose:c=>U(V)}),{default:h(()=>[H(q(P.formatTag&&e(z)(P.formatTag)?P.formatTag(V):V),1)]),_:2},1040,["onClose"]))),128)),a.tags.length<P.limit?(t(),v(e(de),g({key:0,ref_key:"inputInstance",ref:b,modelValue:a.inputValue,"onUpdate:modelValue":I[0]||(I[0]=V=>a.inputValue=V),class:"plus-input-tag__input",placeholder:a.tags.length?"":e(m)("plus.inputTag.placeholder"),disabled:a.tags.length>=P.limit},P.inputProps,{clearable:"",onBlur:I[1]||(I[1]=V=>_(V,"blur")),onKeyup:[I[2]||(I[2]=Ce(Ee(V=>_(V,"enter"),["exact"]),["enter"])),I[3]||(I[3]=Ce(Ee(V=>_(V,"space"),["exact"]),["space"]))]}),null,16,["modelValue","placeholder","disabled"])):R("v-if",!0)],2)),[[e(Oe),k]])}}),Zl=le(Jl,[["__file","index.vue"]]);const Ql=Zl,Me={"plus-radio":{component:ql,hasOptions:!0},"plus-date-picker":{component:Xl},"plus-input-tag":{component:Ql},autocomplete:{component:al,props:{placeholder:"plus.field.pleaseEnter"},hasSelectEvent:!0},cascader:{component:ol,hasOptions:!0},checkbox:{component:tl,children:sl,hasVersionCompatibility:!0},"color-picker":{component:ul},"date-picker":{component:ve,props:{startPlaceholder:"plus.datepicker.startPlaceholder",endPlaceholder:"plus.datepicker.endPlaceholder"}},"input-number":{component:rl,props:{placeholder:"plus.field.pleaseEnter"}},radio:{component:_e,children:me,hasVersionCompatibility:!0},rate:{component:nl},select:{component:Ae,children:Ne},slider:{component:dl},switch:{component:il},"time-picker":{component:pl},"time-select":{component:cl},transfer:{component:fl},input:{component:de,props:{placeholder:"plus.field.pleaseEnter"}},textarea:{component:de,props:{type:"textarea",placeholder:"plus.field.pleaseEnter"}},"tree-select":{component:ml}},xl=s=>Object.keys(Me).includes(s),te=s=>Reflect.get(Me,s)||{},ea={class:"plus-form-item__label"};var la=ee({name:"PlusFormItem",__name:"index",props:{modelValue:{default:""},hasLabel:{default:!0},label:{default:""},prop:{},fieldProps:{default:()=>({})},valueType:{default:void 0},options:{default:()=>[]},formItemProps:{default:()=>({})},renderField:{default:void 0},renderLabel:{default:void 0},tooltip:{default:""},fieldSlots:{default:()=>({})},fieldChildrenSlot:{default:void 0},index:{default:0}},emits:["update:modelValue","change"],setup(s,{expose:o,emit:i}){const d=yl,n=gl,b=je,E=de,y=Ae,a=Ne,m=s,k=i,{t:f}=ie(),{customOptions:U,customOptionsIsReady:p}=Rl(m),_=T(),P=T(),I=T({}),V=T({}),c=T(),Y=T(!1),G=T(!1),r=M(()=>Il(m.label)),S=M(()=>re(D({},m),{label:r.value})),B=Le(Ul,{}),$=M(()=>{var l,C,u,X,J,ge;return m.valueType==="cascader"&&((C=(l=V.value)==null?void 0:l.props)==null?void 0:C.emitPath)===!1?!1:!!(jl.includes(m.valueType)||m.valueType==="select"&&((u=V.value)==null?void 0:u.multiple)===!0||m.valueType==="date-picker"&&Al.includes((X=V.value)==null?void 0:X.type)||m.valueType==="time-picker"&&((J=V.value)==null?void 0:J.isRange)===!0||m.valueType==="tree-select"&&((ge=V.value)==null?void 0:ge.multiple)===!0)}),O=M(()=>!!Nl.includes(m.valueType)),Z=l=>{if($.value)if(ue(l)){const[C,u]=l;pe(C)||pe(u)?c.value=[String(C),String(u)]:c.value=l}else c.value=[];else O.value?c.value=Number(l):pe(l)?c.value=String(l):c.value=l;G.value=!0},ye=M(()=>{const{hasOptions:l,hasSelectEvent:C,props:u}=te(m.valueType);return D(D(re(D(D(D({},l?{options:U.value}:null),C?{onSelect:qe}:null),u),{placeholder:u!=null&&u.placeholder?f(u==null?void 0:u.placeholder)+r.value:f("plus.field.pleaseSelect")+r.value}),m.valueType==="date-picker"?{startPlaceholder:u!=null&&u.startPlaceholder?f(u==null?void 0:u.startPlaceholder):"",endPlaceholder:u!=null&&u.startPlaceholder?f(u==null?void 0:u.endPlaceholder):""}:null),V.value)}),Ye=l=>D(D({},m.valueType==="select"?{label:l.label,value:l.value}:ze?{label:l.value}:{label:l.label,value:l.value}),l.fieldItemProps);W(()=>m.formItemProps,l=>{Fe(l,c.value,m,m.index,"formItemProps").then(C=>{I.value=C}).catch(C=>{throw C})},{immediate:!0,deep:!0}),W(()=>m.fieldProps,l=>{Fe(l,c.value,m,m.index,"fieldProps").then(C=>{V.value=C,Y.value=!0}).catch(C=>{throw C})},{immediate:!0,deep:!0}),W(M(()=>[m.modelValue,Y.value,p.value]),([l,C,u])=>{C&&u&&Z(l)},{immediate:!0,flush:"post"});const ae=l=>{k("update:modelValue",l),k("change",l)},qe=({value:l})=>{ae(l)};return W(P,()=>{B.value={fieldInstance:P.value,valueIsReady:G}}),o({formItemInstance:_,fieldInstance:P}),(l,C)=>G.value?(t(),v(e(d),g({key:0,ref_key:"formItemInstance",ref:_,label:l.hasLabel?r.value:"",prop:l.prop,class:"plus-form-item"},I.value),Q({default:h(()=>[l.renderField&&e(z)(l.renderField)?(t(),F(N,{key:0},[G.value?(t(),v(e($e),{key:0,render:l.renderField,params:S.value,"callback-value":c.value,"custom-field-props":V.value,"render-type":"form","handle-change":ae},null,8,["render","params","callback-value","custom-field-props"])):R("v-if",!0)],64)):l.$slots[e(oe)(l.prop)]?w(l.$slots,e(oe)(l.prop),{key:1,prop:l.prop,label:r.value,fieldProps:V.value,valueType:l.valueType,column:m}):l.valueType==="select"&&V.value.multiple===!0?(t(),v(e(y),g({key:2,ref_key:"fieldInstance",ref:P,modelValue:c.value,"onUpdate:modelValue":C[0]||(C[0]=u=>c.value=u),placeholder:e(f)("plus.field.pleaseSelect")+r.value,class:"plus-form-item-field",clearable:""},V.value,{"onUpdate:modelValue":ae}),Q({default:h(()=>[(t(!0),F(N,null,A(e(U),u=>(t(),v(e(a),g({key:u.label,label:u.label,value:u.value},u.fieldItemProps),{default:h(()=>[e(z)(u.fieldSlot)?(t(),v(L(u.fieldSlot),j(g({key:0},u)),null,16)):e(z)(l.fieldChildrenSlot)?(t(),v(L(l.fieldChildrenSlot),j(g({key:1},u)),null,16)):(t(),F(N,{key:2},[H(q(u.label),1)],64))]),_:2},1040,["label","value"]))),128))]),_:2},[A(l.fieldSlots,(u,X)=>({name:X,fn:h(J=>[(t(),v(L(u),j(K(J)),null,16))])}))]),1040,["modelValue","placeholder"])):e(xl)(l.valueType)?(t(),F(N,{key:3},[R(" 统一处理 "),R(" has-children  "),e(te)(l.valueType).children?(t(),v(L(e(te)(l.valueType).component),g({key:0,ref_key:"fieldInstance",ref:P,modelValue:c.value,"onUpdate:modelValue":C[1]||(C[1]=u=>c.value=u),class:"plus-form-item-field",clearable:""},ye.value,{"onUpdate:modelValue":ae}),Q({default:h(()=>[(t(!0),F(N,null,A(e(U),u=>(t(),v(L(e(te)(l.valueType).children),g({key:u.label},Ye(u)),{default:h(()=>[e(z)(u.fieldSlot)?(t(),v(L(u.fieldSlot),g({key:0,"model-value":c.value,column:S.value},u),null,16,["model-value","column"])):e(z)(l.fieldChildrenSlot)?(t(),v(L(l.fieldChildrenSlot),g({key:1,"model-value":c.value,column:S.value},u),null,16,["model-value","column"])):(t(),F(N,{key:2},[H(q(u.label),1)],64))]),_:2},1040))),128))]),_:2},[A(l.fieldSlots,(u,X)=>({name:X,fn:h(J=>[(t(),v(L(u),g({value:c.value,column:S.value},J),null,16,["value","column"]))])}))]),1040,["modelValue"])):(t(),F(N,{key:1},[R(" no-children  "),(t(),v(L(e(te)(l.valueType).component),g({ref_key:"fieldInstance",ref:P,modelValue:c.value,"onUpdate:modelValue":C[2]||(C[2]=u=>c.value=u),class:"plus-form-item-field",clearable:"","field-children-slot":l.fieldChildrenSlot},ye.value,{"onUpdate:modelValue":ae}),Q({_:2},[A(l.fieldSlots,(u,X)=>({name:X,fn:h(J=>[(t(),v(L(u),g({"model-value":c.value,column:S.value},J),null,16,["model-value","column"]))])}))]),1040,["modelValue","field-children-slot"]))],2112))],64)):l.valueType==="text"?(t(),v(e(hl),g({key:4,ref_key:"fieldInstance",ref:P,class:"plus-form-item-field"},V.value),{default:h(()=>[H(q(c.value),1)]),_:1},16)):l.valueType==="divider"?(t(),v(e(bl),g({key:5,ref_key:"fieldInstance",ref:P,class:"plus-form-item-field"},V.value),{default:h(()=>[H(q(c.value),1)]),_:1},16)):(t(),v(e(E),g({key:6,ref_key:"fieldInstance",ref:P,modelValue:c.value,"onUpdate:modelValue":C[3]||(C[3]=u=>c.value=u),class:"plus-form-item-field",placeholder:e(f)("plus.field.pleaseEnter")+r.value,autocomplete:"off",clearable:""},V.value,{"onUpdate:modelValue":ae}),Q({_:2},[A(l.fieldSlots,(u,X)=>({name:X,fn:h(J=>[(t(),v(L(u),g({"model-value":c.value,column:S.value},J),null,16,["model-value","column"]))])}))]),1040,["modelValue","placeholder"]))]),_:2},[l.hasLabel?{name:"label",fn:h(({label:u})=>[be("span",ea,[l.renderLabel&&e(z)(l.renderLabel)?(t(),F(N,{key:0},[G.value?(t(),v(e($e),{key:0,render:l.renderLabel,params:S.value,"callback-value":u,"custom-field-props":V.value},null,8,["render","params","callback-value","custom-field-props"])):R("v-if",!0)],64)):w(l.$slots,e(se)(l.prop),{key:1,prop:l.prop,label:r.value,fieldProps:V.value,valueType:l.valueType,column:S.value},()=>[H(q(u),1)]),l.tooltip?(t(),v(e(n),g({key:2,placement:"top"},e(Fl)(l.tooltip)),{default:h(()=>[w(l.$slots,"tooltip-icon",{},()=>[x(e(b),{class:"plus-table-column__label__icon",size:16},{default:h(()=>[x(e(vl))]),_:1})])]),_:3},16)):R("v-if",!0)])]),key:"0"}:void 0]),1040,["label","prop"])):R("v-if",!0)}}),aa=le(la,[["__file","index.vue"]]);const oa=aa,ta={key:0,class:"plus-form-item-extra"};var sa=ee({name:"PlusFormContent",__name:"form-content",props:{modelValue:{default:()=>({})},hasLabel:{type:Boolean,default:!0},columns:{default:()=>[]},rowProps:{default:()=>({})},colProps:{default:()=>({})}},emits:["update:modelValue","change"],setup(s,{emit:o}){const i=s,d=o,n=T({}),b=a=>{const m=e(a);return $l(m)?m:i.hasLabel};W(()=>i.modelValue,a=>{n.value=a},{immediate:!0});const E=a=>Dl(n.value,a),y=(a,m)=>{wl(n.value,m.prop,a),d("update:modelValue",n.value),d("change",n.value,m)};return(a,m)=>(t(),v(e(Vl),g(a.rowProps,{class:"plus-form__row"}),{default:h(()=>[(t(!0),F(N,null,A(a.columns,k=>(t(),v(e(kl),g({key:k.prop},k.colProps||a.colProps),{default:h(()=>[x(e(oa),g({"model-value":E(k.prop)},k,{"has-label":b(k.hasLabel),"label-width":b(k.hasLabel)?k.labelWidth:"0px",onChange:f=>y(f,k)}),Q({_:2},[a.$slots[e(se)(k.prop)]?{name:e(se)(k.prop),fn:h(f=>[w(a.$slots,e(se)(k.prop),j(K(f)))]),key:"0"}:void 0,a.$slots[e(oe)(k.prop)]?{name:e(oe)(k.prop),fn:h(f=>[w(a.$slots,e(oe)(k.prop),j(K(f)))]),key:"1"}:void 0,a.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:h(()=>[w(a.$slots,"tooltip-icon")]),key:"2"}:void 0]),1040,["model-value","has-label","label-width","onChange"]),R(" el-form-item 下一行额外的内容 "),k.renderExtra||a.$slots[e(ne)(k.prop)]?(t(),F("div",ta,[k.renderExtra&&e(z)(k.renderExtra)?(t(),v(L(k.renderExtra),j(g({key:0},k)),null,16)):a.$slots[e(ne)(k.prop)]?w(a.$slots,e(ne)(k.prop),j(g({key:1},k))):R("v-if",!0)])):R("v-if",!0)]),_:2},1040))),128)),R(" 搜索的footer插槽  "),w(a.$slots,"search-footer")]),_:3},16))}}),De=le(sa,[["__file","form-content.vue"]]);const ua={class:"plus-form__group__item__icon"};var ra=ee({name:"PlusForm",__name:"index",props:{modelValue:{default:()=>({})},defaultValues:{default:()=>({})},columns:{default:()=>[]},labelWidth:{default:"80px"},labelPosition:{default:"left"},rowProps:{default:()=>({})},colProps:{default:()=>({})},labelSuffix:{default:":"},hasErrorTip:{type:Boolean,default:!0},hasFooter:{type:Boolean,default:!0},hasReset:{type:Boolean,default:!0},hasLabel:{type:Boolean,default:!0},submitText:{default:""},resetText:{default:""},submitLoading:{type:Boolean,default:!1},footerAlign:{default:"left"},rules:{default:()=>({})},group:{type:[Boolean,Array],default:!1},cardProps:{default:()=>({})}},emits:["update:modelValue","submit","change","reset","submitError"],setup(s,{expose:o,emit:i}){const d=s,n=i,{t:b}=ie(),E=T(null),y=T({}),a=r=>r.filter(S=>e(S.hideInForm)!==!0),m=M(()=>y.value),k=M(()=>({justifyContent:d.footerAlign==="left"?"flex-start":d.footerAlign==="center"?"center":"flex-end"})),f=M(()=>a(d.columns)),U=M(()=>{var r;return ue(d.group)?(r=d.group)==null?void 0:r.filter(S=>e(S.hideInGroup)!==!0):d.group}),p=Pl(),_=ce(p,se()),P=ce(p,oe()),I=ce(p,ne());W(()=>d.modelValue,r=>{y.value=r},{immediate:!0});const V=(r,S)=>{n("update:modelValue",y.value),n("change",y.value,S)},c=()=>{var r;(r=E.value)==null||r.clearValidate()},Y=()=>Pe(this,null,function*(){var r,S,B;try{if(yield(r=E.value)==null?void 0:r.validate())return n("submit",y.value),!0}catch($){if(d.hasErrorTip){Se.closeAll();const O=Ll($)&&Object.values($),Z=O?(B=(S=O[0])==null?void 0:S[0])==null?void 0:B.message:void 0;Se.warning(Z||b("plus.form.errorTip"))}n("submitError",$)}return!1}),G=()=>{c(),y.value=D({},d.defaultValues),n("update:modelValue",y.value),n("reset",y.value)};return o({formInstance:E,handleSubmit:Y,handleReset:G}),(r,S)=>(t(),v(e(Tl),g({ref_key:"formInstance",ref:E,rules:r.rules,"label-width":r.hasLabel?r.labelWidth:0,class:["plus-form",r.hasLabel?"":"no-has-label"],"label-position":r.labelPosition,"validate-on-rule-change":!1,"label-suffix":r.hasLabel?r.labelSuffix:""},r.$attrs,{model:m.value}),{default:h(()=>[w(r.$slots,"default",{},()=>[R(" 分组表单 "),U.value?(t(!0),F(N,{key:0},A(U.value,B=>(t(),v(e(Cl),g({key:B.title},B.cardProps||r.cardProps,{class:"plus-form__group__item"}),{header:h(()=>[w(r.$slots,"group-header",{title:B.title,columns:B.columns,icon:B.icon},()=>[be("div",ua,[B.icon?(t(),v(e(je),{key:0},{default:h(()=>[(t(),v(L(B.icon)))]),_:2},1024)):R("v-if",!0),H(" "+q(B.title),1)])])]),default:h(()=>[x(De,{modelValue:y.value,"onUpdate:modelValue":S[0]||(S[0]=$=>y.value=$),"row-props":r.rowProps,"col-props":r.colProps,columns:a(B.columns),onChange:V},Q({_:2},[A(e(_),($,O)=>({name:O,fn:h(Z=>[w(r.$slots,O,j(K(Z)))])})),A(e(P),($,O)=>({name:O,fn:h(Z=>[w(r.$slots,O,j(K(Z)))])})),A(e(I),($,O)=>({name:O,fn:h(Z=>[w(r.$slots,O,j(K(Z)))])})),r.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:h(()=>[w(r.$slots,"tooltip-icon")]),key:"0"}:void 0]),1032,["modelValue","row-props","col-props","columns"])]),_:2},1040))),128)):(t(),F(N,{key:1},[R(" 普通表单 "),x(De,{modelValue:y.value,"onUpdate:modelValue":S[1]||(S[1]=B=>y.value=B),"row-props":r.rowProps,"col-props":r.colProps,columns:f.value,"has-label":r.hasLabel,onChange:V},Q({_:2},[A(e(_),(B,$)=>({name:$,fn:h(O=>[w(r.$slots,$,j(K(O)))])})),A(e(P),(B,$)=>({name:$,fn:h(O=>[w(r.$slots,$,j(K(O)))])})),A(e(I),(B,$)=>({name:$,fn:h(O=>[w(r.$slots,$,j(K(O)))])})),r.$slots["search-footer"]?{name:"search-footer",fn:h(()=>[w(r.$slots,"search-footer")]),key:"0"}:void 0,r.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:h(()=>[w(r.$slots,"tooltip-icon")]),key:"1"}:void 0]),1032,["modelValue","row-props","col-props","columns","has-label"])],64))]),r.hasFooter?(t(),F("div",{key:0,class:"plus-form__footer",style:El(k.value)},[w(r.$slots,"footer",j(K({handleReset:G,handleSubmit:Y})),()=>[r.hasReset?(t(),v(e(Te),{key:0,onClick:G},{default:h(()=>[R(" 重置 "),H(" "+q(r.resetText||e(b)("plus.form.resetText")),1)]),_:1})):R("v-if",!0),x(e(Te),{type:"primary",loading:r.submitLoading,onClick:Y},{default:h(()=>[R(" 提交 "),H(" "+q(r.submitText||e(b)("plus.form.submitText")),1)]),_:1},8,["loading"])])],4)):R("v-if",!0)]),_:3},16,["rules","label-width","class","label-position","label-suffix","model"]))}}),na=le(ra,[["__file","index.vue"]]);const ca=na;export{ca as P,ie as u};
