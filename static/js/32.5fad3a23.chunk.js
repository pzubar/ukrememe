(this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[]).push([[32],{495:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},499:function(e,t,a){"use strict";var r=a(18),n=a(48),s=a(2),o=a.n(s),c=a(61),l=a.n(c),i=a(492),u=a.n(i),f=a(493),m={tag:f.p,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},d=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,c=e.tag,l=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(f.l)(u()(t,s?"no-gutters":null,l?"form-row":"row"),a);return o.a.createElement(c,Object(r.a)({},i,{className:m}))};d.propTypes=m,d.defaultProps={tag:"div"},t.a=d},500:function(e,t,a){"use strict";var r=a(18),n=a(48),s=a(495),o=a.n(s),c=a(2),l=a.n(c),i=a(61),u=a.n(i),f=a(492),m=a.n(f),d=a(493),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:b,offset:b})]),g={tag:d.p,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,s=e.widths,c=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach((function(t,r){var n=e[t];if(delete i[t],n||""===n){var s=!r;if(o()(n)){var c,l=s?"-":"-"+t+"-",f=y(s,t,n.size);u.push(Object(d.l)(m()(((c={})[f]=n.size||""===n.size,c["order"+l+n.order]=n.order||0===n.order,c["offset"+l+n.offset]=n.offset||0===n.offset,c)),a))}else{var b=y(s,t,n);u.push(b)}}})),u.length||u.push("col");var f=Object(d.l)(m()(t,u),a);return l.a.createElement(c,Object(r.a)({},i,{className:f}))};j.propTypes=g,j.defaultProps=v,t.a=j},504:function(e,t,a){"use strict";var r=a(18),n=a(48),s=a(2),o=a.n(s),c=a(61),l=a.n(c),i=a(492),u=a.n(i),f=a(493),m={tag:f.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,s=e.color,c=e.body,l=e.inverse,i=e.outline,m=e.tag,d=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(f.l)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),a);return o.a.createElement(m,Object(r.a)({},b,{className:p,ref:d}))};d.propTypes=m,d.defaultProps={tag:"div"},t.a=d},505:function(e,t,a){"use strict";var r=a(18),n=a(48),s=a(2),o=a.n(s),c=a(61),l=a.n(c),i=a(492),u=a.n(i),f=a(493),m={tag:f.p,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,c=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(f.l)(u()(t,"card-body"),a);return o.a.createElement(c,Object(r.a)({},l,{className:i,ref:s}))};d.propTypes=m,d.defaultProps={tag:"div"},t.a=d},535:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,s=l}finally{try{r||null==c.return||c.return()}finally{if(n)throw s}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return r}))},906:function(e,t,a){"use strict";a.r(t);var r=a(535),n=a(2),s=a.n(n),o=a(499),c=a(500),l=a(504),i=a(505);t.default=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],u=(t[1],Object(n.useState)(0)),f=Object(r.a)(u,2),m=f[0];f[1];return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(o.a,{style:{marginTop:20}},s.a.createElement(c.a,{xs:"12",sm:"6",lg:"6"},s.a.createElement(l.a,{className:"text-white bg-info"},s.a.createElement(i.a,null,s.a.createElement("div",{className:"text-value"},a),s.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0435\u0439")))),s.a.createElement(c.a,{xs:"12",sm:"6",lg:"6"},s.a.createElement(l.a,{className:"text-white bg-primary"},s.a.createElement(i.a,null,s.a.createElement("div",{className:"text-value"},m),s.a.createElement("div",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0439"))))))}}}]);
//# sourceMappingURL=32.5fad3a23.chunk.js.map