import{useColumns as _}from"./columns-f957fe0d.js";import{_ as v}from"./index-be804494.js";const u=s=>(Vue.pushScopeId("data-v-cc11bd3a"),s=s(),Vue.popScopeId(),s),h=u(()=>Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"\u5173\u4E8E")],-1)),E=u(()=>Vue.createElementVNode("span",{style:{"font-size":"15px"}}," Pure-Admin \u662F\u4E00\u4E2A\u57FA\u4E8EVue3\u3001Vite2\u3001TypeScript\u3001Element-Plus \u7684\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\uFF0C\u63D0\u4F9B\u73B0\u6210\u7684\u5F00\u7BB1\u89E3\u51B3\u65B9\u6848\u53CA\u4E30\u5BCC\u7684\u793A\u4F8B\u3002\u539F\u5219\u4E0A\u4E0D\u6536\u53D6\u4EFB\u4F55\u8D39\u7528\u53CA\u7248\u6743\uFF0C\u53EF\u4EE5\u653E\u5FC3\u4F7F\u7528\uFF0C\u4E0D\u8FC7\u5982\u9700\u4E8C\u6B21\u5F00\u6E90\uFF08\u6BD4\u5982\u7528\u6B64\u5E73\u53F0\u4E8C\u6B21\u5F00\u53D1\u5E76\u5F00\u6E90\uFF09\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u53D6\u8BB8\u53EF\uFF01 ",-1)),f=u(()=>Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"\u9879\u76EE\u4FE1\u606F")],-1)),F=u(()=>Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56")],-1)),g=["href"],y={style:{color:"var(--el-color-primary)"}},b=u(()=>Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56")],-1)),C=["href"],x={style:{color:"var(--el-color-primary)"}},w=Vue.defineComponent({name:"About"}),B=Vue.defineComponent({...w,setup(s){const{pkg:p}={pkg:{dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.0.5","@logicflow/core":"^1.1.30","@logicflow/extension":"^1.1.30","@pureadmin/descriptions":"^1.1.0","@pureadmin/table":"^1.9.0","@pureadmin/utils":"^1.8.5","@vueuse/core":"^9.6.0","@vueuse/motion":"2.0.0-beta.12","@wangeditor/editor":"^5.1.21","@wangeditor/editor-for-vue":"^5.1.12","animate.css":"^4.1.1",axios:"^1.2.0","china-area-data":"^5.0.1",cropperjs:"^1.5.12",dayjs:"^1.11.6",echarts:"^5.4.0","el-table-infinite-scroll":"^3.0.1","element-plus":"^2.2.26","element-resize-detector":"^1.2.4","intro.js":"^6.0.0","js-cookie":"^3.0.1",jsbarcode:"^3.11.5","md-editor-v3":"^2.5.0",mitt:"^3.0.0",mockjs:"^1.1.0",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.0.27",qrcode:"^1.5.1",qs:"^6.11.0","responsive-storage":"^2.1.0",sortablejs:"^1.15.0",swiper:"^8.4.5",typeit:"^8.7.0","v-contextmenu":"3.0.0",vue:"^3.2.45","vue-i18n":"^9.2.2","vue-json-pretty":"^2.2.3","vue-pdf-embed":"^1.1.5","vue-router":"^4.1.6","vue-types":"^4.2.1","vue-virtual-scroller":"^2.0.0-alpha.1","vue3-danmaku":"^1.2.0",vuedraggable:"^4.1.0",xgplayer:"^2.32.1",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"13.1.0","@commitlint/config-conventional":"13.1.0","@iconify-icons/ep":"^1.2.7","@iconify-icons/mdi":"^1.2.8","@iconify-icons/ri":"^1.2.3","@iconify/vue":"^4.0.0","@intlify/vite-plugin-vue-i18n":"^6.0.3","@pureadmin/theme":"^2.4.0","@types/element-resize-detector":"1.1.3","@types/intro.js":"^5.1.0","@types/js-cookie":"^3.0.1","@types/mockjs":"^1.0.7","@types/node":"^18.11.9","@types/nprogress":"0.2.0","@types/qrcode":"^1.4.2","@types/qs":"^6.9.7","@types/sortablejs":"^1.15.0","@typescript-eslint/eslint-plugin":"^5.43.0","@typescript-eslint/parser":"^5.43.0","@vitejs/plugin-vue":"^3.2.0","@vitejs/plugin-vue-jsx":"^2.1.1","@vue/eslint-config-prettier":"^7.0.0","@vue/eslint-config-typescript":"^11.0.2",autoprefixer:"^10.4.13",cloc:"^2.10.0",cssnano:"^5.1.14",eslint:"^8.8.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^9.7.0",husky:"^7.0.4","lint-staged":"11.1.2",picocolors:"^1.0.0",postcss:"^8.4.18","postcss-html":"^1.5.0","postcss-import":"^15.0.0","postcss-scss":"^4.0.5",prettier:"^2.5.1","pretty-quick":"3.1.1",rimraf:"3.0.2","rollup-plugin-visualizer":"^5.8.3",sass:"^1.56.1","sass-loader":"^13.2.0",stylelint:"^14.3.0","stylelint-config-html":"^1.0.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended":"^9.0.0","stylelint-config-standard":"^29.0.0","stylelint-order":"^5.0.0",svgo:"^3.0.2",tailwindcss:"^3.2.4",terser:"^5.15.1",typescript:"^4.9.3","unplugin-vue-define-options":"^1.0.0",vite:"3.1.8","vite-plugin-cdn-import":"^0.3.5","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"^2.9.6","vite-plugin-remove-console":"^1.3.0","vite-svg-loader":"^3.6.0","vue-eslint-parser":"^9.1.0","vue-tsc":"^1.0.9"},name:"vue-pure-admin",version:"3.9.5"},lastBuildTime:"2022-12-13 15:27:14"},{dependencies:i,devDependencies:l}=p,r=[],c=[],{columns:m}=_();return Object.keys(i).forEach(t=>{r.push({field:i[t],label:t})}),Object.keys(l).forEach(t=>{c.push({field:l[t],label:t})}),(t,k)=>{const o=Vue.resolveComponent("el-card"),V=Vue.resolveComponent("PureDescriptions"),a=Vue.resolveComponent("el-descriptions-item"),d=Vue.resolveComponent("el-descriptions");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(o,{class:"box-card mb-4",shadow:"never"},{header:Vue.withCtx(()=>[h]),default:Vue.withCtx(()=>[E]),_:1}),Vue.createVNode(o,{class:"box-card m-4",shadow:"hover"},{header:Vue.withCtx(()=>[f]),default:Vue.withCtx(()=>[Vue.createVNode(V,{columns:Vue.unref(m),border:"",column:3,align:"left"},null,8,["columns"])]),_:1}),Vue.createVNode(o,{class:"box-card m-4",shadow:"hover"},{header:Vue.withCtx(()=>[F]),default:Vue.withCtx(()=>[Vue.createVNode(d,{border:""},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r,(e,n)=>Vue.createVNode(a,{label:e.label,"label-align":"left",align:"left",key:n},{default:Vue.withCtx(()=>[Vue.createElementVNode("a",{href:"https://www.npmjs.com/package/"+e.label,target:"_blank"},[Vue.createElementVNode("span",y,Vue.toDisplayString(e.field),1)],8,g)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),Vue.createVNode(o,{class:"box-card m-4",shadow:"hover"},{header:Vue.withCtx(()=>[b]),default:Vue.withCtx(()=>[Vue.createVNode(d,{border:""},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(c,(e,n)=>Vue.createVNode(a,{label:e.label,"label-align":"left",align:"left",key:n},{default:Vue.withCtx(()=>[Vue.createElementVNode("a",{href:"https://www.npmjs.com/package/"+e.label,target:"_blank"},[Vue.createElementVNode("span",x,Vue.toDisplayString(e.field),1)],8,C)]),_:2},1032,["label"])),64))]),_:1})]),_:1})])}}});const j=v(B,[["__scopeId","data-v-cc11bd3a"]]);export{j as default};
