if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const n=e=>t(e,o),l={module:{uri:o},exports:r,require:n};s[o]=Promise.all(i.map((e=>l[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/home/retsu/Documents/git/sickchill/staticshow.css",revision:"65e6cb7e3c87454fa5ba28876e21f79a"},{url:"/home/retsu/Documents/git/sickchill/staticshow.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/home/retsu/Documents/git/sickchill/staticshows.css",revision:"65e6cb7e3c87454fa5ba28876e21f79a"},{url:"/home/retsu/Documents/git/sickchill/staticshows.js",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{})}));
