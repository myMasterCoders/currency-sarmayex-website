import{_ as d,i as f,r as o,j as v,k as h,a as c,o as i,c as B,p as A,w as l,d as r,S as x,g as _,h as u}from"./index-yQ5funnV.js";const y=_(()=>u(()=>import("./SellWithBuy-wKpi_OOB.js"),__vite__mapDeps([0,1,2,3]))),k=_(()=>u(()=>import("./AnimateBase-DafRsdZl.js"),__vite__mapDeps([4,1,2,5]))),E={name:"AllPrivate",components:{SellWithBuy:y,AnimateBase:k},setup(){const t=f([]),a=o(180),s=o(200),n=v(async()=>{await h.get("https://api.sarmayex.com/api/v2/currencies").then(e=>{e.status===200&&t.push(e.data.data.currencies.slice(a.value,s.value))}).catch(e=>{console.log(e.message)})});return{list:t,min:a,max:s,sum:n}}};function P(t,a,s,n,e,S){const m=c("SellWithBuy"),p=c("AnimateBase");return i(),B("div",null,[(i(),A(x,null,{default:l(()=>[r(m,{menu:n.list},null,8,["menu"])]),fallback:l(()=>[r(p)]),_:1}))])}const w=d(E,[["render",P]]);export{w as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SellWithBuy-wKpi_OOB.js","assets/index-yQ5funnV.js","assets/index-G-QnOi-0.css","assets/SellWithBuy-AP010yMa.css","assets/AnimateBase-DafRsdZl.js","assets/AnimateBase-H5_B4qOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}