import{al as $,r as A,G as Pe,X as Le,d2 as je,a as Oe,dI as J,j as I,c as Y,dK as _e,dw as Ne,dz as Ue,q as _,dJ as We,b6 as ze,a5 as z,M as G,dL as Fe,dM as $e,dN as Ye,dO as Ge,F as qe}from"./index.js";import{_ as He}from"./role.vue_vue_type_script_setup_true_lang.js";import{_ as Be}from"./index.vue_vue_type_script_setup_true_lang16.js";import{_ as Ve}from"./upload.vue_vue_type_script_setup_true_lang.js";import{u as Ze}from"./hooks2.js";import{g as Xe,b as Ke,c as Je,d as Qe}from"./system.js";import"./index65.js";import"./index63.js";import"./vue-tippy.esm-browser.js";const B=(r,e)=>r.push.apply(r,e),O=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),Q=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var et={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const ee=2050,te=1e3,tt=et,st=10,nt=1e4,oe=10,ce=50,le=20,ue=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,rt=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,at=/^[A-Z\xbf-\xdf]+$/,he=/^[^a-z\xdf-\xff]+$/,it=/^[a-z\xdf-\xff]+$/,ot=/^[^A-Z\xbf-\xdf]+$/,ct=/[a-z\xdf-\xff]/,lt=/[A-Z\xbf-\xdf]/,ut=/[^A-Za-z\xbf-\xdf]/gi,ht=/^\d+$/,Z=new Date().getFullYear(),dt={recentYear:/19\d\d|200\d|201\d|202\d/g},de=[" ",",",";",":","|","/","\\","_",".","-"],ft=de.length;class gt{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return O(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-Z);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const o=e.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],u=o.length;if(tt[u].forEach(([p,b])=>{const y=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,p),10),parseInt(o.slice(p,b),10),parseInt(o.slice(b),10)]);y!=null&&c.push(y)}),c.length>0){let p=c[0],b=n(c[0]);c.slice(1).forEach(y=>{const g=n(y);g<b&&(p=y,b=g)}),t.push({pattern:"date",token:o,i:a,j:i,separator:"",year:p.year,month:p.month,day:p.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const o=e[a];if(o>99&&o<te||o>ee)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(te<=a&&a<=ee){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const C=new Uint32Array(65536),pt=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,o=t,c=t;for(;c--;)C[r.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let u=C[e.charCodeAt(c)];const d=u|i;u|=(u&a)+a^a,i|=~(u|a),a&=u,i&n&&o++,a&n&&o--,i=i<<1|1,a=a<<1|~(d|i),i&=d}for(c=t;c--;)C[r.charCodeAt(c)]=0;return o},mt=(r,e)=>{const t=e.length,s=r.length,n=[],a=[],i=Math.ceil(t/32),o=Math.ceil(s/32);for(let g=0;g<i;g++)a[g]=-1,n[g]=0;let c=0;for(;c<o-1;c++){let g=0,M=-1;const E=c*32,v=Math.min(32,s)+E;for(let m=E;m<v;m++)C[r.charCodeAt(m)]|=1<<m;for(let m=0;m<t;m++){const x=C[e.charCodeAt(m)],S=a[m/32|0]>>>m&1,T=n[m/32|0]>>>m&1,U=x|g,W=((x|T)&M)+M^M|x|T;let P=g|~(W|M),j=M&W;P>>>31^S&&(a[m/32|0]^=1<<m),j>>>31^T&&(n[m/32|0]^=1<<m),P=P<<1|S,j=j<<1|T,M=j|~(U|P),g=P&U}for(let m=E;m<v;m++)C[r.charCodeAt(m)]=0}let u=0,d=-1;const p=c*32,b=Math.min(32,s-p)+p;for(let g=p;g<b;g++)C[r.charCodeAt(g)]|=1<<g;let y=s;for(let g=0;g<t;g++){const M=C[e.charCodeAt(g)],E=a[g/32|0]>>>g&1,v=n[g/32|0]>>>g&1,m=M|u,x=((M|v)&d)+d^d|M|v;let S=u|~(x|d),T=d&x;y+=S>>>s-1&1,y-=T>>>s-1&1,S>>>31^E&&(a[g/32|0]^=1<<g),T>>>31^v&&(n[g/32|0]^=1<<g),S=S<<1|E,T=T<<1|v,d=T|~(m|S),u=S&m}for(let g=p;g<b;g++)C[r.charCodeAt(g)]=0;return y},bt=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?pt(r,e):mt(r,e)},yt=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},Mt=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=yt(r,a,t);if(Math.abs(r.length-a.length)>i)return!1;const o=bt(r,a),c=o<=i;return c&&(s=o),c});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var se={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},q={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class N{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new N([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<e.length;a+=1){const i=e.charAt(a);n.hasChild(i)||n.addChild(i),n=n.getChild(i)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new N([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var ne=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class vt{constructor(){this.matchers={},this.l33tTable=se,this.trieNodeRoot=ne(se,new N),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=q,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=ne(e.l33tTable,new N)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(q).forEach(s=>{if(s in e){const n=s;Object.keys(q[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=Q(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),Q(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]?console.info(`Matcher ${e} already exists`):this.matchers[e]=t}}const f=new vt;class xt{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>({...s,token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class kt{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const a=this.substr.charAt(n);if(s=s.getChild(a),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:a,lastSubLetter:i,consecutiveSubCount:o}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:a});return}const c=[...this.getAllPossibleSubsAtIndex(s)];let u=!1;for(let d=s+c.length-1;d>=s;d-=1){const p=c[d-s];if(p.isTerminal()){if(i===p.parents.join("")&&o>=3)continue;u=!0;const b=p.subs;for(const y of b){this.buffer.push(y);const g=a.concat({i:n,letter:y,substitution:p.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:d+1,subIndex:n+y.length,changes:g,lastSubLetter:p.parents.join(""),consecutiveSubCount:i===p.parents.join("")?o+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!u){const d=this.substr.charAt(s);this.buffer.push(d),this.helper({onlyFullSub:e,isFullSub:t&&!u,index:s+1,subIndex:n+1,changes:a,lastSubLetter:i,consecutiveSubCount:o}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const St=(r,e,t)=>new kt({substr:r,limit:e,trieRoot:t}).getAll(),Dt=(r,e,t)=>{const n=r.changes.filter(u=>u.i<e).reduce((u,d)=>u-d.letter.length+d.substitution.length,e),a=r.changes.filter(u=>u.i>=e&&u.i<=t),i=a.reduce((u,d)=>u-d.letter.length+d.substitution.length,t-e+n),o=[],c=[];return a.forEach(u=>{o.findIndex(p=>p.letter===u.letter&&p.substitution===u.substitution)<0&&(o.push({letter:u.letter,substitution:u.substitution}),c.push(`${u.substitution} -> ${u.letter}`))}),{i:n,j:i,subs:o,subDisplay:c.join(", ")}};class Et{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===t[n]))}match({password:e}){const t=[],s=St(e,f.l33tMaxSubstitutions,f.trieNodeRoot);let n=!1,a=!0;return s.forEach(i=>{if(n)return;const o=this.defaultMatch({password:i.password,useLevenshtein:a});a=!1,o.forEach(c=>{n||(n=c.i===0&&c.j===e.length-1);const u=Dt(i,c.i,c.j),d=e.slice(u.i,+u.j+1||9e9),p={...c,l33t:!0,token:d,...u},b=this.isAlreadyIncluded(t,p);d.toLowerCase()!==c.matchedWord&&!b&&t.push(p)})}),t.filter(i=>i.token.length>1)}}class Tt{constructor(){this.l33t=new Et(this.defaultMatch),this.reverse=new xt(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return O(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,a=e.toLowerCase();return Object.keys(f.rankedDictionaries).forEach(i=>{const o=f.rankedDictionaries[i],c=f.rankedDictionariesMaxWordSize[i],u=Math.min(c,n);for(let d=0;d<n;d+=1){const p=Math.min(d+u,n);for(let b=d;b<p;b+=1){const y=a.slice(d,+b+1||9e9),g=y in o;let M={};const E=d===0&&b===n-1;f.useLevenshteinDistance&&E&&!g&&t&&(M=Mt(y,o,f.levenshteinThreshold));const v=Object.keys(M).length!==0;if(g||v){const m=v?M.levenshteinDistanceEntry:y,x=o[m];s.push({pattern:"dictionary",i:d,j:b,token:e.slice(d,+b+1||9e9),matchedWord:y,rank:x,dictionaryName:i,reversed:!1,l33t:!1,...M})}}}}),s}}class At{match({password:e,regexes:t=dt}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;let i;for(;i=a.exec(e);)if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),O(s)}}var L={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},It=({token:r})=>{let e=st**r.length;e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=oe+1:t=ce+1,Math.max(e,t)},Ct=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-Z),le)*365;return e&&(s*=4),s};const Rt=r=>{const e=r.split(""),t=e.filter(i=>i.match(lt)).length,s=e.filter(i=>i.match(ct)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=L.nCk(t+s,i);return n};var wt=r=>{const e=r.replace(ut,"");if(e.match(ot)||e.toLowerCase()===e)return 1;const t=[ue,rt,he],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return Rt(e)};const re=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},Pt=({sub:r,token:e})=>{const t=e.toLowerCase(),s=re(t,r.substitution),n=re(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var Lt=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:a,unsubbedCount:i}=Pt({sub:n,token:t});if(a===0||i===0)s*=2;else{const o=Math.min(i,a);let c=0;for(let u=1;u<=o;u+=1)c+=L.nCk(i+a,u);s*=c}}),s},jt=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:a})=>{const i=r,o=wt(n),c=Lt({l33t:t,subs:s,token:n}),u=e&&2||1;let d;return a==="diceware"?d=6**5/2:d=i*o*c*u,{baseGuesses:i,uppercaseVariations:o,l33tVariations:c,calculation:d}},Ot=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return s[r]**t.length;switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-Z),le)}return 0},_t=({baseGuesses:r,repeatCount:e})=>r*e,Nt=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const Ut=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},Wt=({token:r,graph:e,turns:t})=>{const s=Object.keys(f.graphs[e]).length,n=Ut(f.graphs[e]);let a=0;const i=r.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let u=1;u<=c;u+=1)a+=L.nCk(o-1,u-1)*s*n**u}return a};var zt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=Wt({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(t,a);o+=1)i+=L.nCk(t+a,o);n*=i}}return Math.round(n)},Ft=()=>ft;const $t=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=oe:t=ce),t},ae={bruteforce:It,date:Ct,dictionary:jt,regex:Ot,repeat:_t,sequence:Nt,spatial:zt,separator:Ft},Yt=(r,e)=>ae[r]?ae[r](e):f.matchers[r]&&"scoring"in f.matchers[r]?f.matchers[r].scoring(e):0;var Gt=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=$t(r,e),n=Yt(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return{...r,...t,guesses:i,guessesLog10:L.log10(i)}};const D={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=Gt(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=L.factorial(e)*n;this.excludeAdditive||(a+=nt**(e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<n&&(s=parseInt(i,10),n=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var V={mostGuessableMatchSequence(r,e,t=!1){D.password=r,D.excludeAdditive=t;const s=r.length;let n=D.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((u,d)=>u.i-d.i)),D.optimal={m:D.fillArray(s,"object"),pi:D.fillArray(s,"object"),g:D.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(u=>{u.i>0?Object.keys(D.optimal.m[u.i-1]).forEach(d=>{D.update(u,parseInt(d,10)+1)}):D.update(u,1)}),D.bruteforceUpdate(c);const a=D.unwind(s),i=a.length,o=this.getGuesses(r,i);return{password:r,guesses:o,guessesLog10:L.log10(o),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=D.optimal.g[t-1][e],s}};class qt{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(i==null)break;const{match:c,baseToken:u}=this.setMatchToken(i,o);if(c){const d=c.index+c[0].length-1,p=this.getBaseGuesses(u,t);s.push(this.normalizeMatch(u,d,c,p)),n=d+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>({...a,baseGuesses:i})):{...a,baseGuesses:n}}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>V.mostGuessableMatchSequence(e,a).guesses):V.mostGuessableMatchSequence(e,s).guesses}}class Ht{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:u}=this.getSequence(o);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:u,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return it.test(e)?(t="lower",s=26):at.test(e)?(t="upper",s=26):ht.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class Bt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(f.graphs).forEach(s=>{const n=f.graphs[s];B(t,this.helper(e,n,s))}),O(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,u=null,d=0;for(n=this.checkIfShifted(s,e,i);;){const p=e.charAt(c-1),b=t[p]||[];let y=!1,g=-1,M=-1;if(c<o){const E=e.charAt(c),v=b.length;for(let m=0;m<v;m+=1){const x=b[m];if(M+=1,x){const S=x.indexOf(E);if(S!==-1){y=!0,g=M,S===1&&(n+=1),u!==g&&(d+=1,u=g);break}}}}if(y)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:d,shiftedCount:n}),i=c;break}}}return a}}const Vt=new RegExp(`[${de.join("")}]`);class F{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>Vt.test(n)).reduce((n,a)=>{const i=n.get(a);return i?n.set(a,i+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[i,o])=>o-a);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=F.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=F.getSeparatorRegex(s);for(const a of e.matchAll(n)){if(a.index===void 0)continue;const i=a.index+1;t.push({pattern:"separator",token:s,i,j:i})}return t}}class Zt{constructor(){this.matchers={date:gt,dictionary:Tt,regex:At,repeat:qt,sequence:Ht,spatial:Bt,separator:F}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(f.matchers)].forEach(a=>{if(!this.matchers[a]&&!f.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:f.matchers[a].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(u=>{B(t,u)}),s.push(c)):B(t,c)}),s.length>0?new Promise((a,i)=>{Promise.all(s).then(()=>{a(O(t))}).catch(o=>{i(o)})}):O(t)}}const fe=1,ge=fe*60,pe=ge*60,me=pe*24,be=me*31,ye=be*12,Xt=ye*100,H={second:fe,minute:ge,hour:pe,day:me,month:be,year:ye,century:Xt};class Kt{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=f.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(H),a=n.findIndex(i=>e<H[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/H[t]):t="ltSecond"),this.translate(t,s)}}var Jt=()=>null,Qt=()=>({warning:f.translations.warnings.dates,suggestions:[f.translations.suggestions.dates]});const es=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=f.translations.warnings.topTen:r.rank<=100?t=f.translations.warnings.topHundred:t=f.translations.warnings.common:r.guessesLog10<=4&&(t=f.translations.warnings.similarToCommon),t},ts=(r,e)=>{let t=null;return e&&(t=f.translations.warnings.wordByItself),t},ss=(r,e)=>e?f.translations.warnings.namesByThemselves:f.translations.warnings.commonNames,ns=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=es(r,e):s.includes("wikipedia")?t=ts(r,e):n?t=ss(r,e):s==="userInputs"&&(t=f.translations.warnings.userInputs),t};var rs=(r,e)=>{const t=ns(r,e),s=[],n=r.token;return n.match(ue)?s.push(f.translations.suggestions.capitalization):n.match(he)&&n.toLowerCase()!==n&&s.push(f.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(f.translations.suggestions.reverseWords),r.l33t&&s.push(f.translations.suggestions.l33t),{warning:t,suggestions:s}},as=r=>r.regexName==="recentYear"?{warning:f.translations.warnings.recentYears,suggestions:[f.translations.suggestions.recentYears,f.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},is=r=>{let e=f.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=f.translations.warnings.simpleRepeat),{warning:e,suggestions:[f.translations.suggestions.repeated]}},os=()=>({warning:f.translations.warnings.sequences,suggestions:[f.translations.suggestions.sequences]}),cs=r=>{let e=f.translations.warnings.keyPattern;return r.turns===1&&(e=f.translations.warnings.straightRow),{warning:e,suggestions:[f.translations.suggestions.longerKeyboardPattern]}},ls=()=>null;const ie={warning:null,suggestions:[]};class us{constructor(){this.matchers={bruteforce:Jt,date:Qt,dictionary:rs,regex:as,repeat:is,sequence:os,spatial:cs,separator:ls},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(f.translations.suggestions.useWords,f.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return ie;const s=f.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):f.matchers[e.pattern]&&"feedback"in f.matchers[e.pattern]?f.matchers[e.pattern].feedback(e,t):ie}}const Me=()=>new Date().getTime(),hs=(r,e,t)=>{const s=new us,n=new Kt,a=V.mostGuessableMatchSequence(e,r),i=Me()-t,o=n.estimateAttackTimes(a.guesses);return{calcTime:i,...a,...o,feedback:s.getFeedback(o.score,a.sequence)}},ds=(r,e)=>(e&&f.extendUserInputsDictionary(e),new Zt().match(r)),fs=(r,e)=>{const t=Me(),s=ds(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return hs(s,r,t)};function Ss(r,e){const t=$({deptId:"",username:"",phone:"",status:""}),s=A(),n=A(),a=A([]),i=A(!0),o=A(),c=A({}),{switchStyle:u}=Ze(),d=A(),p=A([]),b=A(!0),y=A(0),g=$({total:0,pageSize:10,currentPage:1,background:!0}),M=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"用户编号",prop:"id",width:90},{label:"用户头像",prop:"avatar",cellRenderer:({row:l})=>I(Y("el-image"),{fit:"cover","preview-teleported":!0,src:l.avatar,"preview-src-list":Array.of(l.avatar),class:"w-[24px] h-[24px] rounded-full align-middle"},null),width:90},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:l,props:h})=>I(Y("el-tag"),{size:h.size,type:l.sex===1?"danger":"",effect:"plain"},{default:()=>[l.sex===1?"女":"男"]})},{label:"部门",prop:"dept.name",minWidth:90},{label:"手机号码",prop:"phone",minWidth:90,formatter:({phone:l})=>_e(l,{start:3,end:6})},{label:"状态",prop:"status",minWidth:90,cellRenderer:l=>{var h;return I(Y("el-switch"),{size:l.props.size==="small"?"small":"default",loading:(h=c.value[l.index])==null?void 0:h.loading,modelValue:l.row.status,"onUpdate:modelValue":k=>l.row.status=k,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:u.value,onChange:()=>T(l)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:l})=>Ne(l).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],E=Pe(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),v=$({newPwd:""}),m=[{color:"#e74242",text:"非常弱"},{color:"#EFBD47",text:"弱"},{color:"#ffa500",text:"一般"},{color:"#1bbf1b",text:"强"},{color:"#008000",text:"非常强"}],x=A(),S=A([]);function T({row:l,index:h}){Ue.confirm(`确认要<strong>${l.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${l.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{c.value[h]=Object.assign({},c.value[h],{loading:!0}),setTimeout(()=>{c.value[h]=Object.assign({},c.value[h],{loading:!1}),_("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{l.status===0?l.status=1:l.status=0})}function U(l){}function W(l){_(`您删除了用户编号为${l.id}的这条数据`,{type:"success"}),R()}function P(l){}function j(l){}function ve(l){y.value=l.length,r.value.setAdaptive()}function xe(){y.value=0,r.value.getTableRef().clearSelection()}function ke(){const l=r.value.getTableRef().getSelectionRows();_(`已删除用户编号为 ${We(l,"id")} 的数据`,{type:"success"}),r.value.getTableRef().clearSelection()}async function R(){i.value=!0;const{data:l}=await Je(ze(t));a.value=l.list,g.total=l.total,g.pageSize=l.pageSize,g.currentPage=l.currentPage,setTimeout(()=>{i.value=!1},500)}const Se=l=>{l&&(l.resetFields(),t.deptId="",e.value.onTreeReset(),R())};function De({id:l,selected:h}){t.deptId=h?l:"",R()}function X(l){if(!l||!l.length)return;const h=[];for(let k=0;k<l.length;k++)l[k].disabled=l[k].status===0,X(l[k].children),h.push(l[k]);return h}function Ee(l="新增",h){z({title:`${l}用户`,props:{formInline:{title:l,higherDeptOptions:X(d.value),parentId:(h==null?void 0:h.dept.id)??0,nickname:(h==null?void 0:h.nickname)??"",username:(h==null?void 0:h.username)??"",password:(h==null?void 0:h.password)??"",phone:(h==null?void 0:h.phone)??"",email:(h==null?void 0:h.email)??"",sex:(h==null?void 0:h.sex)??"",status:(h==null?void 0:h.status)??1,remark:(h==null?void 0:h.remark)??""}},width:"46%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>G(Be,{ref:s}),beforeSure:(k,{options:w})=>{const Ce=s.value.getRef(),Re=w.props.formInline;function K(){_(`您${l}了用户名称为${Re.username}的这条数据`,{type:"success"}),k(),R()}Ce.validate(we=>{we&&K()})}})}function Te(l){z({title:"裁剪、上传头像",width:"40%",draggable:!0,closeOnClickModal:!1,contentRenderer:()=>G(Ve,{imgSrc:l.avatar,onCropper:h=>o.value=h}),beforeSure:h=>{h(),R()}})}Le(v,({newPwd:l})=>x.value=je(l)?-1:fs(l).score);function Ae(l){z({title:`重置 ${l.username} 用户的密码`,width:"30%",draggable:!0,closeOnClickModal:!1,contentRenderer:()=>I(qe,null,[I(Fe,{ref:n,model:v},{default:()=>[I($e,{prop:"newPwd",rules:[{required:!0,message:"请输入新密码",trigger:"blur"}]},{default:()=>[I(Ye,{clearable:!0,"show-password":!0,type:"password",modelValue:v.newPwd,"onUpdate:modelValue":h=>v.newPwd=h,placeholder:"请输入新密码"},null)]})]}),I("div",{class:"mt-4 flex"},[m.map(({color:h,text:k},w)=>I("div",{class:"w-[19vw]",style:{marginLeft:w!==0?"4px":0}},[I(Ge,{striped:!0,"striped-flow":!0,duration:x.value===w?6:0,percentage:x.value>=w?100:0,color:h,"stroke-width":10,"show-text":!1},null),I("p",{class:"text-center",style:{color:x.value===w?h:""}},[k])]))])]),closeCallBack:()=>v.newPwd="",beforeSure:h=>{n.value.validate(k=>{k&&(_(`已成功重置 ${l.username} 用户的密码`,{type:"success"}),h(),R())})}})}async function Ie(l){const h=(await Qe({userId:l.id})).data??[];z({title:`分配 ${l.username} 用户的角色`,props:{formInline:{username:(l==null?void 0:l.username)??"",nickname:(l==null?void 0:l.nickname)??"",roleOptions:S.value??[],ids:h}},width:"400px",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>G(He),beforeSure:(k,{options:w})=>{w.props.formInline,k()}})}return Oe(async()=>{b.value=!0,R();const{data:l}=await Xe();d.value=J(l),p.value=J(l),b.value=!1,S.value=(await Ke()).data}),{form:t,loading:i,columns:M,dataList:a,treeData:p,treeLoading:b,selectedNum:y,pagination:g,buttonClass:E,onSearch:R,resetForm:Se,onbatchDel:ke,openDialog:Ee,onTreeSelect:De,handleUpdate:U,handleDelete:W,handleUpload:Te,handleReset:Ae,handleRole:Ie,handleSizeChange:P,onSelectionCancel:xe,handleCurrentChange:j,handleSelectionChange:ve}}export{Ss as useUser};