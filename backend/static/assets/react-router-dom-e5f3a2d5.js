import{r as c}from"./react-a9b6c34a.js";import{R as O,u as j,a as k,b as x,D as H,N as W,c as K}from"./react-router-0030e45b.js";import{c as D,b}from"./@remix-run-88f74c5a.js";/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},L.apply(this,arguments)}function N(e,t){if(e==null)return{};var i={},a=Object.keys(e),r,n;for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function F(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,t){return e.button===0&&(!t||t==="_self")&&!F(e)}const z=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],B=["aria-current","caseSensitive","className","end","style","to","children"];function J(e){let{basename:t,children:i,window:a}=e,r=c.useRef();r.current==null&&(r.current=D({window:a,v5Compat:!0}));let n=r.current,[s,u]=c.useState({action:n.action,location:n.location});return c.useLayoutEffect(()=>n.listen(u),[n]),c.createElement(O,{basename:t,children:i,location:s.location,navigationType:s.action,navigator:n})}const I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_=c.forwardRef(function(t,i){let{onClick:a,relative:r,reloadDocument:n,replace:s,state:u,target:h,to:o,preventScrollReset:p}=t,g=N(t,z),y,m=!1;if(I&&typeof o=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(o)){y=o;let l=new URL(window.location.href),d=o.startsWith("//")?new URL(l.protocol+o):new URL(o);d.origin===l.origin?o=d.pathname+d.search+d.hash:m=!0}let w=j(o,{relative:r}),f=M(o,{replace:s,state:u,target:h,preventScrollReset:p,relative:r});function v(l){a&&a(l),l.defaultPrevented||f(l)}return c.createElement("a",L({},g,{href:y||w,onClick:m||n?a:v,ref:i,target:h}))}),Q=c.forwardRef(function(t,i){let{"aria-current":a="page",caseSensitive:r=!1,className:n="",end:s=!1,style:u,to:h,children:o}=t,p=N(t,B),g=k(h,{relative:p.relative}),y=x(),m=c.useContext(H),{navigator:w}=c.useContext(W),f=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,v=y.pathname,l=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(v=v.toLowerCase(),l=l?l.toLowerCase():null,f=f.toLowerCase());let d=v===f||!s&&v.startsWith(f)&&v.charAt(f.length)==="/",R=l!=null&&(l===f||!s&&l.startsWith(f)&&l.charAt(f.length)==="/"),U=d?a:void 0,C;typeof n=="function"?C=n({isActive:d,isPending:R}):C=[n,d?"active":null,R?"pending":null].filter(Boolean).join(" ");let E=typeof u=="function"?u({isActive:d,isPending:R}):u;return c.createElement(_,L({},p,{"aria-current":U,className:C,ref:i,style:E,to:h}),typeof o=="function"?o({isActive:d,isPending:R}):o)});var S;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(S||(S={}));var P;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(P||(P={}));function M(e,t){let{target:i,replace:a,state:r,preventScrollReset:n,relative:s}=t===void 0?{}:t,u=K(),h=x(),o=k(e,{relative:s});return c.useCallback(p=>{if(A(p,i)){p.preventDefault();let g=a!==void 0?a:b(h)===b(o);u(e,{replace:g,state:r,preventScrollReset:n,relative:s})}},[h,u,o,a,r,i,e,n,s])}export{J as H,_ as L,Q as N};
//# sourceMappingURL=react-router-dom-e5f3a2d5.js.map
