import{_ as x,r as u,i as f,j as m,k as h,c as t,b as e,y as _,z as p,o as a,t as g}from"./index-yQ5funnV.js";const w={name:"ExchangeBase",components:{},setup(){const l=u("../src/assets/image/USDT.svg"),o=f([]),n=f([]),c=u("../src/assets/image/logotype-en.svg"),i=m(async()=>{await h.get("https://blog.sarmayex.com/api/v1/notification").then(s=>{s.status===200&&o.push(s.data.notifications)}).catch(s=>{console.log(s.message)})}),r=m(async()=>{await h.get("https://adp.sarmayex.com/api/v1/markets/list").then(s=>{s.status===200&&n.push(s.data.data.splice(12,1))}).catch(s=>{console.log(s.message)})});return{img:c,list:o,sum:i,menu:n,total:r,tether:l}}},v={class:"exchange-base"},y={class:"container mx-auto p-2"},b={class:"w-full h-auto"},k={class:"flex flex-col"},B=e("div",{class:"w-full flex flex-row items-center justify-between"},null,-1),j={class:"w-full bg-slate-200 p-2 h-[50px] rounded-sm flex flex-row items-center my-2 justify-between overflow-hidden rounded-md"},E=e("span",{class:"w-3 h-3 rounded-full bg-green-200 mx-1"},null,-1),$={class:"font-bold text-xs text-slate-800"};function D(l,o,n,c,i,r){return a(),t("section",v,[e("div",y,[e("div",b,[e("div",k,[B,e("div",j,[(a(!0),t(_,null,p(c.list,s=>(a(),t("div",{id:"slider",key:s,class:"w-full"},[(a(!0),t(_,null,p(s,d=>(a(),t("div",{key:d,class:"flex flex-row items-center w-[450px]"},[E,e("p",$,g(d.description),1)]))),128))]))),128))])])])])])}const z=x(w,[["render",D]]);export{z as default};
