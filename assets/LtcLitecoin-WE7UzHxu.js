import{_ as u,F as v,r as f,i as b,j as l,k as g,a as w,c as r,b as t,y,z as C,f as m,o as p,t as a,n as i,d as j,m as L,s as S,x as k}from"./index-yQ5funnV.js";import{C as I}from"./auto-ovie_dKz.js";const F={name:"LtcLitecoin",components:{FontAwesomeIcon:v},setup(){const o=f("../src/assets/image/ltc.jpg");let n=b([]);const d=f("1h 1m 1d 7d"),c=b([]);l(()=>{n.push({date1:new Date().getTime()})});const _=l(()=>{g.get("https://api.sarmayex.com/api/v2/currency/symbol/LTC").then(e=>{e.status===200&&c.push(e.data.currency)}).catch(e=>{console.log(e.message)})}),h=l(()=>{let e=document.querySelector("#chart").getContext("2d");return new I(e,{type:"line",data:{labels:["1/10/2024","1/11/2024","1/12/2024","1/14/2024"],datasets:[{label:d.value.split(" ").reverse().join(" "),data:[375e4,365e4,389e4],borderColor:"rgb(86, 152, 252)",backgroundColor:"rgb(115, 165, 240)",borderWidth:1,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1}})}),x=l(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});return{imgLtc:o,timer:n,label:d,values:c,sum:_,showChart:h,topScroll:x}}},s=o=>(S("data-v-96a994dc"),o=o(),k(),o),N={class:"tron"},T={class:"container mx-auto p-2"},V={class:"w-full h-auto"},B={class:"flex flex-row items-center justify-between"},P={class:"w-4/12 flex flex-col"},$=s(()=>t("div",{class:"flex flex-row items-center justify-around w-[300px] h-[50px] p-1 rounded-md bg-slate-200"},[t("button",{type:"button",class:"text-slate-500 text-[12px] font-bold mx-1"},"خرید لایت کوین"),t("button",{type:"button",class:"text-slate-500 text-[12px] font-bold mx-1"},"فروش لایت کوین"),t("button",{type:"button",class:"text-slate-500 text-[12px] font-bold mx-1"},"بازار جهانی")],-1)),z={class:"flex flex-row items-center justify-start"},A={class:"w-[70px] h-[70px] border border-2 border-slate-300 rounded-md p-1 my-3"},D=["src"],E={class:"flex flex-col"},M={class:"text-center font-bold text-slate-800 text-sm ny-1 mr-2"},q={class:"text-center font-bold text-slate-800 text-sm ny-1 mr-2"},R={class:"flex flex-row items-center justify-start my-3"},W=s(()=>t("span",{class:"w-[5px] h-[50px] bg-orange-600 ml-2"},null,-1)),G=s(()=>t("span",{class:"w-[5px] h-[50px] bg-orange-600 ml-2"},null,-1)),H={class:"flex flex-col"},J=s(()=>t("p",{class:"text-center font-bold text-sm text-slate-800 text-md mx-1 my-1"},"قیمت به تومان",-1)),K={class:"text-center font-bold text-sm text-slate-800 text-md mx-1 my-1"},O=s(()=>t("span",{class:"w-[5px] h-[50px] bg-slate-300 ml-2"},null,-1)),Q={class:"flex flex-col"},U=s(()=>t("p",{class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},"بالاترین قیمت روز",-1)),X={class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},Y=s(()=>t("span",{class:"w-[5px] h-[50px] bg-slate-300 ml-2"},null,-1)),Z={class:"flex flex-col"},tt=s(()=>t("p",{class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},"پایین قیمت روز",-1)),et={class:"text-center font-bold text-sm text-slate-400 text-md mx-1 my-1"},st={class:"flex flex-row items-center justify-start my-2"},at={class:"flex flex-col w-3/12 my-2"},ot=s(()=>t("p",{class:"text-center font-bold text-slate-400 text-md text-sm"},"1 ساعت",-1)),ct={class:"flex flex-col w-3/12 my-2"},lt=s(()=>t("p",{class:"text-center font-bold text-slate-400 text-md text-sm"},"24 ساعت",-1)),nt={class:"flex flex-col w-3/12 my-2"},dt=s(()=>t("p",{class:"text-center font-bold text-slate-400 text-md text-sm"},"1 هفته",-1)),xt={type:"button",class:"bg-sky-900 text-white items-center text-[12px] font-bold p-3 rounded-md my-3"},rt=m('<div class="flex flex-row items-center justify-between bg-slate-200 p-2 rounded-md w-[300px]" data-v-96a994dc><p class="text-center font-bold text-slate-500 text-sm" data-v-96a994dc>توضیحات</p><p class="text-center font-bold text-slate-500 text-sm" data-v-96a994dc>تاریخچه</p><p class="text-center font-bold text-slate-500 text-sm" data-v-96a994dc>ادرس</p><p class="text-center font-bold text-slate-500 text-sm" data-v-96a994dc>کیف پول</p><p class="text-center font-bold text-slate-500 text-sm" data-v-96a994dc>الگو</p></div>',1),pt=s(()=>t("div",{class:"w-7/12"},[t("div",{class:"canvas-box"},[t("canvas",{id:"chart",class:"w-full h-[350px]"})])],-1)),it={class:"flex flex-col space-y-3"},mt=m('<div class="flex flex-row items-center my-3" data-v-96a994dc><span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-96a994dc></span> <span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-96a994dc></span><p class="font-bold text-md text-slate-800" data-v-96a994dc> لایت کوین (Litecoin)، یکی از ارزهای دیجیتال برجسته در دنیای کریپتوکارنسی است که در سال ۲۰۱۱ تأسیس شد. این ارز دیجیتال از تکنولوژی بلاکچین بهره می‌برد و به عنوان یک ارز دیجیتال خودتنظیمی شناخته می‌شود. از آن زمان، لایت کوین به سرعت جایگاه خود را در دنیای کریپتوکارنسی بدست آورده و جلب توجه بسیاری از سرمایه‌گذاران و علاقه‌مندان به فناوری بلاکچین کرده است. </p></div><p class="font-bold text-md text-slate-600" data-v-96a994dc> در این مقاله، ما به بررسی عمیق‌تر لایت کوین، تاریخچه آن، ویژگی‌ها و تفاوت‌های آن با دیگر ارزهای دیجیتال می‌پردازیم. همچنین، تأثیرات لایت کوین در جهان کریپتوکارنسی و کاربردهای آن در صنایع مختلف را مورد بررسی قرار خواهیم داد. این مقاله به خوانندگان این امکان را می‌دهد تا بهترین اطلاعات را در مورد این ارز دیجیتال جذاب و مهم کسب کنند و تصمیم‌گیری‌های مرتبط با سرمایه‌گذاری و معاملات در دنیای کریپتوکارنسی را به اساس داده‌های قوی‌تری انجام دهند. </p>',2),_t=["src"],ht=m('<div class="flex flex-row items-center my-3" data-v-96a994dc><span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-96a994dc></span> <span class="w-[5px] h-[50px] bg-orange-600 ml-2" data-v-96a994dc></span><p class="font-bold text-md text-slate-800" data-v-96a994dc> همان طور که در صفحه لایت کوین چیست نیز گفته شد، لایت کوین یکی از ارزهای دیجیتال پیشینه‌دار در دنیای کریپتوکارنسی‌ها محسوب می‌شود. چارلی لی، موسس این ارز دیجیتال، در سال ۲۰۱۱ این پروژه را آغاز کرد. چارلی لی، کارمند پیشین شرکت گوگل، اقدام به توسعه لایت کوین کرد تا مشکلاتی همچون زمان طولانی تراکنش‌ها، هزینه‌ها، و مشکلات ماینینگ متمرکز که در بیت‌کوین وجود داشت، حل شوند. </p></div><p class="font-bold text-md text-slate-600" data-v-96a994dc> یکی از اهداف اصلی لایت کوین کاهش زمان تأیید تراکنش‌ها بود. این اهداف باعث شد تا زمان تأیید هر بلاک از ۱۰ دقیقه به ۲٫۵ دقیقه کاهش یابد، که این به امکان تأیید تعداد بیشتری از تراکنش‌ها در واحد زمانی مشخص انجام دهد. در حال حاضر، حداکثر تعداد لایت کوین‌هایی که می‌توان استخراج کرد، ۱۴٬۴۰۰ واحد در روز است. لایت کوین نیز همانند دیگر ارزهای دیجیتال به عنوان وسیله‌ای برای پرداخت‌های جهانی در دنیای دیجیتال شناخته می‌شود و از تکنولوژی بلاکچین بهره می‌برد </p>',2);function ft(o,n,d,c,_,h){const x=w("font-awesome-icon");return p(),r("section",N,[t("div",T,[t("div",V,[t("div",B,[t("div",P,[$,(p(!0),r(y,null,C(c.values,e=>(p(),r("div",{key:e},[t("div",z,[t("div",A,[t("img",{src:`${e.img}`,alt:"",class:"rounded-full mx-auto w-[50px] h-[50px]"},null,8,D)]),t("div",E,[t("p",M,a(e.titleFa),1),t("p",q,a(e.titleEn),1)])]),t("div",R,[W,G,t("div",H,[J,t("p",K,a(e.highPrice24h),1)]),O,t("div",Q,[U,t("p",X,a(e.highPrice24h),1)]),Y,t("div",Z,[tt,t("p",et,a(Math.trunc(e.lowPrice24h)),1)])]),t("div",st,[t("div",at,[ot,t("p",{class:i([{green:e.percentChange_1h>0,red:e.percentChange_1h<0},"text-center text-sm font-bold text-slate-400 text-md"])},a(e.percentChange_1h),3)]),t("div",ct,[lt,t("p",{class:i([{green:e.percentChange_24h>0,red:e.percentChange_24h<0},"text-center text-sm font-bold text-slate-400 text-md"])},a(e.percentChange_24h),3)]),t("div",nt,[dt,t("p",{class:i([{green:e.percentChange_7d>0,red:e.percentChange_7d<0},"text-center text-sm font-bold text-slate-400 text-md"])},a(e.percentChange_7d),3)])]),t("button",xt,[j(x,{icon:["fas","angle-up"],class:"text-sm font-bold text-white mx-1"}),L(" خرید از سرمایکس ")]),rt]))),128))]),pt]),t("div",it,[mt,t("img",{src:c.imgLtc,alt:"",class:"w-[200px] h-[200px] rounded-md"},null,8,_t),ht])])])])}const gt=u(F,[["render",ft],["__scopeId","data-v-96a994dc"]]);export{gt as default};
