import{d as x,a as g,b,w as e,e as n,f as v,g as s,h as l,i as t,u as a,t as C,d9 as y,C as T,D as w,_ as k}from"./index-BfJLwqhi.js";import{R as o}from"./index-C41a9UMY.js";const p=c=>(T("data-v-6ab6f715"),c=c(),w(),c),P={class:"card-header"},z={class:"font-medium"},D=p(()=>s("p",{class:"mb-2"},"基础用法",-1)),I={class:"content"},V=p(()=>s("p",{class:"mb-2"},"自定义 Tooltip 内容",-1)),N={class:"mb-2"},S={class:"content"},Y=p(()=>s("b",null,"这是插槽写法: ",-1)),B=p(()=>s("p",{class:"mb-2"},"自定义 el-text 配置",-1)),M={class:"content"},R=p(()=>s("p",{class:"mb-2"},"自定义 VueTippy 配置",-1)),H={class:"content"},j=p(()=>s("p",{class:"mb-2"},"组件嵌套: 不需要省略的需设置 truncated 为 false",-1)),E={class:"content"},q=x({name:"PureText",__name:"text",setup(c){const d=g("自定义tooltip内容"),f=()=>{d.value="现在的时间是: "+y().format("YYYY-MM-DD HH:mm:ss")};return(A,F)=>{const r=n("el-link"),i=n("el-space"),u=n("el-divider"),m=n("el-button"),_=n("el-text"),h=n("el-card");return v(),b(h,{shadow:"never"},{header:e(()=>[s("div",P,[s("span",z,[l(" 文本省略，基于 "),t(r,{href:"https://element-plus.org/zh-CN/component/text.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:e(()=>[l(" el-text ")]),_:1}),l(" 和 "),t(r,{href:"https://vue-tippy.netlify.app/basic-usage",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:e(()=>[l(" VueTippy ")]),_:1}),l(" 自动省略后显示 Tooltip 提示， 支持多行省略 ")])]),t(r,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/text.vue",target:"_blank"},{default:e(()=>[l(" 代码位置 src/views/components/text.vue ")]),_:1})]),default:e(()=>[D,t(i,{wrap:""},{default:e(()=>[s("ul",I,[s("li",null,[t(a(o),null,{default:e(()=>[l(" 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1}),t(a(o),{lineClamp:2},{default:e(()=>[l(" 测试文本，这是一个稍微有点长的文本，lineClamp参数为2，即两行过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(u),V,s("div",N,[t(m,{onClick:f},{default:e(()=>[l(" 点击切换下方 Tooltip 内容 ")]),_:1})]),t(i,{wrap:""},{default:e(()=>[s("ul",S,[s("li",null,[t(a(o),{tippyProps:{content:d.value}},{default:e(()=>[l(" props写法 - 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1},8,["tippyProps"])]),s("li",null,[t(a(o),null,{content:e(()=>[s("div",null,[Y,s("div",null,C(d.value),1)])]),default:e(()=>[l(" 插槽写法 - 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(u),B,t(i,{wrap:""},{default:e(()=>[s("ul",M,[s("li",null,[t(a(o),{type:"primary",size:"large"},{default:e(()=>[l(" 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})]),s("li",null,[t(a(o),{lineClamp:4,type:"info"},{default:e(()=>[l(" 测试文本，这是一个非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长的文本，lineClamp参数为4，即四行过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(u),R,t(i,{wrap:""},{default:e(()=>[s("ul",H,[s("li",null,[t(a(o),{tippyProps:{offset:[0,-20],theme:"light",arrow:!1}},{default:e(()=>[l(" 偏移白色无箭头 - 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})]),s("li",null,[t(a(o),{lineClamp:4,tippyProps:{followCursor:!0}},{default:e(()=>[l(" 鼠标跟随 - 测试文本，这是一个非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长的文本，lineClamp参数为4，即四行过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(u),j,t(i,{wrap:""},{default:e(()=>[s("ul",E,[s("li",null,[t(a(o),{tag:"p",lineClamp:2},{default:e(()=>[l(" This is a paragraph. Paragraph start "),t(a(o),{truncated:!1},{default:e(()=>[l(" 【 This is ReText "),t(a(o),{tag:"sup",size:"small",truncated:!1},{default:e(()=>[l(" superscript 】 ")]),_:1})]),_:1}),t(_,null,{default:e(()=>[l(" 【 This is El-Text "),t(_,{tag:"sub",size:"small"},{default:e(()=>[l(" subscript 】 ")]),_:1})]),_:1}),t(_,{tag:"ins"},{default:e(()=>[l("【Inserted】")]),_:1}),t(_,{tag:"del"},{default:e(()=>[l("【Deleted】")]),_:1}),t(_,{tag:"mark"},{default:e(()=>[l("【Marked】")]),_:1}),l(" Paragraph end. ")]),_:1})])])]),_:1})]),_:1})}}}),K=k(q,[["__scopeId","data-v-6ab6f715"]]);export{K as default};
