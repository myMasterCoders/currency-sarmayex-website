import{_ as d,i as f,r as o,j as h,k as v,a as c,o as i,c as B,p as A,w as l,d as r,S as x,g as _,h as m}from"./index-yQ5funnV.js";const g=_(()=>m(()=>import("./SellWithBuy-wKpi_OOB.js"),__vite__mapDeps([0,1,2,3]))),y=_(()=>m(()=>import("./AnimateBase-DafRsdZl.js"),__vite__mapDeps([4,1,2,5]))),k={name:"AllGaming",components:{SellWithBuy:g,AnimateBase:y},setup(){const t=f([]),a=o(100),s=o(120),n=h(async()=>{await v.get("https://api.sarmayex.com/api/v2/currencies").then(e=>{e.status===200&&t.push(e.data.data.currencies.slice(a.value,s.value))}).catch(e=>{console.log(e.message)})});return{list:t,min:a,max:s,sum:n}}};function E(t,a,s,n,e,S){const u=c("SellWithBuy"),p=c("AnimateBase");return i(),B("div",null,[(i(),A(x,null,{default:l(()=>[r(u,{menu:n.list},null,8,["menu"])]),fallback:l(()=>[r(p)]),_:1}))])}const C=d(k,[["render",E]]);export{C as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SellWithBuy-wKpi_OOB.js","assets/index-yQ5funnV.js","assets/index-G-QnOi-0.css","assets/SellWithBuy-AP010yMa.css","assets/AnimateBase-DafRsdZl.js","assets/AnimateBase-H5_B4qOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}