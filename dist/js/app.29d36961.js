(function(){"use strict";var t={9189:function(t,e,n){var r=n(9242),o=n(3396);function i(t,e){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o.Wm)(r)],64)}var u=n(89);const a={},c=(0,u.Z)(a,[["render",i]]);var s=c,f=n(2483);const l={class:"home"},p=["href"];function d(t,e,n,r,i,u){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("a",{href:r.vkAuthUrl},"VK",8,p),(0,o.Wm)(a)])}var v={methods:{async vk(){await this.VK.init({apiId:this.AppID}),this.VK.Api.call("groups.getMembers",{group_id:"club161429516",v:this.v,language:"ru"},(t=>{console.log(t)}))}},methods:{getFriends(){VK.init({apiId:this.AppID}),VK.Api.call("groups.getMembers",{group_id:"club161429516",v:this.v,language:"ru"},(t=>{console.log(t)}))}},mounted(){},setup(){const t="\t51773806",e="5.154",n="https://oauth.vk.com/authorize?client_id=51773846&display=page&redirect_uri=https://jolly-cendol-1d3a96.netlify.app/list-friends&scope=friends&response_type=token&v=5.131&state=123456";return{v:e,AppID:t,vkAuthUrl:n}}};const h=(0,u.Z)(v,[["render",d]]);var m=h;const g=[{path:"/",name:"home",component:m},{path:"/list-friends",name:"list-friends",component:()=>n.e(869).then(n.bind(n,9869))}],b=(0,f.p7)({history:(0,f.PO)("/"),routes:g});var y=b;(0,r.ri)(s).use(y).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".947ca291.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="test-vk:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var p=function(e,n){a.onerror=a.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(e&&e(r);s<u.length;s++)i=u[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunktest_vk"]=self["webpackChunktest_vk"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9189)}));r=n.O(r)})();
//# sourceMappingURL=app.29d36961.js.map