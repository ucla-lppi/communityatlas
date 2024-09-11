(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6444:function(e,t,s){Promise.resolve().then(s.bind(s,7466))},7466:function(e,t,s){"use strict";s.d(t,{default:function(){return p}});var r=s(7437),a=s(2265),n=s(5677),o=s(3293);let l=e=>"".concat("/dashboard").concat(e);function i(e){let{data:t}=e,s=(0,a.useRef)(null),n=e=>t.filter(t=>t.type===e).map(e=>({year:parseInt(e.year,10),value:parseFloat(e.count)})),o=["Demographics","Extreme Heat","Exposure to Pollution Burden"].map(e=>{var t,s;let r=n(e),a=[...new Set(r.map(e=>e.year))].sort((e,t)=>t-e),o=a[0],l=a[1],i=(null===(t=r.find(e=>e.year===o))||void 0===t?void 0:t.value)||0,c=(null===(s=r.find(e=>e.year===l))||void 0===s?void 0:s.value)||0;return{label:e,latestValue:i,previousValue:c,percentageChange:(0!==c?(i-c)/c*100:0).toFixed(2),isIncrease:i>c,latestYear:o,previousYear:l}});(0,a.useEffect)(()=>{let e=document.querySelectorAll(".ticker"),t=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let s=e.target,r=parseFloat(s.getAttribute("data-count")),a=0,n=performance.now(),o=e=>{let t=Math.min((e-n)/2e3,1);if(a=r*t,s.innerText=r%1==0?Math.ceil(a).toLocaleString():a.toFixed(2),t<1)requestAnimationFrame(o);else{s.innerText=r%1==0?r.toLocaleString():r.toFixed(2);let e=s.nextElementSibling;e&&(e.style.display="inline")}};requestAnimationFrame(o),t.unobserve(s)}})},{threshold:.1});return e.forEach(e=>t.observe(e)),()=>{t.disconnect()}},[t]);let i=l("/images/lppi-bg.svg");return(0,r.jsxs)("div",{ref:s,className:"degree-prod relative bg-cover bg-center",style:{backgroundImage:"url(".concat(i,")")},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-primary opacity-95 dark:opacity-95"})," ",(0,r.jsx)("div",{className:"container mx-auto py-4 relative z-10",children:(0,r.jsxs)("h2",{className:"headline headline--medium t-center",children:["California Latino ",(0,r.jsx)("strong",{children:"Wellness Summary Statistics"})]})}),(0,r.jsx)("div",{className:"flex justify-around container mx-auto py-8 relative z-10 responsive-container",children:o.map((e,t)=>(0,r.jsxs)("div",{className:"box flex-1 p-4 m-2 border border-gray-300 bg-white shadow-lg text-center",children:[(0,r.jsx)("div",{className:"desc no-margin",style:{fontSize:"1.5rem"},children:e.label}),(0,r.jsx)("div",{className:"num",style:{fontSize:"3rem"},children:(0,r.jsx)("strong",{children:(0,r.jsx)("span",{className:"ticker c-blue--darker","data-count":e.latestValue,children:e.latestValue})})}),(0,r.jsx)("div",{className:"headline--small no-margin-bottom",style:{color:"#0988c9",fontSize:"1.5rem"},children:(0,r.jsxs)("strong",{children:[(0,r.jsx)("span",{className:"ticker","data-count":e.percentageChange,"data-increase":e.isIncrease,children:e.percentageChange}),"%",(0,r.jsx)("span",{className:"triangle",style:{display:"none"},children:e.isIncrease?" ▲":" ▼"})]})}),(0,r.jsxs)("div",{className:"desc c-blue no-padding",style:{color:"#0988c9",fontSize:"1rem"},children:[e.latestYear," vs. ",e.previousYear]})]},t))})]})}var c=s(3518),d=s.n(c),u=s(5853);function m(){let e=(0,a.useRef)(null),t=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let s=new(d()).Map({container:e.current,style:"https://demotiles.maplibre.org/style.json",center:[-119.4179,36.7783],zoom:6,attributionControl:!1}),r=null;s.on("load",()=>{console.log("Map loaded successfully"),(0,u.Z)("/data/ca_counties_simplified.geojson").then(e=>{console.log("GeoJSON loaded successfully",e),e.features.forEach((e,t)=>{e.id||(e.id=e.properties.ansi||e.properties.abcode||t)}),s.addSource("counties",{type:"geojson",data:e}),s.addLayer({id:"counties-layer",type:"fill",source:"counties",paint:{"fill-color":"#888888","fill-opacity":.4,"fill-outline-color":"#2774AE"}}),s.addLayer({id:"counties-borders",type:"line",source:"counties",paint:{"line-color":"#000000","line-width":1}}),console.log("Layers added successfully");let a=new(d()).LngLatBounds;e.features.forEach(e=>{e.geometry.coordinates.forEach(e=>{e.forEach(e=>{a.extend(e)})})}),s.fitBounds(a,{padding:20}),s.dragPan.disable(),s.scrollZoom.disable(),s.on("mousemove","counties-layer",e=>{if(console.log("Mouse move event triggered"),e.features.length>0){let a=e.features[0];s.getCanvas().style.cursor="pointer",e.lngLat;let n=a.properties.name;console.log("County hovered:",n);let o=t.current;o.innerHTML="\n                <strong>".concat(n,"</strong><br>\n                index indicator: ").concat("Indicator summary (can be high, low)",'<br>\n                <span class="c-blue"><strong>Click county for more details</strong></span>\n              '),o.style.display="block",o.style.left="".concat(e.point.x+10,"px"),o.style.top="".concat(e.point.y+10,"px"),null!==r&&s.setFeatureState({source:"counties",id:r},{hover:!1}),r=a.id,s.setFeatureState({source:"counties",id:r},{hover:!0})}}),s.on("mouseleave","counties-layer",()=>{console.log("Mouse leave event triggered"),s.getCanvas().style.cursor="",t.current.style.display="none",null!==r&&(s.setFeatureState({source:"counties",id:r},{hover:!1}),r=null)}),s.addLayer({id:"counties-highlight",type:"fill",source:"counties",paint:{"fill-color":"#FFD100","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.75,0]}})}).catch(e=>console.error("Error loading GeoJSON:",e))}),s.on("error",e=>{console.error("Map loading error:",e)});let a=new ResizeObserver(()=>{s.resize()});return a.observe(e.current),()=>{s.remove(),a.disconnect()}},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"text-center my-4",children:[(0,r.jsx)("div",{className:"text-3xl font-bold",children:"California County Profiles"}),(0,r.jsx)("div",{className:"text-xl text-gray-600",children:"Click to view California County Wellness Profiles"})]}),(0,r.jsx)("div",{ref:e,id:"map",className:"w-full",style:{height:"50vh",marginTop:"16px",position:"relative"},children:(0,r.jsx)("div",{ref:t,id:"popup",style:{display:"none",position:"absolute",backgroundColor:"white",border:"1px solid black",padding:"5px",pointerEvents:"none"}})})]})}function p(){let[e,t]=(0,a.useState)([]),[s,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=l("/data/summaryData.csv");(0,n.gy)(e).then(e=>{t(e.map(e=>({...e,count:parseFloat(e.count),year:parseInt(e.year,10)})))}).catch(e=>console.error("Error fetching data:",e))},[]),(0,a.useEffect)(()=>{s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[s]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("nav",{className:"sticky top-0 z-50 flex justify-around bg-gray-800 text-white p-4",children:[(0,r.jsx)(o.rU,{to:"overview",smooth:!0,duration:800,className:"cursor-pointer",children:"Overview"}),(0,r.jsx)(o.rU,{to:"map",smooth:!0,duration:800,className:"cursor-pointer",children:"Map"}),(0,r.jsx)(o.rU,{to:"charts",smooth:!0,duration:800,className:"cursor-pointer",children:"Charts"}),(0,r.jsx)("button",{onClick:()=>c(!s),className:"cursor-pointer",children:(0,r.jsx)("i",{className:"fas ".concat(s?"fa-sun":"fa-moon")})})]}),(0,r.jsx)("div",{id:"overview",className:"relative z-10",children:(0,r.jsx)(i,{data:e})}),(0,r.jsx)("div",{id:"map",className:"relative z-0",children:(0,r.jsx)(m,{})}),(0,r.jsx)("div",{id:"charts",className:"w-full h-1/2 flex justify-around"})]})}s(1930),s(1656)},1930:function(){}},function(e){e.O(0,[606,734,402,690,971,23,744],function(){return e(e.s=6444)}),_N_E=e.O()}]);