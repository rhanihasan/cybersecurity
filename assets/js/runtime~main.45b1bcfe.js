(()=>{"use strict";var e,a,t,f,r,d={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=d,b.c=c,e=[],b.O=(a,t,f,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var c=!0,o=0;o<t.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(c=!1,r<d&&(d=r));if(c){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var c=2&f&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",446:"e0d53f6f",554:"482540bb",720:"1a3e6a6c",820:"11679127",948:"8717b14a",1147:"00b46b1f",1216:"00a876e9",1914:"d9f32620",2172:"3c495d39",2267:"59362658",2270:"8504e9dd",2362:"e273c56f",2535:"814f3328",2666:"e91ae07d",3085:"1f391b9e",3089:"a6aa9e1f",3275:"125882af",3370:"9eb2c73d",3514:"73664a40",3608:"9e4087bc",3650:"d41db831",3741:"f115344f",3792:"dff1c289",4013:"01a85c17",4195:"c4f5d8e4",4660:"67eee2a1",4808:"eaea368b",4855:"b2c12f67",5177:"3616f023",5454:"13d00961",5877:"592dcf26",6103:"ccc49370",6115:"ef634e2a",6134:"c3b0aae2",6578:"0290aaf2",6755:"e44a2883",6783:"95563219",7085:"253adf42",7406:"4e72ee61",7414:"393be207",7505:"2049b6a1",7714:"134c4ea1",7918:"17896441",8168:"400d22ec",8284:"6c480060",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9086:"df29bb0a",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{53:"9de897e8",446:"f6817236",554:"b9bf0a55",720:"6ba029c6",820:"3a421dce",948:"f881ead8",1147:"800e9c79",1216:"82007b75",1914:"8c86a6f2",2172:"77b79dc4",2267:"7f442d7c",2270:"2459260d",2362:"d468a773",2529:"17825a13",2535:"720621e9",2666:"3884968b",3085:"36781f96",3089:"bcac58ac",3275:"8d322d9d",3370:"bccf4010",3514:"864cb62c",3608:"23cdbf33",3650:"774a7b6a",3741:"4113ce86",3792:"c7f119e0",3946:"1bbfedd6",4013:"10adbb6f",4195:"a8c139de",4660:"ea90c0aa",4808:"91456bac",4855:"4f6a85d3",4972:"08f08b4d",5177:"1a0389c6",5454:"4923f4f3",5877:"0bc1d55a",6103:"0cbac9f4",6115:"ed88d947",6134:"f2c88b94",6578:"063c7823",6755:"28ec2fc0",6783:"45342f40",7085:"983fec93",7406:"18a1a93f",7414:"692deff5",7505:"e6c3a0eb",7714:"781235fa",7918:"5f05ed99",8168:"b20f99c3",8284:"f4c407b0",8610:"f56e3066",8636:"7ba21d44",9003:"68aa4748",9086:"e376807d",9514:"bc70ef5b",9642:"aec8d360",9671:"6ef3d54f",9817:"79421b3c"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="hassan-website:",b.l=(e,a,t,d)=>{if(f[e])f[e].push(a);else{var c,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",r+t),c.src=e),f[e]=[a];var s=(a,t)=>{c.onerror=c.onload=null,clearTimeout(l);var r=f[e];if(delete f[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(t))),a)return a(t)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/cybersecurity/",b.gca=function(e){return e={11679127:"820",17896441:"7918",59362658:"2267",95563219:"6783","935f2afb":"53",e0d53f6f:"446","482540bb":"554","1a3e6a6c":"720","8717b14a":"948","00b46b1f":"1147","00a876e9":"1216",d9f32620:"1914","3c495d39":"2172","8504e9dd":"2270",e273c56f:"2362","814f3328":"2535",e91ae07d:"2666","1f391b9e":"3085",a6aa9e1f:"3089","125882af":"3275","9eb2c73d":"3370","73664a40":"3514","9e4087bc":"3608",d41db831:"3650",f115344f:"3741",dff1c289:"3792","01a85c17":"4013",c4f5d8e4:"4195","67eee2a1":"4660",eaea368b:"4808",b2c12f67:"4855","3616f023":"5177","13d00961":"5454","592dcf26":"5877",ccc49370:"6103",ef634e2a:"6115",c3b0aae2:"6134","0290aaf2":"6578",e44a2883:"6755","253adf42":"7085","4e72ee61":"7406","393be207":"7414","2049b6a1":"7505","134c4ea1":"7714","400d22ec":"8168","6c480060":"8284","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003",df29bb0a:"9086","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var d=b.p+b.u(a),c=new Error;b.l(d,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",c.name="ChunkLoadError",c.type=r,c.request=d,f[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,d=t[0],c=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(f in c)b.o(c,f)&&(b.m[f]=c[f]);if(o)var i=o(b)}for(a&&a(t);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkhassan_website=self.webpackChunkhassan_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();