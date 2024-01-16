import{_ as m,i as p,j as d,k as u,a as o,o as f,p as A,w as s,d as n,S as x,g as l,h as c}from"./index-yQ5funnV.js";const v=l(()=>c(()=>import("./ExampleAll-C0zL_VRz.js"),__vite__mapDeps([0,1,2,3]))),h=l(()=>c(()=>import("./AnimateBase-DafRsdZl.js"),__vite__mapDeps([4,1,2,5]))),E={name:"AdviceWallet",components:{AnimateBase:h,ExampleAll:v},setup(){const t=p([]),a=d(async()=>{await u.get("https://blog.sarmayex.com/api/v1/knowledges/test1/folders/wallet").then(e=>{e.status===200&&t.push(e.data.solution_folder.solutions)}).catch(e=>{console.log(e.message)})});return{menu:t,total:a}}};function g(t,a,e,_,k,w){const i=o("ExampleAll"),r=o("AnimateBase");return f(),A(x,null,{default:s(()=>[n(i,{list:_.menu},null,8,["list"])]),fallback:s(()=>[n(r)]),_:1})}const y=m(E,[["render",g]]);export{y as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExampleAll-C0zL_VRz.js","assets/index-yQ5funnV.js","assets/index-G-QnOi-0.css","assets/ExampleAll-3z25LUzp.css","assets/AnimateBase-DafRsdZl.js","assets/AnimateBase-H5_B4qOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}