(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8778)}])},6101:function(e,t){"use strict";var r,n,i,s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return h},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return d}});let o="refresh",a="navigate",u="restore",l="server-patch",c="prefetch",f="fast-refresh",h="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(i=r||(r={})).AUTO="auto",i.FULL="full",i.TEMPORARY="temporary",(s=n||(n={})).fresh="fresh",s.reusable="reusable",s.expired="expired",s.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7670:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(1297),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(8754),i=r(5893),s=n._(r(7294)),o=r(9975),a=r(2712),u=r(8547),l=r(4350),c=r(8109),f=r(4494),h=r(5716),d=r(388),p=r(7670),_=r(6220),m=r(6101),g=new Set;function v(e,t,r,n,i,s){if(s||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}(async()=>s?e.prefetch(t,i):e.prefetch(t,r,n))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let b=s.default.forwardRef(function(e,t){let r,n;let{href:u,as:g,children:b,prefetch:k=null,passHref:x,replace:E,shallow:C,scroll:R,locale:w,onClick:O,onMouseEnter:S,onTouchStart:j,legacyBehavior:T=!1,...I}=e;r=b,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let A=s.default.useContext(f.RouterContext),L=s.default.useContext(h.AppRouterContext),M=null!=A?A:L,P=!A,D=!1!==k,N=null===k?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:F,as:z}=s.default.useMemo(()=>{if(!A){let e=y(u);return{href:e,as:g?y(g):e}}let[e,t]=(0,o.resolveHref)(A,u,!0);return{href:e,as:g?(0,o.resolveHref)(A,g):t||e}},[A,u,g]),H=s.default.useRef(F),U=s.default.useRef(z);T&&(n=s.default.Children.only(r));let q=T?n&&"object"==typeof n&&n.ref:t,[B,K,W]=(0,d.useIntersection)({rootMargin:"200px"}),Z=s.default.useCallback(e=>{(U.current!==z||H.current!==F)&&(W(),U.current=z,H.current=F),B(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[z,q,F,W,B]);s.default.useEffect(()=>{M&&K&&D&&v(M,F,z,{locale:w},{kind:N},P)},[z,F,K,w,D,null==A?void 0:A.locale,M,P,N]);let Q={ref:Z,onClick(e){T||"function"!=typeof O||O(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,n,i,o,u,l,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:o,locale:l,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})};c?s.default.startTransition(h):h()}(e,M,F,z,E,C,R,w,P)},onMouseEnter(e){T||"function"!=typeof S||S(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(D||!P)&&v(M,F,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:N},P)},onTouchStart:function(e){T||"function"!=typeof j||j(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(D||!P)&&v(M,F,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:N},P)}};if((0,l.isAbsoluteUrl)(z))Q.href=z;else if(!T||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==w?w:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);Q.href=t||(0,_.addBasePath)((0,c.addLocale)(z,e,null==A?void 0:A.defaultLocale))}return T?s.default.cloneElement(n,Q):(0,i.jsx)("a",{...I,...Q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(7294),i=r(460),s="function"==typeof IntersectionObserver,o=new Map,a=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,l=u||!s,[c,f]=(0,n.useState)(!1),h=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{h.current=e},[]);return(0,n.useEffect)(()=>{if(s){if(l||c)return;let e=h.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},a.push(r),o.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[l,r,t,c,h.current]),[d,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8778:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5893),i=r(1151),s=r(350),o=r(5504);r(7294);var a=r(1664),u=r.n(a),l=r(2094),c=r.n(l);r(8578);var f=e=>{let{darkMode:t,setDarkMode:r}=e;return(0,n.jsx)("header",{className:"".concat(c().header," p-4 bg-gray-800 text-white"),children:(0,n.jsxs)("nav",{className:"flex justify-between items-center",children:[(0,n.jsxs)("ul",{className:"flex space-x-4",children:[(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/impact",children:"Impact"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/about",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/resources",children:"Resources"})})]}),(0,n.jsx)("button",{onClick:()=>r(!t),className:"text-white",children:(0,n.jsx)("i",{className:"fas ".concat(t?"fa-sun":"fa-moon")})})]})})},h=e=>{let{children:t,darkMode:r,setDarkMode:i}=e;return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,n.jsx)(f,{darkMode:r,setDarkMode:i}),(0,n.jsx)("main",{className:"flex-grow p-4 md:p-8 lg:p-12",children:t}),(0,n.jsx)("footer",{className:"p-4 bg-gray-800 text-white text-center",children:(0,n.jsx)("p",{children:"My Site Footer"})})]})};r(9866);var d=r(1163);let p={CustomComponent:s.Z,HorizontalScrollWithCSV:o.Z};var _=function(e){let{Component:t,pageProps:r}=e,s=!["/impact"].includes((0,d.useRouter)().pathname);return(0,n.jsx)(h,{children:(0,n.jsx)(i.Z,{components:p,children:(0,n.jsx)("div",{className:s?"prose":"",children:(0,n.jsx)(t,{...r})})})})}},350:function(e,t,r){"use strict";var n=r(5893);t.Z=()=>(0,n.jsx)("div",{className:"custom-component",children:"This is a custom component."})},5504:function(e,t,r){"use strict";var n=r(5893),i=r(7294),s=r(7460),o=r.n(s),a=r(9499),u=r.n(a);t.Z=e=>{let{csvUrl:t,type:r}=e,[s,a]=(0,i.useState)([]),l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{(async()=>{try{let e=await fetch(t);if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let n=await e.text();o().parse(n,{header:!0,complete:e=>{let t=e.data.filter(e=>e.Type===r);a(t)},error:e=>{console.error("Error parsing CSV:",e)}})}catch(e){console.error("Error fetching CSV:",e)}})()},[t,r]),(0,n.jsxs)("div",{className:u().wrapper,children:[(0,n.jsx)("button",{className:"".concat(u().scrollButton," ").concat(u().left),onClick:()=>{if(l.current){let{scrollLeft:e,clientWidth:t,scrollWidth:r}=l.current;0===e?l.current.scrollTo({left:r,behavior:"smooth"}):l.current.scrollBy({left:-t,behavior:"smooth"})}},children:"<"}),(0,n.jsxs)("div",{className:u().scrollContainer,ref:l,children:[0===s.length&&(0,n.jsxs)("p",{children:["No items found for type: ",r]}),s.map((e,t)=>(0,n.jsxs)("div",{className:u().scrollItem,children:[(0,n.jsx)("img",{src:e.File,alt:e.Title}),(0,n.jsx)("h3",{children:e.Title}),(0,n.jsx)("p",{children:e["Post date"]})]},t))]}),(0,n.jsx)("button",{className:"".concat(u().scrollButton," ").concat(u().right),onClick:()=>{if(l.current){let{scrollLeft:e,clientWidth:t,scrollWidth:r}=l.current;e+t>=r?l.current.scrollTo({left:0,behavior:"smooth"}):l.current.scrollBy({left:t,behavior:"smooth"})}},children:">"})]})}},8578:function(){},9866:function(){},9499:function(e){e.exports={wrapper:"HorizontalScroll_wrapper__DUlff",scrollContainer:"HorizontalScroll_scrollContainer__bJ5T2",scrollItem:"HorizontalScroll_scrollItem__8qz1O",scrollButton:"HorizontalScroll_scrollButton__tjySR",left:"HorizontalScroll_left__TeS0h",right:"HorizontalScroll_right__0Hxsx"}},2094:function(e){e.exports={header:"Header_header__ceAaR",nav:"Header_nav__vEp9l",navList:"Header_navList__utuGl",navItem:"Header_navItem__jn84q",darkModeToggle:"Header_darkModeToggle__Z4txR"}},1664:function(e,t,r){e.exports=r(4116)},1163:function(e,t,r){e.exports=r(6036)},7460:function(e,t){var r,n,i;n=[],void 0!==(i="function"==typeof(r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,i={},s=0,o={parse:function(r,n){var a,u=(n=n||{}).dynamicTyping||!1;if(k(u)&&(n.dynamicTypingFunction=u,u={}),n.dynamicTyping=u,n.transform=!!k(n.transform)&&n.transform,n.worker&&o.WORKERS_SUPPORTED){var d=function(){if(!o.WORKERS_SUPPORTED)return!1;var r,n,a=(r=t.URL||t.webkitURL||null,n=e.toString(),o.BLOB_URL||(o.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=m,u.id=s++,i[u.id]=u}();return d.userStep=n.step,d.userChunk=n.chunk,d.userComplete=n.complete,d.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void d.postMessage({input:r,config:n,workerId:d.id})}var p=null;return o.NODE_STREAM_INPUT,"string"==typeof r?(r=65279===(a=r).charCodeAt(0)?a.slice(1):a,p=n.download?new l(n):new f(n)):!0===r.readable&&k(r.read)&&k(r.on)?p=new h(n):(t.File&&r instanceof File||r instanceof Object)&&(p=new c(n)),p.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",a='"',u=a+a,l=!1,c=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(f=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var h=RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return d(null,e,l);if("object"==typeof e[0])return d(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),d(e.fields||[],e.data||[],l);throw Error("Unable to serialize unrecognized input");function d(e,t,r){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&n){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=_(e[l],l);0<t.length&&(o+=s)}for(var c=0;c<t.length;c++){var f=a?e.length:t[c].length,h=!1,d=a?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!a&&(h="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&a){for(var p=[],m=0;m<f;m++){var g=u?e[m]:m;p.push(t[c][g])}h=""===p.join("").trim()}if(!h){for(var v=0;v<f;v++){0<v&&!d&&(o+=i);var y=a&&u?e[v]:v;o+=_(t[c][y],v)}c<t.length-1&&(!r||0<f&&!d)&&(o+=s)}}return o}function _(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=!1;f&&"string"==typeof e&&f.test(e)&&(e="'"+e,n=!0);var s=e.toString().replace(h,u);return(n=n||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,o.BAD_DELIMITERS)||-1<s.indexOf(i)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?a+s+a:s}}};if(o.RECORD_SEP="\x1e",o.UNIT_SEP="\x1f",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!r&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=_,o.ParserHandle=d,o.NetworkStreamer=l,o.FileStreamer=c,o.StringStreamer=f,o.ReadableStreamStreamer=h,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var r=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===a(this).prop("tagName").toUpperCase()&&"file"===a(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},r)})}),i(),this;function i(){if(0!==n.length){var t,r,i,u,l=n[0];if(k(e.before)){var c=e.before(l.file,l.inputElem);if("object"==typeof c){if("abort"===c.action)return t="AbortError",r=l.file,i=l.inputElem,u=c.reason,void(k(e.error)&&e.error({name:t},r,i,u));if("skip"===c.action)return void s();"object"==typeof c.config&&(l.instanceConfig=a.extend(l.instanceConfig,c.config))}else if("skip"===c)return void s()}var f=l.instanceConfig.complete;l.instanceConfig.complete=function(e){k(f)&&f(e,l.file,l.inputElem),s()},o.parse(l.file,l.instanceConfig)}else k(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:a,workerId:o.WORKER_ID,finished:l});else if(k(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!l||!k(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(e=t.getResponseHeader("Content-Range"))?-1:parseInt(e.substring(e.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(Error(r))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var t,r,n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=b(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=b(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=b(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function d(e){var t,r,n,i=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,s=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,a=this,u=0,l=0,c=!1,f=!1,h=[],d={data:[],errors:[],meta:{}};if(k(e.step)){var m=e.step;e.step=function(t){if(d=t,b())v();else{if(v(),0===d.data.length)return;u+=t.data.length,e.preview&&u>e.preview?r.abort():(d.data=d.data[0],m(d,a))}}}function g(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function v(){return d&&n&&(x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(d.data=d.data.filter(function(e){return!g(e)})),b()&&function(){if(d){if(Array.isArray(d.data[0])){for(var t=0;b()&&t<d.data.length;t++)d.data[t].forEach(r);d.data.splice(0,1)}else d.data.forEach(r)}function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),h.push(t)}}(),function(){if(!d||!e.header&&!e.dynamicTyping&&!e.transform)return d;function t(t,r){var n,o=e.header?{}:[];for(n=0;n<t.length;n++){var a,u,c=n,f=t[n];e.header&&(c=n>=h.length?"__parsed_extra":h[n]),e.transform&&(f=e.transform(f,c)),a=c,u=f,e.dynamicTypingFunction&&void 0===e.dynamicTyping[a]&&(e.dynamicTyping[a]=e.dynamicTypingFunction(a)),f=!0===(e.dynamicTyping[a]||e.dynamicTyping)?"true"===u||"TRUE"===u||"false"!==u&&"FALSE"!==u&&(!function(e){if(i.test(e)){var t=parseFloat(e);if(-9007199254740992<t&&t<9007199254740992)return!0}return!1}(u)?s.test(u)?new Date(u):""===u?null:u:parseFloat(u)):u,"__parsed_extra"===c?(o[c]=o[c]||[],o[c].push(f)):o[c]=f}return e.header&&(n>h.length?x("FieldMismatch","TooManyFields","Too many fields: expected "+h.length+" fields but parsed "+n,l+r):n<h.length&&x("FieldMismatch","TooFewFields","Too few fields: expected "+h.length+" fields but parsed "+n,l+r)),o}var r=1;return!d.data.length||Array.isArray(d.data[0])?(d.data=d.data.map(t),r=d.data.length):d.data=t(d.data,0),e.header&&d.meta&&(d.meta.fields=h),l+=r,d}()}function b(){return e.header&&0===h.length}function x(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),d.errors.push(i)}this.parse=function(i,s,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<n[0].length;if(1===n.length||s)return"\n";for(var o=0,a=0;a<n.length;a++)"\n"===n[a][0]&&o++;return o>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(i),d.meta.delimiter=e.delimiter);else{var l=function(t,r,n,i,s){var a,u,l,c;s=s||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var f=0;f<s.length;f++){var h=s[f],d=0,p=0,m=0;l=void 0;for(var v=new _({comments:i,delimiter:h,newline:r,preview:10}).parse(t),y=0;y<v.data.length;y++)if(n&&g(v.data[y]))m++;else{var b=v.data[y].length;p+=b,void 0!==l?0<b&&(d+=Math.abs(b-l),l=b):l=b}0<v.data.length&&(p/=v.data.length-m),(void 0===u||d<=u)&&(void 0===c||c<p)&&1.99<p&&(u=d,a=h,c=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(n=!0,e.delimiter=o.DefaultDelimiter),d.meta.delimiter=e.delimiter}var f=y(e);return e.preview&&e.header&&f.preview++,t=i,d=(r=new _(f)).parse(t,s,a),v(),c?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return c},this.pause=function(){c=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){a.streamer._halted?(c=!1,a.streamer.parseChunk(t,!0)):setTimeout(a.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,r.abort(),d.meta.aborted=!0,k(e.complete)&&e.complete(d),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,s=e.step,a=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof r||-1<o.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,f=!1;this.parse=function(o,h,d){if("string"!=typeof o)throw Error("Input must be a string");var _=o.length,m=r.length,g=n.length,v=i.length,y=k(s),b=[],x=[],E=[],C=c=0;if(!o)return Z();if(e.header&&!h){var R=o.split(n)[0].split(r),w=[],O={},S=!1;for(var j in R){var T=R[j];k(e.transformHeader)&&(T=e.transformHeader(T,j));var I=T,A=O[T]||0;for(0<A&&(S=!0,I=T+"_"+A),O[T]=A+1;w.includes(I);)I=I+"_"+A;w.push(I)}if(S){var L=o.split(n);L[0]=w.join(r),o=L.join(n)}}if(u||!1!==u&&-1===o.indexOf(t)){for(var M=o.split(n),P=0;P<M.length;P++){if(E=M[P],c+=E.length,P!==M.length-1)c+=n.length;else if(d)break;if(!i||E.substring(0,v)!==i){if(y){if(b=[],q(E.split(r)),Q(),f)return Z()}else q(E.split(r));if(a&&a<=P)return b=b.slice(0,a),Z(!0)}}return Z()}for(var D=o.indexOf(r,c),N=o.indexOf(n,c),F=RegExp(p(l)+p(t),"g"),z=o.indexOf(t,c);;)if(o[c]!==t){if(i&&0===E.length&&o.substring(c,c+v)===i){if(-1===N)return Z();c=N+g,N=o.indexOf(n,c),D=o.indexOf(r,c)}else if(-1!==D&&(D<N||-1===N))E.push(o.substring(c,D)),c=D+m,D=o.indexOf(r,c);else{if(-1===N)break;if(E.push(o.substring(c,N)),W(N+g),y&&(Q(),f))return Z();if(a&&b.length>=a)return Z(!0)}}else for(z=c,c++;;){if(-1===(z=o.indexOf(t,z+1)))return d||x.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),K();if(z===_-1)return K(o.substring(c,z).replace(F,t));if(t!==l||o[z+1]!==l){if(t===l||0===z||o[z-1]!==l){-1!==D&&D<z+1&&(D=o.indexOf(r,z+1)),-1!==N&&N<z+1&&(N=o.indexOf(n,z+1));var H=B(-1===N?D:Math.min(D,N));if(o.substr(z+1+H,m)===r){E.push(o.substring(c,z).replace(F,t)),o[c=z+1+H+m]!==t&&(z=o.indexOf(t,c)),D=o.indexOf(r,c),N=o.indexOf(n,c);break}var U=B(N);if(o.substring(z+1+U,z+1+U+g)===n){if(E.push(o.substring(c,z).replace(F,t)),W(z+1+U+g),D=o.indexOf(r,c),z=o.indexOf(t,c),y&&(Q(),f))return Z();if(a&&b.length>=a)return Z(!0);break}x.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),z++}}else z++}return K();function q(e){b.push(e),C=c}function B(e){var t=0;if(-1!==e){var r=o.substring(z+1,e);r&&""===r.trim()&&(t=r.length)}return t}function K(e){return d||(void 0===e&&(e=o.substring(c)),E.push(e),c=_,q(E),y&&Q()),Z()}function W(e){c=e,q(E),E=[],N=o.indexOf(n,c)}function Z(e){return{data:b,errors:x,meta:{delimiter:r,linebreak:n,aborted:f,truncated:!!e,cursor:C+(h||0)}}}function Q(){s(Z()),b=[],x=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){n=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(k(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!n);o++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&g(t.workerId,t.results)}function g(e,t){var r=i[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function v(){throw Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===o.WORKER_ID&&r&&(o.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=o.parse(r.input,r.config);n&&t.postMessage({workerId:o.WORKER_ID,results:n,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(f.prototype=Object.create(f.prototype)).constructor=f,(h.prototype=Object.create(u.prototype)).constructor=h,o})?r.apply(t,n):r)&&(e.exports=i)},1151:function(e,t,r){"use strict";r.d(t,{Z:function(){return a},a:function(){return o}});var n=r(7294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6036)}),_N_E=e.O()}]);