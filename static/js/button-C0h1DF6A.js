import{d as _,a as c,b as l,w as e,e as t,f as u,i as m,h as d,g as a}from"./index-BfJLwqhi.js";var i={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const f=a("div",{class:"card-header"},[a("span",{class:"font-medium"},"通过 iframe 引入按钮页面")],-1),p=["src"],I=_({name:"ButtonPage",__name:"button",setup(h){const{VITE_PUBLIC_PATH:n}=i,s=c(`${n}html/button.html`);return(v,E)=>{const o=t("el-link"),r=t("el-card");return u(),l(r,{shadow:"never"},{header:e(()=>[f,m(o,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/button.vue",target:"_blank"},{default:e(()=>[d(" 代码位置 src/views/components/button.vue ")]),_:1})]),default:e(()=>[a("iframe",{src:s.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,p)]),_:1})}}});export{I as default};
