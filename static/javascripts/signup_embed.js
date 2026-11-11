/*! Bundled license information:

escape-html/index.js:
  (*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   *)
*/(()=>{var Ee,n,m,M,F,K,q,X,me,ue,de,ie,e,s,o,Ce,r,g,$,U,le,ce,i,a,c,l,d,u,h,y,_,O,E,T,N,P,H,B,V,ge,ve,be,v,w,x,A,L,xe,R,Q,ee,j,C,I,Ne=Object.create,te=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,re=Object.getOwnPropertyNames,Be=Object.getPrototypeOf,He=Object.prototype.hasOwnProperty,pe=(e,t)=>function(){return t||(0,e[re(e)[0]])((t={exports:{}}).exports,t),t.exports},Re=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of re(t))!He.call(e,o)&&o!==n&&te(e,o,{get:()=>t[o],enumerable:!(s=Ke(t,o))||s.enumerable});return e},_e=(e,t,n)=>(n=e!=null?Ne(Be(e)):{},Re(t||!e||!e.__esModule?te(n,"default",{value:e,enumerable:!0}):n,e)),De=pe({"node_modules/.pnpm/escape-html@1.0.3/node_modules/escape-html/index.js"(e,t){"use strict";var n=/["'&<>]/;t.exports=s;function s(e){var t,o,i,a,s=""+e,r=n.exec(s);if(!r)return s;a="",t=0,i=0;for(t=r.index;t<s.length;t++){switch(s.charCodeAt(t)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==t&&(a+=s.substring(i,t)),i=t+1,a+=o}return i!==t?a+s.substring(i,t):a}}}),ze=pe({"node_modules/.pnpm/form-serialize@0.7.2/node_modules/form-serialize/index.js"(e,t){var o=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i,s=/(\[[^[\]]*\])/g;function a(e,t){typeof t!="object"?t={hash:!!t}:t.hash===0[0]&&(t.hash=!0);for(var n,a,r,d,m,p,g,b,j,s=t.hash?{}:"",h=t.serializer||(t.hash?c:l),v=e&&e.elements?e.elements:[],u=Object.create(null),f=0;f<v.length;++f){if(n=v[f],!t.disabled&&n.disabled||!n.name)continue;if(!i.test(n.nodeName)||o.test(n.type))continue;if(a=n.name,r=n.value,(n.type==="checkbox"||n.type==="radio")&&!n.checked&&(r=0[0]),t.empty){if(n.type==="checkbox"&&!n.checked&&(r=""),n.type==="radio"&&(!u[n.name]&&!n.checked?u[n.name]=!1:n.checked&&(u[n.name]=!0)),r==null&&n.type=="radio")continue}else if(!r)continue;if(n.type==="select-multiple"){r=[];for(p=n.options,g=!1,m=0;m<p.length;++m)d=p[m],b=t.empty&&!d.value,j=d.value||b,d.selected&&j&&(g=!0,t.hash&&a.slice(a.length-2)!=="[]"?s=h(s,a+"[]",d.value):s=h(s,a,d.value));!g&&t.empty&&(s=h(s,a,""));continue}s=h(s,a,r)}if(t.empty)for(a in u)u[a]||(s=h(s,a,""));return s}function r(e){var n=[],o=/^([^[\]]*)/,i=new RegExp(s),t=o.exec(e);for(t[1]&&n.push(t[1]);(t=i.exec(e))!==null;)n.push(t[1]);return n}function n(e,t,s){if(t.length===0)return e=s,e;var i,a,o=t.shift(),r=o.match(/^\[(.+?)\]$/);return o==="[]"?(e=e||[],Array.isArray(e)?e.push(n(null,t,s)):(e._values=e._values||[],e._values.push(n(null,t,s))),e):(r?(i=r[1],a=+i,isNaN(a)?(e=e||{},e[i]=n(e[i],t,s)):(e=e||[],e[a]=n(e[a],t,s))):e[o]=n(e[o],t,s),e)}function c(e,t,o){var i,a,c=t.match(s);return c?(a=r(t),n(e,a,o)):(i=e[t],i?(Array.isArray(i)||(e[t]=[i]),e[t].push(o)):e[t]=o),e}function l(e,t,n){return n=n.replace(/(\r)?\n/g,`\r
`),n=encodeURIComponent(n),n=n.replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}t.exports=a}}),Y="https://api.data.gov/stylesheets/signup_embed.48c51bd905df7502b021a8b0f8b275081b3d9e5c31bbe5e7b1a3ec7ccb13ac30.css",Te="https://api.data.gov/",t={inert:":not([inert]):not([inert] *)",negTabIndex:':not([tabindex^="-"])',disabled:":not(:disabled)"},Fe=[`a[href]${t.inert}${t.negTabIndex}`,`area[href]${t.inert}${t.negTabIndex}`,`input:not([type="hidden"]):not([type="radio"])${t.inert}${t.negTabIndex}${t.disabled}`,`input[type="radio"]${t.inert}${t.negTabIndex}${t.disabled}`,`select${t.inert}${t.negTabIndex}${t.disabled}`,`textarea${t.inert}${t.negTabIndex}${t.disabled}`,`button${t.inert}${t.negTabIndex}${t.disabled}`,`details${t.inert} > summary:first-of-type${t.negTabIndex}`,`iframe${t.inert}${t.negTabIndex}`,`audio[controls]${t.inert}${t.negTabIndex}`,`video[controls]${t.inert}${t.negTabIndex}`,`[contenteditable]${t.inert}${t.negTabIndex}`,`[tabindex]${t.inert}${t.negTabIndex}`];function we(e){(e.querySelector("[autofocus]")||e).focus()}function Se(e){const t=k(e,!0),n=t?k(e,!1)||t:null;return[t,n]}function k(e,t){if(t&&X(e))return e;if(Ae(e))if(e.shadowRoot){let n=Oe(e.shadowRoot,t);for(;n;){const e=k(n,t);if(e)return e;n=ke(n,t)}}else if(e.localName==="slot"){{const n=e.assignedElements({flatten:!0});t||n.reverse();for(const s of n){const e=k(s,t);if(e)return e}}}else{let n=Oe(e,t);for(;n;){const e=k(n,t);if(e)return e;n=ke(n,t)}}return!t&&X(e)?e:null}function Oe(e,t){return t?e.firstElementChild:e.lastElementChild}function ke(e,t){return t?e.nextElementSibling:e.previousElementSibling}Ee=e=>!!(e.matches("details:not([open]) *")&&!e.matches("details>summary:first-of-type"))||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),X=e=>!e.shadowRoot?.delegatesFocus&&e.matches(Fe.join(","))&&!Ee(e);function Ae(e){return!(e.shadowRoot&&e.getAttribute("tabindex")==="-1")&&!e.matches(":disabled,[hidden],[inert]")}function b(e=document){const t=e.activeElement;return t?t.shadowRoot?b(t.shadowRoot)||document.activeElement:t:null}function Me(e,t){const[n,s]=Se(e);if(!n)return t.preventDefault();const o=b();t.shiftKey&&o===n?(s.focus(),t.preventDefault()):!t.shiftKey&&o===s&&(n.focus(),t.preventDefault())}function f(e,t){function n(t){if(!t||t===document||t===window)return null;const s=J(t);return s&&(t=s),t.closest(e)||n(t.getRootNode().host)}return n(t)}function J(e){return e.assignedSlot||(e.parentNode?J(e.parentNode):null)}m="data-a11y-dialog",M=class{$el;id;previouslyFocused;shown;constructor(e){this.$el=e,this.id=this.$el.getAttribute(m)||this.$el.id,this.previouslyFocused=null,this.shown=!1,this.maintainFocus=this.maintainFocus.bind(this),this.bindKeypress=this.bindKeypress.bind(this),this.handleTriggerClicks=this.handleTriggerClicks.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.$el.setAttribute("aria-hidden","true"),this.$el.setAttribute("aria-modal","true"),this.$el.setAttribute("tabindex","-1"),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),document.addEventListener("click",this.handleTriggerClicks,!0)}destroy(){const e=this.fire("destroy");return e.defaultPrevented?this:(this.hide(),document.removeEventListener("click",this.handleTriggerClicks,!0),this.$el.replaceWith(this.$el.cloneNode(!0)),this)}show(e){if(this.shown)return this;const t=this.fire("show",e);return t.defaultPrevented?this:(this.shown=!0,this.$el.removeAttribute("aria-hidden"),this.previouslyFocused=b(),this.previouslyFocused?.tagName==="BODY"&&e?.target&&(this.previouslyFocused=e.target),e?.type==="focus"?this.maintainFocus():we(this.$el),document.body.addEventListener("focus",this.maintainFocus,!0),this.$el.addEventListener("keydown",this.bindKeypress,!0),this)}hide(e){if(!this.shown)return this;const t=this.fire("hide",e);return t.defaultPrevented?this:(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),document.body.removeEventListener("focus",this.maintainFocus,!0),this.$el.removeEventListener("keydown",this.bindKeypress,!0),this.previouslyFocused?.focus?.(),this)}on(e,t,n){return this.$el.addEventListener(e,t,n),this}off(e,t,n){return this.$el.removeEventListener(e,t,n),this}fire(e,t){const n=new CustomEvent(e,{detail:t,cancelable:!0});return this.$el.dispatchEvent(n),n}handleTriggerClicks(e){const t=e.composedPath()[0],n=f(`[${m}-show="${this.id}"]`,t),s=f(`[${m}-hide="${this.id}"]`,t),o=f(`[${m}-hide]`,t)&&f('[aria-modal="true"]',t)===this.$el;n&&this.show(e),(s||o)&&this.hide(e)}bindKeypress(e){if(f('[aria-modal="true"]',b())!==this.$el)return;let t=!1;try{t=!!this.$el.querySelector('[popover]:not([popover="manual"]):popover-open')}catch{}e.key==="Escape"&&this.$el.getAttribute("role")!=="alertdialog"&&!t&&(e.preventDefault(),this.hide(e)),e.key==="Tab"&&Me(this.$el,e)}maintainFocus(){const e=b();f(`[aria-modal="true"], [${m}-ignore-focus-trap]`,e)||we(this.$el)}};function ye(){for(const e of document.querySelectorAll("[data-a11y-dialog]"))new M(e)}typeof document!="undefined"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ye):ye()),n=_e(De()),F=_e(ze());function Le(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,o,a,r=[],i="",c=e.split("/");for(c[0]||c.shift();n=c.shift();)a=n[0],a==="*"?(r.push("wild"),i+="/(.*)"):a===":"?(o=n.indexOf("?",1),s=n.indexOf(".",1),r.push(n.substring(1,!!~o?o:!!~s?s:n.length)),i+=!!~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",!~s||(i+=(!!~o?"?":"")+"\\"+n.substring(s))):i+="/"+n;return{keys:r,pattern:new RegExp("^"+i+(t?"(?=$|/)":"/?$"),"i")}}q=e=>{const t=new URLSearchParams(e).toString();return t?`?${t}`:""},K=e=>Object.fromEntries(new URLSearchParams(e));function Pe(e,t,n){const s=t.exec(e);if(s){let e=0;const t={},o=s.length-1;for(;e<o;){const o=n?n[e]:e;t[o]=s[++e]||null}return t}return null}function fe(e){return typeof e=="object"?`${e.pathname||""}${typeof e.query=="string"?e.query:e.query?q(e.query):""}${e.hash||""}`:e}me=/^([^?#]*)(\?[^#]*)?(#.*)?$/;function Ie(e){if(typeof e=="object"){const{query:t={}}=e;return{pathname:e.pathname||"/",get query(){return typeof t=="string"?K(t):t},get search(){return typeof t=="string"?t:q(t)},hash:e.hash||""}}const t=me.exec(e);if(!t)throw new Error(`Not a valid path`);const n=t[2]||"";return{pathname:t[1]||"",get query(){return K(n)},search:n,hash:t[3]||""}}ue=e=>new de(e),de=class{constructor(e){this.history=e.history,this.currentLocation=this.history.location,this.routes=[],this.beforeEachHooks=[],this.errorHandlers=[],this.history.listen(()=>{const e=this.resolveFromCurrentLocation();this.currentLocation=this.history.location;const t=this.resolveFromCurrentLocation();this.run(t,e)})}go(e){this.history.go(e)}forward(){this.history.forward()}back(){this.history.back()}push(e){this.history.push(fe(e))}replace(e){this.history.replace(fe(e))}add(e,t){const{pattern:n,keys:s}=Le(e);this.routes.push({path:e,handler:t,pattern:n,keys:s})}remove(e){this.routes=this.routes.filter(t=>t.path!==e)}run(e,t){if(e=e||this.currentRoute||0[0],e){const n=[...this.beforeEachHooks,e=>e.route.handler(e)],s=n=>{n&&n(e,t,o)},o=e=>{e===0[0]||e===!0?s(n.shift()):e instanceof Error?this.errorHandlers.forEach(t=>t(e)):typeof e=="string"||typeof e=="object"?this.replace(e):this.back()};s(n.shift())}}resolve(e){const t=Ie(e);for(const e of this.routes){const n=Pe(t.pathname,e.pattern,e.keys);if(n)return{params:n,path:t.pathname,pathname:t.pathname,search:t.search,query:t.query,hash:t.hash,route:e}}return null}resolveFromCurrentLocation(){return this.resolve({pathname:this.currentLocation.pathname,query:this.currentLocation.search,hash:this.currentLocation.hash})}get currentRoute(){return this.resolveFromCurrentLocation()}beforeEach(e){this.beforeEachHooks.push(e)}onError(e){this.errorHandlers.push(e)}};function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t,s,n=1;n<arguments.length;n++){t=arguments[n];for(s in t)({}.hasOwnProperty.call(t,s)&&(e[s]=t[s]))}return e},S.apply(null,arguments)}(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(g||(g={})),$=function(e){return Object.freeze(e)};function W(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}U="beforeunload",le="hashchange",ce="popstate";function Ve(e){e===0[0]&&(e={});var a,w,x=e,m=x.window,t=m===0[0]?document.defaultView:m,o=t.history;function c(){var e=je(t.location.hash.substr(1)),s=e.pathname,r=s===0[0]?"/":s,i=e.search,c=i===0[0]?"":i,a=e.hash,l=a===0[0]?"":a,n=o.state||{};return[n.idx,$({pathname:r,search:c,hash:l,state:n.usr||null,key:n.key||"default"})]}a=null;function _(){if(a)s.call(a),a=null;else{var e,t=g.Pop,o=c(),i=o[0],l=o[1];s.length?i!=null?(e=n-i,e&&(a={action:t,location:l,retry:function(){r(e*-1)}},r(e))):W(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):d(t)}}t.addEventListener(ce,_),t.addEventListener(le,function(){var e=c(),t=e[1];Z(t)!==Z(i)&&_()});var l=g.Pop,b=c(),n=b[0],i=b[1],h=oe(),s=oe();n==null&&(n=0,o.replaceState(S({},o.state,{idx:n}),""));function O(){var e,n,s=document.querySelector("base"),o="";return s&&s.getAttribute("href")&&(e=t.location.href,n=e.indexOf("#"),o=n===-1?e:e.slice(0,n)),o}function f(e){return O()+"#"+(typeof e=="string"?e:Z(e))}function p(e,t){return t===0[0]&&(t=null),$(S({pathname:i.pathname,hash:"",search:""},typeof e=="string"?je(e):e,{state:t,key:qe()}))}function v(e,t){return[{usr:e.state,key:e.key,idx:t},f(e)]}function u(e,t,n){return!s.length||(s.call({action:e,location:t,retry:n}),!1)}function d(e){l=e;var t=c();n=t[0],i=t[1],h.call({action:l,location:i})}function j(e,s){a=g.Push,i=p(e,s);function l(){j(e,s)}if(W(i.pathname.charAt(0)==="/","Relative pathnames are not supported in hash history.push("+JSON.stringify(e)+")"),u(a,i,l)){var i,a,r=v(i,n+1),h=r[0],c=r[1];try{o.pushState(h,"",c)}catch{t.location.assign(c)}d(a)}}function y(e,t){i=g.Replace,s=p(e,t);function r(){y(e,t)}if(W(s.pathname.charAt(0)==="/","Relative pathnames are not supported in hash history.replace("+JSON.stringify(e)+")"),u(i,s,r)){var s,i,a=v(s,n),c=a[0],l=a[1];o.replaceState(c,"",l),d(i)}}function r(e){o.go(e)}return w={get action(){return l},get location(){return i},createHref:f,push:j,replace:y,go:r,back:function(){r(-1)},forward:function(){r(1)},listen:function(t){return h.push(t)},block:function(n){var o=s.push(n);return s.length===1&&t.addEventListener(U,ae),function(){o(),s.length||t.removeEventListener(U,ae)}}},w}function ae(e){e.preventDefault(),e.returnValue=""}function oe(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(e){return e!==n})}},call:function(n){e.forEach(function(e){return e&&e(n)})}}}function qe(){return Math.random().toString(36).substr(2,8)}function Z(e){var o=e.pathname,s=o===0[0]?"/":o,i=e.search,t=i===0[0]?"":i,a=e.hash,n=a===0[0]?"":a;return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function je(e){var n,s,t={};return e&&(n=e.indexOf("#"),n>=0&&(t.hash=e.substr(n),e=e.substr(0,n)),s=e.indexOf("?"),s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)),t}l=ue({history:Ve()}),H=document.createElement("link"),H.rel="stylesheet",H.type="text/css",H.href=Y;function ne(e,t){const n=document.createElement("link");n.rel=t.rel,n.href=t.href,t.as&&(n.as=t.as),e.appendChild(n)}function $e(e,t){const n=document.createElement("script");n.type=t.type,n.src=t.src,e.appendChild(n)}_=Te.replace(/\/$/,""),ie={containerSelector:"#apidatagov_signup",apiUrlRoot:`${_}/api-umbrella`,contactUrl:`${_}/`,exampleApiUrl:`${_}/example.json?api_key={{api_key}}`,signupConfirmationMessage:"",sendWelcomeEmail:!0,showIntroText:!1,showRequiredAsteriskExplainText:!0,showFirstNameInput:!0,showLastNameInput:!0,showUseDescriptionInput:!0,showWebsiteInput:!1,showTermsInput:!1,termsUrl:`${_}/terms/`,verifyEmail:!1},a=window.apiUmbrellaSignupOptions||{},a.showWebsiteInput===0[0]&&a.websiteInput!==0[0]&&(a.showWebsiteInput=a.websiteInput),a.showTermsInput===0[0]&&a.termsCheckbox!==0[0]&&(a.showTermsInput=a.termsCheckbox),e={...ie,...a},e.apiKey||alert("apiUmbrellaSignupOptions.apiKey must be set"),e.registrationSource||alert("apiUmbrellaSignupOptions.registrationSource must be set"),s="",o=!!e.recaptchaV2SiteKey,i=!!e.recaptchaV3SiteKey,e.showIntroText&&(s+=`
    <p>Sign up for an application programming interface (API) key to access and use web services available on the Data.gov developer network.</p>
  `),e.showRequiredAsteriskExplainText&&(s+=`
    <p class="required-fields">Required fields are marked with an asterisk (<abbr title="required" class="required">*</abbr>).</p>
  `),s+=`
  <form id="api_umbrella_signup_form" novalidate>
`,e.showFirstNameInput?s+=`
    <div class="form-group first-name-form-group">
      <label class="form-label" for="user_first_name">First Name <abbr title="required" class="required">*</abbr></label>
      <input class="form-control" id="user_first_name" aria-describedby="user_first_name_feedback" name="user[first_name]" size="50" type="text" required />
      <div id="user_first_name_feedback" class="invalid-feedback">Fill out this field.</div>
    </div>
  `:s+=`<input type="hidden" name="user[first_name]" value="${(0,n.default)(e.registrationSource)} User" />`,e.showLastNameInput?s+=`
    <div class="form-group last-name-form-group">
      <label class="form-label" for="user_last_name">Last Name <abbr title="required" class="required">*</abbr></label>
      <input class="form-control" id="user_last_name" aria-describedby="user_last_name_feedback" name="user[last_name]" size="50" type="text" required />
      <div id="user_last_name_feedback" class="invalid-feedback">Fill out this field.</div>
    </div>
  `:s+=`<input type="hidden" name="user[last_name]" value="${(0,n.default)(e.registrationSource)} User" />`,s+=`
  <div class="form-group email-form-group">
    <label class="form-label" for="user_email">Email <abbr title="required" class="required">*</abbr></label>
    <input class="form-control" id="user_email" aria-describedby="user_email_feedback" name="user[email]" size="50" type="email" required />
    <div id="user_email_feedback" class="invalid-feedback">Enter an email address.</div>
  </div>
`,e.showWebsiteInput&&(s+=`
    <div class="form-group website-form-group">
      <label class="form-label" for="user_website">Website (optional)</label>
      <input class="form-control" id="user_website" aria-describedby="user_website_feedback" name="user[website]" size="50" type="url" placeholder="https://" />
      <div id="user_website_feedback" class="invalid-feedback">Enter a URL.</div>
    </div>
  `),e.showUseDescriptionInput&&(s+=`
    <div class="form-group use-description-form-group">
      <label class="form-label" for="user_use_description">How will you use the APIs? (optional)</label>
      <textarea class="form-control" cols="40" id="user_use_description" name="user[use_description]" rows="2"></textarea>
    </div>
  `),e.showTermsInput?s+=`
    <div class="form-group terms-form-group">
      <div class="form-check">
        <input id="user_terms_and_conditions" aria-describedby="user_terms_and_conditions_feedback" name="user[terms_and_conditions]" type="checkbox" class="form-check-input" value="true" required />
        <label class="form-check-label" for="user_terms_and_conditions">I have read and agree to the <a href="${(0,n.default)(e.termsUrl)}" onclick="window.open(this.href, &#x27;api_umbrella_terms&#x27;, &#x27;height=500,width=790,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=yes&#x27;); return false;" title="Opens new window to terms and conditions">terms and conditions</a>.</label>
        <div id="user_terms_and_conditions_feedback" class="invalid-feedback">You must agree to the terms and conditions to signup.</div>
      </div>
    </div>
  `:s+=`<input type="hidden" name="user[terms_and_conditions]" value="true" />`,s+=`
  <div class="submit">
    <input type="hidden" name="user[registration_source]" value="${(0,n.default)(e.registrationSource)}" />
    <button type="submit" class="btn btn-lg btn-primary">Sign up</button>
  </div>

  <p class="mt-4 mb-0">To disable or revoke an existing key, <a href="#/deactivate-api-key">begin API key deactivation</a>.</p>
`,(o||i)&&(s+=`<div class="recaptcha-notice">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</div>`),s+=`</form>`,ge=`
  <div id="api_umbrella_form_modal" class="dialog-container" aria-labelledby="api_umbrella_form_modal_title" aria-hidden="true">
    <div class="modal-backdrop show" data-a11y-dialog-hide></div>
    <div role="document" class="modal show d-block">
      <div class="modal-dialog modal-lg">
        <div class="modal-content shadow">
          <div class="modal-header">
            <h1 class="h4 mb-0 modal-title" id="api_umbrella_form_modal_title"></h1>
            <button type="button" class="btn-close" aria-label="Close" data-a11y-dialog-hide></button>
          </div>
          <div class="modal-body" id="api_umbrella_form_modal_body">
          </div>
          <div class="modal-footer" id="api_umbrella_form_modal_footer" hidden>
            <button type="button" class="btn btn-primary" data-a11y-dialog-hide>OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`,ve=`
  <div id="api_umbrella_alert_modal" class="dialog-container" aria-labelledby="api_umbrella_alert_modal_title" aria-hidden="true">
    <div class="modal-backdrop show" data-a11y-dialog-hide></div>
    <div role="document" class="modal show d-block">
      <div class="modal-dialog mt-5">
        <div class="modal-content shadow">
          <div class="modal-header">
            <h1 class="h4 mb-0 modal-title" id="api_umbrella_alert_modal_title">Error</h1>
            <button type="button" class="btn-close" aria-label="Close" data-a11y-dialog-hide></button>
          </div>
          <div class="modal-body" id="api_umbrella_alert_modal_body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-a11y-dialog-hide>OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`,be=`
  <p>Deactivation requires email verification. Enter the key details and we'll send an email confirmation to complete the request.</p>

  <form id="api_umbrella_request_deactivation_form" novalidate>
    <div class="form-group api-key-form-group">
      <label class="form-label" for="user_api_key">API Key <abbr title="required" class="required">*</abbr></label>
      <input class="form-control" id="user_api_key" aria-describedby="user_api_key user_api_key" name="user[api_key]" size="50" type="text" minlength="40" maxlength="40" required />
      <div class="form-text" id="user_api_key">Enter the full API key you want to deactivate.</div>
      <div id="user_api_key" class="invalid-feedback">Enter a full API key.</div>
    </div>

    <div class="form-group email-form-group">
      <label class="form-label" for="user_email">Email <abbr title="required" class="required">*</abbr></label>
      <input class="form-control" id="user_email" aria-describedby="user_email_hint user_email_feedback" name="user[email]" size="50" type="email" required />
      <div class="form-text" id="user_email_hint">Enter the email you used to create this API key.</div>
      <div id="user_email_feedback" class="invalid-feedback">Enter an email address.</div>
    </div>

    <div class="submit">
      <button type="submit" class="btn btn-lg btn-primary">Send confirmation email</button>
    </div>
  </form>
`,v=document.querySelector(e.containerSelector),v.textContent="",A=document.createElement("div"),A.className="api-umbrella-signup-embed-content-container",v.appendChild(A),L=A.attachShadow({mode:"open"}),o&&(x=document.createElement("div"),x.className="api-umbrella-signup-embed-recaptcha-v2",x.style="visibility: hidden;",v.appendChild(x)),i&&(w=document.createElement("div"),w.className="api-umbrella-signup-embed-recaptcha-v3",w.style="visibility: hidden;",v.appendChild(w)),xe=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),Ce=parseFloat(window.getComputedStyle(v).getPropertyValue("font-size")),Q=`${Ce/xe}rem`,r=document.createElement("div"),r.className="app-style-root",r.innerHTML=s,r.style.setProperty("--api-umbrella-rem-relative-base",Q),L.appendChild(r),R=document.createElement("div"),R.id="api-umbrella-signup-embed-body-container",E=R.attachShadow({mode:"open"}),O=document.createElement("div"),O.className="app-style-root",O.innerHTML=ge+ve,O.style.setProperty("--api-umbrella-rem-relative-base",Q),E.appendChild(O),document.body.appendChild(R),ne(L,{rel:"stylesheet",href:Y}),ne(E,{rel:"stylesheet",href:Y}),h=E.getElementById("api_umbrella_form_modal"),c=h.querySelector("#api_umbrella_form_modal_body"),u=h.querySelector("#api_umbrella_form_modal_footer"),d=new M(h),d.on("hide",()=>{l.currentLocation.pathname!=="/"&&l.push("/")}),T=E.getElementById("api_umbrella_alert_modal"),ee=T.querySelector("#api_umbrella_alert_modal_body"),I=new M(T),h.querySelectorAll("[data-a11y-dialog-hide]").forEach(e=>{e.addEventListener("click",d.hide)}),T.querySelectorAll("[data-a11y-dialog-hide]").forEach(e=>{e.addEventListener("click",I.hide)}),j=L.querySelector("form"),C=j.querySelector("button[type=submit]");function he(e){e.disabled||(e.dataset.origInnerHTML=e.innerHTML,e.disabled=!0,e.innerText="Loading...")}function D(e){e.disabled&&(e.disabled=!1,e.innerHTML=e.dataset.origInnerHTML,delete e.dataset.origInnerHTML)}function z(t){return fetch(t.url,{method:t.data?"POST":"GET",headers:{"Content-Type":t.data?"application/json":0[0],"X-Api-Key":e.apiKey},body:t.data?JSON.stringify(t.data):0[0],credentials:"omit"}).then(e=>{if(e.status===404&&t.onNotFound)return t.onNotFound(),Promise.resolve();const n=e.headers.get("Content-Type");if(!n||!n.includes("application/json"))throw new Error("Response is not JSON");return e.json().then(n=>{if(!e.ok)throw{responseData:n};t.onSuccess(n)})}).catch(s=>{const o=[];let i="";try{if(s?.responseData?.errors)for(let t=0;t<s.responseData.errors.length;t+=1){const e=s.responseData.errors[t];(e.full_message||e.message)&&o.push((0,n.default)(e.full_message||e.message))}s?.responseData?.error?.message&&o.push((0,n.default)(s.responseData.error.message)),o.length>0?i=`<ul><li>${o.join("</li><li>")}</li></ul>`:console.error(s)}catch(e){console.error(e)}let{errorIntro:a,errorOutro:r}=t;i||(a=`<p>An unexpected error occurred.</p>`,r=`
          <p class="mb-0">
            Please try again or <a href="${(0,n.default)(e.issuesUrl)}">file an issue</a> for assistance.
          </p>
        `),ee.innerHTML=`
        ${a}
        ${i}
        ${r}
      `,I.show()}).finally(()=>{t.submitButtonEl&&D(t.submitButtonEl)})}function se(){const t={...(0,F.default)(j,{hash:!0}),options:{example_api_url:e.exampleApiUrl,contact_url:e.contactUrl,site_name:e.siteName,send_welcome_email:e.sendWelcomeEmail,email_from_name:e.emailFromName,email_from_address:e.emailFromAddress,verify_email:e.verifyEmail}};return t?.user?.terms_and_conditions==="true"&&(t.user.terms_and_conditions=!0),o&&(t["g-recaptcha-response-v2"]=y),i&&(t["g-recaptcha-response-v3"]=N),z({url:`${e.apiUrlRoot}/v1/users.json`,data:t,onSuccess:t=>{const{user:s}=t;let o="";t.options.verify_email?o+=`
          <p>Your API key for <strong>${(0,n.default)(s.email)}</strong> has been emailed to you. You can use your API key to begin making web service requests immediately.</p>
          <p>If you don't receive your API Key via email within a few minutes, please check your junk mail.</p>
        `:o+=`
          <p>Your API key for <strong>${(0,n.default)(s.email)}</strong> is:</p>
          <pre class="signup-key"><code>${(0,n.default)(s.api_key)}</code></pre>
          <p>You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:</p>
          <pre class="signup-example"><a href="${(0,n.default)(t.options.example_api_url)}">${t.options.example_api_url_formatted_html}</a></pre>
        `,o+=`
        ${e.signupConfirmationMessage}
        <div class="signup-footer">
          <p>For additional support, please <a href="${(0,n.default)(t.options.contact_url)}">contact us</a>. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:</p>
          Account Email: ${(0,n.default)(s.email)}<br>
          Account ID: ${(0,n.default)(s.id)}
        </div>
      `,r.innerHTML=o,r.tabIndex=-1,r.focus(),r.scrollIntoView()},errorIntro:`<p>API key signup unexpectedly failed.</p>`,errorOutro:`
      <p class="mb-0">
        Please try again or <a href="${(0,n.default)(e.issuesUrl)}">file an issue</a> for assistance.
      </p>
    `,submitButtonEl:C})}function We(t,s){const o={...(0,F.default)(t,{hash:!0}),options:{submitted_from_url:window.location.href}};return z({url:`${e.apiUrlRoot}/v1/users/request-deactivation.json`,data:o,onSuccess:e=>{c.innerHTML=`
        <p>Instructions for deactivating your API key have been emailed to <strong>${(0,n.default)(e.user.email)}</strong>. You must complete the emailed steps before your key will be deactivated.</p>

        <p>If you don't receive instructions via e-mail within a few minutes, please check your junk mail.</p>
      `,u.hidden=!1},errorIntro:"",errorOutro:'<p class="mb-0">Please resolve the validation errors and try again.</p>',submitButtonEl:s})}function Ue(t,s){const o={...(0,F.default)(t,{hash:!0}),options:{submitted_from_url:window.location.href}};return z({url:`${e.apiUrlRoot}/v1/users/confirm-deactivation.json`,data:o,onSuccess:e=>{c.innerHTML=`
        <p>Your API key ending in <code>${(0,n.default)(e.user.api_key_suffix)}</code> is <strong>now deactivated</strong>.</p>
      `,u.hidden=!1},errorIntro:"",errorOutro:"",submitButtonEl:s})}function p(e){o&&(y=window.grecaptcha.getResponse(B),y&&(P&&(clearTimeout(P),P=null),he(e))),i&&(N=window.grecaptcha.getResponse(V)),(o&&y||!o)&&(i&&N||!i)&&se()}window.apiUmbrellaRecaptchaLoadCallback=function(){o&&(B=window.grecaptcha.render(x,{sitekey:e.recaptchaV2SiteKey,size:"invisible",isolated:!0,callback:p.bind(null,C),"error-callback":()=>{o=!1,console.error("recaptcha v2 render error")}})),i&&(V=window.grecaptcha.render(w,{sitekey:e.recaptchaV3SiteKey,size:"invisible",isolated:!0,callback:p.bind(null,C),"error-callback":()=>{i=!1,console.error("recaptcha v3 render error")}}))},(o||i)&&$e(document.body,{src:`https://www.google.com/recaptcha/api.js?render=explicit&onload=apiUmbrellaRecaptchaLoadCallback`,type:"text/javascript",async:!0,defer:!0});function G(e,t,n,s,a){if(e.preventDefault(),he(n),!t.checkValidity())return t.classList.add("was-validated"),t.reportValidity(),D(n),!1;if((!window.grecaptcha||!window.grecaptcha.execute)&&(o=!1,i=!1),s&&(o||i))try{o&&(P=setTimeout(D,3e3,n),y=null,window.grecaptcha.execute(B).then(()=>{o||p(n)}).catch(e=>{console.error("recaptcha v2 execute catch: ",e),o=!1,p(n)})),i&&(N=null,window.grecaptcha.execute(V,{action:"signup"}).then(()=>{i||p(n)}).catch(e=>{console.error("recaptcha v3 execute catch: ",e),i=!1,p(n)}))}catch(e){console.error("recaptcha error: ",e),alert("Unexpected error occurred while validating CAPTCHA. Please try again or contact us for assistance"),D(n)}else a()}j.addEventListener("submit",e=>{G(e,j,C,!0,se)}),l.add("/deactivate-api-key",()=>{h.querySelector("h1").innerHTML="Deactivate an API Key",c.innerHTML=be,u.hidden=!0,d.show();const e=c.querySelector("form"),t=e.querySelector("button[type=submit]");e.addEventListener("submit",n=>{G(n,e,t,!1,We.bind(null,e,t))})}),l.add("/confirm-deactivation",({query:t})=>{h.querySelector("h1").innerHTML="Deactivate an API Key",c.innerHTML="<p>Loading...</p>",u.hidden=!0,d.show(),z({url:`${e.apiUrlRoot}/v1/users/confirm-deactivation.json?${new URLSearchParams({token:t.token}).toString()}`,onSuccess:e=>{c.innerHTML=`
        <p>To complete the deactivation process, review the details below and confirm your request.</p>

        <ul>
          <li><strong>API Key:</strong> <code>...${(0,n.default)(e.user.api_key_suffix)}</code></li>
          <li><strong>Key Created:</strong> ${(0,n.default)(e.user.created_at)}</li>
        </ul>

        <p>Are you sure you want to deactivate this key? Once deactivated, requests using this API key will fail. Until you confirm, the API key will remain active.</p>

        <form id="api_umbrella_confirm_deactivation_form" novalidate>
          <input type="hidden" name="user[deactivation_token]" value="${(0,n.default)(t.token)}" />

          <div class="form-actions">
            <button type="submit" class="btn btn-lg btn-primary">Deactivate this API key</button>
          </div>
        </form>
      `,u.hidden=!0;const s=c.querySelector("form"),o=s.querySelector("button[type=submit]");s.addEventListener("submit",e=>{G(e,s,o,!1,Ue.bind(null,s,o))})},onNotFound:()=>{c.innerHTML=`<p>This deactivation link could not be found or has expired. You may <a href="#/deactivate-api-key">begin API key deactivation</a> again.</p>`,u.hidden=!1},errorIntro:"",errorOutro:""})}),l.add("*",()=>{d.shown&&d.hide()}),l.run()})()