(()=>{"use strict";var e,a,t,r,f,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&f||c>=f)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,f<c&&(c=f));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(f,c),f},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",695:"f440917a",720:"1a3e6a6c",948:"8717b14a",1216:"00a876e9",1580:"7b93d219",1914:"d9f32620",2172:"3c495d39",2261:"9e5612d0",2267:"59362658",2362:"e273c56f",2535:"814f3328",2627:"eb2c86ce",2801:"9d83e58c",3003:"6feeb703",3085:"1f391b9e",3089:"a6aa9e1f",3370:"9eb2c73d",3514:"73664a40",3608:"9e4087bc",3741:"f115344f",3792:"dff1c289",4013:"01a85c17",4195:"c4f5d8e4",4808:"eaea368b",5177:"3616f023",5454:"13d00961",5538:"c6036312",6103:"ccc49370",6115:"ef634e2a",6206:"3b0cf361",6578:"0290aaf2",6748:"7c215853",6755:"e44a2883",6783:"95563219",7085:"253adf42",7331:"5f742793",7406:"4e72ee61",7414:"393be207",7505:"2049b6a1",7918:"17896441",8168:"400d22ec",8284:"6c480060",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9086:"df29bb0a",9514:"1be78505",9640:"98f37646",9642:"7661071f",9817:"14eb3368"}[e]||e)+"."+{53:"cc7a3e4d",695:"bc1bbb1d",720:"6ba029c6",948:"f881ead8",1216:"745acd65",1580:"f5f4dd67",1914:"8c86a6f2",2172:"2a0c8229",2261:"a618de03",2267:"7f442d7c",2362:"d468a773",2529:"17825a13",2535:"720621e9",2627:"fa496ee9",2801:"14ea2caf",3003:"6652f79a",3085:"36781f96",3089:"bcac58ac",3370:"bccf4010",3514:"864cb62c",3608:"23cdbf33",3741:"4113ce86",3792:"f11f463a",3946:"1bbfedd6",4013:"10adbb6f",4195:"5c2cc682",4808:"91456bac",4972:"08f08b4d",5177:"1a0389c6",5454:"4923f4f3",5538:"341ea6b2",6103:"0cbac9f4",6115:"ed88d947",6206:"19d6efd6",6578:"063c7823",6748:"e72a51cd",6755:"c4a3a1e5",6783:"45342f40",7085:"983fec93",7331:"bbcd3121",7406:"18a1a93f",7414:"692deff5",7505:"e6c3a0eb",7918:"5f05ed99",8168:"b20f99c3",8284:"92cee709",8610:"f56e3066",8636:"7ba21d44",9003:"68aa4748",9086:"e376807d",9514:"bc70ef5b",9640:"b0164277",9642:"aec8d360",9817:"79421b3c"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="hassan-website:",o.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+t),d.src=e),r[e]=[a];var s=(a,t)=>{d.onerror=d.onload=null,clearTimeout(l);var f=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(t))),a)return a(t)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/cybersecurity/",o.gca=function(e){return e={17896441:"7918",59362658:"2267",95563219:"6783","935f2afb":"53",f440917a:"695","1a3e6a6c":"720","8717b14a":"948","00a876e9":"1216","7b93d219":"1580",d9f32620:"1914","3c495d39":"2172","9e5612d0":"2261",e273c56f:"2362","814f3328":"2535",eb2c86ce:"2627","9d83e58c":"2801","6feeb703":"3003","1f391b9e":"3085",a6aa9e1f:"3089","9eb2c73d":"3370","73664a40":"3514","9e4087bc":"3608",f115344f:"3741",dff1c289:"3792","01a85c17":"4013",c4f5d8e4:"4195",eaea368b:"4808","3616f023":"5177","13d00961":"5454",c6036312:"5538",ccc49370:"6103",ef634e2a:"6115","3b0cf361":"6206","0290aaf2":"6578","7c215853":"6748",e44a2883:"6755","253adf42":"7085","5f742793":"7331","4e72ee61":"7406","393be207":"7414","2049b6a1":"7505","400d22ec":"8168","6c480060":"8284","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003",df29bb0a:"9086","1be78505":"9514","98f37646":"9640","7661071f":"9642","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",d.name="ChunkLoadError",d.type=f,d.request=c,r[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)f=c[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},t=self.webpackChunkhassan_website=self.webpackChunkhassan_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();