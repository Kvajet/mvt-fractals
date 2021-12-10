var j=Object.defineProperty;var I=(r,t,a)=>t in r?j(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var o=(r,t,a)=>(I(r,typeof t!="symbol"?t+"":t,a),a);const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=a(n);fetch(n.href,e)}};E();const S=[{name:"blue",func:$},{name:"gray",func:D},{name:"pink",func:M}];function $(r){return[0,0,r*50]}function D(r){return[r*10,r*10,r*10]}function M(r){return[255*Math.sin(r/15),r*5,255*Math.sin(r/10)]}class x{constructor(t){o(this,"m_ctx");o(this,"m_colors",S);o(this,"m_currentColor",this.m_colors[0]);o(this,"m_lastFractalFunction",()=>0);this.m_ctx=t}CanvasDimensions(){return[this.m_ctx.canvas.width,this.m_ctx.canvas.height]}RepaintCanvas(t){this.m_ctx.fillStyle=`rgba(${t[0]}, ${t[1]}, ${t[2]}, 1)`;const[a,i]=this.CanvasDimensions();this.m_ctx.fillRect(0,0,a,i)}Draw(t,a=this.m_currentColor.func){const[i,n]=this.CanvasDimensions();this.m_lastFractalFunction=t,this.RepaintCanvas([0,0,0]);for(let e=0;e<n;e++)for(let s=0;s<i;s++){const l=t(s,e);this.SetPixel(s,e,a(l))}}DrawPart(t,a,i,n){for(let e=i;e<n;e++)for(let s=t;s<a;s++){const l=this.m_lastFractalFunction(s,e);this.SetPixel(s,e,this.m_currentColor.func(l))}}ExperimentalDraw(t,a=this.m_currentColor.func){const[i,n]=this.CanvasDimensions();this.m_lastFractalFunction=t,this.RepaintCanvas([0,0,0]);for(let e=0;e<n;e++){let s=-1,l=0,m=0;for(let c=0;c<i;c++){const g=t(c,e);if(s===g)m++;else{if(l!==m){const _=a(s);this.m_ctx.fillStyle=`rgba(${_[0]},${_[1]},${_[2]},1)`,this.m_ctx.fillRect(l,e,m-l+1,1)}s=g,l=m=c;const f=a(s);this.m_ctx.fillStyle=`rgba(${f[0]},${f[1]},${f[2]},1)`,this.m_ctx.fillRect(l,e,1,1)}}if(l!==m){const c=a(s);this.m_ctx.fillStyle=`rgba(${c[0]},${c[1]},${c[2]},1)`,this.m_ctx.fillRect(l,e,m-l+1,1)}}}SetPixel(t,a,i){this.m_ctx.fillStyle=`rgba(${i[0]},${i[1]},${i[2]},1)`,this.m_ctx.fillRect(t,a,1,1)}ColorChangeHandler(t){const a=t;this.m_currentColor=this.m_colors[a.target.selectedIndex],this.Draw(this.m_lastFractalFunction)}MapColors(t){const a=(n,e)=>{const s=document.createElement("option");return s.value=e,s.innerHTML=n,s};let i=0;for(const n of this.m_colors){const e=a(n.name,i.toString());t.appendChild(e),i++}t.addEventListener("change",this.ColorChangeHandler.bind(this))}static STransformX(t,a,i,n){return i[0]+t*(n[0]-i[0])/a}static STransformY(t,a,i,n){return i[1]+t*(n[1]-i[1])/a}}class L extends x{constructor(t){super(t);o(this,"m_maxIter");o(this,"m_min");o(this,"m_max");const[a,i]=this.CanvasDimensions();this.m_maxIter=500,this.m_min=[-2,-1.5],this.m_max=[1,this.m_min[1]+(1-this.m_min[0])*i/a]}TransformX(t){return this.m_min[0]+t*(this.m_max[0]-this.m_min[0])/this.CanvasDimensions()[0]}TransformY(t){return this.m_min[1]+t*(this.m_max[1]-this.m_min[1])/this.CanvasDimensions()[1]}MandelFunc(t,a){t=this.TransformX(t),a=this.TransformY(a);let i=t,n=a,e=0,s=0,l=0,m=0;for(;l<this.m_maxIter&&(m=e*e-s*s,s=2*e*s+n,e=m+i,!(e*e+s*s>4));)l++;return l==this.m_maxIter&&(l=0),l}Draw(){super.ExperimentalDraw(this.MandelFunc.bind(this))}}class N extends x{constructor(t,a=[.1,.38]){super(t);o(this,"m_maxIter");o(this,"m_min");o(this,"m_max");o(this,"m_parameter");const[i,n]=this.CanvasDimensions();this.m_maxIter=150,this.m_min=[-1.5,-1.5],this.m_max=[1.5,this.m_min[1]+(1.5-this.m_min[0])*n/i],this.m_parameter=a}TransformX(t){return this.m_min[0]+t*(this.m_max[0]-this.m_min[0])/this.CanvasDimensions()[0]}TransformY(t){return this.m_min[1]+t*(this.m_max[1]-this.m_min[1])/this.CanvasDimensions()[1]}JuliaFunc(t,a){t=this.TransformX(t),a=this.TransformY(a);let i=t,n=a,e=0,s=0;for(;e<this.m_maxIter&&(s=i*i-n*n,n=2*i*n+this.m_parameter[1],i=s+this.m_parameter[0],!(i*i+n*n>4));)e++;return e==this.m_maxIter&&(e=0),e}AssignSliders(t,a,i,n){i.value=`${p(this.m_parameter[0])}`,n.value=`${p(this.m_parameter[1])}`,t.addEventListener("input",e=>{this.m_parameter[0]=+e.target.value,i.value=`${p(this.m_parameter[0])}`,this.Draw()}),a.addEventListener("input",e=>{this.m_parameter[1]=+e.target.value,n.value=`${p(this.m_parameter[1])}`,this.Draw()})}AssignParameterInputs(t,a,i,n){const e=l=>{const m=+l.target.value;m!==this.m_parameter[0]&&(i.value=`${m}`,this.m_parameter[0]=m,this.Draw())};t.addEventListener("blur",e);const s=l=>{const m=+l.target.value;m!==this.m_parameter[1]&&(n.value=`${m}`,this.m_parameter[1]=m,this.Draw())};a.addEventListener("blur",s)}Draw(){super.ExperimentalDraw(this.JuliaFunc.bind(this))}ChangeParameter(t){this.m_parameter=t}CurrentParameter(){return this.m_parameter}}var d;(function(r){r[r.Mandelbrot=0]="Mandelbrot",r[r.Julia=1]="Julia"})(d||(d={}));function v(r){const t=document.getElementById(r);if(t==null)throw new Error(`Unable to find canvas with id: ${r}.`);return t.getContext("2d")}function C(r,t){switch(r){case d.Mandelbrot:{const a=v(t);return new L(a)}case d.Julia:{const a=v(t);return new N(a)}default:throw new Error("Invalid fractal type given.")}}function p(r){return Math.floor(r*100)/100}function y(r){const t=r.content,a=r.type,i=document.createElement(a),n=r.attributes;if(n!=null)for(const e in n){if(e==="classNames"){i.classList.add(...n[e]);continue}i.setAttribute(e,n[e])}if(t==null){const e=r.html;return e!=null&&(i.innerHTML=e),i}for(const e of t){const s=y(e);i.appendChild(s)}return i}const R={type:"article",content:[{type:"h1",html:"Mandelbrot"},{type:"article",content:[{type:"h3",html:"Filters"},{type:"select",html:"innerHTML",attributes:{id:"mandelbrot-color-select"}}],attributes:{classNames:["filters"]}}]},T={type:"article",content:[{type:"h1",html:"Julia"},{type:"article",content:[{type:"h3",html:"Filters"},{type:"select",html:"innerHTML",attributes:{id:"julia-color-select"}}],attributes:{classNames:["filters"]}},{type:"article",content:[{type:"h3",html:"Sliders"},{type:"dl",content:[{type:"dt",html:"Real Part"},{type:"dd",content:[{type:"input",attributes:{id:"julia-slider-real",type:"range",min:"-2",max:"2",step:"0.01",value:"0"}},{type:"input",attributes:{id:"julia-numberinput-real",type:"number",value:"0",classNames:["number-input"]}}]},{type:"dt",html:"Imaginary Part"},{type:"dd",content:[{type:"input",attributes:{id:"julia-slider-imaginary",type:"range",min:"-2",max:"2",step:"0.01",value:"0"}},{type:"input",attributes:{id:"julia-numberinput-imaginary",type:"number",value:"0",classNames:["number-input"]}}]}]}],attributes:{classNames:["sliders"]}}],attributes:{id:"julia-side-bar"}},w=document.getElementById("aside-slider"),P=y(R);w.appendChild(P);const F=y(T);w.appendChild(F);const u={juliaSliderReal:document.getElementById("julia-slider-real"),juliaSliderImag:document.getElementById("julia-slider-imaginary"),juliaNumberReal:document.getElementById("julia-numberinput-real"),juliaNumberImag:document.getElementById("julia-numberinput-imaginary"),mandelbrotSelect:document.getElementById("mandelbrot-color-select"),juliaSelect:document.getElementById("julia-color-select")},b=C(d.Mandelbrot,"mandelbrot-canvas"),h=C(d.Julia,"julia-canvas");b.Draw();h.Draw();b.m_ctx.canvas.addEventListener("click",r=>{let t=Math.abs(r.offsetX),a=Math.abs(r.offsetY),i=h.TransformX(t),n=h.TransformY(a);u.juliaSliderReal.value=`${i}`,u.juliaSliderImag.value=`${n}`,u.juliaNumberReal.value=`${p(i)}`,u.juliaNumberImag.value=`${p(n)}`,h.ChangeParameter([i,n]),h.Draw()});b.MapColors(document.getElementById("mandelbrot-color-select"));h.MapColors(document.getElementById("julia-color-select"));h.AssignSliders(u.juliaSliderReal,u.juliaSliderImag,u.juliaNumberReal,u.juliaNumberImag);h.AssignParameterInputs(u.juliaNumberReal,u.juliaNumberImag,u.juliaSliderReal,u.juliaSliderImag);
