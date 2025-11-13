(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ul(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Zr=[],an=()=>{},xd=()=>!1,ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hl=t=>t.startsWith("onUpdate:"),gt=Object.assign,fl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Q_=Object.prototype.hasOwnProperty,Re=(t,e)=>Q_.call(t,e),oe=Array.isArray,es=t=>Vi(t)==="[object Map]",oa=t=>Vi(t)==="[object Set]",hh=t=>Vi(t)==="[object Date]",ue=t=>typeof t=="function",Ge=t=>typeof t=="string",mn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Md=t=>(Ne(t)||ue(t))&&ue(t.then)&&ue(t.catch),Ld=Object.prototype.toString,Vi=t=>Ld.call(t),Y_=t=>Vi(t).slice(8,-1),Fd=t=>Vi(t)==="[object Object]",dl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},J_=/-\w/g,Bt=aa(t=>t.replace(J_,e=>e.slice(1).toUpperCase())),X_=/\B([A-Z])/g,mr=aa(t=>t.replace(X_,"-$1").toLowerCase()),ca=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=aa(t=>t?`on${ca(t)}`:""),er=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ud=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},la=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fh;const ua=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?ny(r):pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Ne(t))return t}const Z_=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*[^]*?\*\//g;function ny(t){const e={};return t.replace(ty,"").split(Z_).forEach(n=>{if(n){const r=n.split(ey);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Di(t){let e="";if(Ge(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Di(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=ul(ry);function Bd(t){return!!t||t===""}function iy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ha(t[r],e[r]);return n}function ha(t,e){if(t===e)return!0;let n=hh(t),r=hh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?iy(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ha(t[o],e[o]))return!1}}return String(t)===String(e)}function oy(t,e){return t.findIndex(n=>ha(n,e))}const jd=t=>!!(t&&t.__v_isRef===!0),on=t=>Ge(t)?t:t==null?"":oe(t)||Ne(t)&&(t.toString===Ld||!ue(t.toString))?jd(t)?on(t.value):JSON.stringify(t,$d,2):String(t),$d=(t,e)=>jd(e)?$d(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Za(r,i)+" =>"]=s,n),{})}:oa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Za(n))}:mn(e)?Za(e):Ne(e)&&!oe(e)&&!Fd(e)?String(e):e,Za=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class Hd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ay(t){return new Hd(t)}function cy(){return Rt}let Ve;const ec=new WeakSet;class qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ec.has(this)&&(ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),zd(this);const e=Ve,n=Yt;Ve=this,Yt=!0;try{return this.fn()}finally{Kd(this),Ve=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_l(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ac(this)&&this.run()}get dirty(){return Ac(this)}}let Wd=0,ei,ti;function Gd(t,e=!1){if(t.flags|=8,e){t.next=ti,ti=t;return}t.next=ei,ei=t}function ml(){Wd++}function gl(){if(--Wd>0)return;if(ti){let e=ti;for(ti=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ei;){let e=ei;for(ei=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),_l(r),ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pi)||(t.globalVersion=pi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ac(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Yt;Ve=t,Yt=!0;try{zd(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Yt=r,Kd(t),t.flags&=-3}}function _l(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_l(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const Yd=[];function Cn(){Yd.push(Yt),Yt=!1}function Nn(){const t=Yd.pop();Yt=t===void 0?!0:t}function dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let pi=0;class uy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Yt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new uy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Jd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,pi++,this.notify(e)}notify(e){ml();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gl()}}}function Jd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Jd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rc=new WeakMap,Cr=Symbol(""),Sc=Symbol(""),mi=Symbol("");function ft(t,e,n){if(Yt&&Ve){let r=Rc.get(t);r||Rc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new yl),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const o=Rc.get(t);if(!o){pi++;return}const c=l=>{l&&l.trigger()};if(ml(),e==="clear")o.forEach(c);else{const l=oe(t),h=l&&dl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===mi||!mn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(mi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Cr)),es(t)&&c(o.get(Sc)));break;case"delete":l||(c(o.get(Cr)),es(t)&&c(o.get(Sc)));break;case"set":es(t)&&c(o.get(Cr));break}}gl()}function Wr(t){const e=Ae(t);return e===t?e:(ft(e,"iterate",mi),Ut(t)?e:e.map(st))}function fa(t){return ft(t=Ae(t),"iterate",mi),t}const hy={__proto__:null,[Symbol.iterator](){return tc(this,Symbol.iterator,st)},concat(...t){return Wr(this).concat(...t.map(e=>oe(e)?Wr(e):e))},entries(){return tc(this,"entries",t=>(t[1]=st(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(st),arguments)},find(t,e){return Tn(this,"find",t,e,st,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,st,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return nc(this,"includes",t)},indexOf(...t){return nc(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return nc(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...t){return Hs(this,"push",t)},reduce(t,...e){return ph(this,"reduce",t,e)},reduceRight(t,...e){return ph(this,"reduceRight",t,e)},shift(){return Hs(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return Hs(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Hs(this,"unshift",t)},values(){return tc(this,"values",st)}};function tc(t,e,n){const r=fa(t),s=r[e]();return r!==t&&!Ut(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const fy=Array.prototype;function Tn(t,e,n,r,s,i){const o=fa(t),c=o!==t&&!Ut(t),l=o[e];if(l!==fy[e]){const p=l.apply(t,i);return c?st(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,st(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function ph(t,e,n,r){const s=fa(t);let i=n;return s!==t&&(Ut(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,st(c),l,t)}),s[e](i,...r)}function nc(t,e,n){const r=Ae(t);ft(r,"iterate",mi);const s=r[e](...n);return(s===-1||s===!1)&&Tl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Hs(t,e,n=[]){Cn(),ml();const r=Ae(t)[e].apply(t,n);return gl(),Nn(),r}const dy=ul("__proto__,__v_isRef,__isVue"),Xd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function py(t){mn(t)||(t=String(t));const e=Ae(this);return ft(e,"has",t),e.hasOwnProperty(t)}class Zd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ay:rp:i?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=hy[n]))return l;if(n==="hasOwnProperty")return py}const c=Reflect.get(e,n,mt(e)?e:r);if((mn(n)?Xd.has(n):dy(n))||(s||ft(e,"get",n),i))return c;if(mt(c)){const l=o&&dl(n)?c:c.value;return s&&Ne(l)?Pc(l):l}return Ne(c)?s?Pc(c):da(c):c}}class ep extends Zd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ar(i);if(!Ut(r)&&!ar(r)&&(i=Ae(i),r=Ae(r)),!oe(e)&&mt(i)&&!mt(r))return l||(i.value=r),!0}const o=oe(e)&&dl(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,mt(e)?e:s);return e===Ae(s)&&(o?er(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!Xd.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",oe(e)?"length":Cr),Reflect.ownKeys(e)}}class my extends Zd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gy=new ep,_y=new my,yy=new ep(!0);const bc=t=>t,no=t=>Reflect.getPrototypeOf(t);function Ey(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=es(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?bc:e?Po:st;return!e&&ft(i,"iterate",l?Sc:Cr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vy(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(er(s,c)&&ft(o,"get",s),ft(o,"get",c));const{has:l}=no(o),h=e?bc:t?Po:st;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Ae(s),"iterate",Cr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(er(s,c)&&ft(o,"has",s),ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?bc:t?Po:st;return!t&&ft(l,"iterate",Cr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return gt(n,t?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!Ut(s)&&!ar(s)&&(s=Ae(s));const i=Ae(this);return no(i).has.call(i,s)||(i.add(s),An(i,"add",s,s)),this},set(s,i){!e&&!Ut(i)&&!ar(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=no(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?er(i,f)&&An(o,"set",s,i):An(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=no(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&An(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&An(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ey(s,t,e)}),n}function El(t,e){const n=vy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Ty={get:El(!1,!1)},Iy={get:El(!1,!0)},wy={get:El(!0,!1)};const tp=new WeakMap,np=new WeakMap,rp=new WeakMap,Ay=new WeakMap;function Ry(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ry(Y_(t))}function da(t){return ar(t)?t:vl(t,!1,gy,Ty,tp)}function sp(t){return vl(t,!1,yy,Iy,np)}function Pc(t){return vl(t,!0,_y,wy,rp)}function vl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Sy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ts(t){return ar(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function Ut(t){return!!(t&&t.__v_isShallow)}function Tl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function ip(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Ud(t,"__v_skip",!0),t}const st=t=>Ne(t)?da(t):t,Po=t=>Ne(t)?Pc(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function Be(t){return op(t,!1)}function by(t){return op(t,!0)}function op(t,e){return mt(t)?t:new Py(t,e)}class Py{constructor(e,n){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:st(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ut(e)||ar(e);e=r?e:Ae(e),er(e,n)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function ns(t){return mt(t)?t.value:t}const Cy={get:(t,e,n)=>e==="__v_raw"?t:ns(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ap(t){return ts(t)?t:new Proxy(t,Cy)}class Ny{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Gd(this,!0),!0}get value(){const e=this.dep.track();return Qd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vy(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new Ny(r,s,n)}const so={},Co=new WeakMap;let Ar;function Dy(t,e=!1,n=Ar){if(n){let r=Co.get(n);r||Co.set(n,r=[]),r.push(t)}}function ky(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=G=>s?G:Ut(G)||s===!1||s===0?Rn(G,1):Rn(G);let f,p,m,_,b=!1,N=!1;if(mt(t)?(p=()=>t.value,b=Ut(t)):ts(t)?(p=()=>h(t),b=!0):oe(t)?(N=!0,b=t.some(G=>ts(G)||Ut(G)),p=()=>t.map(G=>{if(mt(G))return G.value;if(ts(G))return h(G);if(ue(G))return l?l(G,2):G()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Cn();try{m()}finally{Nn()}}const G=Ar;Ar=f;try{return l?l(t,3,[_]):t(_)}finally{Ar=G}}:p=an,e&&s){const G=p,he=s===!0?1/0:s;p=()=>Rn(G(),he)}const D=cy(),H=()=>{f.stop(),D&&D.active&&fl(D.effects,f)};if(i&&e){const G=e;e=(...he)=>{G(...he),H()}}let $=N?new Array(t.length).fill(so):so;const W=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const he=f.run();if(s||b||(N?he.some((de,w)=>er(de,$[w])):er(he,$))){m&&m();const de=Ar;Ar=f;try{const w=[he,$===so?void 0:N&&$[0]===so?[]:$,_];$=he,l?l(e,3,w):e(...w)}finally{Ar=de}}}else f.run()};return c&&c(W),f=new qd(p),f.scheduler=o?()=>o(W,!1):W,_=G=>Dy(G,!1,f),m=f.onStop=()=>{const G=Co.get(f);if(G){if(l)l(G,4);else for(const he of G)he();Co.delete(f)}},e?r?W(!0):$=f.run():o?o(W.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function Rn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,mt(t))Rn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Rn(t[r],e,n);else if(oa(t)||es(t))t.forEach(r=>{Rn(r,e,n)});else if(Fd(t)){for(const r in t)Rn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Rn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ki(t,e,n,r){try{return r?t(...r):t()}catch(s){pa(s,e,n)}}function gn(t,e,n,r){if(ue(t)){const s=ki(t,e,n,r);return s&&Md(s)&&s.catch(i=>{pa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function pa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Cn(),ki(i,null,10,[t,l,h]),Nn();return}}Oy(t,n,s,r,o)}function Oy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let nn=-1;const rs=[];let Gn=null,Gr=0;const cp=Promise.resolve();let No=null;function Il(t){const e=No||cp;return t?e.then(this?t.bind(this):t):e}function xy(t){let e=nn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function wl(t){if(!(t.flags&1)){const e=gi(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=gi(n)?Tt.push(t):Tt.splice(xy(e),0,t),t.flags|=1,lp()}}function lp(){No||(No=cp.then(hp))}function My(t){oe(t)?rs.push(...t):Gn&&t.id===-1?Gn.splice(Gr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),lp()}function mh(t,e,n=nn+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function up(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>gi(n)-gi(r));if(rs.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gr=0;Gr<Gn.length;Gr++){const n=Gn[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,Gr=0}}const gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hp(t){try{for(nn=0;nn<Tt.length;nn++){const e=Tt[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ki(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Tt.length;nn++){const e=Tt[nn];e&&(e.flags&=-2)}nn=-1,Tt.length=0,up(),No=null,(Tt.length||rs.length)&&hp()}}let kt=null,fp=null;function Vo(t){const e=kt;return kt=t,fp=t&&t.type.__scopeId||null,e}function Ly(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=Vo(e);let o;try{o=t(...s)}finally{Vo(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xt(t,e){if(kt===null)return t;const n=ya(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Rn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Cn(),gn(l,n,8,[t.el,c,t,e]),Nn())}}const Fy=Symbol("_vte"),Uy=t=>t.__isTeleport,By=Symbol("_leaveCb");function Al(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Al(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dp(t,e){return ue(t)?gt({name:t.name},e,{setup:t}):t}function pp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Do=new WeakMap;function ni(t,e,n,r,s=!1){if(oe(t)){t.forEach((b,N)=>ni(b,e&&(oe(e)?e[N]:e),n,r,s));return}if(ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ni(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ya(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,m=Ae(p),_=p===Ce?xd:b=>Re(m,b);if(h!=null&&h!==l){if(gh(e),Ge(h))f[h]=null,_(h)&&(p[h]=null);else if(mt(h)){h.value=null;const b=e;b.k&&(f[b.k]=null)}}if(ue(l))ki(l,c,12,[o,f]);else{const b=Ge(l),N=mt(l);if(b||N){const D=()=>{if(t.f){const H=b?_(l)?p[l]:f[l]:l.value;if(s)oe(H)&&fl(H,i);else if(oe(H))H.includes(i)||H.push(i);else if(b)f[l]=[i],_(l)&&(p[l]=f[l]);else{const $=[i];l.value=$,t.k&&(f[t.k]=$)}}else b?(f[l]=o,_(l)&&(p[l]=o)):N&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const H=()=>{D(),Do.delete(t)};H.id=-1,Do.set(t,H),Dt(H,n)}else gh(t),D()}}}function gh(t){const e=Do.get(t);e&&(e.flags|=8,Do.delete(t))}ua().requestIdleCallback;ua().cancelIdleCallback;const ri=t=>!!t.type.__asyncLoader,mp=t=>t.type.__isKeepAlive;function jy(t,e){gp(t,"a",e)}function $y(t,e){gp(t,"da",e)}function gp(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)mp(s.parent.vnode)&&Hy(r,e,n,s),s=s.parent}}function Hy(t,e,n,r){const s=ma(e,t,r,!0);_p(()=>{fl(r[e],s)},n)}function ma(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cn();const c=Oi(n),l=gn(e,n,t,o);return c(),Nn(),l});return r?s.unshift(i):s.push(i),i}}const xn=t=>(e,n=pt)=>{(!yi||t==="sp")&&ma(t,(...r)=>e(...r),n)},qy=xn("bm"),Rl=xn("m"),Wy=xn("bu"),Gy=xn("u"),zy=xn("bum"),_p=xn("um"),Ky=xn("sp"),Qy=xn("rtg"),Yy=xn("rtc");function Jy(t,e=pt){ma("ec",t,e)}const Xy="components";function Zy(t,e){return tE(Xy,t,!0,e)||t}const eE=Symbol.for("v-ndc");function tE(t,e,n=!0,r=!1){const s=kt||pt;if(s){const i=s.type;{const c=qE(i,!1);if(c&&(c===e||c===Bt(e)||c===ca(Bt(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[Bt(e)]||t[ca(Bt(e))])}function yh(t,e,n,r){let s;const i=n,o=oe(t);if(o||Ge(t)){const c=o&&ts(t);let l=!1,h=!1;c&&(l=!Ut(t),h=ar(t),t=fa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Po(st(t[f])):st(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Cc=t=>t?Fp(t)?ya(t):Cc(t.parent):null,si=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ep(t),$forceUpdate:t=>t.f||(t.f=()=>{wl(t.update)}),$nextTick:t=>t.n||(t.n=Il.bind(t.proxy)),$watch:t=>IE.bind(t)}),rc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),nE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(rc(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const f=si[e];let p,m;if(f)return e==="$attrs"&&ft(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return rc(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,h;return!!(n[c]||t!==Ce&&c[0]!=="$"&&Re(t,c)||rc(e,c)||(l=i[0])&&Re(l,c)||Re(r,c)||Re(si,c)||Re(s.config.globalProperties,c)||(h=o.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function rE(t){const e=Ep(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:b,activated:N,deactivated:D,beforeDestroy:H,beforeUnmount:$,destroyed:W,unmounted:G,render:he,renderTracked:de,renderTriggered:w,errorCaptured:E,serverPrefetch:I,expose:R,inheritAttrs:A,components:P,directives:v,filters:je}=e;if(h&&sE(h,r,null),o)for(const Ie in o){const Ee=o[Ie];ue(Ee)&&(r[Ie]=Ee.bind(n))}if(s){const Ie=s.call(n,n);Ne(Ie)&&(t.data=da(Ie))}if(Nc=!0,i)for(const Ie in i){const Ee=i[Ie],At=ue(Ee)?Ee.bind(n,n):ue(Ee.get)?Ee.get.bind(n,n):an,Xt=!ue(Ee)&&ue(Ee.set)?Ee.set.bind(n):an,Pt=Mt({get:At,set:Xt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:tt=>Pt.value=tt})}if(c)for(const Ie in c)yp(c[Ie],r,n,Ie);if(l){const Ie=ue(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(Ee=>{fo(Ee,Ie[Ee])})}f&&vh(f,t,"c");function $e(Ie,Ee){oe(Ee)?Ee.forEach(At=>Ie(At.bind(n))):Ee&&Ie(Ee.bind(n))}if($e(qy,p),$e(Rl,m),$e(Wy,_),$e(Gy,b),$e(jy,N),$e($y,D),$e(Jy,E),$e(Yy,de),$e(Qy,w),$e(zy,$),$e(_p,G),$e(Ky,I),oe(R))if(R.length){const Ie=t.exposed||(t.exposed={});R.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:At=>n[Ee]=At,enumerable:!0})})}else t.exposed||(t.exposed={});he&&t.render===an&&(t.render=he),A!=null&&(t.inheritAttrs=A),P&&(t.components=P),v&&(t.directives=v),I&&pp(t)}function sE(t,e,n=an){oe(t)&&(t=Vc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=cn(s.from||r,s.default,!0):i=cn(s.from||r):i=cn(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vh(t,e,n){gn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yp(t,e,n,r){let s=r.includes(".")?Dp(n,r):()=>n[r];if(Ge(t)){const i=e[t];ue(i)&&po(s,i)}else if(ue(t))po(s,t.bind(n));else if(Ne(t))if(oe(t))t.forEach(i=>yp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&po(s,i,t)}}function Ep(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>ko(l,h,o,!0)),ko(l,e,o)),Ne(e)&&i.set(e,l),l}function ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ko(t,i,n,!0),s&&s.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=iE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const iE={data:Th,props:Ih,emits:Ih,methods:Gs,computed:Gs,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Gs,directives:Gs,watch:aE,provide:Th,inject:oE};function Th(t,e){return e?t?function(){return gt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function oE(t,e){return Gs(Vc(t),Vc(e))}function Vc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?gt(Object.create(null),t,e):e}function Ih(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:gt(Object.create(null),Eh(t),Eh(e??{})):e}function aE(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function vp(){return{app:null,config:{isNativeTag:xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cE=0;function lE(t,e){return function(r,s=null){ue(r)||(r=gt({},r)),s!=null&&!Ne(s)&&(s=null);const i=vp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:cE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:GE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(h,...p)):ue(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const _=h._ceVNode||It(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,h._container=f,f.__vue_app__=h,ya(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(gn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=ss;ss=h;try{return f()}finally{ss=p}}};return h}}let ss=null;function fo(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=UE();if(r||ss){let s=ss?ss._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Tp={},Ip=()=>Object.create(Tp),wp=t=>Object.getPrototypeOf(t)===Tp;function uE(t,e,n,r=!1){const s={},i=Ip();t.propsDefaults=Object.create(null),Ap(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(ga(t.emitsOptions,m))continue;const _=e[m];if(l)if(Re(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const b=Bt(m);s[b]=Dc(l,c,b,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Ap(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=mr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Dc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&An(t.attrs,"set","")}function Ap(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Zs(l))continue;const h=e[l];let f;s&&Re(s,f=Bt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ga(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Dc(s,l,p,h[p],t,!Re(h,p))}}return o}function Dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Oi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===mr(n))&&(r=!0))}return r}const fE=new WeakMap;function Rp(t,e,n=!1){const r=n?fE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[m,_]=Rp(p,e,!0);gt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ne(t)&&r.set(t,Zr),Zr;if(oe(i))for(let f=0;f<i.length;f++){const p=Bt(i[f]);wh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Bt(f);if(wh(p)){const m=i[f],_=o[p]=oe(m)||ue(m)?{type:m}:gt({},m),b=_.type;let N=!1,D=!0;if(oe(b))for(let H=0;H<b.length;++H){const $=b[H],W=ue($)&&$.name;if(W==="Boolean"){N=!0;break}else W==="String"&&(D=!1)}else N=ue(b)&&b.name==="Boolean";_[0]=N,_[1]=D,(N||Re(_,"default"))&&c.push(p)}}const h=[o,c];return Ne(t)&&r.set(t,h),h}function wh(t){return t[0]!=="$"&&!Zs(t)}const Sl=t=>t==="_"||t==="_ctx"||t==="$stable",bl=t=>oe(t)?t.map(sn):[sn(t)],dE=(t,e,n)=>{if(e._n)return e;const r=Ly((...s)=>bl(e(...s)),n);return r._c=!1,r},Sp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sl(s))continue;const i=t[s];if(ue(i))e[s]=dE(s,i,r);else if(i!=null){const o=bl(i);e[s]=()=>o}}},bp=(t,e)=>{const n=bl(e);t.slots.default=()=>n},Pp=(t,e,n)=>{for(const r in e)(n||!Sl(r))&&(t[r]=e[r])},pE=(t,e,n)=>{const r=t.slots=Ip();if(t.vnode.shapeFlag&32){const s=e._;s?(Pp(r,e,n),n&&Ud(r,"_",s,!0)):Sp(e,r)}else e&&bp(t,e)},mE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Pp(s,e,n):(i=!e.$stable,Sp(e,s)),o=e}else e&&(bp(t,e),o={default:1});if(i)for(const c in s)!Sl(c)&&o[c]==null&&delete s[c]},Dt=NE;function gE(t){return _E(t)}function _E(t,e){const n=ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=an,insertStaticContent:b}=t,N=(y,T,S,x=null,L=null,k=null,z=void 0,j=null,B=!!T.dynamicChildren)=>{if(y===T)return;y&&!qs(y,T)&&(x=O(y),tt(y,L,k,!0),y=null),T.patchFlag===-2&&(B=!1,T.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=T;switch(F){case _a:D(y,T,S,x);break;case cr:H(y,T,S,x);break;case mo:y==null&&$(T,S,x,z);break;case Wt:P(y,T,S,x,L,k,z,j,B);break;default:Q&1?he(y,T,S,x,L,k,z,j,B):Q&6?v(y,T,S,x,L,k,z,j,B):(Q&64||Q&128)&&F.process(y,T,S,x,L,k,z,j,B,ee)}ne!=null&&L?ni(ne,y&&y.ref,k,T||y,!T):ne==null&&y&&y.ref!=null&&ni(y.ref,null,k,y,!0)},D=(y,T,S,x)=>{if(y==null)r(T.el=c(T.children),S,x);else{const L=T.el=y.el;T.children!==y.children&&h(L,T.children)}},H=(y,T,S,x)=>{y==null?r(T.el=l(T.children||""),S,x):T.el=y.el},$=(y,T,S,x)=>{[y.el,y.anchor]=b(y.children,T,S,x,y.el,y.anchor)},W=({el:y,anchor:T},S,x)=>{let L;for(;y&&y!==T;)L=m(y),r(y,S,x),y=L;r(T,S,x)},G=({el:y,anchor:T})=>{let S;for(;y&&y!==T;)S=m(y),s(y),y=S;s(T)},he=(y,T,S,x,L,k,z,j,B)=>{if(T.type==="svg"?z="svg":T.type==="math"&&(z="mathml"),y==null)de(T,S,x,L,k,z,j,B);else{const F=y.el&&y.el._isVueCE?y.el:null;try{F&&F._beginPatch(),I(y,T,L,k,z,j,B)}finally{F&&F._endPatch()}}},de=(y,T,S,x,L,k,z,j)=>{let B,F;const{props:ne,shapeFlag:Q,transition:te,dirs:se}=y;if(B=y.el=o(y.type,k,ne&&ne.is,ne),Q&8?f(B,y.children):Q&16&&E(y.children,B,null,x,L,sc(y,k),z,j),se&&Ir(y,null,x,"created"),w(B,y,y.scopeId,z,x),ne){for(const be in ne)be!=="value"&&!Zs(be)&&i(B,be,null,ne[be],k,x);"value"in ne&&i(B,"value",null,ne.value,k),(F=ne.onVnodeBeforeMount)&&tn(F,x,y)}se&&Ir(y,null,x,"beforeMount");const pe=yE(L,te);pe&&te.beforeEnter(B),r(B,T,S),((F=ne&&ne.onVnodeMounted)||pe||se)&&Dt(()=>{F&&tn(F,x,y),pe&&te.enter(B),se&&Ir(y,null,x,"mounted")},L)},w=(y,T,S,x,L)=>{if(S&&_(y,S),x)for(let k=0;k<x.length;k++)_(y,x[k]);if(L){let k=L.subTree;if(T===k||Op(k.type)&&(k.ssContent===T||k.ssFallback===T)){const z=L.vnode;w(y,z,z.scopeId,z.slotScopeIds,L.parent)}}},E=(y,T,S,x,L,k,z,j,B=0)=>{for(let F=B;F<y.length;F++){const ne=y[F]=j?zn(y[F]):sn(y[F]);N(null,ne,T,S,x,L,k,z,j)}},I=(y,T,S,x,L,k,z)=>{const j=T.el=y.el;let{patchFlag:B,dynamicChildren:F,dirs:ne}=T;B|=y.patchFlag&16;const Q=y.props||Ce,te=T.props||Ce;let se;if(S&&wr(S,!1),(se=te.onVnodeBeforeUpdate)&&tn(se,S,T,y),ne&&Ir(T,y,S,"beforeUpdate"),S&&wr(S,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(j,""),F?R(y.dynamicChildren,F,j,S,x,sc(T,L),k):z||Ee(y,T,j,null,S,x,sc(T,L),k,!1),B>0){if(B&16)A(j,Q,te,S,L);else if(B&2&&Q.class!==te.class&&i(j,"class",null,te.class,L),B&4&&i(j,"style",Q.style,te.style,L),B&8){const pe=T.dynamicProps;for(let be=0;be<pe.length;be++){const Te=pe[be],ct=Q[Te],lt=te[Te];(lt!==ct||Te==="value")&&i(j,Te,ct,lt,L,S)}}B&1&&y.children!==T.children&&f(j,T.children)}else!z&&F==null&&A(j,Q,te,S,L);((se=te.onVnodeUpdated)||ne)&&Dt(()=>{se&&tn(se,S,T,y),ne&&Ir(T,y,S,"updated")},x)},R=(y,T,S,x,L,k,z)=>{for(let j=0;j<T.length;j++){const B=y[j],F=T[j],ne=B.el&&(B.type===Wt||!qs(B,F)||B.shapeFlag&198)?p(B.el):S;N(B,F,ne,null,x,L,k,z,!0)}},A=(y,T,S,x,L)=>{if(T!==S){if(T!==Ce)for(const k in T)!Zs(k)&&!(k in S)&&i(y,k,T[k],null,L,x);for(const k in S){if(Zs(k))continue;const z=S[k],j=T[k];z!==j&&k!=="value"&&i(y,k,j,z,L,x)}"value"in S&&i(y,"value",T.value,S.value,L)}},P=(y,T,S,x,L,k,z,j,B)=>{const F=T.el=y?y.el:c(""),ne=T.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:se}=T;se&&(j=j?j.concat(se):se),y==null?(r(F,S,x),r(ne,S,x),E(T.children||[],S,ne,L,k,z,j,B)):Q>0&&Q&64&&te&&y.dynamicChildren?(R(y.dynamicChildren,te,S,L,k,z,j),(T.key!=null||L&&T===L.subTree)&&Cp(y,T,!0)):Ee(y,T,S,ne,L,k,z,j,B)},v=(y,T,S,x,L,k,z,j,B)=>{T.slotScopeIds=j,y==null?T.shapeFlag&512?L.ctx.activate(T,S,x,z,B):je(T,S,x,L,k,z,B):wt(y,T,B)},je=(y,T,S,x,L,k,z)=>{const j=y.component=FE(y,x,L);if(mp(y)&&(j.ctx.renderer=ee),BE(j,!1,z),j.asyncDep){if(L&&L.registerDep(j,$e,z),!y.el){const B=j.subTree=It(cr);H(null,B,T,S),y.placeholder=B.el}}else $e(j,y,T,S,L,k,z)},wt=(y,T,S)=>{const x=T.component=y.component;if(PE(y,T,S))if(x.asyncDep&&!x.asyncResolved){Ie(x,T,S);return}else x.next=T,x.update();else T.el=y.el,x.vnode=T},$e=(y,T,S,x,L,k,z)=>{const j=()=>{if(y.isMounted){let{next:Q,bu:te,u:se,parent:pe,vnode:be}=y;{const Nt=Np(y);if(Nt){Q&&(Q.el=be.el,Ie(y,Q,z)),Nt.asyncDep.then(()=>{y.isUnmounted||j()});return}}let Te=Q,ct;wr(y,!1),Q?(Q.el=be.el,Ie(y,Q,z)):Q=be,te&&ho(te),(ct=Q.props&&Q.props.onVnodeBeforeUpdate)&&tn(ct,pe,Q,be),wr(y,!0);const lt=Rh(y),Ct=y.subTree;y.subTree=lt,N(Ct,lt,p(Ct.el),O(Ct),y,L,k),Q.el=lt.el,Te===null&&CE(y,lt.el),se&&Dt(se,L),(ct=Q.props&&Q.props.onVnodeUpdated)&&Dt(()=>tn(ct,pe,Q,be),L)}else{let Q;const{el:te,props:se}=T,{bm:pe,m:be,parent:Te,root:ct,type:lt}=y,Ct=ri(T);wr(y,!1),pe&&ho(pe),!Ct&&(Q=se&&se.onVnodeBeforeMount)&&tn(Q,Te,T),wr(y,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(lt);const Nt=y.subTree=Rh(y);N(null,Nt,S,x,y,L,k),T.el=Nt.el}if(be&&Dt(be,L),!Ct&&(Q=se&&se.onVnodeMounted)){const Nt=T;Dt(()=>tn(Q,Te,Nt),L)}(T.shapeFlag&256||Te&&ri(Te.vnode)&&Te.vnode.shapeFlag&256)&&y.a&&Dt(y.a,L),y.isMounted=!0,T=S=x=null}};y.scope.on();const B=y.effect=new qd(j);y.scope.off();const F=y.update=B.run.bind(B),ne=y.job=B.runIfDirty.bind(B);ne.i=y,ne.id=y.uid,B.scheduler=()=>wl(ne),wr(y,!0),F()},Ie=(y,T,S)=>{T.component=y;const x=y.vnode.props;y.vnode=T,y.next=null,hE(y,T.props,x,S),mE(y,T.children,S),Cn(),mh(y),Nn()},Ee=(y,T,S,x,L,k,z,j,B=!1)=>{const F=y&&y.children,ne=y?y.shapeFlag:0,Q=T.children,{patchFlag:te,shapeFlag:se}=T;if(te>0){if(te&128){Xt(F,Q,S,x,L,k,z,j,B);return}else if(te&256){At(F,Q,S,x,L,k,z,j,B);return}}se&8?(ne&16&&at(F,L,k),Q!==F&&f(S,Q)):ne&16?se&16?Xt(F,Q,S,x,L,k,z,j,B):at(F,L,k,!0):(ne&8&&f(S,""),se&16&&E(Q,S,x,L,k,z,j,B))},At=(y,T,S,x,L,k,z,j,B)=>{y=y||Zr,T=T||Zr;const F=y.length,ne=T.length,Q=Math.min(F,ne);let te;for(te=0;te<Q;te++){const se=T[te]=B?zn(T[te]):sn(T[te]);N(y[te],se,S,null,L,k,z,j,B)}F>ne?at(y,L,k,!0,!1,Q):E(T,S,x,L,k,z,j,B,Q)},Xt=(y,T,S,x,L,k,z,j,B)=>{let F=0;const ne=T.length;let Q=y.length-1,te=ne-1;for(;F<=Q&&F<=te;){const se=y[F],pe=T[F]=B?zn(T[F]):sn(T[F]);if(qs(se,pe))N(se,pe,S,null,L,k,z,j,B);else break;F++}for(;F<=Q&&F<=te;){const se=y[Q],pe=T[te]=B?zn(T[te]):sn(T[te]);if(qs(se,pe))N(se,pe,S,null,L,k,z,j,B);else break;Q--,te--}if(F>Q){if(F<=te){const se=te+1,pe=se<ne?T[se].el:x;for(;F<=te;)N(null,T[F]=B?zn(T[F]):sn(T[F]),S,pe,L,k,z,j,B),F++}}else if(F>te)for(;F<=Q;)tt(y[F],L,k,!0),F++;else{const se=F,pe=F,be=new Map;for(F=pe;F<=te;F++){const nt=T[F]=B?zn(T[F]):sn(T[F]);nt.key!=null&&be.set(nt.key,F)}let Te,ct=0;const lt=te-pe+1;let Ct=!1,Nt=0;const qt=new Array(lt);for(F=0;F<lt;F++)qt[F]=0;for(F=se;F<=Q;F++){const nt=y[F];if(ct>=lt){tt(nt,L,k,!0);continue}let Je;if(nt.key!=null)Je=be.get(nt.key);else for(Te=pe;Te<=te;Te++)if(qt[Te-pe]===0&&qs(nt,T[Te])){Je=Te;break}Je===void 0?tt(nt,L,k,!0):(qt[Je-pe]=F+1,Je>=Nt?Nt=Je:Ct=!0,N(nt,T[Je],S,null,L,k,z,j,B),ct++)}const jr=Ct?EE(qt):Zr;for(Te=jr.length-1,F=lt-1;F>=0;F--){const nt=pe+F,Je=T[nt],Ps=T[nt+1],_r=nt+1<ne?Ps.el||Ps.placeholder:x;qt[F]===0?N(null,Je,S,_r,L,k,z,j,B):Ct&&(Te<0||F!==jr[Te]?Pt(Je,S,_r,2):Te--)}}},Pt=(y,T,S,x,L=null)=>{const{el:k,type:z,transition:j,children:B,shapeFlag:F}=y;if(F&6){Pt(y.component.subTree,T,S,x);return}if(F&128){y.suspense.move(T,S,x);return}if(F&64){z.move(y,T,S,ee);return}if(z===Wt){r(k,T,S);for(let Q=0;Q<B.length;Q++)Pt(B[Q],T,S,x);r(y.anchor,T,S);return}if(z===mo){W(y,T,S);return}if(x!==2&&F&1&&j)if(x===0)j.beforeEnter(k),r(k,T,S),Dt(()=>j.enter(k),L);else{const{leave:Q,delayLeave:te,afterLeave:se}=j,pe=()=>{y.ctx.isUnmounted?s(k):r(k,T,S)},be=()=>{k._isLeaving&&k[By](!0),Q(k,()=>{pe(),se&&se()})};te?te(k,pe,be):be()}else r(k,T,S)},tt=(y,T,S,x=!1,L=!1)=>{const{type:k,props:z,ref:j,children:B,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:te,cacheIndex:se}=y;if(Q===-2&&(L=!1),j!=null&&(Cn(),ni(j,null,S,y,!0),Nn()),se!=null&&(T.renderCache[se]=void 0),ne&256){T.ctx.deactivate(y);return}const pe=ne&1&&te,be=!ri(y);let Te;if(be&&(Te=z&&z.onVnodeBeforeUnmount)&&tn(Te,T,y),ne&6)Ht(y.component,S,x);else{if(ne&128){y.suspense.unmount(S,x);return}pe&&Ir(y,null,T,"beforeUnmount"),ne&64?y.type.remove(y,T,S,ee,x):F&&!F.hasOnce&&(k!==Wt||Q>0&&Q&64)?at(F,T,S,!1,!0):(k===Wt&&Q&384||!L&&ne&16)&&at(B,T,S),x&&vn(y)}(be&&(Te=z&&z.onVnodeUnmounted)||pe)&&Dt(()=>{Te&&tn(Te,T,y),pe&&Ir(y,null,T,"unmounted")},S)},vn=y=>{const{type:T,el:S,anchor:x,transition:L}=y;if(T===Wt){$t(S,x);return}if(T===mo){G(y);return}const k=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:j}=L,B=()=>z(S,k);j?j(y.el,k,B):B()}else k()},$t=(y,T)=>{let S;for(;y!==T;)S=m(y),s(y),y=S;s(T)},Ht=(y,T,S)=>{const{bum:x,scope:L,job:k,subTree:z,um:j,m:B,a:F}=y;Ah(B),Ah(F),x&&ho(x),L.stop(),k&&(k.flags|=8,tt(z,y,T,S)),j&&Dt(j,T),Dt(()=>{y.isUnmounted=!0},T)},at=(y,T,S,x=!1,L=!1,k=0)=>{for(let z=k;z<y.length;z++)tt(y[z],T,S,x,L)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=m(y.anchor||y.el),S=T&&T[Fy];return S?m(S):T};let Y=!1;const K=(y,T,S)=>{y==null?T._vnode&&tt(T._vnode,null,null,!0):N(T._vnode||null,y,T,null,null,null,S),T._vnode=y,Y||(Y=!0,mh(),up(),Y=!1)},ee={p:N,um:tt,m:Pt,r:vn,mt:je,mc:E,pc:Ee,pbc:R,n:O,o:t};return{render:K,hydrate:void 0,createApp:lE(K)}}function sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Cp(o,c)),c.type===_a&&c.patchFlag!==-1&&(c.el=o.el),c.type===cr&&!c.el&&(c.el=o.el)}}function EE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Np(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Np(e)}function Ah(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const vE=Symbol.for("v-scx"),TE=()=>cn(vE);function po(t,e,n){return Vp(t,e,n)}function Vp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=gt({},n),l=e&&r||!e&&i!=="post";let h;if(yi){if(i==="sync"){const _=TE();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=an,_.resume=an,_.pause=an,_}}const f=pt;c.call=(_,b,N)=>gn(_,f,b,N);let p=!1;i==="post"?c.scheduler=_=>{Dt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,b)=>{b?_():wl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=ky(t,e,c);return yi&&(h?h.push(m):l&&m()),m}function IE(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?Dp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Oi(this),c=Vp(s,i.bind(r),n);return o(),c}function Dp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const wE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bt(e)}Modifiers`]||t[`${mr(e)}Modifiers`];function AE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&wE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map(la)));let c,l=r[c=Xa(e)]||r[c=Xa(Bt(e))];!l&&i&&(l=r[c=Xa(mr(e))]),l&&gn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,gn(h,t,6,s)}}const RE=new WeakMap;function kp(t,e,n=!1){const r=n?RE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const f=kp(h,e,!0);f&&(c=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):gt(o,i),Ne(t)&&r.set(t,o),o)}function ga(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,mr(e))||Re(t,e))}function Rh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:_,ctx:b,inheritAttrs:N}=t,D=Vo(t);let H,$;try{if(n.shapeFlag&4){const G=s||r,he=G;H=sn(h.call(he,G,f,p,_,m,b)),$=c}else{const G=e;H=sn(G.length>1?G(p,{attrs:c,slots:o,emit:l}):G(p,null)),$=e.props?c:SE(c)}}catch(G){ii.length=0,pa(G,t,1),H=It(cr)}let W=H;if($&&N!==!1){const G=Object.keys($),{shapeFlag:he}=W;G.length&&he&7&&(i&&G.some(hl)&&($=bE($,i)),W=us(W,$,!1,!0))}return n.dirs&&(W=us(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Al(W,n.transition),H=W,Vo(D),H}const SE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},bE=(t,e)=>{const n={};for(const r in t)(!hl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function PE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!ga(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Sh(r,o,h):!0:!!o;return!1}function Sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ga(n,i))return!0}return!1}function CE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Op=t=>t.__isSuspense;function NE(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):My(t)}const Wt=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),ii=[];let Ot=null;function Fe(t=!1){ii.push(Ot=t?null:[])}function VE(){ii.pop(),Ot=ii[ii.length-1]||null}let _i=1;function Oo(t,e=!1){_i+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function xp(t){return t.dynamicChildren=_i>0?Ot||Zr:null,VE(),_i>0&&Ot&&Ot.push(t),t}function qe(t,e,n,r,s,i){return xp(ae(t,e,n,r,s,i,!0))}function DE(t,e,n,r,s){return xp(It(t,e,n,r,s,!0))}function xo(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const Mp=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||mt(t)||ue(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function ae(t,e=null,n=null,r=0,s=null,i=t===Wt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mp(e),ref:e&&go(e),scopeId:fp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return c?(Pl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),_i>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const It=kE;function kE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===eE)&&(t=cr),xo(t)){const c=us(t,e,!0);return n&&Pl(c,n),_i>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(WE(t)&&(t=t.__vccOpts),e){e=OE(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=Di(c)),Ne(l)&&(Tl(l)&&!oe(l)&&(l=gt({},l)),e.style=pl(l))}const o=Ge(t)?1:Op(t)?128:Uy(t)?64:Ne(t)?4:ue(t)?2:0;return ae(t,e,n,r,s,o,i,!0)}function OE(t){return t?Tl(t)||wp(t)?gt({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?xE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Mp(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(go(e)):[i,go(e)]:go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Al(f,l.clone(f)),f}function Lp(t=" ",e=0){return It(_a,null,t,e)}function bh(t,e){const n=It(mo,null,t);return n.staticCount=e,n}function Nr(t="",e=!1){return e?(Fe(),DE(cr,null,t)):It(cr,null,t)}function sn(t){return t==null||typeof t=="boolean"?It(cr):oe(t)?It(Wt,null,t.slice()):xo(t)?zn(t):It(_a,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!wp(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Lp(e)]):n=8);t.children=e,t.shapeFlag|=n}function xE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Di([e.class,r.class]));else if(s==="style")e.style=pl([e.style,r.style]);else if(ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){gn(t,e,7,[n,r])}const ME=vp();let LE=0;function FE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ME,i={uid:LE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rp(r,s),emitsOptions:kp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=AE.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const UE=()=>pt||kt;let Mo,kc;{const t=ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Mo=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),kc=e("__VUE_SSR_SETTERS__",n=>yi=n)}const Oi=t=>{const e=pt;return Mo(t),t.scope.on(),()=>{t.scope.off(),Mo(e)}},Ph=()=>{pt&&pt.scope.off(),Mo(null)};function Fp(t){return t.vnode.shapeFlag&4}let yi=!1;function BE(t,e=!1,n=!1){e&&kc(e);const{props:r,children:s}=t.vnode,i=Fp(t);uE(t,r,i,e),pE(t,s,n||e);const o=i?jE(t,e):void 0;return e&&kc(!1),o}function jE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nE);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?HE(t):null,i=Oi(t),o=ki(r,t,0,[t.props,s]),c=Md(o);if(Nn(),i(),(c||t.sp)&&!ri(t)&&pp(t),c){if(o.then(Ph,Ph),e)return o.then(l=>{Ch(t,l)}).catch(l=>{pa(l,t,0)});t.asyncDep=o}else Ch(t,o)}else Up(t)}function Ch(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=ap(e)),Up(t)}function Up(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=Oi(t);Cn();try{rE(t)}finally{Nn(),s()}}}const $E={get(t,e){return ft(t,"get",""),t[e]}};function HE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$E),slots:t.slots,emit:t.emit,expose:e}}function ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ap(ip(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}})):t.proxy}function qE(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function WE(t){return ue(t)&&"__vccOpts"in t}const Mt=(t,e)=>Vy(t,e,yi);function Bp(t,e,n){try{Oo(-1);const r=arguments.length;return r===2?Ne(e)&&!oe(e)?xo(e)?It(t,null,[e]):It(t,e):It(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xo(n)&&(n=[n]),It(t,e,n))}finally{Oo(1)}}const GE="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oc;const Nh=typeof window<"u"&&window.trustedTypes;if(Nh)try{Oc=Nh.createPolicy("vue",{createHTML:t=>t})}catch{}const jp=Oc?t=>Oc.createHTML(t):t=>t,zE="http://www.w3.org/2000/svg",KE="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,Vh=wn&&wn.createElement("template"),QE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(zE,t):e==="mathml"?wn.createElementNS(KE,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vh.innerHTML=jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Vh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},YE=Symbol("_vtc");function JE(t,e,n){const r=t[YE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dh=Symbol("_vod"),XE=Symbol("_vsh"),ZE=Symbol(""),ev=/(?:^|;)\s*display\s*:/;function tv(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&_o(r,c,"")}else for(const o in e)n[o]==null&&_o(r,o,"");for(const o in n)o==="display"&&(i=!0),_o(r,o,n[o])}else if(s){if(e!==n){const o=r[ZE];o&&(n+=";"+o),r.cssText=n,i=ev.test(n)}}else e&&t.removeAttribute("style");Dh in t&&(t[Dh]=i?r.display:"",t[XE]&&(r.display="none"))}const kh=/\s*!important$/;function _o(t,e,n){if(oe(n))n.forEach(r=>_o(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nv(t,e);kh.test(n)?t.setProperty(mr(r),n.replace(kh,""),"important"):t[r]=n}}const Oh=["Webkit","Moz","ms"],ic={};function nv(t,e){const n=ic[e];if(n)return n;let r=Bt(e);if(r!=="filter"&&r in t)return ic[e]=r;r=ca(r);for(let s=0;s<Oh.length;s++){const i=Oh[s]+r;if(i in t)return ic[e]=i}return e}const xh="http://www.w3.org/1999/xlink";function Mh(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xh,e.slice(6,e.length)):t.setAttributeNS(xh,e,n):n==null||i&&!Bd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function Lh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Bd(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Sr(t,e,n,r){t.addEventListener(e,n,r)}function rv(t,e,n,r){t.removeEventListener(e,n,r)}const Fh=Symbol("_vei");function sv(t,e,n,r,s=null){const i=t[Fh]||(t[Fh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=iv(e);if(r){const h=i[e]=cv(r,s);Sr(t,c,h,l)}else o&&(rv(t,c,o,l),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function iv(t){let e;if(Uh.test(t)){e={};let r;for(;r=t.match(Uh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mr(t.slice(2)),e]}let oc=0;const ov=Promise.resolve(),av=()=>oc||(ov.then(()=>oc=0),oc=Date.now());function cv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(lv(r,n.value),e,5,[r])};return n.value=t,n.attached=av(),n}function lv(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?JE(t,r,o):e==="style"?tv(t,n,r):ia(e)?hl(e)||sv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hv(t,e,r,o))?(Lh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?Lh(t,Bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mh(t,e,r,o))};function hv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bh(e)&&Ge(n)?!1:e in t}const Lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>ho(e,n):e};function fv(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const is=Symbol("_assign");function $h(t,e,n){return e&&(t=t.trim()),n&&(t=la(t)),t}const Gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[is]=Lo(s);const i=r||s.props&&s.props.type==="number";Sr(t,e?"change":"input",o=>{o.target.composing||t[is]($h(t.value,n,i))}),(n||i)&&Sr(t,"change",()=>{t.value=$h(t.value,n,i)}),e||(Sr(t,"compositionstart",fv),Sr(t,"compositionend",jh),Sr(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[is]=Lo(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?la(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},dv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=oa(e);Sr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?la(Fo(o)):Fo(o));t[is](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Il(()=>{t._assigning=!1})}),t[is]=Lo(r)},mounted(t,{value:e}){Hh(t,e)},beforeUpdate(t,e,n){t[is]=Lo(n)},updated(t,{value:e}){t._assigning||Hh(t,e)}};function Hh(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!oa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Fo(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=oy(e,c)>-1}else o.selected=e.has(c);else if(ha(Fo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fo(t){return"_value"in t?t._value:t.value}const pv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=mr(s.key);if(e.some(o=>o===i||pv[o]===i))return t(s)})},gv=gt({patchProp:uv},QE);let qh;function _v(){return qh||(qh=gE(gv))}const yv=(...t)=>{const e=_v().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ev(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ev(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vv(t){return Ge(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Tv=Symbol();var Wh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wh||(Wh={}));function Iv(){const t=ay(!0),e=t.run(()=>Be({}));let n=[],r=[];const s=ip({install(i){s._a=i,i.provide(Tv,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zr=typeof document<"u";function $p(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$p(t.default)}const we=Object.assign;function ac(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const oi=()=>{},Jt=Array.isArray;function Gh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Hp=/#/g,Av=/&/g,Rv=/\//g,Sv=/=/g,bv=/\?/g,qp=/\+/g,Pv=/%5B/g,Cv=/%5D/g,Wp=/%5E/g,Nv=/%60/g,Gp=/%7B/g,Vv=/%7C/g,zp=/%7D/g,Dv=/%20/g;function Cl(t){return t==null?"":encodeURI(""+t).replace(Vv,"|").replace(Pv,"[").replace(Cv,"]")}function kv(t){return Cl(t).replace(Gp,"{").replace(zp,"}").replace(Wp,"^")}function xc(t){return Cl(t).replace(qp,"%2B").replace(Dv,"+").replace(Hp,"%23").replace(Av,"%26").replace(Nv,"`").replace(Gp,"{").replace(zp,"}").replace(Wp,"^")}function Ov(t){return xc(t).replace(Sv,"%3D")}function xv(t){return Cl(t).replace(Hp,"%23").replace(bv,"%3F")}function Mv(t){return xv(t).replace(Rv,"%2F")}function Ei(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Lv=/\/$/,Fv=t=>t.replace(Lv,"");function cc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=$v(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ei(o)}}function Uv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&Kp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jv(t[n],e[n]))return!1;return!0}function jv(t,e){return Jt(t)?Kh(t,e):Jt(e)?Kh(e,t):t===e}function Kh(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $v(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Mc=function(t){return t.pop="pop",t.push="push",t}({}),lc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Hv(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fv(t)}const qv=/^[^#]+#/;function Wv(t,e){return t.replace(qv,"#")+e}function Gv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ea=()=>({left:window.scrollX,top:window.scrollY});function zv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Gv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qh(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function Kv(t,e){Lc.set(t,e)}function Qv(t){const e=Lc.get(t);return Lc.delete(t),e}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function Qp(t){return typeof t=="string"||typeof t=="symbol"}let Le=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Yp=Symbol("");Le.MATCHER_NOT_FOUND+"",Le.NAVIGATION_GUARD_REDIRECT+"",Le.NAVIGATION_ABORTED+"",Le.NAVIGATION_CANCELLED+"",Le.NAVIGATION_DUPLICATED+"";function fs(t,e){return we(new Error,{type:t,[Yp]:!0},e)}function In(t,e){return t instanceof Error&&Yp in t&&(e==null||!!(t.type&e))}const Jv=["params","query","hash"];function Xv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Jv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Zv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(qp," "),i=s.indexOf("="),o=Ei(i<0?s:s.slice(0,i)),c=i<0?null:Ei(s.slice(i+1));if(o in e){let l=e[o];Jt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Yh(t){let e="";for(let n in t){const r=t[n];if(n=Ov(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(s=>s&&xc(s)):[r&&xc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function eT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tT=Symbol(""),Jh=Symbol(""),va=Symbol(""),Jp=Symbol(""),Fc=Symbol("");function Ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(fs(Le.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):Yv(m)?l(fs(Le.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function uc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if($p(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Kn(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=wv(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&Kn(m,n,r,o,c,s)()}))}}return i}function nT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>hs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>hs(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rT=()=>location.protocol+"//"+location.host;function Xp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),zh(c,"")}return zh(n,t)+r+s}function sT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Xp(t,location),b=n.value,N=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===b){o=null;return}D=N?m.position-N.position:0}else r(_);s.forEach(H=>{H(n.value,b,{delta:D,type:Mc.pop,direction:D?D>0?lc.forward:lc.back:lc.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(we({},m.state,{scroll:Ea()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function Xh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ea():null}}function iT(t){const{history:e,location:n}=window,r={value:Xp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:rT()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,h){i(l,we({},e.state,Xh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:Ea()});i(f.current,f,!0),i(l,we({},Xh(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function oT(t){t=Hv(t);const e=iT(t),n=sT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:Wv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let br=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Ke=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Ke||{});const aT={type:br.Static,value:""},cT=/[a-zA-Z0-9_]/;function lT(t){if(!t)return[[]];if(t==="/")return[[aT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=Ke.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===Ke.Static?i.push({type:br.Static,value:h}):n===Ke.Param||n===Ke.ParamRegExp||n===Ke.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:br.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ke.ParamRegExp){r=n,n=Ke.EscapeNext;continue}switch(n){case Ke.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Ke.Param):m();break;case Ke.EscapeNext:m(),n=r;break;case Ke.Param:l==="("?n=Ke.ParamRegExp:cT.test(l)?m():(p(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ke.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ke.ParamRegExpEnd:f+=l;break;case Ke.ParamRegExpEnd:p(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ke.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Zh="[^/]+?",uT={sensitive:!1,strict:!1,start:!0,end:!0};var vt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(vt||{});const hT=/[.+*?^${}()[\]/\\]/g;function fT(t,e){const n=we({},uT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[vt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=vt.Segment+(n.sensitive?vt.BonusCaseSensitive:0);if(m.type===br.Static)p||(s+="/"),s+=m.value.replace(hT,"\\$&"),_+=vt.Static;else if(m.type===br.Param){const{value:b,repeatable:N,optional:D,regexp:H}=m;i.push({name:b,repeatable:N,optional:D});const $=H||Zh;if($!==Zh){_+=vt.BonusCustomRegExp;try{`${$}`}catch(G){throw new Error(`Invalid custom RegExp for param "${b}" (${$}): `+G.message)}}let W=N?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(W=D&&h.length<2?`(?:/${W})`:"/"+W),D&&(W+="?"),s+=W,_+=vt.Dynamic,D&&(_+=vt.BonusOptional),N&&(_+=vt.BonusRepeatable),$===".*"&&(_+=vt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=vt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",b=i[m-1];p[b.name]=_&&b.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===br.Static)f+=_.value;else if(_.type===br.Param){const{value:b,repeatable:N,optional:D}=_,H=b in h?h[b]:"";if(Jt(H)&&!N)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const $=Jt(H)?H.join("/"):H;if(!$)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);f+=$}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function dT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===vt.Static+vt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===vt.Static+vt.Segment?1:-1:0}function Zp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=dT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ef(r))return 1;if(ef(s))return-1}return s.length-r.length}function ef(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pT={strict:!1,end:!0,sensitive:!1};function mT(t,e,n){const r=fT(lT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gT(t,e){const n=[],r=new Map;e=Gh(pT,e);function s(p){return r.get(p)}function i(p,m,_){const b=!_,N=nf(p);N.aliasOf=_&&_.record;const D=Gh(e,p),H=[N];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const he of G)H.push(nf(we({},N,{components:_?_.record.components:N.components,path:he,aliasOf:_?_.record:N})))}let $,W;for(const G of H){const{path:he}=G;if(m&&he[0]!=="/"){const de=m.record.path,w=de[de.length-1]==="/"?"":"/";G.path=m.record.path+(he&&w+he)}if($=mT(G,m,D),_?_.alias.push($):(W=W||$,W!==$&&W.alias.push($),b&&p.name&&!rf($)&&o(p.name)),em($)&&l($),N.children){const de=N.children;for(let w=0;w<de.length;w++)i(de[w],$,_&&_.children[w])}_=_||$}return W?()=>{o(W)}:oi}function o(p){if(Qp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=ET(p,n);n.splice(m,0,p),p.record.name&&!rf(p)&&r.set(p.record.name,p)}function h(p,m){let _,b={},N,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw fs(Le.MATCHER_NOT_FOUND,{location:p});D=_.record.name,b=we(tf(m.params,_.keys.filter(W=>!W.optional).concat(_.parent?_.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),p.params&&tf(p.params,_.keys.map(W=>W.name))),N=_.stringify(b)}else if(p.path!=null)N=p.path,_=n.find(W=>W.re.test(N)),_&&(b=_.parse(N),D=_.record.name);else{if(_=m.name?r.get(m.name):n.find(W=>W.re.test(m.path)),!_)throw fs(Le.MATCHER_NOT_FOUND,{location:p,currentLocation:m});D=_.record.name,b=we({},m.params,p.params),N=_.stringify(b)}const H=[];let $=_;for(;$;)H.unshift($.record),$=$.parent;return{name:D,path:N,params:b,matched:H,meta:yT(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function tf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_T(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _T(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function ET(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Zp(t,e[i])<0?r=i:n=i+1}const s=vT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vT(t){let e=t;for(;e=e.parent;)if(em(e)&&Zp(t,e)===0)return e}function em({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function sf(t){const e=cn(va),n=cn(Jp),r=Mt(()=>{const l=ns(t.to);return e.resolve(l)}),s=Mt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(hs.bind(null,f));if(m>-1)return m;const _=of(l[h-2]);return h>1&&of(f)===_&&p[p.length-1].path!==_?p.findIndex(hs.bind(null,l[h-2])):m}),i=Mt(()=>s.value>-1&&RT(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&Kp(n.params,r.value.params));function c(l={}){if(AT(l)){const h=e[ns(t.replace)?"replace":"push"](ns(t.to)).catch(oi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function TT(t){return t.length===1?t[0]:t}const IT=dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:sf,setup(t,{slots:e}){const n=da(sf(t)),{options:r}=cn(va),s=Mt(()=>({[af(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[af(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&TT(e.default(n));return t.custom?i:Bp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wT=IT;function AT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function of(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const af=(t,e,n)=>t??e??n,ST=dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(Fc),s=Mt(()=>t.route||r.value),i=cn(Jh,0),o=Mt(()=>{let h=ns(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Mt(()=>s.value.matched[o.value]);fo(Jh,Mt(()=>o.value+1)),fo(tT,c),fo(Fc,s);const l=Be();return po(()=>[l.value,c.value,t.name],([h,f,p],[m,_,b])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!hs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return cf(n.default,{Component:m,route:h});const _=p.props[f],b=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=Bp(m,we({},b,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return cf(n.default,{Component:D,route:h})||D}}});function cf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bT=ST;function PT(t){const e=gT(t.routes,t),n=t.parseQuery||Zv,r=t.stringifyQuery||Yh,s=t.history,i=Ws(),o=Ws(),c=Ws(),l=by(qn);let h=qn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ac.bind(null,O=>""+O),p=ac.bind(null,Mv),m=ac.bind(null,Ei);function _(O,Y){let K,ee;return Qp(O)?(K=e.getRecordMatcher(O),ee=Y):ee=O,e.addRoute(ee,K)}function b(O){const Y=e.getRecordMatcher(O);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function H(O,Y){if(Y=we({},Y||l.value),typeof O=="string"){const S=cc(n,O,Y.path),x=e.resolve({path:S.path},Y),L=s.createHref(S.fullPath);return we(S,x,{params:m(x.params),hash:Ei(S.hash),redirectedFrom:void 0,href:L})}let K;if(O.path!=null)K=we({},O,{path:cc(n,O.path,Y.path).path});else{const S=we({},O.params);for(const x in S)S[x]==null&&delete S[x];K=we({},O,{params:p(S)}),Y.params=p(Y.params)}const ee=e.resolve(K,Y),me=O.hash||"";ee.params=f(m(ee.params));const y=Uv(r,we({},O,{hash:kv(me),path:ee.path})),T=s.createHref(y);return we({fullPath:y,hash:me,query:r===Yh?eT(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:T})}function $(O){return typeof O=="string"?cc(n,O,l.value.path):we({},O)}function W(O,Y){if(h!==O)return fs(Le.NAVIGATION_CANCELLED,{from:Y,to:O})}function G(O){return w(O)}function he(O){return G(we($(O),{replace:!0}))}function de(O,Y){const K=O.matched[O.matched.length-1];if(K&&K.redirect){const{redirect:ee}=K;let me=typeof ee=="function"?ee(O,Y):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=$(me):{path:me},me.params={}),we({query:O.query,hash:O.hash,params:me.path!=null?{}:O.params},me)}}function w(O,Y){const K=h=H(O),ee=l.value,me=O.state,y=O.force,T=O.replace===!0,S=de(K,ee);if(S)return w(we($(S),{state:typeof S=="object"?we({},me,S.state):me,force:y,replace:T}),Y||K);const x=K;x.redirectedFrom=Y;let L;return!y&&Bv(r,ee,K)&&(L=fs(Le.NAVIGATION_DUPLICATED,{to:x,from:ee}),Pt(ee,ee,!0,!1)),(L?Promise.resolve(L):R(x,ee)).catch(k=>In(k)?In(k,Le.NAVIGATION_GUARD_REDIRECT)?k:Xt(k):Ee(k,x,ee)).then(k=>{if(k){if(In(k,Le.NAVIGATION_GUARD_REDIRECT))return w(we({replace:T},$(k.to),{state:typeof k.to=="object"?we({},me,k.to.state):me,force:y}),Y||x)}else k=P(x,ee,!0,T,me);return A(x,ee,k),k})}function E(O,Y){const K=W(O,Y);return K?Promise.reject(K):Promise.resolve()}function I(O){const Y=$t.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function R(O,Y){let K;const[ee,me,y]=nT(O,Y);K=uc(ee.reverse(),"beforeRouteLeave",O,Y);for(const S of ee)S.leaveGuards.forEach(x=>{K.push(Kn(x,O,Y))});const T=E.bind(null,O,Y);return K.push(T),at(K).then(()=>{K=[];for(const S of i.list())K.push(Kn(S,O,Y));return K.push(T),at(K)}).then(()=>{K=uc(me,"beforeRouteUpdate",O,Y);for(const S of me)S.updateGuards.forEach(x=>{K.push(Kn(x,O,Y))});return K.push(T),at(K)}).then(()=>{K=[];for(const S of y)if(S.beforeEnter)if(Jt(S.beforeEnter))for(const x of S.beforeEnter)K.push(Kn(x,O,Y));else K.push(Kn(S.beforeEnter,O,Y));return K.push(T),at(K)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),K=uc(y,"beforeRouteEnter",O,Y,I),K.push(T),at(K))).then(()=>{K=[];for(const S of o.list())K.push(Kn(S,O,Y));return K.push(T),at(K)}).catch(S=>In(S,Le.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function A(O,Y,K){c.list().forEach(ee=>I(()=>ee(O,Y,K)))}function P(O,Y,K,ee,me){const y=W(O,Y);if(y)return y;const T=Y===qn,S=zr?history.state:{};K&&(ee||T?s.replace(O.fullPath,we({scroll:T&&S&&S.scroll},me)):s.push(O.fullPath,me)),l.value=O,Pt(O,Y,K,T),Xt()}let v;function je(){v||(v=s.listen((O,Y,K)=>{if(!Ht.listening)return;const ee=H(O),me=de(ee,Ht.currentRoute.value);if(me){w(we(me,{replace:!0,force:!0}),ee).catch(oi);return}h=ee;const y=l.value;zr&&Kv(Qh(y.fullPath,K.delta),Ea()),R(ee,y).catch(T=>In(T,Le.NAVIGATION_ABORTED|Le.NAVIGATION_CANCELLED)?T:In(T,Le.NAVIGATION_GUARD_REDIRECT)?(w(we($(T.to),{force:!0}),ee).then(S=>{In(S,Le.NAVIGATION_ABORTED|Le.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Mc.pop&&s.go(-1,!1)}).catch(oi),Promise.reject()):(K.delta&&s.go(-K.delta,!1),Ee(T,ee,y))).then(T=>{T=T||P(ee,y,!1),T&&(K.delta&&!In(T,Le.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===Mc.pop&&In(T,Le.NAVIGATION_ABORTED|Le.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(ee,y,T)}).catch(oi)}))}let wt=Ws(),$e=Ws(),Ie;function Ee(O,Y,K){Xt(O);const ee=$e.list();return ee.length?ee.forEach(me=>me(O,Y,K)):console.error(O),Promise.reject(O)}function At(){return Ie&&l.value!==qn?Promise.resolve():new Promise((O,Y)=>{wt.add([O,Y])})}function Xt(O){return Ie||(Ie=!O,je(),wt.list().forEach(([Y,K])=>O?K(O):Y()),wt.reset()),O}function Pt(O,Y,K,ee){const{scrollBehavior:me}=t;if(!zr||!me)return Promise.resolve();const y=!K&&Qv(Qh(O.fullPath,0))||(ee||!K)&&history.state&&history.state.scroll||null;return Il().then(()=>me(O,Y,y)).then(T=>T&&zv(T)).catch(T=>Ee(T,O,Y))}const tt=O=>s.go(O);let vn;const $t=new Set,Ht={currentRoute:l,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:H,options:t,push:G,replace:he,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:$e.add,isReady:At,install(O){O.component("RouterLink",wT),O.component("RouterView",bT),O.config.globalProperties.$router=Ht,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ns(l)}),zr&&!vn&&l.value===qn&&(vn=!0,G(s.location).catch(ee=>{}));const Y={};for(const ee in qn)Object.defineProperty(Y,ee,{get:()=>l.value[ee],enumerable:!0});O.provide(va,Ht),O.provide(Jp,sp(Y)),O.provide(Fc,l);const K=O.unmount;$t.add(O),O.unmount=function(){$t.delete(O),$t.size<1&&(h=qn,v&&v(),v=null,l.value=qn,vn=!1,Ie=!1),K()}}};function at(O){return O.reduce((Y,K)=>Y.then(()=>I(K)),Promise.resolve())}return Ht}function tm(){return cn(va)}const CT=()=>{};var lf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new VT;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const b=h<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DT=function(t){const e=nm(t);return rm.encodeByteArray(e,!0)},Uo=function(t){return DT(t).replace(/\./g,"")},sm=function(t){try{return rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=()=>kT().__FIREBASE_DEFAULTS__,xT=()=>{if(typeof process>"u"||typeof lf>"u")return;const t=lf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sm(t[1]);return e&&JSON.parse(e)},Ta=()=>{try{return CT()||OT()||xT()||MT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},im=t=>{var e,n;return(n=(e=Ta())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},LT=t=>{const e=im(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},om=()=>{var t;return(t=Ta())==null?void 0:t.config},am=t=>{var e;return(e=Ta())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),""].join(".")}const ai={};function BT(){const t={prod:[],emulator:[]};for(const e of Object.keys(ai))ai[e]?t.emulator.push(e):t.prod.push(e);return t}function jT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let uf=!1;function lm(t,e){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||ai[t]===e||ai[t]||uf)return;ai[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=BT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{uf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=jT(r),_=n("text"),b=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),H=n("preprendIcon"),$=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const W=m.element;c(W),f(D,N);const G=h();l($,H),W.append($,b,D,G),document.body.appendChild(W)}i?(b.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $T(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function HT(){var e;const t=(e=Ta())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zT(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KT(){return!HT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JT,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,c,r)}}function XT(t,e){return t.replace(ZT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZT=/\{\$([^}]+)}/g;function eI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hf(i)&&hf(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tI(t,e){const n=new nI(t,e);return n.subscribe.bind(n)}class nI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hc),s.error===void 0&&(s.error=hc),s.complete===void 0&&(s.complete=hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iI(t){return t===Rr?void 0:t}function oI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const cI={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},lI=ge.INFO,uI={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},hI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=lI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const fI=(t,e)=>e.some(n=>t instanceof n);let ff,df;function dI(){return ff||(ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,Uc=new WeakMap,hm=new WeakMap,fc=new WeakMap,Vl=new WeakMap;function mI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&um.set(n,t)}).catch(()=>{}),Vl.set(e,t),e}function gI(t){if(Uc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uc.set(t,e)}let Bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _I(t){Bc=t(Bc)}function yI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dc(this),e,...n);return hm.set(r,e.sort?e.sort():[e]),tr(r)}:pI().includes(t)?function(...e){return t.apply(dc(this),e),tr(um.get(this))}:function(...e){return tr(t.apply(dc(this),e))}}function EI(t){return typeof t=="function"?yI(t):(t instanceof IDBTransaction&&gI(t),fI(t,dI())?new Proxy(t,Bc):t)}function tr(t){if(t instanceof IDBRequest)return mI(t);if(fc.has(t))return fc.get(t);const e=EI(t);return e!==t&&(fc.set(t,e),Vl.set(e,t)),e}const dc=t=>Vl.get(t);function vI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const TI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],pc=new Map;function pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=II.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return pc.set(e,i),i}_I(t=>({...t,get:(e,n,r)=>pf(e,n)||t.get(e,n,r),has:(e,n)=>!!pf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",mf="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Nl("@firebase/app"),RI="@firebase/app-compat",SI="@firebase/analytics-compat",bI="@firebase/analytics",PI="@firebase/app-check-compat",CI="@firebase/app-check",NI="@firebase/auth",VI="@firebase/auth-compat",DI="@firebase/database",kI="@firebase/data-connect",OI="@firebase/database-compat",xI="@firebase/functions",MI="@firebase/functions-compat",LI="@firebase/installations",FI="@firebase/installations-compat",UI="@firebase/messaging",BI="@firebase/messaging-compat",jI="@firebase/performance",$I="@firebase/performance-compat",HI="@firebase/remote-config",qI="@firebase/remote-config-compat",WI="@firebase/storage",GI="@firebase/storage-compat",zI="@firebase/firestore",KI="@firebase/ai",QI="@firebase/firestore-compat",YI="firebase",JI="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="[DEFAULT]",XI={[jc]:"fire-core",[RI]:"fire-core-compat",[bI]:"fire-analytics",[SI]:"fire-analytics-compat",[CI]:"fire-app-check",[PI]:"fire-app-check-compat",[NI]:"fire-auth",[VI]:"fire-auth-compat",[DI]:"fire-rtdb",[kI]:"fire-data-connect",[OI]:"fire-rtdb-compat",[xI]:"fire-fn",[MI]:"fire-fn-compat",[LI]:"fire-iid",[FI]:"fire-iid-compat",[UI]:"fire-fcm",[BI]:"fire-fcm-compat",[jI]:"fire-perf",[$I]:"fire-perf-compat",[HI]:"fire-rc",[qI]:"fire-rc-compat",[WI]:"fire-gcs",[GI]:"fire-gcs-compat",[zI]:"fire-fst",[QI]:"fire-fst-compat",[KI]:"fire-vertex","fire-js":"fire-js",[YI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Map,ZI=new Map,Hc=new Map;function gf(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(Hc.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Bo.values())gf(n,t);for(const n of ZI.values())gf(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new xi("app","Firebase",ew);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=JI;function fm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:$c,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=om()),!n)throw nr.create("no-options");const i=Bo.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw nr.create("duplicate-app",{appName:s})}const o=new aI(s);for(const l of Hc.values())o.addComponent(l);const c=new tw(n,r,o);return Bo.set(s,c),c}function dm(t=$c){const e=Bo.get(t);if(!e&&t===$c&&om())return fm();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){let r=XI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}ds(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="firebase-heartbeat-database",rw=1,vi="firebase-heartbeat-store";let mc=null;function pm(){return mc||(mc=vI(nw,rw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),mc}async function sw(t){try{const n=(await pm()).transaction(vi),r=await n.objectStore(vi).get(mm(t));return await n.done,r}catch(e){if(e instanceof Mn)Vn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function _f(t,e){try{const r=(await pm()).transaction(vi,"readwrite");await r.objectStore(vi).put(e,mm(t)),await r.done}catch(n){if(n instanceof Mn)Vn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function mm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=1024,ow=30;class aw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ow){const o=uw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yf(),{heartbeatsToSend:r,unsentEntries:s}=cw(this._heartbeatsCache.heartbeats),i=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vn.warn(n),""}}}function yf(){return new Date().toISOString().substring(0,10)}function cw(t,e=iw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ef(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ef(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _f(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _f(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ef(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}function uw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){ds(new kr("platform-logger",e=>new wI(e),"PRIVATE")),ds(new kr("heartbeat",e=>new aw(e),"PRIVATE")),rr(jc,mf,t),rr(jc,mf,"esm2020"),rr("fire-js","")}hw("");var fw="firebase",dw="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(fw,dw,"app");var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function I(){}I.prototype=E.prototype,w.F=E.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(R,A,P){for(var v=Array(arguments.length-2),je=2;je<arguments.length;je++)v[je-2]=arguments[je];return E.prototype[A].apply(R,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,E,I){I||(I=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(A=0;A<16;++A)R[A]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=w.g[0],I=w.g[1],A=w.g[2];let P=w.g[3],v;v=E+(P^I&(A^P))+R[0]+3614090360&4294967295,E=I+(v<<7&4294967295|v>>>25),v=P+(A^E&(I^A))+R[1]+3905402710&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(I^P&(E^I))+R[2]+606105819&4294967295,A=P+(v<<17&4294967295|v>>>15),v=I+(E^A&(P^E))+R[3]+3250441966&4294967295,I=A+(v<<22&4294967295|v>>>10),v=E+(P^I&(A^P))+R[4]+4118548399&4294967295,E=I+(v<<7&4294967295|v>>>25),v=P+(A^E&(I^A))+R[5]+1200080426&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(I^P&(E^I))+R[6]+2821735955&4294967295,A=P+(v<<17&4294967295|v>>>15),v=I+(E^A&(P^E))+R[7]+4249261313&4294967295,I=A+(v<<22&4294967295|v>>>10),v=E+(P^I&(A^P))+R[8]+1770035416&4294967295,E=I+(v<<7&4294967295|v>>>25),v=P+(A^E&(I^A))+R[9]+2336552879&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(I^P&(E^I))+R[10]+4294925233&4294967295,A=P+(v<<17&4294967295|v>>>15),v=I+(E^A&(P^E))+R[11]+2304563134&4294967295,I=A+(v<<22&4294967295|v>>>10),v=E+(P^I&(A^P))+R[12]+1804603682&4294967295,E=I+(v<<7&4294967295|v>>>25),v=P+(A^E&(I^A))+R[13]+4254626195&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(I^P&(E^I))+R[14]+2792965006&4294967295,A=P+(v<<17&4294967295|v>>>15),v=I+(E^A&(P^E))+R[15]+1236535329&4294967295,I=A+(v<<22&4294967295|v>>>10),v=E+(A^P&(I^A))+R[1]+4129170786&4294967295,E=I+(v<<5&4294967295|v>>>27),v=P+(I^A&(E^I))+R[6]+3225465664&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^I&(P^E))+R[11]+643717713&4294967295,A=P+(v<<14&4294967295|v>>>18),v=I+(P^E&(A^P))+R[0]+3921069994&4294967295,I=A+(v<<20&4294967295|v>>>12),v=E+(A^P&(I^A))+R[5]+3593408605&4294967295,E=I+(v<<5&4294967295|v>>>27),v=P+(I^A&(E^I))+R[10]+38016083&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^I&(P^E))+R[15]+3634488961&4294967295,A=P+(v<<14&4294967295|v>>>18),v=I+(P^E&(A^P))+R[4]+3889429448&4294967295,I=A+(v<<20&4294967295|v>>>12),v=E+(A^P&(I^A))+R[9]+568446438&4294967295,E=I+(v<<5&4294967295|v>>>27),v=P+(I^A&(E^I))+R[14]+3275163606&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^I&(P^E))+R[3]+4107603335&4294967295,A=P+(v<<14&4294967295|v>>>18),v=I+(P^E&(A^P))+R[8]+1163531501&4294967295,I=A+(v<<20&4294967295|v>>>12),v=E+(A^P&(I^A))+R[13]+2850285829&4294967295,E=I+(v<<5&4294967295|v>>>27),v=P+(I^A&(E^I))+R[2]+4243563512&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^I&(P^E))+R[7]+1735328473&4294967295,A=P+(v<<14&4294967295|v>>>18),v=I+(P^E&(A^P))+R[12]+2368359562&4294967295,I=A+(v<<20&4294967295|v>>>12),v=E+(I^A^P)+R[5]+4294588738&4294967295,E=I+(v<<4&4294967295|v>>>28),v=P+(E^I^A)+R[8]+2272392833&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^I)+R[11]+1839030562&4294967295,A=P+(v<<16&4294967295|v>>>16),v=I+(A^P^E)+R[14]+4259657740&4294967295,I=A+(v<<23&4294967295|v>>>9),v=E+(I^A^P)+R[1]+2763975236&4294967295,E=I+(v<<4&4294967295|v>>>28),v=P+(E^I^A)+R[4]+1272893353&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^I)+R[7]+4139469664&4294967295,A=P+(v<<16&4294967295|v>>>16),v=I+(A^P^E)+R[10]+3200236656&4294967295,I=A+(v<<23&4294967295|v>>>9),v=E+(I^A^P)+R[13]+681279174&4294967295,E=I+(v<<4&4294967295|v>>>28),v=P+(E^I^A)+R[0]+3936430074&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^I)+R[3]+3572445317&4294967295,A=P+(v<<16&4294967295|v>>>16),v=I+(A^P^E)+R[6]+76029189&4294967295,I=A+(v<<23&4294967295|v>>>9),v=E+(I^A^P)+R[9]+3654602809&4294967295,E=I+(v<<4&4294967295|v>>>28),v=P+(E^I^A)+R[12]+3873151461&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^I)+R[15]+530742520&4294967295,A=P+(v<<16&4294967295|v>>>16),v=I+(A^P^E)+R[2]+3299628645&4294967295,I=A+(v<<23&4294967295|v>>>9),v=E+(A^(I|~P))+R[0]+4096336452&4294967295,E=I+(v<<6&4294967295|v>>>26),v=P+(I^(E|~A))+R[7]+1126891415&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~I))+R[14]+2878612391&4294967295,A=P+(v<<15&4294967295|v>>>17),v=I+(P^(A|~E))+R[5]+4237533241&4294967295,I=A+(v<<21&4294967295|v>>>11),v=E+(A^(I|~P))+R[12]+1700485571&4294967295,E=I+(v<<6&4294967295|v>>>26),v=P+(I^(E|~A))+R[3]+2399980690&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~I))+R[10]+4293915773&4294967295,A=P+(v<<15&4294967295|v>>>17),v=I+(P^(A|~E))+R[1]+2240044497&4294967295,I=A+(v<<21&4294967295|v>>>11),v=E+(A^(I|~P))+R[8]+1873313359&4294967295,E=I+(v<<6&4294967295|v>>>26),v=P+(I^(E|~A))+R[15]+4264355552&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~I))+R[6]+2734768916&4294967295,A=P+(v<<15&4294967295|v>>>17),v=I+(P^(A|~E))+R[13]+1309151649&4294967295,I=A+(v<<21&4294967295|v>>>11),v=E+(A^(I|~P))+R[4]+4149444226&4294967295,E=I+(v<<6&4294967295|v>>>26),v=P+(I^(E|~A))+R[11]+3174756917&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~I))+R[2]+718787259&4294967295,A=P+(v<<15&4294967295|v>>>17),v=I+(P^(A|~E))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const I=E-this.blockSize,R=this.C;let A=this.h,P=0;for(;P<E;){if(A==0)for(;P<=I;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<E;)if(R[A++]=w.charCodeAt(P++),A==this.blockSize){s(this,R),A=0;break}}else for(;P<E;)if(R[A++]=w[P++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)w[E++]=this.g[I]>>>R&255;return w};function i(w,E){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=E(w)}function o(w,E){this.h=E;const I=[];let R=!0;for(let A=w.length-1;A>=0;A--){const P=w[A]|0;R&&P==E||(I[A]=P,R=!1)}this.g=I}var c={};function l(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return D(h(-w));const E=[];let I=1;for(let R=0;w>=I;R++)E[R]=w/I|0,I*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return D(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(E,8));let R=p;for(let P=0;P<w.length;P+=8){var A=Math.min(8,w.length-P);const v=parseInt(w.substring(P,P+A),E);A<8?(A=h(Math.pow(E,A)),R=R.j(A).add(h(v))):(R=R.j(I),R=R.add(h(v)))}return R}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let w=0,E=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);w+=(R>=0?R:4294967296+R)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(N(this))return"-"+D(this).toString(w);const E=h(Math.pow(w,6));var I=this;let R="";for(;;){const A=G(I,E).g;I=H(I,A.j(E));let P=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=A,b(I))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=H(this,w),N(w)?-1:b(w)?0:1};function D(w){const E=w.g.length,I=[];for(let R=0;R<E;R++)I[R]=~w.g[R];return new o(I,~w.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),I=[];let R=0;for(let A=0;A<=E;A++){let P=R+(this.i(A)&65535)+(w.i(A)&65535),v=(P>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=v>>>16,P&=65535,v&=65535,I[A]=v<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function H(w,E){return w.add(D(E))}t.j=function(w){if(b(this)||b(w))return p;if(N(this))return N(w)?D(this).j(D(w)):D(D(this).j(w));if(N(w))return D(this.j(D(w)));if(this.l(_)<0&&w.l(_)<0)return h(this.m()*w.m());const E=this.g.length+w.g.length,I=[];for(var R=0;R<2*E;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const P=this.i(R)>>>16,v=this.i(R)&65535,je=w.i(A)>>>16,wt=w.i(A)&65535;I[2*R+2*A]+=v*wt,$(I,2*R+2*A),I[2*R+2*A+1]+=P*wt,$(I,2*R+2*A+1),I[2*R+2*A+1]+=v*je,$(I,2*R+2*A+1),I[2*R+2*A+2]+=P*je,$(I,2*R+2*A+2)}for(w=0;w<E;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=E;w<2*E;w++)I[w]=0;return new o(I,0)};function $(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function W(w,E){this.g=w,this.h=E}function G(w,E){if(b(E))throw Error("division by zero");if(b(w))return new W(p,p);if(N(w))return E=G(D(w),E),new W(D(E.g),D(E.h));if(N(E))return E=G(w,D(E)),new W(D(E.g),E.h);if(w.g.length>30){if(N(w)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=E;R.l(w)<=0;)I=he(I),R=he(R);var A=de(I,1),P=de(R,1);for(R=de(R,2),I=de(I,2);!b(R);){var v=P.add(R);v.l(w)<=0&&(A=A.add(I),P=v),R=de(R,1),I=de(I,1)}return E=H(w,A.j(E)),new W(A,E)}for(A=p;w.l(E)>=0;){for(I=Math.max(1,Math.floor(w.m()/E.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=h(I),v=P.j(E);N(v)||v.l(w)>0;)I-=R,P=h(I),v=P.j(E);b(P)&&(P=m),A=A.add(P),w=H(w,v)}return new W(A,w)}t.B=function(w){return G(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)&w.i(R);return new o(I,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)|w.i(R);return new o(I,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)^w.i(R);return new o(I,this.h^w.h)};function he(w){const E=w.g.length+1,I=[];for(let R=0;R<E;R++)I[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(I,w.h)}function de(w,E){const I=E>>5;E%=32;const R=w.g.length-I,A=[];for(let P=0;P<R;P++)A[P]=E>0?w.i(P+I)>>>E|w.i(P+I+1)<<32-E:w.i(P+I);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,sr=o}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _m,Qs,ym,yo,qc,Em,vm,Tm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,V){for(var q=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)q[fe-2]=arguments[fe];return u.prototype[C].apply(g,q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function b(a,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const V=C.length||0;a.length=d+V;for(let q=0;q<V;q++)a[d+q]=C[q]}else a.push(C)}}class N{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(a){o.setTimeout(()=>{throw a},0)}function H(){var a=w;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ${constructor(){this.h=this.g=null}add(u,d){const g=W.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var W=new N(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let he,de=!1,w=new $,E=()=>{const a=Promise.resolve(void 0);he=()=>{a.then(I)}};function I(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){D(d)}var u=W;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}de=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function je(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(je,A),je.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),$e=0;function Ie(a,u,d,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=C,this.key=++$e,this.da=this.fa=!1}function Ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function At(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function Xt(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Pt(a){const u={};for(const d in a)u[d]=a[d];return u}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vn(a,u){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let V=0;V<tt.length;V++)d=tt[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function $t(a){this.src=a,this.g={},this.h=0}$t.prototype.add=function(a,u,d,g,C){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const q=at(a,u,g,C);return q>-1?(u=a[q],d||(u.fa=!1)):(u=new Ie(u,this.src,V,!!g,C),u.fa=d,a.push(u)),u};function Ht(a,u){const d=u.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,u,void 0),V;(V=C>=0)&&Array.prototype.splice.call(g,C,1),V&&(Ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function at(a,u,d,g){for(let C=0;C<a.length;++C){const V=a[C];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return C}return-1}var O="closure_lm_"+(Math.random()*1e6|0),Y={};function K(a,u,d,g,C){if(Array.isArray(u)){for(let V=0;V<u.length;V++)K(a,u[V],d,g,C);return null}return d=z(d),a&&a[wt]?a.J(u,d,c(g)?!!g.capture:!1,C):ee(a,u,d,!1,g,C)}function ee(a,u,d,g,C,V){if(!u)throw Error("Invalid event type");const q=c(C)?!!C.capture:!!C;let fe=L(a);if(fe||(a[O]=fe=new $t(a)),d=fe.add(u,d,g,q,V),d.proxy)return d;if(g=me(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)P||(C=q),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(S(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function me(){function a(d){return u.call(a.src,a.listener,d)}const u=x;return a}function y(a,u,d,g,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)y(a,u[V],d,g,C);else g=c(g)?!!g.capture:!!g,d=z(d),a&&a[wt]?(a=a.i,V=String(u).toString(),V in a.g&&(u=a.g[V],d=at(u,d,g,C),d>-1&&(Ee(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[V],a.h--)))):a&&(a=L(a))&&(u=a.g[u.toString()],a=-1,u&&(a=at(u,d,g,C)),(d=a>-1?u[a]:null)&&T(d))}function T(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[wt])Ht(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(S(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=L(u))?(Ht(d,a),d.h==0&&(d.src=null,u[O]=null)):Ee(a)}}}function S(a){return a in Y?Y[a]:Y[a]="on"+a}function x(a,u){if(a.da)a=!0;else{u=new je(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&T(a),a=d.call(g,u)}return a}function L(a){return a=a[O],a instanceof $t?a:null}var k="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[k]||(a[k]=function(u){return a.handleEvent(u)}),a[k])}function j(){R.call(this),this.i=new $t(this),this.M=this,this.G=null}p(j,R),j.prototype[wt]=!0,j.prototype.removeEventListener=function(a,u,d,g){y(this,a,u,d,g)};function B(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var C=u;u=new A(g,a),vn(u,C)}C=!0;let V,q;if(d)for(q=d.length-1;q>=0;q--)V=u.g=d[q],C=F(V,g,!0,u)&&C;if(V=u.g=a,C=F(V,g,!0,u)&&C,C=F(V,g,!1,u)&&C,d)for(q=0;q<d.length;q++)V=u.g=d[q],C=F(V,g,!1,u)&&C}j.prototype.N=function(){if(j.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Ee(d[g]);delete a.g[u],a.h--}}this.G=null},j.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},j.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function F(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let V=0;V<u.length;++V){const q=u[V];if(q&&!q.da&&q.capture==d){const fe=q.listener,ze=q.ha||q.src;q.fa&&Ht(a.i,q),C=fe.call(ze,g)!==!1&&C}}return C&&!g.defaultPrevented}function ne(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Q(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class te extends R{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(a){R.call(this),this.h=a,this.g={}}p(se,R);var pe=[];function be(a){At(a.g,function(u,d){this.g.hasOwnProperty(d)&&T(u)},a),a.g={}}se.prototype.N=function(){se.Z.N.call(this),be(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,ct=o.JSON.parse,lt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ct(){}function Nt(){}var qt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jr(){A.call(this,"d")}p(jr,A);function nt(){A.call(this,"c")}p(nt,A);var Je={},Ps=null;function _r(){return Ps=Ps||new j}Je.Ia="serverreachability";function wu(a){A.call(this,Je.Ia,a)}p(wu,A);function Cs(a){const u=_r();B(u,new wu(u))}Je.STAT_EVENT="statevent";function Au(a,u){A.call(this,Je.STAT_EVENT,a),this.stat=u}p(Au,A);function yt(a){const u=_r();B(u,new Au(u,a))}Je.Ja="timingevent";function Ru(a,u){A.call(this,Je.Ja,a),this.size=u}p(Ru,A);function Ns(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function b_(a,u,d,g,C,V){a.info(function(){if(a.g)if(V){var q="",fe=V.split("&");for(let Pe=0;Pe<fe.length;Pe++){var ze=fe[Pe].split("=");if(ze.length>1){const Xe=ze[0];ze=ze[1];const en=Xe.split("_");q=en.length>=2&&en[1]=="type"?q+(Xe+"="+ze+"&"):q+(Xe+"=redacted&")}}}else q=null;else q=V;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+d+`
`+q})}function P_(a,u,d,g,C,V,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+d+`
`+V+" "+q})}function $r(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+N_(a,d)+(g?" "+g:"")})}function C_(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function N_(a,u){if(!a.g)return u;if(!u)return null;try{const V=JSON.parse(u);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let q=1;q<g.length;q++)g[q]=""}}}}return Te(V)}catch{return u}}var Gi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Su={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bu;function Fa(){}p(Fa,Ct),Fa.prototype.g=function(){return new XMLHttpRequest},bu=new Fa;function Ds(a){return encodeURIComponent(String(a))}function V_(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Fn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var Cu={},Ua={};function Ba(a,u,d){a.M=1,a.A=Ki(Zt(u)),a.u=d,a.R=!0,Nu(a,null)}function Nu(a,u){a.F=Date.now(),zi(a),a.B=Zt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Hu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Pu,a.g=ah(a.j,d?u:null,!a.u),a.P>0&&(a.O=new te(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(pe[0]=C.toString()),C=pe);for(let V=0;V<C.length;V++){const q=K(d,C[V],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Cs(),b_(a.i,a.v,a.B,a.l,a.S,a.u)}Fn.prototype.ba=function(a){a=a.target;const u=this.O;u&&jn(a)==3?u.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const fe=jn(this.g),ze=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Yu(this.g)))){this.K||fe!=4||ze==7||(ze==8||Pe<=0?Cs(3):Cs(2)),ja(this);var u=this.g.ca();this.X=u;var d=D_(this);if(this.o=u==200,P_(this.i,this.v,this.B,this.l,this.S,fe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var V=g;break t}}V=null}if(a=V)$r(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$a(this,a);else{this.o=!1,this.m=3,yt(12),yr(this),ks(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<d.length;)if(Xe=k_(this,d),Xe==Ua){fe==4&&(this.m=4,yt(14),a=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==Cu){this.m=4,yt(15),$r(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else $r(this.i,this.l,Xe,null),$a(this,Xe);if(Vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||d.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)$r(this.i,this.l,d,"[Invalid Chunked Response]"),yr(this),ks(this);else if(d.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ya(q),q.P=!0,yt(11))}}else $r(this.i,this.l,d,null),$a(this,d);fe==4&&yr(this),this.o&&!this.K&&(fe==4?rh(this.j,this):(this.o=!1,zi(this)))}else z_(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),yr(this),ks(this)}}}catch{}finally{}};function D_(a){if(!Vu(a))return a.g.la();const u=Yu(a.g);if(u==="")return"";let d="";const g=u.length,C=jn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return yr(a),ks(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(u[V],{stream:!(C&&V==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Vu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function k_(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Ua:(d=Number(u.substring(d,g)),isNaN(d)?Cu:(g+=1,g+d>u.length?Ua:(u=u.slice(g,g+d),a.C=g+d,u)))}Fn.prototype.cancel=function(){this.K=!0,yr(this)};function zi(a){a.T=Date.now()+a.H,Du(a,a.H)}function Du(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ns(h(a.aa,a),u)}function ja(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Fn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(C_(this.i,this.B),this.M!=2&&(Cs(),yt(17)),yr(this),this.m=2,ks(this)):Du(this,this.T-a)};function ks(a){a.j.I==0||a.K||rh(a.j,a)}function yr(a){ja(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,be(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function $a(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Ha(d.h,a))){if(!a.L&&Ha(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Zi(d),Ji(d);else break e;Qa(d),yt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ns(h(d.Va,d),6e3));xu(d.h)<=1&&d.ta&&(d.ta=void 0)}else vr(d,11)}else if((a.L||d.g==a)&&Zi(d),!v(u))for(C=d.Ba.g.parse(u),u=0;u<C.length;u++){let Pe=C[u];const Xe=Pe[0];if(!(Xe<=d.K))if(d.K=Xe,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const en=Pe[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const Tr=Pe[4];Tr!=null&&(d.za=Tr,d.j.info("SVER="+d.za));const $n=Pe[5];$n!=null&&typeof $n=="number"&&$n>0&&(g=1.5*$n,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Hn=a.g;if(Hn){const to=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var V=g.h;V.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(qa(V,V.h),V.h=null))}if(g.G){const Ja=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ja&&(g.wa=Ja,De(g.J,g.G,Ja))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var q=a;if(g.na=oh(g,g.L?g.ba:null,g.W),q.L){Mu(g.h,q);var fe=q,ze=g.O;ze&&(fe.H=ze),fe.D&&(ja(fe),zi(fe)),g.g=q}else th(g);d.i.length>0&&Xi(d)}else Pe[0]!="stop"&&Pe[0]!="close"||vr(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?vr(d,7):Ka(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}Cs(4)}catch{}}var O_=class{constructor(a,u){this.g=a,this.map=u}};function ku(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ou(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xu(a){return a.h?1:a.g?a.g.size:0}function Ha(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function qa(a,u){a.g?a.g.add(u):a.h=u}function Mu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ku.prototype.cancel=function(){if(this.i=Lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return _(a.i)}var Fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x_(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,V=null;g>=0?(C=a[d].substring(0,g),V=a[d].substring(g+1)):C=a[d],u(C,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Un(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Un?(this.l=a.l,Os(this,a.j),this.o=a.o,this.g=a.g,xs(this,a.u),this.h=a.h,Wa(this,qu(a.i)),this.m=a.m):a&&(u=String(a).match(Fu))?(this.l=!1,Os(this,u[1]||"",!0),this.o=Ms(u[2]||""),this.g=Ms(u[3]||"",!0),xs(this,u[4]),this.h=Ms(u[5]||"",!0),Wa(this,u[6]||"",!0),this.m=Ms(u[7]||"")):(this.l=!1,this.i=new Fs(null,this.l))}Un.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ls(u,Uu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ls(u,Uu,!0),"@"),a.push(Ds(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ls(d,d.charAt(0)=="/"?F_:L_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ls(d,B_)),a.join("")},Un.prototype.resolve=function(a){const u=Zt(this);let d=!!a.j;d?Os(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)xs(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const V=[];for(let q=0;q<C.length;){const fe=C[q++];fe=="."?g&&q==C.length&&V.push(""):fe==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&q==C.length&&V.push("")):(V.push(fe),g=!0)}g=V.join("/")}else g=C}return d?u.h=g:d=a.i.toString()!=="",d?Wa(u,qu(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Zt(a){return new Un(a)}function Os(a,u,d){a.j=d?Ms(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function xs(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Wa(a,u,d){u instanceof Fs?(a.i=u,j_(a.i,a.l)):(d||(u=Ls(u,U_)),a.i=new Fs(u,a.l))}function De(a,u,d){a.i.set(u,d)}function Ki(a){return De(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ms(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ls(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,M_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function M_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Uu=/[#\/\?@]/g,L_=/[#\?:]/g,F_=/[#\?]/g,U_=/[#\?@]/g,B_=/#/g;function Fs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&x_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Fs.prototype,t.add=function(a,u){Er(this),this.i=null,a=Hr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Bu(a,u){Er(a),u=Hr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ju(a,u){return Er(a),u=Hr(a,u),a.g.has(u)}t.forEach=function(a,u){Er(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(u,C,g,this)},this)},this)};function $u(a,u){Er(a);let d=[];if(typeof u=="string")ju(a,u)&&(d=d.concat(a.g.get(Hr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Er(this),this.i=null,a=Hr(this,a),ju(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=$u(this,a),a.length>0?String(a[0]):u):u};function Hu(a,u,d){Bu(a,u),d.length>0&&(a.i=null,a.g.set(Hr(a,u),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const C=Ds(d);d=$u(this,d);for(let V=0;V<d.length;V++){let q=C;d[V]!==""&&(q+="="+Ds(d[V])),a.push(q)}}return this.i=a.join("&")};function qu(a){const u=new Fs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Hr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function j_(a,u){u&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(Bu(this,g),Hu(this,C,d))},a)),a.j=u}function $_(a,u){const d=new Vs;if(o.Image){const g=new Image;g.onload=f(Bn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Bn,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Bn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Bn,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function H_(a,u){const d=new Vs,g=new AbortController,C=setTimeout(()=>{g.abort(),Bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(C),V.ok?Bn(d,"TestPingServer: ok",!0,u):Bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Bn(d,"TestPingServer: error",!1,u)})}function Bn(a,u,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function q_(){this.g=new lt}function Ga(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ga,Ct),Ga.prototype.g=function(){return new Qi(this.i,this.h)};function Qi(a,u){j.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Qi,j),t=Qi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Bs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Us(this):Bs(this),this.readyState==3&&Wu(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Us(this))},t.Na=function(a){this.g&&(this.response=a,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Bs(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gu(a){let u="";return At(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function za(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Gu(d),typeof a=="string"?d!=null&&Ds(d):De(a,u,d))}function Me(a){j.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Me,j);var W_=/^https?$/i,G_=["POST","PUT"];t=Me.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){zu(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(G_,u,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of d)this.g.setRequestHeader(V,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){zu(this,V)}};function zu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Ku(a),Yi(a)}function Ku(a){a.A||(a.A=!0,B(a,"complete"),B(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,B(this,"complete"),B(this,"abort"),Yi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yi(this,!0)),Me.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Qu(this):this.Xa())},t.Xa=function(){Qu(this)};function Qu(a){if(a.h&&typeof i<"u"){if(a.v&&jn(a)==4)setTimeout(a.Ca.bind(a),0);else if(B(a,"readystatechange"),jn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=V===0){let q=String(a.D).match(Fu)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),g=!W_.test(q?q.toLowerCase():"")}d=g}if(d)B(a,"complete"),B(a,"success");else{a.o=6;try{var C=jn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Ku(a)}}finally{Yi(a)}}}}function Yi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||B(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ct(u)}};function Yu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function z_(a){const u={};a=(a.g&&jn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=V_(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[C]||[];u[C]=V,V.push(d)}Xt(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Ju(a){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=js("baseRetryDelayMs",5e3,a),this.Za=js("retryDelaySeedMs",1e4,a),this.Ta=js("forwardChannelMaxRetries",2,a),this.va=js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ku(a&&a.concurrentRequestLimit),this.Ba=new q_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ju.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,g){yt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=oh(this,null,this.W),Xi(this)};function Ka(a){if(Xu(a),a.I==3){var u=a.V++,d=Zt(a.J);if(De(d,"SID",a.M),De(d,"RID",u),De(d,"TYPE","terminate"),$s(a,d),u=new Fn(a,a.j,u),u.M=2,u.A=Ki(Zt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=ah(u.j,null),u.g.ea(u.A)),u.F=Date.now(),zi(u)}ih(a)}function Ji(a){a.g&&(Ya(a),a.g.cancel(),a.g=null)}function Xu(a){Ji(a),a.v&&(o.clearTimeout(a.v),a.v=null),Zi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Xi(a){if(!Ou(a.h)&&!a.m){a.m=!0;var u=a.Ea;he||E(),de||(he(),de=!0),w.add(u,a),a.D=0}}function K_(a,u){return xu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ns(h(a.Ea,a,u),sh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Fn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Pt(V),vn(V,this.U)):V=this.U),this.u!==null||this.R||(C.J=V,V=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=eh(this,C,u),d=Zt(this.J),De(d,"RID",a),De(d,"CVER",22),this.G&&De(d,"X-HTTP-Session-Id",this.G),$s(this,d),V&&(this.R?u="headers="+Ds(Gu(V))+"&"+u:this.u&&za(d,this.u,V)),qa(this.h,C),this.Ra&&De(d,"TYPE","init"),this.S?(De(d,"$req",u),De(d,"SID","null"),C.U=!0,Ba(C,d,null)):Ba(C,d,u),this.I=2}}else this.I==3&&(a?Zu(this,a):this.i.length==0||Ou(this.h)||Zu(this))};function Zu(a,u){var d;u?d=u.l:d=a.V++;const g=Zt(a.J);De(g,"SID",a.M),De(g,"RID",d),De(g,"AID",a.K),$s(a,g),a.u&&a.o&&za(g,a.u,a.o),d=new Fn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=eh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),qa(a.h,d),Ba(d,g,u)}function $s(a,u){a.H&&At(a.H,function(d,g){De(u,g,d)}),a.l&&At({},function(d,g){De(u,g,d)})}function eh(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let fe=-1;for(;;){const ze=["count="+d];fe==-1?d>0?(fe=C[0].g,ze.push("ofs="+fe)):fe=0:ze.push("ofs="+fe);let Pe=!0;for(let Xe=0;Xe<d;Xe++){var V=C[Xe].g;const en=C[Xe].map;if(V-=fe,V<0)fe=Math.max(0,C[Xe].g-100),Pe=!1;else try{V="req"+V+"_"||"";try{var q=en instanceof Map?en:Object.entries(en);for(const[Tr,$n]of q){let Hn=$n;c($n)&&(Hn=Te($n)),ze.push(V+Tr+"="+encodeURIComponent(Hn))}}catch(Tr){throw ze.push(V+"type="+encodeURIComponent("_badmap")),Tr}}catch{g&&g(en)}}if(Pe){q=ze.join("&");break e}}q=void 0}return a=a.i.splice(0,d),u.G=a,q}function th(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;he||E(),de||(he(),de=!0),w.add(u,a),a.A=0}}function Qa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ns(h(a.Da,a),sh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,nh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ns(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Ji(this),nh(this))};function Ya(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function nh(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Zt(a.na);De(u,"RID","rpc"),De(u,"SID",a.M),De(u,"AID",a.K),De(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&De(u,"TO",a.ia),De(u,"TYPE","xmlhttp"),$s(a,u),a.u&&a.o&&za(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ki(Zt(u)),d.u=null,d.R=!0,Nu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ji(this),Qa(this),yt(19))};function Zi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function rh(a,u){var d=null;if(a.g==u){Zi(a),Ya(a),a.g=null;var g=2}else if(Ha(a.h,u))d=u.G,Mu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;g=_r(),B(g,new Ru(g,d)),Xi(a)}else th(a);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&K_(a,u)||g==2&&Qa(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),C){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function sh(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function vr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const C=!g;g=new Un(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Os(g,"https"),Ki(g),C?$_(g.toString(),d):H_(g.toString(),d)}else yt(2);a.I=0,a.l&&a.l.pa(u),ih(a),Xu(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function ih(a){if(a.I=0,a.ja=[],a.l){const u=Lu(a.h);(u.length!=0||a.i.length!=0)&&(b(a.ja,u),b(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function oh(a,u,d){var g=d instanceof Un?Zt(d):new Un(d);if(g.g!="")u&&(g.g=u+"."+g.g),xs(g,g.u);else{var C=o.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const V=new Un(null);g&&Os(V,g),u&&(V.g=u),C&&xs(V,C),d&&(V.h=d),g=V}return d=a.G,u=a.wa,d&&u&&De(g,d,u),De(g,"VER",a.ka),$s(a,g),g}function ah(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Me(new Ga({ab:d})):new Me(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function eo(){}eo.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){j.call(this),this.g=new Ju(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!v(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new qr(this)}p(Vt,j),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ka(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Te(a),a=d);u.i.push(new O_(u.Ya++,a)),u.I==3&&Xi(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ka(this.g),delete this.g,Vt.Z.N.call(this)};function lh(a){jr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(lh,jr);function uh(){nt.call(this),this.status=1}p(uh,nt);function qr(a){this.g=a}p(qr,ch),qr.prototype.ra=function(){B(this.g,"a")},qr.prototype.qa=function(a){B(this.g,new lh(a))},qr.prototype.pa=function(a){B(this.g,new uh)},qr.prototype.oa=function(){B(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Tm=function(){return new eo},vm=function(){return _r()},Em=Je,qc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,yo=Gi,Su.COMPLETE="complete",ym=Su,Nt.EventType=qt,qt.OPEN="a",qt.CLOSE="b",qt.ERROR="c",qt.MESSAGE="d",j.prototype.listen=j.prototype.J,Qs=Nt,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,_m=Me}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const Tf="@firebase/firestore",If="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Nl("@firebase/firestore");function Kr(){return Or.logLevel}function J(t,...e){if(Or.logLevel<=ge.DEBUG){const n=e.map(kl);Or.debug(`Firestore (${ws}): ${t}`,...n)}}function Dn(t,...e){if(Or.logLevel<=ge.ERROR){const n=e.map(kl);Or.error(`Firestore (${ws}): ${t}`,...n)}}function ps(t,...e){if(Or.logLevel<=ge.WARN){const n=e.map(kl);Or.warn(`Firestore (${ws}): ${t}`,...n)}}function kl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Im(t,r,n)}function Im(t,e,n){let r=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Im(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class mw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gw{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new wm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class _w{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yw{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _w(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ew{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Wc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return gc(s)===gc(i)?_e(s,i):gc(s)?1:-1}return _e(t.length,e.length)}const Tw=55296,Iw=57343;function gc(t){const e=t.charCodeAt(0);return e>=Tw&&e<=Iw}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):Wc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sr.fromString(e.substring(4,e.length-2))}}class Oe extends rn{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const ww=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends rn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return ww.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Af}static keyField(){return new it([Af])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Oe.fromString(e))}static fromName(e){return new re(Oe.fromString(e).popFirst(5))}static empty(){return new re(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rw(t,e,n,r){if(e===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rf(t){if(!re.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Am(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function Ti(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xl(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function Li(t,e){if(!Am(t))throw new Z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Z(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=-62135596800,bf=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*bf);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sf)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bf}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Li(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:We("string",ke._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ke(0,0))}static max(){return new ce(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=-1;function Sw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new lr(s,re.empty(),e)}function bw(t){return new lr(t.readTime,t.key,Ii)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ce.min(),re.empty(),Ii)}static max(){return new lr(ce.max(),re.empty(),Ii)}}function Pw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Cw)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Vw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ia.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=-1;function wa(t){return t==null}function jo(t){return t===0&&1/t==-1/0}function Dw(t){return typeof t=="number"&&Number.isInteger(t)&&!jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="";function kw(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pf(e)),e=Ow(t.get(n),e);return Pf(e)}function Ow(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Rm:n+="";break;default:n+=i}}return n}function Pf(t){return t+Rm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nf(this.data.getIterator())}getIteratorFrom(e){return new Nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new Ye(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bm("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const xw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=xw.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="server_timestamp",Cm="__type__",Nm="__previous_value__",Vm="__local_write_time__";function Ll(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Cm])==null?void 0:r.stringValue)===Pm}function Aa(t){const e=t.mapValue.fields[Nm];return Ll(e)?Aa(e):e}function wi(t){const e=ur(t.mapValue.fields[Vm].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const $o="(default)";class Ai{constructor(e,n){this.projectId=e,this.database=n||$o}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database===$o}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="__type__",Lw="__max__",ao={mapValue:{}},km="__vector__",Ho="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ll(t)?4:Uw(t)?9007199254740991:Fw(t)?10:11:ie(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),c=ur(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return hr(s.bytesValue).isEqual(hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),c=Ue(i.doubleValue);return o===c?jo(o)===jo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Cf(o)!==Cf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!_n(o[l],c[l])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function Ri(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ue(i.integerValue||i.doubleValue),l=Ue(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Vf(t.timestampValue,e.timestampValue);case 4:return Vf(wi(t),wi(e));case 5:return Wc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=hr(i),l=hr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=_e(c[h],l[h]);if(f!==0)return f}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=_e(Ue(i.latitude),Ue(o.latitude));return c!==0?c:_e(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Df(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,b,N;const c=i.fields||{},l=o.fields||{},h=(m=c[Ho])==null?void 0:m.arrayValue,f=(_=l[Ho])==null?void 0:_.arrayValue,p=_e(((b=h==null?void 0:h.values)==null?void 0:b.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:Df(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ao.mapValue&&o===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(o===ao.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Wc(l[p],f[p]);if(m!==0)return m;const _=gs(c[l[p]],h[f[p]]);if(_!==0)return _}return _e(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function Vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ur(t),r=ur(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Df(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gs(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function _s(t){return Gc(t)}function Gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gc(n.fields[o])}`;return s+"}"}(t.mapValue):ie(61005,{value:t})}function Eo(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Aa(t);return e?16+Eo(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Eo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Lr(r.fields,(i,o)=>{s+=i.length+Eo(o)}),s}(t.mapValue);default:throw ie(13486,{value:t})}}function zc(t){return!!t&&"integerValue"in t}function Fl(t){return!!t&&"arrayValue"in t}function kf(t){return!!t&&"nullValue"in t}function Of(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vo(t){return!!t&&"mapValue"in t}function Fw(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Dm])==null?void 0:r.stringValue)===km}function ci(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return{...t}}function Uw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Lw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ci(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(ci(this.value))}}function Om(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new it([n]);if(vo(r)){const i=Om(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new dt(e,0,ce.min(),ce.min(),ce.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ce.min(),ce.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ce.min(),ce.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.position=e,this.inclusive=n}}function xf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{}class Qe extends xm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $w(e,n,r):n==="array-contains"?new Ww(e,r):n==="in"?new Gw(e,r):n==="not-in"?new zw(e,r):n==="array-contains-any"?new Kw(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Hw(e,r):new qw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends xm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return Mm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Mm(t){return t.op==="and"}function Lm(t){return jw(t)&&Mm(t)}function jw(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Kc(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(Lm(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function Fm(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Fm(o,s.filters[c]),!0):!1}(t,e):void ie(19439)}function Um(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Um).join(" ,")+"}"}(t):"Filter"}class $w extends Qe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Hw extends Qe{constructor(e,n){super(e,"in",n),this.keys=Bm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qw extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Bm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class Ww extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fl(n)&&Ri(n.arrayValue,this.value)}}class Gw extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class zw extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ri(this.value.arrayValue,n)}}class Kw extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Lf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Qw(t,e,n,r,s,i,o)}function Ul(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.Te=n}return e.Te}function Bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function Qc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Yw(t,e,n,r,s,i,o,c){return new Ra(t,e,n,r,s,i,o,c)}function jl(t){return new Ra(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jw(t){return t.collectionGroup!==null}function li(t){const e=le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ye(it.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Wo(i,r))}),n.has(it.keyField().canonicalString())||e.Ie.push(new Wo(it.keyField(),r))}return e.Ie}function ln(t){const e=le(t);return e.Ee||(e.Ee=Xw(e,li(t))),e.Ee}function Xw(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wo(s.field,i)});const n=t.endAt?new qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qo(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yc(t,e,n){return new Ra(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sa(t,e){return Bl(ln(t),ln(e))&&t.limitType===e.limitType}function jm(t){return`${Ul(ln(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Um(s)).join(", ")}]`),wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_s(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_s(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function ba(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=xf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,li(r),s)||r.endAt&&!function(o,c,l){const h=xf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,li(r),s))}(t,e)}function Zw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $m(t){return(e,n)=>{let r=!1;for(const s of li(t)){const i=eA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eA(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?gs(l,h):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Sm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=new xe(re.comparator);function kn(){return tA}const Hm=new xe(re.comparator);function Ys(...t){let e=Hm;for(const n of t)e=e.insert(n.key,n);return e}function qm(t){let e=Hm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return ui()}function Wm(){return ui()}function ui(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const nA=new xe(re.comparator),rA=new Ye(re.comparator);function ye(...t){let e=rA;for(const n of t)e=e.add(n);return e}const sA=new Ye(_e);function iA(){return sA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}function Gm(t){return{integerValue:""+t}}function oA(t,e){return Dw(e)?Gm(e):$l(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this._=void 0}}function aA(t,e,n){return t instanceof Go?function(s,i){const o={fields:{[Cm]:{stringValue:Pm},[Vm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ll(i)&&(i=Aa(i)),i&&(o.fields[Nm]=i),{mapValue:o}}(n,e):t instanceof Si?Km(t,e):t instanceof bi?Qm(t,e):function(s,i){const o=zm(s,i),c=Uf(o)+Uf(s.Ae);return zc(o)&&zc(s.Ae)?Gm(c):$l(s.serializer,c)}(t,e)}function cA(t,e,n){return t instanceof Si?Km(t,e):t instanceof bi?Qm(t,e):n}function zm(t,e){return t instanceof zo?function(r){return zc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Go extends Pa{}class Si extends Pa{constructor(e){super(),this.elements=e}}function Km(t,e){const n=Ym(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class bi extends Pa{constructor(e){super(),this.elements=e}}function Qm(t,e){let n=Ym(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class zo extends Pa{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Uf(t){return Ue(t.integerValue||t.doubleValue)}function Ym(t){return Fl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Si&&s instanceof Si||r instanceof bi&&s instanceof bi?ms(r.elements,s.elements,_n):r instanceof zo&&s instanceof zo?_n(r.Ae,s.Ae):r instanceof Go&&s instanceof Go}(t.transform,e.transform)}class uA{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function Jm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zm(t.key,Pn.none()):new Fi(t.key,t.data,Pn.none());{const n=t.data,r=Lt.empty();let s=new Ye(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ur(t.key,r,new Kt(s.toArray()),Pn.none())}}function hA(t,e,n){t instanceof Fi?function(s,i,o){const c=s.value.clone(),l=jf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(s,i,o){if(!To(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=jf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Xm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hi(t,e,n,r){return t instanceof Fi?function(i,o,c,l){if(!To(i.precondition,o))return c;const h=i.value.clone(),f=$f(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,o,c,l){if(!To(i.precondition,o))return c;const h=$f(i.fieldTransforms,l,o),f=o.data;return f.setAll(Xm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return To(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function fA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zm(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,o)=>lA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fi extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jf(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,cA(o,c,n[s]))}return r}function $f(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aA(i,o,e))}return r}class Zm extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dA extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Wm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Jm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class Hl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return nA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ve;function _A(t){switch(t){case U.OK:return ie(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function eg(t){if(t===void 0)return Dn("GRPC error has no .code"),U.UNKNOWN;switch(t){case He.OK:return U.OK;case He.CANCELLED:return U.CANCELLED;case He.UNKNOWN:return U.UNKNOWN;case He.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case He.INTERNAL:return U.INTERNAL;case He.UNAVAILABLE:return U.UNAVAILABLE;case He.UNAUTHENTICATED:return U.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case He.NOT_FOUND:return U.NOT_FOUND;case He.ALREADY_EXISTS:return U.ALREADY_EXISTS;case He.PERMISSION_DENIED:return U.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case He.ABORTED:return U.ABORTED;case He.OUT_OF_RANGE:return U.OUT_OF_RANGE;case He.UNIMPLEMENTED:return U.UNIMPLEMENTED;case He.DATA_LOSS:return U.DATA_LOSS;default:return ie(39323,{code:t})}}(ve=He||(He={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new sr([4294967295,4294967295],0);function Hf(t){const e=yA().encode(t),n=new gm;return n.update(e),new Uint8Array(n.digest())}function qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new sr([n,r],0),new sr([s,i],0)]}class ql{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=sr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(sr.fromNumber(r)));return s.compare(EA)===1&&(s=new sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Hf(e),[r,s]=qf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ql(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Hf(e),[r,s]=qf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Na(ce.min(),s,new xe(_e),kn(),ye())}}class Ui{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ui(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class tg{constructor(e,n){this.targetId=e,this.Ce=n}}class ng{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wf{constructor(){this.ve=0,this.Fe=Gf(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}}),new Ui(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Gf()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vA{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=co(),this.He=co(),this.Ye=new xe(_e)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Qc(i))if(r===0){const o=new re(i.path);this.et(n,o,dt.newNoDocument(o,ce.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=hr(r).toUint8Array()}catch(l){if(l instanceof bm)return ps("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ql(o,s,i)}catch(l){return ps(l instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Qc(c.target)){const l=new re(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,dt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ye();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Na(e,n,this.Ye,this.je,r);return this.je=kn(),this.Je=co(),this.He=co(),this.Ye=new xe(_e),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Wf,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ye(_e),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ye(_e),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wf),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function co(){return new xe(re.comparator)}function Gf(){return new xe(re.comparator)}const TA={asc:"ASCENDING",desc:"DESCENDING"},IA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wA={and:"AND",or:"OR"};class AA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jc(t,e){return t.useProto3Json||wa(e)?e:{value:e}}function Ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RA(t,e){return Ko(t,e.toTimestamp())}function un(t){return Se(!!t,49232),ce.fromTimestamp(function(n){const r=ur(n);return new ke(r.seconds,r.nanos)}(t))}function Wl(t,e){return Xc(t,e).canonicalString()}function Xc(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sg(t){const e=Oe.fromString(t);return Se(lg(e),10190,{key:e.toString()}),e}function Zc(t,e){return Wl(t.databaseId,e.path)}function _c(t,e){const n=sg(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(og(n))}function ig(t,e){return Wl(t.databaseId,e)}function SA(t){const e=sg(t);return e.length===4?Oe.emptyPath():og(e)}function el(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function og(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function zf(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function bA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?U.UNKNOWN:eg(h.code);return new Z(f,h.message||"")}(o);n=new ng(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):ce.min(),c=new Lt({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Io(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?un(r.readTime):ce.min(),o=dt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Io([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new Io([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gA(s,i),c=r.targetId;n=new tg(c,o)}}return n}function PA(t,e){let n;if(e instanceof Fi)n={update:zf(t,e.key,e.value)};else if(e instanceof Zm)n={delete:Zc(t,e.key)};else if(e instanceof Ur)n={update:zf(t,e.key,e.data),updateMask:LA(e.fieldMask)};else{if(!(e instanceof dA))return ie(16599,{Vt:e.type});n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:RA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function CA(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(ce.min())&&(o=un(i)),new uA(o,s.transformResults||[])}(n,e))):[]}function NA(t,e){return{documents:[ig(t,e.path)]}}function VA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ig(t,s);const i=function(h){if(h.length!==0)return cg(yn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Yr(m.field),direction:OA(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Jc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function DA(t){let e=SA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=ag(p);return m instanceof yn&&Lm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new Wo(Jr(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,wa(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new qo(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new qo(_,m)}(n.endAt)),Yw(e,s,o,i,c,"F",l,h)}function kA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ag(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>ag(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function OA(t){return TA[t]}function xA(t){return IA[t]}function MA(t){return wA[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return it.fromServerFormat(t.fieldPath)}function cg(t){return t instanceof Qe?function(n){if(n.op==="=="){if(Of(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(kf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Of(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(kf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:xA(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>cg(s));return r.length===1?r[0]:{compositeFilter:{op:MA(n.op),filters:r}}}(t):ie(54877,{filter:t})}function LA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.yt=e}}function UA(t){const e=DA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.Cn=new jA}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(lr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class jA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ug=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(ug,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ys(0)}static cr(){return new ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="LruGarbageCollector",$A=1048576;function Yf([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class HA{constructor(e){this.Ir=e,this.buffer=new Ye(Yf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){J(Qf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rs(n)?J(Qf,"Ignoring IndexedDB error during garbage collection: ",n):await As(n)}await this.Vr(3e5)})}}class WA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ia.ce);const r=new HA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Kf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kf):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Kr()<=ge.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function GA(t,e){return new WA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&hi(r.mutation,s,Kt.empty(),ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ys();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=kn();const o=ui(),c=function(){return ui()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ur)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),hi(f.mutation,h,f.mutation.getFieldMask(),ke.now())):o.set(h.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>c.set(h,new KA(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=ui();let s=new xe((o,c)=>o-c),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Kt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Wm();f.forEach(m=>{if(!i.has(m)){const _=Jm(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Pr());let c=Ii,l=i;return o.next(h=>M.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ye())).next(f=>({batchId:c,changes:qm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,m){return new Ra(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let c=Ys();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&hi(f.mutation,h,Kt.empty(),ke.now()),ba(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:UA(s.bundledQuery),readTime:un(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.overlays=new xe(re.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Pr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Pr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mA(n,r));let i=this.qr.get(n);i===void 0&&(i=ye(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Qr=new Ye(Ze.$r),this.Ur=new Ye(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new re(new Oe([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new Oe([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ye();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||_e(e.Yr,n.Yr)}static Kr(e,n){return _e(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(Ze.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pA(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Ml:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(_e);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new re(i),0);let c=new Ye(_e);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),M.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.ri=e,this.docs=function(){return new xe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Pw(bw(f),r)<=0||(s.has(f.key)||ba(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tR(this)}getSize(e){return M.resolve(this.size)}}class tR extends zA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.persistence=e,this.si=new Fr(n=>Ul(n),Bl),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new Gl,this.targetCount=0,this.ai=ys.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ia(0),this.li=!1,this.li=!0,this.hi=new XA,this.referenceDelegate=e(this),this.Pi=new nR(this),this.indexManager=new BA,this.remoteDocumentCache=function(s){return new eR(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new FA(n),this.Ii=new YA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new ZA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new rR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class rR extends Nw{constructor(e){super(),this.currentSequenceNumber=e}}class zl{constructor(e){this.persistence=e,this.Ri=new Gl,this.Vi=null}static mi(e){return new zl(e)}get fi(){if(this.Vi)return this.Vi;throw ie(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const s=re.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Qo{constructor(e,n){this.persistence=e,this.pi=new Fr(r=>kw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=GA(this,n)}static mi(e,n){return new Qo(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Eo(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return KT()?8:Vw(_t())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sR;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Kr()<=ge.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Kr()<=ge.DEBUG&&J("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Kr()<=ge.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}ys(e,n){if(Ff(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yc(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,Yc(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Ff(n)||s.isEqual(ce.min())?M.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(Kr()<=ge.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(n)),this.vs(e,o,n,Sw(s,Ii)).next(c=>c))})}Ds(e,n){let r=new Ye($m(e));return n.forEach((s,i)=>{ba(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Kr()<=ge.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.ps.getDocumentsMatchingQuery(e,n,lr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="LocalStore",oR=3e8;class aR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new xe(_e),this.xs=new Fr(i=>Ul(i),Bl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function cR(t,e,n,r){return new aR(t,e,n,r)}async function fg(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ye();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function lR(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,m=p.keys();let _=M.resolve();return m.forEach(b=>{_=_.next(()=>f.getEntry(l,b)).next(N=>{const D=h.docVersions.get(b);Se(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ye();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dg(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function uR(t,e){const n=le(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(N,D,H){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=oR?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=kn(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(hR(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(ce.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function hR(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):J(Ql,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function fR(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ml),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dR(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function tl(t,e,n){const r=le(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Rs(o))throw o;J(Ql,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Jf(t,e,n){const r=le(t);let s=ce.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=le(l),m=p.xs.get(f);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)}(r,o,ln(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ye())).next(c=>(pR(r,Zw(e),c),{documents:c,Qs:i})))}function pR(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Xf{constructor(){this.activeTargetIds=iA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mR{constructor(){this.Mo=new Xf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="ConnectivityMonitor";class ed{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){J(Zf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){J(Zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=null;function nl(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="RestConnection",_R={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===$o?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=nl(),c=this.zo(e,n.toUriEncodedString());J(yc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Ts(h);return this.Jo(e,c,l,r,f).then(p=>(J(yc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ps(yc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=_R[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class vR extends yR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=nl();return new Promise((c,l)=>{const h=new _m;h.setWithCredentials(!0),h.listenOnce(ym.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case yo.NO_ERROR:const p=h.getResponseJson();J(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case yo.TIMEOUT:J(ut,`RPC '${e}' ${o} timed out`),l(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const m=h.getStatus();if(J(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const N=function(H){const $=H.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf($)>=0?$:U.UNKNOWN}(b.status);l(new Z(N,b.message))}else l(new Z(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Z(U.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{J(ut,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);J(ut,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=nl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tm(),c=vm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");J(ut,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const b=new ER({Yo:D=>{_?J(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(J(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),J(ut,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),N=(D,H,$)=>{D.listen(H,W=>{try{$(W)}catch(G){setTimeout(()=>{throw G},0)}})};return N(p,Qs.EventType.OPEN,()=>{_||(J(ut,`RPC '${e}' stream ${s} transport opened.`),b.o_())}),N(p,Qs.EventType.CLOSE,()=>{_||(_=!0,J(ut,`RPC '${e}' stream ${s} transport closed`),b.a_(),this.E_(p))}),N(p,Qs.EventType.ERROR,D=>{_||(_=!0,ps(ut,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),b.a_(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),N(p,Qs.EventType.MESSAGE,D=>{var H;if(!_){const $=D.data[0];Se(!!$,16349);const W=$,G=(W==null?void 0:W.error)||((H=W[0])==null?void 0:H.error);if(G){J(ut,`RPC '${e}' stream ${s} received error:`,G);const he=G.status;let de=function(I){const R=He[I];if(R!==void 0)return eg(R)}(he),w=G.message;de===void 0&&(de=U.INTERNAL,w="Unknown error status: "+he+" with message "+G.message),_=!0,b.a_(new Z(de,w)),p.close()}else J(ut,`RPC '${e}' stream ${s} received:`,$),b.u_($)}}),N(c,Em.STAT_EVENT,D=>{D.stat===qc.PROXY?J(ut,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===qc.NOPROXY&&J(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.__()},0),b}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){return new AA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="PersistentStream";class mg{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return J(td,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(J(td,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TR extends mg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=bA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?un(o.readTime):ce.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=el(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Qc(l)?{documents:NA(i,l)}:{query:VA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=rg(i,o.resumeToken);const h=Jc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Ko(i,o.snapshotVersion.toTimestamp());const h=Jc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=kA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=el(this.serializer),n.removeTarget=e,this.q_(n)}}class IR extends mg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=CA(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=el(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PA(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{}class AR extends wR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Xc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Xc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class RR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="RemoteStore";class SR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Br(this)&&(J(xr,"Restarting streams for network reachability change."),await async function(l){const h=le(l);h.Ea.add(4),await Bi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Da(h)}(this))})}),this.Ra=new RR(r,s)}}async function Da(t){if(Br(t))for(const e of t.da)await e(!0)}async function Bi(t){for(const e of t.da)await e(!1)}function gg(t,e){const n=le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Zl(n)?Xl(n):Ss(n).O_()&&Jl(n,e))}function Yl(t,e){const n=le(t),r=Ss(n);n.Ia.delete(e),r.O_()&&_g(n,e),n.Ia.size===0&&(r.O_()?r.L_():Br(n)&&n.Ra.set("Unknown"))}function Jl(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).Y_(e)}function _g(t,e){t.Va.Ue(e),Ss(t).Z_(e)}function Xl(t){t.Va=new vA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.Ra.ua()}function Zl(t){return Br(t)&&!Ss(t).x_()&&t.Ia.size>0}function Br(t){return le(t).Ea.size===0}function yg(t){t.Va=void 0}async function bR(t){t.Ra.set("Online")}async function PR(t){t.Ia.forEach((e,n)=>{Jl(t,e)})}async function CR(t,e){yg(t),Zl(t)?(t.Ra.ha(e),Xl(t)):t.Ra.set("Unknown")}async function NR(t,e,n){if(t.Ra.set("Online"),e instanceof ng&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){J(xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yo(t,r)}else if(e instanceof Io?t.Va.Ze(e):e instanceof tg?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await dg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),_g(i,l);const p=new Zn(f.target,l,h,f.sequenceNumber);Jl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J(xr,"Failed to raise snapshot:",r),await Yo(t,r)}}async function Yo(t,e,n){if(!Rs(e))throw e;t.Ea.add(1),await Bi(t),t.Ra.set("Offline"),n||(n=()=>dg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(xr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Da(t)})}function Eg(t,e){return e().catch(n=>Yo(t,n,e))}async function ka(t){const e=le(t),n=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ml;for(;VR(e);)try{const s=await fR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,DR(e,s)}catch(s){await Yo(e,s)}vg(e)&&Tg(e)}function VR(t){return Br(t)&&t.Ta.length<10}function DR(t,e){t.Ta.push(e);const n=dr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function vg(t){return Br(t)&&!dr(t).x_()&&t.Ta.length>0}function Tg(t){dr(t).start()}async function kR(t){dr(t).ra()}async function OR(t){const e=dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function xR(t,e,n){const r=t.Ta.shift(),s=Hl.from(r,e,n);await Eg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ka(t)}async function MR(t,e){e&&dr(t).X_&&await async function(r,s){if(function(o){return _A(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();dr(r).B_(),await Eg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ka(r)}}(t,e),vg(t)&&Tg(t)}async function nd(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),J(xr,"RemoteStore received new credentials");const r=Br(n);n.Ea.add(3),await Bi(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Da(n)}async function LR(t,e){const n=le(t);e?(n.Ea.delete(2),await Da(n)):e||(n.Ea.add(2),await Bi(n),n.Ra.set("Unknown"))}function Ss(t){return t.ma||(t.ma=function(n,r,s){const i=le(n);return i.sa(),new TR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:bR.bind(null,t),t_:PR.bind(null,t),r_:CR.bind(null,t),H_:NR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Zl(t)?Xl(t):t.Ra.set("Unknown")):(await t.ma.stop(),yg(t))})),t.ma}function dr(t){return t.fa||(t.fa=function(n,r,s){const i=le(n);return i.sa(),new IR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:kR.bind(null,t),r_:MR.bind(null,t),ta:OR.bind(null,t),na:xR.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ka(t)):(await t.fa.stop(),t.Ta.length>0&&(J(xr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new eu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tu(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Rs(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static emptySet(e){return new os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.ga=new xe(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ie(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Es(e,n,os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class UR{constructor(){this.queries=sd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=sd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function sd(){return new Fr(t=>jm(t),Sa)}async function BR(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new FR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=tu(o,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&nu(n)}async function jR(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $R(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&nu(n)}function HR(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function nu(t){t.Ca.forEach(e=>{e.next()})}var rl,id;(id=rl||(rl={})).Ma="default",id.Cache="cache";class qR{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==rl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.key=e}}class wg{constructor(e){this.key=e}}class WR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ye(),this.mutatedKeys=ye(),this.eu=$m(e),this.tu=new os(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new rd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=ba(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;m&&_?m.data.isEqual(_.data)?b!==N&&(r.track({type:3,doc:_}),D=!0):this.su(m,_)||(r.track({type:2,doc:_}),D=!0,(l&&this.eu(_,l)>0||h&&this.eu(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),D=!0):m&&!_&&(r.track({type:1,doc:m}),D=!0,(l||h)&&(c=!0)),D&&(_?(o=o.add(_),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,b){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Rt:D})}};return N(_)-N(b)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Es(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new wg(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Ig(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ru="SyncEngine";class GR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zR{constructor(e){this.key=e,this.hu=!1}}class KR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Fr(c=>jm(c),Sa),this.Iu=new Map,this.Eu=new Set,this.du=new xe(re.comparator),this.Au=new Map,this.Ru=new Gl,this.Vu={},this.mu=new Map,this.fu=ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function QR(t,e,n=!0){const r=Cg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Ag(r,e,n,!0),s}async function YR(t,e){const n=Cg(t);await Ag(n,e,!0,!1)}async function Ag(t,e,n,r){const s=await dR(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await JR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&gg(t.remoteStore,s),c}async function JR(t,e,n,r,s){t.pu=(p,m,_)=>async function(N,D,H,$){let W=D.view.ru(H);W.Cs&&(W=await Jf(N.localStore,D.query,!1).then(({documents:w})=>D.view.ru(w,W)));const G=$&&$.targetChanges.get(D.targetId),he=$&&$.targetMismatches.get(D.targetId)!=null,de=D.view.applyChanges(W,N.isPrimaryClient,G,he);return ad(N,D.targetId,de.au),de.snapshot}(t,p,m,_);const i=await Jf(t.localStore,e,!0),o=new WR(e,i.Qs),c=o.ru(i.documents),l=Ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);ad(t,n,h.au);const f=new GR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function XR(t,e,n){const r=le(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Sa(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yl(r.remoteStore,s.targetId),sl(r,s.targetId)}).catch(As)):(sl(r,s.targetId),await tl(r.localStore,s.targetId,!0))}async function ZR(t,e){const n=le(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yl(n.remoteStore,r.targetId))}async function eS(t,e,n){const r=aS(t);try{const s=await function(o,c){const l=le(o),h=ke.now(),f=c.reduce((_,b)=>_.add(b.key),ye());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let b=kn(),N=ye();return l.Ns.getEntries(_,f).next(D=>{b=D,b.forEach((H,$)=>{$.isValidDocument()||(N=N.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,b)).next(D=>{p=D;const H=[];for(const $ of c){const W=fA($,p.get($.key).overlayedDocument);W!=null&&H.push(new Ur($.key,W,Om(W.value.mapValue),Pn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,H,c)}).next(D=>{m=D;const H=D.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(_,D.batchId,H)})}).then(()=>({batchId:m.batchId,changes:qm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new xe(_e)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await ji(r,s.changes),await ka(r.remoteStore)}catch(s){const i=tu(s,"Failed to persist write");n.reject(i)}}async function Rg(t,e){const n=le(t);try{const r=await uR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await ji(n,r,e)}catch(r){await As(r)}}function od(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)}),h&&nu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tS(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new xe(re.comparator);o=o.insert(i,dt.newNoDocument(i,ce.min()));const c=ye().add(i),l=new Na(ce.min(),new Map,new xe(_e),o,c);await Rg(r,l),r.du=r.du.remove(i),r.Au.delete(e),su(r)}else await tl(r.localStore,e,!1).then(()=>sl(r,e,n)).catch(As)}async function nS(t,e){const n=le(t),r=e.batch.batchId;try{const s=await lR(n.localStore,e);bg(n,r,null),Sg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ji(n,s)}catch(s){await As(s)}}async function rS(t,e,n){const r=le(t);try{const s=await function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Se(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);bg(r,e,n),Sg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ji(r,s)}catch(s){await As(s)}}function Sg(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function bg(t,e,n){const r=le(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Pg(t,r)})}function Pg(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Yl(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),su(t))}function ad(t,e,n){for(const r of n)r instanceof Ig?(t.Ru.addReference(r.key,e),sS(t,r)):r instanceof wg?(J(ru,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Pg(t,r.key)):ie(19791,{wu:r})}function sS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(J(ru,"New document in limbo: "+n),t.Eu.add(r),su(t))}function su(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(Oe.fromString(e)),r=t.fu.next();t.Au.set(r,new zR(n)),t.du=t.du.insert(n,r),gg(t.remoteStore,new Zn(ln(jl(n.path)),r,"TargetPurposeLimboResolution",Ia.ce))}}async function ji(t,e,n){const r=le(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Kl.As(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Es,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.ds,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Rs(p))throw p;J(Ql,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),b=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(b);f.Ms=f.Ms.insert(m,N)}}}(r.localStore,i))}async function iS(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){J(ru,"User change. New user:",e.toKey());const r=await fg(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new Z(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ji(n,r.Ls)}}function oS(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let s=ye();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Cg(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tS.bind(null,e),e.Pu.H_=$R.bind(null,e.eventManager),e.Pu.yu=HR.bind(null,e.eventManager),e}function aS(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rS.bind(null,e),e}class Jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Va(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cR(this.persistence,new iR,e.initialUser,this.serializer)}Cu(e){return new hg(zl.mi,this.serializer)}Du(e){return new mR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jo.provider={build:()=>new Jo};class cS extends Jo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof Qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new hg(r=>Qo.mi(r,n),this.serializer)}}class il{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>od(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iS.bind(null,this.syncEngine),await LR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UR}()}createDatastore(e){const n=Va(e.databaseInfo.databaseId),r=function(i){return new vR(i)}(e.databaseInfo);return function(i,o,c,l){return new AR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new SR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>od(this.syncEngine,n,0),function(){return ed.v()?new ed:new gR}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new KR(s,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);J(xr,"RemoteStore shutting down."),i.Ea.add(5),await Bi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}il.provider={build:()=>new il};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="FirestoreClient";class uS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Ol.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J(pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),J(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hS(t);J(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>nd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>nd(e.remoteStore,s)),t._onlineComponents=e}async function hS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(pr,"Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new Jo)}}else J(pr,"Using default OfflineComponentProvider"),await vc(t,new cS(void 0));return t._offlineComponents}async function Ng(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(pr,"Using user provided OnlineComponentProvider"),await cd(t,t._uninitializedComponentsProvider._online)):(J(pr,"Using default OnlineComponentProvider"),await cd(t,new il))),t._onlineComponents}function fS(t){return Ng(t).then(e=>e.syncEngine)}async function dS(t){const e=await Ng(t),n=e.eventManager;return n.onListen=QR.bind(null,e.syncEngine),n.onUnlisten=XR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZR.bind(null,e.syncEngine),n}function pS(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new lS({next:m=>{f.Nu(),o.enqueueAndForget(()=>jR(i,p));const _=m.docs.has(c);!_&&m.fromCache?h.reject(new Z(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?h.reject(new Z(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new qR(jl(c.path),f,{includeMetadataChanges:!0,qa:!0});return BR(i,p)}(await dS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firestore.googleapis.com",ud=!0;class hd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dg,this.ssl=ud}else this.host=e.host,this.ssl=e.ssl??ud;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ug;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$A)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pw;switch(r.type){case"firstParty":return new yw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ld.get(n);r&&(J("ComponentProvider","Removing Datastore"),ld.delete(n),r.terminate())}(this),Promise.resolve()}}function mS(t,e,n,r={}){var h;t=Ti(t,iu);const s=Ts(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(cm(`https://${c}`),lm("Firestore",!0)),i.host!==Dg&&i.host!==c&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Dr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ht.MOCK_USER;else{f=UT(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ht(m)}t._authCredentials=new mw(new wm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ou(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Li(n,et._jsonSchema))return new et(e,r||null,new re(Oe.fromString(n.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:We("string",et._jsonSchemaVersion),referencePath:We("string")};class Pi extends ou{constructor(e,n,r){super(e,n,jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new re(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function fd(t,e,...n){if(t=bt(t),arguments.length===1&&(e=Ol.newId()),Aw("doc","path",e),t instanceof iu){const r=Oe.fromString(e,...n);return Rf(r),new et(t,null,new re(r))}{if(!(t instanceof et||t instanceof Pi))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Rf(r),new et(t.firestore,t instanceof Pi?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="AsyncQueue";class pd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pg(this,"async_queue_retry"),this._c=()=>{const r=Ec();r&&J(dd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ir;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Rs(e))throw e;J(dd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Dn("INTERNAL UNHANDLED ERROR: ",md(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=eu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ie(47125,{Pc:md(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function md(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class au extends iu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new pd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pd(e),this._firestoreClient=void 0,await e}}}function gS(t,e){const n=typeof t=="object"?t:dm(),r=typeof t=="string"?t:$o,s=Dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=LT("firestore");i&&mS(s,...i)}return s}function kg(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_S(t),t._firestoreClient}function _S(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,f){return new Mw(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Vg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new uS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(ot.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Li(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:We("string",Ft._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Li(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:We("string",hn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Li(e,fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new fn(e.vectorValues);throw new Z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fn._jsonSchemaVersion="firestore/vectorValue/1.0",fn._jsonSchema={type:We("string",fn._jsonSchemaVersion),vectorValues:We("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=/^__.*__$/;class ES{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fi(e,this.data,n,this.fieldTransforms)}}function xg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ac:t})}}class lu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new lu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xg(this.Ac)&&yS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class vS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Va(e)}Cc(e,n,r,s=!1){return new lu({Ac:e,methodName:n,Dc:r,path:it.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TS(t){const e=t._freezeSettings(),n=Va(t._databaseId);return new vS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IS(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Ug("Data must be an object, but it was:",o,r);const c=Lg(r,o);let l,h;if(i.merge)l=new Kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=wS(e,p,n);if(!o.contains(m))throw new Z(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RS(f,m)||f.push(m)}l=new Kt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new ES(new Lt(c),l,h)}function Mg(t,e){if(Fg(t=bt(t)))return Ug("Unsupported field value:",e,t),Lg(t,e);if(t instanceof Og)return function(r,s){if(!xg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Mg(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Ko(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ko(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:rg(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof fn)return function(o,c){return{mapValue:{fields:{[Dm]:{stringValue:km},[Ho]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return $l(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${xl(r)}`)}(t,e)}function Lg(t,e){const n={};return Sm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=Mg(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Fg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof hn||t instanceof Ft||t instanceof et||t instanceof Og||t instanceof fn)}function Ug(t,e,n){if(!Fg(n)||!Am(n)){const r=xl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function wS(t,e,n){if((e=bt(e))instanceof cu)return e._internalPath;if(typeof e=="string")return Bg(t,e);throw Xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const AS=new RegExp("[~\\*/\\[\\]]");function Bg(t,e,n){if(e.search(AS)>=0)throw Xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cu(...e.split("."))._internalPath}catch{throw Xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(U.INVALID_ARGUMENT,c+t+l)}function RS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($g("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SS extends jg{data(){return super.data()}}function $g(t,e){return typeof e=="string"?Bg(t,e):e instanceof cu?e._internalPath:e._delegate._internalPath}class bS{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ho].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ue(o.doubleValue));return new fn(n)}convertGeoPoint(e){return new hn(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Aa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=ur(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Se(lg(r),9688,{name:e});const s=new Ai(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vr extends jg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($g("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Vr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vr._jsonSchema={type:We("string",Vr._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class wo extends Vr{data(e={}){return super.data(e)}}class fi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wo(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:CS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ol.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){t=Ti(t,et);const e=Ti(t.firestore,au);return pS(kg(e),t._key).then(n=>OS(e,t,n))}fi._jsonSchemaVersion="firestore/querySnapshot/1.0",fi._jsonSchema={type:We("string",fi._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};class VS extends bS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function DS(t,e,n){t=Ti(t,et);const r=Ti(t.firestore,au),s=PS(t.converter,e,n);return kS(r,[IS(TS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function kS(t,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>eS(await fS(r),s,i)),i.promise}(kg(t),e)}function OS(t,e,n){const r=n.docs.get(e._key),s=new VS(t);return new Vr(t,s,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ws=s})(Is),ds(new kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new au(new gw(r.getProvider("auth-internal")),new Ew(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),rr(Tf,If,e),rr(Tf,If,"esm2020")})();function Hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xS=Hg,qg=new xi("auth","Firebase",Hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Nl("@firebase/auth");function MS(t,...e){Zo.logLevel<=ge.WARN&&Zo.warn(`Auth (${Is}): ${t}`,...e)}function Ao(t,...e){Zo.logLevel<=ge.ERROR&&Zo.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw uu(t,...e)}function dn(t,...e){return uu(t,...e)}function Wg(t,e,n){const r={...xS(),[e]:n};return new xi("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return Wg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qg.create(t,...e)}function X(t,e,...n){if(!t)throw uu(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ao(e),new Error(e)}function On(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function LS(){return gd()==="http:"||gd()==="https:"}function gd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LS()||WT()||"connection"in navigator)?navigator.onLine:!0}function US(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=$T()||GT()}get(){return FS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$S=new $i(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function En(t,e,n,r,s={}){return zg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Mi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return qT()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(h.credentials="include"),Gg.fetch()(await Kg(t,t.config.apiHost,n,c),h)})}async function zg(t,e,n){t._canInitEmulator=!1;const r={...BS,...e};try{const s=new qS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw uo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wg(t,f,h);jt(t,f)}}catch(s){if(s instanceof Mn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function Oa(t,e,n,r,s={}){const i=await En(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?hu(t.config,s):`${t.config.apiScheme}://${s}`;return jS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function HS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),$S.get())})}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function _d(t){return t!==void 0&&t.enterprise!==void 0}class WS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GS(t,e){return En(t,"GET","/v2/recaptchaConfig",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e){return En(t,"POST","/v1/accounts:delete",e)}async function ea(t,e){return En(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KS(t,e=!1){const n=bt(t),r=await n.getIdToken(e),s=fu(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(Tc(s.auth_time)),issuedAtTime:di(Tc(s.iat)),expirationTime:di(Tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ao("JWT malformed, contained fewer than 3 sections"),null;try{const s=sm(n);return s?JSON.parse(s):(Ao("Failed to decode base64 JWT payload"),null)}catch(s){return Ao("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yd(t){const e=fu(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&QS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ci(t,ea(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Qg(s.providerUserInfo):[],o=XS(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new al(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function JS(t){const e=bt(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e){const n=await zg(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Kg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(l.credentials="include"),Gg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eb(t,e){return En(t,"POST","/v2/accounts:revokeToken",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=yd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ZS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new as;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new YS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new al(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KS(this,e)}reload(){return JS(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await Ci(this,zS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:b,stsTokenManager:N}=n;X(p&&N,e,"internal-error");const D=as.fromJSON(this.name,N);X(typeof p=="string",e,"internal-error"),Wn(r,e.name),Wn(s,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof _=="boolean",e,"internal-error"),Wn(i,e.name),Wn(o,e.name),Wn(c,e.name),Wn(l,e.name),Wn(h,e.name),Wn(f,e.name);const H=new Qt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return b&&Array.isArray(b)&&(H.providerData=b.map($=>({...$}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new as;s.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new as;c.updateFromIdToken(r);const l=new Qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new al(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Map;function bn(t){On(t instanceof Function,"Expected a class definition");let e=Ed.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ed.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yg.type="NONE";const vd=Yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ro("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ea(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(bn(vd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(vd);const o=Ro(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ea(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Qt._fromGetAccountInfoResponse(e,m,f)}else p=Qt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new cs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jg(t=_t()){return/firefox\//i.test(t)}function Xg(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(t=_t()){return/crios\//i.test(t)}function e_(t=_t()){return/iemobile/i.test(t)}function t_(t=_t()){return/android/i.test(t)}function n_(t=_t()){return/blackberry/i.test(t)}function r_(t=_t()){return/webos/i.test(t)}function du(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tb(t=_t()){var e;return du(t)&&!!((e=window.navigator)!=null&&e.standalone)}function nb(){return zT()&&document.documentMode===10}function s_(t=_t()){return du(t)||t_(t)||r_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=Td(_t());break;case"Worker":n=`${Td(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e={}){return En(t,"GET","/v2/passwordPolicy",Ln(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=6;class ob{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ib,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ea(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=US()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(or(this));const n=e?bt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sb(this),n=new ob(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&MS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gr(t){return bt(t)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cb(t){xa=t}function o_(t){return xa.loadJS(t)}function lb(){return xa.recaptchaEnterpriseScript}function ub(){return xa.gapiScript}function hb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fb{constructor(){this.enterprise=new db}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class db{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const pb="recaptcha-enterprise",a_="NO_RECAPTCHA";class mb{constructor(e){this.type=pb,this.auth=gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{GS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new WS(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;_d(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(a_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&_d(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lb();l.length!==0&&(l+=c),o_(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function wd(t,e,n,r=!1,s=!1){const i=new mb(t);let o;if(s)o=a_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function cl(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await wd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await wd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t,e){const n=Dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function _b(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yb(t,e,n){const r=gr(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=c_(e),{host:o,port:c}=Eb(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Dr(h,r.config.emulator)&&Dr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ts(o)?(cm(`${i}//${o}${l}`),lm("Auth",!0)):vb()}function c_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eb(t){const e=c_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ad(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ad(o)}}}function Ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t,e){return En(t,"POST","/v1/accounts:resetPassword",Ln(t,e))}async function Tb(t,e){return En(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e){return Oa(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}async function wb(t,e){return En(t,"POST","/v1/accounts:sendOobCode",Ln(t,e))}async function Ab(t,e){return wb(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function Sb(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends pu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cl(e,n,"signInWithPassword",Ib);case"emailLink":return Rb(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cl(e,r,"signUpPassword",Tb);case"emailLink":return Sb(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="http://localhost";class Mr extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:bb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cb(t){const e=zs(Ks(t)).link,n=e?zs(Ks(e)).deep_link_id:null,r=zs(Ks(t)).deep_link_id;return(r?zs(Ks(r)).link:null)||r||n||e||t}class mu{constructor(e){const n=zs(Ks(e)),r=n.apiKey??null,s=n.oobCode??null,i=Pb(n.mode??null);X(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Cb(e);try{return new mu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mu.parseLink(n);return X(r,"argument-error"),Ni._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends u_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Hi{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Hi{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=Rd(r);return new vs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Rd(r);return new vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function h_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function Nb(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await Ci(t,h_(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=fu(i.idToken);X(o,r,"internal-error");const{sub:c}=o;return X(t.uid===c,r,"user-mismatch"),vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e,n=!1){if(zt(t.app))return Promise.reject(or(t));const r="signIn",s=await h_(t,r,e),i=await vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Db(t,e){return f_(gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?_u._fromServerResponse(e,n):"totpInfo"in n?yu._fromServerResponse(e,n):jt(e,"internal-error")}}class _u extends gu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new _u(n)}}class yu extends gu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new yu(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t,e,n){var r;X(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),X(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),X(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(X(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(X(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(t){const e=gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ob(t,e,n){const r=gr(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&kb(r,s,n),await cl(r,s,"getOobCode",Ab)}async function xb(t,e,n){await l_(bt(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&d_(t),r})}async function Mb(t,e){const n=bt(t),r=await l_(n,{oobCode:e}),s=r.requestType;switch(X(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":X(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":X(r.mfaInfo,n,"internal-error");default:X(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=gu._fromServerResponse(gr(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function Lb(t,e){const{data:n}=await Mb(bt(t),e);return n.email}function Fb(t,e,n){return zt(t.app)?Promise.reject(or(t)):Db(bt(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&d_(t),r})}function Ub(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function Bb(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=1e3,$b=10;class m_ extends p_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$b):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m_.type="LOCAL";const Hb=m_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends p_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g_.type="SESSION";const __=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await qb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Eu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function Gb(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function zb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Qb(){return y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebaseLocalStorageDb",Yb=1,sa="firebaseLocalStorage",v_="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function Jb(){const t=indexedDB.deleteDatabase(E_);return new qi(t).toPromise()}function ll(){const t=indexedDB.open(E_,Yb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:v_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await Jb(),e(await ll()))})})}async function Sd(t,e,n){const r=La(t,!0).put({[v_]:e,value:n});return new qi(r).toPromise()}async function Xb(t,e){const n=La(t,!1).get(e),r=await new qi(n).toPromise();return r===void 0?null:r.value}function bd(t,e){const n=La(t,!0).delete(e);return new qi(n).toPromise()}const Zb=800,eP=3;class T_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(Qb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await zb(),!this.activeServiceWorker)return;this.sender=new Wb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ll();return await Sd(e,ra,"1"),await bd(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=La(s,!1).getAll();return new qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T_.type="LOCAL";const tP=T_;new $i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t,e){return e?bn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends pu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rP(t){return f_(t.auth,new vu(t),t.bypassAuthState)}function sP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Vb(n,new vu(t),t.bypassAuthState)}async function iP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Nb(n,new vu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rP;case"linkViaPopup":case"linkViaRedirect":return iP;case"reauthViaPopup":case"reauthViaRedirect":return sP;default:jt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new $i(2e3,1e4);class Xr extends I_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oP.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="pendingRedirect",So=new Map;class cP extends I_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await lP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lP(t,e){const n=fP(e),r=hP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uP(t,e){So.set(t._key(),e)}function hP(t){return bn(t._redirectPersistence)}function fP(t){return Ro(aP,t.config.apiKey,t.name)}async function dP(t,e,n=!1){if(zt(t.app))return Promise.reject(or(t));const r=gr(t),s=nP(r,e),o=await new cP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=10*60*1e3;class mP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!w_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pd(e))}saveEventToCache(e){this.cachedEventUids.add(Pd(e)),this.lastProcessedEventTime=Date.now()}}function Pd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function w_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e={}){return En(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EP=/^https?/;async function vP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _P(t);for(const n of e)try{if(TP(n))return}catch{}jt(t,"unauthorized-domain")}function TP(t){const e=ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EP.test(n))return!1;if(yP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new $i(3e4,6e4);function Cd(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wP(t){return new Promise((e,n)=>{var s,i,o;function r(){Cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cd(),n(dn(t,"network-request-failed"))},timeout:IP.get()})}if((i=(s=pn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const c=hb("iframefcb");return pn()[c]=()=>{gapi.load?r():n(dn(t,"network-request-failed"))},o_(`${ub()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw bo=null,e})}let bo=null;function AP(t){return bo=bo||wP(t),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new $i(5e3,15e3),SP="__/auth/iframe",bP="emulator/auth/iframe",PP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NP(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hu(e,bP):`https://${t.config.authDomain}/${SP}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=CP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function VP(t){const e=await AP(t),n=pn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:NP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},RP.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kP=500,OP=600,xP="_blank",MP="http://localhost";class Nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LP(t,e,n,r=kP,s=OP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...DP,width:r.toString(),height:s.toString(),top:i,left:o},h=_t().toLowerCase();n&&(c=Zg(h)?xP:n),Jg(h)&&(e=e||MP,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,b])=>`${m}${_}=${b},`,"");if(tb(h)&&c!=="_self")return FP(e||"",c),new Nd(null);const p=window.open(e||"",c,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new Nd(p)}function FP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="__/auth/handler",BP="emulator/auth/handler",jP=encodeURIComponent("fac");async function Vd(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof u_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Hi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${jP}=${encodeURIComponent(l)}`:"";return`${$P(t)}?${Mi(c).slice(1)}${h}`}function $P({config:t}){return t.emulator?hu(t,BP):`https://${t.authDomain}/${UP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class HP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=__,this._completeRedirectFn=dP,this._overrideRedirectResult=uP}async _openPopup(e,n,r,s){var o;On((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Vd(e,n,r,ol(),s);return LP(e,i,Eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Vd(e,n,r,ol(),s);return Gb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VP(e),r=new mP(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ic];i!==void 0&&n(!!i),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||Xg()||du()}}const qP=HP;var Dd="@firebase/auth",kd="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zP(t){ds(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},h=new ab(r,s,i,l);return _b(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new kr("auth-internal",e=>{const n=gr(e.getProvider("auth").getImmediate());return(r=>new WP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Dd,kd,GP(t)),rr(Dd,kd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=5*60,QP=am("authIdTokenMaxAge")||KP;let Od=null;const YP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QP)return;const s=n==null?void 0:n.token;Od!==s&&(Od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JP(t=dm()){const e=Dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gb(t,{popupRedirectResolver:qP,persistence:[tP,Hb,__]}),r=am("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=YP(i.toString());Bb(n,o,()=>o(n.currentUser)),Ub(n,c=>o(c))}}const s=im("auth");return s&&yb(n,`http://${s}`),n}function XP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}cb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",XP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zP("Browser");const ZP={apiKey:"AIzaSyAOsXbvpAly4OLF_kMacXjTEI--bf3j-H4",authDomain:"travel-record-ad70f.firebaseapp.com",projectId:"travel-record-ad70f",storageBucket:"travel-record-ad70f.firebasestorage.app",messagingSenderId:"173413776707",appId:"1:173413776707:web:95b52090893e4f03e083f6"},A_=fm(ZP),wc=gS(A_),Wi=JP(A_),eC={class:"container"},tC={class:"day-tab"},nC=["onClick"],rC={key:0,class:"loading"},sC={key:1,class:"error-message"},iC={key:2,class:"daily-plan"},oC={class:"day-content"},aC={class:"record-section"},cC={class:"record-section"},lC={class:"record-section"},uC={class:"record-section"},hC=["onUpdate:modelValue"],fC=["onUpdate:modelValue"],dC=["onClick"],pC={__name:"Home",setup(t){const n=Be((()=>{const _=new Date("2025-12-19"),b=new Date("2025-12-27"),N=[];let D=new Date(_);for(;D<=b;)N.push(D.toISOString().split("T")[0]),D.setDate(D.getDate()+1);return N})()),r=Be("2025-12-19"),s=Be({hotel:"",breakfast:"",lunch:"",dinner:"",attractions:"",timeSlots:[]}),i=Be(!1),o=Be(""),c=_=>{const b=new Date(_);return`${b.getMonth()+1}月${b.getDate()}日`},l=_=>{r.value=_,h()};Rl(()=>{if(!wc){o.value="Firebase初始化失败，请检查配置";return}h()});const h=async()=>{i.value=!0,o.value="";try{if(!r.value)throw new Error("日期格式不正确");const _=fd(wc,"travelRecords",r.value),b=await NS(_);b.exists()?s.value={...b.data()}:s.value={hotel:"",breakfast:"",lunch:"",dinner:"",attractions:"",timeSlots:[]}}catch(_){console.error("加载失败：",_),o.value=`加载行程失败: ${_.message}`}finally{i.value=!1}},f=()=>{s.value.timeSlots.push({time:"08:00",content:""})},p=_=>{s.value.timeSlots.splice(_,1)},m=async()=>{i.value=!0,o.value="";try{if(!r.value)throw new Error("请选择日期");const _=fd(wc,"travelRecords",r.value);await DS(_,s.value,{merge:!0}),alert("今日记录已成功保存到Firebase！")}catch(_){console.error("保存失败：",_),o.value=`保存行程失败: ${_.message}`}finally{i.value=!1}};return(_,b)=>(Fe(),qe("div",eC,[b[10]||(b[10]=bh('<h1>行程记录管理</h1><div class="flight-info"><h2>航班信息</h2><div class="flight-item"><strong>去程：</strong> 2025年12月19日 星期五<br> 台北桃园国际机场（Terminal 2）10:00 出发 → 巴厘岛登巴萨国际机场（Terminal I - 国际航站楼）15:30 到达<br> 航班号：BR 255，飞行时长：05:30，机型：空客A330-300 </div><div class="flight-item"><strong>返程：</strong> 2025年12月27日 星期六<br> 巴厘岛登巴萨国际机场（Terminal I - 国际航站楼）16:40 出发 → 台北桃园国际机场（Terminal 2）21:45 到达<br> 航班号：BR 256，飞行时长：05:05，机型：空客A330-300 </div></div>',2)),ae("div",tC,[(Fe(!0),qe(Wt,null,yh(n.value,N=>(Fe(),qe("button",{key:N,class:Di(["day-btn",{active:r.value===N}]),onClick:D=>l(N)},on(c(N)),11,nC))),128))]),i.value?(Fe(),qe("div",rC,"加载中...")):Nr("",!0),o.value?(Fe(),qe("div",sC,on(o.value),1)):i.value?Nr("",!0):(Fe(),qe("div",iC,[ae("div",oC,[ae("div",aC,[b[5]||(b[5]=ae("h3",null,"酒店记录",-1)),xt(ae("input",{type:"text",class:"record-input",placeholder:"请输入今日入住酒店名称及地址","onUpdate:modelValue":b[0]||(b[0]=N=>s.value.hotel=N)},null,512),[[Gt,s.value.hotel]])]),ae("div",cC,[b[6]||(b[6]=ae("h3",null,"三餐记录",-1)),xt(ae("input",{type:"text",class:"record-input",placeholder:"早餐：","onUpdate:modelValue":b[1]||(b[1]=N=>s.value.breakfast=N)},null,512),[[Gt,s.value.breakfast]]),xt(ae("input",{type:"text",class:"record-input",placeholder:"午餐：","onUpdate:modelValue":b[2]||(b[2]=N=>s.value.lunch=N)},null,512),[[Gt,s.value.lunch]]),xt(ae("input",{type:"text",class:"record-input",placeholder:"晚餐：","onUpdate:modelValue":b[3]||(b[3]=N=>s.value.dinner=N)},null,512),[[Gt,s.value.dinner]])]),ae("div",lC,[b[7]||(b[7]=ae("h3",null,"景点记录",-1)),xt(ae("input",{type:"text",class:"record-input",placeholder:"今日游览景点：","onUpdate:modelValue":b[4]||(b[4]=N=>s.value.attractions=N)},null,512),[[Gt,s.value.attractions]])]),ae("div",uC,[b[9]||(b[9]=ae("h3",null,"行程安排（按时间段）",-1)),(Fe(!0),qe(Wt,null,yh(s.value.timeSlots,(N,D)=>(Fe(),qe("div",{key:D,class:"time-slot"},[xt(ae("select",{name:"time","onUpdate:modelValue":H=>N.time=H,class:"time-select"},[...b[8]||(b[8]=[bh('<option value="">选择时间</option><option value="08:00">08:00</option><option value="09:00">09:00</option><option value="10:00">10:00</option><option value="11:00">11:00</option><option value="12:00">12:00</option><option value="13:00">13:00</option><option value="14:00">14:00</option><option value="15:00">15:00</option><option value="16:00">16:00</option><option value="17:00">17:00</option><option value="18:00">18:00</option><option value="19:00">19:00</option><option value="20:00">20:00</option>',14)])],8,hC),[[dv,N.time]]),xt(ae("input",{type:"text",placeholder:"请输入行程内容（如：前往某景点、参加某活动等）","onUpdate:modelValue":H=>N.content=H},null,8,fC),[[Gt,N.content]]),ae("button",{class:"delete-btn",onClick:H=>p(D)}," 删除 ",8,dC)]))),128)),ae("button",{class:"add-slot-btn",onClick:f}," 添加时间段行程 ")]),ae("button",{class:"save-record-btn",onClick:m}," 保存今日记录 ")])]))]))}},mC={url:`${window.location.origin}/set-password`,handleCodeInApp:!0},gC=async t=>{try{return await Ob(Wi,t,mC),{success:!0,message:"重置密码邮件已发送，请查收邮箱中的链接"}}catch(e){return console.error("发送邮件失败:",e),{success:!1,message:`发送失败：${e.message}`}}},R_=()=>new URLSearchParams(window.location.search).get("oobCode"),_C=async()=>{const t=R_();if(!t)return{success:!1,message:"缺少验证代码（oobCode）"};try{return{success:!0,email:await Lb(Wi,t)}}catch(e){return console.error("链接验证失败:",e),{success:!1,message:`链接无效或已过期：${e.message}`}}},yC=async(t,e)=>{try{return await xb(Wi,t,e),{success:!0,message:"密码设置成功，请使用新密码登录"}}catch(n){return console.error("设置密码失败:",n),{success:!1,message:`设置失败：${n.message}`}}},EC=async(t,e)=>{try{return await Fb(Wi,t,e),{success:!0,message:"登录成功"}}catch(n){return console.error("登录失败:",n),{success:!1,message:`登录失败：${n.message}`}}},vC=()=>Wi.currentUser,Tu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},TC={class:"login-container"},IC={class:"login-form"},wC={key:0,class:"message"},AC={__name:"Login",setup(t){const e=Be(""),n=Be(""),r=Be(""),s=tm(),i=async()=>{if(!e.value||!n.value){r.value="请输入邮箱和密码";return}const c=await EC(e.value,n.value);c.success?(r.value="登录成功，正在跳转...",setTimeout(()=>s.push("/home"),1e3)):r.value=c.message},o=()=>{s.push("/register")};return(c,l)=>(Fe(),qe("div",TC,[l[3]||(l[3]=ae("h2",null,"行程记录管理 - 登录",-1)),ae("div",IC,[xt(ae("input",{type:"email","onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h),placeholder:"请输入你的邮箱",class:"email-input"},null,512),[[Gt,e.value]]),xt(ae("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=h=>n.value=h),placeholder:"请输入密码",class:"email-input"},null,512),[[Gt,n.value]]),ae("button",{onClick:i,class:"send-btn"},"登录"),ae("div",{class:"register-link"},[l[2]||(l[2]=Lp(" 还没有账号？",-1)),ae("a",{onClick:o},"点击注册")]),r.value?(Fe(),qe("p",wC,on(r.value),1)):Nr("",!0)])]))}},RC=Tu(AC,[["__scopeId","data-v-52d32e15"]]),SC={class:"register-container"},bC={class:"register-form"},PC=["disabled"],CC=["disabled"],NC={__name:"Register",setup(t){const e=Be(""),n=Be(""),r=Be(!1),s=Be(!1),i=Mt(()=>{const c=e.value;return c?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c):!1}),o=async()=>{if(!e.value){r.value=!0,n.value="请输入邮箱";return}if(!i.value){r.value=!0,n.value="请输入有效的邮箱地址";return}s.value=!0,n.value="",r.value=!1;try{const c=await gC(e.value);c!=null&&c.success?(r.value=!1,n.value=c.message||"设置密码邮件已发送，请前往邮箱完成设置"):(r.value=!0,n.value=(c==null?void 0:c.message)||"发送失败，请稍后再试")}catch(c){r.value=!0;const l=(c==null?void 0:c.code)||"";l==="auth/operation-not-allowed"?n.value="当前方式未启用，请联系管理员在 Firebase 控制台开启 Email/Password 登录":l==="auth/invalid-email"?n.value="邮箱格式不正确":l==="auth/user-not-found"?n.value="用户不存在，但已尝试发送设置密码邮件，请检查邮箱":l==="auth/too-many-requests"?n.value="请求过于频繁，请稍后再试":n.value=`发送失败：${(c==null?void 0:c.message)||"未知错误"}`}finally{s.value=!1}};return(c,l)=>(Fe(),qe("div",SC,[l[2]||(l[2]=ae("h2",null,"行程记录管理 - 注册",-1)),ae("div",bC,[xt(ae("input",{type:"email","onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h),placeholder:"请输入你的邮箱",class:"email-input",disabled:s.value,onKeyup:mv(o,["enter"])},null,40,PC),[[Gt,e.value,void 0,{trim:!0}]]),ae("button",{class:"send-btn",disabled:s.value||!i.value,onClick:o},on(s.value?"发送中…":"发送设置密码邮件"),9,CC),n.value?(Fe(),qe("p",{key:0,class:Di(["message",{error:r.value,success:!r.value}])},on(n.value),3)):Nr("",!0),l[1]||(l[1]=ae("ul",{class:"tips"},[ae("li",null,"我们会给该邮箱发送一封“设置密码”邮件。"),ae("li",null,"请在新邮件中点击链接完成密码设置后再登录。"),ae("li",null,"若未收到，请检查垃圾邮箱或稍后重试。")],-1))])]))}},VC=Tu(NC,[["__scopeId","data-v-8d97e6e9"]]),DC={class:"set-password-container"},kC={key:0,class:"loading"},OC={key:1,class:"password-form"},xC={key:0,class:"tip"},MC={class:"form-group"},LC={class:"form-group"},FC={key:0,class:"error-message"},UC={key:1,class:"message"},BC={key:2,class:"error"},jC={__name:"SetPassword",setup(t){const e=Be(""),n=Be(""),r=Be(""),s=Be(""),i=Be(!0),o=Be(!1),c=Be(""),l=tm(),h=R_();Rl(async()=>{if(!h){s.value="链接无效，未找到验证代码",i.value=!1;return}const m=await _C();i.value=!1,m.success?(o.value=!0,m.email&&(c.value=m.email)):s.value=m.message});const f=()=>e.value.length<6?(r.value="密码长度至少6位",!1):e.value!==n.value?(r.value="两次输入的密码不一致",!1):(r.value="",!0),p=async()=>{if(!f())return;const m=await yC(h,e.value);m.success?(s.value=m.message,setTimeout(()=>l.push("/"),3e3)):s.value=m.message};return(m,_)=>(Fe(),qe("div",DC,[_[5]||(_[5]=ae("h2",null,"设置新密码",-1)),i.value?(Fe(),qe("div",kC,"验证链接中...")):o.value?(Fe(),qe("div",OC,[c.value?(Fe(),qe("div",xC,"为账户 "+on(c.value)+" 设置新密码",1)):Nr("",!0),ae("div",MC,[_[3]||(_[3]=ae("label",null,"新密码",-1)),xt(ae("input",{type:"password","onUpdate:modelValue":_[0]||(_[0]=b=>e.value=b),placeholder:"请输入至少6位密码",class:"password-input"},null,512),[[Gt,e.value]])]),ae("div",LC,[_[4]||(_[4]=ae("label",null,"确认新密码",-1)),xt(ae("input",{type:"password","onUpdate:modelValue":_[1]||(_[1]=b=>n.value=b),placeholder:"请再次输入密码",class:"password-input"},null,512),[[Gt,n.value]]),r.value?(Fe(),qe("p",FC,on(r.value),1)):Nr("",!0)]),ae("button",{onClick:p,class:"set-btn"},"设置密码"),s.value?(Fe(),qe("p",UC,on(s.value),1)):Nr("",!0)])):(Fe(),qe("div",BC,[ae("p",null,on(s.value||"无效或已过期的重置链接，请重新获取"),1),ae("button",{onClick:_[2]||(_[2]=b=>m.$router.push("/")),class:"back-btn"},"返回登录页")]))]))}},$C=Tu(jC,[["__scopeId","data-v-33319299"]]),HC=[{path:"/",name:"Login",component:RC},{path:"/home",name:"Home",component:pC,meta:{requiresAuth:!0}},{path:"/set-password",name:"SetPassword",component:$C},{path:"/register",name:"Register",component:VC}],S_=PT({history:oT("/"),routes:HC});S_.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?vC()?n():n("/"):n()});const qC={id:"app"},WC={__name:"App",setup(t){return(e,n)=>{const r=Zy("router-view");return Fe(),qe("div",qC,[It(r)])}}},Iu=yv(WC);Iu.use(Iv());Iu.use(S_);Iu.mount("#app");
