(this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[]).push([[28],{495:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},499:function(e,a,l){"use strict";var t=l(18),c=l(48),r=l(2),m=l.n(r),n=l(61),o=l.n(n),s=l(492),i=l.n(s),d=l(493),u={tag:d.p,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},E=function(e){var a=e.className,l=e.cssModule,r=e.noGutters,n=e.tag,o=e.form,s=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(d.l)(i()(a,r?"no-gutters":null,o?"form-row":"row"),l);return m.a.createElement(n,Object(t.a)({},s,{className:u}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},500:function(e,a,l){"use strict";var t=l(18),c=l(48),r=l(495),m=l.n(r),n=l(2),o=l.n(n),s=l(61),i=l.n(s),d=l(492),u=l.n(d),E=l(493),h=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:h,offset:h})]),f={tag:E.p,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},p=function(e){var a=e.className,l=e.cssModule,r=e.widths,n=e.tag,s=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,t){var c=e[a];if(delete s[a],c||""===c){var r=!t;if(m()(c)){var n,o=r?"-":"-"+a+"-",d=x(r,a,c.size);i.push(Object(E.l)(u()(((n={})[d]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),l))}else{var h=x(r,a,c);i.push(h)}}})),i.length||i.push("col");var d=Object(E.l)(u()(a,i),l);return o.a.createElement(n,Object(t.a)({},s,{className:d}))};p.propTypes=f,p.defaultProps=N,a.a=p},504:function(e,a,l){"use strict";var t=l(18),c=l(48),r=l(2),m=l.n(r),n=l(61),o=l.n(n),s=l(492),i=l.n(s),d=l(493),u={tag:d.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.color,n=e.body,o=e.inverse,s=e.outline,u=e.tag,E=e.innerRef,h=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.l)(i()(a,"card",!!o&&"text-white",!!n&&"card-body",!!r&&(s?"border":"bg")+"-"+r),l);return m.a.createElement(u,Object(t.a)({},h,{className:b,ref:E}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},505:function(e,a,l){"use strict";var t=l(18),c=l(48),r=l(2),m=l.n(r),n=l(61),o=l.n(n),s=l(492),i=l.n(s),d=l(493),u={tag:d.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,n=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.l)(i()(a,"card-body"),l);return m.a.createElement(n,Object(t.a)({},o,{className:s,ref:r}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},507:function(e,a,l){"use strict";var t=l(18),c=l(48),r=l(2),m=l.n(r),n=l(61),o=l.n(n),s=l(492),i=l.n(s),d=l(493),u={tag:d.p,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,l=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.l)(i()(a,"card-header"),l);return m.a.createElement(r,Object(t.a)({},n,{className:o}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},565:function(e,a,l){"use strict";var t=l(18),c=l(48),r=l(2),m=l.n(r),n=l(61),o=l.n(n),s=l(492),i=l.n(s),d=l(493),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.p,responsiveTag:d.p,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var a=e.className,l=e.cssModule,r=e.size,n=e.bordered,o=e.borderless,s=e.striped,u=e.dark,E=e.hover,h=e.responsive,b=e.tag,f=e.responsiveTag,N=e.innerRef,x=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),p=Object(d.l)(i()(a,"table",!!r&&"table-"+r,!!n&&"table-bordered",!!o&&"table-borderless",!!s&&"table-striped",!!u&&"table-dark",!!E&&"table-hover"),l),k=m.a.createElement(b,Object(t.a)({},x,{ref:N,className:p}));if(h){var v=Object(d.l)(!0===h?"table-responsive":"table-responsive-"+h,l);return m.a.createElement(f,{className:v},k)}return k};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},920:function(e,a,l){"use strict";l.r(a);var t=l(148),c=l(149),r=l(151),m=l(150),n=l(152),o=l(2),s=l.n(o),i=l(499),d=l(500),u=l(504),E=l(507),h=l(505),b=l(565),f=l(552),N=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(n.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,null,s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch default"),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"success",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"warning",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"info",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"danger",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"light",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"dark",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"primary",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch pills"),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"disabled"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt"'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"label"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"success",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"warning",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"info",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"danger",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"light",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"dark",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"success",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"info",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"light",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative - pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"success",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"warning",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"info",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"danger",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"light",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"dark",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.m,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Sizes"),s.a.createElement(h.a,{className:"p-0"},s.a.createElement(b.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Size"),s.a.createElement("th",null,"Example"),s.a.createElement("th",null,"Props"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Large"),s.a.createElement("td",null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","lg"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Normal"),s.a.createElement("td",null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),s.a.createElement("td",null,"-")),s.a.createElement("tr",null,s.a.createElement("td",null,"Small"),s.a.createElement("td",null,s.a.createElement(f.m,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","sm"))))))))))}}]),a}(o.Component);a.default=N}}]);
//# sourceMappingURL=28.ce265fd1.chunk.js.map