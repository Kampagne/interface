const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};q();function d(){}function B(t){return t()}function C(){return Object.create(null)}function x(t){t.forEach(B)}function H(t){return typeof t=="function"}function y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function T(t,e,r){t.insertBefore(e,r||null)}function N(t){t.parentNode.removeChild(t)}function K(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function G(){return D(" ")}function J(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Q(t){return Array.from(t.childNodes)}let L;function f(t){L=t}const u=[],I=[],p=[],P=[],V=Promise.resolve();let z=!1;function W(){z||(z=!0,V.then(U))}function j(t){p.push(t)}const $=new Set;let w=0;function U(){const t=L;do{for(;w<u.length;){const e=u[w];w++,f(e),X(e.$$)}for(f(null),u.length=0,w=0;I.length;)I.pop()();for(let e=0;e<p.length;e+=1){const r=p[e];$.has(r)||($.add(r),r())}p.length=0}while(u.length);for(;P.length;)P.pop()();z=!1,$.clear(),f(t)}function X(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const g=new Set;let Y;function h(t,e){t&&t.i&&(g.delete(t),t.i(e))}function S(t,e,r,o){if(t&&t.o){if(g.has(t))return;g.add(t),Y.c.push(()=>{g.delete(t),o&&(r&&t.d(1),o())}),t.o(e)}}function E(t){t&&t.c()}function b(t,e,r,o){const{fragment:n,on_mount:i,on_destroy:s,after_update:_}=t.$$;n&&n.m(e,r),o||j(()=>{const l=i.map(B).filter(H);s?s.push(...l):x(l),t.$$.on_mount=[]}),_.forEach(j)}function m(t,e){const r=t.$$;r.fragment!==null&&(x(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Z(t,e){t.$$.dirty[0]===-1&&(u.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function k(t,e,r,o,n,i,s,_=[-1]){const l=L;f(t);const a=t.$$={fragment:null,ctx:null,props:i,update:d,not_equal:n,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:C(),dirty:_,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let A=!1;if(a.ctx=r?r(t,e.props||{},(c,M,...F)=>{const O=F.length?F[0]:M;return a.ctx&&n(a.ctx[c],a.ctx[c]=O)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](O),A&&Z(t,c)),M}):[],a.update(),A=!0,x(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){const c=Q(e.target);a.fragment&&a.fragment.l(c),c.forEach(N)}else a.fragment&&a.fragment.c();e.intro&&h(t.$$.fragment),b(t,e.target,e.anchor,e.customElement),U()}f(l)}class v{$destroy(){m(this,1),this.$destroy=d}$on(e,r){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const n=o.indexOf(r);n!==-1&&o.splice(n,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class tt extends v{constructor(e){super(),k(this,e,null,null,y,{})}}function et(t){let e;return{c(){e=K("main"),e.innerHTML=`<form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action=""><h1></h1> 
        <label class="font-semibold text-xs" for="usernameField">Name</label> 
        <input class="flex items-center h-12 px-4 w-64 bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" type="text"/> 
        <label class="font-semibold text-xs mt-3" for="passwordField">Secret</label> 
        <input class="flex items-center h-12 px-4 w-64 bg-gray-100 mt-2 rounded focus:outline-none focus:ring-2" type="text"/> 
        <button class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button></form>`,J(e,"class","flex flex-col items-center justify-center w-screen h-screen text-gray-700")},m(r,o){T(r,e,o)},p:d,i:d,o:d,d(r){r&&N(e)}}}class rt extends v{constructor(e){super(),k(this,e,null,et,y,{})}}function ot(t){let e,r;return e=new rt({}),{c(){E(e.$$.fragment)},m(o,n){b(e,o,n),r=!0},p:d,i(o){r||(h(e.$$.fragment,o),r=!0)},o(o){S(e.$$.fragment,o),r=!1},d(o){m(e,o)}}}class nt extends v{constructor(e){super(),k(this,e,null,ot,y,{})}}function it(t){let e,r,o,n;return e=new tt({}),o=new nt({}),{c(){E(e.$$.fragment),r=G(),E(o.$$.fragment)},m(i,s){b(e,i,s),T(i,r,s),b(o,i,s),n=!0},p:d,i(i){n||(h(e.$$.fragment,i),h(o.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),S(o.$$.fragment,i),n=!1},d(i){m(e,i),i&&N(r),m(o,i)}}}class at extends v{constructor(e){super(),k(this,e,null,it,y,{})}}new at({target:document.getElementById("app")});
