import{_ as m,i as p,j as u,k as d,a as s,o as f,p as A,w as a,d as n,S as x,g as c,h as l}from"./index-yQ5funnV.js";const h=c(()=>l(()=>import("./ExampleAll-C0zL_VRz.js"),__vite__mapDeps([0,1,2,3]))),v=c(()=>l(()=>import("./AnimateBase-DafRsdZl.js"),__vite__mapDeps([4,1,2,5]))),B={name:"AdviceBuy",components:{AnimateBase:v,ExampleAll:h},setup(){const t=p([]),o=u(async()=>{await d.get("https://blog.sarmayex.com/api/v1/knowledges/test1/folders/academy").then(e=>{e.status===200&&t.push(e.data.solution_folder.solutions)}).catch(e=>{console.log(e.message)})});return{menu:t,showFaq:o}}};function E(t,o,e,_,g,y){const i=s("ExampleAll"),r=s("AnimateBase");return f(),A(x,null,{default:a(()=>[n(i,{list:_.menu},null,8,["list"])]),fallback:a(()=>[n(r)]),_:1})}const w=m(B,[["render",E]]);export{w as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExampleAll-C0zL_VRz.js","assets/index-yQ5funnV.js","assets/index-G-QnOi-0.css","assets/ExampleAll-3z25LUzp.css","assets/AnimateBase-DafRsdZl.js","assets/AnimateBase-H5_B4qOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}