import{h as pe,c as N,d as Ne,e as F,g as he,b as ce,f as Ve}from"./@babel-Bq6cfFqp.js";import{c as W}from"./classnames-CitcWPCJ.js";import{u as Pe,B as _e,r as ve}from"./rc-input-BZdCFFwQ.js";import{B as Se,u as me,q as ge}from"./rc-util-Cf5ZPtx7.js";import{r as f,a as S}from"./react-CaiScDP8.js";import{R as Me}from"./rc-resize-observer-BSO-zkEq.js";var $e=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Le=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],se={},v;function Be(e){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(A&&se[a])return se[a];var n=window.getComputedStyle(e),m=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),g=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),r=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=Le.map(function(l){return"".concat(l,":").concat(n.getPropertyValue(l))}).join(";"),R={sizingStyle:s,paddingSize:g,borderSize:r,boxSizing:m};return A&&a&&(se[a]=R),R}function He(e){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;v||(v=document.createElement("textarea"),v.setAttribute("tab-index","-1"),v.setAttribute("aria-hidden","true"),document.body.appendChild(v)),e.getAttribute("wrap")?v.setAttribute("wrap",e.getAttribute("wrap")):v.removeAttribute("wrap");var m=Be(e,A),g=m.paddingSize,r=m.borderSize,s=m.boxSizing,R=m.sizingStyle;v.setAttribute("style","".concat(R,";").concat($e)),v.value=e.value||e.placeholder||"";var l=void 0,d=void 0,x,u=v.scrollHeight;if(s==="border-box"?u+=r:s==="content-box"&&(u-=g),a!==null||n!==null){v.value=" ";var _=v.scrollHeight-g;a!==null&&(l=_*a,s==="border-box"&&(l=l+g+r),u=Math.max(l,u)),n!==null&&(d=_*n,s==="border-box"&&(d=d+g+r),x=u>d?"":"hidden",u=Math.min(d,u))}var z={height:u,overflowY:x,resize:"none"};return l&&(z.minHeight=l),d&&(z.maxHeight=d),z}var De=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],le=0,ue=1,de=2,Ke=f.forwardRef(function(e,A){var a=e,n=a.prefixCls;a.onPressEnter;var m=a.defaultValue,g=a.value,r=a.autoSize,s=a.onResize,R=a.className,l=a.style,d=a.disabled,x=a.onChange;a.onInternalAutoSize;var u=pe(a,De),_=Se(m,{value:g,postState:function(o){return o??""}}),z=N(_,2),I=z[0],D=z[1],Q=function(o){D(o.target.value),x==null||x(o)},y=f.useRef();f.useImperativeHandle(A,function(){return{textArea:y.current}});var M=f.useMemo(function(){return r&&Ne(r)==="object"?[r.minRows,r.maxRows]:[]},[r]),V=N(M,2),Z=V[0],c=V[1],b=!!r,K=function(){try{if(document.activeElement===y.current){var o=y.current,E=o.selectionStart,J=o.selectionEnd,ae=o.scrollTop;y.current.setSelectionRange(E,J),y.current.scrollTop=ae}}catch{}},$=f.useState(de),k=N($,2),C=k[0],P=k[1],G=f.useState(),L=N(G,2),ee=L[0],X=L[1],q=function(){P(le)};me(function(){b&&q()},[g,Z,c,b]),me(function(){if(C===le)P(ue);else if(C===ue){var w=He(y.current,!1,Z,c);P(de),X(w)}else K()},[C]);var B=f.useRef(),H=function(){ge.cancel(B.current)},te=function(o){C===de&&(s==null||s(o),r&&(H(),B.current=ge(function(){q()})))};f.useEffect(function(){return H},[]);var U=b?ee:null,Y=F(F({},l),U);return(C===le||C===ue)&&(Y.overflowY="hidden",Y.overflowX="hidden"),f.createElement(Me,{onResize:te,disabled:!(r||s)},f.createElement("textarea",he({},u,{ref:y,style:Y,className:W(n,R,ce({},"".concat(n,"-disabled"),d)),disabled:d,value:I,onChange:Q})))}),Ye=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"],Xe=S.forwardRef(function(e,A){var a,n,m=e.defaultValue,g=e.value,r=e.onFocus,s=e.onBlur,R=e.onChange,l=e.allowClear,d=e.maxLength,x=e.onCompositionStart,u=e.onCompositionEnd,_=e.suffix,z=e.prefixCls,I=z===void 0?"rc-textarea":z,D=e.showCount,Q=e.count,y=e.className,M=e.style,V=e.disabled,Z=e.hidden,c=e.classNames,b=e.styles,K=e.onResize,$=pe(e,Ye),k=Se(m,{value:g,defaultValue:m}),C=N(k,2),P=C[0],G=C[1],L=P==null?"":String(P),ee=S.useState(!1),X=N(ee,2),q=X[0],B=X[1],H=S.useRef(!1),te=S.useState(null),U=N(te,2),Y=U[0],w=U[1],o=f.useRef(null),E=function(){var t;return(t=o.current)===null||t===void 0?void 0:t.textArea},J=function(){E().focus()};f.useImperativeHandle(A,function(){return{resizableTextArea:o.current,focus:J,blur:function(){E().blur()}}}),f.useEffect(function(){B(function(i){return!V&&i})},[V]);var ae=S.useState(null),ne=N(ae,2),re=ne[0],xe=ne[1];S.useEffect(function(){if(re){var i;(i=E()).setSelectionRange.apply(i,Ve(re))}},[re]);var p=Pe(Q,D),j=(a=p.max)!==null&&a!==void 0?a:d,be=Number(j)>0,oe=p.strategy(L),Re=!!j&&oe>j,fe=function(t,h){var T=h;!H.current&&p.exceedFormatter&&p.max&&p.strategy(h)>p.max&&(T=p.exceedFormatter(h,{max:p.max}),h!==T&&xe([E().selectionStart||0,E().selectionEnd||0])),G(T),ve(t.currentTarget,t,R,T)},ze=function(t){H.current=!0,x==null||x(t)},ye=function(t){H.current=!1,fe(t,t.currentTarget.value),u==null||u(t)},Ce=function(t){fe(t,t.target.value)},we=function(t){var h=$.onPressEnter,T=$.onKeyDown;t.key==="Enter"&&h&&h(t),T==null||T(t)},Ee=function(t){B(!0),r==null||r(t)},Ae=function(t){B(!1),s==null||s(t)},Ie=function(t){G(""),J(),ve(E(),t,R)},ie=_,O;p.show&&(p.showFormatter?O=p.showFormatter({value:L,count:oe,maxLength:j}):O="".concat(oe).concat(be?" / ".concat(j):""),ie=S.createElement(S.Fragment,null,ie,S.createElement("span",{className:W("".concat(I,"-data-count"),c==null?void 0:c.count),style:b==null?void 0:b.count},O)));var Te=function(t){var h;K==null||K(t),(h=E())!==null&&h!==void 0&&h.style.height&&w(!0)},Fe=!$.autoSize&&!D&&!l;return S.createElement(_e,{value:L,allowClear:l,handleReset:Ie,suffix:ie,prefixCls:I,classNames:F(F({},c),{},{affixWrapper:W(c==null?void 0:c.affixWrapper,(n={},ce(n,"".concat(I,"-show-count"),D),ce(n,"".concat(I,"-textarea-allow-clear"),l),n))}),disabled:V,focused:q,className:W(y,Re&&"".concat(I,"-out-of-range")),style:F(F({},M),Y&&!Fe?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof O=="string"?O:void 0}},hidden:Z},S.createElement(Ke,he({},$,{maxLength:d,onKeyDown:we,onChange:Ce,onFocus:Ee,onBlur:Ae,onCompositionStart:ze,onCompositionEnd:ye,className:W(c==null?void 0:c.textarea),style:F(F({},b==null?void 0:b.textarea),{},{resize:M==null?void 0:M.resize}),disabled:V,prefixCls:I,onResize:Te,ref:o})))});export{Xe as T};
