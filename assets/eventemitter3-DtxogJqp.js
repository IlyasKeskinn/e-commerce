import{s as d}from"./@babel-Bq6cfFqp.js";var m={exports:{}};(function(w){var g=Object.prototype.hasOwnProperty,u="~";function h(){}Object.create&&(h.prototype=Object.create(null),new h().__proto__||(u=!1));function E(s,t,n){this.fn=s,this.context=t,this.once=n||!1}function x(s,t,n,r,l){if(typeof n!="function")throw new TypeError("The listener must be a function");var c=new E(n,r||s,l),o=u?u+t:t;return s._events[o]?s._events[o].fn?s._events[o]=[s._events[o],c]:s._events[o].push(c):(s._events[o]=c,s._eventsCount++),s}function y(s,t){--s._eventsCount===0?s._events=new h:delete s._events[t]}function f(){this._events=new h,this._eventsCount=0}f.prototype.eventNames=function(){var t=[],n,r;if(this._eventsCount===0)return t;for(r in n=this._events)g.call(n,r)&&t.push(u?r.slice(1):r);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(n)):t},f.prototype.listeners=function(t){var n=u?u+t:t,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var l=0,c=r.length,o=new Array(c);l<c;l++)o[l]=r[l].fn;return o},f.prototype.listenerCount=function(t){var n=u?u+t:t,r=this._events[n];return r?r.fn?1:r.length:0},f.prototype.emit=function(t,n,r,l,c,o){var a=u?u+t:t;if(!this._events[a])return!1;var e=this._events[a],p=arguments.length,v,i;if(e.fn){switch(e.once&&this.removeListener(t,e.fn,void 0,!0),p){case 1:return e.fn.call(e.context),!0;case 2:return e.fn.call(e.context,n),!0;case 3:return e.fn.call(e.context,n,r),!0;case 4:return e.fn.call(e.context,n,r,l),!0;case 5:return e.fn.call(e.context,n,r,l,c),!0;case 6:return e.fn.call(e.context,n,r,l,c,o),!0}for(i=1,v=new Array(p-1);i<p;i++)v[i-1]=arguments[i];e.fn.apply(e.context,v)}else{var b=e.length,_;for(i=0;i<b;i++)switch(e[i].once&&this.removeListener(t,e[i].fn,void 0,!0),p){case 1:e[i].fn.call(e[i].context);break;case 2:e[i].fn.call(e[i].context,n);break;case 3:e[i].fn.call(e[i].context,n,r);break;case 4:e[i].fn.call(e[i].context,n,r,l);break;default:if(!v)for(_=1,v=new Array(p-1);_<p;_++)v[_-1]=arguments[_];e[i].fn.apply(e[i].context,v)}}return!0},f.prototype.on=function(t,n,r){return x(this,t,n,r,!1)},f.prototype.once=function(t,n,r){return x(this,t,n,r,!0)},f.prototype.removeListener=function(t,n,r,l){var c=u?u+t:t;if(!this._events[c])return this;if(!n)return y(this,c),this;var o=this._events[c];if(o.fn)o.fn===n&&(!l||o.once)&&(!r||o.context===r)&&y(this,c);else{for(var a=0,e=[],p=o.length;a<p;a++)(o[a].fn!==n||l&&!o[a].once||r&&o[a].context!==r)&&e.push(o[a]);e.length?this._events[c]=e.length===1?e[0]:e:y(this,c)}return this},f.prototype.removeAllListeners=function(t){var n;return t?(n=u?u+t:t,this._events[n]&&y(this,n)):(this._events=new h,this._eventsCount=0),this},f.prototype.off=f.prototype.removeListener,f.prototype.addListener=f.prototype.on,f.prefixed=u,f.EventEmitter=f,w.exports=f})(m);var L=m.exports;const O=d(L);export{O as E};
