(this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[]).push([[52],{547:function(e,a,t){"use strict";var n=t(585);t(586);n.initializeApp({apiKey:"AIzaSyDT8vtFi9U-hOJw6Gk6k8LOx9Jya8KBDgc",authDomain:"ukrmemeswiki.firebaseapp.com",databaseURL:"https://ukrmemeswiki.firebaseio.com",projectId:"ukrmemeswiki",storageBucket:"",messagingSenderId:"925209845247",appId:"1:925209845247:web:aab80a95594b9e604f1bca",measurementId:"G-5MV7LGZSB9"});var c=n.firestore();a.a=c},908:function(e,a,t){"use strict";t.r(a);var n=t(535),c=t(2),i=t.n(c),r=t(547),s=t(499),o=t(500),l=t(504),m=t(507),u=t(505);a.default=function(e){var a=e.match.params.name,t=Object(c.useState)(""),d=Object(n.a)(t,2),f=d[0],k=d[1];return Object(c.useEffect)((function(){r.a.collection("articles").doc(a).get().then((function(e){if(e.exists){console.log("Document data:",e.data());var a=e.data().text;k(a)}else console.log("No such document!")})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]),i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(s.a,null,i.a.createElement(o.a,{xs:"12",sm:"12"},i.a.createElement(l.a,null,i.a.createElement(m.a,null,i.a.createElement("strong",null,a)),i.a.createElement(u.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:f}}))))))}}}]);
//# sourceMappingURL=52.e54515eb.chunk.js.map