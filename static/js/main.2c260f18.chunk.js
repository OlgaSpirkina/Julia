(this.webpackJsonpjulia=this.webpackJsonpjulia||[]).push([[0],{10:function(e,t,n){e.exports={section_paintings:"Paintings_section_paintings__1RD5X",paint_container:"Paintings_paint_container__3qa9I",vertical:"Paintings_vertical__axIHV",horizontal:"Paintings_horizontal__1i0_z",section:"Paintings_section__1ii3L"}},14:function(e,t,n){e.exports={logo_parent:"SocialMedia_logo_parent__1Yo05",logovk:"SocialMedia_logovk__Hiv-M",fb:"SocialMedia_fb__2uT3h"}},15:function(e,t,n){e.exports={section_gallery:"Gallery_section_gallery__8KZR1",section:"Gallery_section__1zHEz",gallery_container:"Gallery_gallery_container__3ayXy",for_paintings:"Gallery_for_paintings__3IrHq"}},22:function(e,t,n){e.exports={arrowUp_container:"ArrowUp_arrowUp_container__21J7a",arrowUp:"ArrowUp_arrowUp__1y4cg"}},23:function(e,t,n){e.exports={section:"About_section__2R0Rd",section_about:"About_section_about__1FLNF"}},25:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(26),r=n.n(c),o=(n(25),n(24)),s=n(19),l=n.n(s),u=n(27),_=n(6),j=n(8),b=n(3),d=n(34),h=n(35),p=n(55),f=n(31),x=n(14),g=n.n(x),O=n(2),v=function(){return Object(O.jsxs)("div",{className:g.a.logo_parent,children:[Object(O.jsx)(p.a,{className:g.a.logovk,href:"#"}),Object(O.jsx)(f.a,{style:{width:"32px"},className:g.a.fb,href:"#"})]})},m=n(7),y=n.n(m),w=[{link:"/",title:"Home"},{link:"/gallery",title:"Gallery"},{link:"/about",title:"About"},{link:"/contact",title:"Contact"}],k=function(e){var t=e.title,n=Object(a.useState)(!1),i=Object(_.a)(n,2),c=i[0],r=i[1],o=function(){r(!c)};return Object(O.jsx)("aside",{className:y.a.aside_in_nav,children:Object(O.jsxs)("nav",{className:y.a.navbar,children:[Object(O.jsx)("h1",{children:Object(O.jsx)(j.c,{to:"/",children:t})}),Object(O.jsx)("div",{className:y.a.menu_icon,onClick:o,children:c?Object(O.jsx)(h.a,{}):Object(O.jsx)(d.a,{})}),Object(O.jsxs)("div",{className:c?"".concat(y.a.active," ").concat(y.a.navbar_links):"".concat(y.a.navbar_links),children:[Object(O.jsx)("ul",{onClick:o,className:c?"".concat(y.a.active," ").concat(y.a.navbar_links):"".concat(y.a.navbar_links),children:w.map((function(e,t){return Object(O.jsx)("li",{children:Object(O.jsx)(j.c,{activeStyle:{color:"#f95602",textDecoration:"underline"},exact:!0,to:e.link,children:e.title})},t)}))}),Object(O.jsx)(v,{})]})]})})};k.defaultProps={title:"Julia SHEBALINA"};var N=k,S=n(10),C=n.n(S),z=function(e){var t=e.paint,n=t.image,a=t.title,i=a.includes("vpaint");return Object(O.jsxs)("div",{className:C.a.paint_container,children:[Object(O.jsx)("img",{src:n,alt:a,className:"".concat(!0===i?C.a.vertical:C.a.horizontal)}),Object(O.jsx)("p",{children:a})]})},D=n(36),F=n(22),A=n.n(F),E=function(e){var t=e.href;return Object(O.jsx)("a",{href:t,className:A.a.arrowUp_container,children:Object(O.jsx)(D.a,{className:A.a.arrowUp})})};n(25);var L=function(e){var t=e.paintings,n=Object(a.useState)(window.innerWidth),i=Object(_.a)(n,2),c=i[0],r=i[1];return Object(a.useEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)("section",{id:"bout",className:"".concat(C.a.section_paintings," ").concat(C.a.section),children:t.map((function(e,t){return Object(O.jsx)(z,{paint:e},t)}))}),Object(O.jsx)("div",{children:c<=649&&Object(O.jsx)(E,{path:"/",href:"/#"})})]})},P=n(37),U=n(9),G=n.n(U),H=function(e){var t=e.text,n=Object(a.useState)(!1),i=Object(_.a)(n,2),c=i[0],r=i[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{onClick:function(){return r(!c)},children:[c?"Close":"Read about",Object(O.jsx)(P.a,{className:c?"".concat(G.a.turn_around," ").concat(G.a.icon_in_details):"".concat(G.a.icon_in_details)})]}),Object(O.jsx)("p",{style:{marginTop:"0"},children:c?t:null})]})},J=function(e){for(var t=e.paintings,n=Object(b.f)().category,a=[],i=0;i<t.length;i++)t[i].category==n&&(a=t.filter((function(e){if(e.category==n)return e})));return Object(O.jsx)("section",{className:"".concat(G.a.section," ").concat(G.a.details_container),children:a.map((function(e,t){return Object(O.jsxs)("div",{className:G.a.detail_text_img,children:[Object(O.jsx)("img",{src:e.image,alt:e.title}),Object(O.jsx)(H,{text:e.text})]},t)}))})},M=n(38),R=n(15),T=n.n(R),I=function(e){var t=e.paintings,n=Object(M.a)(new Set(t.map((function(e){return e.category})))),i=Object(a.useState)(""),c=Object(_.a)(i,2),r=(c[0],c[1]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{className:"".concat(T.a.section_gallery," ").concat(T.a.section),children:n.map((function(e,t){return Object(O.jsx)(j.b,{to:"/details/".concat(e),onClick:function(){return r("".concat(e))},className:T.a.gallery_container,children:e},t)}))})})},W=n(23),B=n.n(W),q=n.p+"static/media/bio.751ff2eb.jpg",V=function(){var e=Object(a.useState)(window.innerWidth),t=Object(_.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){i(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(O.jsx)("section",{className:B.a.section,children:Object(O.jsxs)("div",{className:B.a.section_about,children:[Object(O.jsx)("h1",{id:"about",children:"About"}),Object(O.jsx)("img",{src:q,alt:"portrait of Julia"}),Object(O.jsx)("h2",{children:"My Work"}),Object(O.jsx)("p",{children:"Sustainable kale chips 8-bit, four dollar toast wolf lo-fi palo santo selvage artisan. Cornhole next level cray, glossier kale chips scenester 8-bit locavore umami. Jean shorts chambray gochujang chia, activated charcoal salvia tacos lyft mumblecore normcore typewriter wolf trust fund meggings lo-fi. Af heirloom kombucha yr normcore organic humblebrag, kale chips irony. Retro bitters bushwick organic, swag ennui butcher health goth post-ironic scenester craft beer seitan edison bulb cred normcore."}),Object(O.jsx)("h3",{children:"Bio"}),Object(O.jsx)("p",{children:"Gochujang asymmetrical thundercats williamsburg cardigan enamel pin biodiesel knausgaard marfa vexillologist meh. Tattooed live-edge listicle jianbing tbh tousled chartreuse hell of hot chicken pop-up taiyaki cred. Raclette taxidermy kinfolk sustainable mixtape tacos cloud bread chia viral quinoa. Chicharrones vaporware vexillologist single-origin coffee franzen bespoke austin farm-to-table authentic locavore. Crucifix wolf copper mug migas squid stumptown edison bulb polaroid."}),n<=900&&Object(O.jsx)(E,{href:"#about"})]})})};n(52);var X=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/OlgaSpirkina/Julia/paintings");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsx)(j.a,{children:Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(N,{}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(O.jsx)(L,{paintings:n})}}),Object(O.jsx)(b.a,{exact:!0,path:"/gallery",render:function(e){return Object(O.jsx)(I,{paintings:n})}}),Object(O.jsx)(b.a,{exact:!0,path:"/about",component:V}),Object(O.jsx)(b.a,{exact:!0,path:"/details/:category",render:function(e){return Object(O.jsx)(J,Object(o.a)(Object(o.a)({},e),{},{paintings:n}))}})]})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(X,{})}),document.getElementById("root")),Y()},7:function(e,t,n){e.exports={aside_in_nav:"Navbar_aside_in_nav__8V2Be",navbar:"Navbar_navbar__CLYHD",navbar_links:"Navbar_navbar_links__3VY0z",menu_icon:"Navbar_menu_icon__1c9Wr",active:"Navbar_active__3mbhk"}},9:function(e,t,n){e.exports={section:"Details_section__2hStz",details_container:"Details_details_container__2opD5",paragraph_hidden:"Details_paragraph_hidden__2yTFM",active:"Details_active__3iGxv",detail_text_img:"Details_detail_text_img__3nuVX",icon_in_details:"Details_icon_in_details__14FFA",turn_around:"Details_turn_around__uDC8T"}}},[[53,1,2]]]);
//# sourceMappingURL=main.2c260f18.chunk.js.map