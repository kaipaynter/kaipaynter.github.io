(self.webpackChunkkaipaynter_github_io=self.webpackChunkkaipaynter_github_io||[]).push([[901],{4852:function(e){"use strict";e.exports=Object.assign},1349:function(e){e.exports={siteTitle:"Kai Paynter",siteDescription:"Kai Paynter - Famous black female singer and black female actress",manifestName:"Kai Paynter",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/images/Kai_Paynter_Logo.jpg",heading:"Kai Paynter",subHeading:"Kai Paynter",socialLinks:[{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/kai_paynter"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/kai_paynter"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/kaipaynter"}]}},7134:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(4578),a=n(7294),i=n(4593),o=n(1883);function c(){return a.createElement("section",null,a.createElement("h2",null,"Get in touch"),a.createElement("form",{method:"post",action:"https://getform.io/f/691a6df1-eaa3-47d2-84b9-a5727ec0d386"},a.createElement("div",{className:"fields"},a.createElement("div",{className:"field half"},a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),a.createElement("div",{className:"field half"},a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),a.createElement("div",{className:"field"},a.createElement("textarea",{name:"message",id:"message",placeholder:"Message"}))),a.createElement("ul",{className:"actions"},a.createElement("li",null,a.createElement("input",{type:"submit",value:"Send",className:"primary"})))))}var l=n(1349),u=n.n(l);function s(){return a.createElement("footer",{id:"footer"},a.createElement("div",{className:"inner"},a.createElement(c,null),a.createElement("section",null,a.createElement("h2",null,"Follow"),a.createElement("ul",{className:"icons"},u().socialLinks.map((e=>{const{icon:t,name:n,url:r}=e;return a.createElement("li",{key:r},a.createElement("a",{href:r,className:"icon "+t,target:"_blank",rel:"noreferrer"},a.createElement("span",{className:"label"},n)))})))),a.createElement("ul",{className:"copyright"},a.createElement("li",null,"© Kai Paynter. All rights reserved"))))}function f(e){let{onClose:t=(()=>{})}=e;return a.createElement("nav",{id:"menu"},a.createElement("div",{className:"inner"},a.createElement("h2",null,"Menu"),a.createElement("ul",null,a.createElement("li",null,a.createElement(o.Link,{to:"/"},"Home")),a.createElement("li",null,a.createElement(o.Link,{to:"/Performer"},"Performer")),a.createElement("li",null,a.createElement(o.Link,{to:"/Socials"},"Socials")),a.createElement("li",null,a.createElement(o.Link,{to:"/Gallery"},"Gallery")),a.createElement("li",null,a.createElement(o.Link,{to:"/Contact"},"Contact")))),a.createElement("a",{className:"close",onClick:e=>{e.preventDefault(),t()},href:"#menu"},"Close"))}function p(e){let{onMenuClick:t=(()=>{})}=e;return a.createElement("nav",null,a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"#menu",onClick:e=>{e.preventDefault(),t()}},"Menu"))))}var m=n.p+"static/Kai_Paynter_logo_tight-bafc746d3a52a488dd9cef2963ddbb7f.jpg";function d(e){let{sections:t=[]}=e;const{0:n,1:r}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("header",{id:"header"},a.createElement("div",{className:"inner"},a.createElement(o.Link,{to:"/",className:"logo"},a.createElement("span",{className:"large"},a.createElement("img",{src:m,alt:"Logo"}))),a.createElement(p,{onMenuClick:()=>r(!n)}))),a.createElement("div",{className:n?"is-menu-visible":" "},a.createElement(f,{onClose:()=>r(!n)})))}var y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){const{children:e}=this.props,{isPreloaded:t}=this.state;return a.createElement(o.StaticQuery,{query:"3649515864",render:n=>a.createElement(a.Fragment,null,a.createElement(i.Z,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Kai Paynter"},{name:"keywords",content:"kai paynter, kaipaynter, actress, coach, performer, singer"}]},a.createElement("html",{lang:"en"})),a.createElement("div",{className:t?"main-body is-preload":"main-body"},a.createElement("div",{id:"wrapper"},a.createElement(d,null),e,a.createElement(s,null))))})},t}(a.Component)},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!o.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],o[u[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4593:function(e,t,n){"use strict";var r,a,i,o,c=n(5697),l=n.n(c),u=n(3524),s=n.n(u),f=n(9590),p=n.n(f),m=n(7294),d=n(4852),y=n.n(d),h="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",w="href",C="http-equiv",A="innerHTML",O="itemprop",S="name",k="property",P="rel",j="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",x="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",D=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=J(e,v.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},G=function(e){return J(e,_)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===P&&"canonical"===e[n].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==E&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(v.BODY,r),le(v.HTML,a),ce(f,p);var m={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,o),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),l(e,d,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==o.join(",")&&n.setAttribute(H,o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+H+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,a=fe(n,r),[m.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=oe(t);return a?"<"+e+" "+H+'="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+" "+H+'="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===A||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===F.indexOf(e);return t+"<"+e+" "+H+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(b,a,r),link:pe(v.LINK,i,r),meta:pe(v.META,o,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,l,r),style:pe(v.STYLE,u,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},de=s()((function(e){return{baseTag:$([w,L],e),bodyAttributes:V(h,e),defer:J(e,x),encode:J(e,M),htmlAttributes:V(b,e),linkTags:Q(v.LINK,[P,w],e),metaTags:Q(v.META,[S,T,C,k,O],e),noscriptTags:Q(v.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:Q(v.SCRIPT,[j,A],e),styleTags:Q(v.STYLE,[E],e),title:Z(e),titleAttributes:V(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),ye=(a=de,o=i=function(e){function t(){return B(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case v.TITLE:return U({},a,((t={})[r.type]=o,t.titleAttributes=U({},i),t));case v.BODY:return U({},a,{bodyAttributes:U({},i)});case v.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind,t.Z=ye},3524:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=fa96f03cd2089c66cf60fc7acd65f2cb59560e64-38d202c30d201a2a7f81.js.map