"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(689),u=n(87),o=n(791),l=n(412),p=n(307),h=n(184);function d(){var e,t,n=(0,i.UO)().movieId,c=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",d=(0,o.useState)([]),f=(0,a.Z)(d,2),v=f[0],x=f[1];(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Mc)(n);case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error :>> ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var m=v.poster_path,j=v.title,w=v.vote_average,g=v.overview,b=v.release_date,k=v.genres,y=new Date(b).getFullYear();return(0,h.jsxs)(p.FE,{children:[(0,h.jsx)(p.hb,{to:c,children:"Go back"}),(0,h.jsxs)("h3",{children:["".concat(j," (").concat(y,")")," "]}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(m),alt:"".concat(j)}),(0,h.jsxs)("p",{children:["User Score: ","".concat(Math.round(10*w)),"%"]}),(0,h.jsx)("h3",{children:"Owerview"}),(0,h.jsx)("p",{children:"".concat(g)}),(0,h.jsx)("h3",{children:"Genres"}),k&&(0,h.jsx)("p",{children:k.map((function(e){return e.name})).join(" ")}),(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading subpage..."}),children:(0,h.jsx)(i.j3,{})})]})}},412:function(e,t,n){n.d(t,{E3:function(){return o},Mc:function(){return p},Tg:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(243);function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"avatar",e.next=3,s.Z.get("/search/movie?query=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"e55542ecb6aab3d889d16953eac82937"}}}]);
//# sourceMappingURL=961.492f4648.chunk.js.map