import{_ as y,i as _,j as g,a as w,o as e,c as o,b as t,p as C,w as u,y as d,t as n,n as x,z as a,d as v,S as k,g as B,h as $,s as j,x as S}from"./index-yQ5funnV.js";import{E as A}from"./EndPoints-PM3js4TH.js";const E=B(()=>$(()=>import("./AnimateBase-DafRsdZl.js"),__vite__mapDeps([0,1,2,3]))),F={name:"BestCurrencie",components:{AnimateBase:E},setup(){const r=_([]),f=_([]),m=_([]),i=_([]),p=g(async()=>{await A.getBestCurrencies().then(l=>{l.status===200&&(r.push(l.data.data.best),f.push(l.data.data.hottest),m.push(l.data.data.newest),i.push(l.data.data.most_profit))}).catch(l=>{console.log(l.message)})});return{list:r,getBest:p,list2:f,list3:m,list4:i}}},h=r=>(j("data-v-fdddf170"),r=r(),S(),r),I={class:"best-currenci"},U={class:"container mx-auto p-1"},P={class:"w-full h-auto"},V={class:"flex flex-row items-center justify-between"},z={class:"w-3/12 flex flex-col border border-2 border-slate-200 p-2 rounded-xl mx-1"},D=h(()=>t("p",{class:"text-md font-start text-slate-800 my-2"},"رمز ارزهای برتر",-1)),L={class:"flex flex-row items-start justify-between"},N={class:"my-2 flex flex-row items-center"},M=["src"],O={class:"font-bold text-xs text-slate-500"},R={class:"my-2"},T={class:"text-xs font-bold text-slate-500"},q={class:"my-2"},G={class:"w-3/12 flex flex-col border border-2 border-slate-200 p-2 rounded-xl mx-1"},H=h(()=>t("p",{class:"text-md font-start text-slate-800 my-2"},"داغ ترین های امروز",-1)),J={class:"flex flex-row items-start justify-between"},K={class:"my-2 flex flex-row items-center"},Q=["src"],W={class:"font-bold text-xs text-slate-500"},X={class:"my-2"},Y={class:"text-xs font-bold text-slate-500"},Z={class:"my-2"},tt={class:"w-3/12 flex flex-col border border-2 border-slate-200 p-2 rounded-xl mx-1"},st=h(()=>t("p",{class:"text-md font-start text-slate-800 my-2"},"جدیدترین ها",-1)),et={class:"flex flex-row items-start justify-between"},ot={class:"my-2 flex flex-row items-center"},nt=["src"],ct={class:"font-bold text-xs text-slate-500"},lt={class:"my-2"},dt={class:"text-xs font-bold text-slate-500"},at={class:"my-2"},rt={class:"w-3/12 flex flex-col border border-2 borer-slate-200 p-2 rounded-xl mx-1"},it=h(()=>t("p",{class:"text-md font-start text-slate-800 my-2"},"پرسودترین ها",-1)),_t={class:"flex flex-row items-start justify-between"},xt={class:"my-2 flex flex-row items-center"},ht=["src"],ft={class:"font-bold text-xs text-slate-500"},mt={class:"my-2"},pt={class:"text-xs font-bold text-slate-500"},ut={class:"my-2"};function bt(r,f,m,i,p,l){const b=w("AnimateBase");return e(),o("section",I,[t("div",U,[t("div",P,[(e(),C(k,null,{default:u(()=>[t("div",V,[t("div",z,[D,(e(!0),o(d,null,a(i.list,c=>(e(),o("div",{key:c},[(e(!0),o(d,null,a(c,s=>(e(),o("div",{key:s,class:"flex flex-col"},[t("div",L,[t("div",N,[t("img",{src:`${s.img}`,alt:"",class:"w-8 h-8 rounded-full ml-1"},null,8,M),t("span",O,n(s.symbol),1)]),t("div",R,[t("p",T,"$"+n(s.cmcapUsd.toFixed(0)),1)]),t("div",q,[t("p",{class:x([{red:s.percentChange_24h<0,green:s.percentChange_24h>0},"text-xs font-bold text-slate-500"])},n(s.percentChange_24h)+"%",3)])])]))),128))]))),128))]),t("div",G,[H,(e(!0),o(d,null,a(i.list2,c=>(e(),o("div",{key:c},[(e(!0),o(d,null,a(c,s=>(e(),o("div",{key:s,class:"flex flex-col"},[t("div",J,[t("div",K,[t("img",{src:`${s.img}`,alt:"",class:"w-8 h-8 rounded-full ml-1"},null,8,Q),t("span",W,n(s.symbol),1)]),t("div",X,[t("p",Y,"$"+n(s.cmcapUsd.toFixed(0)),1)]),t("div",Z,[t("p",{class:x([{red:s.percentChange_24h<0,green:s.percentChange_24h>0},"text-xs font-bold text-slate-500"])},n(s.percentChange_24h)+"%",3)])])]))),128))]))),128))]),t("div",tt,[st,(e(!0),o(d,null,a(i.list3,c=>(e(),o("div",{key:c},[(e(!0),o(d,null,a(c,s=>(e(),o("div",{key:s,class:"flex flex-col"},[t("div",et,[t("div",ot,[t("img",{src:`${s.img}`,alt:"",class:"w-8 h-8 rounded-full ml-1"},null,8,nt),t("span",ct,n(s.symbol),1)]),t("div",lt,[t("p",dt,"$"+n(s.cmcapUsd.toFixed(0)),1)]),t("div",at,[t("p",{class:x([{red:s.percentChange_24h<0,green:s.percentChange_24h>0},"text-xs font-bold text-slate-500"])},n(s.percentChange_24h)+"%",3)])])]))),128))]))),128))]),t("div",rt,[it,(e(!0),o(d,null,a(i.list4,c=>(e(),o("div",{key:c},[(e(!0),o(d,null,a(c,s=>(e(),o("div",{key:s,class:"flex flex-col"},[t("div",_t,[t("div",xt,[t("img",{src:`${s.img}`,alt:"",class:"w-8 h-8 rounded-full ml-1"},null,8,ht),t("span",ft,n(s.symbol),1)]),t("div",mt,[t("p",pt,"$"+n(s.cmcapUsd.toFixed(0)),1)]),t("div",ut,[t("p",{class:x([{red:s.percentChange_24h<0,green:s.percentChange_24h>0},"text-xs font-bold text-slate-500"])},n(s.percentChange_24h)+"%",3)])])]))),128))]))),128))])])]),fallback:u(()=>[v(b)]),_:1}))])])])}const wt=y(F,[["render",bt],["__scopeId","data-v-fdddf170"]]);export{wt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AnimateBase-DafRsdZl.js","assets/index-yQ5funnV.js","assets/index-G-QnOi-0.css","assets/AnimateBase-H5_B4qOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}