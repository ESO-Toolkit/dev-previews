import{B as e,Bt as t,Dt as n,Ft as r,Gt as i,It as a,J as o,K as s,L as c,N as l,Nt as u,O as d,P as f,R as p,St as m,U as h,Ut as g,V as _,Wt as v,_t as y,bt as b,c as x,dt as S,et as C,ft as w,it as T,k as E,m as D,pt as O,qt as k,rt as A,tt as j,yt as M}from"./three-d9ukmAnl.js";var N=parseInt(`185`.replace(/\D+/g,``)),ee=N>=125?`uv1`:`uv2`,P=Uint8Array,F=Uint16Array,I=Uint32Array,te=new P([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ne=new P([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),re=new P([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),L=function(e,t){for(var n=new F(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new I(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},R=L(te,2),ie=R[0],ae=R[1];ie[28]=258,ae[258]=28;var oe=L(ne,0),se=oe[0];oe[1];for(var ce=new F(32768),z=0;z<32768;++z){var B=(z&43690)>>>1|(z&21845)<<1;B=(B&52428)>>>2|(B&13107)<<2,B=(B&61680)>>>4|(B&3855)<<4,ce[z]=((B&65280)>>>8|(B&255)<<8)>>>1}for(var le=(function(e,t,n){for(var r=e.length,i=0,a=new F(t);i<r;++i)++a[e[i]-1];var o=new F(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new F(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[ce[d]>>>c]=l}else for(s=new F(r),i=0;i<r;++i)e[i]&&(s[i]=ce[o[e[i]-1]++]>>>15-e[i]);return s}),ue=new P(288),z=0;z<144;++z)ue[z]=8;for(var z=144;z<256;++z)ue[z]=9;for(var z=256;z<280;++z)ue[z]=7;for(var z=280;z<288;++z)ue[z]=8;for(var de=new P(32),z=0;z<32;++z)de[z]=5;var fe=le(ue,9,1),pe=le(de,5,1),me=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},V=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},H=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},he=function(e){return(e/8|0)+(e&7&&1)},ge=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e instanceof F?F:e instanceof I?I:P)(n-t);return r.set(e.subarray(t,n)),r},U=function(e,t,n){var r=e.length;if(!r||n&&!n.l&&r<5)return t||new P(0);var i=!t||n,a=!n||n.i;n||(n={}),t||(t=new P(r*3));var o=function(e){var n=t.length;if(e>n){var r=new P(Math.max(n*2,e));r.set(t),t=r}},s=n.f||0,c=n.p||0,l=n.b||0,u=n.l,d=n.d,f=n.m,p=n.n,m=r*8;do{if(!u){n.f=s=V(e,c,1);var h=V(e,c+1,3);if(c+=3,!h){var g=he(c)+4,_=e[g-4]|e[g-3]<<8,v=g+_;if(v>r){if(a)throw`unexpected EOF`;break}i&&o(l+_),t.set(e.subarray(g,v),l),n.b=l+=_,n.p=c=v*8;continue}if(h==1)u=fe,d=pe,f=9,p=5;else if(h==2){var y=V(e,c,31)+257,b=V(e,c+10,15)+4,x=y+V(e,c+5,31)+1;c+=14;for(var S=new P(x),C=new P(19),w=0;w<b;++w)C[re[w]]=V(e,c+w*3,7);c+=b*3;for(var T=me(C),E=(1<<T)-1,D=le(C,T,1),w=0;w<x;){var O=D[V(e,c,E)];c+=O&15;var g=O>>>4;if(g<16)S[w++]=g;else{var k=0,A=0;for(g==16?(A=3+V(e,c,3),c+=2,k=S[w-1]):g==17?(A=3+V(e,c,7),c+=3):g==18&&(A=11+V(e,c,127),c+=7);A--;)S[w++]=k}}var j=S.subarray(0,y),M=S.subarray(y);f=me(j),p=me(M),u=le(j,f,1),d=le(M,p,1)}else throw`invalid block type`;if(c>m){if(a)throw`unexpected EOF`;break}}i&&o(l+131072);for(var N=(1<<f)-1,ee=(1<<p)-1,F=c;;F=c){var k=u[H(e,c)&N],I=k>>>4;if(c+=k&15,c>m){if(a)throw`unexpected EOF`;break}if(!k)throw`invalid length/literal`;if(I<256)t[l++]=I;else if(I==256){F=c,u=null;break}else{var L=I-254;if(I>264){var w=I-257,R=te[w];L=V(e,c,(1<<R)-1)+ie[w],c+=R}var ae=d[H(e,c)&ee],oe=ae>>>4;if(!ae)throw`invalid distance`;c+=ae&15;var M=se[oe];if(oe>3){var R=ne[oe];M+=H(e,c)&(1<<R)-1,c+=R}if(c>m){if(a)throw`unexpected EOF`;break}i&&o(l+131072);for(var ce=l+L;l<ce;l+=4)t[l]=t[l-M],t[l+1]=t[l+1-M],t[l+2]=t[l+2-M],t[l+3]=t[l+3-M];l=ce}}n.l=u,n.p=F,n.b=l,u&&(s=1,n.m=f,n.d=d,n.n=p)}while(!s);return l==t.length?t:ge(t,0,l)},W=new P(0),_e=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw`invalid zlib data`;if(e[1]&32)throw`invalid zlib data: preset dictionaries not supported`};function ve(e,t){return U((_e(e),e.subarray(2,-4)),t)}var G=typeof TextDecoder<`u`&&new TextDecoder;try{G.decode(W,{stream:!0})}catch{}var ye=e=>e&&e.isCubeTexture,be=class extends T{constructor(e,t){let r=ye(e),i=((r?e.image[0]?.width:e.image.width)??1024)/4,a=Math.floor(Math.log2(i)),o=2**a,s=3*Math.max(o,112),c=4*o,l=[r?`#define ENVMAP_TYPE_CUBE`:``,`#define CUBEUV_TEXEL_WIDTH ${1/s}`,`#define CUBEUV_TEXEL_HEIGHT ${1/c}`,`#define CUBEUV_MAX_MIP ${a}.0`].join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${N>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
        `,u={map:{value:e},height:{value:t?.height||15},radius:{value:t?.radius||100}},d=new p(1,16),f=new n({uniforms:u,fragmentShader:l,vertexShader:`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,side:2});super(d,f)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}},xe=Object.defineProperty,Se=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t,n)=>(Se(e,typeof t==`symbol`?t:t+``,n),n),we=class{constructor(){Ce(this,`_listeners`)}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Te=Object.defineProperty,Ee=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t,n)=>(Ee(e,typeof t==`symbol`?t:t+``,n),n),De=new b,Oe=new O,ke=Math.cos(Math.PI/180*70),Ae=(e,t)=>(e%t+t)%t,je=class extends we{constructor(e,t){super(),K(this,`object`),K(this,`domElement`),K(this,`enabled`,!0),K(this,`target`,new v),K(this,`minDistance`,0),K(this,`maxDistance`,1/0),K(this,`minZoom`,0),K(this,`maxZoom`,1/0),K(this,`minPolarAngle`,0),K(this,`maxPolarAngle`,Math.PI),K(this,`minAzimuthAngle`,-1/0),K(this,`maxAzimuthAngle`,1/0),K(this,`enableDamping`,!1),K(this,`dampingFactor`,.05),K(this,`enableZoom`,!0),K(this,`zoomSpeed`,1),K(this,`enableRotate`,!0),K(this,`rotateSpeed`,1),K(this,`enablePan`,!0),K(this,`panSpeed`,1),K(this,`screenSpacePanning`,!0),K(this,`keyPanSpeed`,7),K(this,`zoomToCursor`,!1),K(this,`autoRotate`,!1),K(this,`autoRotateSpeed`,2),K(this,`reverseOrbit`,!1),K(this,`reverseHorizontalOrbit`,!1),K(this,`reverseVerticalOrbit`,!1),K(this,`keys`,{LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`}),K(this,`mouseButtons`,{LEFT:C.ROTATE,MIDDLE:C.DOLLY,RIGHT:C.PAN}),K(this,`touches`,{ONE:a.ROTATE,TWO:a.DOLLY_PAN}),K(this,`target0`),K(this,`position0`),K(this,`zoom0`),K(this,`_domElementKeyEvents`,null),K(this,`getPolarAngle`),K(this,`getAzimuthalAngle`),K(this,`setPolarAngle`),K(this,`setAzimuthalAngle`),K(this,`getDistance`),K(this,`getZoomScale`),K(this,`listenToKeyEvents`),K(this,`stopListenToKeyEvents`),K(this,`saveState`),K(this,`reset`),K(this,`update`),K(this,`connect`),K(this,`dispose`),K(this,`dollyIn`),K(this,`dollyOut`),K(this,`getScale`),K(this,`setScale`),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=e=>{let t=Ae(e,2*Math.PI),r=d.phi;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),f.phi=t-r,n.update()},this.setAzimuthalAngle=e=>{let t=Ae(e,2*Math.PI),r=d.theta;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),f.theta=t-r,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener(`keydown`,Te),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener(`keydown`,Te),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=c.NONE},this.update=(()=>{let t=new v,r=new v(0,1,0),a=new y().setFromUnitVectors(e.up,r),o=a.clone().invert(),s=new v,h=new y,g=2*Math.PI;return function(){let _=n.object.position;a.setFromUnitVectors(e.up,r),o.copy(a).invert(),t.copy(_).sub(n.target),t.applyQuaternion(a),d.setFromVector3(t),n.autoRotate&&l===c.NONE&&I(P()),n.enableDamping?(d.theta+=f.theta*n.dampingFactor,d.phi+=f.phi*n.dampingFactor):(d.theta+=f.theta,d.phi+=f.phi);let y=n.minAzimuthAngle,b=n.maxAzimuthAngle;isFinite(y)&&isFinite(b)&&(y<-Math.PI?y+=g:y>Math.PI&&(y-=g),b<-Math.PI?b+=g:b>Math.PI&&(b-=g),y<=b?d.theta=Math.max(y,Math.min(b,d.theta)):d.theta=d.theta>(y+b)/2?Math.max(y,d.theta):Math.min(b,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),n.zoomToCursor&&M||n.object.isOrthographicCamera?d.radius=se(d.radius):d.radius=se(d.radius*p),t.setFromSpherical(d),t.applyQuaternion(o),_.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),m.set(0,0,0));let x=!1;if(n.zoomToCursor&&M){let r=null;if(n.object instanceof w&&n.object.isPerspectiveCamera){let e=t.length();r=se(e*p);let i=e-r;n.object.position.addScaledVector(A,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new v(j.x,j.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix(),x=!0;let i=new v(j.x,j.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),n.zoomToCursor=!1;r!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(De.origin.copy(n.object.position),De.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(De.direction))<ke?e.lookAt(n.target):(Oe.setFromNormalAndCoplanarPoint(n.object.up,n.target),De.intersectPlane(Oe,n.target))))}else n.object instanceof S&&n.object.isOrthographicCamera&&(x=p!==1,x&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix()));return p=1,M=!1,x||s.distanceToSquared(n.object.position)>u||8*(1-h.dot(n.object.quaternion))>u?(n.dispatchEvent(i),s.copy(n.object.position),h.copy(n.object.quaternion),x=!1,!0):!1}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction=`none`,n.domElement.addEventListener(`contextmenu`,Me),n.domElement.addEventListener(`pointerdown`,ye),n.domElement.addEventListener(`pointercancel`,xe),n.domElement.addEventListener(`wheel`,we)},this.dispose=()=>{var e,t,r,i,a,o;n.domElement&&(n.domElement.style.touchAction=`auto`),(e=n.domElement)==null||e.removeEventListener(`contextmenu`,Me),(t=n.domElement)==null||t.removeEventListener(`pointerdown`,ye),(r=n.domElement)==null||r.removeEventListener(`pointercancel`,xe),(i=n.domElement)==null||i.removeEventListener(`wheel`,we),(a=n.domElement)==null||a.ownerDocument.removeEventListener(`pointermove`,be),(o=n.domElement)==null||o.ownerDocument.removeEventListener(`pointerup`,xe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener(`keydown`,Te)};let n=this,i={type:`change`},o={type:`start`},s={type:`end`},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=c.NONE,u=1e-6,d=new r,f=new r,p=1,m=new v,h=new g,_=new g,b=new g,x=new g,T=new g,E=new g,D=new g,O=new g,k=new g,A=new v,j=new g,M=!1,N=[],ee={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function F(){return .95**n.zoomSpeed}function I(e){n.reverseOrbit||n.reverseHorizontalOrbit?f.theta+=e:f.theta-=e}function te(e){n.reverseOrbit||n.reverseVerticalOrbit?f.phi+=e:f.phi-=e}let ne=(()=>{let e=new v;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}})(),re=(()=>{let e=new v;return function(t,r){n.screenSpacePanning===!0?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}})(),L=(()=>{let e=new v;return function(t,r){let i=n.domElement;if(i&&n.object instanceof w&&n.object.isPerspectiveCamera){let a=n.object.position;e.copy(a).sub(n.target);let o=e.length();o*=Math.tan(n.object.fov/2*Math.PI/180),ne(2*t*o/i.clientHeight,n.object.matrix),re(2*r*o/i.clientHeight,n.object.matrix)}else i&&n.object instanceof S&&n.object.isOrthographicCamera?(ne(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),re(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),n.enablePan=!1)}})();function R(e){n.object instanceof w&&n.object.isPerspectiveCamera||n.object instanceof S&&n.object.isOrthographicCamera?p=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function ie(e){R(p/e)}function ae(e){R(p*e)}function oe(e){if(!n.zoomToCursor||!n.domElement)return;M=!0;let t=n.domElement.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,a=t.width,o=t.height;j.x=r/a*2-1,j.y=-(i/o)*2+1,A.set(j.x,j.y,1).unproject(n.object).sub(n.object.position).normalize()}function se(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function ce(e){h.set(e.clientX,e.clientY)}function z(e){oe(e),D.set(e.clientX,e.clientY)}function B(e){x.set(e.clientX,e.clientY)}function le(e){_.set(e.clientX,e.clientY),b.subVectors(_,h).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*b.x/t.clientHeight),te(2*Math.PI*b.y/t.clientHeight)),h.copy(_),n.update()}function ue(e){O.set(e.clientX,e.clientY),k.subVectors(O,D),k.y>0?ie(F()):k.y<0&&ae(F()),D.copy(O),n.update()}function de(e){T.set(e.clientX,e.clientY),E.subVectors(T,x).multiplyScalar(n.panSpeed),L(E.x,E.y),x.copy(T),n.update()}function fe(e){oe(e),e.deltaY<0?ae(F()):e.deltaY>0&&ie(F()),n.update()}function pe(e){let t=!1;switch(e.code){case n.keys.UP:L(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:L(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:L(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:L(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}function me(){if(N.length==1)h.set(N[0].pageX,N[0].pageY);else{let e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);h.set(e,t)}}function V(){if(N.length==1)x.set(N[0].pageX,N[0].pageY);else{let e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);x.set(e,t)}}function H(){let e=N[0].pageX-N[1].pageX,t=N[0].pageY-N[1].pageY,n=Math.sqrt(e*e+t*t);D.set(0,n)}function he(){n.enableZoom&&H(),n.enablePan&&V()}function ge(){n.enableZoom&&H(),n.enableRotate&&me()}function U(e){if(N.length==1)_.set(e.pageX,e.pageY);else{let t=Fe(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);_.set(n,r)}b.subVectors(_,h).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*b.x/t.clientHeight),te(2*Math.PI*b.y/t.clientHeight)),h.copy(_)}function W(e){if(N.length==1)T.set(e.pageX,e.pageY);else{let t=Fe(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);T.set(n,r)}E.subVectors(T,x).multiplyScalar(n.panSpeed),L(E.x,E.y),x.copy(T)}function _e(e){let t=Fe(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);O.set(0,a),k.set(0,(O.y/D.y)**+n.zoomSpeed),ie(k.y),D.copy(O)}function ve(e){n.enableZoom&&_e(e),n.enablePan&&W(e)}function G(e){n.enableZoom&&_e(e),n.enableRotate&&U(e)}function ye(e){var t,r;n.enabled!==!1&&(N.length===0&&((t=n.domElement)==null||t.ownerDocument.addEventListener(`pointermove`,be),(r=n.domElement)==null||r.ownerDocument.addEventListener(`pointerup`,xe)),Ne(e),e.pointerType===`touch`?Ee(e):Se(e))}function be(e){n.enabled!==!1&&(e.pointerType===`touch`?je(e):Ce(e))}function xe(e){var t,r,i;Pe(e),N.length===0&&((t=n.domElement)==null||t.releasePointerCapture(e.pointerId),(r=n.domElement)==null||r.ownerDocument.removeEventListener(`pointermove`,be),(i=n.domElement)==null||i.ownerDocument.removeEventListener(`pointerup`,xe)),n.dispatchEvent(s),l=c.NONE}function Se(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case C.DOLLY:if(n.enableZoom===!1)return;z(e),l=c.DOLLY;break;case C.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enablePan===!1)return;B(e),l=c.PAN}else{if(n.enableRotate===!1)return;ce(e),l=c.ROTATE}break;case C.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enableRotate===!1)return;ce(e),l=c.ROTATE}else{if(n.enablePan===!1)return;B(e),l=c.PAN}break;default:l=c.NONE}l!==c.NONE&&n.dispatchEvent(o)}function Ce(e){if(n.enabled!==!1)switch(l){case c.ROTATE:if(n.enableRotate===!1)return;le(e);break;case c.DOLLY:if(n.enableZoom===!1)return;ue(e);break;case c.PAN:if(n.enablePan===!1)return;de(e)}}function we(e){n.enabled===!1||n.enableZoom===!1||l!==c.NONE&&l!==c.ROTATE||(e.preventDefault(),n.dispatchEvent(o),fe(e),n.dispatchEvent(s))}function Te(e){n.enabled!==!1&&n.enablePan!==!1&&pe(e)}function Ee(e){switch(q(e),N.length){case 1:switch(n.touches.ONE){case a.ROTATE:if(n.enableRotate===!1)return;me(),l=c.TOUCH_ROTATE;break;case a.PAN:if(n.enablePan===!1)return;V(),l=c.TOUCH_PAN;break;default:l=c.NONE}break;case 2:switch(n.touches.TWO){case a.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;he(),l=c.TOUCH_DOLLY_PAN;break;case a.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(),l=c.TOUCH_DOLLY_ROTATE;break;default:l=c.NONE}break;default:l=c.NONE}l!==c.NONE&&n.dispatchEvent(o)}function je(e){switch(q(e),l){case c.TOUCH_ROTATE:if(n.enableRotate===!1)return;U(e),n.update();break;case c.TOUCH_PAN:if(n.enablePan===!1)return;W(e),n.update();break;case c.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(e),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(e),n.update();break;default:l=c.NONE}}function Me(e){n.enabled!==!1&&e.preventDefault()}function Ne(e){N.push(e)}function Pe(e){delete ee[e.pointerId];for(let t=0;t<N.length;t++)if(N[t].pointerId==e.pointerId){N.splice(t,1);return}}function q(e){let t=ee[e.pointerId];t===void 0&&(t=new g,ee[e.pointerId]=t),t.set(e.pageX,e.pageY)}function Fe(e){let t=e.pointerId===N[0].pointerId?N[1]:N[0];return ee[t.pointerId]}this.dollyIn=(e=F())=>{ae(e),n.update()},this.dollyOut=(e=F())=>{ie(e),n.update()},this.getScale=()=>p,this.setScale=e=>{R(e),n.update()},this.getZoomScale=()=>F(),t!==void 0&&this.connect(t),this.update()}},Me=class extends d{constructor(e){super(e),this.type=c}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.RGBELoader: Read Error: `+(t||``));case 2:throw Error(`THREE.RGBELoader: Write Error: `+(t||``));case 3:throw Error(`THREE.RGBELoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.RGBELoader: Memory Error: `+(t||``))}},n=function(e,t,n){t=t||1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;){if(c.string+=l+`
`,l.charAt(0)===`#`){c.comments+=l+`
`;continue}if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=E.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=E.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=E.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=E.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let l=r(s),u=l.width,d=l.height,p=i(s.subarray(s.pos),u,d),m,h,g;switch(this.type){case f:g=p.length/4;let e=new Float32Array(g*4);for(let t=0;t<g;t++)a(p,t*4,e,t*4);m=e,h=f;break;case c:g=p.length/4;let t=new Uint16Array(g*4);for(let e=0;e<g;e++)o(p,e*4,t,e*4);m=t,h=c;break;default:throw Error(`THREE.RGBELoader: Unsupported type: `+this.type)}return{width:u,height:d,data:m,header:l.string,gamma:l.gamma,exposure:l.exposure,type:h}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case f:case c:`colorSpace`in e?e.colorSpace=`srgb-linear`:e.encoding=3e3,e.minFilter=o,e.magFilter=o,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}return super.load(e,i,n,r)}},Ne=N>=152,Pe=class extends d{constructor(e){super(e),this.type=c}parse(e){let t=65536,n=8192,r=65537,i=16384,a=16383,o=65535,s=2.7182818**2.2;function l(e,n){for(var r=0,i=0;i<t;++i)(i==0||e[i>>3]&1<<(i&7))&&(n[r++]=i);for(var a=r-1;r<t;)n[r++]=0;return a}function u(e){for(var t=0;t<i;t++)e[t]={},e[t].len=0,e[t].lit=0,e[t].p=null}let d={l:0,c:0,lc:0};function p(e,t,n,r,i){for(;n<e;)t=t<<8|he(r,i),n+=8;n-=e,d.l=t>>n&(1<<e)-1,d.c=t,d.lc=n}let h=Array(59);function g(e){for(var t=0;t<=58;++t)h[t]=0;for(var t=0;t<r;++t)h[e[t]]+=1;for(var n=0,t=58;t>0;--t){var i=n+h[t]>>1;h[t]=n,n=i}for(var t=0;t<r;++t){var a=e[t];a>0&&(e[t]=a|h[a]++<<6)}}function _(e,t,n,r,i,a,o){for(var s=n,c=0,l=0;i<=a;i++){if(s.value-n.value>r)return!1;p(6,c,l,e,s);var u=d.l;if(c=d.c,l=d.lc,o[i]=u,u==63){if(s.value-n.value>r)throw`Something wrong with hufUnpackEncTable`;p(8,c,l,e,s);var f=d.l+6;if(c=d.c,l=d.lc,i+f>a+1)throw`Something wrong with hufUnpackEncTable`;for(;f--;)o[i++]=0;i--}else if(u>=59){var f=u-59+2;if(i+f>a+1)throw`Something wrong with hufUnpackEncTable`;for(;f--;)o[i++]=0;i--}}g(o)}function v(e){return e&63}function y(e){return e>>6}function b(e,t,n,r){for(;t<=n;t++){var i=y(e[t]),a=v(e[t]);if(i>>a)throw`Invalid table entry`;if(a>14){var o=r[i>>a-14];if(o.len)throw`Invalid table entry`;if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var c=0;c<o.lit-1;++c)o.p[c]=s[c]}else o.p=[,];o.p[o.lit-1]=t}else if(a)for(var l=0,c=1<<14-a;c>0;c--){var o=r[(i<<14-a)+l];if(o.len||o.p)throw`Invalid table entry`;o.len=a,o.lit=t,l++}}return!0}let x={c:0,lc:0};function S(e,t,n,r){e=e<<8|he(n,r),t+=8,x.c=e,x.lc=t}let C={c:0,lc:0};function w(e,t,n,r,i,a,o,s,c,l){if(e==t){r<8&&(S(n,r,i,o),n=x.c,r=x.lc),r-=8;var u=n>>r,u=new Uint8Array([u])[0];if(c.value+u>l)return!1;for(var d=s[c.value-1];u-->0;)s[c.value++]=d}else if(c.value<l)s[c.value++]=e;else return!1;C.c=n,C.lc=r}function T(e){return e&65535}function D(e){var t=T(e);return t>32767?t-65536:t}let O={a:0,b:0};function k(e,t){var n=D(e),r=D(t),i=n+(r&1)+(r>>1),a=i,o=i-r;O.a=a,O.b=o}function A(e,t){var n=T(e),r=T(t),i=n-(r>>1)&o,a=r+i-32768&o;O.a=a,O.b=i}function j(e,t,n,r,i,a,o){for(var s=o<16384,c=n>i?i:n,l=1,u;l<=c;)l<<=1;for(l>>=1,u=l,l>>=1;l>=1;){for(var d=0,f=d+a*(i-u),p=a*l,m=a*u,h=r*l,g=r*u,_,v,y,b;d<=f;d+=m){for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h,w=x+p,T=w+h;s?(k(e[x+t],e[w+t]),_=O.a,y=O.b,k(e[C+t],e[T+t]),v=O.a,b=O.b,k(_,v),e[x+t]=O.a,e[C+t]=O.b,k(y,b),e[w+t]=O.a,e[T+t]=O.b):(A(e[x+t],e[w+t]),_=O.a,y=O.b,A(e[C+t],e[T+t]),v=O.a,b=O.b,A(_,v),e[x+t]=O.a,e[C+t]=O.b,A(y,b),e[w+t]=O.a,e[T+t]=O.b)}if(n&l){var w=x+p;s?k(e[x+t],e[w+t]):A(e[x+t],e[w+t]),_=O.a,e[w+t]=O.b,e[x+t]=_}}if(i&l)for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h;s?k(e[x+t],e[C+t]):A(e[x+t],e[C+t]),_=O.a,e[C+t]=O.b,e[x+t]=_}u=l,l>>=1}return d}function N(e,t,n,r,i,o,s,c,l,u){for(var d=0,f=0,p=c,m=Math.trunc(i.value+(o+7)/8);i.value<m;)for(S(d,f,n,i),d=x.c,f=x.lc;f>=14;){var h=t[d>>f-14&a];if(h.len)f-=h.len,w(h.lit,s,d,f,n,r,i,l,u,p),d=C.c,f=C.lc;else{if(!h.p)throw`hufDecode issues`;var g;for(g=0;g<h.lit;g++){for(var _=v(e[h.p[g]]);f<_&&i.value<m;)S(d,f,n,i),d=x.c,f=x.lc;if(f>=_&&y(e[h.p[g]])==(d>>f-_&(1<<_)-1)){f-=_,w(h.p[g],s,d,f,n,r,i,l,u,p),d=C.c,f=C.lc;break}}if(g==h.lit)throw`hufDecode issues`}}var b=8-o&7;for(d>>=b,f-=b;f>0;){var h=t[d<<14-f&a];if(h.len)f-=h.len,w(h.lit,s,d,f,n,r,i,l,u,p),d=C.c,f=C.lc;else throw`hufDecode issues`}return!0}function ee(e,t,n,a,o,s){var c={value:0},l=n.value,d=H(t,n),f=H(t,n);n.value+=4;var p=H(t,n);if(n.value+=4,d<0||d>=r||f<0||f>=r)throw`Something wrong with HUF_ENCSIZE`;var m=Array(r),h=Array(i);if(u(h),_(e,t,n,a-(n.value-l),d,f,m),p>8*(a-(n.value-l)))throw`Something wrong with hufUncompress`;b(m,d,f,h),N(m,h,e,t,n,p,f,s,o,c)}function P(e,t,n){for(var r=0;r<n;++r)t[r]=e[t[r]]}function F(e){for(var t=1;t<e.length;t++){var n=e[t-1]+e[t]-128;e[t]=n}}function I(e,t){for(var n=0,r=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a||(t[i++]=e[n++],i>a));)t[i++]=e[r++]}function te(e){for(var t=e.byteLength,n=[],r=0,i=new DataView(e);t>0;){var a=i.getInt8(r++);if(a<0){var o=-a;t-=o+1;for(var s=0;s<o;s++)n.push(i.getUint8(r++))}else{var o=a;t-=2;for(var c=i.getUint8(r++),s=0;s<o+1;s++)n.push(c)}}return n}function ne(e,t,n,r,i,a){var o=new DataView(a.buffer),s=n[e.idx[0]].width,c=n[e.idx[0]].height,l=3,u=Math.floor(s/8),d=Math.ceil(s/8),f=Math.ceil(c/8),p=s-(d-1)*8,m=c-(f-1)*8,h={value:0},g=Array(l),_=Array(l),v=Array(l),y=Array(l),b=Array(l);for(let n=0;n<l;++n)b[n]=t[e.idx[n]],g[n]=n<1?0:g[n-1]+d*f,_[n]=new Float32Array(64),v[n]=new Uint16Array(64),y[n]=new Uint16Array(d*64);for(let t=0;t<f;++t){var x=8;t==f-1&&(x=m);var S=8;for(let e=0;e<d;++e){e==d-1&&(S=p);for(let e=0;e<l;++e)v[e].fill(0),v[e][0]=i[g[e]++],re(h,r,v[e]),L(v[e],_[e]),R(_[e]);ie(_);for(let t=0;t<l;++t)ae(_[t],y[t],e*64)}let a=0;for(let r=0;r<l;++r){let i=n[e.idx[r]].type;for(let e=8*t;e<8*t+x;++e){a=b[r][e];for(let t=0;t<u;++t){let n=t*64+(e&7)*8;o.setUint16(a+0*i,y[r][n+0],!0),o.setUint16(a+2*i,y[r][n+1],!0),o.setUint16(a+4*i,y[r][n+2],!0),o.setUint16(a+6*i,y[r][n+3],!0),o.setUint16(a+8*i,y[r][n+4],!0),o.setUint16(a+10*i,y[r][n+5],!0),o.setUint16(a+12*i,y[r][n+6],!0),o.setUint16(a+14*i,y[r][n+7],!0),a+=16*i}}if(u!=d)for(let e=8*t;e<8*t+x;++e){let t=b[r][e]+8*u*2*i,n=u*64+(e&7)*8;for(let e=0;e<S;++e)o.setUint16(t+e*2*i,y[r][n+e],!0)}}}for(var C=new Uint16Array(s),o=new DataView(a.buffer),w=0;w<l;++w){n[e.idx[w]].decoded=!0;var T=n[e.idx[w]].type;if(n[w].type==2)for(var E=0;E<c;++E){let e=b[w][E];for(var D=0;D<s;++D)C[D]=o.getUint16(e+D*2*T,!0);for(var D=0;D<s;++D)o.setFloat32(e+D*2*T,G(C[D]),!0)}}}function re(e,t,n){for(var r,i=1;i<64;)r=t[e.value],r==65280?i=64:r>>8==255?i+=r&255:(n[i]=r,i++),e.value++}function L(e,t){t[0]=G(e[0]),t[1]=G(e[1]),t[2]=G(e[5]),t[3]=G(e[6]),t[4]=G(e[14]),t[5]=G(e[15]),t[6]=G(e[27]),t[7]=G(e[28]),t[8]=G(e[2]),t[9]=G(e[4]),t[10]=G(e[7]),t[11]=G(e[13]),t[12]=G(e[16]),t[13]=G(e[26]),t[14]=G(e[29]),t[15]=G(e[42]),t[16]=G(e[3]),t[17]=G(e[8]),t[18]=G(e[12]),t[19]=G(e[17]),t[20]=G(e[25]),t[21]=G(e[30]),t[22]=G(e[41]),t[23]=G(e[43]),t[24]=G(e[9]),t[25]=G(e[11]),t[26]=G(e[18]),t[27]=G(e[24]),t[28]=G(e[31]),t[29]=G(e[40]),t[30]=G(e[44]),t[31]=G(e[53]),t[32]=G(e[10]),t[33]=G(e[19]),t[34]=G(e[23]),t[35]=G(e[32]),t[36]=G(e[39]),t[37]=G(e[45]),t[38]=G(e[52]),t[39]=G(e[54]),t[40]=G(e[20]),t[41]=G(e[22]),t[42]=G(e[33]),t[43]=G(e[38]),t[44]=G(e[46]),t[45]=G(e[51]),t[46]=G(e[55]),t[47]=G(e[60]),t[48]=G(e[21]),t[49]=G(e[34]),t[50]=G(e[37]),t[51]=G(e[47]),t[52]=G(e[50]),t[53]=G(e[56]),t[54]=G(e[59]),t[55]=G(e[61]),t[56]=G(e[35]),t[57]=G(e[36]),t[58]=G(e[48]),t[59]=G(e[49]),t[60]=G(e[57]),t[61]=G(e[58]),t[62]=G(e[62]),t[63]=G(e[63])}function R(e){let t=.5*Math.cos(3.14159/4),n=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),i=.5*Math.cos(3*3.14159/16),a=.5*Math.cos(15.70795/16),o=.5*Math.cos(3*3.14159/8),s=.5*Math.cos(21.99113/16);for(var c=[,,,,],l=[,,,,],u=[,,,,],d=[,,,,],f=0;f<8;++f){var p=f*8;c[0]=r*e[p+2],c[1]=o*e[p+2],c[2]=r*e[p+6],c[3]=o*e[p+6],l[0]=n*e[p+1]+i*e[p+3]+a*e[p+5]+s*e[p+7],l[1]=i*e[p+1]-s*e[p+3]-n*e[p+5]-a*e[p+7],l[2]=a*e[p+1]-n*e[p+3]+s*e[p+5]+i*e[p+7],l[3]=s*e[p+1]-a*e[p+3]+i*e[p+5]-n*e[p+7],u[0]=t*(e[p+0]+e[p+4]),u[3]=t*(e[p+0]-e[p+4]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[p+0]=d[0]+l[0],e[p+1]=d[1]+l[1],e[p+2]=d[2]+l[2],e[p+3]=d[3]+l[3],e[p+4]=d[3]-l[3],e[p+5]=d[2]-l[2],e[p+6]=d[1]-l[1],e[p+7]=d[0]-l[0]}for(var m=0;m<8;++m)c[0]=r*e[16+m],c[1]=o*e[16+m],c[2]=r*e[48+m],c[3]=o*e[48+m],l[0]=n*e[8+m]+i*e[24+m]+a*e[40+m]+s*e[56+m],l[1]=i*e[8+m]-s*e[24+m]-n*e[40+m]-a*e[56+m],l[2]=a*e[8+m]-n*e[24+m]+s*e[40+m]+i*e[56+m],l[3]=s*e[8+m]-a*e[24+m]+i*e[40+m]-n*e[56+m],u[0]=t*(e[m]+e[32+m]),u[3]=t*(e[m]-e[32+m]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[0+m]=d[0]+l[0],e[8+m]=d[1]+l[1],e[16+m]=d[2]+l[2],e[24+m]=d[3]+l[3],e[32+m]=d[3]-l[3],e[40+m]=d[2]-l[2],e[48+m]=d[1]-l[1],e[56+m]=d[0]-l[0]}function ie(e){for(var t=0;t<64;++t){var n=e[0][t],r=e[1][t],i=e[2][t];e[0][t]=n+1.5747*i,e[1][t]=n-.1873*r-.4682*i,e[2][t]=n+1.8556*r}}function ae(e,t,n){for(var r=0;r<64;++r)t[n+r]=E.toHalfFloat(oe(e[r]))}function oe(e){return e<=1?Math.sign(e)*Math.abs(e)**2.2:Math.sign(e)*s**(Math.abs(e)-1)}function se(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function ce(e){var t=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),n=new Uint8Array(te(t)),r=new Uint8Array(n.length);return F(n),I(n,r),new DataView(r.buffer)}function z(e){var t=ve(e.array.slice(e.offset.value,e.offset.value+e.size)),n=new Uint8Array(t.length);return F(t),I(t,n),new DataView(n.buffer)}function B(e){for(var r=e.viewer,i={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),o=new Uint8Array(n),s=0,c=Array(e.channels),u=0;u<e.channels;u++)c[u]={},c[u].start=s,c[u].end=c[u].start,c[u].nx=e.width,c[u].ny=e.lines,c[u].size=e.type,s+=c[u].nx*c[u].ny*c[u].size;var d=ye(r,i),f=ye(r,i);if(f>=n)throw`Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`;if(d<=f)for(var u=0;u<f-d+1;u++)o[u+d]=ge(r,i);var p=new Uint16Array(t),m=l(o,p),h=H(r,i);ee(e.array,r,i,h,a,s);for(var u=0;u<e.channels;++u)for(var g=c[u],_=0;_<c[u].size;++_)j(a,g.start+_,g.nx,g.size,g.ny,g.nx*g.size,m);P(p,a,s);for(var v=0,y=new Uint8Array(a.buffer.byteLength),b=0;b<e.lines;b++)for(var x=0;x<e.channels;x++){var g=c[x],S=g.nx*g.size,C=new Uint8Array(a.buffer,g.end*2,S*2);y.set(C,v),v+=S*2,g.end+=S}return new DataView(y.buffer)}function le(e){var t=ve(e.array.slice(e.offset.value,e.offset.value+e.size));let n=e.lines*e.channels*e.width,r=e.type==1?new Uint16Array(n):new Uint32Array(n),i=0,a=0,o=[,,,,];for(let n=0;n<e.lines;n++)for(let n=0;n<e.channels;n++){let n=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<8|t[o[1]++];n+=e,r[a]=n,a++}break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8;n+=e,r[a]=n,a++}}}return new DataView(r.buffer)}function ue(e){var t=e.viewer,n={value:e.offset.value},r=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:U(t,n),unknownUncompressedSize:U(t,n),unknownCompressedSize:U(t,n),acCompressedSize:U(t,n),dcCompressedSize:U(t,n),rleCompressedSize:U(t,n),rleUncompressedSize:U(t,n),rleRawSize:U(t,n),totalAcUncompressedCount:U(t,n),totalDcUncompressedCount:U(t,n),acCompression:U(t,n)};if(i.version<2)throw`EXRLoader.parse: `+Pe.compression+` version `+i.version+` is unsupported`;for(var a=[],o=ye(t,n)-2;o>0;){var s=de(t.buffer,n),c=ge(t,n),l=c>>2&3,u=(c>>4)-1,d=new Int8Array([u])[0],f=ge(t,n);a.push({name:s,index:d,type:f,compression:l}),o-=s.length+3}for(var p=Pe.channels,m=Array(e.channels),h=0;h<e.channels;++h){var g=m[h]={},_=p[h];g.name=_.name,g.compression=0,g.decoded=!1,g.type=_.pixelType,g.pLinear=_.pLinear,g.width=e.width,g.height=e.lines}for(var v={idx:[,,,]},y=0;y<e.channels;++y)for(var g=m[y],h=0;h<a.length;++h){var b=a[h];g.name==b.name&&(g.compression=b.compression,b.index>=0&&(v.idx[b.index]=y),g.offset=y)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var x=new Uint16Array(i.totalAcUncompressedCount);ee(e.array,t,n,i.acCompressedSize,x,i.totalAcUncompressedCount);break;case 1:var S=e.array.slice(n.value,n.value+i.totalAcUncompressedCount),C=ve(S),x=new Uint16Array(C.buffer);n.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var w={array:e.array,offset:n,size:i.dcCompressedSize},T=new Uint16Array(z(w).buffer);n.value+=i.dcCompressedSize}if(i.rleRawSize>0){var S=e.array.slice(n.value,n.value+i.rleCompressedSize),C=ve(S),E=te(C.buffer);n.value+=i.rleCompressedSize}for(var D=0,O=Array(m.length),h=0;h<O.length;++h)O[h]=[];for(var k=0;k<e.lines;++k)for(var A=0;A<m.length;++A)O[A].push(D),D+=m[A].width*e.type*2;ne(v,O,m,x,T,r);for(var h=0;h<m.length;++h){var g=m[h];if(!g.decoded)switch(g.compression){case 2:for(var j=0,M=0,k=0;k<e.lines;++k){for(var N=O[h][j],P=0;P<g.width;++P){for(var F=0;F<2*g.type;++F)r[N++]=E[M+F*g.width*g.height];M++}j++}break;default:throw`EXRLoader.parse: unsupported channel compression`}}return new DataView(r.buffer)}function de(e,t){for(var n=new Uint8Array(e),r=0;n[t.value+r]!=0;)r+=1;var i=new TextDecoder().decode(n.slice(t.value,t.value+r));return t.value=t.value+r+1,i}function fe(e,t,n){var r=new TextDecoder().decode(new Uint8Array(e).slice(t.value,t.value+n));return t.value+=n,r}function pe(e,t){return[V(e,t),H(e,t)]}function me(e,t){return[H(e,t),H(e,t)]}function V(e,t){var n=e.getInt32(t.value,!0);return t.value+=4,n}function H(e,t){var n=e.getUint32(t.value,!0);return t.value+=4,n}function he(e,t){var n=e[t.value];return t.value+=1,n}function ge(e,t){var n=e.getUint8(t.value);return t.value+=1,n}let U=function(e,t){let n;return n=`getBigInt64`in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,n};function W(e,t){var n=e.getFloat32(t.value,!0);return t.value+=4,n}function _e(e,t){return E.toHalfFloat(W(e,t))}function G(e){var t=(e&31744)>>10,n=e&1023;return(e>>15?-1:1)*(t?t===31?n?NaN:1/0:2**(t-15)*(1+n/1024):n/1024*6103515625e-14)}function ye(e,t){var n=e.getUint16(t.value,!0);return t.value+=2,n}function be(e,t){return G(ye(e,t))}function xe(e,t,n,r){for(var i=n.value,a=[];n.value<i+r-1;){var o=de(t,n),s=V(e,n),c=ge(e,n);n.value+=3;var l=V(e,n),u=V(e,n);a.push({name:o,pixelType:s,pLinear:c,xSampling:l,ySampling:u})}return n.value+=1,a}function Se(e,t){return{redX:W(e,t),redY:W(e,t),greenX:W(e,t),greenY:W(e,t),blueX:W(e,t),blueY:W(e,t),whiteX:W(e,t),whiteY:W(e,t)}}function Ce(e,t){return[`NO_COMPRESSION`,`RLE_COMPRESSION`,`ZIPS_COMPRESSION`,`ZIP_COMPRESSION`,`PIZ_COMPRESSION`,`PXR24_COMPRESSION`,`B44_COMPRESSION`,`B44A_COMPRESSION`,`DWAA_COMPRESSION`,`DWAB_COMPRESSION`][ge(e,t)]}function we(e,t){return{xMin:H(e,t),yMin:H(e,t),xMax:H(e,t),yMax:H(e,t)}}function Te(e,t){return[`INCREASING_Y`][ge(e,t)]}function Ee(e,t){return[W(e,t),W(e,t)]}function K(e,t){return[W(e,t),W(e,t),W(e,t)]}function De(e,t,n,r,i){if(r===`string`||r===`stringvector`||r===`iccProfile`)return fe(t,n,i);if(r===`chlist`)return xe(e,t,n,i);if(r===`chromaticities`)return Se(e,n);if(r===`compression`)return Ce(e,n);if(r===`box2i`)return we(e,n);if(r===`lineOrder`)return Te(e,n);if(r===`float`)return W(e,n);if(r===`v2f`)return Ee(e,n);if(r===`v3f`)return K(e,n);if(r===`int`)return V(e,n);if(r===`rational`)return pe(e,n);if(r===`timecode`)return me(e,n);if(r===`preview`)return n.value+=i,`skipped`;n.value+=i}function Oe(e,t,n){let r={};if(e.getUint32(0,!0)!=20000630)throw`THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.`;r.version=e.getUint8(4);let i=e.getUint8(5);r.spec={singleTile:!!(i&2),longName:!!(i&4),deepFormat:!!(i&8),multiPart:!!(i&16)},n.value=8;for(var a=!0;a;){var o=de(t,n);if(o==0)a=!1;else{var s=de(t,n),c=De(e,t,n,s,H(e,n));c===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):r[o]=c}}if(i&-5)throw console.error(`EXRHeader:`,r),`THREE.EXRLoader: provided file is currently unsupported.`;return r}function ke(e,t,n,r,i){let a={size:0,viewer:t,array:n,offset:r,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[Ne?`colorSpace`:`encoding`]:null};switch(e.compression){case`NO_COMPRESSION`:a.lines=1,a.uncompress=se;break;case`RLE_COMPRESSION`:a.lines=1,a.uncompress=ce;break;case`ZIPS_COMPRESSION`:a.lines=1,a.uncompress=z;break;case`ZIP_COMPRESSION`:a.lines=16,a.uncompress=z;break;case`PIZ_COMPRESSION`:a.lines=32,a.uncompress=B;break;case`PXR24_COMPRESSION`:a.lines=16,a.uncompress=le;break;case`DWAA_COMPRESSION`:a.lines=32,a.uncompress=ue;break;case`DWAB_COMPRESSION`:a.lines=256,a.uncompress=ue;break;default:throw`EXRLoader.parse: `+e.compression+` is unsupported`}if(a.scanlineBlockSize=a.lines,a.type==1)switch(i){case f:a.getter=be,a.inputSize=2;break;case c:a.getter=ye,a.inputSize=2}else if(a.type==2)switch(i){case f:a.getter=W,a.inputSize=4;break;case c:a.getter=_e,a.inputSize=4}else throw`EXRLoader.parse: unsupported pixelType `+a.type+` for `+e.compression+`.`;a.blockCount=(e.dataWindow.yMax+1)/a.scanlineBlockSize;for(var o=0;o<a.blockCount;o++)U(t,r);a.outputChannels=a.channels==3?4:a.channels;let s=a.width*a.height*a.outputChannels;switch(i){case f:a.byteArray=new Float32Array(s),a.channels<a.outputChannels&&a.byteArray.fill(1,0,s);break;case c:a.byteArray=new Uint16Array(s),a.channels<a.outputChannels&&a.byteArray.fill(15360,0,s);break;default:console.error(`THREE.EXRLoader: unsupported type: `,i)}return a.bytesPerLine=a.width*a.inputSize*a.channels,a.format=a.outputChannels==4?M:m,Ne?a.colorSpace=`srgb-linear`:a.encoding=3e3,a}let Ae=new DataView(e),je=new Uint8Array(e),Me={value:0},Pe=Oe(Ae,e,Me),q=ke(Pe,Ae,je,Me,this.type),Fe={value:0},Ie={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<q.height/q.scanlineBlockSize;e++){let t=H(Ae,Me);q.size=H(Ae,Me),q.lines=t+q.scanlineBlockSize>q.height?q.height-t:q.scanlineBlockSize;let n=q.size<q.lines*q.bytesPerLine?q.uncompress(q):se(q);Me.value+=q.size;for(let t=0;t<q.scanlineBlockSize;t++){let r=t+e*q.scanlineBlockSize;if(r>=q.height)break;for(let e=0;e<q.channels;e++){let i=Ie[Pe.channels[e].name];for(let a=0;a<q.width;a++){Fe.value=(t*(q.channels*q.width)+e*q.width+a)*q.inputSize;let o=(q.height-1-r)*(q.width*q.outputChannels)+a*q.outputChannels+i;q.byteArray[o]=q.getter(n,Fe)}}}}return{header:Pe,width:q.width,height:q.height,data:q.byteArray,format:q.format,[Ne?`colorSpace`:`encoding`]:q[Ne?`colorSpace`:`encoding`],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){Ne?e.colorSpace=n.colorSpace:e.encoding=n.encoding,e.minFilter=o,e.magFilter=o,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,n)}return super.load(e,i,n,r)}},q=new D,Fe=new v,Ie=class extends e{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new l([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new l([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new _(t,6,1);return this.setAttribute(`instanceStart`,new h(n,3,0)),this.setAttribute(`instanceEnd`,new h(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new _(n,t*2,1);return this.setAttribute(`instanceColorStart`,new h(r,t,0)),this.setAttribute(`instanceColorEnd`,new h(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new k(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new D);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),q.setFromBufferAttribute(t),this.boundingBox.union(q))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new u),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Fe.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Fe)),Fe.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Fe));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},Le=class extends Ie{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},Re=class extends n{constructor(e){super({type:`LineMaterial`,uniforms:t.clone(t.merge([x.common,x.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new g(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${N>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},ze=new i,Be=new v,Ve=new v,J=new i,Y=new i,X=new i,He=new v,Ue=new A,Z=new s,We=new v,Ge=new D,Ke=new u,Q=new i,$,qe;function Je(e,t,n){return Q.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Q.multiplyScalar(1/Q.w),Q.x=qe/n.width,Q.y=qe/n.height,Q.applyMatrix4(e.projectionMatrixInverse),Q.multiplyScalar(1/Q.w),Math.abs(Math.max(Q.x,Q.y))}function Ye(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Z.start.fromBufferAttribute(i,r),Z.end.fromBufferAttribute(a,r),Z.applyMatrix4(n);let o=new v,s=new v;$.distanceSqToSegment(Z.start,Z.end,s,o),s.distanceTo(o)<qe*.5&&t.push({point:s,pointOnLine:o,distance:$.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[ee]:null})}}function Xe(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;$.at(1,X),X.w=1,X.applyMatrix4(t.matrixWorldInverse),X.applyMatrix4(r),X.multiplyScalar(1/X.w),X.x*=i.x/2,X.y*=i.y/2,X.z=0,He.copy(X),Ue.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(J.fromBufferAttribute(s,t),Y.fromBufferAttribute(c,t),J.w=1,Y.w=1,J.applyMatrix4(Ue),Y.applyMatrix4(Ue),J.z>u&&Y.z>u)continue;if(J.z>u){let e=J.z-Y.z,t=(J.z-u)/e;J.lerp(Y,t)}else if(Y.z>u){let e=Y.z-J.z,t=(Y.z-u)/e;Y.lerp(J,t)}J.applyMatrix4(r),Y.applyMatrix4(r),J.multiplyScalar(1/J.w),Y.multiplyScalar(1/Y.w),J.x*=i.x/2,J.y*=i.y/2,Y.x*=i.x/2,Y.y*=i.y/2,Z.start.copy(J),Z.start.z=0,Z.end.copy(Y),Z.end.z=0;let o=Z.closestPointToPointParameter(He,!0);Z.at(o,We);let l=j.lerp(J.z,Y.z,o),d=l>=-1&&l<=1,f=He.distanceTo(We)<qe*.5;if(d&&f){Z.start.fromBufferAttribute(s,t),Z.end.fromBufferAttribute(c,t),Z.start.applyMatrix4(a),Z.end.applyMatrix4(a);let r=new v,i=new v;$.distanceSqToSegment(Z.start,Z.end,i,r),n.push({point:i,pointOnLine:r,distance:$.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[ee]:null})}}}var Ze=class extends T{constructor(e=new Ie,t=new Re({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Be.fromBufferAttribute(t,e),Ve.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Be.distanceTo(Ve);let i=new _(r,2,1);return e.setAttribute(`instanceDistanceStart`,new h(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new h(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;$=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;qe=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Ke.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?qe*.5:Je(r,Math.max(r.near,Ke.distanceToPoint($.origin)),s.resolution),Ke.radius+=c,$.intersectsSphere(Ke)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ge.copy(o.boundingBox).applyMatrix4(a);let l;l=n?qe*.5:Je(r,Math.max(r.near,Ge.distanceToPoint($.origin)),s.resolution),Ge.expandByScalar(l),$.intersectsBox(Ge)!==!1&&(n?Ye(this,t):Xe(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ze),this.material.uniforms.resolution.value.set(ze.z,ze.w))}},Qe=class extends Ze{constructor(e=new Le,t=new Re({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}};export{Ie as a,je as c,Le as i,be as l,Ze as n,Pe as o,Re as r,Me as s,Qe as t};