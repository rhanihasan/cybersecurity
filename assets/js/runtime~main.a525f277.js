(()=>{"use strict";var e,a,t,f,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=c,b.c=d,e=[],b.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",695:"f440917a",720:"1a3e6a6c",948:"8717b14a",1088:"728513d3",1216:"00a876e9",1580:"7b93d219",1914:"d9f32620",2261:"9e5612d0",2267:"59362658",2362:"e273c56f",2535:"814f3328",2627:"eb2c86ce",2801:"9d83e58c",3003:"6feeb703",3085:"1f391b9e",3089:"a6aa9e1f",3370:"9eb2c73d",3514:"73664a40",3608:"9e4087bc",3741:"f115344f",4013:"01a85c17",4195:"c4f5d8e4",4808:"eaea368b",5177:"3616f023",5454:"13d00961",5538:"c6036312",5642:"e1be0fc9",6103:"ccc49370",6115:"ef634e2a",6206:"3b0cf361",6578:"0290aaf2",6748:"7c215853",6783:"95563219",7085:"253adf42",7331:"5f742793",7406:"4e72ee61",7414:"393be207",7505:"2049b6a1",7918:"17896441",8168:"400d22ec",8284:"6c480060",8610:"6875c492",8636:"f4f34a3a",8832:"21f518c9",9003:"925b3f96",9086:"df29bb0a",9514:"1be78505",9640:"98f37646",9642:"7661071f",9817:"14eb3368"}[e]||e)+"."+{53:"742f0cef",695:"5a7f1fcc",720:"6ba029c6",948:"16fbbdda",1088:"533428d3",1216:"54b9ba80",1580:"57ec1814",1914:"a14050f0",2261:"2f0bdcf0",2267:"194b18e7",2362:"a1796066",2529:"17825a13",2535:"720621e9",2627:"24d60dff",2801:"2353ed32",3003:"d33a68a3",3085:"36781f96",3089:"bcac58ac",3370:"bccf4010",3514:"5d7a5f93",3608:"23cdbf33",3741:"4113ce86",3946:"1bbfedd6",4013:"10adbb6f",4195:"5c2cc682",4808:"91456bac",4972:"08f08b4d",5177:"1a0389c6",5454:"4923f4f3",5538:"0c419e88",5642:"5a9834d5",6103:"0cbac9f4",6115:"ed88d947",6206:"3c9ea6d3",6578:"063c7823",6748:"d836203e",6783:"45342f40",7085:"983fec93",7331:"60793cc3",7406:"18a1a93f",7414:"692deff5",7505:"e6c3a0eb",7918:"5f05ed99",8168:"b20f99c3",8284:"92cee709",8610:"f56e3066",8636:"20ed2729",8832:"87536a67",9003:"b7615395",9086:"700f1ea0",9514:"bc70ef5b",9640:"bf618412",9642:"a3bbf104",9817:"79421b3c"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="hassan-website:",b.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+t),d.src=e),f[e]=[a];var s=(a,t)=>{d.onerror=d.onload=null,clearTimeout(l);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/cybersecurity/",b.gca=function(e){return e={17896441:"7918",59362658:"2267",95563219:"6783","935f2afb":"53",f440917a:"695","1a3e6a6c":"720","8717b14a":"948","728513d3":"1088","00a876e9":"1216","7b93d219":"1580",d9f32620:"1914","9e5612d0":"2261",e273c56f:"2362","814f3328":"2535",eb2c86ce:"2627","9d83e58c":"2801","6feeb703":"3003","1f391b9e":"3085",a6aa9e1f:"3089","9eb2c73d":"3370","73664a40":"3514","9e4087bc":"3608",f115344f:"3741","01a85c17":"4013",c4f5d8e4:"4195",eaea368b:"4808","3616f023":"5177","13d00961":"5454",c6036312:"5538",e1be0fc9:"5642",ccc49370:"6103",ef634e2a:"6115","3b0cf361":"6206","0290aaf2":"6578","7c215853":"6748","253adf42":"7085","5f742793":"7331","4e72ee61":"7406","393be207":"7414","2049b6a1":"7505","400d22ec":"8168","6c480060":"8284","6875c492":"8610",f4f34a3a:"8636","21f518c9":"8832","925b3f96":"9003",df29bb0a:"9086","1be78505":"9514","98f37646":"9640","7661071f":"9642","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],d=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(t);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkhassan_website=self.webpackChunkhassan_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();