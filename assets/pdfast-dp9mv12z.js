import{s as G}from"./@babel-Bq6cfFqp.js";var T={exports:{}},D={exports:{}};(function(u){var h=u.exports;u.exports.isNumber=function(a){return typeof a=="number"},u.exports.findMin=function(a){if(a.length===0)return 1/0;for(var i=a[0],n=1;n<a.length;n++)i=Math.min(i,a[n]);return i},u.exports.findMax=function(a){if(a.length===0)return-1/0;for(var i=a[0],n=1;n<a.length;n++)i=Math.max(i,a[n]);return i},u.exports.findMinMulti=function(a){for(var i=h.findMin(a[0]),n=1;n<a.length;n++)i=Math.min(i,h.findMin(a[n]));return i},u.exports.findMaxMulti=function(a){for(var i=h.findMax(a[0]),n=1;n<a.length;n++)i=Math.max(i,h.findMax(a[n]));return i},u.exports.inside=function(a,i,n){return a<=n&&n<=i}})(D);var H=D.exports;(function(u){var h=50,a=2,i=Math.log(2),n=u.exports,c=H;function I(e){return 1-Math.abs(e)}u.exports.getUnifiedMinMax=function(e,r){return n.getUnifiedMinMaxMulti([e],r)},u.exports.getUnifiedMinMaxMulti=function(e,r){r=r||{};var f=!1,t=!1,v=c.isNumber(r.width)?r.width:a,g=c.isNumber(r.size)?r.size:h,o=c.isNumber(r.min)?r.min:(f=!0,c.findMinMulti(e)),M=c.isNumber(r.max)?r.max:(t=!0,c.findMaxMulti(e)),d=M-o,x=d/(g-1);return f&&(o=o-2*v*x),t&&(M=M+2*v*x),{min:o,max:M}},u.exports.create=function(e,r){if(r=r||{},!e||e.length===0)return[];var f=c.isNumber(r.size)?r.size:h,t=c.isNumber(r.width)?r.width:a,v=n.getUnifiedMinMax(e,{size:f,width:t,min:r.min,max:r.max}),g=v.min,o=v.max,M=o-g,d=M/(f-1);if(M===0)return[{x:g,y:1}];for(var x=[],E=0;E<f;E++)x.push({x:g+E*d,y:0});var B=function(l){return Math.floor((l-g)/d)},m=P(I,t),w=m[t],p=m[t-1]-m[t-2],k=0;e.forEach(function(l){var s=B(l);if(!(s+t<0||s-t>=x.length)){var C=Math.max(s-t,0),F=s,z=Math.min(s+t,x.length-1),N=C-(s-t),_=s+t-z,V=m[-t-1+N]||0,W=m[-t-1+_]||0,y=w/(w-V-W);N>0&&(k+=y*(N-1)*p);var L=Math.max(0,s-t+1);c.inside(0,x.length-1,L)&&(x[L].y+=y*1*p),c.inside(0,x.length-1,F+1)&&(x[F+1].y-=y*2*p),c.inside(0,x.length-1,z+1)&&(x[z+1].y+=y*1*p)}});var A=k,U=0,b=0;return x.forEach(function(l){U+=l.y,A+=U,l.y=A,b+=A}),b>0&&x.forEach(function(l){l.y/=b}),x};function P(e,r){for(var f={},t=0,v=-r;v<=r;v++)t+=e(v/r),f[v]=t;return f}u.exports.getExpectedValueFromPdf=function(e){if(!(!e||e.length===0)){var r=0;return e.forEach(function(f){r+=f.x*f.y}),r}},u.exports.getXWithLeftTailArea=function(e,r){if(!(!e||e.length===0)){for(var f=0,t=0,v=0;v<e.length&&(t=v,f+=e[v].y,!(f>=r));v++);return e[t].x}},u.exports.getPerplexity=function(e){if(!(!e||e.length===0)){var r=0;return e.forEach(function(f){var t=Math.log(f.y);isFinite(t)&&(r+=f.y*t)}),r=-r/i,Math.pow(2,r)}}})(T);var R=T.exports;const X=G(R);export{X as p};
