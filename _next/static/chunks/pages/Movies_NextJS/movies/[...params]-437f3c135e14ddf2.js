(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{5376:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Movies_NextJS/movies/[...params]",function(){return n(4125)}])},666:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var s=n(5893),t=n(9008);function i(e){var a=e.title;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.default,{children:(0,s.jsxs)("title",{children:[a," | Next Movies"]})})})}},4125:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return b}});var s=n(4051),t=n.n(s),i=n(5893),r=n(5988),c=n.n(r),d=n(1163),o=n(7294),x=n(2751),u=n(666);function l(e,a,n,s,t,i,r){try{var c=e[i](r),d=c.value}catch(o){return void n(o)}c.done?a(d):Promise.resolve(d).then(s,t)}function b(){var e=(0,d.useRouter)(),a=(0,o.useState)(),n=a[0],s=a[1];return(0,o.useEffect)((function(){var a;(a=t().mark((function a(){var n;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/movies/".concat(e.query.params[1]));case 2:return a.next=4,a.sent.json();case 4:n=a.sent,s(n);case 6:case"end":return a.stop()}}),a)})),function(){var e=this,n=arguments;return new Promise((function(s,t){var i=a.apply(e,n);function r(e){l(i,s,t,r,c,"next",e)}function c(e){l(i,s,t,r,c,"throw",e)}r(void 0)}))})()}),[]),(0,i.jsxs)("div",{className:"jsx-37bdec4aba472d08",children:[(0,i.jsx)(x.Z,{}),(0,i.jsxs)("div",{className:"jsx-37bdec4aba472d08 container",children:[n&&(0,i.jsx)(u.Z,{title:n.original_title}),(0,i.jsxs)("h4",{className:"jsx-37bdec4aba472d08",children:[n&&"* "+n.original_title,!n&&"loading....",n&&(0,i.jsx)("div",{className:"jsx-37bdec4aba472d08 movie",children:(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),className:"jsx-37bdec4aba472d08"})})]}),(0,i.jsx)("div",{className:"jsx-37bdec4aba472d08 review",children:n&&n.overview})]}),(0,i.jsx)("div",{className:"jsx-37bdec4aba472d08 etc",children:n&&(0,i.jsxs)("div",{className:"jsx-37bdec4aba472d08",children:[(0,i.jsxs)("div",{className:"jsx-37bdec4aba472d08",children:[". Genres : ",n.genres.map((function(e){return e.name+", "}))]}),(0,i.jsxs)("div",{className:"jsx-37bdec4aba472d08",children:[". Rate : ",n.vote_average,", Language : ",n.original_language,", Release Date : ",n.release_date]}),(0,i.jsxs)("div",{className:"jsx-37bdec4aba472d08",children:[". Homepage : ",(0,i.jsx)("a",{href:n.homepage,className:"jsx-37bdec4aba472d08",children:n.homepage})]})]})}),(0,i.jsx)(c(),{id:"37bdec4aba472d08",children:".container.jsx-37bdec4aba472d08{max-width:520px;\nwidth:100%;\nmargin:0 auto;\ndisplay:grid;\ngrid-template-columns:1fr 1fr;\npadding:20px, 0px, 20px, 20px;\ngap:20px}\n.movie.jsx-37bdec4aba472d08 img.jsx-37bdec4aba472d08{max-width:100%;\nborder-radius:12px;\n-webkit-transition:-webkit-transform 0.2s ease-in-out;\ntransition:transform 0.2s ease-in-out;\nbox-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}\n.review.jsx-37bdec4aba472d08{padding-top:40px;\nfont-size:15px;\ntext-align:left}\n.etc.jsx-37bdec4aba472d08{max-width:520px;\nwidth:100%;\nmargin:0 auto}"})]})}},9008:function(e,a,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return a=5376,e(e.s=a);var a}));var a=e.O();_N_E=a}]);