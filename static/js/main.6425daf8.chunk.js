(this.webpackJsonpjulia=this.webpackJsonpjulia||[]).push([[0],{10:function(e,t,n){e.exports={section_paintings:"Paintings_section_paintings__1RD5X",paint_container:"Paintings_paint_container__3qa9I",figcaption:"Paintings_figcaption__3e-3y",section:"Paintings_section__1ii3L"}},14:function(e,t,n){e.exports={logo_parent:"SocialMedia_logo_parent__1Yo05",logovk:"SocialMedia_logovk__Hiv-M",fb:"SocialMedia_fb__2uT3h"}},15:function(e,t,n){e.exports={section_gallery:"Gallery_section_gallery__8KZR1",section:"Gallery_section__1zHEz",gallery_container:"Gallery_gallery_container__3ayXy",for_paintings:"Gallery_for_paintings__3IrHq"}},22:function(e,t,n){e.exports={section:"About_section__2R0Rd",section_about:"About_section_about__1FLNF"}},23:function(e,t,n){e.exports={arrowUp_container:"ArrowUp_arrowUp_container__21J7a",arrowUp:"ArrowUp_arrowUp__1y4cg"}},25:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(26),r=n.n(c),o=(n(25),n(24)),s=n(19),l=n.n(s),u=n(27),j=n(8),b=n(7),_=n(3),d=n(34),p=n(35),f=n(55),h=n(31),g=n(14),x=n.n(g),O=n(2),m=function(){return Object(O.jsxs)("div",{className:x.a.logo_parent,children:[Object(O.jsx)(f.a,{className:x.a.logovk,href:"#"}),Object(O.jsx)(h.a,{style:{width:"32px"},className:x.a.fb,href:"#"})]})},v=n(6),y=n.n(v),k=[{link:"/",title:"Home"},{link:"/gallery",title:"Gallery"},{link:"/about",title:"About"},{link:"/contact",title:"Contact"}],w=function(e){var t=e.title,n=Object(a.useState)(!1),i=Object(j.a)(n,2),c=i[0],r=i[1],o=function(){r(!c)};return Object(O.jsx)("aside",{className:y.a.aside_in_nav,children:Object(O.jsxs)("nav",{className:y.a.navbar,children:[Object(O.jsx)("h1",{children:Object(O.jsx)(b.c,{to:"/",children:t})}),Object(O.jsx)("div",{className:y.a.menu_icon,onClick:o,children:c?Object(O.jsx)(p.a,{}):Object(O.jsx)(d.a,{})}),Object(O.jsxs)("div",{className:c?"".concat(y.a.active," ").concat(y.a.navbar_links):"".concat(y.a.navbar_links),children:[Object(O.jsx)("ul",{onClick:o,className:c?"".concat(y.a.active," ").concat(y.a.navbar_links):"".concat(y.a.navbar_links),children:k.map((function(e,t){return Object(O.jsx)("li",{children:Object(O.jsx)(b.c,{activeStyle:{color:"#f95602",textDecoration:"underline"},exact:!0,to:e.link,children:e.title})},t)}))}),Object(O.jsx)(m,{})]})]})})};w.defaultProps={title:"Julia SHEBALINA"};var N=w,C=n(10),S=n.n(C),D=function(e){var t=e.paint,n=t.image,a=t.title;return Object(O.jsxs)("figure",{className:S.a.paint_container,children:[Object(O.jsx)("figcaption",{className:S.a.figcaption,children:a}),Object(O.jsx)("img",{src:n,alt:a})]})};n(25);var F=function(e){var t=e.paintings;return Object(O.jsx)(a.Fragment,{children:Object(O.jsx)("section",{className:"".concat(S.a.section_paintings," ").concat(S.a.section),children:t.map((function(e,t){return Object(O.jsx)(D,{paint:e},t)}))})})},A=n(36),G=n(9),R=n.n(G),T=function(e){var t=e.text,n=Object(a.useState)(!1),i=Object(j.a)(n,2),c=i[0],r=i[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{onClick:function(){return r(!c)},children:[c?"Close":"Read about",Object(O.jsx)(A.a,{className:c?"".concat(R.a.turn_around," ").concat(R.a.icon_in_details):"".concat(R.a.icon_in_details)})]}),Object(O.jsx)("p",{style:{marginTop:"0"},children:c?t:null})]})},z=function(e){for(var t=e.paintings,n=Object(_.f)().category,a=[],i=0;i<t.length;i++)t[i].category==n&&(a=t.filter((function(e){if(e.category==n)return e})));return Object(O.jsxs)("section",{className:"".concat(R.a.section," ").concat(R.a.details_container),children:[Object(O.jsx)("div",{style:{width:"75%",display:"flex",justifyContent:"flex-end"},children:Object(O.jsx)(b.b,{to:"/gallery",children:Object(O.jsx)("button",{style:{border:"none",backgroundColor:"var(--primaryOrange)",color:"#fff",padding:".5rem",borderRadius:".5rem",cursor:"pointer",fontSize:"1rem"},children:"Go to Gallery"})})}),a.map((function(e,t){return Object(O.jsxs)("div",{className:R.a.detail_text_img,children:[Object(O.jsx)("img",{src:e.image,alt:e.title}),Object(O.jsx)(T,{text:e.text})]},t)}))]})},L=n(38),U=n(15),E=n.n(U),J=function(e){var t=e.paintings,n=Object(L.a)(new Set(t.map((function(e){return e.category})))),i=Object(a.useState)(""),c=Object(j.a)(i,2),r=(c[0],c[1]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{className:"".concat(E.a.section_gallery," ").concat(E.a.section),children:n.sort().map((function(e,t){return Object(O.jsx)(b.b,{to:"/details/".concat(e),onClick:function(){return r("".concat(e))},className:E.a.gallery_container,children:e},t)}))})})},M=n(22),P=n.n(M),H=n.p+"static/media/bio.751ff2eb.jpg",B=function(){return Object(O.jsx)("section",{className:P.a.section,children:Object(O.jsxs)("div",{className:P.a.section_about,children:[Object(O.jsx)("h1",{children:"About"}),Object(O.jsx)("img",{src:H,alt:"portrait of Julia"}),Object(O.jsx)("h2",{children:"My Work"}),Object(O.jsx)("p",{children:"Sustainable kale chips 8-bit, four dollar toast wolf lo-fi palo santo selvage artisan. Cornhole next level cray, glossier kale chips scenester 8-bit locavore umami. Jean shorts chambray gochujang chia, activated charcoal salvia tacos lyft mumblecore normcore typewriter wolf trust fund meggings lo-fi. Af heirloom kombucha yr normcore organic humblebrag, kale chips irony. Retro bitters bushwick organic, swag ennui butcher health goth post-ironic scenester craft beer seitan edison bulb cred normcore."}),Object(O.jsx)("h3",{children:"Bio"}),Object(O.jsx)("p",{children:"Gochujang asymmetrical thundercats williamsburg cardigan enamel pin biodiesel knausgaard marfa vexillologist meh. Tattooed live-edge listicle jianbing tbh tousled chartreuse hell of hot chicken pop-up taiyaki cred. Raclette taxidermy kinfolk sustainable mixtape tacos cloud bread chia viral quinoa. Chicharrones vaporware vexillologist single-origin coffee franzen bespoke austin farm-to-table authentic locavore. Crucifix wolf copper mug migas squid stumptown edison bulb polaroid."})]})})},I=n(37),q=n(23),W=n.n(q),V=function(e){var t=e.onClick;return Object(O.jsx)("div",{onClick:t,className:W.a.arrowUp_container,children:Object(O.jsx)(I.a,{className:W.a.arrowUp})})};n(52);var X=function(){var e=Object(a.useState)(window.innerWidth),t=Object(j.a)(e,2),n=t[0],i=t[1],c=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=function(){i(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var r=Object(a.useState)([]),s=Object(j.a)(r,2),d=s[0],p=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/OlgaSpirkina/Julia/paintings");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,p(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsx)(b.a,{children:Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)("div",{ref:c}),Object(O.jsx)(N,{}),Object(O.jsxs)(_.c,{children:[Object(O.jsx)(_.a,{exact:!0,path:"/",render:function(e){return Object(O.jsx)(F,{paintings:d})}}),Object(O.jsx)(_.a,{exact:!0,path:"/gallery",render:function(e){return Object(O.jsx)(J,{paintings:d})}}),Object(O.jsx)(_.a,{exact:!0,path:"/about",component:B}),Object(O.jsx)(_.a,{exact:!0,path:"/details/:category",render:function(e){return Object(O.jsx)(z,Object(o.a)(Object(o.a)({},e),{},{paintings:d}))}})]}),n<=1200&&Object(O.jsx)(V,{onClick:function(){return e=c,window.scrollTo(0,e.current.offsetTop);var e}})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(X,{})}),document.getElementById("root")),Y()},6:function(e,t,n){e.exports={aside_in_nav:"Navbar_aside_in_nav__8V2Be",navbar:"Navbar_navbar__CLYHD",navbar_links:"Navbar_navbar_links__3VY0z",menu_icon:"Navbar_menu_icon__1c9Wr",active:"Navbar_active__3mbhk"}},9:function(e,t,n){e.exports={section:"Details_section__2hStz",details_container:"Details_details_container__2opD5",paragraph_hidden:"Details_paragraph_hidden__2yTFM",active:"Details_active__3iGxv",detail_text_img:"Details_detail_text_img__3nuVX",icon_in_details:"Details_icon_in_details__14FFA",turn_around:"Details_turn_around__uDC8T"}}},[[53,1,2]]]);
//# sourceMappingURL=main.6425daf8.chunk.js.map