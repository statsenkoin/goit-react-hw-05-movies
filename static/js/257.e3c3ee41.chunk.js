"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,s,i,u=t(861),o=t(439),p=t(757),d=t.n(p),l=t(791),h=t(87),f=t(689),x=t(412),v=t(16),m=t(168),w=t(444),j=w.ZP.div(r||(r=(0,m.Z)(["\n  max-width: 1000px;\n  padding: 20px 0;\n  border-top: 2px solid #888;\n"]))),Z=w.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n"]))),g=w.ZP.img(c||(c=(0,m.Z)(["\n  width: 250px;\n  height: fit-content;\n\n  @media (max-width: 768px) {\n    width: 150px;\n  }\n"]))),b=w.ZP.div(s||(s=(0,m.Z)(["\n  padding: 20px;\n"]))),k=w.ZP.h3(i||(i=(0,m.Z)(["\n  margin: 0;\n  font-size: 24px;\n  text-align: center;\n  text-decoration: underline;\n"]))),y=t(184);function _(){var n,e,t=(0,l.useState)({}),r=(0,o.Z)(t,2),a=r[0],c=r[1],s=(0,f.UO)().movieId,i=(0,f.TH)(),p=(0,l.useRef)(null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),m=a.poster_path,w=a.title,_=a.vote_average,P=a.overview,U=a.release_date,C=a.genres,E=new Date(U).getFullYear();return(0,l.useEffect)((function(){function n(){return(n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.Mc)(s);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error :>> ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[s]),(0,y.jsxs)(v.FE,{children:[(0,y.jsx)(v.hb,{to:p.current,children:"Go back"}),(0,y.jsx)(j,{children:(0,y.jsxs)(Z,{children:[(0,y.jsx)(g,{src:"https://image.tmdb.org/t/p/w300/".concat(m),alt:"".concat(w)}),(0,y.jsxs)(b,{children:[(0,y.jsxs)(k,{children:["".concat(w," (").concat(E,")")," "]}),(0,y.jsxs)("p",{children:["User Score: ","".concat(Math.round(10*_)),"%"]}),(0,y.jsx)("h3",{children:"Owerview"}),(0,y.jsx)("p",{children:"".concat(P)}),(0,y.jsx)("h3",{children:"Genres"}),C&&(0,y.jsx)("p",{children:C.map((function(n){return n.name})).join(" ")})]})]})}),(0,y.jsxs)(j,{children:[(0,y.jsx)("h3",{children:"Additional information"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,y.jsx)(l.Suspense,{fallback:(0,y.jsx)(v.h2,{}),children:(0,y.jsx)(j,{children:(0,y.jsx)(f.j3,{})})})]})}},412:function(n,e,t){t.d(e,{E3:function(){return o},Hx:function(){return x},Mc:function(){return d},Tg:function(){return i},uV:function(){return h}});var r=t(861),a=t(757),c=t.n(a),s=t(243);function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"e55542ecb6aab3d889d16953eac82937"}}}]);
//# sourceMappingURL=257.e3c3ee41.chunk.js.map