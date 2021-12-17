(()=>{"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}new Set;let s,i=!1;function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(){return p(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function b(t,n){t.value=null==n?"":n}function y(t){s=t}function v(){const t=function(){if(!s)throw new Error("Function called outside component initialization");return s}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const l=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,l)}))}}}new Set;const x=[],w=[],k=[],_=[],E=Promise.resolve();let C=!1;function S(t){k.push(t)}let T=!1;const L=new Set;function z(){if(!T){T=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];y(n),A(n.$$)}for(y(null),x.length=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];L.has(n)||(L.add(n),n())}k.length=0}while(x.length);for(;_.length;)_.pop()();C=!1,T=!1,L.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const H=new Set;let M,O;function q(){M={r:0,c:[],p:M}}function B(){M.r||o(M.c),M=M.p}function N(t,n){t&&t.i&&(H.delete(t),t.i(n))}function j(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),M.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function G(t){t&&t.c()}function W(t,e,r,c){const{fragment:s,on_mount:i,on_destroy:u,after_update:a}=t.$$;s&&s.m(e,r),c||S((()=>{const e=i.map(n).filter(l);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(S)}function D(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function F(n,l,r,c,u,a,f,p=[-1]){const $=s;y(n);const h=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||($?$.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:l.target||$.$$.root};f&&f(h.root);let m=!1;if(h.ctx=r?r(n,l.props||{},((t,e,...o)=>{const l=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),m&&function(t,n){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,E.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),l.target){if(l.hydrate){i=!0;const t=(g=l.target,Array.from(g.childNodes));h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();l.intro&&N(n.$$.fragment),W(n,l.target,l.anchor,l.customElement),i=!1,z()}var g;y($)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){D(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class P{$destroy(){D(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(n){let e;return{c(){e=f("nav"),e.innerHTML='<h1 id="logo" class="svelte-azr7pn">Let&#39;s Get Organized!</h1> \n    <ul class="svelte-azr7pn"><li>Home</li> \n        <li>Second Home</li></ul>',m(e,"class","svelte-azr7pn")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}const Y=class extends P{constructor(t){super(),F(this,t,null,X,r,{})}},I=[];function J(n,e=t){let o;const l=new Set;function c(t){if(r(n,t)&&(n=t,o)){const t=!I.length;for(const t of l)t[1](),I.push(t,n);if(t){for(let t=0;t<I.length;t+=2)I[t][0](I[t+1]);I.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(r,s=t){const i=[r,s];return l.add(i),1===l.size&&(o=e(c)||t),r(n),()=>{l.delete(i),0===l.size&&(o(),o=null)}}}}const K=J("");function Q(t){let n,e,l,r,c,s,i,u,p;return{c(){n=f("h2"),n.textContent="What's Your Name, Super-Organizer?",e=$(),l=f("input"),r=$(),c=f("br"),s=$(),i=f("button"),i.textContent="Submit",m(l,"type","text"),l.value=t[1],m(i,"type","button"),m(i,"class","welcomeButton")},m(o,d){a(o,n,d),a(o,e,d),a(o,l,d),a(o,r,d),a(o,c,d),a(o,s,d),a(o,i,d),u||(p=[h(l,"input",t[2]),h(i,"click",t[3])],u=!0)},p(t,n){2&n&&l.value!==t[1]&&(l.value=t[1])},d(t){t&&d(n),t&&d(e),t&&d(l),t&&d(r),t&&d(c),t&&d(s),t&&d(i),u=!1,o(p)}}}function R(t){let n,e,o,l;return{c(){n=f("h3"),e=p("Welcome "),o=p(t[1]),l=p("!")},m(t,r){a(t,n,r),u(n,e),u(n,o),u(n,l)},p(t,n){2&n&&g(o,t[1])},d(t){t&&d(n)}}}function U(n){let e;function o(t,n){return!1===t[0]?R:Q}let l=o(n),r=l(n);return{c(){e=f("main"),r.c(),m(e,"class","svelte-sgr3nq")},m(t,n){a(t,e,n),r.m(e,null)},p(t,[n]){l===(l=o(t))&&r?r.p(t,n):(r.d(1),r=l(t),r&&(r.c(),r.m(e,null)))},i:t,o:t,d(t){t&&d(e),r.d()}}}function V(n,e,o){let l;var r,c;r=K,c=t=>o(1,l=t),n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(r,c));let{status:s=!0}=e;return n.$$set=t=>{"status"in t&&o(0,s=t.status)},[s,l,t=>{!function(t,n,e){t.set(e)}(K,l=t.target.value,l),console.log("e detail ",t.target.value)},()=>{o(0,s=!1)}]}J([]),J("");const Z=class extends P{constructor(t){super(),F(this,t,V,U,r,{status:0})}};function tt(n){let e,o,r,c,s,i,b,y,v,x,w,k,_,E,C,S,T,L,z,A;return{c(){e=f("main"),o=f("script"),r=$(),c=f("button"),s=p(n[0]),i=$(),b=f("br"),y=$(),v=f("div"),x=f("p"),w=p("Cost of "),k=p(n[0]),_=p(": $$"),E=$(),C=f("br"),S=$(),T=f("button"),T.textContent="X",L=f("br"),m(c,"type","button"),m(c,"id","todoBtn"),m(c,"class","collapsible"),m(v,"class","content")},m(t,d){a(t,e,d),u(e,o),u(e,r),u(e,c),u(c,s),u(e,i),u(e,b),u(e,y),u(e,v),u(v,x),u(x,w),u(x,k),u(x,_),u(e,E),u(e,C),u(e,S),u(e,T),u(e,L),z||(A=h(T,"click",(function(){l(n[2](n[1]))&&n[2](n[1]).apply(this,arguments)})),z=!0)},p(t,[e]){n=t,1&e&&g(s,n[0]),1&e&&g(k,n[0])},i:t,o:t,d(t){t&&d(e),z=!1,A()}}}function nt(t,n,e){const o=v();let{todo:l}=n,{index:r}=n;var c=document.getElementsByClassName("collapsible");return document.addEventListener("click",(()=>(()=>{for(let t=0;t<c.length;t++){let n=c[t];n.addEventListener("click",(function(){var t=n.nextElementSibling;"none"===t.style.display?t.style.display="block":t.style.display="none"}))}})())),t.$$set=t=>{"todo"in t&&e(0,l=t.todo),"index"in t&&e(1,r=t.index)},[l,r,t=>{o("deleteTodo",t)}]}const et=class extends P{constructor(t){super(),F(this,t,nt,tt,r,{todo:0,index:1})}};function ot(n){let e;return{c(){e=f("main"),e.innerHTML="<h2>Good Work Today!</h2>",m(e,"class","svelte-yrzwiw")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}const lt=class extends P{constructor(t){super(),F(this,t,null,ot,r,{})}};function rt(t,n,e){const o=t.slice();return o[1]=n[e],o[7]=e,o}function ct(n){let e,o,l;return{c(){e=f("button"),e.textContent="Add Todo",m(e,"type","submit")},m(t,r){var c;a(t,e,r),o||(l=h(e,"click",(c=n[2],function(t){return t.preventDefault(),c.call(this,t)})),o=!0)},p:t,d(t){t&&d(e),o=!1,l()}}}function st(t){let n,e,o=t[0],l=[];for(let n=0;n<o.length;n+=1)l[n]=ut(rt(t,o,n));const r=t=>j(l[t],1,1,(()=>{l[t]=null}));return{c(){n=f("ol");for(let t=0;t<l.length;t+=1)l[t].c()},m(t,o){a(t,n,o);for(let t=0;t<l.length;t+=1)l[t].m(n,null);e=!0},p(t,e){if(9&e){let c;for(o=t[0],c=0;c<o.length;c+=1){const r=rt(t,o,c);l[c]?(l[c].p(r,e),N(l[c],1)):(l[c]=ut(r),l[c].c(),N(l[c],1),l[c].m(n,null))}for(q(),c=o.length;c<l.length;c+=1)r(c);B()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)N(l[t]);e=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)j(l[t]);e=!1},d(t){t&&d(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(l,t)}}}function it(n){let e;return{c(){e=f("p"),e.textContent="Add Some Todos!"},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}function ut(t){let n,e,o,l;return e=new et({props:{todo:t[1],index:t[7]}}),e.$on("deleteTodo",t[3]),{c(){n=f("li"),G(e.$$.fragment),o=$()},m(t,r){a(t,n,r),W(e,n,null),u(n,o),l=!0},p(t,n){const o={};1&n&&(o.todo=t[1]),e.$set(o)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){t&&d(n),D(e)}}}function at(t){let n,e,o,l,r,c,s,i,p,g,y,v,x,w,k,_,E,C,S,T;n=new Y({}),o=new Z({});let L=""!==t[1]&&ct(t);const z=[it,st],A=[];function H(t,n){return t[0].length?1:0}return w=H(t),k=A[w]=z[w](t),E=new lt({}),{c(){G(n.$$.fragment),e=$(),G(o.$$.fragment),l=$(),r=f("main"),c=f("h3"),c.textContent="Get Started with My List!",s=$(),i=f("form"),p=f("div"),g=$(),y=f("input"),v=$(),L&&L.c(),x=$(),k.c(),_=$(),G(E.$$.fragment),m(y,"type","text"),y.required=!0,m(r,"class","svelte-1k0271m")},m(d,f){W(n,d,f),a(d,e,f),W(o,d,f),a(d,l,f),a(d,r,f),u(r,c),u(r,s),u(r,i),u(i,p),u(i,g),u(i,y),b(y,t[1]),u(i,v),L&&L.m(i,null),u(r,x),A[w].m(r,null),a(d,_,f),W(E,d,f),C=!0,S||(T=h(y,"input",t[4]),S=!0)},p(t,[n]){2&n&&y.value!==t[1]&&b(y,t[1]),""!==t[1]?L?L.p(t,n):(L=ct(t),L.c(),L.m(i,null)):L&&(L.d(1),L=null);let e=w;w=H(t),w===e?A[w].p(t,n):(q(),j(A[e],1,1,(()=>{A[e]=null})),B(),k=A[w],k?k.p(t,n):(k=A[w]=z[w](t),k.c()),N(k,1),k.m(r,null))},i(t){C||(N(n.$$.fragment,t),N(o.$$.fragment,t),N(k),N(E.$$.fragment,t),C=!0)},o(t){j(n.$$.fragment,t),j(o.$$.fragment,t),j(k),j(E.$$.fragment,t),C=!1},d(t){D(n,t),t&&d(e),D(o,t),t&&d(l),t&&d(r),L&&L.d(),A[w].d(),t&&d(_),D(E,t),S=!1,T()}}}function dt(t,n,e){v();let o="",l=[];return[l,o,()=>{console.log("todo: ",o),e(0,l=[o,...l]),e(1,o=""),console.log("todo array",l)},t=>{e(0,l=l.filter(((n,e)=>e!==t.detail))),l.update((()=>[...l]))},function(){o=this.value,e(1,o)}]}new class extends P{constructor(t){super(),F(this,t,dt,at,r,{})}}({target:document.body,props:{}})})();