import{_ as x,i as h,j as p,k as f,o as a,c as o,b as t,y as d,z as i,t as l,n as u}from"./index-yQ5funnV.js";const m={name:"MarketUsdt",setup(){const c=h([]),n=p(()=>{f.get("https://api.sarmayex.com/api/v2/currencies").then(e=>{e.status===200&&c.push(e.data.data.currencies.slice(15,30))}).catch(e=>{console.log(e.message)})});return{total:c,sum:n}}},v={class:"market-all"},g={class:"container mx-auto p-2"},b={class:"w-full h-auto"},w={class:"flex flex-col space-y-4"},y={class:"w-3/12 flex flex-row"},k=["src"],C={class:"flex flex-col"},$={class:"font-bold text-start text-slate-400 text-sm mb-1"},B={class:"font-bold text-start text-slate-400 text-xs"},F={class:"w-3/12"},M={class:"font-bold text-start text-slate-400 text-xs"},S={class:"w-3/12"},U={class:"font-bold text-start text-slate-400 text-xs"},z={class:"w-3/12"};function D(c,n,e,_,j,E){return a(),o("section",v,[t("div",g,[t("div",b,[t("div",w,[(a(!0),o(d,null,i(_.total,r=>(a(),o("div",{key:r},[(a(!0),o(d,null,i(r,s=>(a(),o("div",{key:s,class:"flex items-center p-2 transition-all flex-row w-full my-4 hover:bg-[#030130]"},[t("div",y,[t("img",{src:`${s.img}`,alt:"",class:"w-8 h-8 rounded-full ml-3"},null,8,k),t("div",C,[t("p",$,l(s.symbol),1),t("p",B,"USDT / "+l(s.symbol),1)])]),t("div",F,[t("p",M,l(s.sellPrice.toFixed(0)),1)]),t("div",S,[t("p",U,l(s.maxSell.toFixed(0)),1)]),t("div",z,[t("p",{class:u([{red:s.percentChange_24h<0,green:s.percentChange_24h>0},"font-bold text-start text-slate-400 text-xs"])},l(s.percentChange_24h)+"%",3)])]))),128))]))),128))])])])])}const L=x(m,[["render",D],["__scopeId","data-v-e52401b7"]]);export{L as default};
