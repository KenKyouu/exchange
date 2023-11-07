(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},wt=[],Ae=()=>{},ts=()=>!1,ns=/^on[^a-z]/,Un=e=>ns.test(e),Wr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rs=Object.prototype.hasOwnProperty,$=(e,t)=>rs.call(e,t),R=Array.isArray,zt=e=>Bn(e)==="[object Map]",as=e=>Bn(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",$n=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Ri=e=>(Q(e)||L(e))&&L(e.then)&&L(e.catch),is=Object.prototype.toString,Bn=e=>is.call(e),os=e=>Bn(e).slice(8,-1),ss=e=>Bn(e)==="[object Object]",Vr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ls=/-(\w)/g,Ne=Hn(e=>e.replace(ls,(t,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,It=Hn(e=>e.replace(fs,"-$1").toLowerCase()),Yn=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Hn(e=>e?`on${Yn(e)}`:""),Ot=(e,t)=>!Object.is(e,t),On=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const br=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?ms(r):qr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(re(e)||Q(e))return e}const cs=/;(?![^(]*\))/g,us=/:([^]+)/,ds=/\/\*[^]*?\*\//g;function ms(e){const t={};return e.replace(ds,"").split(cs).forEach(n=>{if(n){const r=n.split(us);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hs=Yr(ps);function Li(e){return!!e||e===""}let xe;class gs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function vs(e,t=xe){t&&t.active&&t.effects.push(e)}function bs(){return xe}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&Ze)>0,Di=e=>(e.n&Ze)>0,ys=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},xs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ji(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},yr=new WeakMap;let Lt=0,Ze=1;const xr=30;let we;const ut=Symbol(""),wr=Symbol("");class Zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vs(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Xe=!0,Ze=1<<++Lt,Lt<=xr?ys(this):Ta(this),this.fn()}finally{Lt<=xr&&xs(this),Ze=1<<--Lt,we=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const zi=[];function Tt(){zi.push(Xe),Xe=!1}function St(){const e=zi.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&we){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),Ui(a)}}function Ui(e,t){let n=!1;Lt<=xr?Di(e)||(e.n|=Ze,n=!ji(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function Ue(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!$n(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),zt(e)&&s.push(o.get(wr)));break;case"delete":R(e)||(s.push(o.get(ut)),zt(e)&&s.push(o.get(wr)));break;case"set":zt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&_r(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);_r(Jr(l))}}function _r(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Sa(r);for(const r of n)r.computed||Sa(r)}function Sa(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ws=Yr("__proto__,__v_isRef,__isVue"),$i=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($n)),Na=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=B(this)[t].apply(this,n);return St(),r}}),e}function ks(e){const t=B(this);return me(t,"has",e),t.hasOwnProperty(e)}class Bi{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Ls:Ki:i?Wi:Yi).get(t))return t;const o=R(t);if(!a){if(o&&$(Na,n))return Reflect.get(Na,n,r);if(n==="hasOwnProperty")return ks}const s=Reflect.get(t,n,r);return($n(n)?$i.has(n):ws(n))||(a||me(t,"get",n),i)?s:fe(s)?o&&Vr(n)?s:s.value:Q(s)?a?Vi(s):ea(s):s}}class Hi extends Bi{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Yt(i)&&fe(i)&&!fe(r))return!1;if(!this._shallow&&(!kr(r)&&!Yt(r)&&(i=B(i),r=B(r)),!R(t)&&fe(i)&&!fe(r)))return i.value=r,!0;const o=R(t)&&Vr(n)?Number(n)<t.length:$(t,n),s=Reflect.set(t,n,r,a);return t===B(a)&&(o?Ot(r,i)&&Ue(t,"set",n,r):Ue(t,"add",n,r)),s}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ue(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!$n(n)||!$i.has(n))&&me(t,"has",n),r}ownKeys(t){return me(t,"iterate",R(t)?"length":ut),Reflect.ownKeys(t)}}class As extends Bi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Os=new Hi,Es=new As,Ps=new Hi(!0),Qr=e=>e,Wn=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(Ot(t,i)&&me(a,"get",t),me(a,"get",i));const{has:o}=Wn(a),s=r?Qr:n?ra:na;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(Ot(e,a)&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",ut),Reflect.get(e,"size",e)}function Ma(e){e=B(e);const t=B(this);return Wn(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function Fa(e,t){t=B(t);const n=B(this),{has:r,get:a}=Wn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Ot(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function Ra(e){const t=B(this),{has:n,get:r}=Wn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function La(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Qr:e?ra:na;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function mn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=zt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Qr:t?ra:na;return!t&&me(i,"iterate",l?wr:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Cs(){const e={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:Ma,set:Fa,delete:Ra,clear:La,forEach:dn(!1,!1)},t={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:Ma,set:Fa,delete:Ra,clear:La,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),t[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[e,n,t,r]}const[Is,Ts,Ss,Ns]=Cs();function Gr(e,t){const n=t?e?Ns:Ss:e?Ts:Is;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ms={get:Gr(!1,!1)},Fs={get:Gr(!1,!0)},Rs={get:Gr(!0,!1)},Yi=new WeakMap,Wi=new WeakMap,Ki=new WeakMap,Ls=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ds(e){return e.__v_skip||!Object.isExtensible(e)?0:js(os(e))}function ea(e){return Yt(e)?e:ta(e,!1,Os,Ms,Yi)}function zs(e){return ta(e,!1,Ps,Fs,Wi)}function Vi(e){return ta(e,!0,Es,Rs,Ki)}function ta(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ds(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function _t(e){return Yt(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function qi(e){return _t(e)||Yt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Xi(e){return Nn(e,"__v_skip",!0),e}const na=e=>Q(e)?ea(e):e,ra=e=>Q(e)?Vi(e):e;function Us(e){Xe&&we&&(e=B(e),Ui(e.dep||(e.dep=Jr())))}function $s(e,t){e=B(e);const n=e.dep;n&&_r(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Bs(e){return fe(e)?e.value:e}const Hs={get:(e,t,n)=>Bs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ji(e){return _t(e)?e:new Proxy(e,Hs)}class Ys{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,$s(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Us(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ws(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Ys(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Kn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Je(e,t,n,r);return i&&Ri(i)&&i.catch(o=>{Kn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Kn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}Ks(e,n,a,r)}function Ks(e,t,n,r=!0){console.error(e)}let Wt=!1,Ar=!1;const oe=[];let Te=0;const kt=[];let je=null,ot=0;const Zi=Promise.resolve();let aa=null;function Vs(e){const t=aa||Zi;return e?t.then(this?e.bind(this):e):t}function qs(e){let t=Te+1,n=oe.length;for(;t<n;){const r=t+n>>>1,a=oe[r],i=Kt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function ia(e){(!oe.length||!oe.includes(e,Wt&&e.allowRecurse?Te+1:Te))&&(e.id==null?oe.push(e):oe.splice(qs(e.id),0,e),Qi())}function Qi(){!Wt&&!Ar&&(Ar=!0,aa=Zi.then(eo))}function Xs(e){const t=oe.indexOf(e);t>Te&&oe.splice(t,1)}function Js(e){R(e)?kt.push(...e):(!je||!je.includes(e,e.allowRecurse?ot+1:ot))&&kt.push(e),Qi()}function ja(e,t=Wt?Te+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function Gi(e){if(kt.length){const t=[...new Set(kt)];if(kt.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Kt(n)-Kt(r)),ot=0;ot<je.length;ot++)je[ot]();je=null,ot=0}}const Kt=e=>e.id==null?1/0:e.id,Zs=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eo(e){Ar=!1,Wt=!0,oe.sort(Zs);const t=Ae;try{for(Te=0;Te<oe.length;Te++){const n=oe[Te];n&&n.active!==!1&&Je(n,null,14)}}finally{Te=0,oe.length=0,Gi(),Wt=!1,aa=null,(oe.length||kt.length)&&eo()}}function Qs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(_=>re(_)?_.trim():_)),m&&(a=n.map(vr))}let s,l=r[s=ir(t)]||r[s=ir(Ne(t))];!l&&i&&(l=r[s=ir(It(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function to(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=to(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Q(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ne(o,i),Q(e)&&r.set(e,o),o)}function Vn(e,t){return!e||!Un(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,It(t))||$(e,t))}let ve=null,no=null;function Mn(e){const t=ve;return ve=e,no=e&&e.type.__scopeId||null,t}function Gs(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&qa(-1);const i=Mn(t);let o;try{o=e(...a)}finally{Mn(i),r._d&&qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:_,ctx:j,inheritAttrs:N}=e;let U,k;const O=Mn(e);try{if(n.shapeFlag&4){const I=a||r;U=Ie(d.call(I,I,m,i,_,v,j)),k=l}else{const I=t;U=Ie(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:el(l)}}catch(I){$t.length=0,Kn(I,e,1),U=de(Vt)}let M=U;if(k&&N!==!1){const I=Object.keys(k),{shapeFlag:H}=M;I.length&&H&7&&(o&&I.some(Wr)&&(k=tl(k,o)),M=Et(M,k))}return n.dirs&&(M=Et(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),U=M,Mn(O),U}const el=e=>{let t;for(const n in e)(n==="class"||n==="style"||Un(n))&&((t||(t={}))[n]=e[n]);return t},tl=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function nl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Vn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Da(r,o,c):!0:!!o;return!1}function Da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Vn(n,i))return!0}return!1}function rl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ro="components";function al(e,t){return ol(ro,e,!0,t)||e}const il=Symbol.for("v-ndc");function ol(e,t,n=!0,r=!1){const a=ve||te;if(a){const i=a.type;if(e===ro){const s=nf(i,!1);if(s&&(s===t||s===Ne(t)||s===Yn(Ne(t))))return i}const o=za(a[e]||i[e],t)||za(a.appContext[e],t);return!o&&r?i:o}}function za(e,t){return e&&(e[t]||e[Ne(t)]||e[Yn(Ne(t))])}const sl=e=>e.__isSuspense;function ll(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Js(e)}const pn={};function En(e,t,n){return ao(e,t,n)}function ao(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=bs()===((s=te)==null?void 0:s.scope)?te:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=kr(e)):_t(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(I=>_t(I)||kr(I)),c=()=>e.map(I=>{if(fe(I))return I.value;if(_t(I))return lt(I);if(L(I))return Je(I,l,2)})):L(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Oe(e,l,3,[_])}:c=Ae,t&&r){const I=c;c=()=>lt(I())}let v,_=I=>{v=O.onStop=()=>{Je(I,l,4)}},j;if(Xt)if(_=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const I=sf();j=I.__watcherHandles||(I.__watcherHandles=[])}else return Ae;let N=m?new Array(e.length).fill(pn):pn;const U=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((H,ae)=>Ot(H,N[ae])):Ot(I,N)))&&(v&&v(),Oe(t,l,3,[I,N===pn?void 0:m&&N[0]===pn?[]:N,_]),N=I)}else O.run()};U.allowRecurse=!!t;let k;a==="sync"?k=U:a==="post"?k=()=>ue(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),k=()=>ia(U));const O=new Zr(c,k);t?n?U():N=O.run():a==="post"?ue(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&Kr(l.scope.effects,O)};return j&&j.push(M),M}function fl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?io(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;Pt(this);const s=ao(a,i.bind(r),n);return o?Pt(o):dt(),s}function io(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))lt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(as(e)||zt(e))e.forEach(n=>{lt(n,t)});else if(ss(e))for(const n in e)lt(e[n],t);return e}function Re(e,t){const n=ve;if(n===null)return e;const r=Zn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=V]=t[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Oe(l,n,8,[e.el,s,e,t]),St())}}/*! #__NO_SIDE_EFFECTS__ */function cl(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Pn=e=>!!e.type.__asyncLoader,oo=e=>e.type.__isKeepAlive;function ul(e,t){so(e,"a",t)}function dl(e,t){so(e,"da",t)}function so(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)oo(a.parent.vnode)&&ml(r,t,n,a),a=a.parent}}function ml(e,t,n,r){const a=qn(t,e,r,!0);lo(()=>{Kr(r[t],a)},n)}function qn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt(),Pt(n);const s=Oe(t,n,e,o);return dt(),St(),s});return r?a.unshift(i):a.push(i),i}}const Ye=e=>(t,n=te)=>(!Xt||e==="sp")&&qn(e,(...r)=>t(...r),n),pl=Ye("bm"),hl=Ye("m"),gl=Ye("bu"),vl=Ye("u"),bl=Ye("bum"),lo=Ye("um"),yl=Ye("sp"),xl=Ye("rtg"),wl=Ye("rtc");function _l(e,t=te){qn("ec",e,t)}const Or=e=>e?wo(e)?Zn(e)||e.proxy:Or(e.parent):null,Ut=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ia(e.update)),$nextTick:e=>e.n||(e.n=Vs.bind(e.proxy)),$watch:e=>fl.bind(e)}),sr=(e,t)=>e!==V&&!e.__isScriptSetup&&$(e,t),kl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return o[t]=1,r[t];if(a!==V&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==V&&$(n,t))return o[t]=4,n[t];Er&&(o[t]=0)}}const d=Ut[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==V&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&$(e,o)||sr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ut,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ua(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Er=!0;function Al(e){const t=oa(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:j,activated:N,deactivated:U,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:I,render:H,renderTracked:ae,renderTriggered:ie,errorCaptured:be,serverPrefetch:ge,expose:Me,inheritAttrs:Mt,components:an,directives:on,filters:nr}=t;if(c&&Ol(c,r,null),o)for(const J in o){const W=o[J];L(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);Q(J)&&(e.data=ea(J))}if(Er=!0,i)for(const J in i){const W=i[J],tt=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ae,sn=!L(W)&&L(W.set)?W.set.bind(n):Ae,nt=it({get:tt,set:sn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ee=>nt.value=Ee})}if(s)for(const J in s)fo(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{Sl(W,J[W])})}d&&$a(d,e,"c");function se(J,W){R(W)?W.forEach(tt=>J(tt.bind(n))):W&&J(W.bind(n))}if(se(pl,m),se(hl,v),se(gl,_),se(vl,j),se(ul,N),se(dl,U),se(_l,be),se(wl,ae),se(xl,ie),se(bl,O),se(lo,I),se(yl,ge),R(Me))if(Me.length){const J=e.exposed||(e.exposed={});Me.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:tt=>n[W]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Ae&&(e.render=H),Mt!=null&&(e.inheritAttrs=Mt),an&&(e.components=an),on&&(e.directives=on)}function Ol(e,t,n=Ae){R(e)&&(e=Pr(e));for(const r in e){const a=e[r];let i;Q(a)?"default"in a?i=Cn(a.from||r,a.default,!0):i=Cn(a.from||r):i=Cn(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function $a(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fo(e,t,n,r){const a=r.includes(".")?io(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(Q(e))if(R(e))e.forEach(i=>fo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,t,o)),Q(t)&&i.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Fn(e,i,n,!0),a&&a.forEach(o=>Fn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=El[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const El={data:Ba,props:Ha,emits:Ha,methods:jt,computed:jt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:jt,directives:jt,watch:Cl,provide:Ba,inject:Pl};function Ba(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Pl(e,t){return jt(Pr(e),Pr(t))}function Pr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ne(Object.create(null),e,t):t}function Ha(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ne(Object.create(null),Ua(e),Ua(t??{})):t}function Cl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function co(){return{app:null,config:{isNativeTag:ts,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Il=0;function Tl(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!Q(a)&&(a=null);const i=co(),o=new WeakSet;let s=!1;const l=i.app={_uid:Il++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:lf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=de(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,Zn(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Rn=l;try{return c()}finally{Rn=null}}};return l}}let Rn=null;function Sl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Cn(e,t,n=!1){const r=te||ve;if(r||Rn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Nl(e,t,n,r=!1){const a={},i={};Nn(i,Jn,1),e.propsDefaults=Object.create(null),uo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:zs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ml(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Vn(e.emitsOptions,v))continue;const _=t[v];if(l)if($(i,v))_!==i[v]&&(i[v]=_,c=!0);else{const j=Ne(v);a[j]=Cr(l,s,j,_,e,!1)}else _!==i[v]&&(i[v]=_,c=!0)}}}else{uo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=It(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&Ue(e,"set","$attrs")}function uo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const c=t[l];let d;a&&$(a,d=Ne(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Vn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,c[m],e,!$(c,m))}}return o}function Cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Pt(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,_]=mo(m,t,!0);ne(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Q(e)&&r.set(e,wt),wt;if(R(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Ya(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Ne(d);if(Ya(m)){const v=i[d],_=o[m]=R(v)||L(v)?{type:v}:ne({},v);if(_){const j=Va(Boolean,_.type),N=Va(String,_.type);_[0]=j>-1,_[1]=N<0||j<N,(j>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return Q(e)&&r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Wa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Wa(e)===Wa(t)}function Va(e,t){return R(t)?t.findIndex(n=>Ka(n,e)):L(t)&&Ka(t,e)?0:-1}const po=e=>e[0]==="_"||e==="$stable",sa=e=>R(e)?e.map(Ie):[Ie(e)],Fl=(e,t,n)=>{if(t._n)return t;const r=Gs((...a)=>sa(t(...a)),n);return r._c=!1,r},ho=(e,t,n)=>{const r=e._ctx;for(const a in e){if(po(a))continue;const i=e[a];if(L(i))t[a]=Fl(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},go=(e,t)=>{const n=sa(t);e.slots.default=()=>n},Rl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Nn(t,"_",n)):ho(t,e.slots={})}else e.slots={},t&&go(e,t);Nn(e.slots,Jn,1)},Ll=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ho(t,a)),o=t}else t&&(go(e,t),o={default:1});if(i)for(const s in a)!po(s)&&o[s]==null&&delete a[s]};function Ir(e,t,n,r,a=!1){if(R(e)){e.forEach((v,_)=>Ir(v,t&&(R(t)?t[_]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?Zn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))Je(l,s,12,[o,d]);else{const v=re(l),_=fe(l);if(v||_){const j=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Kr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,ue(j,n)):j()}}}const ue=ll;function jl(e){return Dl(e)}function Dl(e,t){const n=br();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=Ae,insertStaticContent:j}=e,N=(f,u,p,h=null,g=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Rt(f,u)&&(h=ln(f),Ee(f,g,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case Xn:U(f,u,p,h);break;case Vt:k(f,u,p,h);break;case lr:f==null&&O(u,p,h,A);break;case De:an(f,u,p,h,g,x,A,y,w);break;default:P&1?H(f,u,p,h,g,x,A,y,w):P&6?on(f,u,p,h,g,x,A,y,w):(P&64||P&128)&&b.process(f,u,p,h,g,x,A,y,w,ht)}T!=null&&g&&Ir(T,f&&f.ref,x,u||f,!u)},U=(f,u,p,h)=>{if(f==null)r(u.el=s(u.children),p,h);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,p,h)=>{f==null?r(u.el=l(u.children||""),p,h):u.el=f.el},O=(f,u,p,h)=>{[f.el,f.anchor]=j(f.children,u,p,h,f.el,f.anchor)},M=({el:f,anchor:u},p,h)=>{let g;for(;f&&f!==u;)g=v(f),r(f,p,h),f=g;r(u,p,h)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,h,g,x,A,y,w)=>{A=A||u.type==="svg",f==null?ae(u,p,h,g,x,A,y,w):ge(f,u,g,x,A,y,w)},ae=(f,u,p,h,g,x,A,y)=>{let w,b;const{type:T,props:P,shapeFlag:S,transition:F,dirs:D}=f;if(w=f.el=o(f.type,x,P&&P.is,P),S&8?d(w,f.children):S&16&&be(f.children,w,null,h,g,x&&T!=="foreignObject",A,y),D&&rt(f,null,h,"created"),ie(w,f,f.scopeId,A,h),P){for(const Y in P)Y!=="value"&&!An(Y)&&i(w,Y,null,P[Y],x,f.children,h,g,Fe);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ce(b,h,f)}D&&rt(f,null,h,"beforeMount");const K=zl(g,F);K&&F.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||K||D)&&ue(()=>{b&&Ce(b,h,f),K&&F.enter(w),D&&rt(f,null,h,"mounted")},g)},ie=(f,u,p,h,g)=>{if(p&&_(f,p),h)for(let x=0;x<h.length;x++)_(f,h[x]);if(g){let x=g.subTree;if(u===x){const A=g.vnode;ie(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},be=(f,u,p,h,g,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=y?qe(f[b]):Ie(f[b]);N(null,T,u,p,h,g,x,A,y)}},ge=(f,u,p,h,g,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=f.patchFlag&16;const P=f.props||V,S=u.props||V;let F;p&&at(p,!1),(F=S.onVnodeBeforeUpdate)&&Ce(F,p,u,f),T&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const D=g&&u.type!=="foreignObject";if(b?Me(f.dynamicChildren,b,y,p,h,D,x):A||W(f,u,y,null,p,h,D,x,!1),w>0){if(w&16)Mt(y,u,P,S,p,h,g);else if(w&2&&P.class!==S.class&&i(y,"class",null,S.class,g),w&4&&i(y,"style",P.style,S.style,g),w&8){const K=u.dynamicProps;for(let Y=0;Y<K.length;Y++){const G=K[Y],ye=P[G],gt=S[G];(gt!==ye||G==="value")&&i(y,G,ye,gt,g,f.children,p,h,Fe)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Mt(y,u,P,S,p,h,g);((F=S.onVnodeUpdated)||T)&&ue(()=>{F&&Ce(F,p,u,f),T&&rt(u,f,p,"updated")},h)},Me=(f,u,p,h,g,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],T=w.el&&(w.type===De||!Rt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,T,null,h,g,x,A,!0)}},Mt=(f,u,p,h,g,x,A)=>{if(p!==h){if(p!==V)for(const y in p)!An(y)&&!(y in h)&&i(f,y,p[y],null,A,u.children,g,x,Fe);for(const y in h){if(An(y))continue;const w=h[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,g,x,Fe)}"value"in h&&i(f,"value",p.value,h.value)}},an=(f,u,p,h,g,x,A,y,w)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:S,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,h),r(T,p,h),be(u.children,p,T,g,x,A,y,w)):P>0&&P&64&&S&&f.dynamicChildren?(Me(f.dynamicChildren,S,p,g,x,A,y),(u.key!=null||g&&u===g.subTree)&&vo(f,u,!0)):W(f,u,p,T,g,x,A,y,w)},on=(f,u,p,h,g,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,h,A,w):nr(u,p,h,g,x,A,w):ka(f,u,w)},nr=(f,u,p,h,g,x,A)=>{const y=f.component=Zl(f,h,g);if(oo(f)&&(y.ctx.renderer=ht),Ql(y),y.asyncDep){if(g&&g.registerDep(y,se),!f.el){const w=y.subTree=de(Vt);k(null,w,u,p)}return}se(y,f,u,p,g,x,A)},ka=(f,u,p)=>{const h=u.component=f.component;if(nl(f,u,p))if(h.asyncDep&&!h.asyncResolved){J(h,u,p);return}else h.next=u,Xs(h.update),h.update();else u.el=f.el,h.vnode=u},se=(f,u,p,h,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:S,parent:F,vnode:D}=f,K=T,Y;at(f,!1),T?(T.el=D.el,J(f,T,A)):T=D,P&&On(P),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Ce(Y,F,T,D),at(f,!0);const G=or(f),ye=f.subTree;f.subTree=G,N(ye,G,m(ye.el),ln(ye),f,g,x),T.el=G.el,K===null&&rl(f,G.el),S&&ue(S,g),(Y=T.props&&T.props.onVnodeUpdated)&&ue(()=>Ce(Y,F,T,D),g)}else{let T;const{el:P,props:S}=u,{bm:F,m:D,parent:K}=f,Y=Pn(u);if(at(f,!1),F&&On(F),!Y&&(T=S&&S.onVnodeBeforeMount)&&Ce(T,K,u),at(f,!0),P&&ar){const G=()=>{f.subTree=or(f),ar(P,f.subTree,f,g,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&G()):G()}else{const G=f.subTree=or(f);N(null,G,p,h,f,g,x),u.el=G.el}if(D&&ue(D,g),!Y&&(T=S&&S.onVnodeMounted)){const G=u;ue(()=>Ce(T,K,G),g)}(u.shapeFlag&256||K&&Pn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&ue(f.a,g),f.isMounted=!0,u=p=h=null}},w=f.effect=new Zr(y,()=>ia(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,at(f,!0),b()},J=(f,u,p)=>{u.component=f;const h=f.vnode.props;f.vnode=u,f.next=null,Ml(f,u.props,h,p),Ll(f,u.children,p),Tt(),ja(),St()},W=(f,u,p,h,g,x,A,y,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:S,shapeFlag:F}=u;if(S>0){if(S&128){sn(b,P,p,h,g,x,A,y,w);return}else if(S&256){tt(b,P,p,h,g,x,A,y,w);return}}F&8?(T&16&&Fe(b,g,x),P!==b&&d(p,P)):T&16?F&16?sn(b,P,p,h,g,x,A,y,w):Fe(b,g,x,!0):(T&8&&d(p,""),F&16&&be(P,p,h,g,x,A,y,w))},tt=(f,u,p,h,g,x,A,y,w)=>{f=f||wt,u=u||wt;const b=f.length,T=u.length,P=Math.min(b,T);let S;for(S=0;S<P;S++){const F=u[S]=w?qe(u[S]):Ie(u[S]);N(f[S],F,p,null,g,x,A,y,w)}b>T?Fe(f,g,x,!0,!1,P):be(u,p,h,g,x,A,y,w,P)},sn=(f,u,p,h,g,x,A,y,w)=>{let b=0;const T=u.length;let P=f.length-1,S=T-1;for(;b<=P&&b<=S;){const F=f[b],D=u[b]=w?qe(u[b]):Ie(u[b]);if(Rt(F,D))N(F,D,p,null,g,x,A,y,w);else break;b++}for(;b<=P&&b<=S;){const F=f[P],D=u[S]=w?qe(u[S]):Ie(u[S]);if(Rt(F,D))N(F,D,p,null,g,x,A,y,w);else break;P--,S--}if(b>P){if(b<=S){const F=S+1,D=F<T?u[F].el:h;for(;b<=S;)N(null,u[b]=w?qe(u[b]):Ie(u[b]),p,D,g,x,A,y,w),b++}}else if(b>S)for(;b<=P;)Ee(f[b],g,x,!0),b++;else{const F=b,D=b,K=new Map;for(b=D;b<=S;b++){const pe=u[b]=w?qe(u[b]):Ie(u[b]);pe.key!=null&&K.set(pe.key,b)}let Y,G=0;const ye=S-D+1;let gt=!1,Ea=0;const Ft=new Array(ye);for(b=0;b<ye;b++)Ft[b]=0;for(b=F;b<=P;b++){const pe=f[b];if(G>=ye){Ee(pe,g,x,!0);continue}let Pe;if(pe.key!=null)Pe=K.get(pe.key);else for(Y=D;Y<=S;Y++)if(Ft[Y-D]===0&&Rt(pe,u[Y])){Pe=Y;break}Pe===void 0?Ee(pe,g,x,!0):(Ft[Pe-D]=b+1,Pe>=Ea?Ea=Pe:gt=!0,N(pe,u[Pe],p,null,g,x,A,y,w),G++)}const Pa=gt?Ul(Ft):wt;for(Y=Pa.length-1,b=ye-1;b>=0;b--){const pe=D+b,Pe=u[pe],Ca=pe+1<T?u[pe+1].el:h;Ft[b]===0?N(null,Pe,p,Ca,g,x,A,y,w):gt&&(Y<0||b!==Pa[Y]?nt(Pe,p,Ca,2):Y--)}}},nt=(f,u,p,h,g=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,h);return}if(b&128){f.suspense.move(u,p,h);return}if(b&64){A.move(f,u,p,ht);return}if(A===De){r(x,u,p);for(let P=0;P<w.length;P++)nt(w[P],u,p,h);r(f.anchor,u,p);return}if(A===lr){M(f,u,p);return}if(h!==2&&b&1&&y)if(h===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),g);else{const{leave:P,delayLeave:S,afterLeave:F}=y,D=()=>r(x,u,p),K=()=>{P(x,()=>{D(),F&&F()})};S?S(x,D,K):K()}else r(x,u,p)},Ee=(f,u,p,h=!1,g=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:S}=f;if(y!=null&&Ir(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&S,D=!Pn(f);let K;if(D&&(K=A&&A.onVnodeBeforeUnmount)&&Ce(K,u,f),T&6)es(f.component,p,h);else{if(T&128){f.suspense.unmount(p,h);return}F&&rt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,g,ht,h):b&&(x!==De||P>0&&P&64)?Fe(b,u,p,!1,!0):(x===De&&P&384||!g&&T&16)&&Fe(w,u,p),h&&Aa(f)}(D&&(K=A&&A.onVnodeUnmounted)||F)&&ue(()=>{K&&Ce(K,u,f),F&&rt(f,null,u,"unmounted")},p)},Aa=f=>{const{type:u,el:p,anchor:h,transition:g}=f;if(u===De){Go(p,h);return}if(u===lr){I(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},Go=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},es=(f,u,p)=>{const{bum:h,scope:g,update:x,subTree:A,um:y}=f;h&&On(h),g.stop(),x&&(x.active=!1,Ee(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,h=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)Ee(f[A],u,p,h,g)},ln=f=>f.shapeFlag&6?ln(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Oa=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),ja(),Gi(),u._vnode=f},ht={p:N,um:Ee,m:nt,r:Aa,mt:nr,mc:be,pc:W,pbc:Me,n:ln,o:e};let rr,ar;return t&&([rr,ar]=t(ht)),{render:Oa,hydrate:rr,createApp:Tl(Oa,rr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function zl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||vo(o,s)),s.type===Xn&&(s.el=o.el)}}function Ul(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const $l=e=>e.__isTeleport,De=Symbol.for("v-fgt"),Xn=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),lr=Symbol.for("v-stc"),$t=[];let _e=null;function bo(e=!1){$t.push(_e=e?null:[])}function Bl(){$t.pop(),_e=$t[$t.length-1]||null}let qt=1;function qa(e){qt+=e}function yo(e){return e.dynamicChildren=qt>0?_e||wt:null,Bl(),qt>0&&_e&&_e.push(e),e}function Hl(e,t,n,r,a,i){return yo(z(e,t,n,r,a,i,!0))}function Yl(e,t,n,r,a){return yo(de(e,t,n,r,a,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",xo=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||fe(e)||L(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,a=null,i=e===De?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xo(t),ref:t&&In(t),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),qt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const de=Wl;function Wl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===il)&&(e=Vt),Tr(e)){const s=Et(e,t,!0);return n&&la(s,n),qt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(rf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Xr(s)),Q(l)&&(qi(l)&&!R(l)&&(l=ne({},l)),t.style=qr(l))}const o=re(e)?1:sl(e)?128:$l(e)?64:Q(e)?4:L(e)?2:0;return z(e,t,n,r,a,o,i,!0)}function Kl(e){return e?qi(e)||Jn in e?ne({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ql(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&xo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Vl(e=" ",t=0){return de(Xn,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?de(Vt):R(e)?de(De,null,e.slice()):typeof e=="object"?qe(e):de(Xn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Vl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(a==="style")t.style=qr([t.style,r.style]);else if(Un(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Oe(e,t,7,[n,r])}const Xl=co();let Jl=0;function Zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Xl,i={uid:Jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new gs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mo(r,a),emitsOptions:to(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Qs.bind(null,i),e.ce&&e.ce(i),i}let te=null,fa,vt,Xa="__VUE_INSTANCE_SETTERS__";(vt=br()[Xa])||(vt=br()[Xa]=[]),vt.push(e=>te=e),fa=e=>{vt.length>1?vt.forEach(t=>t(e)):vt[0](e)};const Pt=e=>{fa(e),e.scope.on()},dt=()=>{te&&te.scope.off(),fa(null)};function wo(e){return e.vnode.shapeFlag&4}let Xt=!1;function Ql(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=wo(e);Nl(e,n,a,t),Rl(e,r);const i=a?Gl(e,t):void 0;return Xt=!1,i}function Gl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xi(new Proxy(e.ctx,kl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?tf(e):null;Pt(e),Tt();const i=Je(r,e,0,[e.props,a]);if(St(),dt(),Ri(i)){if(i.then(dt,dt),t)return i.then(o=>{Ja(e,o,t)}).catch(o=>{Kn(o,e,0)});e.asyncDep=i}else Ja(e,i,t)}else _o(e,t)}function Ja(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ji(t)),_o(e,n)}let Za;function _o(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,c)}}e.render=r.render||Ae}{Pt(e),Tt();try{Al(e)}finally{St(),dt()}}}function ef(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function tf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ef(e)},slots:e.slots,emit:e.emit,expose:t}}function Zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}}))}function nf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function rf(e){return L(e)&&"__vccOpts"in e}const it=(e,t)=>Ws(e,t,Xt);function af(e,t,n){const r=arguments.length;return r===2?Q(t)&&!R(t)?Tr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),de(e,t,n))}const of=Symbol.for("v-scx"),sf=()=>Cn(of),lf="3.3.8",ff="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,Qa=st&&st.createElement("template"),cf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(ff,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},uf=Symbol("_vtc");function df(e,t,n){const r=e[uf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mf=Symbol("_vod");function pf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Sr(r,i,"");for(const i in n)Sr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),mf in e&&(r.display=i)}}const Ga=/\s*!important$/;function Sr(e,t,n){if(R(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hf(e,t);Ga.test(n)?e.setProperty(It(r),n.replace(Ga,""),"important"):e[r]=n}}const ei=["Webkit","Moz","ms"],fr={};function hf(e,t){const n=fr[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Yn(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in e)return fr[t]=i}return t}const ti="http://www.w3.org/1999/xlink";function gf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const i=hs(t);n==null||i&&!Li(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function vf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Li(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function bt(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}const ni=Symbol("_vei");function yf(e,t,n,r,a=null){const i=e[ni]||(e[ni]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xf(t);if(r){const c=i[t]=kf(r,a);bt(e,s,c,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(ri.test(e)){t={};let r;for(;r=e.match(ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let cr=0;const wf=Promise.resolve(),_f=()=>cr||(wf.then(()=>cr=0),cr=Date.now());function kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function Af(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ai=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?df(e,r,a):t==="style"?pf(e,n,r):Un(t)?Wr(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ef(e,t,r,a))?vf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gf(e,t,r,a))};function Ef(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ai.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ai.test(t)&&re(n)?!1:t in e}const ii=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>On(t,n):t};function Pf(e){e.target.composing=!0}function oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ur=Symbol("_assign"),Le={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[ur]=ii(a);const i=r||a.props&&a.props.type==="number";bt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=vr(s)),e[ur](s)}),n&&bt(e,"change",()=>{e.value=e.value.trim()}),t||(bt(e,"compositionstart",Pf),bt(e,"compositionend",oi),bt(e,"change",oi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[ur]=ii(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&vr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Cf=ne({patchProp:Of},cf);let si;function If(){return si||(si=jl(Cf))}const Tf=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Sf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Sf(e){return re(e)?document.querySelector(e):e}const Nf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Mf={data(){return{tai:"",tai2:"",pc:""}},computed:{cm:{get(){return Number.parseFloat(Number(this.tai)/1e3*303).toFixed(1)}},mm:{get(){return Math.round(Number.parseFloat(Number(this.tai)/100*303))}},cm2:{get(){return Number.parseFloat(Number(this.tai2)/1e3*303).toFixed(1)}},mm2:{get(){return Math.round(Number.parseFloat(Number(this.tai2)/100*303))}},squareM:{get(){return(this.pc*(Number.parseFloat(Number(this.tai)/1e3*303).toFixed(2)/100)*(Number.parseFloat(Number(this.tai2)/1e3*303).toFixed(2)/100)).toFixed(2)}},cai:{get(){return(this.pc*(Number.parseFloat(Number(this.tai)/1e3*303).toFixed(2)/100)*(Number.parseFloat(Number(this.tai2)/1e3*303).toFixed(2)/100)*10.89).toFixed(2)}}}},Ff={class:"exchange-wrapper"},Rf={class:"wrap1"},Lf={class:"wrap"},jf={class:"col tai"},Df={class:"col cm"},zf=z("p",null,"cm",-1),Uf={class:"col mm"},$f=z("p",null,"mm",-1),Bf={class:"wrap"},Hf={class:"col tai"},Yf={class:"col cm"},Wf=z("p",null,"cm",-1),Kf={class:"col mm"},Vf=z("p",null,"mm",-1),qf={class:"wrap2"},Xf={class:"wrap"},Jf={class:"col pc"},Zf=z("p",null,"片數",-1),Qf={class:"col squareM"},Gf=z("p",null,"平方米",-1),ec={class:"col cai"},tc=z("p",null,"才",-1);function nc(e,t,n,r,a,i){const o=al("font-awesome-icon");return bo(),Hl("div",Ff,[z("div",Rf,[z("div",Lf,[z("div",jf,[z("p",null,[de(o,{icon:"pencil"})]),Re(z("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=s=>a.tai=s),placeholder:"請輸入"},null,512),[[Le,a.tai]])]),z("div",Df,[zf,Re(z("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>i.cm=s),disabled:""},null,512),[[Le,i.cm]])]),z("div",Uf,[$f,Re(z("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>i.mm=s),disabled:""},null,512),[[Le,i.mm]])])]),z("div",Bf,[z("div",Hf,[z("p",null,[de(o,{icon:"pencil"})]),Re(z("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=s=>a.tai2=s),placeholder:"請輸入"},null,512),[[Le,a.tai2]])]),z("div",Yf,[Wf,Re(z("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=s=>i.cm2=s),disabled:""},null,512),[[Le,i.cm2]])]),z("div",Kf,[Vf,Re(z("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=s=>i.mm2=s),disabled:""},null,512),[[Le,i.mm2]])])])]),z("div",qf,[z("div",Xf,[z("div",Jf,[Zf,Re(z("input",{type:"number","onUpdate:modelValue":t[6]||(t[6]=s=>a.pc=s),placeholder:"請輸入"},null,512),[[Le,a.pc]])]),z("div",Qf,[Gf,Re(z("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=s=>i.squareM=s),disabled:""},null,512),[[Le,i.squareM]])]),z("div",ec,[tc,Re(z("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=s=>i.cai=s),disabled:""},null,512),[[Le,i.cai]])])])])])}const rc=Nf(Mf,[["render",nc]]),ac={__name:"App",setup(e){return(t,n)=>(bo(),Yl(rc))}};function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){"@babel/helpers - typeof";return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function ic(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){return lc(e)||cc(e,t)||ko(e,t)||dc()}function tn(e){return sc(e)||fc(e)||ko(e)||uc()}function sc(e){if(Array.isArray(e))return Nr(e)}function lc(e){if(Array.isArray(e))return e}function fc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ko(e,t){if(e){if(typeof e=="string")return Nr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(e,t)}}function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function uc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ua={},Ao={},Oo=null,Eo={mark:ci,measure:ci};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(Ao=document),typeof MutationObserver<"u"&&(Oo=MutationObserver),typeof performance<"u"&&(Eo=performance)}catch{}var mc=ua.navigator||{},ui=mc.userAgent,di=ui===void 0?"":ui,Qe=ua,X=Ao,mi=Oo,hn=Eo;Qe.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Po=~di.indexOf("MSIE")||~di.indexOf("Trident/"),gn,vn,bn,yn,xn,$e="___FONT_AWESOME___",Mr=16,Co="fa",Io="svg-inline--fa",mt="data-fa-i2svg",Fr="data-fa-pseudo-element",pc="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",pi="fontawesome-i2svg",hc="async",gc=["HTML","HEAD","STYLE","SCRIPT"],To=function(){try{return!0}catch{return!1}}(),q="classic",Z="sharp",pa=[q,Z];function nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Jt=nn((gn={},ee(gn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(gn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),Zt=nn((vn={},ee(vn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(vn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),vn)),Qt=nn((bn={},ee(bn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(bn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bn)),vc=nn((yn={},ee(yn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(yn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yn)),bc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,So="fa-layers-text",yc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xc=nn((xn={},ee(xn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(xn,Z,{900:"fass",400:"fasr",300:"fasl"}),xn)),No=[1,2,3,4,5,6,7,8,9,10],wc=No.concat([11,12,13,14,15,16,17,18,19,20]),_c=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Zt[q]).map(Gt.add.bind(Gt));Object.keys(Zt[Z]).map(Gt.add.bind(Gt));var kc=[].concat(pa,tn(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(No.map(function(e){return"".concat(e,"x")})).concat(wc.map(function(e){return"w-".concat(e)})),Bt=Qe.FontAwesomeConfig||{};function Ac(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Ec=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ec.forEach(function(e){var t=ca(e,2),n=t[0],r=t[1],a=Oc(Ac(n));a!=null&&(Bt[r]=a)})}var Mo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Co,replacementClass:Io,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var Ct=E(E({},Mo),Bt);Ct.autoReplaceSvg||(Ct.observeMutations=!1);var C={};Object.keys(Mo).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ct[e]=n,Ht.forEach(function(r){return r(C)})},get:function(){return Ct[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ct.cssPrefix=t,Ht.forEach(function(n){return n(C)})},get:function(){return Ct.cssPrefix}});Qe.FontAwesomeConfig=C;var Ht=[];function Pc(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ve=Mr,Se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cc(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Ic="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var e=12,t="";e-- >0;)t+=Ic[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ha(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fo(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ga(e){return e.size!==Se.size||e.x!==Se.x||e.y!==Se.y||e.rotate!==Se.rotate||e.flipX||e.flipY}function Sc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Nc(e){var t=e.transform,n=e.width,r=n===void 0?Mr:n,a=e.height,i=a===void 0?Mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Po?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Mc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ro(){var e=Co,t=Io,n=C.cssPrefix,r=C.replacementClass,a=Mc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function dr(){C.autoAddCss&&!hi&&(Cc(Ro()),hi=!0)}var Fc={mixout:function(){return{dom:{css:Ro,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},Be=Qe||{};Be[$e]||(Be[$e]={});Be[$e].styles||(Be[$e].styles={});Be[$e].hooks||(Be[$e].hooks={});Be[$e].shims||(Be[$e].shims=[]);var ke=Be[$e],Lo=[],Rc=function e(){X.removeEventListener("DOMContentLoaded",e),jn=1,Lo.map(function(t){return t()})},jn=!1;We&&(jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),jn||X.addEventListener("DOMContentLoaded",Rc));function Lc(e){We&&(jn?setTimeout(e,0):Lo.push(e))}function rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Fo(e):"<".concat(t," ").concat(Tc(r),">").concat(i.map(rn).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},mr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?jc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Dc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=Dc(e);return t.length===1?t[0].toString(16):null}function zc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,vi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Lr("fa",t)}var wn,_n,kn,yt=ke.styles,Uc=ke.shims,$c=(wn={},ee(wn,q,Object.values(Qt[q])),ee(wn,Z,Object.values(Qt[Z])),wn),va=null,jo={},Do={},zo={},Uo={},$o={},Bc=(_n={},ee(_n,q,Object.keys(Jt[q])),ee(_n,Z,Object.keys(Jt[Z])),_n);function Hc(e){return~kc.indexOf(e)}function Yc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Hc(a)?a:null}var Bo=function(){var t=function(i){return mr(yt,function(o,s,l){return o[l]=mr(s,i,{}),o},{})};jo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Do=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$o=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||C.autoFetchSvg,r=mr(Uc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zo=r.names,Uo=r.unicodes,va=Gn(C.styleDefault,{family:C.familyDefault})};Pc(function(e){va=Gn(e.styleDefault,{family:C.familyDefault})});Bo();function ba(e,t){return(jo[e]||{})[t]}function Wc(e,t){return(Do[e]||{})[t]}function ct(e,t){return($o[e]||{})[t]}function Ho(e){return zo[e]||{prefix:null,iconName:null}}function Kc(e){var t=Uo[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return va}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Jt[r][e],i=Zt[r][e]||Zt[r][a],o=e in ke.styles?e:null;return i||o||null}var bi=(kn={},ee(kn,q,Object.keys(Qt[q])),ee(kn,Z,Object.keys(Qt[Z])),kn);function er(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,q,"".concat(C.cssPrefix,"-").concat(q)),ee(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return bi[q].includes(c)}))&&(s=q),(e.includes(i[Z])||e.some(function(c){return bi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Yc(C.cssPrefix,d);if(yt[d]?(d=$c[s].includes(d)?vc[s][d]:d,o=d,c.prefix=d):Bc[s].indexOf(d)>-1?(o=d,c.prefix=Gn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[q]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Ho(c.iconName):{},_=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||_||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(yt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var Vc=function(){function e(){ic(this,e),this.definitions={}}return oc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=Qt[q][s];l&&Lr(l,o[s]),Bo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],xt={},At={},qc=Object.keys(At);function Xc(e,t){var n=t.mixoutsTo;return yi=e,xt={},Object.keys(At).forEach(function(r){qc.indexOf(r)===-1&&delete At[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ln(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(At)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function Dr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=ct(n,t)||t,gi(Yo.definitions,n,t)||gi(ke.styles,n,t)}var Yo=new Vc,Jc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pt("noAuto")},Zc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Lc(function(){Gc({autoReplaceSvgRoot:n}),pt("watch",t)})}},Qc={icon:function(t){if(t===null)return null;if(Ln(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gn(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(bc))){var a=er(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:ct(i,t)||t}}}},he={noAuto:Jc,config:C,dom:Zc,parse:Qc,library:Yo,findIconDefinition:Dr,toHtml:rn},Gc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&We&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function eu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ga(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Qn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function tu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,j=r.found?r:n,N=j.width,U=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(U)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/U*16*.0625,"em")}:{};_&&(M.attributes[mt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||en())},children:[l]}),delete M.attributes.title);var H=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ae=r.found&&n.found?He("generateAbstractMask",H)||{children:[],attributes:{}}:He("generateAbstractIcon",H)||{children:[],attributes:{}},ie=ae.children,be=ae.attributes;return H.children=ie,H.attributes=be,s?tu(H):eu(H)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[mt]="");var d=E({},o.styles);ga(a)&&(d.transform=Nc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Qn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function nu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pr=ke.styles;function zr(e){var t=e[0],n=e[1],r=e.slice(4),a=ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ru={found:!1,width:512,height:512};function au(e,t){!To&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=Ho(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){var o=pr[t][e];return r(zr(o))}au(e,t),r(E(E({},ru),{},{icon:C.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var wi=function(){},$r=C.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:wi,measure:wi},Dt='FA "6.4.2"',iu=function(t){return $r.mark("".concat(Dt," ").concat(t," begins")),function(){return Wo(t)}},Wo=function(t){$r.mark("".concat(Dt," ").concat(t," ends")),$r.measure("".concat(Dt," ").concat(t),"".concat(Dt," ").concat(t," begins"),"".concat(Dt," ").concat(t," ends"))},wa={begin:iu,end:Wo},Tn=function(){};function _i(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function ou(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function lu(){if(C.autoReplaceSvg===!0)return Sn.replace;var e=Sn[C.autoReplaceSvg];return e||Sn.replace}function fu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function cu(e){return X.createElement(e)}function Ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fu:cu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ko(o,{ceFn:r}))}),a}function uu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ko(a),n)}),n.getAttribute(mt)===null&&C.keepOriginalSource){var r=X.createComment(uu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ha(n).indexOf(C.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return rn(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function ki(e){e()}function Vo(e,t){var n=typeof t=="function"?t:Tn;if(e.length===0)n();else{var r=ki;C.mutateApproach===hc&&(r=Qe.requestAnimationFrame||ki),r(function(){var a=lu(),i=wa.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function qo(){_a=!0}function Br(){_a=!1}var Dn=null;function Ai(e){if(mi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Tn:t,r=e.nodeCallback,a=r===void 0?Tn:r,i=e.pseudoElementsCallback,o=i===void 0?Tn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Dn=new mi(function(c){if(!_a){var d=Ge();Nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_i(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&_i(m.target)&&~_c.indexOf(m.attributeName))if(m.attributeName==="class"&&ou(m.target)){var v=er(ha(m.target)),_=v.prefix,j=v.iconName;m.target.setAttribute(da,_||d),j&&m.target.setAttribute(ma,j)}else su(m.target)&&a(m.target)})}}),We&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function du(){Dn&&Dn.disconnect()}function mu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function pu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=er(ha(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Wc(a.prefix,e.innerText)||ba(a.prefix,Rr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function hu(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function gu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pu(e),r=n.iconName,a=n.prefix,i=n.rest,o=hu(e),s=jr("parseNodeAttributes",{},e),l=t.styleParser?mu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vu=ke.styles;function Xo(e){var t=C.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(So)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var et=new Set;pa.map(function(e){et.add("fa-".concat(e))});Object.keys(Jt[q]).map(et.add.bind(et));Object.keys(Jt[Z]).map(et.add.bind(et));et=tn(et);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=C.autoFetchSvg?et:pa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(vu));i.includes("fa")||i.push("fa");var o=[".".concat(So,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Xo(m);v&&d.push(v)}catch(_){To||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Vo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function bu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xo(e).then(function(n){n&&Vo([n],t)})}function yu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Dr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Dr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var xu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Se:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,_=n.titleId,j=_===void 0?null:_,N=n.classes,U=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,I=M===void 0?{}:M;if(t){var H=t.prefix,ae=t.iconName,ie=t.icon;return tr(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||en()):(O["aria-hidden"]="true",O.focusable="false")),xa({icons:{main:zr(ie),mask:l?zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ae,transform:E(E({},Se),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:I,classes:U}})})}},wu={mixout:function(){return{icon:yu(xu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=bu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,j){Promise.all([Ur(a,s),d.iconName?Ur(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var U=ca(N,2),k=U[0],O=U[1];_([n,xa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var c;return ga(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},_u={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return tr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(tn(i)).join(" ")},children:o}]})}}}},ku={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return tr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),nu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(tn(s))}})})}}}},Au={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Se:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return tr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:E(E({},Se),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(C.cssPrefix,"-layers-text")].concat(tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Po){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ou=new RegExp('"',"ug"),Pi=[1105920,1112319];function Eu(e){var t=e.replace(Ou,""),n=zc(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(pc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),o=i.filter(function(ie){return ie.getAttribute(Fr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(yc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:q,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[v][l[2].toLowerCase()]:xc[v][c],j=Eu(m),N=j.value,U=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=ba(_,N),M=O;if(k){var I=Kc(N);I.iconName&&I.prefix&&(O=I.iconName,_=I.prefix)}if(O&&!U&&(!o||o.getAttribute(da)!==_||o.getAttribute(ma)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var H=gu(),ae=H.extra;ae.attributes[Fr]=t,Ur(O,_).then(function(ie){var be=xa(E(E({},H),{},{icons:{main:ie,mask:ya()},prefix:_,iconName:M,extra:ae,watchable:!0})),ge=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Me){return rn(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Pu(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Cu(e){return e.parentNode!==document.head&&!~gc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ii(e){if(We)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter(Cu).map(Pu),a=wa.begin("searchPseudoElements");qo(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var Iu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ii,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Ii(a)}}},Ti=!1,Tu={mixout:function(){return{dom:{unwatch:function(){qo(),Ti=!0}}}},hooks:function(){return{bootstrap:function(){Ai(jr("mutationObserverCallbacks",{}))},noAuto:function(){du()},watch:function(n){var r=n.observeMutationsRoot;Ti?Br():Ai(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Su={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},hr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Nu(e){return e.tag==="g"?e.children:[e]}var Mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?er(a.split(" ").map(function(o){return o.trim()})):ya();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,_=Sc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},hr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ni)}:{},U={tag:"g",attributes:E({},_.inner),children:[Ni(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[U]},O="mask-".concat(s||en()),M="clip-".concat(s||en()),I={tag:"mask",attributes:E(E({},hr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Nu(v)},I]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},hr)}),{children:r,attributes:a}}}},Fu={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ru={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Lu=[Fc,wu,_u,ku,Au,Iu,Tu,Su,Mu,Fu,Ru];Xc(Lu,{mixoutsTo:he});he.noAuto;he.config;var ju=he.library;he.dom;var Hr=he.parse;he.findIconDefinition;he.toHtml;var Du=he.icon;he.layer;he.text;he.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function ce(e,t,n){return t=Bu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Uu(e,t){if(e==null)return{};var n=zu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $u(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bu(e){var t=$u(e,"string");return typeof t=="symbol"?t:String(t)}var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jo={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||v(O)||_(O)||l(O))return O;var I,H=0,ae=0;if(d(O))for(I=[],ae=O.length;H<ae;H++)I.push(n(k,O[H],M));else{I={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(I[k(ie,M)]=n(k,O[ie],M))}return I},r=function(k,O){O=O||{};var M=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(M)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(I,H){return M(I,k,H)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Hu)})(Jo);var Yu=Jo.exports,Wu=["class","style"];function Ku(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Zo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Vu(d);break;case"style":l.style=Ku(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Uu(n,Wu);return af(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),o)},a.attrs),s),r)}var Qo=!1;try{Qo=!0}catch{}function qu(){if(!Qo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Xu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hr.icon)return Hr.icon(e);if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ju=cl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=it(function(){return Fi(t.icon)}),i=it(function(){return gr("classes",Xu(t))}),o=it(function(){return gr("transform",typeof t.transform=="string"?Hr.transform(t.transform):t.transform)}),s=it(function(){return gr("mask",Fi(t.mask))}),l=it(function(){return Du(a.value,ze(ze(ze(ze({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});En(l,function(d){if(!d)return qu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=it(function(){return l.value?Zo(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Zu={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]};ju.add(Zu);Tf(ac).component("font-awesome-icon",Ju).mount("#app");
