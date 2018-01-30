// just-curves
this.just=this.just||{},this.just.curves=function(e){"use strict"
var n=Math.PI,t=2*n,u=1e-4,r=1.70158,a=1.525*r,s=r+1,i="cubic-bezier",c="steps",o=i+"(.25,.1,.25,1)",f=i+"(.42,0,1,1)",I=i+"(.6,-.28,.735,.045)",O=i+"(.6,.04,.98,.335)",p=i+"(.55,.055,.675,.19)",Q=i+"(.95,.05,.795,.035)",E=i+"(.42,0,.58,1)",b=i+"(.68,-.55,.265,1.55)",h=i+"(.785,.135,.15,.86)",C=i+"(.645,.045,.355,1)",d=i+"(1,0,0,1)",l=i+"(.455,.03,.515,.955)",S=i+"(.77,0,.175,1)",B=i+"(.86,0,.07,1)",v=i+"(.445,.05,.55,.95)",w=i+"(.55,.085,.68,.53)",x=i+"(.895,.03,.685,.22)",z=i+"(.755,.05,.855,.06)",M=i+"(.47,0,.745,.715)",k=i+"(0,0,.58,1)",j=i+"(.175,.885,.32,1.275)",g=i+"(.075,.82,.165,1)",q=i+"(.215,.61,.355,1)",y=i+"(.19,1,.22,1)",F=i+"(.25,.46,.45,.94)",P=i+"(.165,.84,.44,1)",U=i+"(.23,1,.32,1)",$=i+"(.39,.575,.565,1)",m=i+"(.175,.885,.32,1.275)",A=i+"(0,0,1,1)",D=c+"(1,0)",G=c+"(1,1)",H=Object.freeze({ease:o,easeIn:f,easeInBack:I,easeInCirc:O,easeInCubic:p,easeInExpo:Q,easeInOut:E,easeInOutBack:b,easeInOutCirc:h,easeInOutCubic:C,easeInOutExpo:d,easeInOutQuad:l,easeInOutQuart:S,easeInOutQuint:B,easeInOutSine:v,easeInQuad:w,easeInQuart:x,easeInQuint:z,easeInSine:M,easeOut:k,easeOutBack:j,easeOutCirc:g,easeOutCubic:q,easeOutExpo:y,easeOutQuad:F,easeOutQuart:P,easeOutQuint:U,easeOutSine:$,elegantSlowStartEnd:m,linear:A,stepEnd:D,stepStart:G}),J=function(e,n){var t=e/1,u="end"===n?0:"start"===n?1:n||0
return function(e){return 1>e?u*t+e-(u*t+e)%t:1}},K=function(e,n,t){return 3*e*(1-t)*(1-t)*t+3*n*(1-t)*t*t+t*t*t},L=function(e,n,t,r){return 0>e||e>1||0>t||t>1?function(e){return e}:function(a){if(0===a||1===a)return a
var s=0,i=1,c=19
do{var o=.5*(s+i),f=K(e,t,o)
if(Y(a-f)<u)return K(n,r,o)
a>f?s=o:i=o}while(--c)
return a}},N=/([a-z])[- ]([a-z])/gi,R=/^([a-z-]+)\(([^\)]+)\)$/i,T={ease:o,easeIn:f,easeOut:k,easeInOut:E,stepStart:G,stepEnd:D,linear:A},V=function(e,n,t){return n+t.toUpperCase()},W=function(e){return"string"==typeof e?e.replace(N,V):""},X=function(e){var n=W(e),t=T[n]||e,u=R.exec(t)
if(!u)throw new Error("css parse error")
return[u[1]].concat(u[2].split(","))},Y=Math.abs,Z=Math.cos,ee=Math.pow,ne=Math.sin,te=Math.sqrt,ue=L(.25,.1,.25,.1),re=L(.42,0,1,1),ae=L(.42,0,.58,1),se=L(0,0,.58,1),ie=function(e){var n=7.5625,t=2.75
return 1/t>e?n*e*e:2/t>e?n*(e-=1.5/t)*e+.75:2.5/t>e?n*(e-=2.25/t)*e+.9375:n*(e-=2.625/t)*e+.984375},ce=J(1,0),oe=J(1,1)
return e.css=H,e.cssFunction=function(e){var n=X(e),t=n[0]
if("steps"===t)return J(+n[1],n[2])
if("cubic-bezier"===t)return L(+n[1],+n[2],+n[3],+n[4])
throw new Error("css parse error")},e.cubicBezier=L,e.steps=J,e.ease=ue,e.easeIn=re,e.easeInBack=function(e){return s*e*e*e-r*e*e},e.easeInBounce=function(e){return 1-ie(1-e)},e.easeInCirc=function(e){return 1-te(1-e*e)},e.easeInCubic=function(e){return e*e*e},e.easeInElastic=function(e){return e&&1!==e?-1*ne((e-1.1)*t*2.5)*ee(2,10*(e-1)):e},e.easeInExpo=function(e){return 0===e?0:ee(2,10*e-10)},e.easeInOut=ae,e.easeInOutBack=function(e){return.5>e?ee(2*e,2)*(2*(a+1)*e-a)/2:(ee(2*e-2,2)*((a+1)*(2*e-2)+a)+2)/2},e.easeInOutBounce=function(e){return.5>e?(1-ie(1-2*e))/2:(1+ie(2*e-1))/2},e.easeInOutCirc=function(e){return.5>e?(1-te(1-ee(2*e,2)))/2:(te(1-ee(-2*e+2,2))+1)/2},e.easeInOutCubic=function(e){return.5>e?4*e*e*e:1-ee(-2*e+2,3)/2},e.easeInOutElastic=function(e){return e&&1!==e?1>(e*=2)?-.5*(ee(2,10*(e-1))*ne((e-1.1)*t/.4)):ee(2,-10*(e-1))*ne((e-1.1)*t/.4)*.5+1:e},e.easeInOutExpo=function(e){return 0===e?0:1===e?1:.5>e?ee(2,20*e-10)/2:(2-ee(2,-20*e+10))/2},e.easeInOutQuad=function(e){return.5>e?2*e*e:1-ee(-2*e+2,2)/2},e.easeInOutQuart=function(e){return.5>e?8*e*e*e*e:1-ee(-2*e+2,4)/2},e.easeInOutQuint=function(e){return.5>e?16*e*e*e*e*e:1-ee(-2*e+2,5)/2},e.easeInOutSine=function(e){return-(Z(n*e)-1)/2},e.easeInQuad=function(e){return e*e},e.easeInQuart=function(e){return e*e*e*e},e.easeInQuint=function(e){return e*e*e*e*e},e.easeInSine=function(e){return 1-Z(e*n/2)},e.easeOut=se,e.easeOutBack=function(e){return 1+s*ee(e-1,3)+r*ee(e-1,2)},e.easeOutBounce=ie,e.easeOutCirc=function(e){return te(1-(e-1)*(e-1))},e.easeOutCubic=function(e){return 1-ee(1-e,3)},e.easeOutElastic=function(e){if(!e||1===e)return e
var n,u=.1,r=.4
return!u||1>u?(u=1,n=r/4):n=r*Math.asin(1/u)/t,u*ee(2,-10*e)*ne((e-n)*t/r)+1},e.easeOutExpo=function(e){return 1===e?1:1-ee(2,-10*e)},e.easeOutQuad=function(e){return 1-(1-e)*(1-e)},e.easeOutQuart=function(e){return 1-ee(1-e,4)},e.easeOutQuint=function(e){return 1-ee(1-e,5)},e.easeOutSine=function(e){return ne(e*n/2)},e.linear=function(e){return e},e.stepEnd=ce,e.stepStart=oe,e}({})

// polymorph
var polymorph=function(r){"use strict"
function n(r){return"string"==typeof r}function t(r,t){if(n(r))return r
for(var e="",a=0;a<r.length;a++){var i=r[a]
e+=L+U+t(i[0])+U+t(i[1])+U+Q
for(var o=2;o<i.length;o++)e+=U+t(i[o])}return e}function e(){throw new Error(Array.prototype.join.call(arguments,U))}function a(r,n){for(var t in n)r.hasOwnProperty(t)||(r[t]=n[t])
return r}function i(r){return new cr(r)}function o(r,n,t){var e=r.length,u=n.length
if(u>e)return o(n,r,t)
n.length=e
for(var c=u;e>c;c++){for(var f=r[c],l=i(f.d.length),v=0;v<f.d.length;v+=2)l[v]=t.absolute?t.x:f.x+f.w*t.x,l[v+1]=t.absolute?t.y:f.y+f.y*t.y
n[c]=a({d:l},f)}}function u(r,n){var t,e=r.length,a=e-n,o=i(n)
for(t=0;n>t;t++)o[t]=r[t]
for(t=n;e>t;t++)r[t-n]=r[t]
for(t=0;n>t;t++)r[a+t]=o[t]}function c(r,n,t,e){return X((r-t)*(r-t)+(n-e)*(n-e))}function f(r,n,t){var e=t.length
if(t[e-2]===t[0]&&t[e-1]===t[1]){var a=t.slice(2)
e=a.length
for(var i,o,f=0;e>f;f+=6){var l=c(r,n,a[f],a[f+1]);(o===_||o>l)&&(o=l,i=f)}u(a,i),t[0]=a[e-2],t[1]=a[e-1]
for(f=0;f<a.length;f++)t[f+2]=a[f]}}function l(r,n){for(var t=r[0].length,e=0;t>e;e++){var a=r[0][e],i=r[1][e],o=N(a.length+n,i.length+n)
r[0][e]=v(a,o),r[1][e]=v(i,o)}}function v(r,n){var t=i(n),e=r.length,a=n-e,o=a/e,u=a
t[0]=r[0],t[1]=r[1]
for(var c=1,f=1;n-1>f;){t[f+1]=r[c+1],t[f+2]=r[c+2],t[f+3]=r[c+3],t[f+4]=r[c+4]
var l=t[f+5]=r[c+5],v=t[f+6]=r[c+6]
if(f+=6,c+=6,u){var s=W(o)
c===e-1&&(s=n-f)
for(var h=0;s>h&&u>0;h++)t[f+1]=t[f+3]=t[f+5]=l,t[f+2]=t[f+4]=t[f+6]=v,f+=6,u-=6}}return t}function s(r,n){return n.p-r.p}function h(r,n,t){var a=p(r),i=p(n),u=t.origin,c=u.x,v=u.y,s=u.absolute
a.length!==i.length&&(t.optimize===B?o(a,i,t.origin):e("optimize:none requires equal lengths"))
var h=Array(2)
if(h[0]=a.map(g),h[1]=i.map(g),t.optimize!==D)for(var y=0;y<a.length;y++){var d=a[y],x=i[y]
f(s?c:d.x+d.w*c,s?v:d.y+d.h*v,h[0][y]),f(s?c:x.x+x.w*c,s?v:x.y+x.h*v,h[1][y])}return t.optimize===B&&l(h,6*t.addPoints),h}function p(r){return r.data.slice().sort(s)}function g(r){return r.d}function y(r,n){n=a(n,fr),r&&r.length>=2||e("invalid arguments")
for(var i=r.length-1,o=Array(i),u=0;i>u;u++)o[u]=d(r[u],r[u+1],n)
var c=n.precision?function(r){return r.toFixed(n.precision)}:W
return function(r){var n=i*r,e=K(R(n),i-1)
return t(o[e]((n-e)/(e+1)),c)}}function d(r,n,t){var e=h(r,n,t),a=e[0].length
return function(t){if(J(t-0)<or)return r.path
if(J(t-1)<or)return n.path
for(var i=Array(a),o=0;a>o;o++)i[o]=x(e[0][o],e[1][o],t)
return i}}function x(r,n,t){for(var e=r.length,a=i(e),o=0;e>o;o++)a[o]=r[o]+(n[o]-r[o])*t
return a}function m(r,n){return r===_?n:r}function b(r,n,t,e,a,i,o,u,c,f,l,v,s){if(0>=t||0>=e)return[r,n,u,c,u,c]
var h=ar/180*(+a||0),p=rr(h),g=tr(h),y=!!f
if(!y){var d=r,x=u,m=((r=d*p-n*-g)-(u=x*p-c*-g))/2,w=((n=d*-g+n*p)-(c=x*-g+c*p))/2,k=m*m/(t*t)+w*w/(e*e)
k>1&&(t*=k=X(k),e*=k)
var A=(i===o?-1:1)*X(J((t*t*e*e-t*t*w*w-e*e*m*m)/(t*t*w*w+e*e*m*m)))
v=A*t*w/e+(r+u)/2,f=nr((n-(s=A*-e*m/t+(n+c)/2))/e),l=nr((c-s)/e),v>r&&(f=ar-f),v>u&&(l=ar-l),0>f&&(f+=vr),0>l&&(l+=vr),o&&f>l&&(f-=vr),!o&&l>f&&(l-=vr)}var z
if(J(l-f)>lr){var q=l,M=u,P=c
z=b(u=v+t*rr(l=f+lr*(o&&l>f?1:-1)),c=s+e*tr(l),t,e,a,0,o,M,P,l,q,v,s)}else z=[]
var S=4/3*er((l-f)/4)
if(z.splice(0,0,2*r-(r+S*t*tr(f)),2*n-(n-S*e*rr(f)),u+S*t*tr(l),c-S*e*rr(l),u,c),!y)for(var C=0,E=z.length;E>C;C+=2){var T=z[C],$=z[C+1]
z[C]=T*p-$*g,z[C+1]=T*g+$*p}return z}function w(r,n,t,e,a,i,o){var u=r.x,c=r.y
r.x=m(i,u),r.y=m(o,c),r.p.push(m(n,u),t=m(t,c),e=m(e,u),a=m(a,c),r.x,r.y),r.lc=r.c}function k(r){var n=r.c,t=r.t,e=r.x,a=r.y
if(n===$)t[0]+=a
else if(n===F)t[0]+=e
else if(n===O)t[5]+=e,t[6]+=a
else for(var i=0;i<t.length;i+=2)t[i]+=e,t[i+1]+=a}function A(r){return r.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(z)}function z(r){return r.split(U).map(q)}function q(r,n){return 0===n?r:+r}function M(r){for(var n={x:0,y:0,s:[]},t=A(r),a=0;a<t.length;a++){var i=t[a],o=i[0],u=o.toUpperCase(),c=u!==I&&u!==o
n.c=u
var f=sr[u],l=i,v=1
do{n.t=1===l.length?l:l.slice(v,v+f),c&&k(n)
var s=n.t,h=n.x,p=n.y,g=void 0,y=void 0,d=void 0,x=void 0,m=void 0,z=void 0
switch(u){case L:n.s.push(n.p=[n.x=s[0],n.y=s[1]])
break
case F:w(n,_,_,_,_,s[0],_)
break
case $:w(n,_,_,_,_,_,s[0])
break
case H:w(n,_,_,_,_,s[0],s[1])
break
case I:w(n,_,_,_,_,n.p[0],n.p[1])
break
case Q:w(n,s[0],s[1],s[2],s[3],s[4],s[5]),n.cx=s[2],n.cy=s[3]
break
case V:var q=n.lc!==V&&n.lc!==Q
w(n,g=q?_:2*h-n.cx,y=q?_:2*p-n.cy,s[0],s[1],s[2],s[3]),n.cx=s[0],n.cy=s[1]
break
case Z:var M=s[0],P=s[1]
d=s[2],x=s[3],w(n,h+(M-h)*ir,p+(P-p)*ir,d+(M-d)*ir,x+(P-x)*ir,d,x),n.cx=M,n.cy=P
break
case j:d=s[0],x=s[1],n.lc===Z||n.lc===j?(g=h+(2*h-n.cx-h)*ir,y=p+(2*p-n.cy-p)*ir,m=d+(2*h-n.cx-d)*ir,z=x+(2*p-n.cy-x)*ir):(g=m=h,y=z=p),w(n,g,y,m,z,d,x),n.cx=m,n.cy=z
break
case O:for(var S=b(h,p,s[0],s[1],s[2],s[3],s[4],s[5],s[6]),C=0;C<S.length;C+=6)w(n,S[C],S[C+1],S[C+2],S[C+3],S[C+4],S[C+5])
break
default:e(n.c," is not supported")}v+=f}while(v<l.length)}return n.s}function P(r){for(var n=r.length,t=r[n-2],e=r[n-1],a=0,i=0;n>i;i+=6)a+=c(r[i],r[i+1],t,e),t=r[i],e=r[i+1]
return R(a)}function S(r){for(var n=r[0],t=r[1],e=t,a=n,i=2;i<r.length;i+=6){var o=r[i+4],u=r[i+5]
n=K(n,o),a=N(a,o),t=K(t,u),e=N(e,u)}return{d:r,x:n,y:t,w:a-n,h:e-t,p:P(r)}}function C(r){return{path:r,data:M(r).map(S)}}function E(r){if(n(r)){if(!hr.test(r))return r
r=document.querySelector(r)}return r.getAttribute("d")}function T(r){return C(E(r))}var _=void 0,$="V",F="H",H="L",I="Z",L="M",Q="C",V="S",Z="Q",j="T",O="A",U=" ",B="fill",D="none",G=Math,J=G.abs,K=G.min,N=G.max,R=G.floor,W=G.round,X=G.sqrt,Y=G.pow,rr=G.cos,nr=G.asin,tr=G.sin,er=G.tan,ar=G.PI,ir=2/3,or=Y(2,-52),ur="undefined"!=typeof window&&window.navigator.userAgent,cr=/(MSIE |Trident\/|Edge\/)/i.test(ur)?Array:Float32Array,fr={addPoints:0,optimize:B,origin:{x:0,y:0},precision:0},lr=120*ar/180,vr=2*ar,sr={M:2,H:1,V:1,L:2,Z:0,C:6,S:4,Q:4,T:2,A:7},hr=/^([#|\.]|path)/i
return r.interpolate=function(r,n){return y(r.map(T),n||{})},r}({})

;(function() {
  if( !("from" in Array) ) {
    return;
  }

  document.documentElement.className += " js-loaded";

  var MAX_FRAMES = 120;
  var DELAY = 4;
  var timeout = false;
  var forward = true;
  var isPlaying = false;

  // animator modifies the original paths, so let’s clone our first svg to mess around with
  var svg = document.querySelector("svg");
  var cloned = svg.cloneNode(true);
  cloned.setAttribute("id", "canvas");
  Array.from(cloned.querySelectorAll("path")).forEach(function(path, j) {
    path.setAttribute("id", "canvas-" + j);
    path.setAttribute("class", "canvas");
  });
  svg.parentNode.insertBefore(cloned, svg);

  function transform(from, to) {
    Array.from(document.querySelectorAll("." + from)).forEach(function(path, j) {
      var frame = 0;
      var step = 1;
      var target = path;

      // get an interpolator
      var renderMorph = polymorph.interpolate([ "#" + from + "-" + j, "#" + to + "-" + j], {
        precision: 5,
        addPoints: 40
      });

      function animate() {
        isPlaying = true;
        frame += step;
        if (frame > MAX_FRAMES + DELAY) {
          isPlaying = false;
          frame = 0;

          return;
        }

         // get relative offset
         var offset = frame < DELAY ? 0 : just.curves.easeInOutSine((frame - DELAY) / MAX_FRAMES);

         target.setAttribute('d', renderMorph(offset))

         // request next frame
         requestAnimationFrame(animate);
      }

      animate();
    });
  }

  document.addEventListener('click', function(e) {
    if( (e.target.tagName || "").toUpperCase() !== "PATH" ) {
      return;
    }

    if (!isPlaying) {
      if( forward ) {
        transform("canvas", "eightbit");
        forward = false;
      } else {
        transform("canvas", "roboto");
        forward = true;
      }
    }
  });
})();
