import{_ as b,F as v,i as h,r as u,j as n,k as g,a as w,c as r,b as t,y,z as C,f,o as p,t as o,n as i,d as A,m as j,s as S,x as V}from"./index-yQ5funnV.js";import{C as k}from"./auto-ovie_dKz.js";const F={name:"AvaxAvalanch",components:{FontAwesomeIcon:v},setup(){let l=h([]);const d=u("1h 1m 1d 7d"),c=h([]);n(()=>{l.push({date1:new Date().getTime()})});const x=n(()=>{g.get("https://api.sarmayex.com/api/v2/currency/symbol/AVAX").then(a=>{a.status===200&&c.push(a.data.currency)}).catch(a=>{console.log(a.message)})}),m=n(()=>{let a=document.querySelector("#chart").getContext("2d");return new k(a,{type:"line",data:{labels:["1/10/2024","1/11/2024","1/12/2024","1/14/2024"],datasets:[{label:d.value.split(" ").reverse().join(" "),data:[1956784,1993457,2045679,2123452],borderColor:"rgb(86, 152, 252)",backgroundColor:"rgb(115, 165, 240)",borderWidth:1,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1}})}),_=n(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});return{timer:l,label:d,values:c,sum:x,showChart:m,topScroll:_}}},s=l=>(S("data-v-d66619d9"),l=l(),V(),l),I={class:"avax"},N={class:"container mx-auto p-2"},T={class:"w-full h-auto"},$={class:"flex flex-row items-center justify-between"},B={class:"w-4/12 flex flex-col"},D=s(()=>t("div",{class:"flex flex-row items-center justify-around w-[300px] h-[50px] p-1 rounded-md bg-slate-200"},[t("button",{type:"button",class:"text-slate-500 text-[12px] font-bold mx-1"},"خرید اوالانچ"),t("button",{type:"button",class:"text-slate-500 text-[12px] font-bold mx-1"},"فروش اوالانچ"),t("button",{type:"button",class:"text-slate-500 text-[12px] font-bold mx-1"},"بازار جهانی")],-1)),M={class:"flex flex-row items-center justify-start"},P={class:"w-[70px] h-[70px] border border-2 border-slate-300 rounded-md p-1 my-3"},X=["src"],z={class:"flex flex-col"},E={class:"text-center font-bold text-slate-800 text-sm ny-1 mr-2"},q={class:"text-center font-bold text-slate-800 text-sm ny-1 mr-2"},L={class:"flex flex-row items-center justify-start my-3"},R=s(()=>t("span",{class:"w-[5px] h-[50px] bg-orange-600 ml-2"},null,-1)),W=s(()=>t("span",{class:"w-[5px] h-[50px] bg-orange-600 ml-2"},null,-1)),G={class:"flex flex-col"},H=s(()=>t("p",{class:"text-center font-bold text-sm text-slate-800 text-md mx-1 my-1"},"قیمت به تومان",-1)),J={class:"text-center font-bold text-sm text-slate-800 text-md mx-1 my-1"},K=s(()=>t("span",{class:"w-[5px] h-[50px] bg-slate-300 ml-2"},null,-1)),O={class:"flex flex-col"},Q=s(()=>t("p",{class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},"بالاترین قیمت روز",-1)),U={class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},Y=s(()=>t("span",{class:"w-[5px] h-[50px] bg-slate-300 ml-2"},null,-1)),Z={class:"flex flex-col"},tt=s(()=>t("p",{class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},"پایین قیمت روز",-1)),et={class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},st={class:"flex flex-row items-center justify-start my-2"},at={class:"flex flex-col w-3/12 my-2"},ot=s(()=>t("p",{class:"text-center font-bold text-slate-400 text-md text-sm"},"1 ساعت",-1)),lt={class:"flex flex-col w-3/12 my-2"},nt=s(()=>t("p",{class:"text-center font-bold text-slate-400 text-md text-sm"},"24 ساعت",-1)),dt={class:"flex flex-col w-3/12 my-2"},ct=s(()=>t("p",{class:"text-center font-bold text-slate-400 text-md text-sm"},"1 هفته",-1)),xt={type:"button",class:"bg-sky-900 text-white items-center text-[12px] font-bold p-3 rounded-md my-3"},rt=f('<div class="flex flex-row items-center justify-between bg-slate-200 p-2 rounded-md w-[300px]" data-v-d66619d9><p class="text-center font-bold text-slate-500 text-sm" data-v-d66619d9>توضیحات</p><p class="text-center font-bold text-slate-500 text-sm" data-v-d66619d9>تاریخچه</p><p class="text-center font-bold text-slate-500 text-sm" data-v-d66619d9>ادرس</p><p class="text-center font-bold text-slate-500 text-sm" data-v-d66619d9>کیف پول</p><p class="text-center font-bold text-slate-500 text-sm" data-v-d66619d9>الگو</p></div>',1),pt=s(()=>t("div",{class:"w-7/12"},[t("div",{class:"canvas-box"},[t("canvas",{id:"chart",class:"w-full h-[350px]"})])],-1)),it=f('<div class="flex flex-col space-y-3" data-v-d66619d9><div class="flex flex-row items-center my-3" data-v-d66619d9><span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-d66619d9></span> <span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-d66619d9></span><p class="font-bold text-md text-slate-800" data-v-d66619d9> اولانچ (AVAX) یک شبکه بلاک‌چینی است که قراردادهای هوشمند انعطاف‌پذیر با عملکرد بالا ارائه می‌دهد و برای تسهیل استفاده‌ی توسعه‌دهندگان برنامه‌های غیرمتمرکز (dApps)، توکن‌های غیرقابل‌معاوضه (NFT) و دیگر پلتفرم‌های پیچیده‌ی بلاک‌چینی طراحی شده است. </p></div><p class="font-bold text-md text-slate-600" data-v-d66619d9> بلاک‌چین اولانچ به توسعه‌دهندگان این امکان را می‌دهد تا بلاک‌چین‌های بدون محدودیت و تعامل‌پذیر ایجاد کنند و از سه بلاک‌چین استفاده می‌کند تا اطمینان حاصل کند که شبکه قادر به مقیاس‌پذیری و برآوردن سرعت تراکنش‌ها و تقاضاهای توان عملیاتی است. </p><div class="flex flex-row items-center my-3" data-v-d66619d9><span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-d66619d9></span> <span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-d66619d9></span><p class="font-bold text-md text-slate-800" data-v-d66619d9> به طور کلی، اولانچ از سه بلاک‌چین متمایز تشکیل شده است. زنجیره‌ی تبادل که تبادل غیرمتمرکز دارایی‌های دیجیتال را تسهیل می‌بخشد. زنجیره‌ی پلتفرم که اعتبار‌سنجی‌ها را در شبکه اولانچ انجام می‌دهد و به کاربران اجازه می‌دهد بلاک‌چین‌های خود را ایجاد کنند و در آخر، زنجیره‌ی قرارداد که بر اساس آن قراردادهای هوشمند در شبکه مستقر و اجرا می‌شوند. معماری بلاک‌چین سه‌گانه‌ی اولانچ به آن اجازه می‌دهد تراکنش‌ها را در مقیاس‌پذیری بالا انجام دهد. این ویژگی‌های اولانچ باعث شده است که این شبکه اکنون با شرکت‌های بزرگ و کسب‌وکارهای جهانی همچون مسترکارت (Mastercard) و دیلویت (Deliotte) همکاری‌هایی داشته باشد. </p></div><p class="font-bold text-md text-slate-600" data-v-d66619d9> خرید و فروش اولانچ ‏به سریع‌ترین زمان و با بهترین قیمت، بر بستر AVAX C-Chain در صرافی سرمایکس امکان‌پذیر است. برای ثبت سفارش خرید اولانچ، کافی است با مراجعه به وب‌سایت یا اپلیکیشن سرمایکس، وارد پنل کاربری خود شوید. در صورتی که حساب کاربری ندارید، ساخت و احراز هویت بسیار سریع است و همین امروز می‌توانید ثبت نام خود را انجام دهید. </p></div>',1);function mt(l,d,c,x,m,_){const a=w("font-awesome-icon");return p(),r("section",I,[t("div",N,[t("div",T,[t("div",$,[t("div",B,[D,(p(!0),r(y,null,C(x.values,e=>(p(),r("div",{key:e},[t("div",M,[t("div",P,[t("img",{src:`${e.img}`,alt:"",class:"rounded-full mx-auto w-[50px] h-[50px]"},null,8,X)]),t("div",z,[t("p",E,o(e.titleFa),1),t("p",q,o(e.titleEn),1)])]),t("div",L,[R,W,t("div",G,[H,t("p",J,o(e.highPrice24h),1)]),K,t("div",O,[Q,t("p",U,o(e.highPrice24h),1)]),Y,t("div",Z,[tt,t("p",et,o(Math.trunc(e.lowPrice24h)),1)])]),t("div",st,[t("div",at,[ot,t("p",{class:i([{green:e.percentChange_1h>0,red:e.percentChange_1h<0},"text-center text-sm font-bold text-slate-400 text-md"])},o(e.percentChange_1h),3)]),t("div",lt,[nt,t("p",{class:i([{green:e.percentChange_24h>0,red:e.percentChange_24h<0},"text-center text-sm font-bold text-slate-400 text-md"])},o(e.percentChange_24h),3)]),t("div",dt,[ct,t("p",{class:i([{green:e.percentChange_7d>0,red:e.percentChange_7d<0},"text-center text-sm font-bold text-slate-400 text-md"])},o(e.percentChange_7d),3)])]),t("button",xt,[A(a,{icon:["fas","angle-up"],class:"text-sm font-bold text-white mx-1"}),j(" خرید از سرمایکس ")]),rt]))),128))]),pt]),it])])])}const ft=b(F,[["render",mt],["__scopeId","data-v-d66619d9"]]);export{ft as default};