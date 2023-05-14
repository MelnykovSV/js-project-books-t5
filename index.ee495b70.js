var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},i=e.parcelRequire8630;function s(e,t){return function(){return e.apply(t,arguments)}}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequire8630=i),i.register("aaQnt",(function(e,t){
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
!function(t,n){"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:e.exports,(function(e,t){var n=[],r=Object.getPrototypeOf,i=n.slice,s=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},o=n.push,a=n.indexOf,l={},c=l.toString,u=l.hasOwnProperty,h=u.toString,d=h.call(Object),f={},p=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},m=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function v(e,t,n){var r,i,s=(n=n||m).createElement("script");if(s.text=e,t)for(r in y)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&s.setAttribute(r,i);n.head.appendChild(s).parentNode.removeChild(s)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.7.0",w=/HTML$/i,C=function(e,t){return new C.fn.init(e,t)};function E(e){var t=!!e&&"length"in e&&e.length,n=_(e);return!p(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function T(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}C.fn=C.prototype={jquery:b,constructor:C,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(e){return this.pushStack(C.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},C.extend=C.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[a]||{},a++),"object"==typeof o||p(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&o!==r&&(c&&r&&(C.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[t],s=i&&!Array.isArray(n)?[]:i||C.isPlainObject(n)?n:{},i=!1,o[t]=C.extend(c,s,r)):void 0!==r&&(o[t]=r));return o},C.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=r(e))||"function"==typeof(n=u.call(t,"constructor")&&t.constructor)&&h.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){v(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(E(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C.text(t);return n},makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?C.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:a.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!w.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,s=e.length,o=!n;i<s;i++)!t(e[i],i)!==o&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(E(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return s(a)},guid:1,support:f}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=n[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){l["[object "+t+"]"]=t.toLowerCase()}));var k=n.pop,I=n.sort,S=n.splice,x="[\\x20\\t\\r\\n\\f]",N=new RegExp("^"+x+"+|((?:^|[^\\\\])(?:\\\\.)*)"+x+"+$","g");C.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var R=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function P(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}C.escapeSelector=function(e){return(e+"").replace(R,P)};var A=m,O=o;!function(){var t,r,s,o,l,c,h,d,p,g,m=O,y=C.expando,v=0,_=0,b=ee(),w=ee(),E=ee(),R=ee(),P=function(e,t){return e===t&&(l=!0),0},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",D="(?:\\\\[\\da-fA-F]{1,6}"+x+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\["+x+"*("+D+")(?:"+x+"*([*^$|!~]?=)"+x+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+D+"))|)"+x+"*\\]",M=":("+D+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",j=new RegExp(x+"+","g"),U=new RegExp("^"+x+"*,"+x+"*"),q=new RegExp("^"+x+"*([>+~]|"+x+")"+x+"*"),B=new RegExp(x+"|>"),H=new RegExp(M),V=new RegExp("^"+D+"$"),W={ID:new RegExp("^#("+D+")"),CLASS:new RegExp("^\\.("+D+")"),TAG:new RegExp("^("+D+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+x+"*(even|odd|(([+-]|)(\\d*)n|)"+x+"*(?:([+-]|)"+x+"*(\\d+)|))"+x+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+x+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+x+"*((?:-\\d)?\\d*)"+x+"*\\)|)(?=[^-]|$)","i")},$=/^(?:input|select|textarea|button)$/i,z=/^h\d$/i,G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Y=new RegExp("\\\\[\\da-fA-F]{1,6}"+x+"?|\\\\([^\\r\\n\\f])","g"),J=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},Q=function(){le()},X=de((function(e){return!0===e.disabled&&T(e,"fieldset")}),{dir:"parentNode",next:"legend"});try{m.apply(n=i.call(A.childNodes),A.childNodes),n[A.childNodes.length].nodeType}catch(e){m={apply:function(e,t){O.apply(e,i.call(t))},call:function(e){O.apply(e,i.call(arguments,1))}}}function Z(e,t,n,r){var i,s,o,a,l,u,h,g=t&&t.ownerDocument,v=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n;if(!r&&(le(t),t=t||c,d)){if(11!==v&&(l=G.exec(e)))if(i=l[1]){if(9===v){if(!(o=t.getElementById(i)))return n;if(o.id===i)return m.call(n,o),n}else if(g&&(o=g.getElementById(i))&&Z.contains(t,o)&&o.id===i)return m.call(n,o),n}else{if(l[2])return m.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&t.getElementsByClassName)return m.apply(n,t.getElementsByClassName(i)),n}if(!(R[e+" "]||p&&p.test(e))){if(h=e,g=t,1===v&&(B.test(e)||q.test(e))){for((g=K.test(e)&&ae(t.parentNode)||t)==t&&f.scope||((a=t.getAttribute("id"))?a=C.escapeSelector(a):t.setAttribute("id",a=y)),s=(u=ue(e)).length;s--;)u[s]=(a?"#"+a:":scope")+" "+he(u[s]);h=u.join(",")}try{return m.apply(n,g.querySelectorAll(h)),n}catch(t){R(e,!0)}finally{a===y&&t.removeAttribute("id")}}}return ve(e.replace(N,"$1"),t,n,r)}function ee(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function te(e){return e[y]=!0,e}function ne(e){var t=c.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function re(e){return function(t){return T(t,"input")&&t.type===e}}function ie(e){return function(t){return(T(t,"input")||T(t,"button"))&&t.type===e}}function se(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&X(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function oe(e){return te((function(t){return t=+t,te((function(n,r){for(var i,s=e([],n.length,t),o=s.length;o--;)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function ae(e){return e&&void 0!==e.getElementsByTagName&&e}function le(e){var t,n=e?e.ownerDocument||e:A;return n!=c&&9===n.nodeType&&n.documentElement?(h=(c=n).documentElement,d=!C.isXMLDoc(c),g=h.matches||h.webkitMatchesSelector||h.msMatchesSelector,A!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",Q),f.getById=ne((function(e){return h.appendChild(e).id=C.expando,!c.getElementsByName||!c.getElementsByName(C.expando).length})),f.disconnectedMatch=ne((function(e){return g.call(e,"*")})),f.scope=ne((function(){return c.querySelectorAll(":scope")})),f.cssHas=ne((function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),f.getById?(r.filter.ID=function(e){var t=e.replace(Y,J);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Y,J);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n,r,i,s=t.getElementById(e);if(s){if((n=s.getAttributeNode("id"))&&n.value===e)return[s];for(i=t.getElementsByName(e),r=0;s=i[r++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),r.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},r.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&d)return t.getElementsByClassName(e)},p=[],ne((function(e){var t;h.appendChild(e).innerHTML="<a id='"+y+"' href='' disabled='disabled'></a><select id='"+y+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||p.push("\\["+x+"*(?:value|"+L+")"),e.querySelectorAll("[id~="+y+"-]").length||p.push("~="),e.querySelectorAll("a#"+y+"+*").length||p.push(".#.+[+~]"),e.querySelectorAll(":checked").length||p.push(":checked"),(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&p.push(":enabled",":disabled"),(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||p.push("\\["+x+"*name"+x+"*="+x+"*(?:''|\"\")")})),f.cssHas||p.push(":has"),p=p.length&&new RegExp(p.join("|")),P=function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===c||e.ownerDocument==A&&Z.contains(A,e)?-1:t===c||t.ownerDocument==A&&Z.contains(A,t)?1:o?a.call(o,e)-a.call(o,t):0:4&n?-1:1)},c):c}for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(le(e),d&&!R[t+" "]&&(!p||!p.test(t)))try{var n=g.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){R(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&le(e),C.contains(e,t)},Z.attr=function(e,t){(e.ownerDocument||e)!=c&&le(e);var n=r.attrHandle[t.toLowerCase()],i=n&&u.call(r.attrHandle,t.toLowerCase())?n(e,t,!d):void 0;return void 0!==i?i:e.getAttribute(t)},Z.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},C.uniqueSort=function(e){var t,n=[],r=0,s=0;if(l=!f.sortStable,o=!f.sortStable&&i.call(e,0),I.call(e,P),l){for(;t=e[s++];)t===e[s]&&(r=n.push(s));for(;r--;)S.call(e,n[r],1)}return o=null,e},C.fn.uniqueSort=function(){return this.pushStack(C.uniqueSort(i.apply(this)))},r=C.expr={cacheLength:50,createPseudo:te,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Y,J),e[3]=(e[3]||e[4]||e[5]||"").replace(Y,J),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return W.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&H.test(n)&&(t=ue(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Y,J).toLowerCase();return"*"===e?function(){return!0}:function(e){return T(e,t)}},CLASS:function(e){var t=b[e+" "];return t||(t=new RegExp("(^|"+x+")"+e+"("+x+"|$)"),b(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})))},ATTR:function(e,t,n){return function(r){var i=Z.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(j," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,h,d,f,p=s!==o?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),_=!l&&!a,b=!1;if(g){if(s){for(;p;){for(h=t;h=h[p];)if(a?T(h,m):1===h.nodeType)return!1;f=p="only"===e&&!f&&"nextSibling"}return!0}if(f=[o?g.firstChild:g.lastChild],o&&_){for(b=(d=(c=(u=g[y]||(g[y]={}))[e]||[])[0]===v&&c[1])&&c[2],h=d&&g.childNodes[d];h=++d&&h&&h[p]||(b=d=0)||f.pop();)if(1===h.nodeType&&++b&&h===t){u[e]=[v,d,b];break}}else if(_&&(b=d=(c=(u=t[y]||(t[y]={}))[e]||[])[0]===v&&c[1]),!1===b)for(;(h=++d&&h&&h[p]||(b=d=0)||f.pop())&&(!(a?T(h,m):1===h.nodeType)||!++b||(_&&((u=h[y]||(h[y]={}))[e]=[v,b]),h!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return i[y]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,n){for(var r,s=i(e,t),o=s.length;o--;)e[r=a.call(e,s[o])]=!(n[r]=s[o])})):function(e){return i(e,0,n)}):i}},pseudos:{not:te((function(e){var t=[],n=[],r=ye(e.replace(N,"$1"));return r[y]?te((function(e,t,n,i){for(var s,o=r(e,null,i,[]),a=e.length;a--;)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,i,s){return t[0]=e,r(t,null,s,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return Z(e,t).length>0}})),contains:te((function(e){return e=e.replace(Y,J),function(t){return(t.textContent||C.text(t)).indexOf(e)>-1}})),lang:te((function(e){return V.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(Y,J).toLowerCase(),function(t){var n;do{if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:se(!1),disabled:se(!0),checked:function(e){return T(e,"input")&&!!e.checked||T(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return z.test(e.nodeName)},input:function(e){return $.test(e.nodeName)},button:function(e){return T(e,"input")&&"button"===e.type||T(e,"button")},text:function(e){var t;return T(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:oe((function(){return[0]})),last:oe((function(e,t){return[t-1]})),eq:oe((function(e,t,n){return[n<0?n+t:n]})),even:oe((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:oe((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:oe((function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:oe((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=re(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=ie(t);function ce(){}function ue(e,t){var n,i,s,o,a,l,c,u=w[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=r.preFilter;a;){for(o in n&&!(i=U.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(s=[])),n=!1,(i=q.exec(a))&&(n=i.shift(),s.push({value:n,type:i[0].replace(N," ")}),a=a.slice(n.length)),r.filter)!(i=W[o].exec(a))||c[o]&&!(i=c[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?Z.error(e):w(e,l).slice(0)}function he(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function de(e,t,n){var r=t.dir,i=t.next,s=i||r,o=n&&"parentNode"===s,a=_++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i);return!1}:function(t,n,l){var c,u,h=[v,a];if(l){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if(u=t[y]||(t[y]={}),i&&T(t,i))t=t[r]||t;else{if((c=u[s])&&c[0]===v&&c[1]===a)return h[2]=c[2];if(u[s]=h,h[2]=e(t,n,l))return!0}return!1}}function fe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function pe(e,t,n,r,i){for(var s,o=[],a=0,l=e.length,c=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,r,i)||(o.push(s),c&&t.push(a)));return o}function ge(e,t,n,r,i,s){return r&&!r[y]&&(r=ge(r)),i&&!i[y]&&(i=ge(i,s)),te((function(s,o,l,c){var u,h,d,f,p=[],g=[],y=o.length,v=s||function(e,t,n){for(var r=0,i=t.length;r<i;r++)Z(e,t[r],n);return n}(t||"*",l.nodeType?[l]:l,[]),_=!e||!s&&t?v:pe(v,p,e,l,c);if(n?n(_,f=i||(s?e:y||r)?[]:o,l,c):f=_,r)for(u=pe(f,g),r(u,[],l,c),h=u.length;h--;)(d=u[h])&&(f[g[h]]=!(_[g[h]]=d));if(s){if(i||e){if(i){for(u=[],h=f.length;h--;)(d=f[h])&&u.push(_[h]=d);i(null,f=[],u,c)}for(h=f.length;h--;)(d=f[h])&&(u=i?a.call(s,d):p[h])>-1&&(s[u]=!(o[u]=d))}}else f=pe(f===o?f.splice(y,f.length):f),i?i(null,o,f,c):m.apply(o,f)}))}function me(e){for(var t,n,i,o=e.length,l=r.relative[e[0].type],c=l||r.relative[" "],u=l?1:0,h=de((function(e){return e===t}),c,!0),d=de((function(e){return a.call(t,e)>-1}),c,!0),f=[function(e,n,r){var i=!l&&(r||n!=s)||((t=n).nodeType?h(e,n,r):d(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])f=[de(fe(f),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[y]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return ge(u>1&&fe(f),u>1&&he(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(N,"$1"),n,u<i&&me(e.slice(u,i)),i<o&&me(e=e.slice(i)),i<o&&he(e))}f.push(n)}return fe(f)}function ye(e,t){var n,i=[],o=[],a=E[e+" "];if(!a){for(t||(t=ue(e)),n=t.length;n--;)(a=me(t[n]))[y]?i.push(a):o.push(a);a=E(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,l,u,h){var f,p,g,y=0,_="0",b=o&&[],w=[],E=s,T=o||i&&r.find.TAG("*",h),I=v+=null==E?1:Math.random()||.1,S=T.length;for(h&&(s=a==c||a||h);_!==S&&null!=(f=T[_]);_++){if(i&&f){for(p=0,a||f.ownerDocument==c||(le(f),l=!d);g=e[p++];)if(g(f,a||c,l)){m.call(u,f);break}h&&(v=I)}n&&((f=!g&&f)&&y--,o&&b.push(f))}if(y+=_,n&&_!==y){for(p=0;g=t[p++];)g(b,w,a,l);if(o){if(y>0)for(;_--;)b[_]||w[_]||(w[_]=k.call(u));w=pe(w)}m.apply(u,w),h&&!o&&w.length>0&&y+t.length>1&&C.uniqueSort(u)}return h&&(v=I,s=E),b};return n?te(o):o}(o,i)),a.selector=e}return a}function ve(e,t,n,i){var s,o,a,l,c,u="function"==typeof e&&e,h=!i&&ue(e=u.selector||e);if(n=n||[],1===h.length){if((o=h[0]=h[0].slice(0)).length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&d&&r.relative[o[1].type]){if(!(t=(r.find.ID(a.matches[0].replace(Y,J),t)||[])[0]))return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(s=W.needsContext.test(e)?0:o.length;s--&&(a=o[s],!r.relative[l=a.type]);)if((c=r.find[l])&&(i=c(a.matches[0].replace(Y,J),K.test(o[0].type)&&ae(t.parentNode)||t))){if(o.splice(s,1),!(e=i.length&&he(o)))return m.apply(n,i),n;break}}return(u||ye(e,h))(i,t,!d,n,!t||K.test(e)&&ae(t.parentNode)||t),n}ce.prototype=r.filters=r.pseudos,r.setFilters=new ce,f.sortStable=y.split("").sort(P).join("")===y,le(),f.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(c.createElement("fieldset"))})),C.find=Z,C.expr[":"]=C.expr.pseudos,C.unique=C.uniqueSort,Z.compile=ye,Z.select=ve,Z.setDocument=le,Z.escape=C.escapeSelector,Z.getText=C.text,Z.isXML=C.isXMLDoc,Z.selectors=C.expr,Z.support=C.support,Z.uniqueSort=C.uniqueSort}();var L=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&C(e).is(n))break;r.push(e)}return r},D=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},F=C.expr.match.needsContext,M=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return p(t)?C.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?C.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?C.grep(e,(function(e){return a.call(t,e)>-1!==n})):C.filter(t,e,n)}C.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?C.find.matchesSelector(r,e)?[r]:[]:C.find.matches(e,C.grep(t,(function(e){return 1===e.nodeType})))},C.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(C(e).filter((function(){for(t=0;t<r;t++)if(C.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)C.find(e,i[t],n);return r>1?C.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&F.test(e)?C(e):e||[],!1).length}});var U,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||U,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof C?t[0]:t,C.merge(this,C.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:m,!0)),M.test(r[1])&&C.isPlainObject(t))for(r in t)p(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=m.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):p(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this)}).prototype=C.fn,U=C(m);var B=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function V(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,s=[],o="string"!=typeof e&&C(e);if(!F.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?C.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?a.call(C(e),this[0]):a.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return L(e,"parentNode")},parentsUntil:function(e,t,n){return L(e,"parentNode",n)},next:function(e){return V(e,"nextSibling")},prev:function(e){return V(e,"previousSibling")},nextAll:function(e){return L(e,"nextSibling")},prevAll:function(e){return L(e,"previousSibling")},nextUntil:function(e,t,n){return L(e,"nextSibling",n)},prevUntil:function(e,t,n){return L(e,"previousSibling",n)},siblings:function(e){return D((e.parentNode||{}).firstChild,e)},children:function(e){return D(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(T(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},(function(e,t){C.fn[e]=function(n,r){var i=C.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=C.filter(r,i)),this.length>1&&(H[e]||C.uniqueSort(i),B.test(e)&&i.reverse()),this.pushStack(i)}}));var W=/[^\x20\t\r\n\f]+/g;function $(e){return e}function z(e){throw e}function G(e,t,n,r){var i;try{e&&p(i=e.promise)?i.call(e).done(t).fail(n):e&&p(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}C.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return C.each(e.match(W)||[],(function(e,n){t[n]=!0})),t}(e):C.extend({},e);var t,n,r,i,s=[],o=[],a=-1,l=function(){for(i=i||e.once,r=t=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1);e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){C.each(n,(function(n,r){p(r)?e.unique&&c.has(r)||s.push(r):r&&r.length&&"string"!==_(r)&&t(r)}))}(arguments),n&&!t&&l()),this},remove:function(){return C.each(arguments,(function(e,t){for(var n;(n=C.inArray(t,s,n))>-1;)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?C.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=o=[],n||t||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},C.extend({Deferred:function(t){var n=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return C.Deferred((function(t){C.each(n,(function(n,r){var i=p(e[r[4]])&&e[r[4]];s[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&p(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(t,r,i){var s=0;function o(t,n,r,i){return function(){var a=this,l=arguments,c=function(){var e,c;if(!(t<s)){if((e=r.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution");c=e&&("object"==typeof e||"function"==typeof e)&&e.then,p(c)?i?c.call(e,o(s,n,$,i),o(s,n,z,i)):(s++,c.call(e,o(s,n,$,i),o(s,n,z,i),o(s,n,$,n.notifyWith))):(r!==$&&(a=void 0,l=[e]),(i||n.resolveWith)(a,l))}},u=i?c:function(){try{c()}catch(e){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(e,u.error),t+1>=s&&(r!==z&&(a=void 0,l=[e]),n.rejectWith(a,l))}};t?u():(C.Deferred.getErrorHook?u.error=C.Deferred.getErrorHook():C.Deferred.getStackHook&&(u.error=C.Deferred.getStackHook()),e.setTimeout(u))}}return C.Deferred((function(e){n[0][3].add(o(0,e,p(i)?i:$,e.notifyWith)),n[1][3].add(o(0,e,p(t)?t:$)),n[2][3].add(o(0,e,p(r)?r:z))})).promise()},promise:function(e){return null!=e?C.extend(e,i):i}},s={};return C.each(n,(function(e,t){var o=t[2],a=t[5];i[t[1]]=o.add,a&&o.add((function(){r=a}),n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),o.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=o.fireWith})),i.promise(s),t&&t.call(s,s),s},when:function(e){var t=arguments.length,n=t,r=Array(n),s=i.call(arguments),o=C.Deferred(),a=function(e){return function(n){r[e]=this,s[e]=arguments.length>1?i.call(arguments):n,--t||o.resolveWith(r,s)}};if(t<=1&&(G(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||p(s[n]&&s[n].then)))return o.then();for(;n--;)G(s[n],a(n),o.reject);return o.promise()}});var K=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&K.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},C.readyException=function(t){e.setTimeout((function(){throw t}))};var Y=C.Deferred();function J(){m.removeEventListener("DOMContentLoaded",J),e.removeEventListener("load",J),C.ready()}C.fn.ready=function(e){return Y.then(e).catch((function(e){C.readyException(e)})),this},C.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==e&&--C.readyWait>0||Y.resolveWith(m,[C]))}}),C.ready.then=Y.then,"complete"===m.readyState||"loading"!==m.readyState&&!m.documentElement.doScroll?e.setTimeout(C.ready):(m.addEventListener("DOMContentLoaded",J),e.addEventListener("load",J));var Q=function(e,t,n,r,i,s,o){var a=0,l=e.length,c=null==n;if("object"===_(n))for(a in i=!0,n)Q(e,t,a,n[a],!0,s,o);else if(void 0!==r&&(i=!0,p(r)||(o=!0),c&&(o?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(C(e),n)})),t))for(;a<l;a++)t(e[a],n,o?r:r.call(e[a],a,t(e[a],n)));return i?e:c?t.call(e):l?t(e[0],n):s},X=/^-ms-/,Z=/-([a-z])/g;function ee(e,t){return t.toUpperCase()}function te(e){return e.replace(X,"ms-").replace(Z,ee)}var ne=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function re(){this.expando=C.expando+re.uid++}re.uid=1,re.prototype={cache:function(e){var t=e[this.expando];return t||(t={},ne(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[te(t)]=n;else for(r in t)i[te(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][te(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(te):(t=te(t))in r?[t]:t.match(W)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||C.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!C.isEmptyObject(t)}};var ie=new re,se=new re,oe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ae=/[A-Z]/g;function le(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ae,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:oe.test(e)?JSON.parse(e):e)}(n)}catch(e){}se.set(e,t,n)}else n=void 0;return n}C.extend({hasData:function(e){return se.hasData(e)||ie.hasData(e)},data:function(e,t,n){return se.access(e,t,n)},removeData:function(e,t){se.remove(e,t)},_data:function(e,t,n){return ie.access(e,t,n)},_removeData:function(e,t){ie.remove(e,t)}}),C.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(i=se.get(s),1===s.nodeType&&!ie.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(r=o[n].name).indexOf("data-")&&(r=te(r.slice(5)),le(s,r,i[r]));ie.set(s,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){se.set(this,e)})):Q(this,(function(t){var n;if(s&&void 0===t)return void 0!==(n=se.get(s,e))||void 0!==(n=le(s,e))?n:void 0;this.each((function(){se.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){se.remove(this,e)}))}}),C.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=ie.get(e,t),n&&(!r||Array.isArray(n)?r=ie.access(e,t,C.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=C.queue(e,t),r=n.length,i=n.shift(),s=C._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete s.stop,i.call(e,(function(){C.dequeue(e,t)}),s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ie.get(e,n)||ie.access(e,n,{empty:C.Callbacks("once memory").add((function(){ie.remove(e,[t+"queue",n])}))})}}),C.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?C.queue(this[0],e):void 0===t?this:this.each((function(){var n=C.queue(this,e,t);C._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&C.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){C.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=C.Deferred(),s=this,o=this.length,a=function(){--r||i.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=ie.get(s[o],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ue=new RegExp("^(?:([+-])=|)("+ce+")([a-z%]*)$","i"),he=["Top","Right","Bottom","Left"],de=m.documentElement,fe=function(e){return C.contains(e.ownerDocument,e)},pe={composed:!0};de.getRootNode&&(fe=function(e){return C.contains(e.ownerDocument,e)||e.getRootNode(pe)===e.ownerDocument});var ge=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&fe(e)&&"none"===C.css(e,"display")};function me(e,t,n,r){var i,s,o=20,a=r?function(){return r.cur()}:function(){return C.css(e,t,"")},l=a(),c=n&&n[3]||(C.cssNumber[t]?"":"px"),u=e.nodeType&&(C.cssNumber[t]||"px"!==c&&+l)&&ue.exec(C.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;o--;)C.style(e,t,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),u/=s;u*=2,C.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=u,r.end=i)),i}var ye={};function ve(e){var t,n=e.ownerDocument,r=e.nodeName,i=ye[r];return i||(t=n.body.appendChild(n.createElement(r)),i=C.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ye[r]=i,i)}function _e(e,t){for(var n,r,i=[],s=0,o=e.length;s<o;s++)(r=e[s]).style&&(n=r.style.display,t?("none"===n&&(i[s]=ie.get(r,"display")||null,i[s]||(r.style.display="")),""===r.style.display&&ge(r)&&(i[s]=ve(r))):"none"!==n&&(i[s]="none",ie.set(r,"display",n)));for(s=0;s<o;s++)null!=i[s]&&(e[s].style.display=i[s]);return e}C.fn.extend({show:function(){return _e(this,!0)},hide:function(){return _e(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ge(this)?C(this).show():C(this).hide()}))}});var be,we,Ce=/^(?:checkbox|radio)$/i,Ee=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Te=/^$|^module$|\/(?:java|ecma)script/i;be=m.createDocumentFragment().appendChild(m.createElement("div")),(we=m.createElement("input")).setAttribute("type","radio"),we.setAttribute("checked","checked"),we.setAttribute("name","t"),be.appendChild(we),f.checkClone=be.cloneNode(!0).cloneNode(!0).lastChild.checked,be.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!be.cloneNode(!0).lastChild.defaultValue,be.innerHTML="<option></option>",f.option=!!be.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Ie(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&T(e,t)?C.merge([e],n):n}function Se(e,t){for(var n=0,r=e.length;n<r;n++)ie.set(e[n],"globalEval",!t||ie.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,f.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var xe=/<|&#?\w+;/;function Ne(e,t,n,r,i){for(var s,o,a,l,c,u,h=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if((s=e[f])||0===s)if("object"===_(s))C.merge(d,s.nodeType?[s]:s);else if(xe.test(s)){for(o=o||h.appendChild(t.createElement("div")),a=(Ee.exec(s)||["",""])[1].toLowerCase(),l=ke[a]||ke._default,o.innerHTML=l[1]+C.htmlPrefilter(s)+l[2],u=l[0];u--;)o=o.lastChild;C.merge(d,o.childNodes),(o=h.firstChild).textContent=""}else d.push(t.createTextNode(s));for(h.textContent="",f=0;s=d[f++];)if(r&&C.inArray(s,r)>-1)i&&i.push(s);else if(c=fe(s),o=Ie(h.appendChild(s),"script"),c&&Se(o),n)for(u=0;s=o[u++];)Te.test(s.type||"")&&n.push(s);return h}var Re=/^([^.]*)(?:\.(.+)|)/;function Pe(){return!0}function Ae(){return!1}function Oe(e,t,n,r,i,s){var o,a;if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Oe(e,a,n,r,t[a],s);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ae;else if(!i)return e;return 1===s&&(o=i,i=function(e){return C().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=C.guid++)),e.each((function(){C.event.add(this,t,i,r,n)}))}function Le(e,t,n){n?(ie.set(e,t,!1),C.event.add(e,t,{namespace:!1,handler:function(e){var n,r=ie.get(this,t);if(1&e.isTrigger&&this[t]){if(r)(C.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=i.call(arguments),ie.set(this,t,r),this[t](),n=ie.get(this,t),ie.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(ie.set(this,t,C.event.trigger(r[0],r.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Pe)}})):void 0===ie.get(e,t)&&C.event.add(e,t,Pe)}C.event={global:{},add:function(e,t,n,r,i){var s,o,a,l,c,u,h,d,f,p,g,m=ie.get(e);if(ne(e))for(n.handler&&(n=(s=n).handler,i=s.selector),i&&C.find.matchesSelector(de,i),n.guid||(n.guid=C.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return void 0!==C&&C.event.triggered!==t.type?C.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(W)||[""]).length;c--;)f=g=(a=Re.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f&&(h=C.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,h=C.event.special[f]||{},u=C.extend({type:f,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&C.expr.match.needsContext.test(i),namespace:p.join(".")},s),(d=l[f])||((d=l[f]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,r,p,o)||e.addEventListener&&e.addEventListener(f,o)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,u):d.push(u),C.event.global[f]=!0)},remove:function(e,t,n,r,i){var s,o,a,l,c,u,h,d,f,p,g,m=ie.hasData(e)&&ie.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(W)||[""]).length;c--;)if(f=g=(a=Re.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f){for(h=C.event.special[f]||{},d=l[f=(r?h.delegateType:h.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;s--;)u=d[s],!i&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(d.splice(s,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,p,m.handle)||C.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)C.event.remove(e,f+t[c],n,r,!0);C.isEmptyObject(l)&&ie.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,s,o,a=new Array(arguments.length),l=C.event.fix(e),c=(ie.get(this,"events")||Object.create(null))[l.type]||[],u=C.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(o=C.event.handlers.call(this,l,c),t=0;(i=o[t++])&&!l.isPropagationStopped();)for(l.currentTarget=i.elem,n=0;(s=i.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,void 0!==(r=((C.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,a))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,i,s,o,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(s=[],o={},n=0;n<l;n++)void 0===o[i=(r=t[n]).selector+" "]&&(o[i]=r.needsContext?C(i,this).index(c)>-1:C.find(i,this,null,[c]).length),o[i]&&s.push(r);s.length&&a.push({elem:c,handlers:s})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(C.Event.prototype,e,{enumerable:!0,configurable:!0,get:p(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Ce.test(t.type)&&t.click&&T(t,"input")&&Le(t,"click",!0),!1},trigger:function(e){var t=this||e;return Ce.test(t.type)&&t.click&&T(t,"input")&&Le(t,"click"),!0},_default:function(e){var t=e.target;return Ce.test(t.type)&&t.click&&T(t,"input")&&ie.get(t,"click")||T(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){if(!(this instanceof C.Event))return new C.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Pe:Ae,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:Ae,isPropagationStopped:Ae,isImmediatePropagationStopped:Ae,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Pe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Pe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Pe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(m.documentMode){var n=ie.get(this,"handle"),r=C.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,n(e),r.target===r.currentTarget&&n(r)}else C.event.simulate(t,e.target,C.event.fix(e))}C.event.special[e]={setup:function(){var r;if(Le(this,e,!0),!m.documentMode)return!1;(r=ie.get(this,t))||this.addEventListener(t,n),ie.set(this,t,(r||0)+1)},trigger:function(){return Le(this,e),!0},teardown:function(){var e;if(!m.documentMode)return!1;(e=ie.get(this,t)-1)?ie.set(this,t,e):(this.removeEventListener(t,n),ie.remove(this,t))},_default:function(t){return ie.get(t.target,e)},delegateType:t},C.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=m.documentMode?this:r,s=ie.get(i,t);s||(m.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),ie.set(i,t,(s||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=m.documentMode?this:r,s=ie.get(i,t)-1;s?ie.set(i,t,s):(m.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),ie.remove(i,t))}}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){C.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||C.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),C.fn.extend({on:function(e,t,n,r){return Oe(this,e,t,n,r)},one:function(e,t,n,r){return Oe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,C(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ae),this.each((function(){C.event.remove(this,e,n,t)}))}});var De=/<script|<style|<link/i,Fe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return T(e,"table")&&T(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}function Ue(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Be(e,t){var n,r,i,s,o,a;if(1===t.nodeType){if(ie.hasData(e)&&(a=ie.get(e).events))for(i in ie.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)C.event.add(t,i,a[i][n]);se.hasData(e)&&(s=se.access(e),o=C.extend({},s),se.set(t,o))}}function He(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ce.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Ve(e,t,n,r){t=s(t);var i,o,a,l,c,u,h=0,d=e.length,g=d-1,m=t[0],y=p(m);if(y||d>1&&"string"==typeof m&&!f.checkClone&&Fe.test(m))return e.each((function(i){var s=e.eq(i);y&&(t[0]=m.call(this,i,s.html())),Ve(s,t,n,r)}));if(d&&(o=(i=Ne(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(l=(a=C.map(Ie(i,"script"),Ue)).length;h<d;h++)c=i,h!==g&&(c=C.clone(c,!0,!0),l&&C.merge(a,Ie(c,"script"))),n.call(e[h],c,h);if(l)for(u=a[a.length-1].ownerDocument,C.map(a,qe),h=0;h<l;h++)c=a[h],Te.test(c.type||"")&&!ie.access(c,"globalEval")&&C.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?C._evalUrl&&!c.noModule&&C._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):v(c.textContent.replace(Me,""),c,u))}return e}function We(e,t,n){for(var r,i=t?C.filter(t,e):e,s=0;null!=(r=i[s]);s++)n||1!==r.nodeType||C.cleanData(Ie(r)),r.parentNode&&(n&&fe(r)&&Se(Ie(r,"script")),r.parentNode.removeChild(r));return e}C.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,s,o,a=e.cloneNode(!0),l=fe(e);if(!(f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||C.isXMLDoc(e)))for(o=Ie(a),r=0,i=(s=Ie(e)).length;r<i;r++)He(s[r],o[r]);if(t)if(n)for(s=s||Ie(e),o=o||Ie(a),r=0,i=s.length;r<i;r++)Be(s[r],o[r]);else Be(e,a);return(o=Ie(a,"script")).length>0&&Se(o,!l&&Ie(e,"script")),a},cleanData:function(e){for(var t,n,r,i=C.event.special,s=0;void 0!==(n=e[s]);s++)if(ne(n)){if(t=n[ie.expando]){if(t.events)for(r in t.events)i[r]?C.event.remove(n,r):C.removeEvent(n,r,t.handle);n[ie.expando]=void 0}n[se.expando]&&(n[se.expando]=void 0)}}}),C.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return Q(this,(function(e){return void 0===e?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Ve(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)}))},prepend:function(){return Ve(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(C.cleanData(Ie(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return C.clone(this,e,t)}))},html:function(e){return Q(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!De.test(e)&&!ke[(Ee.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(C.cleanData(Ie(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Ve(this,arguments,(function(t){var n=this.parentNode;C.inArray(this,e)<0&&(C.cleanData(Ie(this)),n&&n.replaceChild(t,this))}),e)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){C.fn[e]=function(e){for(var n,r=[],i=C(e),s=i.length-1,a=0;a<=s;a++)n=a===s?this:this.clone(!0),C(i[a])[t](n),o.apply(r,n.get());return this.pushStack(r)}}));var $e=new RegExp("^("+ce+")(?!px)[a-z%]+$","i"),ze=/^--/,Ge=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ke=function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=s[i];return r},Ye=new RegExp(he.join("|"),"i");function Je(e,t,n){var r,i,s,o,a=ze.test(t),l=e.style;return(n=n||Ge(e))&&(o=n.getPropertyValue(t)||n[t],a&&o&&(o=o.replace(N,"$1")||void 0),""!==o||fe(e)||(o=C.style(e,t)),!f.pixelBoxStyles()&&$e.test(o)&&Ye.test(t)&&(r=l.width,i=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=r,l.minWidth=i,l.maxWidth=s)),void 0!==o?o+"":o}function Qe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",de.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);r="1%"!==t.top,l=12===n(t.marginLeft),u.style.right="60%",o=36===n(t.right),i=36===n(t.width),u.style.position="absolute",s=12===n(u.offsetWidth/3),de.removeChild(c),u=null}}function n(e){return Math.round(parseFloat(e))}var r,i,s,o,a,l,c=m.createElement("div"),u=m.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===u.style.backgroundClip,C.extend(f,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),o},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),s},reliableTrDimensions:function(){var t,n,r,i;return null==a&&(t=m.createElement("table"),n=m.createElement("tr"),r=m.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",r.style.height="9px",r.style.display="block",de.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,de.removeChild(t)),a}}))}();var Xe=["Webkit","Moz","ms"],Ze=m.createElement("div").style,et={};function tt(e){var t=C.cssProps[e]||et[e];return t||(e in Ze?e:et[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in Ze)return e}(e)||e)}var nt=/^(none|table(?!-c[ea]).+)/,rt={position:"absolute",visibility:"hidden",display:"block"},it={letterSpacing:"0",fontWeight:"400"};function st(e,t,n){var r=ue.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function ot(e,t,n,r,i,s){var o="width"===t?1:0,a=0,l=0,c=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(c+=C.css(e,n+he[o],!0,i)),r?("content"===n&&(l-=C.css(e,"padding"+he[o],!0,i)),"margin"!==n&&(l-=C.css(e,"border"+he[o]+"Width",!0,i))):(l+=C.css(e,"padding"+he[o],!0,i),"padding"!==n?l+=C.css(e,"border"+he[o]+"Width",!0,i):a+=C.css(e,"border"+he[o]+"Width",!0,i));return!r&&s>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))||0),l+c}function at(e,t,n){var r=Ge(e),i=(!f.boxSizingReliable()||n)&&"border-box"===C.css(e,"boxSizing",!1,r),s=i,o=Je(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(o)){if(!n)return o;o="auto"}return(!f.boxSizingReliable()&&i||!f.reliableTrDimensions()&&T(e,"tr")||"auto"===o||!parseFloat(o)&&"inline"===C.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===C.css(e,"boxSizing",!1,r),(s=a in e)&&(o=e[a])),(o=parseFloat(o)||0)+ot(e,t,n||(i?"border":"content"),s,r,o)+"px"}function lt(e,t,n,r,i){return new lt.prototype.init(e,t,n,r,i)}C.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Je(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,s,o,a=te(t),l=ze.test(t),c=e.style;if(l||(t=tt(a)),o=C.cssHooks[t]||C.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:c[t];"string"===(s=typeof n)&&(i=ue.exec(n))&&i[1]&&(n=me(e,t,i),s="number"),null!=n&&n==n&&("number"!==s||l||(n+=i&&i[3]||(C.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,r))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,s,o,a=te(t);return ze.test(t)||(t=tt(a)),(o=C.cssHooks[t]||C.cssHooks[a])&&"get"in o&&(i=o.get(e,!0,n)),void 0===i&&(i=Je(e,t,r)),"normal"===i&&t in it&&(i=it[t]),""===n||n?(s=parseFloat(i),!0===n||isFinite(s)?s||0:i):i}}),C.each(["height","width"],(function(e,t){C.cssHooks[t]={get:function(e,n,r){if(n)return!nt.test(C.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?at(e,t,r):Ke(e,rt,(function(){return at(e,t,r)}))},set:function(e,n,r){var i,s=Ge(e),o=!f.scrollboxSize()&&"absolute"===s.position,a=(o||r)&&"border-box"===C.css(e,"boxSizing",!1,s),l=r?ot(e,t,r,a,s):0;return a&&o&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-ot(e,t,"border",!1,s)-.5)),l&&(i=ue.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=C.css(e,t)),st(0,n,l)}}})),C.cssHooks.marginLeft=Qe(f.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Je(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(e,t){C.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+he[r]+t]=s[r]||s[r-2]||s[0];return i}},"margin"!==e&&(C.cssHooks[e+t].set=st)})),C.fn.extend({css:function(e,t){return Q(this,(function(e,t,n){var r,i,s={},o=0;if(Array.isArray(t)){for(r=Ge(e),i=t.length;o<i;o++)s[t[o]]=C.css(e,t[o],!1,r);return s}return void 0!==n?C.style(e,t,n):C.css(e,t)}),e,t,arguments.length>1)}}),C.Tween=lt,lt.prototype={constructor:lt,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(C.cssNumber[n]?"":"px")},cur:function(){var e=lt.propHooks[this.prop];return e&&e.get?e.get(this):lt.propHooks._default.get(this)},run:function(e){var t,n=lt.propHooks[this.prop];return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):lt.propHooks._default.set(this),this}},lt.prototype.init.prototype=lt.prototype,lt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){C.fx.step[e.prop]?C.fx.step[e.prop](e):1!==e.elem.nodeType||!C.cssHooks[e.prop]&&null==e.elem.style[tt(e.prop)]?e.elem[e.prop]=e.now:C.style(e.elem,e.prop,e.now+e.unit)}}},lt.propHooks.scrollTop=lt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=lt.prototype.init,C.fx.step={};var ct,ut,ht=/^(?:toggle|show|hide)$/,dt=/queueHooks$/;function ft(){ut&&(!1===m.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(ft):e.setTimeout(ft,C.fx.interval),C.fx.tick())}function pt(){return e.setTimeout((function(){ct=void 0})),ct=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=he[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function mt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,t,e))return r}function yt(e,t,n){var r,i,s=0,o=yt.prefilters.length,a=C.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var t=ct||pt(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),s=0,o=c.tweens.length;s<o;s++)c.tweens[s].run(r);return a.notifyWith(e,[c,r,n]),r<1&&o?n:(o||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:C.extend({},t),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:t,originalOptions:n,startTime:ct||pt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=C.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,r,i,s,o;for(n in e)if(i=t[r=te(n)],s=e[n],Array.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),(o=C.cssHooks[r])&&"expand"in o)for(n in s=o.expand(s),delete e[r],s)n in e||(e[n]=s[n],t[n]=i);else t[r]=i}(u,c.opts.specialEasing);s<o;s++)if(r=yt.prefilters[s].call(c,e,u,c.opts))return p(r.stop)&&(C._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return C.map(u,mt,c),p(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),C.fx.timer(C.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}C.Animation=C.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return me(n.elem,e,ue.exec(t),n),n}]},tweener:function(e,t){p(e)?(t=e,e=["*"]):e=e.match(W);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,s,o,a,l,c,u,h="width"in t||"height"in t,d=this,f={},p=e.style,g=e.nodeType&&ge(e),m=ie.get(e,"fxshow");for(r in n.queue||(null==(o=C._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,C.queue(e,"fx").length||o.empty.fire()}))}))),t)if(i=t[r],ht.test(i)){if(delete t[r],s=s||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}f[r]=m&&m[r]||C.style(e,r)}if((l=!C.isEmptyObject(t))||!C.isEmptyObject(f))for(r in h&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=m&&m.display)&&(c=ie.get(e,"display")),"none"===(u=C.css(e,"display"))&&(c?u=c:(_e([e],!0),c=e.style.display||c,u=C.css(e,"display"),_e([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===C.css(e,"float")&&(l||(d.done((function(){p.display=c})),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=ie.access(e,"fxshow",{display:c}),s&&(m.hidden=!g),g&&_e([e],!0),d.done((function(){for(r in g||_e([e]),ie.remove(e,"fxshow"),f)C.style(e,r,f[r])}))),l=mt(g?m[r]:0,r,d),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),C.speed=function(e,t,n){var r=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||p(e)&&e,duration:e,easing:n&&t||t&&!p(t)&&t};return C.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in C.fx.speeds?r.duration=C.fx.speeds[r.duration]:r.duration=C.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){p(r.old)&&r.old.call(this),r.queue&&C.dequeue(this,r.queue)},r},C.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ge).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=C.isEmptyObject(e),s=C.speed(t,n,r),o=function(){var t=yt(this,C.extend({},e),s);(i||ie.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",s=C.timers,o=ie.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&dt.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=e&&s[i].queue!==e||(s[i].anim.stop(n),t=!1,s.splice(i,1));!t&&n||C.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=ie.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=C.timers,o=r?r.length:0;for(n.finish=!0,C.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),C.each(["toggle","show","hide"],(function(e,t){var n=C.fn[t];C.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(gt(t,!0),e,r,i)}})),C.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){C.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers;for(ct=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||C.fx.stop(),ct=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){ut||(ut=!0,ft())},C.fx.stop=function(){ut=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(t,n){return t=C.fx&&C.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}}))},function(){var e=m.createElement("input"),t=m.createElement("select").appendChild(m.createElement("option"));e.type="checkbox",f.checkOn=""!==e.value,f.optSelected=t.selected,(e=m.createElement("input")).value="t",e.type="radio",f.radioValue="t"===e.value}();var vt,_t=C.expr.attrHandle;C.fn.extend({attr:function(e,t){return Q(this,C.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){C.removeAttr(this,e)}))}}),C.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?C.prop(e,t,n):(1===s&&C.isXMLDoc(e)||(i=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?vt:void 0)),void 0!==n?null===n?void C.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=C.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&T(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(W);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),vt={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=_t[t]||C.find.attr;_t[t]=function(e,t,r){var i,s,o=t.toLowerCase();return r||(s=_t[o],_t[o]=i,i=null!=n(e,t,r)?o:null,_t[o]=s),i}}));var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Ct(e){return(e.match(W)||[]).join(" ")}function Et(e){return e.getAttribute&&e.getAttribute("class")||""}function Tt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(W)||[]}C.fn.extend({prop:function(e,t){return Q(this,C.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[C.propFix[e]||e]}))}}),C.extend({prop:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&C.isXMLDoc(e)||(t=C.propFix[t]||t,i=C.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=C.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(C.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(e){var t,n,r,i,s,o;return p(e)?this.each((function(t){C(this).addClass(e.call(this,t,Et(this)))})):(t=Tt(e)).length?this.each((function(){if(r=Et(this),n=1===this.nodeType&&" "+Ct(r)+" "){for(s=0;s<t.length;s++)i=t[s],n.indexOf(" "+i+" ")<0&&(n+=i+" ");o=Ct(n),r!==o&&this.setAttribute("class",o)}})):this},removeClass:function(e){var t,n,r,i,s,o;return p(e)?this.each((function(t){C(this).removeClass(e.call(this,t,Et(this)))})):arguments.length?(t=Tt(e)).length?this.each((function(){if(r=Et(this),n=1===this.nodeType&&" "+Ct(r)+" "){for(s=0;s<t.length;s++)for(i=t[s];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");o=Ct(n),r!==o&&this.setAttribute("class",o)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,s,o=typeof e,a="string"===o||Array.isArray(e);return p(e)?this.each((function(n){C(this).toggleClass(e.call(this,n,Et(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=Tt(e),this.each((function(){if(a)for(s=C(this),i=0;i<n.length;i++)r=n[i],s.hasClass(r)?s.removeClass(r):s.addClass(r);else void 0!==e&&"boolean"!==o||((r=Et(this))&&ie.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":ie.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+Ct(Et(n))+" ").indexOf(t)>-1)return!0;return!1}});var kt=/\r/g;C.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=p(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,C(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=C.map(i,(function(e){return null==e?"":e+""}))),(t=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=C.valHooks[i.type]||C.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(kt,""):null==n?"":n:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value");return null!=t?t:Ct(C.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],l=o?s+1:i.length;for(r=s<0?l:o?s:0;r<l;r++)if(((n=i[r]).selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!T(n.parentNode,"optgroup"))){if(t=C(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,s=C.makeArray(t),o=i.length;o--;)((r=i[o]).selected=C.inArray(C.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=C.inArray(C(e).val(),t)>-1}},f.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var It=e.location,St={guid:Date.now()},xt=/\?/;C.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],n&&!r||C.error("Invalid XML: "+(r?C.map(r.childNodes,(function(e){return e.textContent})).join("\n"):t)),n};var Nt=/^(?:focusinfocus|focusoutblur)$/,Rt=function(e){e.stopPropagation()};C.extend(C.event,{trigger:function(t,n,r,i){var s,o,a,l,c,h,d,f,y=[r||m],v=u.call(t,"type")?t.type:t,_=u.call(t,"namespace")?t.namespace.split("."):[];if(o=f=a=r=r||m,3!==r.nodeType&&8!==r.nodeType&&!Nt.test(v+C.event.triggered)&&(v.indexOf(".")>-1&&(_=v.split("."),v=_.shift(),_.sort()),c=v.indexOf(":")<0&&"on"+v,(t=t[C.expando]?t:new C.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=_.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:C.makeArray(n,[t]),d=C.event.special[v]||{},i||!d.trigger||!1!==d.trigger.apply(r,n))){if(!i&&!d.noBubble&&!g(r)){for(l=d.delegateType||v,Nt.test(l+v)||(o=o.parentNode);o;o=o.parentNode)y.push(o),a=o;a===(r.ownerDocument||m)&&y.push(a.defaultView||a.parentWindow||e)}for(s=0;(o=y[s++])&&!t.isPropagationStopped();)f=o,t.type=s>1?l:d.bindType||v,(h=(ie.get(o,"events")||Object.create(null))[t.type]&&ie.get(o,"handle"))&&h.apply(o,n),(h=c&&o[c])&&h.apply&&ne(o)&&(t.result=h.apply(o,n),!1===t.result&&t.preventDefault());return t.type=v,i||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(y.pop(),n)||!ne(r)||c&&p(r[v])&&!g(r)&&((a=r[c])&&(r[c]=null),C.event.triggered=v,t.isPropagationStopped()&&f.addEventListener(v,Rt),r[v](),t.isPropagationStopped()&&f.removeEventListener(v,Rt),C.event.triggered=void 0,a&&(r[c]=a)),t.result}},simulate:function(e,t,n){var r=C.extend(new C.Event,n,{type:e,isSimulated:!0});C.event.trigger(r,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each((function(){C.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return C.event.trigger(e,t,n,!0)}});var Pt=/\[\]$/,At=/\r?\n/g,Ot=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;function Dt(e,t,n,r){var i;if(Array.isArray(t))C.each(t,(function(t,i){n||Pt.test(e)?r(e,i):Dt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==_(t))r(e,t);else for(i in t)Dt(e+"["+i+"]",t[i],n,r)}C.param=function(e,t){var n,r=[],i=function(e,t){var n=p(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,(function(){i(this.name,this.value)}));else for(n in e)Dt(n,e[n],t,i);return r.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=C.prop(this,"elements");return e?C.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!C(this).is(":disabled")&&Lt.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!Ce.test(e))})).map((function(e,t){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,(function(e){return{name:t.name,value:e.replace(At,"\r\n")}})):{name:t.name,value:n.replace(At,"\r\n")}})).get()}});var Ft=/%20/g,Mt=/#.*$/,jt=/([?&])_=[^&]*/,Ut=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:GET|HEAD)$/,Bt=/^\/\//,Ht={},Vt={},Wt="*/".concat("*"),$t=m.createElement("a");function zt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(W)||[];if(p(n))for(;r=s[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Gt(e,t,n,r){var i={},s=e===Vt;function o(a){var l;return i[a]=!0,C.each(e[a]||[],(function(e,a){var c=a(t,n,r);return"string"!=typeof c||s||i[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)})),l}return o(t.dataTypes[0])||!i["*"]&&o("*")}function Kt(e,t){var n,r,i=C.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&C.extend(!0,e,r),e}$t.href=It.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:It.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(It.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Kt(Kt(e,C.ajaxSettings),t):Kt(C.ajaxSettings,e)},ajaxPrefilter:zt(Ht),ajaxTransport:zt(Vt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,s,o,a,l,c,u,h,d,f=C.ajaxSetup({},n),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?C(p):C.event,y=C.Deferred(),v=C.Callbacks("once memory"),_=f.statusCode||{},b={},w={},E="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(c){if(!o)for(o={};t=Ut.exec(s);)o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)T.always(e[T.status]);else for(t in e)_[t]=[_[t],e[t]];return this},abort:function(e){var t=e||E;return r&&r.abort(t),k(0,t),this}};if(y.promise(T),f.url=((t||f.url||It.href)+"").replace(Bt,It.protocol+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(W)||[""],null==f.crossDomain){l=m.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=$t.protocol+"//"+$t.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=C.param(f.data,f.traditional)),Gt(Ht,f,n,T),c)return T;for(h in(u=C.event&&f.global)&&0==C.active++&&C.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!qt.test(f.type),i=f.url.replace(Mt,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ft,"+")):(d=f.url.slice(i.length),f.data&&(f.processData||"string"==typeof f.data)&&(i+=(xt.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(jt,"$1"),d=(xt.test(i)?"&":"?")+"_="+St.guid+++d),f.url=i+d),f.ifModified&&(C.lastModified[i]&&T.setRequestHeader("If-Modified-Since",C.lastModified[i]),C.etag[i]&&T.setRequestHeader("If-None-Match",C.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Wt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||c))return T.abort();if(E="abort",v.add(f.complete),T.done(f.success),T.fail(f.error),r=Gt(Vt,f,n,T)){if(T.readyState=1,u&&g.trigger("ajaxSend",[T,f]),c)return T;f.async&&f.timeout>0&&(a=e.setTimeout((function(){T.abort("timeout")}),f.timeout));try{c=!1,r.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,o,l){var h,d,m,b,w,E=n;c||(c=!0,a&&e.clearTimeout(a),r=void 0,s=l||"",T.readyState=t>0?4:0,h=t>=200&&t<300||304===t,o&&(b=function(e,t,n){for(var r,i,s,o,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i);break}if(l[0]in n)s=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}(f,T,o)),!h&&C.inArray("script",f.dataTypes)>-1&&C.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),b=function(e,t,n,r){var i,s,o,a,l,c={},u=e.dataTypes.slice();if(u[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(s=u.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(o=c[l+" "+s]||c["* "+s]))for(i in c)if((a=i.split(" "))[1]===s&&(o=c[l+" "+a[0]]||c["* "+a[0]])){!0===o?o=c[i]:!0!==c[i]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}(f,b,T,h),h?(f.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(C.lastModified[i]=w),(w=T.getResponseHeader("etag"))&&(C.etag[i]=w)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=b.state,d=b.data,h=!(m=b.error))):(m=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",h?y.resolveWith(p,[d,E,T]):y.rejectWith(p,[T,E,m]),T.statusCode(_),_=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[T,f,h?d:m]),v.fireWith(p,[T,E]),u&&(g.trigger("ajaxComplete",[T,f]),--C.active||C.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],(function(e,t){C[t]=function(e,n,r,i){return p(n)&&(i=i||r,r=n,n=void 0),C.ajax(C.extend({url:e,type:t,dataType:i,data:n,success:r},C.isPlainObject(e)&&e))}})),C.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),C._evalUrl=function(e,t,n){return C.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){C.globalEval(e,t,n)}})},C.fn.extend({wrapAll:function(e){var t;return this[0]&&(p(e)&&(e=e.call(this[0])),t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return p(e)?this.each((function(t){C(this).wrapInner(e.call(this,t))})):this.each((function(){var t=C(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=p(e);return this.each((function(n){C(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Jt=C.ajaxSettings.xhr();f.cors=!!Jt&&"withCredentials"in Jt,f.ajax=Jt=!!Jt,C.ajaxTransport((function(t){var n,r;if(f.cors||Jt&&!t.crossDomain)return{send:function(i,s){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(o,i[o]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Yt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout((function(){n&&r()}))},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}})),C.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),C.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),C.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=C("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),m.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Qt,Xt=[],Zt=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||C.expando+"_"+St.guid++;return this[e]=!0,e}}),C.ajaxPrefilter("json jsonp",(function(t,n,r){var i,s,o,a=!1!==t.jsonp&&(Zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=p(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Zt,"$1"+i):!1!==t.jsonp&&(t.url+=(xt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return o||C.error(i+" was not called"),o[0]},t.dataTypes[0]="json",s=e[i],e[i]=function(){o=arguments},r.always((function(){void 0===s?C(e).removeProp(i):e[i]=s,t[i]&&(t.jsonpCallback=n.jsonpCallback,Xt.push(i)),o&&p(s)&&s(o[0]),o=s=void 0})),"script"})),f.createHTMLDocument=((Qt=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Qt.childNodes.length),C.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(f.createHTMLDocument?((r=(t=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,t.head.appendChild(r)):t=m),s=!n&&[],(i=M.exec(e))?[t.createElement(i[1])]:(i=Ne([e],t,s),s&&s.length&&C(s).remove(),C.merge([],i.childNodes)));var r,i,s},C.fn.load=function(e,t,n){var r,i,s,o=this,a=e.indexOf(" ");return a>-1&&(r=Ct(e.slice(a)),e=e.slice(0,a)),p(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),o.length>0&&C.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(r?C("<div>").append(C.parseHTML(e)).find(r):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},C.expr.pseudos.animated=function(e){return C.grep(C.timers,(function(t){return e===t.elem})).length},C.offset={setOffset:function(e,t,n){var r,i,s,o,a,l,c=C.css(e,"position"),u=C(e),h={};"static"===c&&(e.style.position="relative"),a=u.offset(),s=C.css(e,"top"),l=C.css(e,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(o=(r=u.position()).top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(l)||0),p(t)&&(t=t.call(e,n,C.extend({},a))),null!=t.top&&(h.top=t.top-a.top+o),null!=t.left&&(h.left=t.left-a.left+i),"using"in t?t.using.call(e,h):u.css(h)}},C.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){C.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===C.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=C(e).offset()).top+=C.css(e,"borderTopWidth",!0),i.left+=C.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-C.css(r,"marginTop",!0),left:t.left-i.left-C.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent;return e||de}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;C.fn[e]=function(r){return Q(this,(function(e,r,i){var s;if(g(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===i)return s?s[t]:e[r];s?s.scrollTo(n?s.pageXOffset:i,n?i:s.pageYOffset):e[r]=i}),e,r,arguments.length)}})),C.each(["top","left"],(function(e,t){C.cssHooks[t]=Qe(f.pixelPosition,(function(e,n){if(n)return n=Je(e,t),$e.test(n)?C(e).position()[t]+"px":n}))})),C.each({Height:"height",Width:"width"},(function(e,t){C.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){C.fn[r]=function(i,s){var o=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===s?"margin":"border");return Q(this,(function(t,n,i){var s;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===i?C.css(t,n,a):C.style(t,n,i,a)}),t,o?i:void 0,o)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){C.fn[t]=function(e){return this.on(t,e)}})),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){C.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;C.proxy=function(e,t){var n,r,s;if("string"==typeof t&&(n=e[t],t=e,e=n),p(e))return r=i.call(arguments,2),s=function(){return e.apply(t||this,r.concat(i.call(arguments)))},s.guid=e.guid=e.guid||C.guid++,s},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=T,C.isFunction=p,C.isWindow=g,C.camelCase=te,C.type=_,C.now=Date.now,C.isNumeric=function(e){var t=C.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},C.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return C}));var tn=e.jQuery,nn=e.$;return C.noConflict=function(t){return e.$===C&&(e.$=nn),t&&e.jQuery===C&&(e.jQuery=tn),C},void 0===t&&(e.jQuery=e.$=C),C}))})),i("alV1T");const{toString:o}=Object.prototype,{getPrototypeOf:a}=Object,l=(c=Object.create(null),e=>{const t=o.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),h=e=>t=>typeof t===e,{isArray:d}=Array,f=h("undefined");const p=u("ArrayBuffer");const g=h("string"),m=h("function"),y=h("number"),v=e=>null!==e&&"object"==typeof e,_=e=>{if("object"!==l(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),w=u("File"),C=u("Blob"),E=u("FileList"),T=u("URLSearchParams");function k(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),d(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function I(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,x=e=>!f(e)&&e!==S;const N=(R="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>R&&e instanceof R);var R;const P=u("HTMLFormElement"),A=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),O=u("RegExp"),L=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},D="abcdefghijklmnopqrstuvwxyz",F="0123456789",M={DIGIT:F,ALPHA:D,ALPHA_DIGIT:D+D.toUpperCase()+F};const j=u("AsyncFunction");var U={isArray:d,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=l(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:g,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:_,isUndefined:f,isDate:b,isFile:w,isBlob:C,isRegExp:O,isFunction:m,isStream:e=>v(e)&&m(e.pipe),isURLSearchParams:T,isTypedArray:N,isFileList:E,forEach:k,merge:function e(){const{caseless:t}=x(this)&&this||{},n={},r=(r,i)=>{const s=t&&I(n,i)||i;_(n[s])&&_(r)?n[s]=e(n[s],r):_(r)?n[s]=e({},r):d(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&k(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(k(t,((t,r)=>{n&&m(t)?e[r]=s(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||l[o]||(t[o]=e[o],l[o]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:P,hasOwnProperty:A,hasOwnProp:A,reduceDescriptors:L,freezeMethods:e=>{L(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:I,global:S,isContextDefined:x,ALPHABET:M,generateString:(e=16,t=M.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=d(e)?[]:{};return k(e,((e,t)=>{const s=n(e,r+1);!f(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:j,isThenable:e=>e&&(v(e)||m(e))&&m(e.then)&&m(e.catch)};function q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}U.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const B=q.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{H[e]={value:e}})),Object.defineProperties(q,H),Object.defineProperty(B,"isAxiosError",{value:!0}),q.from=(e,t,n,r,i,s)=>{const o=Object.create(B);return U.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),q.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var V,W,$,z=q;W=function(e){var t,n,r=ee(e),i=r[0],s=r[1],o=new Q(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=J[e.charCodeAt(n)]<<18|J[e.charCodeAt(n+1)]<<12|J[e.charCodeAt(n+2)]<<6|J[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=J[e.charCodeAt(n)]<<2|J[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=J[e.charCodeAt(n)]<<10|J[e.charCodeAt(n+1)]<<4|J[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},$=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(te(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(Y[t>>2]+Y[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(Y[t>>10]+Y[t>>4&63]+Y[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var G,K,Y=[],J=[],Q="undefined"!=typeof Uint8Array?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z=0;Z<64;++Z)Y[Z]=X[Z],J[X.charCodeAt(Z)]=Z;function ee(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function te(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(Y[(i=r)>>18&63]+Y[i>>12&63]+Y[i>>6&63]+Y[63&i]);return s.join("")}J["-".charCodeAt(0)]=62,J["_".charCodeAt(0)]=63,G=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=c}return(f?-1:1)*o*Math.pow(2,s-r)},K=function(e,t,n,r,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*g};var ne="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;V=se;var re=2147483647;function ie(e){if(e>re)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,se.prototype),t}function se(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return le(e)}return oe(e,t,n)}function oe(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!se.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|de(e,t),r=ie(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(je(e,Uint8Array)){var t=new Uint8Array(e);return ue(t.buffer,t.byteOffset,t.byteLength)}return ce(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(je(e,ArrayBuffer)||e&&je(e.buffer,ArrayBuffer))return ue(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(je(e,SharedArrayBuffer)||e&&je(e.buffer,SharedArrayBuffer)))return ue(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return se.from(r,t,n);var i=function(e){if(se.isBuffer(e)){var t=0|he(e.length),n=ie(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ue(e.length)?ie(0):ce(e);if("Buffer"===e.type&&Array.isArray(e.data))return ce(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return se.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ae(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function le(e){return ae(e),ie(e<0?0:0|he(e))}function ce(e){for(var t=e.length<0?0:0|he(e.length),n=ie(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function ue(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,se.prototype),r}function he(e){if(e>=re)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+re.toString(16)+" bytes");return 0|e}function de(e,t){if(se.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||je(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return De(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Fe(e).length;default:if(i)return r?-1:De(e).length;t=(""+t).toLowerCase(),i=!0}}function fe(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Se(this,t,n);case"utf8":case"utf-8":return Ee(this,t,n);case"ascii":return ke(this,t,n);case"latin1":case"binary":return Ie(this,t,n);case"base64":return Ce(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function pe(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function ge(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ue(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=se.from(t,r)),se.isBuffer(t))return 0===t.length?-1:me(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):me(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function me(e,t,n,r,i){var s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var u=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*o}else-1!==u&&(s-=s-u),u=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){for(var h=!0,d=0;d<l;d++)if(c(e,s+d)!==c(t,d)){h=!1;break}if(h)return s}return-1}function ye(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var s=t.length;r>s/2&&(r=s/2);for(var o=0;o<r;++o){var a=parseInt(t.substr(2*o,2),16);if(Ue(a))return o;e[n+o]=a}return o}function ve(e,t,n,r){return Me(De(t,e.length-n),e,n,r)}function _e(e,t,n,r){return Me(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function be(e,t,n,r){return Me(Fe(t),e,n,r)}function we(e,t,n,r){return Me(function(e,t){for(var n,r,i,s=[],o=0;o<e.length&&!((t-=2)<0);++o)r=(n=e.charCodeAt(o))>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function Ce(e,t,n){return 0===t&&n===e.length?$(e):$(e.slice(t,n))}function Ee(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var s,o,a,l,c=e[i],u=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=n)switch(h){case 1:c<128&&(u=c);break;case 2:128==(192&(s=e[i+1]))&&(l=(31&c)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],o=e[i+2],128==(192&s)&&128==(192&o)&&(l=(15&c)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],128==(192&s)&&128==(192&o)&&128==(192&a)&&(l=(15&c)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,h=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),i+=h}return function(e){var t=e.length;if(t<=Te)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Te));return n}(r)}se.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),se.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(se.prototype,"parent",{enumerable:!0,get:function(){if(se.isBuffer(this))return this.buffer}}),Object.defineProperty(se.prototype,"offset",{enumerable:!0,get:function(){if(se.isBuffer(this))return this.byteOffset}}),se.poolSize=8192,se.from=function(e,t,n){return oe(e,t,n)},Object.setPrototypeOf(se.prototype,Uint8Array.prototype),Object.setPrototypeOf(se,Uint8Array),se.alloc=function(e,t,n){return function(e,t,n){return ae(e),e<=0?ie(e):void 0!==t?"string"==typeof n?ie(e).fill(t,n):ie(e).fill(t):ie(e)}(e,t,n)},se.allocUnsafe=function(e){return le(e)},se.allocUnsafeSlow=function(e){return le(e)},se.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==se.prototype},se.compare=function(e,t){if(je(e,Uint8Array)&&(e=se.from(e,e.offset,e.byteLength)),je(t,Uint8Array)&&(t=se.from(t,t.offset,t.byteLength)),!se.isBuffer(e)||!se.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},se.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},se.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return se.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=se.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var s=e[n];if(je(s,Uint8Array))i+s.length>r.length?se.from(s).copy(r,i):Uint8Array.prototype.set.call(r,s,i);else{if(!se.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,i)}i+=s.length}return r},se.byteLength=de,se.prototype._isBuffer=!0,se.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)pe(this,t,t+1);return this},se.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)pe(this,t,t+3),pe(this,t+1,t+2);return this},se.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)pe(this,t,t+7),pe(this,t+1,t+6),pe(this,t+2,t+5),pe(this,t+3,t+4);return this},se.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?Ee(this,0,e):fe.apply(this,arguments)},se.prototype.toLocaleString=se.prototype.toString,se.prototype.equals=function(e){if(!se.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===se.compare(this,e)},se.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ne&&(se.prototype[ne]=se.prototype.inspect),se.prototype.compare=function(e,t,n,r,i){if(je(e,Uint8Array)&&(e=se.from(e,e.offset,e.byteLength)),!se.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;for(var s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0),a=Math.min(s,o),l=this.slice(r,i),c=e.slice(t,n),u=0;u<a;++u)if(l[u]!==c[u]){s=l[u],o=c[u];break}return s<o?-1:o<s?1:0},se.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},se.prototype.indexOf=function(e,t,n){return ge(this,e,t,n,!0)},se.prototype.lastIndexOf=function(e,t,n){return ge(this,e,t,n,!1)},se.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ye(this,e,t,n);case"utf8":case"utf-8":return ve(this,e,t,n);case"ascii":case"latin1":case"binary":return _e(this,e,t,n);case"base64":return be(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},se.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Te=4096;function ke(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function Ie(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function Se(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",s=t;s<n;++s)i+=qe[e[s]];return i}function xe(e,t,n){for(var r=e.slice(t,n),i="",s=0;s<r.length-1;s+=2)i+=String.fromCharCode(r[s]+256*r[s+1]);return i}function Ne(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Re(e,t,n,r,i,s){if(!se.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Pe(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ae(e,t,n,r,i){return t=+t,n>>>=0,i||Pe(e,0,n,4),K(e,t,n,r,23,4),n+4}function Oe(e,t,n,r,i){return t=+t,n>>>=0,i||Pe(e,0,n,8),K(e,t,n,r,52,8),n+8}se.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,se.prototype),r},se.prototype.readUintLE=se.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ne(e,t,this.length);for(var r=this[e],i=1,s=0;++s<t&&(i*=256);)r+=this[e+s]*i;return r},se.prototype.readUintBE=se.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ne(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},se.prototype.readUint8=se.prototype.readUInt8=function(e,t){return e>>>=0,t||Ne(e,1,this.length),this[e]},se.prototype.readUint16LE=se.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ne(e,2,this.length),this[e]|this[e+1]<<8},se.prototype.readUint16BE=se.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ne(e,2,this.length),this[e]<<8|this[e+1]},se.prototype.readUint32LE=se.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ne(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},se.prototype.readUint32BE=se.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ne(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},se.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ne(e,t,this.length);for(var r=this[e],i=1,s=0;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},se.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ne(e,t,this.length);for(var r=t,i=1,s=this[e+--r];r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},se.prototype.readInt8=function(e,t){return e>>>=0,t||Ne(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},se.prototype.readInt16LE=function(e,t){e>>>=0,t||Ne(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},se.prototype.readInt16BE=function(e,t){e>>>=0,t||Ne(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},se.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ne(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},se.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ne(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},se.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ne(e,4,this.length),G(this,e,!0,23,4)},se.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ne(e,4,this.length),G(this,e,!1,23,4)},se.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ne(e,8,this.length),G(this,e,!0,52,8)},se.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ne(e,8,this.length),G(this,e,!1,52,8)},se.prototype.writeUintLE=se.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||Re(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},se.prototype.writeUintBE=se.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||Re(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},se.prototype.writeUint8=se.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,1,255,0),this[t]=255&e,t+1},se.prototype.writeUint16LE=se.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},se.prototype.writeUint16BE=se.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},se.prototype.writeUint32LE=se.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},se.prototype.writeUint32BE=se.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},se.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);Re(this,e,t,n,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<n&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},se.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);Re(this,e,t,n,i-1,-i)}var s=n-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},se.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},se.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},se.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},se.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},se.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},se.prototype.writeFloatLE=function(e,t,n){return Ae(this,e,t,!0,n)},se.prototype.writeFloatBE=function(e,t,n){return Ae(this,e,t,!1,n)},se.prototype.writeDoubleLE=function(e,t,n){return Oe(this,e,t,!0,n)},se.prototype.writeDoubleBE=function(e,t,n){return Oe(this,e,t,!1,n)},se.prototype.copy=function(e,t,n,r){if(!se.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},se.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!se.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{var o=se.isBuffer(e)?e:se.from(e,r),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=o[s%a]}return this};var Le=/[^+/0-9A-Za-z-_]/g;function De(e,t){var n;t=t||1/0;for(var r=e.length,i=null,s=[],o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Fe(e){return W(function(e){if((e=(e=e.split("=")[0]).trim().replace(Le,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Me(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function je(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ue(e){return e!=e}var qe=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}(),Be=V;function He(e){return U.isPlainObject(e)||U.isArray(e)}function Ve(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function We(e,t,n){return e?e.concat(t).map((function(e,t){return e=Ve(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const $e=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));var ze=function(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new z("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Be.from(e):e}function c(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(U.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(He)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=Ve(n),a.forEach((function(e,r){!U.isUndefined(e)&&null!==e&&t.append(!0===o?We([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!He(e)||(t.append(We(i,n,s),l(e)),!1)}const u=[],h=Object.assign($e,{defaultVisitor:c,convertValue:l,isVisitable:He});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!U.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&i.call(t,n,U.isString(s)?s.trim():s,r,h))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function Ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ke(e,t){this._pairs=[],e&&ze(e,this,t)}const Ye=Ke.prototype;Ye.append=function(e,t){this._pairs.push([e,t])},Ye.toString=function(e){const t=e?function(t){return e.call(this,t,Ge)}:Ge;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Je=Ke;function Qe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xe(e,t,n){if(!t)return e;const r=n&&n.encode||Qe,i=n&&n.serialize;let s;if(s=i?i(t,n):U.isURLSearchParams(t)?t.toString():new Je(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Ze=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},et={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var tt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Je,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function nt(e,t){return ze(e,new tt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return tt.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var rt=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&U.isArray(r)?r.length:s,a)return U.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&U.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&U.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,r)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const it={"Content-Type":void 0};const st={transitional:et,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=U.isObject(e);i&&U.isHTMLForm(e)&&(e=new FormData(e));if(U.isFormData(e))return r&&r?JSON.stringify(rt(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return nt(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ze(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||st.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw z.from(e,z.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tt.classes.FormData,Blob:tt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],(function(e){st.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){st.headers[e]=U.merge(it)}));var ot=st;const at=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var lt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&at[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const ct=Symbol("internals");function ut(e){return e&&String(e).trim().toLowerCase()}function ht(e){return!1===e||null==e?e:U.isArray(e)?e.map(ht):String(e)}function dt(e,t,n,r,i){return U.isFunction(r)?r.call(this,t,n):(i&&(t=n),U.isString(t)?U.isString(r)?-1!==t.indexOf(r):U.isRegExp(r)?r.test(t):void 0:void 0)}class ft{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=ut(t);if(!i)throw new Error("header name must be a non-empty string");const s=U.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ht(e))}const s=(e,t)=>U.forEach(e,((e,n)=>i(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(lt(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=ut(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ut(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!dt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=ut(e)){const i=U.findKey(n,e);!i||t&&!dt(0,n[i],i,t)||(delete n[i],r=!0)}}return U.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!dt(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return U.forEach(this,((r,i)=>{const s=U.findKey(n,i);if(s)return t[s]=ht(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=ht(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&U.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ct]=this[ct]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ut(e);t[r]||(!function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return U.isArray(e)?e.forEach(r):r(e),this}}ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.freezeMethods(ft.prototype),U.freezeMethods(ft);var pt=ft;function gt(e,t){const n=this||ot,r=t||n,i=pt.from(r.headers);let s=r.data;return U.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function mt(e){return!(!e||!e.__CANCEL__)}function yt(e,t,n){z.call(this,null==e?"canceled":e,z.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(yt,z,{__CANCEL__:!0});var vt=yt;function _t(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var bt=tt.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),U.isString(r)&&o.push("path="+r),U.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function wt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ct(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?wt(e,t):t}var Et=tt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=U.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Tt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var kt=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function It(e,t){let n=0;const r=kt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var St="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=pt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}U.isFormData(r)&&(tt.isStandardBrowserEnv||tt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const c=Ct(e.baseURL,e.url);function u(){if(!l)return;const r=pt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());_t((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Xe(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new z("Request aborted",z.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||et;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new z(t,r.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,l)),l=null},tt.isStandardBrowserEnv){const t=(e.withCredentials||Et(c))&&e.xsrfCookieName&&bt.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&U.forEach(i.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",It(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",It(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new vt(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=Tt(c);h&&-1===tt.protocols.indexOf(h)?n(new z("Unsupported protocol "+h+":",z.ERR_BAD_REQUEST,e)):l.send(r||null)}))};const xt={http:null,xhr:St};U.forEach(xt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Nt={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=U.isString(n)?xt[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(U.hasOwnProp(xt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!U.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:xt};function Rt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vt(null,e)}function Pt(e){Rt(e),e.headers=pt.from(e.headers),e.data=gt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Nt.getAdapter(e.adapter||ot.adapter)(e).then((function(t){return Rt(e),t.data=gt.call(e,e.transformResponse,t),t.headers=pt.from(t.headers),t}),(function(t){return mt(t)||(Rt(e),t&&t.response&&(t.response.data=gt.call(e,e.transformResponse,t.response),t.response.headers=pt.from(t.response.headers))),Promise.reject(t)}))}const At=e=>e instanceof pt?e.toJSON():e;function Ot(e,t){t=t||{};const n={};function r(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function i(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!U.isUndefined(t))return r(void 0,t)}function o(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(At(e),At(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=l[r]||i,o=s(e[r],t[r],r);U.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Lt="1.4.0",Dt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Dt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ft={};Dt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new z(r(i," has been removed"+(t?" in "+t:"")),z.ERR_DEPRECATED);return t&&!Ft[i]&&(Ft[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Mt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Dt};const jt=Mt.validators;class Ut{constructor(e){this.defaults=e,this.interceptors={request:new Ze,response:new Ze}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ot(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&Mt.assertOptions(n,{silentJSONParsing:jt.transitional(jt.boolean),forcedJSONParsing:jt.transitional(jt.boolean),clarifyTimeoutError:jt.transitional(jt.boolean)},!1),null!=r&&(U.isFunction(r)?t.paramsSerializer={serialize:r}:Mt.assertOptions(r,{encode:jt.function,serialize:jt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&U.merge(i.common,i[t.method]),s&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=pt.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Pt.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Pt.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return Xe(Ct((e=Ot(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}U.forEach(["delete","get","head","options"],(function(e){Ut.prototype[e]=function(t,n){return this.request(Ot(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Ot(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ut.prototype[e]=t(),Ut.prototype[e+"Form"]=t(!0)}));var qt=Ut;class Bt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new vt(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Bt((function(t){e=t})),cancel:e}}}var Ht=Bt;const Vt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vt).forEach((([e,t])=>{Vt[t]=e}));var Wt=Vt;const $t=function e(t){const n=new qt(t),r=s(qt.prototype.request,n);return U.extend(r,qt.prototype,n,{allOwnKeys:!0}),U.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ot(t,n))},r}(ot);$t.Axios=qt,$t.CanceledError=vt,$t.CancelToken=Ht,$t.isCancel=mt,$t.VERSION=Lt,$t.toFormData=ze,$t.AxiosError=z,$t.Cancel=$t.CanceledError,$t.all=function(e){return Promise.all(e)},$t.spread=function(e){return function(t){return e.apply(null,t)}},$t.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},$t.mergeConfig=Ot,$t.AxiosHeaders=pt,$t.formToJSON=e=>rt(U.isHTMLForm(e)?new FormData(e):e),$t.HttpStatusCode=Wt,$t.default=$t;var zt=$t;const{Axios:Gt,AxiosError:Kt,CanceledError:Yt,isCancel:Jt,CancelToken:Qt,VERSION:Xt,all:Zt,Cancel:en,isAxiosError:tn,spread:nn,toFormData:rn,AxiosHeaders:sn,HttpStatusCode:on,formToJSON:an,mergeConfig:ln}=zt,cn=zt.create({baseURL:"https://books-backend.p.goit.global/"});async function un(){return await cn.get("/books/top-books")}async function hn(e){return await cn.get(`/books/${e}`)}async function dn(){return await cn.get("books/category-list")}async function fn(e){const t={category:e};return await cn.get("/books/category",{params:t})}function pn(e){return`<h2 class="home-title">\n            Best Sellers <span class="home-title__accent">Books</span>\n          </h2>\n          <ul class="top-books list">${e.map((({list_name:e,books:t})=>`\n      <li class="top-books__item">\n      <h3 class="top-books__title">${e}</h3>\n      <ul class="books list">\n        ${function(e){return e.map((({book_image:e,title:t,author:n,_id:r,description:i})=>`\n  <li class="books__item list" data-id="${r}">\n    <div class="books__overlay">\n    <img class="books__image" src="${e}" alt="book ${t}" />\n    <p class="books__text--overlay">Quick view</p>\n    </div>\n    <div class="books__info">\n    <h4 class="books__title">${t||"Not found"}</h4>\n    <p class="books__text">${n||"Not found"}</p>\n    </div>\n  </li>\n`)).join("")}(t)}\n        </ul>\n        <button data-category-name="${e}" class="top-books__button" type="button">See more</button>\n        </li>\n        `)).join("")}</ul>`}const gn=document.querySelector(".categories-root");function mn(e){if(e.target.closest(".books__item")){const t=e.target.closest(".books__item").dataset.id;console.log(t)}else if(e.target.classList.contains("top-books__button")){!function(e){const t=async()=>{try{const t=await fn(e);console.log(t)}catch(e){console.error(e)}};t()}(e.target.closest(".top-books__item").children[0].textContent)}}!async function(){const{data:e}=await un();gn.insertAdjacentHTML("beforeend",pn(e)),document.querySelector(".top-books").addEventListener("click",mn)}();var yn,vn={};yn=function(){const e=[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:4,minLength:8},{id:3,value:"Strong",minDiversity:4,minLength:10}];vn={passwordStrength:(t,n=e,r="!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~")=>{let i=t||"";n[0].minDiversity=0,n[0].minLength=0;const s=[{regex:"[a-z]",message:"lowercase"},{regex:"[A-Z]",message:"uppercase"},{regex:"[0-9]",message:"number"}];r&&s.push({regex:`[${r}]`,message:"symbol"});let o={};o.contains=s.filter((e=>new RegExp(`${e.regex}`).test(i))).map((e=>e.message)),o.length=i.length;let a=n.filter((e=>o.contains.length>=e.minDiversity)).filter((e=>o.length>=e.minLength)).sort(((e,t)=>t.id-e.id)).map((e=>({id:e.id,value:e.value})));return Object.assign(o,a[0]),o},defaultOptions:e}},"function"==typeof define&&define.amd?define(yn):yn();var _n=Object.defineProperty,bn=(e,t,n)=>(((e,t,n)=>{t in e?_n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const wn=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Cn=/^-?[0-9]\d*$/,En=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,Tn=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,kn=e=>"string"!=typeof e||""===e;var In=(e=>(e.Required="required",e.Email="email",e.MinLength="minLength",e.MaxLength="maxLength",e.Password="password",e.Number="number",e.Integer="integer",e.MaxNumber="maxNumber",e.MinNumber="minNumber",e.StrongPassword="strongPassword",e.CustomRegexp="customRegexp",e.MinFilesCount="minFilesCount",e.MaxFilesCount="maxFilesCount",e.Files="files",e))(In||{}),Sn=(e=>(e.Required="required",e))(Sn||{}),xn=(e=>(e.Label="label",e.LabelArrow="labelArrow",e))(xn||{});const Nn=[{key:In.Required,dict:{en:"The field is required"}},{key:In.Email,dict:{en:"Email has invalid format"}},{key:In.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:In.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:In.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:In.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:In.Number,dict:{en:"Value should be a number"}},{key:In.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:In.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:In.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:In.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:In.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],Rn=e=>"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then,Pn=e=>Array.isArray(e)?e.filter((e=>e.length>0)):"string"==typeof e&&e.trim()?[...e.split(" ").filter((e=>e.length>0))]:[],An=e=>e instanceof Element||e instanceof HTMLDocument,On={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1};class Ln{constructor(e,t,n){bn(this,"form",null),bn(this,"fields",{}),bn(this,"groupFields",{}),bn(this,"errors",{}),bn(this,"isValid",!1),bn(this,"isSubmitted",!1),bn(this,"globalConfig",On),bn(this,"errorLabels",{}),bn(this,"successLabels",{}),bn(this,"eventListeners",[]),bn(this,"dictLocale",Nn),bn(this,"currentLocale","en"),bn(this,"customStyleTags",{}),bn(this,"onSuccessCallback"),bn(this,"onFailCallback"),bn(this,"onValidateCallback"),bn(this,"tooltips",[]),bn(this,"lastScrollPosition"),bn(this,"isScrollTick"),bn(this,"fieldIds",new Map),bn(this,"getKeyByFieldSelector",(e=>this.fieldIds.get(e))),bn(this,"getFieldSelectorByKey",(e=>{for(const[t,n]of this.fieldIds)if(e===n)return t})),bn(this,"getCompatibleFields",(()=>{const e={};return Object.keys(this.fields).forEach((t=>{let n=t;const r=this.getFieldSelectorByKey(t);"string"==typeof r&&(n=r),e[n]={...this.fields[t]}})),e})),bn(this,"setKeyByFieldSelector",(e=>{if(this.fieldIds.has(e))return this.fieldIds.get(e);const t=String(this.fieldIds.size+1);return this.fieldIds.set(e,t),t})),bn(this,"refreshAllTooltips",(()=>{this.tooltips.forEach((e=>{e.refresh()}))})),bn(this,"handleDocumentScroll",(()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame((()=>{this.refreshAllTooltips(),this.isScrollTick=!1})),this.isScrollTick=!0)})),bn(this,"formSubmitHandler",(e=>{e.preventDefault(),this.isSubmitted=!0,this.validateHandler(e)})),bn(this,"handleFieldChange",(e=>{let t;for(const n in this.fields){if(this.fields[n].elem===e){t=n;break}}t&&(this.fields[t].touched=!0,this.validateField(t,!0))})),bn(this,"handleGroupChange",(e=>{let t;for(const n in this.groupFields){if(this.groupFields[n].elems.find((t=>t===e))){t=n;break}}t&&(this.groupFields[t].touched=!0,this.validateGroup(t,!0))})),bn(this,"handlerChange",(e=>{e.target&&(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())})),this.initialize(e,t,n)}initialize(e,t,n){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=On,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en","string"==typeof e){const t=document.querySelector(e);if(!t)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(t)}else{if(!(e instanceof HTMLFormElement))throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");this.setForm(e)}if(this.globalConfig={...On,...t},n&&(this.dictLocale=[...n,...Nn]),this.isTooltip()){const e=document.createElement("style");e.textContent=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",this.customStyleTags[xn.Label]=document.head.appendChild(e),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,t,n){var r;const i=null!=n?n:e;let s=null==(r=this.dictLocale.find((e=>e.key===i)))?void 0:r.dict[this.currentLocale];if(s||n&&(s=n),s&&void 0!==t)switch(e){case In.MaxLength:case In.MinLength:case In.MaxNumber:case In.MinNumber:case In.MinFilesCount:case In.MaxFilesCount:s=s.replace(":value",String(t))}return s||n||"Value is incorrect"}getFieldErrorMessage(e,t){const n="function"==typeof e.errorMessage?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,n)}getFieldSuccessMessage(e,t){const n="function"==typeof e?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(void 0,void 0,n)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,void 0!==t&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,n){if(n.rule===Sn.Required)t.every((e=>!e.checked))?this.setGroupInvalid(e,n):this.setGroupValid(e,n)}validateFieldRule(e,t,n,r=!1){const i=n.value,s=this.getElemValue(t);if(n.plugin){n.plugin(s,this.getCompatibleFields())||this.setFieldInvalid(e,n)}else{switch(n.rule){case In.Required:(e=>{let t=e;return"string"==typeof e&&(t=e.trim()),!t})(s)&&this.setFieldInvalid(e,n);break;case In.Email:if(kn(s))break;o=s,wn.test(o)||this.setFieldInvalid(e,n);break;case In.MaxLength:if(void 0===i){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof i){console.error(`Value for ${n.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(kn(s))break;((e,t)=>e.length>t)(s,i)&&this.setFieldInvalid(e,n);break;case In.MinLength:if(void 0===i){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof i){console.error(`Value for ${n.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(kn(s))break;((e,t)=>e.length<t)(s,i)&&this.setFieldInvalid(e,n);break;case In.Password:if(kn(s))break;(e=>En.test(e))(s)||this.setFieldInvalid(e,n);break;case In.StrongPassword:if(kn(s))break;(e=>Tn.test(e))(s)||this.setFieldInvalid(e,n);break;case In.Number:if(kn(s))break;(e=>"string"==typeof e&&!isNaN(+e)&&!isNaN(parseFloat(e)))(s)||this.setFieldInvalid(e,n);break;case In.Integer:if(kn(s))break;(e=>Cn.test(e))(s)||this.setFieldInvalid(e,n);break;case In.MaxNumber:{if(void 0===i){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof i){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(kn(s))break;const t=+s;(Number.isNaN(t)||((e,t)=>e>t)(t,i))&&this.setFieldInvalid(e,n);break}case In.MinNumber:{if(void 0===i){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof i){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(kn(s))break;const t=+s;(Number.isNaN(t)||((e,t)=>e<t)(t,i))&&this.setFieldInvalid(e,n);break}case In.CustomRegexp:{if(void 0===i)return console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,n);let t;try{t=new RegExp(i)}catch(t){console.error(`Value for ${n.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,n);break}const r=String(s);""===r||t.test(r)||this.setFieldInvalid(e,n);break}case In.MinFilesCount:if(void 0===i){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof i){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(Number.isFinite(null==s?void 0:s.length)&&s.length<i){this.setFieldInvalid(e,n);break}break;case In.MaxFilesCount:if(void 0===i){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof i){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(Number.isFinite(null==s?void 0:s.length)&&s.length>i){this.setFieldInvalid(e,n);break}break;case In.Files:{if(void 0===i)return console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,n);if("object"!=typeof i)return console.error(`Value for ${n.rule} rule for [${e}] field should be an object. This field will be always invalid.`),void this.setFieldInvalid(e,n);const t=i.files;if("object"!=typeof t)return console.error(`Value for ${n.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),void this.setFieldInvalid(e,n);const r=(e,t)=>{const n=Number.isFinite(t.minSize)&&e.size<t.minSize,r=Number.isFinite(t.maxSize)&&e.size>t.maxSize,i=Array.isArray(t.names)&&!t.names.includes(e.name),s=Array.isArray(t.extensions)&&!t.extensions.includes(e.name.split(".")[e.name.split(".").length-1]),o=Array.isArray(t.types)&&!t.types.includes(e.type);return n||r||i||s||o};if("object"==typeof s&&null!==s)for(let i=0,o=s.length;i<o;++i){const o=s.item(i);if(!o){this.setFieldInvalid(e,n);break}if(r(o,t)){this.setFieldInvalid(e,n);break}}break}default:{if("function"!=typeof n.validator)return console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),void this.setFieldInvalid(e,n);const t=n.validator(s,this.getCompatibleFields());if("boolean"!=typeof t&&"function"!=typeof t&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),"function"==typeof t){if(!r){this.fields[e].asyncCheckPending=!1;const r=t();return Rn(r)?r.then((t=>{t||this.setFieldInvalid(e,n)})).catch((()=>{this.setFieldInvalid(e,n)})):(console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),void this.setFieldInvalid(e,n))}this.fields[e].asyncCheckPending=!0}t||this.setFieldInvalid(e,n)}}var o}}isFormValid(){let e=!0;for(let t=0,n=Object.values(this.fields).length;t<n;++t){const n=Object.values(this.fields)[t];if(void 0===n.isValid){e=void 0;break}if(!1===n.isValid){e=!1;break}}for(let t=0,n=Object.values(this.groupFields).length;t<n;++t){const n=Object.values(this.groupFields)[t];if(void 0===n.isValid){e=void 0;break}if(!1===n.isValid){e=!1;break}}return e}validateField(e,t=!1){var n;const r=this.fields[e];r.isValid=!0;const i=[];return[...r.rules].reverse().forEach((n=>{const s=this.validateFieldRule(e,r.elem,n,t);Rn(s)&&i.push(s)})),r.isValid&&this.setFieldValid(e,null==(n=r.config)?void 0:n.successMessage),Promise.allSettled(i).finally((()=>{var e;t&&(null==(e=this.onValidateCallback)||e.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))}))}revalidateField(e){if("string"!=typeof e&&!An(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return t&&this.fields[t]?new Promise((e=>{this.validateField(t,!0).finally((()=>{this.clearFieldStyle(t),this.clearFieldLabel(t),this.renderFieldError(t,!0),e(!!this.fields[t].isValid)}))})):(console.error("Field not found. Check the field selector."),Promise.reject())}revalidateGroup(e){if("string"!=typeof e&&!An(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return t&&this.groupFields[t]?new Promise((e=>{this.validateGroup(t).finally((()=>{this.clearFieldLabel(t),this.renderGroupError(t,!0),e(!!this.groupFields[t].isValid)}))})):(console.error("Group not found. Check the group selector."),Promise.reject())}validateGroup(e,t=!1){const n=this.groupFields[e],r=[];return[...n.rules].reverse().forEach((t=>{const i=this.validateGroupRule(e,n.elems,t);Rn(i)&&r.push(i)})),Promise.allSettled(r).finally((()=>{var e;t&&(null==(e=this.onValidateCallback)||e.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))}))}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout((()=>t.elem.focus()),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise((t=>{const n=[];Object.keys(this.fields).forEach((e=>{const t=this.validateField(e);Rn(t)&&n.push(t)})),Object.keys(this.groupFields).forEach((e=>{const t=this.validateGroup(e);Rn(t)&&n.push(t)})),Promise.allSettled(n).then((()=>{var r;this.afterSubmitValidation(e),null==(r=this.onValidateCallback)||r.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),t(!!n.length)}))}))}revalidate(){return new Promise((e=>{this.validateHandler(void 0,!0).finally((()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)}))}))}validateHandler(e,t=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(t).finally((()=>{var t,n;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?null==(t=this.onSuccessCallback)||t.call(this,e):null==(n=this.onFailCallback)||n.call(this,this.getCompatibleFields(),this.groupFields)}))}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,n){t.addEventListener(e,n),this.eventListeners.push({type:e,elem:t,func:n})}removeListener(e,t,n){t.removeEventListener(e,n),this.eventListeners=this.eventListeners.filter((n=>n.type!==e||n.elem!==t))}addField(e,t,n){if("string"!=typeof e&&!An(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let r;if(r="string"==typeof e?this.form.querySelector(e):e,!r)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(t)||!t.length)throw Error("Rules argument should be an array and should contain at least 1 element.");t.forEach((e=>{if(!("rule"in e||"validator"in e||"plugin"in e))throw Error("Rules argument must contain at least one rule or validator property.");if(!(e.validator||e.plugin||e.rule&&Object.values(In).includes(e.rule)))throw Error(`Rule should be one of these types: ${Object.values(In).join(", ")}. Provided value: ${e.rule}`)}));const i=this.setKeyByFieldSelector(e);return this.fields[i]={elem:r,rules:t,isValid:void 0,touched:!1,config:n},this.setListeners(r),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(i),this}removeField(e){if("string"!=typeof e&&!An(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);if(!t||!this.fields[t])return console.error("Field not found. Check the field selector."),this;const n=this.getListenerType(this.fields[t].elem.type);return this.removeListener(n,this.fields[t].elem,this.handlerChange),this.clearErrors(),delete this.fields[t],this}removeGroup(e){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");const t=this.getKeyByFieldSelector(e);return t&&this.groupFields[t]?(this.groupFields[t].elems.forEach((e=>{const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange)})),this.clearErrors(),delete this.groupFields[t],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,t,n,r){if("string"!=typeof e&&!An(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let i;if(i="string"==typeof e?this.form.querySelector(e):e,!i)throw Error("Group selector not found! Please check the group selector.");const s=i.querySelectorAll("input"),o=Array.from(s).filter((e=>{const t=((e,t)=>{const n=[...t].reverse();for(let t=0,r=n.length;t<r;++t){const r=n[t];for(const t in e){const n=e[t];if(n.groupElem===r)return[t,n]}}return null})(this.groupFields,(e=>{let t=e;const n=[];for(;t;)n.unshift(t),t=t.parentNode;return n})(e));return!t||t[1].elems.find((t=>t!==e))})),a=this.setKeyByFieldSelector(e);return this.groupFields[a]={rules:[{rule:Sn.Required,errorMessage:t,successMessage:r}],groupElem:i,elems:o,touched:!1,isValid:void 0,config:n},s.forEach((e=>{this.setListeners(e)})),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearFieldLabel(e){var t,n;null==(t=this.errorLabels[e])||t.remove(),null==(n=this.successLabels[e])||n.remove()}clearFieldStyle(e){var t,n,r,i;const s=this.fields[e],o=(null==(t=s.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach((e=>{s.elem.style[e]=""}));const a=(null==(n=s.config)?void 0:n.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach((e=>{s.elem.style[e]=""})),s.elem.classList.remove(...Pn((null==(r=s.config)?void 0:r.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...Pn((null==(i=s.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,t;Object.keys(this.errorLabels).forEach((e=>this.errorLabels[e].remove())),Object.keys(this.successLabels).forEach((e=>this.successLabels[e].remove()));for(const e in this.fields)this.clearFieldStyle(e);for(const n in this.groupFields){const r=this.groupFields[n],i=(null==(e=r.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(i).forEach((e=>{r.elems.forEach((t=>{var n;t.style[e]="",t.classList.remove(...Pn((null==(n=r.config)?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}))}));const s=(null==(t=r.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(s).forEach((e=>{r.elems.forEach((t=>{var n;t.style[e]="",t.classList.remove(...Pn((null==(n=r.config)?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))}))}))}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,n=e.length;t<n;++t)e[t].setAttribute("data-just-validate-fallback-disabled",e[t].disabled?"true":"false"),e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,n=e.length;t<n;++t)"true"!==e[t].getAttribute("data-just-validate-fallback-disabled")&&e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,n){var r;const{top:i,left:s,width:o,height:a}=e.getBoundingClientRect(),l=t.getBoundingClientRect(),c=n||(null==(r=this.globalConfig.tooltip)?void 0:r.position);switch(c){case"left":t.style.top=i+a/2-l.height/2+"px",t.style.left=s-l.width-5+"px";break;case"top":t.style.top=i-l.height-5+"px",t.style.left=s+o/2-l.width/2+"px";break;case"right":t.style.top=i+a/2-l.height/2+"px",t.style.left=`${s+o+5}px`;break;case"bottom":t.style.top=`${i+a+5}px`,t.style.left=s+o/2-l.width/2+"px"}t.dataset.direction=c;return{refresh:()=>{this.renderTooltip(e,t,n)}}}createErrorLabelElem(e,t,n){const r=document.createElement("div");r.innerHTML=t;const i=this.isTooltip()?null==n?void 0:n.errorLabelStyle:(null==n?void 0:n.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(r.style,i),r.classList.add(...Pn((null==n?void 0:n.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(r.dataset.tooltip="true"),this.globalConfig.testingMode&&(r.dataset.testId=`error-label-${e}`),this.errorLabels[e]=r,r}createSuccessLabelElem(e,t,n){if(void 0===t)return null;const r=document.createElement("div");r.innerHTML=t;const i=(null==n?void 0:n.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(r.style,i),r.classList.add(...Pn((null==n?void 0:n.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(r.dataset.testId=`success-label-${e}`),this.successLabels[e]=r,r}renderErrorsContainer(e,t){const n=t||this.globalConfig.errorsContainer;if("string"==typeof n){const t=this.form.querySelector(n);if(t)return t.appendChild(e),!0;console.error(`Error container with ${n} selector not found. Errors will be rendered as usual`)}return n instanceof Element?(n.appendChild(e),!0):(void 0!==n&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,t,n,r){if(!r){if(this.renderErrorsContainer(t,n))return}e.appendChild(t)}renderFieldLabel(e,t,n,r){var i,s,o,a,l,c,u;if(!r){if(this.renderErrorsContainer(t,n))return}if("checkbox"===e.type||"radio"===e.type){const n=document.querySelector(`label[for="${e.getAttribute("id")}"]`);"label"===(null==(s=null==(i=e.parentElement)?void 0:i.tagName)?void 0:s.toLowerCase())?null==(a=null==(o=e.parentElement)?void 0:o.parentElement)||a.appendChild(t):n?null==(l=n.parentElement)||l.appendChild(t):null==(c=e.parentElement)||c.appendChild(t)}else null==(u=e.parentElement)||u.appendChild(t)}showLabels(e,t){Object.keys(e).forEach(((n,r)=>{const i=e[n],s=this.getKeyByFieldSelector(n);if(!s||!this.fields[s])return void console.error("Field not found. Check the field selector.");const o=this.fields[s];o.isValid=!t,this.clearFieldStyle(s),this.clearFieldLabel(s),this.renderFieldError(s,!1,i),0===r&&this.globalConfig.focusInvalidField&&setTimeout((()=>o.elem.focus()),0)}))}showErrors(e){if("object"!=typeof e)throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if("object"!=typeof e)throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,t=!1,n){var r,i,s,o,a,l;const c=this.fields[e];if(!1===c.isValid&&(this.isValid=!1),void 0===c.isValid||!t&&!this.isSubmitted&&!c.touched&&void 0===n)return;if(c.isValid){if(!c.asyncCheckPending){const t=this.createSuccessLabelElem(e,void 0!==n?n:c.successMessage,c.config);t&&this.renderFieldLabel(c.elem,t,null==(r=c.config)?void 0:r.errorsContainer,!0),c.elem.classList.add(...Pn((null==(i=c.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}c.elem.classList.add(...Pn((null==(s=c.config)?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const u=this.createErrorLabelElem(e,void 0!==n?n:c.errorMessage,c.config);this.renderFieldLabel(c.elem,u,null==(o=c.config)?void 0:o.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(c.elem,u,null==(l=null==(a=c.config)?void 0:a.tooltip)?void 0:l.position))}renderGroupError(e,t=!0){var n,r,i,s;const o=this.groupFields[e];if(!1===o.isValid&&(this.isValid=!1),void 0===o.isValid||!t&&!this.isSubmitted&&!o.touched)return;if(o.isValid){o.elems.forEach((e=>{var t,n;Object.assign(e.style,(null==(t=o.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle),e.classList.add(...Pn((null==(n=o.config)?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))}));const t=this.createSuccessLabelElem(e,o.successMessage,o.config);return void(t&&this.renderGroupLabel(o.groupElem,t,null==(n=o.config)?void 0:n.errorsContainer,!0))}this.isValid=!1,o.elems.forEach((e=>{var t,n;Object.assign(e.style,(null==(t=o.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle),e.classList.add(...Pn((null==(n=o.config)?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}));const a=this.createErrorLabelElem(e,o.errorMessage,o.config);this.renderGroupLabel(o.groupElem,a,null==(r=o.config)?void 0:r.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,a,null==(s=null==(i=o.config)?void 0:i.tooltip)?void 0:s.position))}renderErrors(e=!1){if(this.isSubmitted||e||this.globalConfig.validateBeforeSubmitting){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields)this.renderGroupError(e);for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach((e=>{this.removeListener(e.type,e.elem,e.func)})),Object.keys(this.customStyleTags).forEach((e=>{this.customStyleTags[e].remove()})),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach((e=>{const t=this.getFieldSelectorByKey(e);t&&this.addField(t,[...this.fields[e].rules],this.fields[e].config)}))):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){"string"==typeof e||void 0===e?(this.currentLocale=e,this.isSubmitted&&this.validate()):console.error("Current locale should be a string")}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}const Dn='<svg aria-hidden="true" fill="currentColor" width="16px" height="16px" viewBox="0 0 24 24" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>',Fn=new Ln(".sign-up-form",{validateBeforeSubmitting:!1}),Mn=new Ln(".sign-in-form",{validateBeforeSubmitting:!1});const jn=document.querySelector(".sign-up-form"),Un=document.querySelector(".sign-in-form"),qn=document.querySelector("#sign-up-password"),Bn=document.querySelector(".password-bar"),Hn=document.querySelector(".password-bar-container"),Vn=document.querySelector(".password-message");Fn.addField("#sign-up-name",[{rule:"required",errorMessage:`${Dn}   Name is required`},{rule:"minLength",value:3,errorMessage:`${Dn}   Use 3 characters ore more for your password`},{rule:"maxLength",value:20,errorMessage:`${Dn}   Use 20 characters ore less for your password`}]).addField("#sign-up-email",[{rule:"required",errorMessage:`${Dn}   Email is required`},{rule:"email",errorMessage:`${Dn}   Email is invalid!`}]).addField("#sign-up-password",[{rule:"required",errorMessage:`${Dn}   Password is required`},{rule:"minLength",value:6,errorMessage:`${Dn}   Use 6 characters ore more for your password`},{rule:"customRegexp",value:/[a-z]+/,errorMessage:`${Dn}   Password shout contain at least one regular letter`},{rule:"customRegexp",value:/[A-Z]+/,errorMessage:`${Dn}   Password shout contain at least one capital letter`},{rule:"customRegexp",value:/[1-9]+/,errorMessage:`${Dn}   Password shout contain at least one number`}]),Mn.addField("#sign-in-email",[{rule:"required",errorMessage:`${Dn}   Email is required`}]).addField("#sign-in-password",[{rule:"required",errorMessage:`${Dn}   Password is required`}]),document.body.addEventListener("click",(e=>{e.target.classList.contains("user-form__close-button")&&document.querySelector(".backdrop-form").classList.add("backdrop-form--is-hidden")})),jn.addEventListener("click",(e=>{e.target.classList.contains("form-type-switch__link")&&!e.target.classList.contains("active")&&(Un.classList.remove("hidden"),jn.classList.add("hidden"))})),Un.addEventListener("click",(e=>{e.target.classList.contains("form-type-switch__link")&&!e.target.classList.contains("active")&&(jn.classList.remove("hidden"),Un.classList.add("hidden"))})),qn.addEventListener("input",(e=>{if(e.target.value)switch(Hn.classList.remove("visually-hidden"),Vn.textContent=(0,vn.passwordStrength)(e.target.value).value,(0,vn.passwordStrength)(e.target.value).value){case"Too weak":Bn.className="password-bar very-weak";break;case"Weak":Bn.className="password-bar weak";break;case"Medium":Bn.className="password-bar medium";break;case"Strong":Bn.className="password-bar strong"}else Hn.classList.add("visually-hidden")})),document.querySelectorAll(".user-form__input").forEach((e=>e.placeholder="  "));const Wn=document.querySelector(".book-backdrop"),$n=document.querySelector(".modal__close"),zn=document.querySelector(".book-pop-up__card");function Gn(){Wn.classList.toggle("hidden")}$n.addEventListener("click",Gn),document.addEventListener("click",(async function(e){if(e.target.classList.contains("books__item")){const{data:t}=await hn(e.target.dataset.id),n=function({author:e,title:t,book_image:n,description:r,buy_links:i}){return`\n  <div class="thumb">\n      <a class="book__link js-link" href="">\n        <img class="book__image" src="${n}" alt="${t}" loading="lazy" />\n      </a>\n    </div>\n    <div class="book__box">\n      <div class="book__info">\n        <p class="book__name">${t}</p>\n        <p class="book__author">${e}</p>\n        <p class="book__description">${r}</p>\n      </div>\n      <ul class="book__sales--link-list js-sales">\n        <li class="book__sales--link">\n          <a href="${i[0].url}" target="_blank" rel="noopener noreferrer nofollow">\n            <img src="#" alt="Amazon" />\n          </a>\n        </li>\n        <li class="book__sales--link">\n          <a href="${i[1].url}" target="_blank" rel="noopener noreferrer nofollow">\n            <img src="#" alt="Apple Books" />\n          </a>\n        </li>\n        <li class="book__sales--link">\n          <a href="${i[4].url}" target="_blank" rel="noopener noreferrer nofollow">\n            <img src="#" alt="Bookshop" />\n          </a>\n        </li>\n      </ul>\n    </div>\n  `}(t);zn.innerHTML=n,Gn()}}));const Kn=document.querySelector("[data-form-modal]");function Yn(e){"Escape"===e.code&&(document.body.classList.remove("body-lock"),Kn.classList.add("backdrop-form--is-hidden"),window.removeEventListener("keydown",Yn))}document.querySelectorAll(".js-open-form-modal").forEach((e=>{e.addEventListener("click",(()=>{document.body.classList.add("body-lock"),Kn.classList.remove("backdrop-form--is-hidden"),window.addEventListener("keydown",Yn)}))}));const Jn=document.querySelector(".categories-links-list");!async function(){const{data:e}=await dn();Jn.insertAdjacentHTML("beforeend",e.map((({list_name:e})=>`<li class="categories-links-list__item">\n              <a href="#" class="category-link">${e}</a>\n            </li>`)).join(""))}();
/**
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
 */
var Qn,Xn,Zn={},er=Zn={};function tr(){throw new Error("setTimeout has not been defined")}function nr(){throw new Error("clearTimeout has not been defined")}function rr(e){if(Qn===setTimeout)return setTimeout(e,0);if((Qn===tr||!Qn)&&setTimeout)return Qn=setTimeout,setTimeout(e,0);try{return Qn(e,0)}catch(t){try{return Qn.call(null,e,0)}catch(t){return Qn.call(this,e,0)}}}!function(){try{Qn="function"==typeof setTimeout?setTimeout:tr}catch(e){Qn=tr}try{Xn="function"==typeof clearTimeout?clearTimeout:nr}catch(e){Xn=nr}}();var ir,sr=[],or=!1,ar=-1;function lr(){or&&ir&&(or=!1,ir.length?sr=ir.concat(sr):ar=-1,sr.length&&cr())}function cr(){if(!or){var e=rr(lr);or=!0;for(var t=sr.length;t;){for(ir=sr,sr=[];++ar<t;)ir&&ir[ar].run();ar=-1,t=sr.length}ir=null,or=!1,function(e){if(Xn===clearTimeout)return clearTimeout(e);if((Xn===nr||!Xn)&&clearTimeout)return Xn=clearTimeout,clearTimeout(e);try{return Xn(e)}catch(t){try{return Xn.call(null,e)}catch(t){return Xn.call(this,e)}}}(e)}}function ur(e,t){this.fun=e,this.array=t}function hr(){}er.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];sr.push(new ur(e,t)),1!==sr.length||or||rr(cr)},ur.prototype.run=function(){this.fun.apply(null,this.array)},er.title="browser",er.browser=!0,er.env={},er.argv=[],er.version="",er.versions={},er.on=hr,er.addListener=hr,er.once=hr,er.off=hr,er.removeListener=hr,er.removeAllListeners=hr,er.emit=hr,er.prependListener=hr,er.prependOnceListener=hr,er.listeners=function(e){return[]},er.binding=function(e){throw new Error("process.binding is not supported")},er.cwd=function(){return"/"},er.chdir=function(e){throw new Error("process.chdir is not supported")},er.umask=function(){return 0};const dr=!1,fr=!1,pr="${JSCORE_VERSION}",gr=function(e,t){if(!e)throw mr(t)},mr=function(e){return new Error("Firebase Database ("+pr+") INTERNAL ASSERT FAILED: "+e)},yr=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},vr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new _r;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class _r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const br=function(e){const t=yr(e);return vr.encodeByteArray(t,!0)},wr=function(e){return br(e).replace(/\./g,"")},Cr=function(e){try{return vr.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function Er(e){return Tr(void 0,e)}function Tr(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Tr(e[n],t[n]));return e}
/**
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
 */
const kr=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ir=()=>{try{return kr()||(()=>{if(void 0===Zn||void 0===Zn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Cr(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Sr=e=>{var t,n;return null===(n=null===(t=Ir())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},xr=e=>{const t=Sr(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Nr=()=>{var e;return null===(e=Ir())||void 0===e?void 0:e.config},Rr=e=>{var t;return null===(t=Ir())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class Pr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function Ar(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[wr(JSON.stringify({alg:"none",type:"JWT"})),wr(JSON.stringify(s)),""].join(".")}
/**
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
 */function Or(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Lr(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Or())}function Dr(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Fr(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Mr(){const e=Or();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jr(){return!0===dr||!0===fr}function Ur(){try{return"object"==typeof indexedDB}catch(e){return!1}}class qr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Hr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new qr(r,o,n)}}const Hr=/\{\$([^}]+)}/g;
/**
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
 */function Vr(e){return JSON.parse(e)}function Wr(e){return JSON.stringify(e)}
/**
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
 */const $r=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Vr(Cr(s[0])||""),n=Vr(Cr(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},zr=function(e){const t=$r(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Gr=function(e){const t=$r(e).claims;return"object"==typeof t&&!0===t.admin};
/**
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
 */
function Kr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Yr(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Jr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qr(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Xr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Zr(n)&&Zr(s)){if(!Xr(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Zr(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function ei(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ni(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class ri{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function ii(e,t){const n=new si(e,t);return n.subscribe.bind(n)}class si{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=oi),void 0===r.error&&(r.error=oi),void 0===r.complete&&(r.complete=oi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function oi(){}
/**
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
 */function ai(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const li=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,gr(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ci=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function ui(e){return e&&e._delegate?e._delegate:e}class hi{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const di="[DEFAULT]";
/**
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
 */class fi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Pr;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===di?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class pi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */const gi=[];var mi,yi;(yi=mi||(mi={}))[yi.DEBUG=0]="DEBUG",yi[yi.VERBOSE=1]="VERBOSE",yi[yi.INFO=2]="INFO",yi[yi.WARN=3]="WARN",yi[yi.ERROR=4]="ERROR",yi[yi.SILENT=5]="SILENT";const vi={debug:mi.DEBUG,verbose:mi.VERBOSE,info:mi.INFO,warn:mi.WARN,error:mi.ERROR,silent:mi.SILENT},_i=mi.INFO,bi={[mi.DEBUG]:"log",[mi.VERBOSE]:"log",[mi.INFO]:"info",[mi.WARN]:"warn",[mi.ERROR]:"error"},wi=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=bi[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Ci{constructor(e){this.name=e,this._logLevel=_i,this._logHandler=wi,this._userLogHandler=null,gi.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in mi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?vi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,mi.DEBUG,...e),this._logHandler(this,mi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,mi.VERBOSE,...e),this._logHandler(this,mi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,mi.INFO,...e),this._logHandler(this,mi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,mi.WARN,...e),this._logHandler(this,mi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,mi.ERROR,...e),this._logHandler(this,mi.ERROR,...e)}}const Ei=(e,t)=>t.some((t=>e instanceof t));let Ti,ki;const Ii=new WeakMap,Si=new WeakMap,xi=new WeakMap,Ni=new WeakMap,Ri=new WeakMap;let Pi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Si.get(e);if("objectStoreNames"===t)return e.objectStoreNames||xi.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Li(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ai(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ki||(ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Di(this),t),Li(Ii.get(this))}:function(...t){return Li(e.apply(Di(this),t))}:function(t,...n){const r=e.call(Di(this),t,...n);return xi.set(r,t.sort?t.sort():[t]),Li(r)}}function Oi(e){return"function"==typeof e?Ai(e):(e instanceof IDBTransaction&&function(e){if(Si.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Si.set(e,t)}(e),Ei(e,Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Pi):e)}function Li(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Li(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ii.set(t,e)})).catch((()=>{})),Ri.set(t,e),t}(e);if(Ni.has(e))return Ni.get(e);const t=Oi(e);return t!==e&&(Ni.set(e,t),Ri.set(t,e)),t}const Di=e=>Ri.get(e);function Fi(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Li(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Li(o.result),e.oldVersion,e.newVersion,Li(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Mi=["get","getKey","getAll","getAllKeys","count"],ji=["put","add","delete","clear"],Ui=new Map;function qi(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ui.get(t))return Ui.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ji.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Mi.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ui.set(t,s),s}Pi=(e=>({...e,get:(t,n,r)=>qi(t,n)||e.get(t,n,r),has:(t,n)=>!!qi(t,n)||e.has(t,n)}))(Pi);
/**
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
 */
class Bi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Hi="@firebase/app",Vi="0.9.10",Wi=new Ci("@firebase/app"),$i="[DEFAULT]",zi={[Hi]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Gi=new Map,Ki=new Map;function Yi(e,t){try{e.container.addComponent(t)}catch(n){Wi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ji(e){const t=e.name;if(Ki.has(t))return Wi.debug(`There were multiple attempts to register component ${t}.`),!1;Ki.set(t,e);for(const t of Gi.values())Yi(t,e);return!0}function Qi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const Xi=new Br("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Zi{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new hi("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xi.create("app-deleted",{appName:this._name})}}
/**
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
 */const es="9.22.0";function ts(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:$i,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Xi.create("bad-app-name",{appName:String(i)});if(n||(n=Nr()),!n)throw Xi.create("no-options");const s=Gi.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw Xi.create("duplicate-app",{appName:i})}const o=new pi(i);for(const e of Ki.values())o.addComponent(e);const a=new Zi(n,r,o);return Gi.set(i,a),a}function ns(e=$i){const t=Gi.get(e);if(!t&&e===$i&&Nr())return ts();if(!t)throw Xi.create("no-app",{appName:e});return t}function rs(e,t,n){var r;let i=null!==(r=zi[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Wi.warn(e.join(" "))}Ji(new hi(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */
const is="firebase-heartbeat-database",ss=1,os="firebase-heartbeat-store";let as=null;function ls(){return as||(as=Fi(is,ss,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(os)}}).catch((e=>{throw Xi.create("idb-open",{originalErrorMessage:e.message})}))),as}async function cs(e,t){try{const n=(await ls()).transaction(os,"readwrite"),r=n.objectStore(os);await r.put(t,us(e)),await n.done}catch(e){if(e instanceof qr)Wi.warn(e.message);else{const t=Xi.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Wi.warn(t.message)}}}function us(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class hs{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fs(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ds();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ds(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ps(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ps(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=wr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ds(){return(new Date).toISOString().substring(0,10)}class fs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ur()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await ls();return await t.transaction(os).objectStore(os).get(us(e))}catch(e){if(e instanceof qr)Wi.warn(e.message);else{const t=Xi.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Wi.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return cs(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return cs(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ps(e){return wr(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var gs;gs="",Ji(new hi("platform-logger",(e=>new Bi(e)),"PRIVATE")),Ji(new hi("heartbeat",(e=>new hs(e)),"PRIVATE")),rs(Hi,Vi,gs),rs(Hi,Vi,"esm2017"),rs("fire-js","");const ms="@firebase/database",ys="0.14.4";
/**
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
 */let vs="";
/**
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
 */
class _s{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wr(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Vr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class bs{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Kr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const ws=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new _s(t)}}catch(e){}return new bs},Cs=ws("localStorage"),Es=ws("sessionStorage"),Ts=new Ci("@firebase/database"),ks=function(){let e=1;return function(){return e++}}(),Is=function(e){const t=li(e),n=new ri;n.update(t);const r=n.digest();return vr.encodeByteArray(r)},Ss=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Ss.apply(null,r):t+="object"==typeof r?Wr(r):r,t+=" "}return t};let xs=null,Ns=!0;const Rs=function(e,t){gr(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ts.logLevel=mi.VERBOSE,xs=Ts.log.bind(Ts),t&&Es.set("logging_enabled",!0)):"function"==typeof e?xs=e:(xs=null,Es.remove("logging_enabled"))},Ps=function(...e){if(!0===Ns&&(Ns=!1,null===xs&&!0===Es.get("logging_enabled")&&Rs(!0)),xs){const t=Ss.apply(null,e);xs(t)}},As=function(e){return function(...t){Ps(e,...t)}},Os=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ss(...e);Ts.error(t)},Ls=function(...e){const t=`FIREBASE FATAL ERROR: ${Ss(...e)}`;throw Ts.error(t),new Error(t)},Ds=function(...e){const t="FIREBASE WARNING: "+Ss(...e);Ts.warn(t)},Fs=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ms="[MIN_NAME]",js="[MAX_NAME]",Us=function(e,t){if(e===t)return 0;if(e===Ms||t===js)return-1;if(t===Ms||e===js)return 1;{const n=Gs(e),r=Gs(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},qs=function(e,t){return e===t?0:e<t?-1:1},Bs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Wr(t))},Hs=function(e){if("object"!=typeof e||null===e)return Wr(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Wr(t[r]),n+=":",n+=Hs(e[t[r]]);return n+="}",n},Vs=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ws(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $s=function(e){gr(!Fs(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const zs=new RegExp("^-?(0*)\\d{1,10}$"),Gs=function(e){if(zs.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ks=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ds("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ys=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class Js{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ds(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class Qs{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ps("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ds(e)}}class Xs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xs.OWNER="owner";
/**
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
 */
const Zs="5",eo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,to="ac",no="websocket",ro="long_polling";
/**
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
 */
class io{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function so(e,t,n){let r;if(gr("string"==typeof t,"typeof type must == string"),gr("object"==typeof n,"typeof params must == object"),t===no)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ro)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Ws(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */class oo{constructor(){this.counters_={}}incrementCounter(e,t=1){Kr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Er(this.counters_)}}
/**
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
 */const ao={},lo={};function co(e){const t=e.toString();return ao[t]||(ao[t]=new oo),ao[t]}
/**
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
 */
class uo{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Ks((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ho="start";class fo{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=co(t),this.urlFn=e=>(this.appCheckToken&&(e[to]=this.appCheckToken),so(t,ro,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uo(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(jr()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new po(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ho)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ho]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Zs,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[to]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&eo.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fo.forceAllow_=!0}static forceDisallow(){fo.forceDisallow_=!0}static isAvailable(){return!jr()&&(!!fo.forceAllow_||!(fo.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=br(t),r=Vs(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(jr())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wr(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class po{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,jr())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ks(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=po.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Ps("frame writing exception"),e.stack&&Ps(e.stack),Ps(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ps("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){jr()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ps("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
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
 */let go=null;"undefined"!=typeof MozWebSocket?go=MozWebSocket:"undefined"!=typeof WebSocket&&(go=WebSocket);class mo{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=co(t),this.connURL=mo.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s.v=Zs,!jr()&&"undefined"!=typeof location&&location.hostname&&eo.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[to]=r),i&&(s.p=i),so(e,no,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let e;if(jr()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Zs}/${vs}/${Zn.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new go(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){mo.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==go&&!mo.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||!0===Cs.get("previous_websocket_failure")}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Vr(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(gr(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Wr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Vs(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mo.responsesRequiredToBeHealthy=2,mo.healthyTimeout=3e4;
/**
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
 */
class yo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fo,mo]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=mo&&mo.isAvailable();let n=t&&!mo.previouslyFailed();if(e.webSocketOnly&&(t||Ds("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[mo];else{const e=this.transports_=[];for(const t of yo.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;class vo{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new yo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ys((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bs("t",e),n=Bs("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bs("t",e),n=Bs("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bs("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Os("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Os("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zs!==n&&Ds("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ys((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ys((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class _o{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class bo{constructor(e){this.allowedEvents_=e,this.listeners_={},gr(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){gr(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class wo extends bo{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Lr()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new wo}getInitialEvent(e){return gr("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const Co=32,Eo=768;class To{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ko(){return new To("")}function Io(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function So(e){return e.pieces_.length-e.pieceNum_}function xo(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new To(e.pieces_,t)}function No(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ro(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Po(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new To(t,0)}function Ao(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof To)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new To(n,0)}function Oo(e){return e.pieceNum_>=e.pieces_.length}function Lo(e,t){const n=Io(e),r=Io(t);if(null===n)return t;if(n===r)return Lo(xo(e),xo(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Do(e,t){if(So(e)!==So(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Fo(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(So(e)>So(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Mo{constructor(e,t){this.errorPrefix_=t,this.parts_=Ro(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ci(this.parts_[e]);jo(this)}}function jo(e){if(e.byteLength_>Eo)throw new Error(e.errorPrefix_+"has a key path longer than "+Eo+" bytes ("+e.byteLength_+").");if(e.parts_.length>Co)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Co+") or object contains a cycle "+Uo(e))}function Uo(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class qo extends bo{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new qo}getInitialEvent(e){return gr("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const Bo=1e3;class Ho extends _o{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ho.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bo,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!jr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qo.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&wo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Wr(i)),gr(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Pr,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),gr(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),gr(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Ho.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Kr(e,"w")){const n=Yr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ds(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Gr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zr(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),gr(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wr(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Os("Unrecognized action received from server: "+Wr(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){gr(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Bo),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ho.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){gr(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Ps("getToken() completed but was canceled"):(Ps("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new vo(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ds(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Ds(e),a())}}}interrupt(e){Ps("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ps("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jr(this.interruptReasons_)&&(this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Hs(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new To(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Ps("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ps("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";jr()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+vs.replace(/\./g,"-")]=1,Lr()?e["framework.cordova"]=1:Fr()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wo.getInstance().currentlyOnline();return Jr(this.interruptReasons_)&&e}}Ho.nextPersistentConnectionId_=0,Ho.nextConnectionId_=0;
/**
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
 */
class Vo{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Vo(e,t)}}
/**
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
 */class Wo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Vo(Ms,e),r=new Vo(Ms,t);return 0!==this.compare(n,r)}minPost(){return Vo.MIN}}
/**
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
 */let $o;class zo extends Wo{static get __EMPTY_NODE(){return $o}static set __EMPTY_NODE(e){$o=e}compare(e,t){return Us(e.name,t.name)}isDefinedOn(e){throw mr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Vo.MIN}maxPost(){return new Vo(js,$o)}makePost(e,t){return gr("string"==typeof e,"KeyIndex indexValue must always be a string."),new Vo(e,$o)}toString(){return".key"}}const Go=new zo;
/**
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
 */class Ko{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Yo{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Yo.RED,this.left=null!=r?r:Jo.EMPTY_NODE,this.right=null!=i?i:Jo.EMPTY_NODE}copy(e,t,n,r,i){return new Yo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Jo.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Jo.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Yo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Yo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Yo.RED=!0,Yo.BLACK=!1;class Jo{constructor(e,t=Jo.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Jo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Yo.BLACK,null,null))}remove(e){return new Jo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Yo.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ko(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ko(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ko(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Qo(e,t){return Us(e.name,t.name)}function Xo(e,t){return Us(e,t)}
/**
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
 */let Zo;Jo.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Yo(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ea=function(e){return"number"==typeof e?"number:"+$s(e):"string:"+e},ta=function(e){if(e.isLeafNode()){const t=e.val();gr("string"==typeof t||"number"==typeof t||"object"==typeof t&&Kr(t,".sv"),"Priority must be a string or number.")}else gr(e===Zo||e.isEmpty(),"priority of unexpected type.");gr(e===Zo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let na,ra,ia;class sa{constructor(e,t=sa.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,gr(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ta(this.priorityNode_)}static set __childrenNodeConstructor(e){na=e}static get __childrenNodeConstructor(){return na}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sa(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:sa.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Oo(e)?this:".priority"===Io(e)?this.priorityNode_:sa.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:sa.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Io(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(gr(".priority"!==n||1===So(e),".priority must be the last token in a path"),this.updateImmediateChild(n,sa.__childrenNodeConstructor.EMPTY_NODE.updateChild(xo(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ea(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$s(this.value_):this.value_,this.lazyHash_=Is(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sa.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sa.__childrenNodeConstructor?-1:(gr(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=sa.VALUE_TYPE_ORDER.indexOf(t),i=sa.VALUE_TYPE_ORDER.indexOf(n);return gr(r>=0,"Unknown leaf type: "+t),gr(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}sa.VALUE_TYPE_ORDER=["object","boolean","number","string"];const oa=new class extends Wo{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Us(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Vo.MIN}maxPost(){return new Vo(js,new sa("[PRIORITY-POST]",ia))}makePost(e,t){const n=ra(e);return new Vo(t,new sa("[PRIORITY-POST]",n))}toString(){return".priority"}},aa=Math.log(2);
/**
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
 */class la{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/aa,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ca=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Yo(a,o.node,Yo.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new Yo(a,o.node,Yo.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new Yo(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Yo.BLACK):(a(r,Yo.BLACK),a(r,Yo.RED))}return s}(new la(e.length));return new Jo(r||t,s)};
/**
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
 */let ua;const ha={};class da{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return gr(ha&&oa,"ChildrenNode.ts has not been loaded"),ua=ua||new da({".priority":ha},{".priority":oa}),ua}get(e){const t=Yr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Jo?t:null}hasIndex(e){return Kr(this.indexSet_,e.toString())}addIndex(e,t){gr(e!==Go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Vo.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?ca(n,e.getCompare()):ha;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new da(c,l)}addToIndexes(e,t){const n=Qr(this.indexes_,((n,r)=>{const i=Yr(this.indexSet_,r);if(gr(i,"Missing index implementation for "+r),n===ha){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Vo.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),ca(n,i.getCompare())}return ha}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Vo(e.name,r))),i.insert(e,e.node)}}));return new da(n,this.indexSet_)}removeFromIndexes(e,t){const n=Qr(this.indexes_,(n=>{if(n===ha)return n;{const r=t.get(e.name);return r?n.remove(new Vo(e.name,r)):n}}));return new da(n,this.indexSet_)}}
/**
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
 */let fa;class pa{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ta(this.priorityNode_),this.children_.isEmpty()&&gr(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fa||(fa=new pa(new Jo(Xo),null,da.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fa}updatePriority(e){return this.children_.isEmpty()?this:new pa(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fa:t}}getChild(e){const t=Io(e);return null===t?this:this.getImmediateChild(t).getChild(xo(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(gr(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Vo(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?fa:this.priorityNode_;return new pa(r,s,i)}}updateChild(e,t){const n=Io(e);if(null===n)return t;{gr(".priority"!==Io(e)||1===So(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(xo(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(oa,((s,o)=>{t[s]=o.val(e),n++,i&&pa.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ea(this.getPriority().val())+":"),this.forEachChild(oa,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Is(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Vo(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Vo(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Vo(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Vo.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Vo.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ga?-1:0}withIndex(e){if(e===Go||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pa(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(oa),n=t.getIterator(oa);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Go?null:this.indexMap_.get(e.toString())}}pa.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ga=new class extends pa{constructor(){super(new Jo(Xo),pa.EMPTY_NODE,da.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pa.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Vo,{MIN:{value:new Vo(Ms,pa.EMPTY_NODE)},MAX:{value:new Vo(js,ga)}}),zo.__EMPTY_NODE=pa.EMPTY_NODE,sa.__childrenNodeConstructor=pa,Zo=ga,function(e){ia=e}(ga);
/**
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
 */
const ma=!0;function ya(e,t=null){if(null===e)return pa.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),gr(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new sa(e,ya(t))}if(e instanceof Array||!ma){let n=pa.EMPTY_NODE;return Ws(e,((t,r)=>{if(Kr(e,t)&&"."!==t.substring(0,1)){const e=ya(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ya(t))}{const n=[];let r=!1;if(Ws(e,((e,t)=>{if("."!==e.substring(0,1)){const i=ya(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Vo(e,i)))}})),0===n.length)return pa.EMPTY_NODE;const i=ca(n,Qo,(e=>e.name),Xo);if(r){const e=ca(n,oa.getCompare());return new pa(i,ya(t),new da({".priority":e},{".priority":oa}))}return new pa(i,ya(t),da.Default)}}!function(e){ra=e}(ya);
/**
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
 */
class va extends Wo{constructor(e){super(),this.indexPath_=e,gr(!Oo(e)&&".priority"!==Io(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Us(e.name,t.name):i}makePost(e,t){const n=ya(e),r=pa.EMPTY_NODE.updateChild(this.indexPath_,n);return new Vo(t,r)}maxPost(){const e=pa.EMPTY_NODE.updateChild(this.indexPath_,ga);return new Vo(js,e)}toString(){return Ro(this.indexPath_,0).join("/")}}
/**
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
 */const _a=new class extends Wo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Us(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Vo.MIN}maxPost(){return Vo.MAX}makePost(e,t){const n=ya(e);return new Vo(t,n)}toString(){return".value"}};
/**
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
 */function ba(e){return{type:"value",snapshotNode:e}}function wa(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ca(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ea(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class Ta{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){gr(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ca(t,o)):gr(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(wa(t,n)):s.trackChildChange(Ea(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(oa,((e,r)=>{t.hasChild(e)||n.trackChildChange(Ca(e,r))})),t.isLeafNode()||t.forEachChild(oa,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Ea(t,r,i))}else n.trackChildChange(wa(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pa.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class ka{constructor(e){this.indexedFilter_=new Ta(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ka.getStartPost_(e),this.endPost_=ka.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new Vo(t,n))||(n=pa.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pa.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(pa.EMPTY_NODE);const i=this;return t.forEachChild(oa,((e,t)=>{i.matches(new Vo(e,t))||(r=r.updateImmediateChild(e,pa.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Ia{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ka(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Vo(t,n))||(n=pa.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=pa.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=pa.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(pa.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,pa.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;gr(o.numChildren()===this.limit_,"");const a=new Vo(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Ea(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Ca(t,e));const n=o.updateImmediateChild(t,pa.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(wa(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Ca(l.name,l.node)),i.trackChildChange(wa(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,pa.EMPTY_NODE)):e}}
/**
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
 */class Sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oa}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return gr(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return gr(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ms}hasEnd(){return this.endSet_}getIndexEndValue(){return gr(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return gr(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:js}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return gr(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oa}copy(){const e=new Sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xa(e){const t={};if(e.isDefault())return t;let n;if(e.index_===oa?n="$priority":e.index_===_a?n="$value":e.index_===Go?n="$key":(gr(e.index_ instanceof va,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Wr(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Wr(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Wr(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Wr(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Wr(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Na(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==oa&&(t.i=e.index_.toString()),t}
/**
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
 */class Ra extends _o{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=As("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(gr(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Ra.getListenId_(e,n),o={};this.listens_[s]=o;const a=xa(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Yr(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Ra.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xa(e._queryParams),n=e._path.toString(),r=new Pr;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ei(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Vr(o.responseText)}catch(e){Ds("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Ds("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
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
 */class Pa{constructor(){this.rootNode_=pa.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Aa(){return{value:null,children:new Map}}function Oa(e,t,n){if(Oo(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Io(t);e.children.has(r)||e.children.set(r,Aa());Oa(e.children.get(r),t=xo(t),n)}}function La(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */(e,((e,r)=>{La(r,new To(t.toString()+"/"+e),n)}))}class Da{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ws(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */class Fa{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Da(e);const n=1e4+2e4*Math.random();Ys(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ws(e,((e,r)=>{r>0&&Kr(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Ys(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
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
 */var Ma,ja;function Ua(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(ja=Ma||(Ma={}))[ja.OVERWRITE=0]="OVERWRITE",ja[ja.MERGE=1]="MERGE",ja[ja.ACK_USER_WRITE=2]="ACK_USER_WRITE",ja[ja.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class qa{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ma.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Oo(this.path)){if(null!=this.affectedTree.value)return gr(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new To(e));return new qa(ko(),t,this.revert)}}return gr(Io(this.path)===e,"operationForChild called for unrelated child."),new qa(xo(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Ba{constructor(e,t){this.source=e,this.path=t,this.type=Ma.LISTEN_COMPLETE}operationForChild(e){return Oo(this.path)?new Ba(this.source,ko()):new Ba(this.source,xo(this.path))}}
/**
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
 */class Ha{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ma.OVERWRITE}operationForChild(e){return Oo(this.path)?new Ha(this.source,ko(),this.snap.getImmediateChild(e)):new Ha(this.source,xo(this.path),this.snap)}}
/**
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
 */class Va{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ma.MERGE}operationForChild(e){if(Oo(this.path)){const t=this.children.subtree(new To(e));return t.isEmpty()?null:t.value?new Ha(this.source,ko(),t.value):new Va(this.source,ko(),t)}return gr(Io(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Va(this.source,xo(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Wa{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Oo(e))return this.isFullyInitialized()&&!this.filtered_;const t=Io(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class $a{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function za(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw mr("Should only compare child_ events.");const r=new Vo(t.childName,t.snapshotNode),i=new Vo(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Ga(e,t){return{eventCache:e,serverCache:t}}function Ka(e,t,n,r){return Ga(new Wa(t,n,r),e.serverCache)}function Ya(e,t,n,r){return Ga(e.eventCache,new Wa(t,n,r))}function Ja(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Qa(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let Xa;class Za{constructor(e,t=(()=>(Xa||(Xa=new Jo(qs)),Xa))()){this.value=e,this.children=t}static fromObject(e){let t=new Za(null);return Ws(e,((e,n)=>{t=t.set(new To(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ko(),value:this.value};if(Oo(e))return null;{const n=Io(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(xo(e),t);if(null!=i){return{path:Ao(new To(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Oo(e))return this;{const t=Io(e),n=this.children.get(t);return null!==n?n.subtree(xo(e)):new Za(null)}}set(e,t){if(Oo(e))return new Za(t,this.children);{const n=Io(e),r=(this.children.get(n)||new Za(null)).set(xo(e),t),i=this.children.insert(n,r);return new Za(this.value,i)}}remove(e){if(Oo(e))return this.children.isEmpty()?new Za(null):new Za(null,this.children);{const t=Io(e),n=this.children.get(t);if(n){const r=n.remove(xo(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Za(null):new Za(this.value,i)}return this}}get(e){if(Oo(e))return this.value;{const t=Io(e),n=this.children.get(t);return n?n.get(xo(e)):null}}setTree(e,t){if(Oo(e))return t;{const n=Io(e),r=(this.children.get(n)||new Za(null)).setTree(xo(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Za(this.value,i)}}fold(e){return this.fold_(ko(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Ao(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ko(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Oo(e))return null;{const r=Io(e),i=this.children.get(r);return i?i.findOnPath_(xo(e),Ao(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ko(),t)}foreachOnPath_(e,t,n){if(Oo(e))return this;{this.value&&n(t,this.value);const r=Io(e),i=this.children.get(r);return i?i.foreachOnPath_(xo(e),Ao(t,r),n):new Za(null)}}foreach(e){this.foreach_(ko(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Ao(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class el{constructor(e){this.writeTree_=e}static empty(){return new el(new Za(null))}}function tl(e,t,n){if(Oo(t))return new el(new Za(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Lo(i,t);return s=s.updateChild(o,n),new el(e.writeTree_.set(i,s))}{const r=new Za(n),i=e.writeTree_.setTree(t,r);return new el(i)}}}function nl(e,t,n){let r=e;return Ws(n,((e,n)=>{r=tl(r,Ao(t,e),n)})),r}function rl(e,t){if(Oo(t))return el.empty();{const n=e.writeTree_.setTree(t,new Za(null));return new el(n)}}function il(e,t){return null!=sl(e,t)}function sl(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Lo(n.path,t)):null}function ol(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(oa,((e,n)=>{t.push(new Vo(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Vo(e,n.value))})),t}function al(e,t){if(Oo(t))return e;{const n=sl(e,t);return new el(null!=n?new Za(n):e.writeTree_.subtree(t))}}function ll(e){return e.writeTree_.isEmpty()}function cl(e,t){return ul(ko(),e.writeTree_,t)}function ul(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(gr(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ul(Ao(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ao(e,".priority"),r)),n}}
/**
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
 */function hl(e,t){return Tl(t,e)}function dl(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));gr(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&fl(t,r.path)?i=!1:Fo(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=gl(e.allWrites,pl,ko()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=rl(e.visibleWrites,r.path);else{Ws(r.children,(t=>{e.visibleWrites=rl(e.visibleWrites,Ao(r.path,t))}))}return!0}return!1}function fl(e,t){if(e.snap)return Fo(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Fo(Ao(e.path,n),t))return!0;return!1}function pl(e){return e.visible}function gl(e,t,n){let r=el.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Fo(n,e)?(t=Lo(n,e),r=tl(r,t,s.snap)):Fo(e,n)&&(t=Lo(e,n),r=tl(r,ko(),s.snap.getChild(t)));else{if(!s.children)throw mr("WriteRecord should have .snap or .children");if(Fo(n,e))t=Lo(n,e),r=nl(r,t,s.children);else if(Fo(e,n))if(t=Lo(e,n),Oo(t))r=nl(r,ko(),s.children);else{const e=Yr(s.children,Io(t));if(e){const n=e.getChild(xo(t));r=tl(r,ko(),n)}}}}}return r}function ml(e,t,n,r,i){if(r||i){const s=al(e.visibleWrites,t);if(!i&&ll(s))return n;if(i||null!=n||il(s,ko())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Fo(e.path,t)||Fo(t,e.path))};return cl(gl(e.allWrites,s,t),n||pa.EMPTY_NODE)}return null}{const r=sl(e.visibleWrites,t);if(null!=r)return r;{const r=al(e.visibleWrites,t);if(ll(r))return n;if(null!=n||il(r,ko())){return cl(r,n||pa.EMPTY_NODE)}return null}}}function yl(e,t,n,r){return ml(e.writeTree,e.treePath,t,n,r)}function vl(e,t){return function(e,t,n){let r=pa.EMPTY_NODE;const i=sl(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(oa,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=al(e.visibleWrites,t);return n.forEachChild(oa,((e,t)=>{const n=cl(al(i,new To(e)),t);r=r.updateImmediateChild(e,n)})),ol(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return ol(al(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function _l(e,t,n,r){return function(e,t,n,r,i){gr(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ao(t,n);if(il(e.visibleWrites,s))return null;{const t=al(e.visibleWrites,s);return ll(t)?i.getChild(n):cl(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function bl(e,t){return function(e,t){return sl(e.visibleWrites,t)}(e.writeTree,Ao(e.treePath,t))}function wl(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=al(e.visibleWrites,t),c=sl(l,ko());if(null!=c)a=c;else{if(null==n)return[];a=cl(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Cl(e,t,n){return function(e,t,n,r){const i=Ao(t,n),s=sl(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return cl(al(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function El(e,t){return Tl(Ao(e.treePath,t),e.writeTree)}function Tl(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class kl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;gr("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),gr(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Ea(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ca(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,wa(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw mr("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Ea(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */const Il=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Sl{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Wa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cl(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Qa(this.viewCache_),i=wl(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function xl(e,t,n,r,i){const s=new kl;let o,a;if(n.type===Ma.OVERWRITE){const l=n;l.source.fromUser?o=Pl(e,t,l.path,l.snap,r,i,s):(gr(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Oo(l.path),o=Rl(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===Ma.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Ao(n,r);Al(t,Io(c))&&(a=Pl(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Ao(n,r);Al(t,Io(c))||(a=Pl(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(gr(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Ll(e,t,l.path,l.children,r,i,a,s))}else if(n.type===Ma.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=bl(r,n))return t;{const a=new Sl(r,t,i),l=t.eventCache.getNode();let c;if(Oo(n)||".priority"===Io(n)){let n;if(t.serverCache.isFullyInitialized())n=yl(r,Qa(t));else{const e=t.serverCache.getNode();gr(e instanceof pa,"serverChildren would be complete if leaf node"),n=vl(r,e)}c=e.filter.updateFullNode(l,n,s)}else{const i=Io(n);let u=Cl(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,xo(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,pa.EMPTY_NODE,xo(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=yl(r,Qa(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=bl(r,ko()),Ka(t,c,o,e.filter.filtersNodes())}}
/**
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=bl(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Oo(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Rl(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Oo(n)){let r=new Za(null);return l.getNode().forEachChild(Go,((e,t)=>{r=r.set(new To(e),t)})),Ll(e,t,n,r,i,s,a,o)}return t}{let c=new Za(null);return r.foreach(((e,t)=>{const r=Ao(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Ll(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==Ma.LISTEN_COMPLETE)throw mr("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Ya(t,s.getNode(),s.isFullyInitialized()||Oo(n),s.isFiltered());return Nl(e,o,n,r,Il,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ja(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ba(Ja(t)))}}(t,o,l),{viewCache:o,changes:l}}function Nl(e,t,n,r,i,s){const o=t.eventCache;if(null!=bl(r,n))return t;{let a,l;if(Oo(n))if(gr(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Qa(t),i=vl(r,n instanceof pa?n:pa.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=yl(r,Qa(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Io(n);if(".priority"===c){gr(1===So(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=_l(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=xo(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=_l(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Cl(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return Ka(t,a,o.isFullyInitialized()||Oo(n),e.filter.filtersNodes())}}function Rl(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Oo(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Io(n);if(!l.isCompleteForPath(n)&&So(n)>1)return t;const i=xo(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Il,null)}const h=Ya(t,c,l.isFullyInitialized()||Oo(n),u.filtersNodes());return Nl(e,h,n,i,new Sl(i,h,s),a)}function Pl(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Sl(i,t,s);if(Oo(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Ka(t,c,!0,e.filter.filtersNodes());else{const i=Io(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ka(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=xo(n),c=a.getNode().getImmediateChild(i);let h;if(Oo(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===No(s)&&e.getChild(Po(s)).isEmpty()?e:e.updateChild(s,r):pa.EMPTY_NODE}if(c.equals(h))l=t;else{l=Ka(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Al(e,t){return e.eventCache.isCompleteForChild(t)}function Ol(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ll(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Oo(n)?r:new Za(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Ol(0,t.serverCache.getNode().getImmediateChild(n),r);c=Rl(e,c,new To(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Ol(0,t.serverCache.getNode().getImmediateChild(n),r);c=Rl(e,c,new To(n),l,i,s,o,a)}})),c}class Dl{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Ta(n.getIndex()),i=(s=n).loadsAllData()?new Ta(s.getIndex()):s.hasLimit()?new Ia(s):new ka(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(pa.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(pa.EMPTY_NODE,a.getNode(),null),u=new Wa(l,o.isFullyInitialized(),r.filtersNodes()),h=new Wa(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ga(h,u),this.eventGenerator_=new $a(this.query_)}get query(){return this.query_}}function Fl(e,t){const n=Qa(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Oo(t)&&!n.getImmediateChild(Io(t)).isEmpty())?n.getChild(t):null}function Ml(e){return 0===e.eventRegistrations_.length}function jl(e,t,n){const r=[];if(n){gr(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ul(e,t,n,r){t.type===Ma.MERGE&&null!==t.source.queryId&&(gr(Qa(e.viewCache_),"We should always have a full cache before handling merges"),gr(Ja(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=xl(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,gr(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),gr(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),gr(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ql(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ql(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),za(e,i,"child_removed",t,r,n),za(e,i,"child_added",t,r,n),za(e,i,"child_moved",s,r,n),za(e,i,"child_changed",t,r,n),za(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */let Bl,Hl;class Vl{constructor(){this.views=new Map}}function Wl(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return gr(null!=s,"SyncTree gave us an op for an invalid query."),Ul(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Ul(s,t,n,r));return i}}function $l(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=yl(n,i?r:null),s=!1;e?s=!0:r instanceof pa?(e=vl(n,r),s=!1):(e=pa.EMPTY_NODE,s=!1);const o=Ga(new Wa(e,s,!1),new Wa(r,i,!1));return new Dl(t,o)}return o}function zl(e,t,n,r,i,s){const o=$l(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(oa,((e,t)=>{r.push(wa(e,t))}));return n.isFullyInitialized()&&r.push(ba(n.getNode())),ql(e,r,n.getNode(),t)}(o,n)}function Gl(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Xl(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(jl(i,n,r)),Ml(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(jl(t,n,r)),Ml(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Xl(e)&&s.push(new(gr(Bl,"Reference.ts has not been loaded"),Bl)(t._repo,t._path)),{removed:s,events:o}}function Kl(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Yl(e,t){let n=null;for(const r of e.views.values())n=n||Fl(r,t);return n}function Jl(e,t){if(t._queryParams.loadsAllData())return Zl(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ql(e,t){return null!=Jl(e,t)}function Xl(e){return null!=Zl(e)}function Zl(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */let ec=1;class tc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Za(null),this.pendingWriteTree_={visibleWrites:el.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nc(e,t,n,r,i){return function(e,t,n,r,i){gr(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=tl(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?uc(e,new Ha({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function rc(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(dl(e.pendingWriteTree_,t)){let t=new Za(null);return null!=r.snap?t=t.set(ko(),!0):Ws(r.children,(e=>{t=t.set(new To(e),!0)})),uc(e,new qa(r.path,t,n))}return[]}function ic(e,t,n){return uc(e,new Ha({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function sc(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Ql(o,t))){const l=Gl(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>Xl(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Xl(t)){return[Zl(t)]}{let e=[];return t&&(e=Kl(t)),Ws(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=fc(e,r);e.listenProvider_.startListening(_c(i),pc(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(_c(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(gc(t));e.listenProvider_.stopListening(_c(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=gc(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function oc(e,t,n,r){const i=mc(e,r);if(null!=i){const r=yc(i),s=r.path,o=r.queryId,a=Lo(s,t);return vc(e,s,new Ha(Ua(o),a,n))}return[]}function ac(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Lo(e,i);s=s||Yl(t,n),o=o||Xl(t)}));let a,l=e.syncPointTree_.get(i);if(l?(o=o||Xl(l),s=s||Yl(l,ko())):(l=new Vl,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)a=!0;else{a=!1,s=pa.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Yl(t,ko());n&&(s=s.updateImmediateChild(e,n))}))}const c=Ql(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=gc(t);gr(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ec++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=zl(l,t,n,hl(e.pendingWriteTree_,i),s,a);if(!c&&!o&&!r){const n=Jl(l,t);u=u.concat(function(e,t,n){const r=t._path,i=pc(e,t),s=fc(e,n),o=e.listenProvider_.startListening(_c(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)gr(!Xl(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Oo(e)&&t&&Xl(t))return[Zl(t).query];{let e=[];return t&&(e=e.concat(Kl(t).map((e=>e.query)))),Ws(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(_c(r),pc(e,r))}}return o}
/**
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
 */(e,t,n))}return u}function lc(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Yl(n,Lo(e,t));if(r)return r}));return ml(r,t,i,n,!0)}function cc(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Lo(e,n);r=r||Yl(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Yl(i,ko()):(i=new Vl,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Wa(r,!0,!1):null;return function(e){return Ja(e.viewCache_)}($l(i,t,hl(e.pendingWriteTree_,t._path),s?o.getNode():pa.EMPTY_NODE,s))}function uc(e,t){return hc(t,e.syncPointTree_,null,hl(e.pendingWriteTree_,ko()))}function hc(e,t,n,r){if(Oo(e.path))return dc(e,t,n,r);{const i=t.get(ko());null==n&&null!=i&&(n=Yl(i,ko()));let s=[];const o=Io(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=El(r,o);s=s.concat(hc(a,l,e,t))}return i&&(s=s.concat(Wl(i,e,r,n))),s}}function dc(e,t,n,r){const i=t.get(ko());null==n&&null!=i&&(n=Yl(i,ko()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=El(r,t),l=e.operationForChild(t);l&&(s=s.concat(dc(l,i,o,a)))})),i&&(s=s.concat(Wl(i,e,r,n))),s}function fc(e,t){const n=t.query,r=pc(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||pa.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=mc(e,n);if(r){const n=yc(r),i=n.path,s=n.queryId,o=Lo(i,t);return vc(e,i,new Ba(Ua(s),o))}return[]}(e,n._path,r):function(e,t){return uc(e,new Ba({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return sc(e,n,null,r)}}}}function pc(e,t){const n=gc(t);return e.queryToTagMap.get(n)}function gc(e){return e._path.toString()+"$"+e._queryIdentifier}function mc(e,t){return e.tagToQueryMap.get(t)}function yc(e){const t=e.indexOf("$");return gr(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new To(e.substr(0,t))}}function vc(e,t,n){const r=e.syncPointTree_.get(t);gr(r,"Missing sync point for query tag that we're tracking");return Wl(r,n,hl(e.pendingWriteTree_,t),null)}function _c(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(gr(Hl,"Reference.ts has not been loaded"),Hl)(e._repo,e._path):e}class bc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new bc(t)}node(){return this.node_}}class wc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ao(this.path_,e);return new wc(this.syncTree_,t)}node(){return lc(this.syncTree_,this.path_)}}const Cc=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Ec=function(e,t,n){return e&&"object"==typeof e?(gr(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Tc(e[".sv"],t,n):"object"==typeof e[".sv"]?kc(e[".sv"],t):void gr(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Tc=function(e,t,n){if("timestamp"===e)return n.timestamp;gr(!1,"Unexpected server value: "+e)},kc=function(e,t,n){e.hasOwnProperty("increment")||gr(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&gr(!1,"Unexpected increment value: "+r);const i=t.node();if(gr(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Ic=function(e,t,n,r){return xc(t,new wc(n,e),r)},Sc=function(e,t,n){return xc(e,new bc(t),n)};function xc(e,t,n){const r=e.getPriority().val(),i=Ec(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Ec(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new sa(s,ya(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new sa(i))),r.forEachChild(oa,((e,r)=>{const i=xc(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
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
 */class Nc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Rc(e,t){let n=t instanceof To?t:new To(t),r=e,i=Io(n);for(;null!==i;){const e=Yr(r.node.children,i)||{children:{},childCount:0};r=new Nc(i,r,e),n=xo(n),i=Io(n)}return r}function Pc(e){return e.node.value}function Ac(e,t){e.node.value=t,Mc(e)}function Oc(e){return e.node.childCount>0}function Lc(e,t){Ws(e.node.children,((n,r)=>{t(new Nc(n,e,r))}))}function Dc(e,t,n,r){n&&!r&&t(e),Lc(e,(e=>{Dc(e,t,!0,r)})),n&&r&&t(e)}function Fc(e){return new To(null===e.parent?e.name:Fc(e.parent)+"/"+e.name)}function Mc(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Pc(e)&&!Oc(e)}(n),i=Kr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Mc(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Mc(e))}
/**
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
 */(e.parent,e.name,e)}const jc=/[\[\].#$\/\u0000-\u001F\u007F]/,Uc=/[\[\].#$\u0000-\u001F\u007F]/,qc=10485760,Bc=function(e){return"string"==typeof e&&0!==e.length&&!jc.test(e)},Hc=function(e){return"string"==typeof e&&0!==e.length&&!Uc.test(e)},Vc=function(e,t,n,r){r&&void 0===t||Wc(ai(e,"value"),t,n)},Wc=function(e,t,n){const r=n instanceof To?new Mo(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Uo(r));if("function"==typeof t)throw new Error(e+"contains a function "+Uo(r)+" with contents = "+t.toString());if(Fs(t))throw new Error(e+"contains "+t.toString()+" "+Uo(r));if("string"==typeof t&&t.length>3495253.3333333335&&ci(t)>qc)throw new Error(e+"contains a string greater than "+qc+" utf8 bytes "+Uo(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Ws(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Bc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Uo(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ci(a),jo(o),Wc(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=ci(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Uo(r)+" in addition to actual children.")}},$c=function(e,t,n,r){if(!(r&&void 0===n||Hc(n)))throw new Error(ai(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},zc=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$c(e,t,n,r)},Gc=function(e,t){if(".info"===Io(t))throw new Error(e+" failed = Can't modify data under /.info/")},Kc=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Bc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Hc(e)}(n))throw new Error(ai(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Yc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jc(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Do(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Qc(e,t,n){Jc(e,n),Xc(e,(e=>Fo(e,t)||Fo(t,e)))}function Xc(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Zc(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Zc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();xs&&Ps("event: "+n.toString()),Ks(r)}}}
/**
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
 */const eu="repo_interrupt",tu=25;class nu{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Aa(),this.transactionQueueTree_=new Nc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ru(e,t,n){if(e.stats_=co(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ra(e.repoInfo_,((t,n,r,i)=>{ou(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>au(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wr(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ho(e.repoInfo_,t,((t,n,r,i)=>{ou(e,t,n,r,i)}),(t=>{au(e,t)}),(t=>{!function(e,t){Ws(t,((t,n)=>{lu(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return lo[n]||(lo[n]=t()),lo[n]}(e.repoInfo_,(()=>new Fa(e.stats_,e.server_))),e.infoData_=new Pa,e.infoSyncTree_=new tc({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ic(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),lu(e,"connected",!1),e.serverSyncTree_=new tc({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);Qc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function iu(e){const t=e.infoData_.getNode(new To(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function su(e){return Cc({timestamp:iu(e)})}function ou(e,t,n,r,i){e.dataUpdateCount++;const s=new To(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=Qr(n,(e=>ya(e)));o=function(e,t,n,r){const i=mc(e,r);if(i){const r=yc(i),s=r.path,o=r.queryId,a=Lo(s,t),l=Za.fromObject(n);return vc(e,s,new Va(Ua(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=ya(n);o=oc(e.serverSyncTree_,s,t,i)}else if(r){const t=Qr(n,(e=>ya(e)));o=function(e,t,n){const r=Za.fromObject(n);return uc(e,new Va({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=ya(n);o=ic(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=mu(e,s)),Qc(e.eventQueue_,a,o)}function au(e,t){lu(e,"connected",t),!1===t&&function(e){du(e,"onDisconnectEvents");const t=su(e),n=Aa();La(e.onDisconnect_,ko(),((r,i)=>{const s=Ic(r,i,e.serverSyncTree_,t);Oa(n,r,s)}));let r=[];La(n,ko(),((t,n)=>{r=r.concat(ic(e.serverSyncTree_,t,n));const i=wu(e,t);mu(e,i)})),e.onDisconnect_=Aa(),Qc(e.eventQueue_,ko(),r)}(e)}function lu(e,t,n){const r=new To("/.info/"+t),i=ya(n);e.infoData_.updateSnapshot(r,i);const s=ic(e.infoSyncTree_,r,i);Qc(e.eventQueue_,r,s)}function cu(e){return e.nextWriteId_++}function uu(e,t,n,r,i){du(e,"set",{path:t.toString(),value:n,priority:r});const s=su(e),o=ya(n,r),a=lc(e.serverSyncTree_,t),l=Sc(o,a,s),c=cu(e),u=nc(e.serverSyncTree_,t,l,c,!0);Jc(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||Ds("set at "+t+" failed: "+n);const o=rc(e.serverSyncTree_,c,!s);Qc(e.eventQueue_,t,o),fu(e,i,n,r)}));const h=wu(e,t);mu(e,h),Qc(e.eventQueue_,h,[])}function hu(e){e.persistentConnection_&&e.persistentConnection_.interrupt(eu)}function du(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ps(n,...t)}function fu(e,t,n,r){t&&Ks((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function pu(e,t,n){return lc(e.serverSyncTree_,t,n)||pa.EMPTY_NODE}function gu(e,t=e.transactionQueueTree_){if(t||bu(e,t),Pc(t)){const n=vu(e,t);gr(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=pu(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];gr(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Lo(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{du(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(rc(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();bu(e,Rc(e.transactionQueueTree_,t)),gu(e,e.transactionQueueTree_),Qc(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Ks(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ds("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}mu(e,t)}}),o)}(e,Fc(t),n)}else Oc(t)&&Lc(t,(t=>{gu(e,t)}))}function mu(e,t){const n=yu(e,t),r=Fc(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=Lo(n,l.path);let u,h=!1;if(gr(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(rc(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=tu)h=!0,u="maxretry",i=i.concat(rc(e.serverSyncTree_,l.currentWriteId,!0));else{const n=pu(e,l.path,o);l.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){Wc("transaction failed: Data returned ",r,l.path);let t=ya(r);"object"==typeof r&&null!=r&&Kr(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=su(e),c=Sc(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=cu(e),o.splice(o.indexOf(s),1),i=i.concat(nc(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(rc(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",i=i.concat(rc(e.serverSyncTree_,l.currentWriteId,!0))}Qc(e.eventQueue_,n,i),i=[],h&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===u?r.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):r.push((()=>t[s].onComplete(new Error(u),!1,null)))))}var a;bu(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Ks(r[e]);gu(e,e.transactionQueueTree_)}(e,vu(e,n),r),r}function yu(e,t){let n,r=e.transactionQueueTree_;for(n=Io(t);null!==n&&void 0===Pc(r);)r=Rc(r,n),n=Io(t=xo(t));return r}function vu(e,t){const n=[];return _u(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function _u(e,t,n){const r=Pc(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Lc(t,(t=>{_u(e,t,n)}))}function bu(e,t){const n=Pc(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ac(t,n.length>0?n:void 0)}Lc(t,(t=>{bu(e,t)}))}function wu(e,t){const n=Fc(yu(e,t)),r=Rc(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Cu(e,t)})),Cu(e,r),Dc(r,(t=>{Cu(e,t)})),n}function Cu(e,t){const n=Pc(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(gr(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(gr(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(rc(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ac(t,void 0):n.length=s+1,Qc(e.eventQueue_,Fc(t),i);for(let e=0;e<r.length;e++)Ks(r[e])}}
/**
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
 */const Eu=function(e,t){const n=Tu(e),r=n.namespace;"firebase.com"===n.domain&&Ls(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ds("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new io(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new To(n.pathString)}},Tu=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ds(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},ku="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
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
 */
class Iu{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Wr(this.snapshot.exportVal())}}class Su{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class xu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return gr(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Nu{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Oo(this._path)?null:No(this._path)}get ref(){return new Ru(this._repo,this._path)}get _queryIdentifier(){const e=Na(this._queryParams),t=Hs(e);return"{}"===t?"default":t}get _queryObject(){return Na(this._queryParams)}isEqual(e){if(!((e=ui(e))instanceof Nu))return!1;const t=this._repo===e._repo,n=Do(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ru extends Nu{constructor(e,t){super(e,t,new Sa,!1)}get parent(){const e=Po(this._path);return null===e?null:new Ru(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Pu{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new To(e),n=Ou(this.ref,e);return new Pu(this._node.getChild(t),n,oa)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Pu(n,Ou(this.ref,t),oa))))}hasChild(e){const t=new To(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Au(e,t){return(e=ui(e))._checkNotDeleted("ref"),void 0!==t?Ou(e._root,t):e._root}function Ou(e,t){return null===Io((e=ui(e))._path)?zc("child","path",t,!1):$c("child","path",t,!1),new Ru(e._repo,Ao(e._path,t))}function Lu(e,t){e=ui(e),Gc("set",e._path),Vc("set",t,e._path,!1);const n=new Pr;return uu(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Du(e){e=ui(e);const t=new xu((()=>{})),n=new Fu(t);return function(e,t,n){const r=cc(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=ya(r).withIndex(t._queryParams.getIndex());let s;if(ac(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=ic(e.serverSyncTree_,t._path,i);else{const n=pc(e.serverSyncTree_,t);s=oc(e.serverSyncTree_,t._path,i,n)}return Qc(e.eventQueue_,t._path,s),sc(e.serverSyncTree_,t,n,null,!0),i}),(n=>(du(e,"get for query "+Wr(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Pu(t,new Ru(e._repo,e._path),e._queryParams.getIndex())))}class Fu{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Iu("value",this,new Pu(e.snapshotNode,new Ru(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Su(this,e,t):null}matches(e){return e instanceof Fu&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){gr(!Bl,"__referenceConstructor has already been defined"),Bl=e}(Ru),function(e){gr(!Hl,"__referenceConstructor has already been defined"),Hl=e}(Ru);
/**
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
 */
const Mu="FIREBASE_DATABASE_EMULATOR_HOST",ju={};let Uu=!1;function qu(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ps("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Eu(s,i),c=l.repoInfo;void 0!==Zn&&Zn.env&&(a=Zn.env[Mu]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Eu(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new Xs(Xs.OWNER):new Qs(e.name,e.options,t);Kc("Invalid Firebase Database URL",l),Oo(l.path)||Ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=ju[t.name];i||(i={},ju[t.name]=i);let s=i[e.toURLString()];s&&Ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new nu(e,Uu,n,r),i[e.toURLString()]=s,s}(c,e,u,new Js(e.name,n));return new Bu(h,e)}class Bu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ru(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ru(this._repo,ko())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ju[t];n&&n[e.key]===e||Ls(`Database ${t}(${e.repoInfo_}) has already been deleted.`),hu(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ls("Cannot call "+e+" on a deleted database.")}}Ho.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ho.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){vs=es,Ji(new hi("database",((e,{instanceIdentifier:t})=>qu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),rs(ms,ys,e),rs(ms,ys,"esm2017")}
/**
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
 */();function Hu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Vu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wu=Vu,$u=new Br("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),zu=new Ci("@firebase/auth");function Gu(e,...t){zu.logLevel<=mi.ERROR&&zu.error(`Auth (${es}): ${e}`,...t)}
/**
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
 */function Ku(e,...t){throw Qu(e,...t)}function Yu(e,...t){return Qu(e,...t)}function Ju(e,t,n){const r=Object.assign(Object.assign({},Wu()),{[t]:n});return new Br("auth","Firebase",r).create(t,{appName:e.name})}function Qu(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $u.create(e,...t)}function Xu(e,t,...n){if(!e)throw Qu(t,...n)}function Zu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Gu(t),new Error(t)}function eh(e,t){e||Zu(t)}
/**
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
 */function th(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function nh(){return"http:"===rh()||"https:"===rh()}function rh(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function ih(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(nh()||Dr()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class sh{constructor(e,t){this.shortDelay=e,this.longDelay=t,eh(t>e,"Short delay should be less than long delay!"),this.isMobile=Lr()||Fr()}get(){return ih()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function oh(e,t){eh(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class ah{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Zu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Zu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Zu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const lh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ch=new sh(3e4,6e4);
/**
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
 */function uh(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function hh(e,t,n,r,i={}){return dh(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=ei(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ah.fetch()(ph(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function dh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},lh),t);try{const t=new gh(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw mh(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw mh(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw mh(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw mh(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ju(e,a,o);Ku(e,a)}}catch(t){if(t instanceof qr)throw t;Ku(e,"network-request-failed",{message:String(t)})}}async function fh(e,t,n,r,i={}){const s=await hh(e,t,n,r,i);return"mfaPendingCredential"in s&&Ku(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ph(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?oh(e.config,i):`${e.config.apiScheme}://${i}`}class gh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Yu(this.auth,"network-request-failed"))),ch.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function mh(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yu(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function yh(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function vh(e){return 1e3*Number(e)}function _h(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const e=Cr(n);return e?JSON.parse(e):(Gu("Failed to decode base64 JWT payload"),null)}catch(e){return Gu("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function bh(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof qr&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class wh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Ch{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yh(this.lastLoginAt),this.creationTime=yh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Eh(e){var t;const n=e.auth,r=await e.getIdToken(),i=await bh(e,async function(e,t){return hh(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Xu(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Hu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ch(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
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
 */
class Th{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Xu(e.idToken,"internal-error"),Xu(void 0!==e.idToken,"internal-error"),Xu(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=_h(e);return Xu(t,"internal-error"),Xu(void 0!==t.exp,"internal-error"),Xu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Xu(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(e,t){const n=await dh(e,{},(async()=>{const n=ei({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=ph(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ah.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Th;return n&&(Xu("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Xu("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Xu("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Th,this.toJSON())}_performRefresh(){return Zu("not implemented")}}
/**
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
 */function kh(e,t){Xu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ih{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ch(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await bh(this,this.stsTokenManager.getToken(this.auth,e));return Xu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ui(e),r=await n.getIdToken(t),i=_h(r);Xu(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yh(vh(i.auth_time)),issuedAtTime:yh(vh(i.iat)),expirationTime:yh(vh(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ui(e);await Eh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Xu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ih(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Xu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Eh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bh(this,async function(e,t){return hh(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:C}=t;Xu(v&&C,e,"internal-error");const E=Th.fromJSON(this.name,C);Xu("string"==typeof v,e,"internal-error"),kh(u,e.name),kh(h,e.name),Xu("boolean"==typeof _,e,"internal-error"),Xu("boolean"==typeof b,e,"internal-error"),kh(d,e.name),kh(f,e.name),kh(p,e.name),kh(g,e.name),kh(m,e.name),kh(y,e.name);const T=new Ih({uid:v,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Th;r.updateFromServerResponse(t);const i=new Ih({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Eh(i),i}}
/**
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
 */const Sh=new Map;function xh(e){eh(e instanceof Function,"Expected a class definition");let t=Sh.get(e);return t?(eh(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sh.set(e,t),t)}
/**
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
 */class Nh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nh.type="NONE";const Rh=Nh;
/**
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
 */function Ph(e,t,n){return`firebase:${e}:${t}:${n}`}class Ah{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ph(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ph("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ih._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ah(xh(Rh),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||xh(Rh);const s=Ph(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Ih._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ah(i,e,n)):new Ah(i,e,n)}}
/**
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
 */function Oh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Lh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Uh(t))return"Blackberry";if(qh(t))return"Webos";if(Dh(t))return"Safari";if((t.includes("chrome/")||Fh(t))&&!t.includes("edge/"))return"Chrome";if(jh(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Lh(e=Or()){return/firefox\//i.test(e)}function Dh(e=Or()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fh(e=Or()){return/crios\//i.test(e)}function Mh(e=Or()){return/iemobile/i.test(e)}function jh(e=Or()){return/android/i.test(e)}function Uh(e=Or()){return/blackberry/i.test(e)}function qh(e=Or()){return/webos/i.test(e)}function Bh(e=Or()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Hh(){return Mr()&&10===document.documentMode}function Vh(e=Or()){return Bh(e)||jh(e)||qh(e)||Uh(e)||/windows phone/i.test(e)||Mh(e)}
/**
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
 */
function Wh(e,t=[]){let n;switch(e){case"Browser":n=Oh(Or());break;case"Worker":n=`${Oh(Or())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}
/**
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
 */async function $h(e,t){return hh(e,"GET","/v2/recaptchaConfig",uh(e,t))}
/**
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
 */function zh(e){return void 0!==e&&void 0!==e.enterprise}class Gh{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function Kh(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Yu("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Yh(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Jh{constructor(e){this.type="recaptcha-enterprise",this.auth=ed(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;zh(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{$h(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Gh(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&zh(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Kh("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Qh(e,t,n,r=!1){const i=new Jh(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */class Xh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
 */class Zh{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new Xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xh(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ah.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Xu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Eh(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ui(e):null;return t&&Xu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Xu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(xh(e))}))}async initializeRecaptchaConfig(){const e=await $h(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Gh(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Jh(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xh(e)||this._popupRedirectResolver;Xu(t,this,"argument-error"),this.redirectPersistenceManager=await Ah.create(this,[xh(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Xu(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Xu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){zu.logLevel<=mi.WARN&&zu.warn(`Auth (${es}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ed(e){return ui(e)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=ii((e=>this.observer=e))}get next(){return Xu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function nd(e,t,n){const r=ed(e);Xu(r._canInitEmulator,r,"emulator-config-failed"),Xu(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=rd(t),{host:o,port:a}=function(e){const t=rd(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:id(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:id(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function rd(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function id(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class sd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zu("not implemented")}_getIdTokenResponse(e){return Zu("not implemented")}_linkToIdToken(e,t){return Zu("not implemented")}_getReauthenticationResolver(e){return Zu("not implemented")}}
/**
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
 */async function od(e,t){return hh(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function ad(e,t){return fh(e,"POST","/v1/accounts:signInWithPassword",uh(e,t))}
/**
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
 */
class ld extends sd{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ld(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ld(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Qh(e,n,"signInWithPassword");return ad(e,t)}return ad(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Qh(e,n,"signInWithPassword");return ad(e,t)}return Promise.reject(t)}));case"emailLink":
/**
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
 */
return async function(e,t){return fh(e,"POST","/v1/accounts:signInWithEmailLink",uh(e,t))}(e,{email:this._email,oobCode:this._password});default:Ku(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return od(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return fh(e,"POST","/v1/accounts:signInWithEmailLink",uh(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ku(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function cd(e,t){return fh(e,"POST","/v1/accounts:signInWithIdp",uh(e,t))}
/**
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
 */class ud extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ud(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ku("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Hu(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ud(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return cd(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,cd(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cd(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ei(t)}return e}}
/**
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
 */const hd={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class dd extends sd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new dd({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new dd({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return fh(e,"POST","/v1/accounts:signInWithPhoneNumber",uh(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await fh(e,"POST","/v1/accounts:signInWithPhoneNumber",uh(e,t));if(n.temporaryProof)throw mh(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return fh(e,"POST","/v1/accounts:signInWithPhoneNumber",uh(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),hd)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new dd({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */class fd{constructor(e){var t,n,r,i,s,o;const a=ti(ni(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Xu(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=ti(ni(e)).link,n=t?ti(ni(t)).deep_link_id:null,r=ti(ni(e)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||t||e}(e);try{return new fd(t)}catch(e){return null}}}
/**
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
 */
class pd{constructor(){this.providerId=pd.PROVIDER_ID}static credential(e,t){return ld._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=fd.parseLink(t);return Xu(n,"argument-error"),ld._fromEmailAndCode(e,n.code,n.tenantId)}}pd.PROVIDER_ID="password",pd.EMAIL_PASSWORD_SIGN_IN_METHOD="password",pd.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class md extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class yd extends md{constructor(){super("facebook.com")}static credential(e){return ud._fromParams({providerId:yd.PROVIDER_ID,signInMethod:yd.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yd.credentialFromTaggedObject(e)}static credentialFromError(e){return yd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yd.credential(e.oauthAccessToken)}catch(e){return null}}}yd.FACEBOOK_SIGN_IN_METHOD="facebook.com",yd.PROVIDER_ID="facebook.com";
/**
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
 */
class vd extends md{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ud._fromParams({providerId:vd.PROVIDER_ID,signInMethod:vd.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vd.credentialFromTaggedObject(e)}static credentialFromError(e){return vd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vd.credential(t,n)}catch(e){return null}}}vd.GOOGLE_SIGN_IN_METHOD="google.com",vd.PROVIDER_ID="google.com";
/**
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
 */
class _d extends md{constructor(){super("github.com")}static credential(e){return ud._fromParams({providerId:_d.PROVIDER_ID,signInMethod:_d.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _d.credentialFromTaggedObject(e)}static credentialFromError(e){return _d.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _d.credential(e.oauthAccessToken)}catch(e){return null}}}_d.GITHUB_SIGN_IN_METHOD="github.com",_d.PROVIDER_ID="github.com";
/**
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
 */
class bd extends md{constructor(){super("twitter.com")}static credential(e,t){return ud._fromParams({providerId:bd.PROVIDER_ID,signInMethod:bd.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bd.credentialFromTaggedObject(e)}static credentialFromError(e){return bd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return bd.credential(t,n)}catch(e){return null}}}
/**
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
 */
async function wd(e,t){return fh(e,"POST","/v1/accounts:signUp",uh(e,t))}
/**
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
 */bd.TWITTER_SIGN_IN_METHOD="twitter.com",bd.PROVIDER_ID="twitter.com";class Cd{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ih._fromIdTokenResponse(e,n,r),s=Ed(n);return new Cd({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ed(n);return new Cd({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ed(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Td extends qr{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Td.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Td(e,t,n,r)}}function kd(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Td._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function Id(e,t,n=!1){const r=await bh(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Cd._forOperation(e,"link",r)}
/**
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
 */
async function Sd(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await bh(e,kd(r,i,t,e),n);Xu(s.idToken,r,"internal-error");const o=_h(s.idToken);Xu(o,r,"internal-error");const{sub:a}=o;return Xu(e.uid===a,r,"user-mismatch"),Cd._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ku(r,"user-mismatch"),e}}
/**
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
 */async function xd(e,t,n=!1){const r="signIn",i=await kd(e,r,t),s=await Cd._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Nd(e,t){return xd(ed(e),t)}async function Rd(e,t,n){var r;const i=ed(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qh(i,s,"signUpPassword");o=wd(i,e)}else o=wd(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Qh(i,s,"signUpPassword");return wd(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await Cd._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Pd(e,t,n){return Nd(ui(e),pd.credential(t,n))}
/**
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
 */
/**
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
 */
async function Ad(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=ui(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await bh(r,
/**
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
 */
async function(e,t){return hh(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}async function Od(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await bh(e,od(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
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
 */function Ld(e,t,n,r){return ui(e).onAuthStateChanged(t,n,r)}new WeakMap;const Dd="__sak";
/**
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
 */class Fd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dd,"1"),this.storage.removeItem(Dd),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Md extends Fd{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Or();return Dh(e)||Bh(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Vh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Hh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const jd=Md;
/**
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
 */class Ud extends Fd{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ud.type="SESSION";const qd=Ud;
/**
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
 */
/**
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
 */
class Bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bd(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Hd(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Bd.receivers=[];class Vd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Hd("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Wd(){return window}
/**
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
 */
function $d(){return void 0!==Wd().WorkerGlobalScope&&"function"==typeof Wd().importScripts}
/**
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
 */
const zd="firebaseLocalStorageDb",Gd="firebaseLocalStorage",Kd="fbase_key";class Yd{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jd(e,t){return e.transaction([Gd],t?"readwrite":"readonly").objectStore(Gd)}function Qd(){const e=indexedDB.open(zd,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Gd,{keyPath:Kd})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Gd)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(zd);return new Yd(e).toPromise()}(),t(await Qd()))}))}))}async function Xd(e,t,n){const r=Jd(e,!0).put({[Kd]:t,value:n});return new Yd(r).toPromise()}function Zd(e,t){const n=Jd(e,!0).delete(t);return new Yd(n).toPromise()}class ef{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qd()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $d()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bd._getInstance($d()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Vd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Xd(e,Dd,"1"),await Zd(e,Dd),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Jd(e,!1).get(t),r=await new Yd(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zd(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jd(e,!1).getAll();return new Yd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ef.type="LOCAL";const tf=ef;
/**
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
 */
/**
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
 */
Yh("rcb"),new sh(3e4,6e4);
/**
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
 */
const nf="recaptcha";async function rf(e,t,n){var r;const i=await n.verify();try{let s;if(Xu("string"==typeof i,e,"argument-error"),Xu(n.type===nf,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Xu("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return hh(e,"POST","/v2/accounts/mfaEnrollment:start",uh(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Xu("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Xu(n,e,"missing-multi-factor-info");const o=await function(e,t){return hh(e,"POST","/v2/accounts/mfaSignIn:start",uh(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return hh(e,"POST","/v1/accounts:sendVerificationCode",uh(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class sf{constructor(e){this.providerId=sf.PROVIDER_ID,this.auth=ed(e)}verifyPhoneNumber(e,t){return rf(this.auth,e,ui(t))}static credential(e,t){return dd._fromVerification(e,t)}static credentialFromResult(e){const t=e;return sf.credentialFromTaggedObject(t)}static credentialFromError(e){return sf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?dd._fromTokenResponse(t,n):null}}
/**
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
 */
function of(e,t){return t?xh(t):(Xu(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */sf.PROVIDER_ID="phone",sf.PHONE_SIGN_IN_METHOD="phone";class af extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cd(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cd(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cd(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lf(e){return xd(e.auth,new af(e),e.bypassAuthState)}function cf(e){const{auth:t,user:n}=e;return Xu(n,t,"internal-error"),Sd(n,new af(e),e.bypassAuthState)}async function uf(e){const{auth:t,user:n}=e;return Xu(n,t,"internal-error"),Id(n,new af(e),e.bypassAuthState)}
/**
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
 */class hf{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lf;case"linkViaPopup":case"linkViaRedirect":return uf;case"reauthViaPopup":case"reauthViaRedirect":return cf;default:Ku(this.auth,"internal-error")}}resolve(e){eh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){eh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const df=new sh(2e3,1e4);class ff extends hf{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ff.currentPopupAction&&ff.currentPopupAction.cancel(),ff.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Xu(e,this.auth,"internal-error"),e}async onExecution(){eh(1===this.filter.length,"Popup operations only handle one event");const e=Hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Yu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Yu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ff.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Yu(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,df.get())};e()}}ff.currentPopupAction=null;
/**
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
 */
const pf="pendingRedirect",gf=new Map;class mf extends hf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=_f(t),r=vf(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}gf.set(this.auth._key(),e)}return this.bypassAuthState||gf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function yf(e,t){gf.set(e._key(),t)}function vf(e){return xh(e._redirectPersistence)}function _f(e){return Ph(pf,e.config.apiKey,e.name)}
/**
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
 */async function bf(e,t,n=!1){const r=ed(e),i=of(r,t),s=new mf(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class wf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ef(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ef(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Yu(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ef({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Tf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kf=/^https?/;async function If(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return hh(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Sf(e))return}catch(e){}Ku(e,"unauthorized-domain")}function Sf(e){const t=th(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kf.test(n))return!1;if(Tf.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const xf=new sh(3e4,6e4);function Nf(){const e=Wd().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Rf=null;function Pf(e){return Rf=Rf||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Nf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nf(),n(Yu(e,"network-request-failed"))},timeout:xf.get()})}if(null===(i=null===(r=Wd().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Wd().gapi)||void 0===s?void 0:s.load)){const t=Yh("iframefcb");return Wd()[t]=()=>{gapi.load?o():n(Yu(e,"network-request-failed"))},Kh(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Rf=null,e}))}(e),Rf}
/**
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
 */const Af=new sh(5e3,15e3),Of="__/auth/iframe",Lf="emulator/auth/iframe",Df={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ff=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mf(e){const t=e.config;Xu(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?oh(t,Lf):`https://${e.config.authDomain}/${Of}`,r={apiKey:t.apiKey,appName:e.name,v:es},i=Ff.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}
/**
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
 */
const jf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qf(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jf),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Or().toLowerCase();n&&(a=Fh(c)?"_blank":n),Lh(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Or()){var t;return Bh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new Uf(null);const h=window.open(t||"",a,u);Xu(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Uf(h)}const Bf="__/auth/handler",Hf="emulator/auth/handler",Vf=encodeURIComponent("fac");async function Wf(e,t,n,r,i,s){Xu(e.config.authDomain,e,"auth-domain-config-required"),Xu(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:es,eventId:i};if(t instanceof gd){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Jr(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof md){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Vf}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?oh(e,Hf):`https://${e.authDomain}/${Bf}`}
/**
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
 */(e)}?${ei(a).slice(1)}${c}`}const $f="webStorageSupport";const zf=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qd,this._completeRedirectFn=bf,this._overrideRedirectResult=yf}async _openPopup(e,t,n,r){var i;eh(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return qf(e,await Wf(e,t,n,th(),r),Hd())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Wd().location.href=e}(await Wf(e,t,n,th(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(eh(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Pf(e),n=Wd().gapi;return Xu(n,e,"internal-error"),t.open({where:document.body,url:Mf(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Df,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Yu(e,"network-request-failed"),s=Wd().setTimeout((()=>{r(i)}),Af.get());function o(){Wd().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new wf(e);return t.register("authEvent",(t=>{Xu(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($f,{type:$f},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[$f];void 0!==i&&t(!!i),Ku(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=If(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vh()||Dh()||Bh()}};var Gf="@firebase/auth",Kf="0.23.2";
/**
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
 */
class Yf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Xu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const Jf=Rr("authIdTokenMaxAge")||300;let Qf=null;var Xf;Xf="Browser",Ji(new hi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Xu(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Xf,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wh(Xf)},l=new Zh(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xh);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ji(new hi("auth-internal",(e=>(e=>new Yf(e))(ed(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),rs(Gf,Kf,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xf)),rs(Gf,Kf,"esm2017");const Zf={shoppingList:[{_id:"643282b1e85766588626a080",list_name:"Advice How-To and Miscellaneous",author:"James Clear",book_image:"https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",contributor:"by James Clear",description:"",title:"ATOMIC HABITS"},{_id:"643282b1e85766588626a085",list_name:"Audio Fiction",author:"Bonnie Garmus",book_image:"https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",contributor:"by Bonnie Garmus",description:"A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show. Read by Miranda Raison, Pandora Sykes and the author. 11 hours, 55 minutes unabridged.",title:"LESSONS IN CHEMISTRY"},{_id:"643282b1e85766588626a0b2",list_name:"Audio Fiction",author:"Taylor Jenkins Reid",book_image:"https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg",contributor:"by Taylor Jenkins Reid",description:"A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band. Read by Jennifer Beals, Benjamin Bratt, Judy Greer and Pablo Schreiber. 9 hours, 3 minutes unabridged.",title:"DAISY JONES & THE SIX"}]};var ep,tp={};ep="function"==typeof define&&define.amd?define:function(e,t){tp?tp=t(i("aaQnt")):window.toastr=t(window.jQuery)},ep(["jquery"],(function(e){return function(){var t,n,r,i=0,s="error",o="info",a="success",l="warning",c={clear:function(n,r){var i=p();t||u(i),h(n,i,r)||function(n){for(var r=t.children(),i=r.length-1;i>=0;i--)h(e(r[i]),n)}(i)},remove:function(n){var r=p();t||u(r),n&&0===e(":focus",n).length?g(n):t.children().length&&t.remove()},error:function(e,t,n){return f({type:s,iconClass:p().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:u,info:function(e,t,n){return f({type:o,iconClass:p().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){n=e},success:function(e,t,n){return f({type:a,iconClass:p().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.4",warning:function(e,t,n){return f({type:l,iconClass:p().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return c;function u(n,r){return n||(n=p()),(t=e("#"+n.containerId)).length||r&&(t=function(n){return(t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass)).appendTo(e(n.target)),t}(n)),t}function h(t,n,r){var i=!(!r||!r.force)&&r.force;return!(!t||!i&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){g(t)}}),0))}function d(e){n&&n(e)}function f(n){var s=p(),o=n.iconClass||s.iconClass;if(void 0!==n.optionsOverride&&(s=e.extend(s,n.optionsOverride),o=n.optionsOverride.iconClass||o),!function(e,t){if(e.preventDuplicates){if(t.message===r)return!0;r=t.message}return!1}(s,n)){i++,t=u(s,!0);var a=null,l=e("<div/>"),c=e("<div/>"),h=e("<div/>"),f=e("<div/>"),m=e(s.closeHtml),y={intervalId:null,hideEta:null,maxHideTime:null},v={toastId:i,state:"visible",startTime:new Date,options:s,map:n};return n.iconClass&&l.addClass(s.toastClass).addClass(o),function(){if(n.title){var e=n.title;s.escapeHtml&&(e=_(n.title)),c.append(e).addClass(s.titleClass),l.append(c)}}(),function(){if(n.message){var e=n.message;s.escapeHtml&&(e=_(n.message)),h.append(e).addClass(s.messageClass),l.append(h)}}(),s.closeButton&&(m.addClass(s.closeClass).attr("role","button"),l.prepend(m)),s.progressBar&&(f.addClass(s.progressClass),l.prepend(f)),s.rtl&&l.addClass("rtl"),s.newestOnTop?t.prepend(l):t.append(l),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}l.attr("aria-live",e)}(),l.hide(),l[s.showMethod]({duration:s.showDuration,easing:s.showEasing,complete:s.onShown}),s.timeOut>0&&(a=setTimeout(b,s.timeOut),y.maxHideTime=parseFloat(s.timeOut),y.hideEta=(new Date).getTime()+y.maxHideTime,s.progressBar&&(y.intervalId=setInterval(E,10))),s.closeOnHover&&l.hover(C,w),!s.onclick&&s.tapToDismiss&&l.click(b),s.closeButton&&m&&m.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),s.onCloseClick&&s.onCloseClick(e),b(!0)})),s.onclick&&l.click((function(e){s.onclick(e),b()})),d(v),s.debug&&console&&console.log(v),l}function _(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b(t){var n=t&&!1!==s.closeMethod?s.closeMethod:s.hideMethod,r=t&&!1!==s.closeDuration?s.closeDuration:s.hideDuration,i=t&&!1!==s.closeEasing?s.closeEasing:s.hideEasing;if(!e(":focus",l).length||t)return clearTimeout(y.intervalId),l[n]({duration:r,easing:i,complete:function(){g(l),clearTimeout(a),s.onHidden&&"hidden"!==v.state&&s.onHidden(),v.state="hidden",v.endTime=new Date,d(v)}})}function w(){(s.timeOut>0||s.extendedTimeOut>0)&&(a=setTimeout(b,s.extendedTimeOut),y.maxHideTime=parseFloat(s.extendedTimeOut),y.hideEta=(new Date).getTime()+y.maxHideTime)}function C(){clearTimeout(a),y.hideEta=0,l.stop(!0,!0)[s.showMethod]({duration:s.showDuration,easing:s.showEasing})}function E(){var e=(y.hideEta-(new Date).getTime())/y.maxHideTime*100;f.width(e+"%")}}function p(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},c.options)}function g(e){t||(t=u()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),r=void 0))}}()})),t(tp).options={closeButton:!0,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:300,hideDuration:1e3,timeOut:5e3,extendedTimeOut:1e3,showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};const np=t(tp);
/**
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
 */
rs("firebase","9.22.0","app");const rp=ts({apiKey:"AIzaSyC-f08qD6BqdVE49Fk1Hrhnb18ww-swp9s",authDomain:"blended1-js-project.firebaseapp.com",databaseURL:"https://blended1-js-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"blended1-js-project",storageBucket:"blended1-js-project.appspot.com",messagingSenderId:"453737683945",appId:"1:453737683945:web:0c3c25fcb2a4883929c978",measurementId:"G-93VBB2L2Q1"}),ip=function(e=ns()){const t=Qi(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Qi(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Xr(n.getOptions(),null!=t?t:{}))return e;Ku(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:zf,persistence:[tf,jd,qd]}),r=Rr("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Jf)return;const r=null==t?void 0:t.token;Qf!==r&&(Qf=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){ui(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){ui(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Sr("auth");return s&&nd(n,`http://${s}`),n}(rp),sp=document.querySelector(".auth-component");var op=new class{signUp=e=>{e.preventDefault();const t=e.target.elements.name.value,n=e.target.elements.email.value,r=e.target.elements.password.value;n&&r.length>=6&&(sp.classList.remove("signed-out"),Rd(ip,n,r).then((async()=>{this.updateUserName(t)})).catch((e=>{np.error([e.code,e.message],"Sorry, unexpected error occured"),sp.classList.add("signed-out")})).finally((()=>{document.querySelector(".backdrop-form").classList.add("backdrop-form--is-hidden"),e.target.reset()})))};signIn=e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),n=e.target.elements.password.value.trim();t&&n.length>=6&&(sp.classList.remove("signed-out"),Pd(ip,t,n).then((e=>{const t=e.user;console.log(t)})).catch((e=>{np.error([e.code,e.message],"Sorry, unexpected error occured")})).finally((()=>{document.querySelector(".backdrop-form").classList.add("backdrop-form--is-hidden"),e.target.reset()})))};signOutUser=()=>{var e;document.body.classList.remove("is-logged"),(e=ip,ui(e).signOut()).then((()=>{document.querySelector(".js-user").classList.remove("user--is-active-btns-box")})).catch((e=>{document.body.classList.add("is-logged"),np.error([e.code,e.message],"Sorry, unexpected error occured")}))};authSentry=()=>{Ld(ip,(e=>{e?(lp.getUserData().then((e=>{e?up.set(e):up.set(Zf)})),sp.querySelector(".auth-component__user-name").textContent=`${e.displayName}`,document.body.classList.add("is-logged")):(localStorage.getItem("globalState")?up.set(JSON.parse(localStorage.getItem("globalState"))):(up.set(Zf),up.writeToLocalStorage()),sp.classList.add("signed-out"))}))};isAuthenticated=()=>new Promise((e=>{Ld(ip,(t=>{e(!!t)}))}));getCurrentUserId=()=>{const e=ip.currentUser;if(null!==e)return e.uid};updateUserName=e=>{Ad(ip.currentUser,{displayName:e}).then((()=>{this.updateUserInterface(e)})).catch((e=>{np.error([e.code,e.message],"Sorry, unexpected error occured")}))};updateUserEmail=e=>{var t,n;(t=ip.currentUser,n=e,Od(ui(t),n,null)).then((()=>{console.log("email updated"),console.log(`Your new email is: ${e}`)})).catch((e=>{np.error([e.code,e.message],"Sorry, unexpected error occured")}))};updateUserPassword=e=>{var t,n;(t=ip.currentUser,n=e,Od(ui(t),null,n)).then((()=>{console.log("password updated"),console.log(`Your new password is: ${e}`)})).catch((e=>{np.error([e.code,e.message],"Sorry, unexpected error occured")}))};getUserProfile=()=>{const e=ip.currentUser;if(null!==e)return console.log(e),e};updateUserInterface=e=>{sp.querySelector(".auth-component__user-name").textContent=`${e}`}};const ap=function(e=ns(),t){const n=Qi(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=xr("database");e&&function(e,t,n,r={}){e=ui(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Ls("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ls('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xs(Xs.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:Ar(r.mockUserToken,e.app.options.projectId);s=new Xs(t)}!function(e,t,n,r){e.repoInfo_=new io(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}(n,...e)}return n}(rp);var lp=new class{writeUserData(){const e=op.getCurrentUserId(),t=up.get();Lu(Au(ap,"users/"+e),t)}async getUserData(){const e=op.getCurrentUserId();return await Du(Au(ap,"users/"+e)).then((e=>{if(e.exists()){return{...Zf,...e.val()}}console.log("No data available")})).catch((e=>{np.error([e.code,e.message],"Sorry, unexpected error occured")}))}};let cp=JSON.parse(JSON.stringify(Zf));var up=Object.freeze(new class{get(){return cp}set(e){cp=JSON.parse(JSON.stringify(e)),this.saveData()}shoppingList(){return cp.shoppingList}theme(){return cp.read}setShoppingList(e){cp.shoppingList=[...e],this.saveData()}setTheme(e){cp.theme=e,this.saveData()}writeToLocalStorage(){localStorage.setItem("globalState",JSON.stringify(cp))}async saveData(){await op.isAuthenticated()?lp.writeUserData():this.writeToLocalStorage()}});const hp=document.querySelector(".sign-up-form"),dp=document.querySelector(".sign-in-form"),fp=document.querySelector(".user__log-out-btn"),pp=document.querySelector(".test-button"),gp=document.querySelector(".state-button");op.authSentry(),hp.addEventListener("submit",op.signUp),dp.addEventListener("submit",op.signIn),pp.addEventListener("click",(()=>{op.getUserProfile()})),gp.addEventListener("click",(()=>{console.log(up.get())})),fp.addEventListener("click",(()=>{op.signOutUser()})),i("496a9");
//# sourceMappingURL=index.ee495b70.js.map
