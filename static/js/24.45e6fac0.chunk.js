(this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[]).push([[24],{495:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},499:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.p,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},f=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.l)(m()(a,n?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(s,Object(l.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},500:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(495),c=t.n(n),s=t(2),o=t.n(s),i=t(61),m=t.n(i),u=t(492),d=t.n(u),f=t(493),p=m.a.oneOfType([m.a.number,m.a.string]),g=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:p,offset:p})]),b={tag:f.p,xs:g,sm:g,md:g,lg:g,xl:g,className:m.a.string,cssModule:m.a.object,widths:m.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach((function(a,l){var r=e[a];if(delete i[a],r||""===r){var n=!l;if(c()(r)){var s,o=n?"-":"-"+a+"-",u=N(n,a,r.size);m.push(Object(f.l)(d()(((s={})[u]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s)),t))}else{var p=N(n,a,r);m.push(p)}}})),m.length||m.push("col");var u=Object(f.l)(d()(a,m),t);return o.a.createElement(s,Object(l.a)({},i,{className:u}))};h.propTypes=b,h.defaultProps=E,a.a=h},502:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(494),c=t(36),s=t(2),o=t.n(s),i=t(61),m=t.n(i),u=t(492),d=t.n(u),f=t(493),p={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.p,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(n.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,m=e.color,u=e.outline,p=e.size,g=e.tag,b=e.innerRef,E=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var N="btn"+(u?"-outline":"")+"-"+m,h=Object(f.l)(d()(c,{close:s},s||"btn",s||N,!!p&&"btn-"+p,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===g&&(g="a");var y=s?"Close":null;return o.a.createElement(g,Object(l.a)({type:"button"===g&&E.onClick?"button":void 0},E,{className:h,ref:b,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);g.propTypes=p,g.defaultProps={color:"secondary",tag:"button"},a.a=g},504:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,o=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.l)(m()(a,"card",!!o&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(l.a)({},p,{className:g,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},505:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.l)(m()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},o,{className:i,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},507:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.p,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.l)(m()(a,"card-header"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},537:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.p,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.l)(m()(a,"card-footer"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},934:function(e,a,t){"use strict";t.r(a);var l=t(148),r=t(149),n=t(151),c=t(150),s=t(152),o=t(2),i=t.n(o),m=t(499),u=t(500),d=t(504),f=t(507),p=t(505),g=t(897),b=t(537),E=t(502),N=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(m.a,null,i.a.createElement(u.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/badge/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(p.a,null,i.a.createElement("h1",null,"Heading ",i.a.createElement(g.a,{color:"secondary"},"New")),i.a.createElement("h2",null,"Heading ",i.a.createElement(g.a,{color:"secondary"},"New")),i.a.createElement("h3",null,"Heading ",i.a.createElement(g.a,{color:"secondary"},"New")),i.a.createElement("h4",null,"Heading ",i.a.createElement(g.a,{color:"secondary"},"New")),i.a.createElement("h5",null,"Heading ",i.a.createElement(g.a,{color:"secondary"},"New")),i.a.createElement("h6",null,"Heading ",i.a.createElement(g.a,{color:"secondary"},"New"))),i.a.createElement(b.a,null,i.a.createElement(E.a,{color:"primary",outline:!0},"Notifications ",i.a.createElement(g.a,{color:"secondary",pill:!0,style:{position:"static"}},"9"))))),i.a.createElement(u.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"contextual variations")),i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"mr-1",color:"primary"},"Primary"),i.a.createElement(g.a,{className:"mr-1",color:"secondary"},"Secondary"),i.a.createElement(g.a,{className:"mr-1",color:"success"},"Success"),i.a.createElement(g.a,{className:"mr-1",color:"danger"},"Danger"),i.a.createElement(g.a,{className:"mr-1",color:"warning"},"Warning"),i.a.createElement(g.a,{className:"mr-1",color:"info"},"Info"),i.a.createElement(g.a,{className:"mr-1",color:"light"},"Light"),i.a.createElement(g.a,{className:"mr-1",color:"dark"},"Dark"))),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"pill badges")),i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"mr-1",color:"primary",pill:!0},"Primary"),i.a.createElement(g.a,{className:"mr-1",color:"secondary",pill:!0},"Secondary"),i.a.createElement(g.a,{className:"mr-1",color:"success",pill:!0},"Success"),i.a.createElement(g.a,{className:"mr-1",color:"danger",pill:!0},"Danger"),i.a.createElement(g.a,{className:"mr-1",color:"warning",pill:!0},"Warning"),i.a.createElement(g.a,{className:"mr-1",color:"info",pill:!0},"Info"),i.a.createElement(g.a,{className:"mr-1",color:"light",pill:!0},"Light"),i.a.createElement(g.a,{className:"mr-1",color:"dark",pill:!0},"Dark"))),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"links")),i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"mr-1",href:"#",color:"primary"},"Primary"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"secondary"},"Secondary"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"success"},"Success"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"danger"},"Danger"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"warning"},"Warning"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"info"},"Info"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"light"},"Light"),i.a.createElement(g.a,{className:"mr-1",href:"#",color:"dark",pill:!0},"Dark"))))))}}]),a}(o.Component);a.default=N}}]);
//# sourceMappingURL=24.45e6fac0.chunk.js.map