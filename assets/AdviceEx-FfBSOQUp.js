import{_ as m,i as p,j as d,k as u,a as s,o as x,p as f,w as a,d as n,S as A,g as c,h as l}from"./index-yQ5funnV.js";const E=c(()=>l(()=>import("./ExampleAll-C0zL_VRz.js"),__vite__mapDeps([0,1,2,3]))),h=c(()=>l(()=>import("./AnimateBase-DafRsdZl.js"),__vite__mapDeps([4,1,2,5]))),v={name:"AdviceEx",components:{AnimateBase:h,ExampleAll:E},setup(){const t=p([]),o=d(async()=>{await u.get("https://blog.sarmayex.com/api/v1/knowledges/test1/folders/ex").then(e=>{e.status===200&&t.push(e.data.solution_folder.solutions)}).catch(e=>{console.log(e.message)})});return{menu:t,exchange:o}}};function g(t,o,e,_,k,B){const i=s("ExampleAll"),r=s("AnimateBase");return x(),f(A,null,{default:a(()=>[n(i,{list:_.menu},null,8,["list"])]),fallback:a(()=>[n(r)]),_:1})}const y=m(v,[["render",g]]);export{y as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExampleAll-C0zL_VRz.js","assets/index-yQ5funnV.js","assets/index-G-QnOi-0.css","assets/ExampleAll-3z25LUzp.css","assets/AnimateBase-DafRsdZl.js","assets/AnimateBase-H5_B4qOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}