var An=Array.isArray,Sn=Array.from,Rn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,xn=Object.prototype,Dn=Array.prototype,Vt=Object.getPrototypeOf;const On=()=>{};function kn(t){return t()}function $t(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ct=4,M=8,nt=16,E=32,K=64,D=128,B=256,p=512,S=1024,Y=2048,P=4096,j=8192,Gt=16384,vt=32768,In=65536,Kt=1<<18,pt=1<<19,ut=Symbol("$state"),Nn=Symbol("legacy props");function ht(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Zt(t,this.v)}function Wt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Jt(t){throw new Error("effect_orphan")}function Qt(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function bn(t){throw new Error("props_invalid_value")}function Cn(){throw new Error("state_descriptors_fixed")}function Fn(){throw new Error("state_prototype_fixed")}function Xt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}let Z=!1;function qn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Ln(t){return yt(rt(t))}function nn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Mn(t,n=!1){return yt(nn(t,n))}function yt(t){return u!==null&&u.f&T&&(y===null?dn([t]):y.push(t)),t}function Yn(t,n){return u!==null&&lt()&&u.f&(T|nt)&&(y===null||!y.includes(t))&&tn(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=Lt(),Et(t,S),lt()&&o!==null&&o.f&p&&!(o.f&E)&&(_!==null&&_.includes(t)?(w(o,S),z(o)):A===null?yn([t]):A.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&S||!e&&a===o||(w(a,n),i&(p|D)&&(i&T?Et(a,Y):z(a)))}}const jn=1,Hn=2,Un=4,Bn=8,Vn=16,$n=1,Gn=2,en="[",sn="[!",ln="]",wt={},Kn=Symbol();function mt(t){console.warn("hydration_mismatch")}let x=!1;function Zn(t){x=t}let d;function F(t){if(t===null)throw mt(),wt;return d=t}function Wn(){return F(O(d))}function zn(t){if(x){if(O(d)!==null)throw mt(),wt;d=t}}function Jn(t=1){if(x){for(var n=t,r=d;n--;)r=O(r);d=r}}function Qn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=O(n);n.remove(),n=e}}var it,an,Tt,gt;function Xn(){if(it===void 0){it=window,an=document;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,gt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return Tt.call(t)}function O(t){return gt.call(t)}function tr(t,n){if(!x)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function nr(t,n){if(!x){var r=Q(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function rr(t,n=1,r=!1){let e=x?d:t;for(var s;n--;)s=e,e=O(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=J();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function er(t){t.textContent=""}function on(t){var n=T|S;o===null?n|=D:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function sr(t){const n=on(t);return n.equals=dt,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):C(e)}}}function St(t){var n,r=o;G(t.parent);try{At(t),n=Mt(t)}finally{G(r)}return n}function Rt(t){var n=St(t),r=(k||t.f&D)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=Lt())}function et(t){At(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function xt(t){o===null&&u===null&&Jt(),u!==null&&u.f&D&&zt(),st&&Wt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&K)!==0,l=o,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{ft(!0),W(a),a.f|=Gt}catch(c){throw C(a),c}finally{ft(i)}}else n!==null&&z(a);var m=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&pt)===0;if(!m&&!s&&e&&(l!==null&&un(a,l),u!==null&&u.f&T)){var g=u;(g.children??(g.children=[])).push(a)}return a}function lr(t){const n=b(M,null,!1);return w(n,p),n.teardown=t,n}function ar(t){xt();var n=o!==null&&(o.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Dt(t);return e}}function or(t){return xt(),fn(t)}function ur(t){const n=b(K,t,!0);return()=>{C(n)}}function Dt(t){return b(ct,t,!1)}function fn(t){return b(M,t,!0)}function ir(t){return _n(t)}function _n(t,n=0){return b(M|nt|n,t,!0)}function fr(t,n=!0){return b(M|E,t,!0,n)}function Ot(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),$(null);try{n.call(null)}finally{_t(r),$(e)}}}function kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function It(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}It(t,n&&!r),kt(t),L(t,0),w(t,j);var a=t.transitions;if(a!==null)for(const m of a)m.stop();Ot(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function _r(t,n){var r=[];Pt(t,r,!0),vn(r,()=>{C(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Pt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&vt)!==0||(e.f&E)!==0;Pt(e,n,l?r:!1),e=s}}}function cr(t){bt(t,!0)}function bt(t,n){if(t.f&P){H(t)&&W(t),t.f^=P;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&E)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,X=[];function Ct(){V=!1;const t=X.slice();X=[],$t(t)}function vr(t){V||(V=!0,queueMicrotask(Ct)),X.push(t)}function pn(){V&&Ct()}const Ft=0,hn=1;let U=Ft,q=!1,I=!1,st=!1;function ft(t){I=t}function _t(t){st=t}let R=[],N=0;let u=null;function $(t){u=t}let o=null;function G(t){o=t}let y=null;function dn(t){y=t}let _=null,h=0,A=null;function yn(t){A=t}let qt=0,k=!1,f=null;function Lt(){return++qt}function lt(){return!Z||f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&S)return!0;if(n&Y){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Rt(l),e&&o!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function En(t,n,r){throw t}function Mt(t){var at;var n=_,r=h,e=A,s=u,l=k,a=y,i=f,m=t.f;_=null,h=0,A=null,u=m&(E|K)?null:t,k=!I&&(m&D)!==0,y=null,f=t.ctx;try{var g=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((at=c[v]).reactions??(at.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return g}finally{_=n,h=r,A=e,u=s,k=l,y=a,f=i}}function wn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(D|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)wn(t,r[e])}function W(t){var n=t.f;if(!(n&j)){w(t,p);var r=o;o=t;try{n&nt?cn(t):It(t),kt(t),Ot(t);var e=Mt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(s){En(s)}finally{o=r}}}function Yt(){N>1e3&&(N=0,Qt()),N++}function jt(t){var n=t.length;if(n!==0){Yt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Ht(s,l),mn(l)}}finally{I=r}}}function mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|P))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function Tn(){if(q=!1,N>1001)return;const t=R;R=[],jt(t),q||(N=0)}function z(t){U===Ft&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Ht(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,a=l&&(s&p)!==0;if(!a&&!(s&P))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var g=v.next;if(g!==null){r=g;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ht(i,n)}function Ut(t){var n=U,r=R;try{Yt();const s=[];U=hn,R=s,q=!1,jt(r);var e=t==null?void 0:t();return pn(),(R.length>0||s.length>0)&&Ut(),N=0,e}finally{U=n,R=r}}async function pr(){await Promise.resolve(),Ut()}function hr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=St(t);return et(t),e}if(u!==null){y!==null&&y.includes(t)&&Xt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&o!==null&&o.f&p&&!(o.f&E)&&A.includes(t)&&(w(o,S),z(o))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Rt(l)),t.v}function dr(t){const n=u;try{return u=null,t()}finally{u=n}}const gn=~(S|Y|p);function w(t,n){t.f=t.f&gn|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Er(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];G(l.effect),$(l.reaction),Dt(l.fn)}}finally{G(r),$(e)}}f=n.p,n.m=!0}return{}}function wr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{jn as $,Cn as A,Yn as B,ot as C,o as D,vt as E,Fn as F,Vt as G,An as H,cr as I,_r as J,Wn as K,sn as L,Qn as M,F as N,Zn as O,Dt as P,fn as Q,vr as R,ut as S,bn as T,Kn as U,In as V,Un as W,dt as X,E as Y,K as Z,G as _,Er as a,Z as a0,Hn as a1,Bn as a2,Nn as a3,sr as a4,Vn as a5,nn as a6,J as a7,Q as a8,$n as a9,Gn as aa,$ as ab,u as ac,lr as ad,Rn as ae,Kt as af,en as ag,O as ah,Xn as ai,wt as aj,ln as ak,mt as al,Pn as am,er as an,Sn as ao,ur as ap,Bt as aq,it as ar,Ln as as,an as at,Jn as au,Mn as av,Ut as aw,pr as ax,Zt as ay,ar as b,tr as c,f as d,dr as e,nr as f,$t as g,hr as h,kn as i,wr as j,on as k,qn as l,_n as m,fr as n,On as o,yr as p,C as q,zn as r,rr as s,ir as t,or as u,x as v,d as w,xn as x,Dn as y,rt as z};
