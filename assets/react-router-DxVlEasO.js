import{r as n}from"./react-CaiScDP8.js";import{i as h,A as k,p as D,s as w,j as b,g as L,r as F,m as z,a as A}from"./@remix-run-BdeS3L6o.js";/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},P.apply(this,arguments)}const j=n.createContext(null),V=n.createContext(null),E=n.createContext(null),B=n.createContext(null),x=n.createContext({outlet:null,matches:[],isDataRoute:!1}),J=n.createContext(null);function ce(t,e){let{relative:r}=e===void 0?{}:e;R()||h(!1);let{basename:a,navigator:i}=n.useContext(E),{hash:s,pathname:o,search:f}=Q(t,{relative:r}),c=o;return a!=="/"&&(c=o==="/"?a:b([a,o])),i.createHref({pathname:c,search:f,hash:s})}function R(){return n.useContext(B)!=null}function U(){return R()||h(!1),n.useContext(B).location}function S(t){n.useContext(E).static||n.useLayoutEffect(t)}function W(){let{isDataRoute:t}=n.useContext(x);return t?le():q()}function q(){R()||h(!1);let t=n.useContext(j),{basename:e,future:r,navigator:a}=n.useContext(E),{matches:i}=n.useContext(x),{pathname:s}=U(),o=JSON.stringify(L(i,r.v7_relativeSplatPath)),f=n.useRef(!1);return S(()=>{f.current=!0}),n.useCallback(function(v,u){if(u===void 0&&(u={}),!f.current)return;if(typeof v=="number"){a.go(v);return}let l=F(v,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(l.pathname=l.pathname==="/"?e:b([e,l.pathname])),(u.replace?a.replace:a.push)(l,u.state,u)},[e,a,o,s,t])}const G=n.createContext(null);function K(t){let e=n.useContext(x).outlet;return e&&n.createElement(G.Provider,{value:t},e)}function de(){let{matches:t}=n.useContext(x),e=t[t.length-1];return e?e.params:{}}function Q(t,e){let{relative:r}=e===void 0?{}:e,{future:a}=n.useContext(E),{matches:i}=n.useContext(x),{pathname:s}=U(),o=JSON.stringify(L(i,a.v7_relativeSplatPath));return n.useMemo(()=>F(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function X(t,e){return Y(t,e)}function Y(t,e,r,a){R()||h(!1);let{navigator:i}=n.useContext(E),{matches:s}=n.useContext(x),o=s[s.length-1],f=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let v=U(),u;if(e){var l;let d=typeof e=="string"?D(e):e;c==="/"||(l=d.pathname)!=null&&l.startsWith(c)||h(!1),u=d}else u=v;let p=u.pathname||"/",m=p;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=z(t,{pathname:m}),C=te(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:b([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:b([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),s,r,a);return e&&C?n.createElement(B.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:k.Pop}},C):C}function Z(){let t=oe(),e=A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},e),r?n.createElement("pre",{style:i},r):null,null)}const $=n.createElement(Z,null);class H extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?n.createElement(x.Provider,{value:this.props.routeContext},n.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ee(t){let{routeContext:e,match:r,children:a}=t,i=n.useContext(j);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(x.Provider,{value:e},a)}function te(t,e,r,a){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),a===void 0&&(a=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,f=(i=r)==null?void 0:i.errors;if(f!=null){let u=o.findIndex(l=>l.route.id&&(f==null?void 0:f[l.route.id])!==void 0);u>=0||h(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,v=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(v=u),l.route.id){let{loaderData:p,errors:m}=r,g=l.route.loader&&p[l.route.id]===void 0&&(!m||m[l.route.id]===void 0);if(l.route.lazy||g){c=!0,v>=0?o=o.slice(0,v+1):o=[o[0]];break}}}return o.reduceRight((u,l,p)=>{let m,g=!1,C=null,d=null;r&&(m=f&&l.route.id?f[l.route.id]:void 0,C=l.route.errorElement||$,c&&(v<0&&p===0?(g=!0,d=null):v===p&&(g=!0,d=l.route.hydrateFallbackElement||null)));let O=e.concat(o.slice(0,p+1)),M=()=>{let y;return m?y=C:g?y=d:l.route.Component?y=n.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=u,n.createElement(ee,{match:l,routeContext:{outlet:u,matches:O,isDataRoute:r!=null},children:y})};return r&&(l.route.ErrorBoundary||l.route.errorElement||p===0)?n.createElement(H,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:M(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):M()},null)}var _=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_||{}),N=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N||{});function re(t){let e=n.useContext(j);return e||h(!1),e}function ae(t){let e=n.useContext(V);return e||h(!1),e}function ne(t){let e=n.useContext(x);return e||h(!1),e}function T(t){let e=ne(),r=e.matches[e.matches.length-1];return r.route.id||h(!1),r.route.id}function oe(){var t;let e=n.useContext(J),r=ae(N.UseRouteError),a=T(N.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[a]}function le(){let{router:t}=re(_.UseNavigateStable),e=T(N.UseNavigateStable),r=n.useRef(!1);return S(()=>{r.current=!0}),n.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,P({fromRouteId:e},s)))},[t,e])}function fe(t){let{to:e,replace:r,state:a,relative:i}=t;R()||h(!1);let{future:s,static:o}=n.useContext(E),{matches:f}=n.useContext(x),{pathname:c}=U(),v=W(),u=F(e,L(f,s.v7_relativeSplatPath),c,i==="path"),l=JSON.stringify(u);return n.useEffect(()=>v(JSON.parse(l),{replace:r,state:a,relative:i}),[v,l,i,r,a]),null}function ve(t){return K(t.context)}function ie(t){h(!1)}function he(t){let{basename:e="/",children:r=null,location:a,navigationType:i=k.Pop,navigator:s,static:o=!1,future:f}=t;R()&&h(!1);let c=e.replace(/^\/*/,"/"),v=n.useMemo(()=>({basename:c,navigator:s,static:o,future:P({v7_relativeSplatPath:!1},f)}),[c,f,s,o]);typeof a=="string"&&(a=D(a));let{pathname:u="/",search:l="",hash:p="",state:m=null,key:g="default"}=a,C=n.useMemo(()=>{let d=w(u,c);return d==null?null:{location:{pathname:d,search:l,hash:p,state:m,key:g},navigationType:i}},[c,u,l,p,m,g,i]);return C==null?null:n.createElement(E.Provider,{value:v},n.createElement(B.Provider,{children:r,value:C}))}function pe(t){let{children:e,location:r}=t;return X(I(e),r)}new Promise(()=>{});function I(t,e){e===void 0&&(e=[]);let r=[];return n.Children.forEach(t,(a,i)=>{if(!n.isValidElement(a))return;let s=[...e,i];if(a.type===n.Fragment){r.push.apply(r,I(a.props.children,s));return}a.type!==ie&&h(!1),!a.props.index||!a.props.children||h(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=I(a.props.children,s)),r.push(o)}),r}export{V as D,E as N,ve as O,he as R,Q as a,U as b,W as c,j as d,de as e,fe as f,pe as g,ie as h,ce as u};