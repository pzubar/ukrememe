(this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[]).push([[33],{502:function(e,t,a){"use strict";var n=a(18),r=a(48),o=a(494),l=a(36),c=a(2),i=a.n(c),s=a(61),u=a.n(s),f=a(492),d=a.n(f),b=a(493),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,l=e.className,c=e.close,s=e.cssModule,u=e.color,f=e.outline,p=e.size,m=e.tag,h=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof g.children&&(g.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(f?"-outline":"")+"-"+u,O=Object(b.l)(d()(l,{close:c},c||"btn",c||v,!!p&&"btn-"+p,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),s);g.href&&"button"===m&&(m="a");var y=c?"Close":null;return i.a.createElement(m,Object(n.a)({type:"button"===m&&g.onClick?"button":void 0},g,{className:O,ref:h,onClick:this.onClick,"aria-label":a||y}))},t}(i.a.Component);m.propTypes=p,m.defaultProps={color:"secondary",tag:"button"},t.a=m},529:function(e,t,a){"use strict";var n=a(18),r=a(48),o=a(494),l=a(36),c=a(2),i=a.n(c),s=a(61),u=a.n(s),f=a(492),d=a.n(f),b=a(493),p={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:b.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,l=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,f=e.addon,p=e.plaintext,m=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),O=u||("select"===o||"textarea"===o?o:"input"),y="form-control";p?(y+="-plaintext",O=u||"input"):"file"===o?y+="-file":g&&(y=f?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(b.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(b.l)(d()(t,s&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),a);return("input"===O||u&&"function"===typeof u)&&(h.type=o),h.children&&!p&&"select"!==o&&"string"===typeof O&&"select"!==O&&(Object(b.r)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(O,Object(n.a)({},h,{ref:m,className:j}))},t}(i.a.Component);m.propTypes=p,m.defaultProps={type:"text"},t.a=m},547:function(e,t,a){"use strict";var n=a(585);a(586);n.initializeApp({apiKey:"AIzaSyDT8vtFi9U-hOJw6Gk6k8LOx9Jya8KBDgc",authDomain:"ukrmemeswiki.firebaseapp.com",databaseURL:"https://ukrmemeswiki.firebaseio.com",projectId:"ukrmemeswiki",storageBucket:"",messagingSenderId:"925209845247",appId:"1:925209845247:web:aab80a95594b9e604f1bca",measurementId:"G-5MV7LGZSB9"});var r=n.firestore();t.a=r},601:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},644:function(e,t,a){"use strict";var n=a(18),r=a(48),o=a(2),l=a.n(o),c=a(61),i=a.n(c),s=a(492),u=a.n(s),f=a(493),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:f.p,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,o=e.row,c=e.disabled,i=e.check,s=e.inline,d=e.tag,b=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(f.l)(u()(t,!!o&&"row",i?"form-check":"form-group",!(!i||!s)&&"form-check-inline",!(!i||!c)&&"disabled"),a);return"fieldset"===d&&(b.disabled=c),l.a.createElement(d,Object(n.a)({},b,{className:p}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},645:function(e,t,a){"use strict";var n=a(18),r=a(48),o=a(2),l=a.n(o),c=a(61),i=a.n(c),s=a(492),u=a.n(s),f=a(495),d=a.n(f),b=a(493),p=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:b.p,className:i.a.string,cssModule:i.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,o=e.hidden,c=e.widths,i=e.tag,s=e.check,f=e.size,p=e.for,m=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];c.forEach((function(t,n){var r=e[t];if(delete m[t],r||""===r){var o,l=!n;if(d()(r)){var c,i=l?"-":"-"+t+"-";o=v(l,t,r.size),h.push(Object(b.l)(u()(((c={})[o]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),a)}else o=v(l,t,r),h.push(o)}}));var g=Object(b.l)(u()(t,!!o&&"sr-only",!!s&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return l.a.createElement(i,Object(n.a)({htmlFor:p},m,{className:g}))};O.propTypes=h,O.defaultProps=g,t.a=O},947:function(e,t,a){"use strict";a.r(t);var n=a(601);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=a(535),l=a(2),c=a.n(l),i=a(547),s=a(499),u=a(500),f=a(504),d=a(507),b=a(505),p=a(644),m=a(645),h=a(529),g=a(502);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.default=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],O=t[1],y=Object(l.useState)(""),j=Object(o.a)(y,2),k=j[0],E=j[1],w=Object(l.useState)(""),z=Object(o.a)(w,2),x=z[0],C=z[1];Object(l.useEffect)((function(){i.a.collection("categories").get().then((function(e){var t=[];e.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({name:e.id},e.data()))})),O(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]);return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(s.a,null,c.a.createElement(u.a,{xs:"12",sm:"6"},c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement("strong",null,"Credit Card"),c.a.createElement("small",null," Form")),c.a.createElement(b.a,null,c.a.createElement(s.a,null,c.a.createElement(u.a,{xs:"12"},c.a.createElement(p.a,null,c.a.createElement(m.a,{htmlFor:"name"},"\u041d\u0430\u0437\u0432\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457"),c.a.createElement(h.a,{type:"text",id:"name",value:k,placeholder:"",required:!0,onChange:function(e){var t=e.target;return E(t.value)}})))),c.a.createElement(s.a,null,c.a.createElement(u.a,{xs:"12"},c.a.createElement(p.a,null,c.a.createElement(m.a,{htmlFor:"name"},"\u041d\u0430\u0437\u0432\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457"),c.a.createElement(h.a,{type:"text",id:"name",value:x,placeholder:"",required:!0,onChange:function(e){var t=e.target;return C(t.value)}})))),c.a.createElement(s.a,null,c.a.createElement(g.a,{block:!0,color:"primary",disabled:!k||!x,onClick:function(){i.a.collection("categories").doc(k).set({type:x}).then((function(){O([].concat(Object(n.a)(a),[{type:x,name:k}])),E(""),C("")})).catch(alert)}},"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"))))),c.a.createElement(u.a,null,c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement("strong",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457")),c.a.createElement(b.a,null,a.map((function(e){var t=e.name,a=e.type;return c.a.createElement("div",null,c.a.createElement("b",null,t,":")," (",a,")")})))))))}}}]);
//# sourceMappingURL=33.7ac562ae.chunk.js.map