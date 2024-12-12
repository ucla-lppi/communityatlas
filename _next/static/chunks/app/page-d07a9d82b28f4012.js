(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6444:function(e,t,a){Promise.resolve().then(a.bind(a,9507))},9507:function(e,t,a){"use strict";a.d(t,{default:function(){return b}});var s=a(7437),r=a(2265),o=a(5677),n=a(3293),l=a(7138),i=a(6466),c=a.n(i);a(1656);var d=e=>{let{darkMode:t,setDarkMode:a}=e;return(0,s.jsx)("header",{className:"".concat(c().header," p-4 bg-gray-800 text-white"),children:(0,s.jsxs)("nav",{className:"flex justify-between items-center",children:[(0,s.jsxs)("ul",{className:"flex space-x-4",children:[(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/impact",children:"Impact"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/about",children:"About"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/resources",children:"Resources"})})]}),(0,s.jsx)("button",{onClick:()=>a(!t),className:"text-white",children:(0,s.jsx)("i",{className:"fas ".concat(t?"fa-sun":"fa-moon")})})]})})};let u=e=>"".concat("/lppi-dashboard").concat(e);var m=a(8355),h=a.n(m);function p(){let e=(0,r.useRef)(null),[t,a]=(0,r.useState)([]),[o,n]=(0,r.useState)(""),[l,i]=(0,r.useState)(!1),[c,d]=(0,r.useState)({});(0,r.useEffect)(()=>{n(document.body.classList.contains("dark-mode")?"dark-mode":""),(async()=>{let e;{let t=await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vS_YYdPSeEUznhdpsonMOsvZQ2Lq3R2SuJKSbvDwJ9vwvv5V4RMZEwKISWhWTpy_kokJy-DTWa5cJVF/pub?output=csv");e=await t.text()}h().parse(e,{header:!0,complete:e=>{a(e.data),i(!0)}})})()},[]);let m={Demographics:["White","Latino"],"Extreme Heat":["High Impact Latino","High Impact White"],"Exposure to Pollution Burden":["High Impact Latino","High Impact White"]},p=(e,a)=>t.filter(t=>t.type===e&&t.category===a).reduce((e,t)=>e+parseFloat(t.count),0),f=Object.keys(m).map(e=>{var a,s;let r=m[e].map(t=>{let a=p(e,t);return{label:t,totalValue:a}}),o=r.find(e=>e.label.includes("Latino")).totalValue,n=r.find(e=>e.label.includes("White")).totalValue,l=o-n,i=(l/n*100).toFixed(2),c=i.endsWith(".00")?parseInt(i):i,d=(null===(a=t.find(t=>t.type===e))||void 0===a?void 0:a.headerIntro)||"",u=(null===(s=t.find(t=>t.type===e))||void 0===s?void 0:s.headerIndicator)||"";return{category:e,subcategories:r,discrepancy:l,formattedDiscrepancyPercentage:c,latinoValue:o,whiteValue:n,headerIntro:d,headerIndicator:u}});(0,r.useEffect)(()=>{let e=document.querySelectorAll(".ticker"),t=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let a=e.target,s=parseFloat(a.getAttribute("data-count")),r=0,o=performance.now(),n=e=>{let t=Math.min((e-o)/2e3,1);if(r=s*t,a.innerText=s%1==0?Math.ceil(r).toLocaleString():r.toFixed(2),t<1)requestAnimationFrame(n);else{a.innerText=s%1==0?s.toLocaleString():r.toFixed(2);let e=a.nextElementSibling;e&&(e.style.display="inline")}};requestAnimationFrame(n),t.unobserve(a)}})},{threshold:.1});return e.forEach(e=>t.observe(e)),()=>{t.disconnect()}},[t]),(0,r.useEffect)(()=>{l&&document.querySelectorAll(".ticker, .discrepancy, .comparison").forEach(e=>{e.classList.add("fade-in")})},[l]),(0,r.useEffect)(()=>{if(l){let e={};document.querySelectorAll(".box").forEach((t,a)=>{e[a]=t.offsetHeight}),d(e)}},[l]);let x=u("/images/lppi-bg.svg"),g=(e,t)=>(0,s.jsxs)("span",{children:[e," ",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{style:{fontSize:"1.5rem"},children:t})]});return(0,s.jsxs)("div",{ref:e,className:"fancy-box relative bg-cover bg-center ".concat(o),style:{backgroundImage:"url(".concat(x,")")},children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-primary opacity-95 dark:opacity-95"})," ",(0,s.jsx)("div",{className:"container mx-auto py-4 relative z-10",children:(0,s.jsxs)("h2",{className:"headline headline--medium t-center",children:["California Latino ",(0,s.jsx)("strong",{children:"Wellness Summary Statistics"})]})}),(0,s.jsx)("div",{className:"flex flex-wrap justify-around container mx-auto py-8 relative z-10 responsive-container",children:f.map((e,t)=>(0,s.jsx)("div",{className:"box flex-1 p-4 m-2 border border-gray-300 shadow-lg text-center ".concat("dark-mode"===o?"dark-box":""),style:{minHeight:l?"auto":"".concat(c[t]||200,"px")},children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{className:"desc no-margin ".concat("dark-mode"===o?"dark-desc":""),style:{fontSize:"1.25rem"},children:g(e.headerIntro,e.headerIndicator)}),(0,s.jsx)("h2",{className:"latino-count ".concat("dark-mode"===o?"dark-latino-count":""),style:{fontSize:"3rem",marginTop:"0.5rem"},children:(0,s.jsx)("strong",{children:(0,s.jsx)("span",{className:"ticker c-blue--darker","data-count":e.latinoValue,children:e.latinoValue})})}),(0,s.jsx)("h4",{className:"discrepancy ".concat("dark-mode"===o?"dark-discrepancy":""),style:{fontSize:"1.25rem",marginTop:"0.5rem"},children:(0,s.jsxs)("strong",{children:[(0,s.jsxs)("span",{children:[e.formattedDiscrepancyPercentage,"%"]}),(0,s.jsx)("span",{className:"triangle",style:{display:"inline",marginLeft:"0.5rem"},children:e.discrepancy>=0?"▲":"▼"})]})}),(0,s.jsx)("h6",{className:"comparison ".concat("dark-mode"===o?"dark-comparison":""),style:{fontSize:"0.875rem",marginTop:"0.5rem"},children:(0,s.jsxs)("span",{children:["(Latino ",e.latinoValue.toLocaleString()," vs White ",e.whiteValue.toLocaleString(),")"]})})]}):(0,s.jsx)("div",{className:"loading-spinner-container",children:(0,s.jsx)("div",{className:"loading-spinner"})})},t))})]})}var f=a(3518),x=a.n(f),g=a(5853);let y=e=>e.map((e,t)=>{let a,s;t<5?(a="low",s="low"):t<10?(a="medium",s="medium"):(a="high",s="high");let r=Math.floor(100*Math.random())+1;return{...e,properties:{...e.properties,extremeHeat:a,pollutionBurden:s,latinoPopulation:r,whitePopulation:100-r}}});var v={abbrev:{label:""},extremeHeat:{label:"Extreme Heat",class:!0},pollutionBurden:{label:"Pollution Burden",class:!0},latinoPopulation:{label:"Latino Population",suffix:"%"},whitePopulation:{label:"White Population",suffix:"%"}};function j(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null),[a,o]=(0,r.useState)("");return(0,r.useEffect)(()=>{o(document.body.classList.contains("dark-mode")?"dark-mode":"");let a=new(x()).Map({container:e.current,style:"https://demotiles.maplibre.org/style.json",center:[-119.4179,36.7783],zoom:6,attributionControl:!1}),s=null;a.on("load",()=>{console.log("Map loaded successfully");let e=u("/data/ca_counties_simplified.geojson");(0,g.Z)(e).then(e=>{console.log("GeoJSON loaded successfully",e),e.features.forEach((e,t)=>{e.id||(e.id=e.properties.ansi||e.properties.abcode||t)}),e.features=y(e.features),a.addSource("counties",{type:"geojson",data:e}),a.addLayer({id:"counties-layer",type:"fill",source:"counties",paint:{"fill-color":"#888888","fill-opacity":.4,"fill-outline-color":"#2774AE"}}),a.addLayer({id:"counties-borders",type:"line",source:"counties",paint:{"line-color":"#000000","line-width":1}}),console.log("Layers added successfully");let r=new(x()).LngLatBounds;e.features.forEach(e=>{e.geometry.coordinates.forEach(e=>{e.forEach(e=>{r.extend(e)})})}),a.fitBounds(r,{padding:20}),a.dragPan.disable(),a.scrollZoom.disable(),a.on("mousemove","counties-layer",e=>{if(console.log("Mouse move event triggered"),e.features.length>0){let s=e.features[0];a.getCanvas().style.cursor="pointer",e.lngLat;let r=s.properties.name;console.log("County hovered:",r);let o=t.current,n="<strong>".concat(r,"</strong><br>");Object.keys(v).forEach(e=>{if(void 0!==s.properties[e]){let t=v[e],a=s.properties[e],r=t.class?a:"",o=t.suffix||"",l=t.label?"".concat(t.label,": "):"";n+="".concat(l,'<span class="').concat(r,'">').concat(a).concat(o,"</span><br>")}}),n+='<span class="c-blue"><strong>Click county for more details</strong></span>',o.innerHTML=n,o.style.display="block",o.style.left="".concat(e.point.x+10,"px"),o.style.top="".concat(e.point.y+10,"px")}}),a.on("mouseleave","counties-layer",()=>{console.log("Mouse leave event triggered"),a.getCanvas().style.cursor="",t.current.style.display="none",null!==s&&(a.setFeatureState({source:"counties",id:s},{hover:!1}),s=null)}),a.addLayer({id:"counties-highlight",type:"fill",source:"counties",paint:{"fill-color":"#FFD100","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.75,0]}})}).catch(e=>console.error("Error loading GeoJSON:",e))}),a.on("error",e=>{console.error("Map loading error:",e)});let r=new ResizeObserver(()=>{a.resize()});return r.observe(e.current),()=>{a.remove(),r.disconnect()}},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-center my-4",children:[(0,s.jsx)("div",{className:"text-3xl font-bold",children:"California County Profiles"}),(0,s.jsx)("div",{className:"text-xl text-gray-600",children:"Click to view California County Wellness Profiles"})]}),(0,s.jsx)("div",{ref:e,id:"map",className:"w-full",style:{height:"50vh",marginTop:"16px",position:"relative"},children:(0,s.jsx)("div",{ref:t,id:"popup",className:a})})]})}function b(){let[e,t]=(0,r.useState)([]),[a,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=u("/data/summaryData.csv");(0,o.gy)(e).then(e=>{t(e.map(e=>({...e,count:parseFloat(e.count),year:parseInt(e.year,10)})))}).catch(e=>console.error("Error fetching data:",e))},[]),(0,r.useEffect)(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]),(0,s.jsxs)("div",{className:a?"dark":"",children:[(0,s.jsx)(d,{darkMode:a,setDarkMode:l}),(0,s.jsxs)("nav",{className:"sticky top-0 z-50 flex justify-around bg-gray-800 text-white p-4",children:[(0,s.jsx)(n.rU,{to:"overview",smooth:!0,duration:800,className:"cursor-pointer",children:"Overview"}),(0,s.jsx)(n.rU,{to:"map",smooth:!0,duration:800,className:"cursor-pointer",children:"Map"}),(0,s.jsx)(n.rU,{to:"charts",smooth:!0,duration:800,className:"cursor-pointer",children:"Charts"})]}),(0,s.jsx)("div",{id:"overview",className:"relative z-10",children:(0,s.jsx)(p,{data:e,darkMode:a})}),(0,s.jsx)("div",{id:"map",className:"relative z-0",children:(0,s.jsx)(j,{})}),(0,s.jsx)("div",{id:"charts",className:"w-full h-1/2 flex justify-around"})]})}a(1930)},1930:function(){},6466:function(e){e.exports={header:"Header_header__ceAaR",nav:"Header_nav__vEp9l",navList:"Header_navList__utuGl",navItem:"Header_navItem__jn84q",darkModeToggle:"Header_darkModeToggle__Z4txR"}}},function(e){e.O(0,[734,349,606,402,720,971,23,744],function(){return e(e.s=6444)}),_N_E=e.O()}]);