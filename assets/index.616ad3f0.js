import{H as a,az as e,L as s,K as t,J as n,aa as c,P as o,Q as l,R as m,T as i,W as r,X as p,ab as d,ac as u,$ as v}from"./index.0a866c7e.js";import{l as y}from"./index.c453466d.js";import{_ as f}from"./config-title.799fc9d4.js";import{_}from"./empty-panel.3e56c6ec.js";import"./editor.worker.3eb73e22.js";import"./dom.1228cadc.js";var j=a({name:"DataCenterPanel",components:{ConfigTitle:f,EmptyPanel:_,SourcePanel:y((()=>e((()=>import("./source-panel.33dae9e1.js")),["/assets/source-panel.33dae9e1.js","/assets/source-panel.5cc9ec9b.css","/assets/index.0a866c7e.js","/assets/index.e40dc61f.css","/assets/editor.worker.3eb73e22.js","/assets/index.c453466d.js","/assets/index.51d44fff.css","/assets/dom.1228cadc.js"])))},setup(){const a=s("com"),e=t((()=>Object.keys(a.value.apis))),o=n(e.value[0]);return c("changePanel",(a=>{o.value=o.value===a?"":a})),{activeName:o,com:a,dataKeys:e}}});const g=v();o("data-v-71eed504");const P={class:"data-center-panel"},k={class:"scroll-container"};l();const K=g(((a,e,s,t,n,c)=>{const o=m("config-title"),l=m("source-panel"),v=m("empty-panel");return i(),r("div",P,[p(o,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),p("div",k,[a.dataKeys.length>0?(i(!0),r(d,{key:0},u(a.dataKeys,(e=>(i(),r(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(i(),r(v,{key:1,content:"该组件不需要配置数据"}))])])}));j.render=K,j.__scopeId="data-v-71eed504";export default j;