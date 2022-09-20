/*! For license information please see main.js.LICENSE.txt */
!function(){var t={222:function(){document.documentElement.nodeType},528:function(){!function(){const t=document.querySelector('meta[name="viewport"]');function e(){const e=window.outerWidth>414?"width=device-width,initial-scale=1.0":"width=414";t.getAttribute("content")!==e&&t.setAttribute("content",e)}addEventListener("resize",e,!1),e()}()}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,i),a.exports}!function(){"use strict";i(222);const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=t=>new s("string"==typeof t?t:t+"",e),r=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(n,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return a(e)})(t):t;var l;const c=window.trustedTypes,d=c?c.emptyScript:"",p=window.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var n,s;const a=this.constructor._$Eh(t,i);if(void 0!==a&&!0===i.reflect){const r=(null!==(s=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==s?s:m.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Ei=null}}_$AK(t,e){var i,n,s;const a=this.constructor,r=a._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=a.getPropertyOptions(r),o=t.converter,l=null!==(s=null!==(n=null===(i=o)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof o?o:null)&&void 0!==s?s:m.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,x="?"+y,_=`<${x}>`,w=document,A=(t="")=>w.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,P=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,I=/>/g,L=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,T=/"/g,z=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=D(1),M=(D(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),H=new WeakMap,B=w.createTreeWalker(w,129,null,!1),U=(t,e)=>{const i=t.length-1,n=[];let s,a=2===e?"<svg>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===k?"!--"===l[1]?r=C:void 0!==l[1]?r=I:void 0!==l[2]?(z.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=null!=s?s:k,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?L:'"'===l[3]?T:S):r===T||r===S?r=L:r===C||r===I?r=k:(r=L,s=void 0);const p=r===L&&t[e+1].startsWith("/>")?" ":"";a+=r===k?i+_:c>=0?(n.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+y+p):i+y+(-2===c?(n.push(void 0),e):p)}const o=a+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(o):o,n]};class F{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,a=0;const r=t.length-1,o=this.parts,[l,c]=U(t,e);if(this.el=F.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=B.nextNode())&&o.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[a++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?K:"@"===e[1]?X:Y})}else o.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(z.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],A()),B.nextNode(),o.push({type:2,index:++s});n.append(t[e],A())}}}else if(8===n.nodeType)if(n.data===x)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)o.push({type:7,index:s}),t+=y.length-1}s++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function R(t,e,i=t,n){var s,a,r,o;if(e===M)return e;let l=void 0!==n?null===(s=i._$Cl)||void 0===s?void 0:s[n]:i._$Cu;const c=$(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(o=i)._$Cl)&&void 0!==r?r:o._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=R(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(i,!0);B.currentNode=s;let a=B.nextNode(),r=0,o=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new N(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new V(a,this,t)),this.v.push(e),l=n[++o]}r!==(null==l?void 0:l.index)&&(a=B.nextNode(),r++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{constructor(t,e,i,n){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),$(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):P(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==O&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=F.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new q(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new F(t)),e}S(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new N(this.M(A()),this.M(A()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,n,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let a=!1;if(void 0===s)t=R(this,t,e,0),a=!$(t)||t!==this._$AH&&t!==M,a&&(this._$AH=t);else{const n=t;let r,o;for(t=s[0],r=0;r<s.length-1;r++)o=R(this,n[i+r],e,r),o===M&&(o=this._$AH[r]),a||(a=!$(o)||o!==this._$AH[r]),o===O?t=O:t!==O&&(t+=(null!=o?o:"")+s[r+1]),this._$AH[r]=o}a&&!n&&this.C(t)}C(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends Y{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===O?void 0:t}}const W=v?v.emptyScript:"";class K extends Y{constructor(){super(...arguments),this.type=4}C(t){t&&t!==O?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class X extends Y{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=R(this,t,e,0))&&void 0!==i?i:O)===M)return;const n=this._$AH,s=t===O&&n!==O||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==O&&(n===O||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const Z={L:"$lit$",P:y,V:x,I:1,N:U,R:q,j:P,D:R,H:N,F:Y,O:K,W:X,B:G,Z:V},J=window.litHtmlPolyfillSupport;var Q,tt;null==J||J(F,N),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.5");class et extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,s;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=a._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;a._$litPart$=r=new N(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}et.finalized=!0,et._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;function nt(t){let e=t,i=window.pageYOffset,n=e-i,s=null;window.requestAnimationFrame((function t(e){s||(s=e);const a=e-s;window.scrollTo(0,function(t,e,i,n){return(t/=375)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e}(a,i,n)),a<750&&window.requestAnimationFrame(t)}))}null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.0");var st=r`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    span,
    em,
    small,
    strong,
    sub,
    sup,
    mark,
    del,
    ins,
    strike,
    abbr,
    dfn,
    blockquote,
    q,
    cite,
    code,
    pre,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    div,
    section,
    article,
    main,
    aside,
    nav,
    header,
    hgroup,
    footer,
    img,
    figure,
    figcaption,
    address,
    time,
    audio,
    video,
    canvas,
    iframe,
    details,
    summary,
    fieldset,
    form,
    label,
    input,
    textarea,
    select,
    button,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
        border: 0;
        margin: 0;
        padding: 0;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }

    a {
        background-color: transparent;
        color: inherit;
        text-decoration: none;
        vertical-align: baseline;
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
        text-decoration: none;
    }

    a:active,
    a:hover {
        outline-width: 0;
    }

    abbr[title],
    dfn[title] {
        border-bottom: 1px dotted;
        cursor: help;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    button {
        appearance: none;
        background-color: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
        font: inherit;
    }

    del {
        text-decoration: line-through;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: inherit;
        display: block;
        font-size: 100%;
        font-weight: bold;
        font-family: inherit;
        line-height: 1.2em;
        margin-top: 0;
    }

    h1,
    .u-h1 {
        font-size: 2.5rem;
    }

    h2,
    .u-h2 {
        font-size: 2rem;
    }

    h3,
    .u-h3 {
        font-size: 1.75rem;
    }

    h4,
    .u-h4 {
        font-size: 1.5rem;
    }

    h5,
    .u-h5 {
        font-size: 1.25rem;
    }

    h6,
    .u-h6 {
        font-size: 1rem;
    }

    hr {
        border-top: 1px solid #cccccc;
        display: block;
        height: 1px;
        margin: 1em 0;
        padding: 0;
    }

    i,
    cite,
    em,
    address,
    dfn {
        font-style: normal;
    }

    pre {
        width: 100%;
        white-space: pre;
        word-break: normal;
        word-spacing: normal;
        word-wrap: normal;
    }

    code {
        position: relative;
        display: block;
        color: #fff;
    }

    img {
        border: none;
        border-style: none;
        height: auto;
        max-height: 100%;
        vertical-align: top;
    }

    img,
    video {
        max-width: 100%;
    }

    input,
    select,
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        background-image: none;
        border: none;
        border-radius: 0;
        color: inherit;
        font: inherit;
    }

    input[type="text"],
    input[type="search"],
    input[type="tel"],
    input[type="url"],
    input[type="email"],
    input[type="password"],
    input[type="date"],
    input[type="datetime"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="number"],
    input[type="submit"],
    input[type="button"] {
        max-width: 100%;
    }

    input:focus,
    textarea:focus {
        box-shadow: none;
    }

    input[type="radio"]:checked+label {
        background-color: #ff0000;
    }

    input[type="submit"] {
        text-decoration: none;
    }

    input[type="submit"],
    input[type="button"],
    label,
    select {
        cursor: pointer;
    }

    select::-ms-expand {
        display: none;
    }

    textarea {
        resize: none;
    }

    ins {
        background-color: #ffff99;
        color: #000000;
        text-decoration: none;
    }

    li,
    ol {
        list-style: none;
        list-style-type: none;
    }

    legend {
        color: #000000;
    }

    mark {
        background-color: #ffff99;
        color: #000000;
        font-style: italic;
        font-weight: bold;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    [hidden] {
        display: none !important;
    }

    [disabled] {
        cursor: not-allowed;
    }

    [hover] {
        border: none;
        outline: none;
    }
`,at=r`
.u-hidden {
    display: none;
}

.u-content-area.-top {
    padding-top: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
}

.u-content-area.-bottom {
    padding-bottom: 100px;
}

.u-title-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.u-flex {
    display: flex;
}

.u-flex-wrap {
    flex-wrap: wrap;
}

.u-flex-bet {
    justify-content: space-between;
}

.u-flex-content-center {
    align-items: center;
}

.u-flex-justify-center {
    justify-content: center;
}

.u-flex-row {
    flex-direction: row;
}

.u-flex-column {
    flex-direction: column;
}

.u-flex-none {
    display: block !important;
}

.u-visual-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.u-under-line {
    border-bottom: 1px solid currentColor;
}

.u-uppercase {
    text-transform: uppercase;
}

.u-capitalize {
    text-transform: capitalize;
}

.u-brsp {
    display: inline-block;
}

.u-brpc {
    display: none;
}

@media screen and (min-width: 768px) {
    .u-brsp {
        display: none;
    }

    .u-brpc {
        display: inline-block;
    }
}`;const rt="gl-wrapper";customElements.get(rt)||customElements.define(rt,class extends et{constructor(){super()}static get styles(){return[st,at,r`
            .gl-wrapper {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(7, auto);
                grid-column-gap: 0px;
                grid-row-gap: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }
            `]}render(){return j`
        <div class="gl-wrapper">
            <slot></slot>
        </div>`}});const{H:ot}=Z,lt=(t,e)=>{var i,n;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(n=(i=t)._$AO)||void 0===n||n.call(i,e,!1),lt(t,e);return!0},ct=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},dt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ht(e)}};function pt(t){void 0!==this._$AN?(ct(this),this._$AM=t,dt(this)):this._$AM=t}function mt(t,e=!1,i=0){const n=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)lt(n[t],!1),ct(n[t]);else null!=n&&(lt(n,!1),ct(n));else lt(this,t)}const ht=t=>{var e,i,n,s;2==t.type&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=mt),null!==(i=(s=t)._$AQ)&&void 0!==i||(s._$AQ=pt))},ut=()=>new gt;class gt{}const ft=new WeakMap,vt=(xt=class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),dt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(lt(this,t),ct(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}{render(t){return O}update(t,[e]){var i;const n=e!==this.U;return n&&void 0!==this.U&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.U=e,this.ht=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),O}ot(t){var e;if("function"==typeof this.U){const i=null!==(e=this.ht)&&void 0!==e?e:globalThis;let n=ft.get(i);void 0===n&&(n=new WeakMap,ft.set(i,n)),void 0!==n.get(this.U)&&this.U.call(this.ht,void 0),n.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)}else this.U.value=t}get rt(){var t,e,i;return"function"==typeof this.U?null===(e=ft.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.U):null===(i=this.U)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},(...t)=>({_$litDirective$:xt,values:t})),bt=location.href.split(/#/)[0],yt=(bt.substring(0,bt.lastIndexOf("/")),"AWESOME COSME");var xt;class _t{constructor(t,e,i){this.options=Object.assign({delay:5e3,fader:500,counter:0,zoom:"data-effect",dotted:!0},i),this.stylesheet=document.styleSheets,this.useSheet=this.stylesheet[this.stylesheet.length-1],this.container=t,this.pictures=e,this.delay=this.options.delay,this.fader=this.options.fader,this.counter=this.options.counter,this.dotted=this.options.dotted,this.zoom=this.options.zoom,this._init()}_init(){if(!this.container)return!1;this._process()}_process(){if(this.pictures[0].dataset.slideActive="true",this.pictures.length<2)return console.warn("スライド画像を2枚以上用意して設定してください。");setInterval((()=>{if(this.counter<this.pictures.length-1){let t=this.pictures[this.counter],e=this.pictures[++this.counter];"zoom"===this.container.getAttribute(this.zoom)?this._zoomAnimation(t,e):this._internalAttribute(t,e)}else{let t=this.pictures[this.counter],e=this.pictures[this.counter=0];"zoom"===this.container.getAttribute(this.zoom)?this._zoomAnimation(t,e):this._internalAttribute(t,e)}}),this.delay)}_internalAttribute(t,e){t.dataset.slideActive="false",e.dataset.slideActive="true"}_zoomAnimation(t,e){t.dataset.slideActive="false",e.dataset.slideActive="true",e.dataset.zoomResolve="true",setTimeout((()=>{t.dataset.zoomResolve="false"}),this.fader)}_transparent(t){return t.style.opacity=1}}customElements.get("section-slider-component")||customElements.define("section-slider-component",class extends et{static get styles(){return[st,r`
            .fragment--topMainvisual {
                display: block;
                height: 100vh;
                position: relative;
                z-index: 0;
                overflow: hidden;
                width: calc(100% - var(--sidebar-impression-sp));
                margin-right: auto;
            }

            .fragment--topMainvisual_Inner {
                display: grid;
                grid-template-columns: 23px minmax(0, auto) 23px;
                grid-template-rows: calc(100vh - var(--private-header-height-sp)) var(--private-header-height-sp);
                align-items: end;
            }

            .fragment--topMainvisual-Picture_List-Item {
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                display: block;
                height: 100%;
                left: 0;
                object-fit: cover;
                transition: opacity 0.75s ease-in-out 0s;
                opacity: 0;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 1;
            }

            .fragment--topMainvisual-Picture_List-Item[data-slide-active="true"] {
                opacity: 1;
                transition: opacity 0.75s ease-in-out 0s;
            }

            .fragment--topMainvisual-Title {
                --clamp-size: 12.07729vw;
                font-family: var(--font-serif-en);
                font-size: clamp(3.125rem,var(--clamp-size),4.1875rem);
                min-height: 0;
                color: var(--color-text-primary);
                font-weight: 400;
            }

            .fragment--topMainvisual-TitleArea {
                position: relative;
                z-index: 5;
            }

            .fragment--topMainvisual-Presentation {
                line-height: 1.6;
            }

            .fragment--topMainvisual-Picture_List-Item.-options {
                background: rgba(0, 0, 0, .2) radial-gradient(rgba(0, 0, 0, .4) 30%, transparent 0) center center / 4px 4px;
                display: inline-block;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100%;
            }

            @media (min-width: 768px) {
                .fragment--topMainvisual {
                    width: calc(100% - var(--sidebar-impression-pc));
                }

                .fragment--topMainvisual_Inner {
                    grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-lg)) minmax(23px, 1fr);
                    grid-template-rows: calc(100vh - var(--private-header-height-pc)) var(--private-header-height-pc);
                }

                .fragment--topMainvisual-TitleArea {
                    bottom: 50px;
                }
            }
            `]}PictureList=ut();PictureItem=ut();firstUpdated(){const t=this.PictureList.value,e=t.querySelectorAll(".fragment--topMainvisual-Picture_List-Item");new _t(t,e)}_messageArea(){return j`
        <div class="fragment--topMainvisual-TitleArea">
            <h2 class="fragment--topMainvisual-Title">${yt}</h2>
            <p class="fragment--topMainvisual-Presentation">
                今を生きる現代女性へ向けて誕生した「AWESOME COSME」。 <br class="sp-br" />そのコンセプトと同じように、しなやかさと輝きを放つ、魅力的な女性たちのキレイの秘密に迫る。
            </p>
        </div>
        `}render(){return j`
        <section class="fragment--topMainvisual">
            <div class="fragment--topMainvisual_Inner">
                <div class="fragment--topMainvisual-Pictures">
                    <ul class="fragment--topMainvisual-Picture_List" data-effect="false" ${vt(this.PictureList)}>
                        <li class="fragment--topMainvisual-Picture_List-Item" data-slide-active="false" style="background-image: url('../images/mainvisual-01.jpg');" ${vt(this.PictureItem)}></li>
                        <li class="fragment--topMainvisual-Picture_List-Item" data-slide-active="false" style="background-image: url('../images/mainvisual-02.jpg');" ${vt(this.PictureItem)}></li>
                    </ul>
                </div>
                ${this._messageArea()}
            </div>
        </section>
        `}});const wt=t=>{const e=document.getElementsByTagName("body")[0],i=document.documentElement.style.getPropertyValue("--scroll-y")||"0",n=window.innerWidth-e.clientWidth;e.style.paddingRight=t?`${n}px`:"",document.documentElement.style.minHeight=t?"100vh":"";const s={height:"100vh",left:"0",overflow:"hidden",position:"fixed",top:`-${i}`,width:"100vw"};Object.keys(s).forEach((e=>{document.body.style[e]=t?s[e]:""}))},At=(t,e)=>{const i=Object.assign({speed:250,control:!0},e);let n=i.control;if(n)return console.log("destroy");n=!0,setTimeout((()=>{t(),n=!1}),i.speed)},$t=()=>document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`);window.addEventListener("scroll",(()=>{At($t,{speed:250,control:!1})}),!1),window.removeEventListener("scroll",At,!1);class Et{constructor(t,e,i){if(this.modal=e,this.root=t,this.modal)return this.options=Object.assign({openTrigger:"data-modal-target",closeTrigger:"data-modal-close",openClass:"is-open",disableScroll:!1,disableFocus:!1,awaitCloseAnimation:!1,awaitOpenAnimation:!1,closeTime:400,startTime:400,contentWrapper:""},i),this.touchEventHandler=this._touchEventHandler(),this.openTrigger=this.root.querySelectorAll(`[${this.options.openTrigger}]`),this.closeTrigger=this.root.querySelectorAll(`[${this.options.closeTrigger}]`),this.focusableElements=this.root.querySelectorAll('a[href], input:not([disabled]):not([type="hidden"]):not([aria-hidden]), select:not([disabled]):not([aria-hidden]), textarea:not([disabled]):not([aria-hidden]), button:not([disabled]):not([aria-hidden]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])'),this.openTrigger?this.closeTrigger?void this.init():console.error("[Modal: Error Message] closeTriggerは必須です。"):console.error("[Modal: Error Message] openTriggerは必須です。")}init(){this.modalAttributes(),this._showModal(),this._closeModal(),this._focusModalOnKeyDown()}_showModal(){this.openTrigger.forEach((t=>{t.addEventListener(this.touchEventHandler,(t=>{this._open(t)}))}))}_closeModal(){this.closeTrigger.forEach((t=>{t.addEventListener(this.touchEventHandler,(t=>{t.currentTarget===t.target&&this._close()}))}))}_focusModalOnKeyDown(){this.modal.addEventListener("keydown",(t=>{this._onKeydown(t)}))}_open(t){const e=t.currentTarget.getAttribute(`${this.options.openTrigger}`),i=this.root.querySelector(`#${e}`);i.style.display="",i.setAttribute("aria-hidden","false"),this.options.disableScroll&&wt(!0),this.options.awaitOpenAnimation?setTimeout((()=>{i.classList.add(this.options.openClass),i.removeAttribute("style")}),this.options.startTime):(i.classList.add(this.options.openClass),i.removeAttribute("style")),setTimeout((()=>{i.focus()}),100)}_close(){this.modal.setAttribute("aria-hidden","true"),this.modal.setAttribute("inert","");const t=-1*parseInt(document.body.style.top||"0");setTimeout((()=>{this.options.disableScroll&&wt(!1),this.modal.removeAttribute("inert",""),this.modal.classList.remove(this.options.openClass),this.modal.style.display="none",window.scrollTo({top:t,left:0,behavior:"auto"})}),this.options.closeTime)}_onKeydown(t){if(!this.options.disableScroll)return;const e=this.focusableElements[0],i=this.focusableElements[this.focusableElements.length-1],n=!t.shiftKey&&"Tab"===t.code,s=t.shiftKey&&"Tab"===t.code;n&&document.activeElement===i&&(t.preventDefault(),e.focus()),s&&document.activeElement===e&&(t.preventDefault(),i.focus()),"Escape"===t.code&&this._close()}modalAttributes(){this.modal.setAttribute("role","dialog"),this.modal.setAttribute("aria-hidden","true"),this.modal.setAttribute("aria-modal","true"),this.modal.setAttribute("tabindex","-1"),this.modal.style.display="none",document.documentElement.style.setProperty("--modal-animation-close",`${this.options.closeTime}ms`),document.documentElement.style.setProperty("--modal-animation-start",`${this.options.startTime}ms`),this.openTrigger.forEach((t=>{t.setAttribute("aria-haspopup","dialog")}))}_touchEventHandler(){return window.ontouchstart?"touchstart":"click"}}var Pt=r`
.ly-Inner_Grid {
    display: grid;
    grid-template-columns: 23px minmax(0, auto) 23px;
}

.ly-Inner_Grid>*,
.ly-Inner_Grid::before,
.ly-Inner_Grid::after {
    grid-column: 2;
}

@media screen and (min-width: 1200px) {
    .ly-Inner_Grid.-xl {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-xl)) minmax(23px, 1fr);
    }
}

@media screen and (min-width: 992px) {
    .ly-Inner_Grid.-lg {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-lg)) minmax(23px, 1fr);
    }

    .ly-Inner_Grid.-md {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-md)) minmax(23px, 1fr);
    }
}

@media screen and (min-width: 768px) {
    .ly-Inner_Grid.-sm {
        grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-sm)) minmax(23px, 1fr);
    }
}`,kt=r`
.c-headline-lv1 {
    --clamp-size: 12.07729vw;
    font-family: Cormorant Garamond, serif;
    font-family: var(--font-serif-en);
    font-size: clamp(3.125rem,var(--clamp-size),4.1875rem);
    min-height: 0;
}

.c-headline-lv1,
.c-headline-lv2 {
    color: #2d1b0e;
    color: var(--color-text-primary);
    font-weight: 400;
}

.c-headline-lv2 {
    --clamp-size: 7.24638vw;
    font-size: clamp(1.875rem,var(--clamp-size),2.375rem);
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.11875rem;
    line-height: 1.32;
    min-height: 0;
    text-align: left
}

.c-headline-lv3 {
    color:#2d1b0e;
    color: var(--color-text-primary);
    font-family: var(--font-family-en);
    font-size: 2.25rem;
    font-weight: 400;
    letter-spacing: normal;
    text-align: center;
}

.c-headline-lv4 {
    font-size: 1.75rem;
    letter-spacing: .0875rem;
}

.c-headline-lv4,
.c-headline-lv5 {
    color:#2d1b0e;
    color:var(--color-text-primary);
    font-weight:400;
    text-align:left;
}

.c-headline-lv5 {
    font-family: var(--font-family-en);
    font-size: 1.5rem;
    letter-spacing: normal;
}

.c-headline-lv6 {
    --clamp-size: 2.89855vw;
    align-items: center;
    color:#2d1b0e;
    color: var(--color-text-primary);
    display: flex;
    font-family: Cormorant Garamond,serif;
    font-family: var(--font-serif-en);
    font-size: clamp(.75rem,var(--clamp-size),1.125rem);
    font-weight: 400;
    letter-spacing: normal;
    min-height: 0;
}

.c-headline-lv6:before {
    --clamp-size:9.66184vw;
    background-color:#d3d3d3;
    background-color: var(--color-accent-gray);
    content: "";
    display: block;
    height: 1px;
    margin-right: clamp(10px,1.7vw,23.5px);
    min-height: 0;
    width: clamp(40px,var(--clamp-size),60px);
}

.c-headline-number {
    counter-reset: num;
}

.c-headline-number\:index {
    counter-increment: num;
    display: inline-block;
}
.c-headline-number\:index:before {
    content: counter(num,decimal-leading-zero);
}
`,Ct=r`
    .o-Typography-Landing {
        line-height: 2;
        letter-spacing: 0.05em;
    }

    .o-userWriting-Area {
        --reading-title: 1.71;
    }

    .o-userWriting-Area > * {
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .o-userWriting-Area > :first-child {
        margin-top: 0!important;
    }

    .o-userWriting-Area > :last-child {
        margin-bottom: 0!important;
    }

    .o-userWriting-Area p:not([class]) {
        line-height: 1.71;
        line-height: var(--reading-title);
        letter-spacing: var(--tracking-wide);
        font-size: 1rem;
    }

    .o-userWriting-Area h3:not([class]) {
        line-height: var(--reading-title);
        letter-spacing: var(--tracking-wide);
        font-weight: normal;
        font-family: var(--font-serif-ja) !important;
        font-size: 1.5rem;
    }
`,It=r`
.component-scope-modal[aria-hidden=false]{display:block}
.component-scope-modal[aria-hidden=true] .component-scope-modal-container {-webkit-animation:fadeOut var(--modal-animation-close) ease-in-out forwards;animation:fadeOut var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal[aria-hidden=false] .component-scope-modal-container{-webkit-animation:fadeIn var(--modal-animation-close) ease-in-out forwards;animation:fadeIn var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal .component-scope-modal-container{align-items:center;justify-content:center}
.component-scope-modal .component-scope-modal-inner{max-height:80%;padding:3px;width:80%}
.component-scope-modal[aria-hidden=true] .component-scope-modal-inner{-webkit-animation:zoomOut var(--modal-animation-close) ease-in-out forwards;animation:zoomOut var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal[aria-hidden=false] .component-scope-modal-inner{-webkit-animation:zoomIn var(--modal-animation-close) ease-in-out forwards;animation:zoomIn var(--modal-animation-close) ease-in-out forwards}
.component-scope-modal .component-scope-modal-inner:before{content:"";display:block;padding-top:56.25%}
.component-scope-modal .component-scope-modal-content{bottom:0;left:0;position:absolute;right:0;top:0}
.component-scope-modal-container{align-items:flex-start;background-color:rgba(0,0,0,.3);display:flex;height:100%;justify-content:center;left:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:10000;z-index:var(--zindex-modal-container)}
.component-scope-modal-inner{background-color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.2);cursor:default;margin:2rem;max-height:80%;max-width:80%;padding:2rem;position:relative;width:400px}
.component-scope-modal-headline{font-family:var(--font-setif-en);font-weight:400}
.component-scope-modal-close{align-items:center;background-color:#fff;background-color:var(--color-white);border-radius:50%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.2);color:#2d1b0e;color:var(--color-text-primary);display:flex;font-size:1.5rem;height:3rem;justify-content:center;position:absolute;right:-1.5rem;top:-1.5rem;width:3rem;z-index:1}
.component-scope-modal-close:after{transform:rotate(-45deg)}.component-scope-modal-close:before{transform:rotate(45deg)}
.component-scope-modal-close:after,.component-scope-modal-close:before{background-color:#2d1b0e;background-color:var(--color-text-primary);bottom:0;content:"";display:inline-flex;height:2px;left:0;margin:auto;position:absolute;right:0;top:0;width:16px}
.component-scope-modal-content{overflow:hidden;position:relative;width:100%}
.component-scope-modal-content>:not(img, video),.component-scope-modal-footer{margin-top:.8rem}
.component-scope-modal-fotter-button{font-weight:700}
.component-scope-modal-inner img, .component-scope-modal-inner video{display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}
`,Lt=r`
/*=============================================
    Loop Slider
=============================================*/
@keyframes translate-Loop-Primary {
    0% {
        transform: translateX(100%);
    }

    to {
        transform: translateX(-100%);
    }
}

@keyframes translate-Loop-Secondary {
    0% {
        transform: translateX(0);
    }

    to {
        transform: translateX(-200%);
    }
}


/*=============================================
    Modal Component Animation
=============================================*/

@keyframes zoomIn {
    0% {
        opacity: 0;
        transform: scale(0.9);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
    }

    100% {
        opacity: 0;
        transform: scale(0.9);
        visibility: hidden;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        visibility: hidden;
    }

    100% {
        opacity: 1;
        visibility: visible;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
        visibility: visible;
    }

    100% {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(100%);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
}

@keyframes fadeOutRight {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateX(100%);
        visibility: hidden;
    }
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-3rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-3rem);
    }
}


.c-revealer-sentence,
.c-revealer-sentence::after {
    animation-delay: var(--animation-delay, 2s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 800ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.c-revealer-sentence {
    --animation-delay: var(--delay, 0);
    --animation-duration: var(--duration, 800ms);
    --animation-iterations: var(--iterations, 1);
    position: relative;
    animation-name: clip-text;
    color: var(--color-text-primary);
    white-space: normal;
    cursor: default;
}

.c-revealer-sentence.-yellow {
    --animation-delay: 800ms;
    display: inline-block;
}

.c-revealer-sentence::after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f98b;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
    animation-name: text-revealer;
}

.c-revealer-sentence.-yellow::after {
    background-color: #f2f98b;
}

.c-revealer-sentence.-purple::after {
    background-color: #7f40f1;
}

@keyframes clip-text {
    from {
        clip-path: inset(0 100% 0 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes text-revealer {

    0%,
    50% {
        transform-origin: 0 50%;
    }

    60%,
    100% {
        transform-origin: 100% 50%;
    }

    60% {
        transform: scaleX(1);
    }

    100% {
        transform: scaleX(0);
    }
}

/*=============================================
    Scroll Observer Animation
=============================================*/

.anim-fadein {
    --duration: 0.8s;
    --timing-function: ease;
    transition: opacity var(--duration) var(--timing-function), visibility var(--duration) var(--timing-function);
}

.anim-fadein[data-animate="false"] {
    opacity: 0;
    visibility: hidden;
}

.anim-fadein[data-animate="true"] {
    opacity: 1;
    visibility: visible;
}

.anim-fadein:nth-child(1) {
    transition-delay: 0s;
}

.anim-fadein:nth-child(2) {
    transition-delay: 0.15s;
}

.anim-fadein:nth-child(3) {
    transition-delay: 0.25s;
}

.anim-fadein:nth-child(4) {
    transition-delay: 0.35s;
}

.anim-fadein:nth-child(5) {
    transition-delay: 0.45s;
}

.anim-fadein:nth-child(6) {
    transition-delay: 0.55s;
}

.anim-fadein:nth-child(7) {
    transition-delay: 0.65s;
}

.anim-fadein:nth-child(8) {
    transition-delay: 0.75s;
}

.anim-fadein:nth-child(9) {
    transition-delay: 0.85s;
}

.anim-fadein:nth-child(10) {
    transition-delay: 0.95s;
}

.anim-fadein-up {
    --duration: 0.8s;
    --timing-function: ease;
    --starting-position: 30px;
    transition: opacity var(--duration) var(--timing-function), transform var(--duration) var(--timing-function), visibility var(--duration) var(--timing-function);
}

.anim-fadein-up[data-animate="false"] {
    opacity: 0;
    visibility: hidden;
    transform: translateY(var(--starting-position));
}

.anim-fadein-up[data-animate="true"] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.anim-fadein-up:nth-child(1) {
    transition-delay: 0s;
}

.anim-fadein-up:nth-child(2) {
    transition-delay: 0.15s;
}

.anim-fadein-up:nth-child(3) {
    transition-delay: 0.25s;
}

.anim-fadein-up:nth-child(4) {
    transition-delay: 0.35s;
}

.anim-fadein-up:nth-child(5) {
    transition-delay: 0.45s;
}

.anim-fadein-up:nth-child(6) {
    transition-delay: 0.55s;
}

.anim-fadein-up:nth-child(7) {
    transition-delay: 0.65s;
}

.anim-fadein-up:nth-child(8) {
    transition-delay: 0.75s;
}

.anim-fadein-up:nth-child(9) {
    transition-delay: 0.85s;
}

.anim-fadein-up:nth-child(10) {
    transition-delay: 0.95s;
}
`;const St="section-about";customElements.get(St)||customElements.define(St,class extends et{static get styles(){return[st,Pt,kt,at,Ct,It,Lt,r`
            .fragment--CompanyFutures {
                position: relative;
            }

            .fragment--CompanyFuture_Container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                margin-top: 40px;
                row-gap: 30px;
            }

            .fragment--CompanyFuture_Movie {
                margin-top: clamp(40px, calc(2.5rem + ((1vw - 4.14px) * 11.5546)), 150px);
            }

            @media screen and (min-width: 768px) {
                .fragment--CompanyFuture_Container{ 
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            `]}constructor(){super()}modalRoot=ut();firstUpdated(){const t=this.modalRoot.value;t.querySelectorAll(".js-modal").forEach((e=>{new Et(t,e,{disableScroll:!0,awaitOpenAnimation:!0,awaitCloseAnimation:!0})}))}render(){return j`
        <section class="fragment--CompanyFutures u-content-area -top" ${vt(this.modalRoot)}>
            <div class="ly-Inner_Grid -lg">
                <h2 class="c-headline-lv6 u-uppercase">About</h2>
                <div class="fragment--CompanyFuture_Container">
                    <div class="fragment--CompanyFuture_Box">
                        <div class="c-headline-lv2">
                            今を生きる<br />現代女性のために。
                        </div>
                    </div>
                    <div class="fragment--CompanyFuture_Box">
                        <p class="o-Typography-Landing">
                            素敵なヘアスタイルは健康な頭皮から生まれます。<br />ヘアスタイルをデザインする上で一番大切なのは、素材である毛髪です。<br />理想とするヘアスタイルを創る上で、一人ひとり異なった素材をいかに生かせるか、くつろぎと満足を味わっていただけるよう、一同真剣に取り組んでまいります。
                        </p>
                        <div class="fragment--CompanyFuture_Movie">
                            <button type="button" class="" data-modal-target="modal-1">
                                <picture>
                                    <source media="(min-width: 992px)" srcset="./images/modal-movie-pc@2x.jpg" type="image/jpg">
                                    <img src="./images/modal-movie-sp@1x.jpg" alt="AWESOME COSMEのコンセプトムービー">
                                </picture>
                            </button>
                        </div>
                        <div id="modal-1" class="component-scope-modal js-modal" aria-hidden="true" aria-labelledby="modal-1-title" style="display: none;">
                            <div class="component-scope-modal-container" data-modal-close>
                                <div class="component-scope-modal-inner">
                                    <header class="component-scope-modal-header">
                                        <h2 id="modal-1-title" class="u-visual-hidden">弊社のコンセプトムービーです。</h2>
                                        <button class="component-scope-modal-close" type="button" aria-label="閉じる" data-modal-close></button>
                                    </header>
                                    <div class="component-scope-modal-content">
                                        <video src="../images/Cosmetics.mp4" controls webkit-playsinline="" playsinline="" muted="" preload="auto"></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`}});const Tt="section-sidebar";customElements.get(Tt)||customElements.define(Tt,class extends et{static get styles(){return[st,Pt,kt,at,r`
            .fragment--topSidebar-Impression {
                width: var(--sidebar-impression-sp);
                height: 100vh;
                position: absolute;
                right: 0;
                top: 0;
                z-index: var(--zindex-Fixed-sidebar);
                background-color: #f2f2f2;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                background-color: var(--color-white);
            }

            .fragment--topSidebar-Impression_Brand-Title {
                font-size: 12px;
                writing-mode: vertical-rl;
                white-space: nowrap;
                display: none;
            }

            @media screen and (min-width: 768px) {
                .fragment--topSidebar-Impression {
                    width: var(--sidebar-impression-pc);
                }
                
                .fragment--topSidebar-Impression_Brand-Title {
                    display: block;
                }
            }
            `]}constructor(){super(),this.props={siteName:`${yt}`}}render(){return j`
        <div class="fragment--topSidebar-Impression">
            <div class="fragment--topSidebar-Impression_Brand">
                <p class="fragment--topSidebar-Impression_Brand-Title">
                    © ${this.props.siteName}
                </p>
            </div>
            <div class="fragment--topSidebar-Impression_adjacentSection">
                <p class="fragment--topSidebar-Impression_adjacentSection-Number"></p>
            </div>
        </div>`}});const zt="section-products";customElements.get(zt)||customElements.define(zt,class extends et{static get styles(){return[st,Pt,kt,at,r`
            .fragment--Products {
                --positionY: 60px;
            }

            .fragment--Products_Container {
                margin-top: 40px;
            }

            .fragment--Products-List {
                column-gap: 75px;
                display: grid;
                margin-top: clamp(82px, calc(5.125rem + ((1vw - 4.14px) * 1.8908)), 100px);
                min-height: 0vw;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                row-gap: 100px;
            }

            .fragment--Products-List-Item {
                position: relative;
            }

            .fragment--Products-List-Item .c-headline-number\:index {
                font-size: clamp(12px, calc(0.75rem + ((1vw - 4.14px) * 0.6303)), 18px);;
                font-weight: normal;
                color: var(--color-text-third);
            }


            [data-recent="true"] {
                --sp: 75px;
                --pc: 120px;
                font-family: var(--font-serif-ja);
                width: var(--sp);
                height: var(--sp);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                background-color: var(--color-badge);
                border-radius: 50%;
                position: absolute;
                top: calc(var(--sp) - calc(var(--sp) * 1.5));
                right: calc(var(--sp) - calc(var(--sp) * 1.5));
                color: var(--color-text-primary);
                font-size: 18px;
                pointer-events: none;
                z-index: 5;
            }

            @media screen and (min-width: 768px) {
                [data-recent="true"] {
                    width: var(--pc);
                    height: var(--pc);
                    top: calc(var(--pc) - calc(var(--pc) * 1.5));
                    right: calc(var(--pc) - calc(var(--pc) * 1.5));
                }
            }

            .fragment--Products-List-Item-Image {
                position: relative;
                overflow: hidden;
            }

            .fragment--Products-List-Item-Image > * {
                object-fit: cover;
                width: 100%;
            }

            .fragment--Products_Item-Description {
                overflow: hidden;
                margin-top: clamp(14px, calc(0.875rem + ((1vw - 4.14px) * 2.1008)), 34px);
            }

            .fragment--Products-List-Item-Title {
                --reading-title: 1.71;
                width: 100%;
                line-height: var(--reading-title);
                height: var(--reading-title);
                font-family: var(--font-serif-ja) !important;
                font-weight: normal;
            }

            .fragment--Products-List-Item-Text {
                line-height: 1.71;
                font-size: 14px;
                margin-top: clamp(10px, calc(0.625rem + ((1vw - 4.14px) * 1.0504)), 20px);
            }

            .m-price-modules .m-price-module-tax {
                text-align: right;
            }

            .m-price-modules .m-price-module-tax::after {
                content: "(+tax)";
                display: inline-block;
            }

            [data-stream="true"] {
                position: relative;
                top: var(--positionY);
                margin-bottom: var(--positionY);
            }

            @media screen and (min-width: 768px) {
                .fragment--Products-Proposal_PicturePanel-Details {
                    top: -150px;
                }
            }
            `]}render(){return j`
        <section class="fragment--Products">
            <div class="ly-Inner_Grid -lg">
                <h2 class="c-headline-lv6 u-uppercase">Product</h2>
                <div class="fragment--Products_Container">
                    <div class="c-headline-lv2">
                        商品一覧
                    </div>
                    <ul class="fragment--Products-List m-price-modules c-headline-number">
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <!-- <span data-recent="true" class="u-uppercase">New</span> -->
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-01-sp@1x.jpg" alt="プロダクト1">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        ファンデーション
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="true">
                        <!-- <span data-recent="true" class="u-uppercase">New</span> -->
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-02@1x.jpg" alt="プロダクト2">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        バスグッズ
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-03@1x.jpg" alt="プロダクト3">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        アイシャドー
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-04@1x.jpg" alt="プロダクト4">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title u-title-ellipsis">
                                        アイライナー
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="true">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-05@1x.jpg" alt="プロダクト5">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        リップクリーム
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li class="fragment--Products-List-Item o-card" data-stream="false">
                            <figure class="fragment--Products-List-Item-Image o-card-image">
                                <img src="./images/product-06@1x.jpg" alt="プロダクト6">
                            </figure>
                            <div class="fragment--Products_Item-Description o-card-body">
                                <p class="c-headline-number:index"></p>
                                <a href="#" class="fragment--Products-List-Item-Link">
                                    <h3 class="fragment--Products-List-Item-Title o-card-title">
                                        スキンクリーム
                                    </h3>
                                    <p class="m-price-module-tax">4,000</p>
                                    <p class="fragment--Products-List-Item-Text">
                                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                                    </p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>`}});const Dt="pages-error";customElements.get(Dt)||customElements.define(Dt,class extends et{static get styles(){return[st,Pt,kt,Ct,at,r`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }

            .c-headline-lv2 {
                margin-top: 40px; margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }
            `]}constructor(){super()}render(){return j`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">404 Error</div>
                <h2 class="c-headline-lv2">404 Not Found</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <p>申し訳ございません。ページが見つかりませんでした。</p>
                </div>
            </div>
        </section>
        `}});const jt="section-proposal";customElements.get(jt)||customElements.define(jt,class extends et{static get styles(){return[st,Pt,kt,at,Ct,r`
            .fragment--Products-Proposal {
                --spY: 80px;
                --pcY: 150px;
                --offsetYsp: calc(var(--spY) - (var(--spY) * 2));
                margin-bottom: var(--offsetYsp);
            }

            .fragment--Products-Proposal_PicturePanel {
                grid-column: 1/4;
                z-index: 0;
                position: relative;
            }

            .fragment--Products-Proposal_Pictures img {
                width: 100%;
            }

            .fragment--Products-Proposal_PicturePanel-Details {
                grid-column: 2/4;
                background-color: var(--color-white);
                position: relative;
                padding: 8%;
                bottom: var(--spY);
                z-index: 1;
            }

            .fragment--Products-Proposal_PicturePanel-Container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                margin-top: 40px;
                row-gap: 30px;
            }

            .fragment--Products-Proposal_PicturePanel-Container a {
                position: relative;
                width: 180px;
                font-family: var(--font-serif-ja);
                padding: 13px 0;
                border-radius: 130px;
                border: 2px solid var(--color-text-primary);
                font-size: 14px;
                font-weight: 600;
                line-height: 1;
                margin-top: clamp(41px, 9vw, 81px);
                margin-left: auto;
            }

            @media screen and (min-width: 768px) {
                .fragment--Products-Proposal {
                    --offsetYpc: calc(var(--pcY) - (var(--pcY) * 2));
                    margin-bottom: var(--offsetYpc);
                }

                .fragment--Products-Proposal_PicturePanel-Details {
                    bottom: var(--pcY);
                }

                .fragment--Products-Proposal_PicturePanel-Container a {
                    width: 250px;
                    padding: 22px 0;
                }

                .fragment--Products-Proposal_PicturePanel-Container { 
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (hover: hover) {
                .fragment--Products-Proposal_PicturePanel-Container a:hover {
                    background-color: var(--color-text-primary);
                    color: var(--color-white);
                    transition: background-color 0.4s ease-out 0s;
                }
            }
            `]}root=ut();firstUpdated(){(t=>{const e=document.getElementById("app");t.querySelectorAll("a").forEach((t=>{t.addEventListener("click",(i=>{i.preventDefault(),"/404"===t.getAttribute("href")&&(e.dataset.animate="false",history.pushState(null,null,i.target.href),nt(0),e.innerHTML="<pages-error></pages-error>",setTimeout((()=>{e.dataset.animate="true"}),800))}))}))})(this.root.value)}render(){return j`
        <section class="fragment--Products-Proposal" ${vt(this.root)}>
            <div class="ly-Inner_Grid -lg"> 
                <div class="fragment--Products-Proposal_PicturePanel">
                    <figure class="fragment--Products-Proposal_Pictures">
                        <picture>
                            <source media="(min-width: 992px)" srcset="../images/gift-pc@1x.jpg" type="image/jpg">
                            <source media="(min-width: 1200px)" srcset="../images/gift-pc@2x.jpg" type="image/jpg">
                            <source srcset="../images/gift-sp@2x.jpg" type="image/jpg">
                            <img src="../images/gift-sp@1x.jpg" alt="ギフトセット画像">
                        </picture>
                    </figure>
                </div>
                <div class="fragment--Products-Proposal_PicturePanel-Details">
                    <h2 class="c-headline-lv6">GIFT</h2>
                    <div class="fragment--Products-Proposal_PicturePanel-Container">
                        <div class="c-headline-lv2">大切な人への<br>贈り物に。</div>
                        <div class="fragment--Products-Proposal_PicturePanel-Box">
                            <p class="o-Typography-Landing">
                                AWESOME 公式ショップがリコメンドする、ギフトセット。<wbr>大切な方へ、お世話になった方へ、自分へのプレゼントに、ホリスティックな心地よさをおたのしみください。
                            </p>
                            <a href="/404" class="fragment--Products-Proposal_Link u-uppercase u-flex u-flex-content-center u-flex-justify-center">
                                <span style="margin-right: 24px;">More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="6" viewBox="0 0 45 6">
                                    <g id="グループ_10175" data-name="グループ 10175" transform="translate(1983.641 -1474)">
                                        <line id="線_138" data-name="線 138" x2="30" transform="translate(-1983.641 1479.5)" stroke-width="1" style="fill: none; stroke: currentColor;" />
                                        <path id="パス_53" data-name="パス 53" d="M0,2.93l15,6H0Z" transform="translate(-1953.641 1471.07)" style="fill: currentColor;" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`}});const Mt="section-release-info";customElements.get(Mt)||customElements.define(Mt,class extends et{static get styles(){return[st,Pt,kt,at,r`
            .fragment--ReleaseInfo_Container {
                grid-column: 1 / 3;
                background-color: var(--color-white);
                position: relative;
                padding: 8%;
            }

            .fragment--ReleaseInfo_Contents {
                margin-top: 40px;
            }
            
            .c-headline-lv2 {
                margin-top: 40px;
            }
            `]}firstUpdated(){}render(){return j`
        <section class="fragment--ReleaseInfo">
            <div class="ly-Inner_Grid -lg">
                <div class="fragment--ReleaseInfo_Container">
                    <h2 class="c-headline-lv6 u-uppercase">
                        BLOG
                    </h2>
                    <div class="c-headline-lv2">ブログ</div>
                    <div class="fragment--ReleaseInfo_Contents">
                        まだ記事がありません。
                        <!-- <ul class="fragment--Carousel_List">
                            <li class="fragment--Carousel_List-Item">
                                <figure class="fragment--Carousel-Item_Image">
                                    <img src="../images/blog-01@2x.jpg" alt="post1">
                                </figure>
                                <div class="fragment--Carousel-Item_Body">
                                    <h3>テスト記事</h3>
                                    <p>テキスト</p>
                                </div>
                            </li>
                            <li class="fragment--Carousel_List-Item">
                                <figure class="fragment--Carousel-Item_Image">
                                <img src="../images/blog-02@2x.jpg" alt="post2">
                                </figure>
                                <div class="fragment--Carousel-Item_Body">
                                    <h3>テスト記事</h3>
                                    <p>テキスト</p>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </section>`}});const Ot="section-access";customElements.get(Ot)||customElements.define(Ot,class extends et{static get styles(){return[st,Pt,kt,at,Ct,r`

            .fragment--Access {
                --spY: 80px;
                --pcY: 150px;
                --offsetYsp: calc(var(--spY) - (var(--spY) * 2));
                margin-bottom: var(--offsetYsp);
            }

            .c-headline-lv6 {
                margin-bottom: 40px;
            }

            .fragment--Access_FramePanel {
                grid-column: 1/4;
                z-index: 0;
                position: relative;
            }

            .fragment--Access_Pictures iframe {
                width: 100%;
                -webkit-filter: grayscale(100%);
                -moz-filter: grayscale(100%);
                -ms-filter: grayscale(100%);
                -o-filter: grayscale(100%);
                filter: grayscale(100%);
            }

            .fragment--Access_FramePanel-Details {
                grid-column: 2/4;
                background-color: var(--color-white);
                position: relative;
                padding: 8%;
                bottom: var(--spY);
                z-index: 1;
            }
            
            .fragment--Address table {
                width: 100%;
                font-size: 18px;
                line-height: 1.7;
            }

            .fragment--Address table tr td {
                border-bottom: 1px solid var(--color-accent-gray);
                text-align: left;
            }

            .fragment--Address table tr th {
                border-bottom: 1px solid var(--color-text-primary);
                width: 130px;
                text-align: right;
                position: relative;
                font-weight: normal;
            }

            .fragment--Address table tr th::after {
                content: "";
                display: block;
                width: 20px;
                background-color: var(--color-white);
                height: calc(100% + 2px);
                position: absolute;
                bottom: 0;
                top: 0;
                right: -10px;
                border: 1px solid var(--color-white);
            }

            .fragment--Address table tr th,
            .fragment--Address table tr td {
                padding: 20px 24px;
                vertical-align: top;
            }
            
            @media screen and (max-width:768px) {
                .fragment--Address {
                    width: 100%;
                }
                
                .fragment--Address table,
                .fragment--Address table tbody,
                .fragment--Address table tr,
                .fragment--Address table tr th,
                .fragment--Address table tr td {
                    display: block;
                }
                
                .fragment--Address table {
                    width: 100%;
                }
                
                .fragment--Address table tr th,
                .fragment--Address table tr td {
                    width: 100%;
                    padding: 20px 24px;
                }

                .fragment--Address table tr th {
                    text-align: left;
                    overflow: hidden;
                }

                .fragment--Address table tr th::after {
                    content: "";
                    width: 0;
                    height: 0;
                    visibility: hidden;
                    overflow: hidden;
                    border: none;
                }
            }

            @media screen and (min-width: 768px) {
                .fragment--Access {
                    --offsetYpc: calc(var(--pcY) - (var(--pcY) * 2));
                    margin-bottom: var(--offsetYpc);
                }

                .fragment--Access_FramePanel-Details {
                    bottom: var(--pcY);
                }
            }
            `]}render(){return j`
        <section class="fragment--Access">
        <div class="ly-Inner_Grid -lg"> 
            <h2 class="c-headline-lv6 u-uppercase">
                Access
            </h2>
            <div class="fragment--Access_FramePanel">
                <figure class="fragment--Access_Pictures">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25311.11572187988!2d-122.26443772835461!3d37.53410281888066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98bc19fb614d%3A0x8d58e65fe3ebea98!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOOCq-ODquODleOCqeODq-ODi-OCouW3niDjg6zjg4Pjg4njgqbjg4Pjg4njg7vjgrfjg4bjgqMg44Os44OD44OJ44Km44OD44OJ44O744K344On44Ki44O844K6!5e0!3m2!1sja!2sjp!4v1656340965065!5m2!1sja!2sjp" width="1440" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" defer></iframe>
                </figure>
            </div>
            <div class="fragment--Access_FramePanel-Details">
                <div class="fragment--Address">
                    <table class="fragment--AddressTable">
                        <tbody>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    住所
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    〒150-0002 東京都渋谷区渋谷3丁目21-12
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    TEL
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    0120-0000-0000
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    FAX
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    0120-0000-0000
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    E-mail
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    sample@mailaddress.com
                                </td>
                            </tr>
                            <tr>
                                <th class="fragment--AddressTable_Title">
                                    道順
                                </th>
                                <td class="fragment--AddressTable_Data">
                                    <ul class="fragment--AddressTable_DataList">
                                        <li class="fragment--AddressTable_DataList-Item">
                                            • 関越自動車道「川越IC」「鶴ヶ島IC」より約15分
                                        </li>
                                        <li class="fragment--AddressTable_DataList-Item">
                                            • 圏央道「圏央鶴ヶ島IC」「坂戸IC」より約10分 ※約30台分の駐車場/屋根<wbr />付きの駐輪場を完備しております。 
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>`}});class Ht{constructor(t,e){this.accordionContainer=t,this.accordionTabs=this.accordionContainer.querySelectorAll(`.${e}`),this.accordionAddCls="is-open-panel",this.touchEventListener=this.touchEventDetection(),this.multiSelectDefault=!0,this.init()}init(){this.accordionContainer&&this._accordion_trigger()}_accordion_trigger(){this.accordionTabs.forEach((t=>{t.addEventListener(this.touchEventListener,(e=>{e.preventDefault(),t.classList.toggle(this.accordionAddCls);const i=t.nextElementSibling;t.classList.contains(this.accordionAddCls)?i.style.maxHeight=i.scrollHeight+"px":i.style.maxHeight=0}),{passive:!1})}))}_multiSelectable(t){if(1==this.multiSelectDefault){const e=this.accordionContainer.querySelector(".js-accordion-header.is-open-panel");e&&e!==t&&(e.classList.remove(this.accordionAddCls),e.nextElementSibling.style.maxHeight=0)}}touchEventDetection(){return window.ontouchstart?"touchstart":"click"}}const Bt="section-faq";customElements.get(Bt)||customElements.define(Bt,class extends et{static get styles(){return[st,at,Pt,kt,Ct,r`
            .fragment--accordions {
                display: grid;
                grid-template-columns: minmax(20px, 1fr) auto;
                grid-template-rows: 1fr;
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

            .c-headline-lv6 {
                margin-bottom: 40px;
            }

            .c-accordion-container {
                grid-area: 1 / 2 / 2 / 3;
            }
            
            .c-accordion-panel {
                overflow: hidden;
                box-sizing: border-box;
                max-height: 0px;
                transition: max-height 0.3s ease-out 0s;
            }

            .c-accordion-item {
                border-bottom: 1px solid var(--color-accent-gray);
                margin: 0;
                position: relative;
            }

            .c-accordion-tab {
                align-items: center;
                background-color: transparent;
                border: 0;
                color: inherit;
                display: flex;
                font-size: 18px;
                font-family: var(--font-serif-ja);
                font-weight: normal;
                padding: clamp(23px, calc(1.4375rem + ((1vw - 4.14px) * 1.3655)), 36px) 0;
                justify-content: space-between;
                position: relative;
                text-align: left;
                width: 100%;
            }

            .c-accordion-tab:focus-visible {
                outline: 2px solid #1d64d0;
            }

            .c-accordion-header {
                background-color: transparent;
                color: var(--color-text-primary);
            }

            .c-accordion-tabicon {
                display: inline-block;
                height: 1em;
                pointer-events: none;
                position: relative;
                width: 1em;
            }

            .c-accordion-tabicon::before,
            .c-accordion-tabicon::after  {
                background-color: var(--color-text-primary);
                bottom: 0;
                content: "";
                display: inline-block;
                height: 2px;
                left: 0;
                margin: auto;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
            }

            .c-accordion-tabicon::after {
                transform: rotate(90deg);
                transition: transform 0.3s;
            }

            .c-accordion-header.is-open-panel .c-accordion-tabicon::after {
                transform: rotate(180deg);
            }

            .c-accordion-content {
                line-height: 1.75;
                padding: 1.5rem;
            }
            `]}constructor(){super(),this.accordions=[{id:"faq-1",title:"化粧品の使用期限はどの位ですか？",description:"大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。"},{id:"faq-2",title:"化粧品の使用期限はどの位ですか？",description:"大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。"},{id:"faq-3",title:"化粧品の使用期限はどの位ですか？",description:"大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。"},{id:"faq-4",title:"化粧品の使用期限はどの位ですか？",description:"大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。"},{id:"faq-5",title:"化粧品の使用期限はどの位ですか？",description:"大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。"},{id:"faq-6",title:"化粧品の使用期限はどの位ですか？",description:"大まかな使用期限 化粧品の使用期限は一般的に、未開封で3年、開封済で半年から1年といわれています。"}]}accordion=ut();firstUpdated(){const t=this.accordion.value;new Ht(t,"js-accordion-header")}render(){return j`
        <section class="fragment--Faq">
            <div class="ly-Inner_Grid -lg">
                <h2 class="c-headline-lv6 u-uppercase">
                    Faq
                </h2>
                <div class="fragment--accordions">
                    <div class="c-accordion-container" ${vt(this.accordion)}>
                    ${this.accordions.map((({id:t,title:e,description:i})=>j`
                        <div id="${t}" class="c-accordion-item">
                            <h2 class="c-accordion-header js-accordion-header">
                                <button type="button" class="c-accordion-tab">
                                    ${e}
                                    <span class="c-accordion-tabicon"></span>
                                </button>
                            </h2>
                            <div class="c-accordion-panel js-accordion-panel">
                                <div class="c-accordion-content">
                                    <p>${i}</p>
                                </div>
                            </div>
                        </div>
                    `))}
                    </div>
                </div>
            </div>
        </section>
        `}});const Ut="pages-company";customElements.get(Ut)||customElements.define(Ut,class extends et{static get styles(){return[st,Pt,kt,Ct,at,r`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }
            
            .c-headline-lv2 {
                margin-top: 40px; margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }
            `]}constructor(){super()}render(){return j`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">Company</div>
                <h2 class="c-headline-lv2">企業情報</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <p>現在調整中のページです。</p>
                </div>
            </div>
        </section>
        `}});const Ft="pages-policy";customElements.get(Ft)||customElements.define(Ft,class extends et{static get styles(){return[st,Pt,kt,Ct,at,r`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }

            .c-headline-lv2 {
                margin-top: 40px; margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }
            `]}render(){return j`
            <section class="pages-Singular-ComponentBlock">
                <div class="ly-Inner_Grid -lg">
                    <div class="c-headline-lv6 u-uppercase">Privacy Policy</div>
                    <h2 class="c-headline-lv2">プライバシーポリシー</h2>
                    <div class="pages-Singular-Component_Content o-userWriting-Area">
                        <h3>1.個人情報の定義</h3>
                        <p>「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、及び他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。</p>
                        <h3>2.個人情報の収集</h3>
                        <p>当サービスではサービスのご契約、お問合せをされた際にお客様の個人情報を収集することがございます。収集するにあたっては利用目的を明記の上、適法かつ公正な手段によります。当サービスで収集する個人情報は以下の通りです。</p>
                        <ol>
                            <li>A)お名前、フリガナ</li>
                            <li>B)ご住所</li>
                            <li>C)お電話番号</li>
                            <li>D)メールアドレス</li>
                            <li>E)パスワード</li>
                            <li>F)当サービスとのお取引履歴及びその内容</li>
                            <li>G)上記を組み合わせることで特定の個人が識別できる情報</li>
                        </ol>
                        <h3>3.個人情報の利用</h3>
                        <p>当サービスではお客様からお預かりした個人情報の利用目的は以下の通りです。</p>
                        <ol>
                            <li>A)ご注文の確認、照会</li>
                            <li>B)お問合せの返信時</li>
                        </ol>
                        <p>当サービスでは、下記の場合を除いてはお客様の断りなく第三者に個人情報を開示・提供することはいたしません。</p>
                        <ol>
                            <li>A)法令に基づく場合、及び国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                            <li>B)人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                            <li>C)当サービスを運営する会社の関連会社で個人データを交換する場合</li>
                        </ol>
                        <h3>4.個人情報の安全管理</h3>
                        <p>お客様よりお預かりした個人情報の安全管理はサービス提供会社によって合理的、組織的、物理的、人的、技術的施策を講じるとともに、当サービスでは関連法令に準じた適切な取扱いを行うことで個人データへの不正な侵入、個人情報の紛失、改ざん、漏えい等の危険防止に努めます。</p>
                        <h3>5.個人情報の訂正、削除</h3>
                        <p>お客様からお預かりした個人情報の訂正・削除は下記の問合せ先よりお知らせ下さい。</p>
                        <h3>6.cookie(クッキー)の使用について</h3>
                        <p>当社は、お客様によりよいサービスを提供するため、cookie（クッキー）を使用することがありますが、これにより個人を特定できる情報の収集を行えるものではなく、お客様のプライバシーを侵害することはございません。※cookie（クッキー）とは、サーバーコンピュータからお客様のブラウザに送信され、お客様が使用しているコンピュータのハードディスクに蓄積される情報です。</p>
                        <h3>7.SSLの使用について</h3>
                        <p>個人情報の入力時には、セキュリティ確保のため、これらの情報が傍受、妨害または改ざんされることを防ぐ目的でSSL（Secure Sockets Layer）技術を使用しております。※SSLは情報を暗号化することで、盗聴防止やデータの改ざん防止送受信する機能のことです。SSLを利用する事でより安全に情報を送信する事が可能となります。</p>
                        <h3>8.お問合せ先</h3>
                        <p>こちらよりお問い合わせください。</p>
                        <h3>9.プライバシーポリシーの変更</h3>
                        <p>当サービスでは、収集する個人情報の変更、利用目的の変更、またはその他プライバシーポリシーの変更を行う際は、当ページへの変更をもって公表とさせていただきます。</p>
                    </div>
                </div>
            </section>
        `}});const Rt="pages-terms";customElements.get(Rt)||customElements.define(Rt,class extends et{static get styles(){return[st,Pt,kt,Ct,at,r`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }
            .c-headline-lv2 {
                margin-top: 40px; 
                margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }`]}constructor(){super()}render(){return j`
         <section class="pages-Singular-ComponentBlock">
                <div class="ly-Inner_Grid -lg">
                    <div class="c-headline-lv6 u-uppercase">Terms</div>
                    <h2 class="c-headline-lv2">利用規約</h2>
                    <div class="pages-Singular-Component_Content o-userWriting-Area">
                        <p>この利用規約（以下、「本規約」といいます。）は、${yt}（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。</p>
                        <h3>第1条（適用）</h3>
                        <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</p>
                        <h3>第2条（利用登録）</h3>
                        <p>本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。</p>
                        <ol>
                            <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                            <li>本規約に違反したことがある者からの申請である場合</li>
                            <li>その他、当社が利用登録を相当でないと判断した場合</li>
                        </ol>
                        <h3>第3条（ユーザーIDおよびパスワードの管理）</h3>
                        <p>ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当社に故意又は重大な過失がある場合を除き、当社は一切の責任を負わないものとします。</p>
                        <h3>第4条（利用料金および支払方法）</h3>
                        <p>ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14．6％の割合による遅延損害金を支払うものとします。</p>
                        <h3>第5条（禁止事項）</h3>
                        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                        <ol>
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                            <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                            <li>本サービスによって得られた情報を商業的に利用する行為</li>
                            <li>当社のサービスの運営を妨害するおそれのある行為</li>
                            <li>不正アクセスをし、またはこれを試みる行為</li>
                            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                            <li>不正な目的を持って本サービスを利用する行為</li>
                            <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                            <li>他のユーザーに成りすます行為</li>
                            <li>当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                            <li>面識のない異性との出会いを目的とした行為</li>
                            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                            <li>その他、当社が不適切と判断する行為</li>
                        </ol>
                        <h3>第6条（本サービスの提供の停止等）</h3>
                        <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                        <ol>
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                            <li>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
                        </ol>
                        <h3>第7条（利用制限および登録抹消）</h3>
                        <p>当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>
                        <ol>
                            <li>本規約のいずれかの条項に違反した場合</li>
                            <li>登録事項に虚偽の事実があることが判明した場合</li>
                            <li>料金等の支払債務の不履行があった場合</li>
                            <li>当社からの連絡に対し、一定期間返答がない場合</li>
                            <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
                            <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                        </ol>
                        <p>当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</p>
                        <h3>第8条（退会）</h3>
                        <p>ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</p>
                        <h3>第9条（保証の否認および免責事項）</h3>
                        <p>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</p>
                        <h3>第10条（サービス内容の変更等）</h3>
                        <p>当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
                        <h3>第11条（利用規約の変更）</h3>
                        <p>当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。本規約の変更がユーザーの一般の利益に適合するとき。本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。</p>
                        <h3>第12条（個人情報の取扱い）</h3>
                        <p>当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
                        <h3>第13条（通知または連絡）</h3>
                        <p>ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。</p>
                        <h3>第14条（権利義務の譲渡の禁止）</h3>
                        <p>ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>
                        <h3>第15条（準拠法・裁判管轄）</h3>
                        <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
                    </div>
                </div>
            </section>
        `}});const qt="pages-commerce";customElements.get(qt)||customElements.define(qt,class extends et{static get styles(){return[st,Pt,kt,Ct,at,r`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }
            
            .c-headline-lv2 {
                margin-top: 40px; 
                margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }`]}constructor(){super()}render(){return j`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">Commerce</div>
                <h2 class="c-headline-lv2">特定商取引法に基づく表記</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <h3>店舗名</h3>
                    <p>${yt}</p>
                    <h3>所在地</h3>
                    <p>〒150-0002 東京都渋谷区渋谷3丁目21-12</p>
                    <h3>電話番号</h3>
                    <p>0120-0000-0000</p>
                    <h3>販売URL</h3>
                    <p>http://--------</p>
                    <h3>お支払い方法</h3>
                    <ol>
                        <li>クレジットカード決済</li>
                        <li>代金引換決済</li>
                    </ol>
                    <h3>商品代金以外の必要金額</h3>
                    <p>代金引換決済の場合、代金引換手数料<br />代金引換手数料：１万円未満○円　３万円未満○円　３万円以上○円　１０万円以上３０万円まで○円です。送料：本州○円　四国・九州・北海道：○円　沖縄：○円離島料金は掛かりません。</p>
                    <h3>販売数量</h3>
                    <p>1点〜</p>
                    <h3>商品引渡し時期</h3>
                    <p>前払いの場合、指定日が無ければ入金確認後○営業日以内で発送致します。代引の場合、指定日が無ければご注文確認後○日営業日以内で発送致します。その他の支払方法の場合、指定日が無ければご注文後○日営業日以内で発送致します。後払いの場合、商品到着後○日以内にご入金ください。</p>
                    <h3>商品引渡し方法</h3>
                    <p>当方にて手配後、運送会社による配送</p>
                    <h3>返品・不良品について</h3>
                    <p>「不良品・当社の商品の間違い」の場合は当社が負担いたします。配送途中の破損などの事故がございましたら、弊社までご連絡下さい。送料・手数料ともに弊社負担で早急に新品をご送付致します。</p>
                    <ol>
                        <li>【返品対象】「不良品・当社の商品の間違い」の場合</li>
                        <li>【返品時期】ご購入後○日以内にご連絡があった場合に返金可能となります。</li>
                        <li>【返品方法】メールにて返金要請してください。○日以内にご購入代金を指定の口座へお振込みいたします。</li>
                    </ol>
                    <h3>表現、及び商品に関する注意書き</h3>
                    <p>本商品に示された表現や再現性には個人差があり、必ずしも利益や効果を保証したものではございません。</p>
                </div>
            </div>
        </section>
        `}});const Nt="pages-contact";customElements.get(Nt)||customElements.define(Nt,class extends et{static get styles(){return[st,Pt,kt,Ct,at,r`
            .pages-Singular-ComponentBlock {
                padding: clamp(100px, 6.25rem + (1vw - 4.14px) * 5.2521, 150px) 0;
            }
            .c-headline-lv2 {
                margin-top: 40px; margin-bottom: clamp(100px, calc(6.25rem + ((1vw - 4.14px) * 5.2521)), 150px);
            }`]}constructor(){super()}render(){return j`
        <section class="pages-Singular-ComponentBlock">
            <div class="ly-Inner_Grid -lg">
                <div class="c-headline-lv6 u-uppercase">Contact</div>
                <h2 class="c-headline-lv2">お問い合わせ</h2>
                <div class="pages-Singular-Component_Content o-userWriting-Area">
                    <p>現在調整中のページです。</p>
                </div>
            </div>
        </section>
        `}});const Yt=document.getElementById("app");setTimeout((()=>{Yt.dataset.animate="true"}),800);class Gt{constructor(t,e){this.navbar=t,this.anchors=t.querySelectorAll(e),this.init()}init(){this._navbarAttributePath(),this._popstateHandler(),this._documentTrigger(),this._routerMain()}async _routerMain(){const t=[{path:"/",data:()=>Yt.innerHTML='\n                <section-sidebar></section-sidebar>\n                <section-slider-component></section-slider-component>\n                <gl-wrapper>\n                    <section-about id="index_id01"></section-about>\n                    <section-products id="index_id02"></section-products>\n                    <section-proposal></section-proposal>\n                    <section-release-info id="index_id03"></section-release-info>\n                    <section-access id="index_id04"></section-access>\n                    <section-faq id="index_id05"></section-faq>\n                </gl-wrapper>\n                '},{path:"/company",data:()=>Yt.innerHTML="<pages-company></pages-company>"},{path:"/policy",data:()=>Yt.innerHTML="<pages-policy></pages-policy>"},{path:"/terms",data:()=>Yt.innerHTML="<pages-terms></pages-terms>"},{path:"/commerce",data:()=>Yt.innerHTML="<pages-commerce></pages-commerce>"},{path:"/contact",data:()=>Yt.innerHTML="<pages-contact></pages-contact>"},,{path:"/404",data:()=>Yt.innerHTML="<pages-error></pages-error>"}];let e=t.map((t=>({route:t,isMatch:location.pathname===t.path}))).find((t=>t.isMatch));e||(e={route:t[value],isMatch:!1}),e.route.data(e)}_documentTrigger(){this.anchors.forEach((t=>{t.addEventListener("click",(t=>{t.target.matches("[data-content-anchor]")&&(t.preventDefault(),Yt.dataset.animate="false",history.pushState(null,null,t.target.href),nt(0),setTimeout((()=>{this._navbarAttributePath(),this._routerMain(),Yt.dataset.animate="true"}),800))}),!1)}))}_popstateHandler(){window.addEventListener("popstate",(t=>{this._navbarAttributePath(),this._routerMain()}))}_navbarAttributePath(){return this.navbar.setAttribute("path",location.pathname)}}const Wt=t=>{const e=window.innerWidth-document.body.clientWidth;document.body.style.paddingRight=t?`${e}px`:"",document.documentElement.style.minHeight=t?"100vh":"";const i=t?(()=>{const t=window.navigator.userAgent.toLowerCase();return"scrollingElement"in document?document.scrollingElement:t.indexOf("webkit")>0?document.body:document.documentElement})().scrollTop:parseInt(document.body.style.top||"0"),n={height:"100vh",left:"0",overflow:"hidden",position:"fixed",top:-1*i+"px",width:"100vw"};Object.keys(n).forEach((e=>{document.body.style[e]=t?n[e]:""})),t||window.scrollTo(0,-1*i)};class Kt{constructor(t,e,i){this.root=t,this.root&&(this.options=Object.assign({focusvisible:"data-focus-visible",button:"js-Drawer-Button",screenScope:"js-Drawer-Overlay",navDrawer:"s-Drawer_nav",locations:'a[href*="#"]',group:"s-Drawer_navLink-Group"},i),this.focusvisible=this.root.querySelectorAll(`[${this.options.focusvisible}]`),this.button=this.root.querySelector(`.${this.options.button}`),this.screenScope=this.root.querySelector(`.${this.options.screenScope}`),this.navDrawer=this.root.querySelector(`.${this.options.navDrawer}`),this.locations=this.navDrawer.querySelectorAll(`${this.options.locations}`),this.closed=e,this.group=this.root.querySelectorAll(`.${this.options.group}`),this.touchEventListener=this._touchEventListener(),this.init())}init(){this._event(this.button),this._event(this.screenScope),this._AutomaticOperation()}_event(t){t.addEventListener(this.touchEventListener,(t=>{t.preventDefault(),this._open(),this._focusState()}))}_open(){const t="true"===this.button.getAttribute("aria-expanded");this.button.setAttribute("aria-expanded",!t),this.navDrawer.setAttribute("aria-hidden",t),this.#t(!t)}_focusState(){this.focusvisible.forEach((t=>{"true"===t.getAttribute("data-focus-visible")?(t.dataset.focusVisible="false",Wt(!1)):(t.dataset.focusVisible="true",Wt(!0))}))}_AutomaticOperation(){if(!this.locations)return console.warn("[Drawer] ターゲットのリンクが正しく設定されていないか存在しません。");this.closed&&this.locations.forEach((t=>{t.addEventListener(this.touchEventListener,(t=>{!function(t){const e="#"==t.currentTarget.getAttribute("href")?"header":t.currentTarget.getAttribute("href"),i=e.substr(e.indexOf("#")),n=document.querySelector(i);n?nt(n.offsetTop):console.warn("[fixedHeaderResolveScroll] ターゲットのリンクが正しく設定されていないか存在しません。")}(t),this.button.click()}),{passive:!0})}))}#t(t){Array.prototype.forEach.call(this.group,(e=>{t?setTimeout((()=>{e.classList.add("is-show")}),500):e.classList.remove("is-show")}))}_touchEventListener(){return window.ontouchstart?"touchstart":"click"}}const Xt="site-drawer-component";customElements.get(Xt)||customElements.define(Xt,class extends et{static get styles(){return[st,r`
            .s-Drawer_Button {
                cursor: pointer;
                display: inline-block;
                height: 40px;
                position: relative;
                right: 0;
                top: 0;
                width: 40px;
                z-index: 160;
                z-index: var(--zindex-drawer-btn)
            }

            .Button-Line {
                background-color: #2d1b0e;
                background-color: var(--color-text-primary);
                display: inline-block;
                height: 1px;
                left: 50%;
                margin: 0 auto;
                position: absolute;
                transform: translateX(-50%);
                transition: all .3s ease 0s;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                width: 100%
            }

            .Button-Line.Button-Line--1 {
                top: 16px
            }

            .Button-Line.Button-Line--2 {
                top: 24px
            }

            [aria-expanded=true] .Button-Line--1 {
                top: 10px;
                transform: translateY(10px) translateX(-50%) rotate(-45deg)
            }

            [aria-expanded=true] .Button-Line--2 {
                top: 30px;
                transform: translateY(-10px) translateX(-50%) rotate(45deg)
            }

            .s-Drawer_Overlay {
                background-color: rgba(0, 0, 0, .1);
                cursor: pointer;
                height: 100vh;
                left: 0;
                opacity: 0;
                position: fixed;
                top: 0;
                transition: opacity .4s ease 0s;
                visibility: hidden;
                width: 100%;
                z-index: 140;
                z-index: var(--zindex-drawer-overlay)
            }

            .s-Drawer_Overlay[data-focus-visible=true] {
                opacity: 1;
                visibility: visible
            }

            .s-Drawer_nav {
                background-color: #fff;
                background-color: var(--color-white);
                font-family: Cormorant Garamond, serif;
                font-family: var(--font-serif-en);
                height: 100vh;
                opacity: .9;
                overflow-y: auto;
                position: fixed;
                right: 0;
                top: 0;
                transition: transform .8s cubic-bezier(.19, 1, .22, 1);
                width: 80%;
                z-index: 150;
                z-index: var(--zindex-drawer-nav)
            }

            .s-Drawer_nav[aria-hidden=true] {
                transform: translateX(100%)
            }

            .s-Drawer_nav[aria-hidden=false] {
                transform: translateX(0)
            }

            .s-Drawer_navInner {
                display: grid;
                grid-template-columns: 61px minmax(0, auto) 61px
            }

            .s-Drawer_navInner:after,
            .s-Drawer_navInner:before,
            .s-Drawer_navInner>* {
                grid-column: 2
            }

            .s-Drawer_navList {
                padding-top: 145px
            }

            .s-Drawer_navList-Item {
                font-size: 0
            }

            .s-Drawer_navList-Item:not(:first-child) {
                margin-top: 42px
            }

            .s-Drawer_navList-Item>a {
                display: block;
                overflow: hidden;
                width: 100%
            }

            .s-Drawer_navList-Item>a [lang=en] {
                --clamp-size: 5.7971vw;
                display: block;
                font-size: clamp(1.5rem, var(--clamp-size), 3rem);
                font-family: var(--font-serif-en);
                font-weight: 500;
                line-height: 1em;
                line-height: var(--leading-none);
                margin-right: .5em;
                min-height: 0;
                text-transform: uppercase;
            }

            .s-Drawer_navList-Item>a [lang=ja] {
                display: block;
                font-family: var(--font-serif-ja);
                font-size: .75rem;
                font-size: var(--font-size-lower-limit);
                font-weight: 400;
                line-height: 1em;
                line-height: var(--leading-none);
                margin-top: 4px
            }

            .s-Drawer_navLink-Group {
                transform: translateY(100%);
                transition: all .7s ease 0s
            }

            .s-Drawer_navLink-Group.is-show {
                transform: translateY(0)
            }

            @media screen and (min-width:576px) {
                .s-Drawer_nav {
                    width: 100%
                }

                .s-Drawer_navLink-Group {
                    align-items: center;
                    display: flex;
                    justify-content: flex-start
                }
            }
            @media screen and (min-width:768px) {
                .s-Drawer_Button {
                    width: 65px
                }

                .s-Drawer_navInner {
                    grid-template-columns: minmax(23px, 1fr) minmax(auto, 768px) minmax(23px, 1fr);
                    grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-sm)) minmax(23px, 1fr)
                }

                .s-Drawer_navList {
                    padding-top: 19.7%
                }
            }`]}static get properties(){return{route:{type:Array}}}constructor(){super(),this.route=[{id:"#index_id01",title:{en:"About",ja:"私たちについて"}},{id:"#index_id02",title:{en:"Product",ja:"商品"}},{id:"#index_id03",title:{en:"Blog",ja:"ブログ"}},{id:"#index_id04",title:{en:"Access",ja:"アクセス"}},{id:"#index_id05",title:{en:"Faq",ja:"よくあるご質問"}}],this.props={ariaControls:"site-Drawer-nav"}}button=ut();nav=ut();firstUpdated(){const t=this.nav.value;new Kt(t,!0,null)}_button(){return j`
        <button type="button" class="s-Drawer_Button js-Drawer-Button" aria-controls="${this.props.ariaControls}" aria-label="モバイルメニュー" aria-expanded="false" ${vt(this.DrawerButtonRef)}>
            <span class="Button-Line Button-Line--1"></span>
            <span class="Button-Line Button-Line--2"></span>
        </button>
        `}_bacFaceFixedScreen(){return j`<div class="s-Drawer_Overlay js-Drawer-Overlay" data-focus-visible="false"></div>`}_navigation(){return j`
        <nav role="navigation" id="${this.props.ariaControls}" class="s-Drawer_nav" aria-hidden="true">
            <div class="s-Drawer_navInner">
                <ul class="s-Drawer_navList">
                    ${this.route.map((({id:t,title:e})=>j`
                        <li class="s-Drawer_navList-Item">
                            <a href="${t}" class="s-Drawer_navLink">
                                <div class="s-Drawer_navLink-Group">
                                    <span lang="en">${e.en}</span>
                                    <span lang="ja">${e.ja}</span>
                                </div>
                            </a>
                        </li>
                    `))}
                </ul>
            </div>
        </nav>
        `}render(){return j`
        <div class="s-Drawer" ${vt(this.nav)}>
            ${this._button()}
            ${this._bacFaceFixedScreen()}
            ${this._navigation()}
        </div>
        `}});const Vt="site-header-component";customElements.get(Vt)||customElements.define(Vt,class extends et{static get styles(){return[st,r`
            .s-Header {
                background-color: #fff;
                background-color: var(--color-white);
                position: relative;
                width: 100%
            }

            .s-Header_Inner {
                align-items: center;
                display: flex;
                height: 100px;
                height: var(--private-header-height-sp);
                justify-content: space-between;
                margin: 0 auto;
                max-width: 100%;
                padding: 0 23px;
                width: 1200px;
                z-index: 100;
                z-index: var(--zindex-Fixed-header)
            }

            .s-Header_Brand {
                font-family: Cormorant Garamond, serif;
                font-family: var(--font-serif-en);
                font-size: clamp(1.3125rem, 5vw, 1.75rem);
                font-weight: 400;
                position: relative;
                white-space: nowrap
            }

            .s-Header_Brand-Title {
                display: block;
            }

            @media screen and (min-width:768px) {
                .s-Header_Inner {
                    align-items: flex-start;
                    height: 165px;
                    height: var(--private-header-height-pc);
                    padding: 45px 23px
                }
            }`]}constructor(){super(),this.props={siteName:`${yt}`}}headerRef=ut();drawerRef=ut();_onClick(t){t.preventDefault(),document.getElementById("app").innerHTML='\n            <section-sidebar></section-sidebar>\n            <section-slider-component></section-slider-component>\n            <gl-wrapper>\n                <section-about id="index_id01"></section-about>\n                <section-products id="index_id02"></section-products>\n                <section-proposal></section-proposal>\n                <section-release-info id="index_id03"></section-release-info>\n                <section-access id="index_id04"></section-access>\n                <section-faq id="index_id05"></section-faq>\n            </gl-wrapper>',history.pushState(null,null,t.target.href)}_callback(){return this.headerRef.value.addEventListener("click",(t=>this._onClick(t)))}render(){return j`
        <header class="s-Header" role="banner">
            <div class="s-Header_Inner">
                <h1 class="s-Header_Brand">
                    <div class="s-Header_Brand-Title">
                        <a href="/" ${vt(this.headerRef)} @click="${this._callback}">
                            ${this.props.siteName}
                        </a>
                    </div>
                </h1>
                <site-drawer-component ${vt(this.drawerRef)}></site-drawer-component>
            </div>
        </header>`}});const Zt="site-footer-component";customElements.get(Zt)||customElements.define(Zt,class extends et{static get styles(){return[st,at,r`
            .s-Footer {
                width: 100%;
                position: relative;
            }

            .s-Footer_Image {
                grid-column: 1/4;
            }

            .s-Footer_Image img {
                width: 100%;
            }

            .s-Footer_Contents-Render {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: clamp(50px, 12vw, 157px) 0 clamp(54px, 13vw, 139px);
            }

            .s-Footer_Brand {
                font-size: clamp(16px, 3.8vw, 36px);
                font-family: var(--font-serif-en);
            }

            .s-Footer_nav {
                margin-top: clamp(20px, 4.8vw, 50px);
            }

            .s-Footer_navList {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }

            .s-Footer_navLink {
                padding-right: 1em;
                margin-right: 1em;
                display: inline-flex;
                position: relative;
                line-height: 2.5;
            }

            .s-Footer_navLink::after {
                content: "/";
                display: inline-block;
                position: absolute;
                right: 0;
            }

            .s-Footer_navList-Item:last-child .s-Footer_navLink::after {
                content: "";
            }

            .s-Footer_copyright {
                color: var(--color-text-third);
                font-size: 12px;
                margin-top: clamp(20px, 4.8vw, 52px);
            }`]}constructor(){super(),this.props={siteName:`${yt}`}}navFooter=ut();navLinks=ut();firstUpdated(){const t=this.navFooter.value;new Gt(t,"[data-content-anchor]")}render(){return j`
        <footer class="s-Footer" role="contentinfo">
            <div class="ly-Inner_Grid">
                <div class="s-Footer_Image">
                    <picture>
                        <source media="(min-width: 992px)" srcset="../images/footer-pc@1x.jpg" type="image/jpg">
                        <source media="(min-width: 1200px)" srcset="../images/footer-pc@2x.jpg" type="image/jpg">
                        <source srcset="./images/footer-sp@2x.jpg" type="image/jpg">
                        <img src="../images/footer-sp@1x.jpg" alt="AWESOME COSME プロダクト画像">
                    </picture>
                </div>
                <div class="s-Footer_Contents-Render">
                    <div class="s-Footer_Brand">
                        <div class="s-Footer_Brand-Title">
                            ${this.props.siteName}
                        </div>
                    </div>
                    <nav class="s-Footer_nav" ${vt(this.navFooter)}>
                        <ul class="s-Footer_navList">
                            <li class="s-Footer_navList-Item">
                                <a href="/company" class="s-Footer_navLink" data-content-anchor="true">
                                    会社概要
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/policy" class="s-Footer_navLink" data-content-anchor="true">
                                    プライバシーポリシー
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/terms" class="s-Footer_navLink" data-content-anchor="true">
                                    利用規約
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/commerce" class="s-Footer_navLink" data-content-anchor="true">
                                特定商取引法に基づく表記
                                </a>
                            </li>
                            <li class="s-Footer_navList-Item">
                                <a href="/contact" class="s-Footer_navLink" data-content-anchor="true">
                                    お問い合わせ
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <small class="s-Footer_copyright" translate="no">© THREE 2021 ALL Rights Reserved.</small>
                </div>
            </div>
        </footer>`}}),i(528)}()}();