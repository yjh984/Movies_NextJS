(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{337:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/[...params]",function(){return s(4803)}])},666:function(e,n,s){"use strict";s.d(n,{Z:function(){return r}});var a=s(5893),t=s(9008);function r(e){var n=e.title;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.default,{children:(0,a.jsxs)("title",{children:[n," | Next Movies"]})})})}},4803:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var a=s(4051),t=s.n(a),r=s(5893),i=s(5988),c=s.n(i),o=s(1163),u=s(7294),x=s(666);function l(e,n,s,a,t,r,i){try{var c=e[r](i),o=c.value}catch(u){return void s(u)}c.done?n(o):Promise.resolve(o).then(a,t)}function d(){var e=(0,o.useRouter)(),n=(0,u.useState)(),s=n[0],a=n[1];return(0,u.useEffect)((function(){var n;(n=t().mark((function n(){var s;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/movies/".concat(e.query.params[1]));case 2:return n.next=4,n.sent.json();case 4:s=n.sent,a(s);case 6:case"end":return n.stop()}}),n)})),function(){var e=this,s=arguments;return new Promise((function(a,t){var r=n.apply(e,s);function i(e){l(r,a,t,i,c,"next",e)}function c(e){l(r,a,t,i,c,"throw",e)}i(void 0)}))})()}),[]),(0,r.jsxs)("div",{className:"jsx-4604b55113a03250",children:[(0,r.jsxs)("div",{className:"jsx-4604b55113a03250 container",children:[s&&(0,r.jsx)(x.Z,{title:s.original_title}),(0,r.jsxs)("h4",{className:"jsx-4604b55113a03250",children:[s&&s.original_title,!s&&"loading....",s&&(0,r.jsx)("div",{className:"jsx-4604b55113a03250 movie",children:(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),className:"jsx-4604b55113a03250"})})]}),(0,r.jsx)("div",{className:"jsx-4604b55113a03250 review",children:s&&s.overview})]}),(0,r.jsx)("div",{className:"jsx-4604b55113a03250 etc",children:s&&(0,r.jsxs)("div",{className:"jsx-4604b55113a03250",children:[(0,r.jsxs)("div",{className:"jsx-4604b55113a03250",children:[". Genres : ",s.genres.map((function(e){return e.name+", "}))]}),(0,r.jsxs)("div",{className:"jsx-4604b55113a03250",children:[". Rate : ",s.vote_average,", Language : ",s.original_language,", Release Date : ",s.release_date]}),(0,r.jsxs)("div",{className:"jsx-4604b55113a03250",children:[". Homepage : ",(0,r.jsx)("a",{href:s.homepage,className:"jsx-4604b55113a03250",children:s.homepage})]})]})}),(0,r.jsx)(c(),{id:"4604b55113a03250",children:".container.jsx-4604b55113a03250{display:grid;\ngrid-template-columns:1fr 1fr;\npadding:20px, 0px, 20px, 20px;\ngap:20px}\n.movie.jsx-4604b55113a03250 img.jsx-4604b55113a03250{max-width:100%;\nborder-radius:12px;\n-webkit-transition:-webkit-transform 0.2s ease-in-out;\ntransition:transform 0.2s ease-in-out;\nbox-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}\n.review.jsx-4604b55113a03250{padding-top:40px;\nfont-size:15px;\ntext-align:left}"})]})}},9008:function(e,n,s){e.exports=s(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=337,e(e.s=n);var n}));var n=e.O();_N_E=n}]);