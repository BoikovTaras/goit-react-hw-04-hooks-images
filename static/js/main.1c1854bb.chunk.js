(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,function(e,t,a){e.exports={title:"ImageGallery_title__1pRGs",gallery:"ImageGallery_gallery__2AdcO"}},,function(e,t,a){e.exports={galleryItem:"ImageGalleryItem_galleryItem__1tDbQ",galleryItemImage:"ImageGalleryItem_galleryItemImage__1FRm_"}},function(e,t,a){e.exports={buttonBox:"Button_buttonBox__3-BLe",button:"Button_button__IpI5S"}},function(e,t,a){e.exports={overlay:"Modal_overlay__30mja",modal:"Modal_modal__2S_m-"}},function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__J6PhQ"}},function(e,t,a){e.exports={cssloadSquares:"Loader_cssloadSquares__15c2F",rotateY:"Loader_rotateY__1Ucuv"}},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(3),o=a.n(r),s=(a(15),a(2)),l=(a(16),a(9)),i=a.n(l),u=a(0);function j(e){var t=e.inputValue,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(u.jsx)("header",{className:i.a.searchbar,children:Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==r?(t(r),o("")):alert("Enter your search term")},children:[Object(u.jsx)("button",{type:"submit",className:"button",children:"\u041f\u043e\u0438\u0441\u043a"}),Object(u.jsx)("input",{className:"input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",value:r,onInput:function(e){o([e.target.value.toLowerCase()])}})]})})}var b=a(6),m=a.n(b);function d(e){var t=e.src,a=e.alt,n=e.openModal,c=e.largeUrl;return Object(u.jsx)("li",{className:m.a.galleryItem,onClick:n,children:Object(u.jsx)("img",{className:m.a.galleryItemImage,src:t,alt:a,onClick:c})})}var f=a(4),O=a.n(f),h=a(7),p=a.n(h);function g(e){var t=e.onClick;return Object(u.jsx)("div",{className:p.a.buttonBox,children:Object(u.jsx)("button",{className:p.a.button,type:"button",onClick:t,children:"Load more..."})})}var x=a(8),_=a.n(x),v=document.querySelector("#modal-root");function y(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[]);var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(u.jsx)("div",{className:_.a.overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(u.jsx)("div",{className:_.a.modal,children:a})}),v)}var I=a(10),S=a.n(I);function w(){return Object(u.jsxs)("div",{className:S.a.cssloadSquares,children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]})}var N={fetchImage:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("24115894-e73b87c75d7b7d0a00bbe3b23","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Image with name ".concat(e," not found")))}))}};function k(e){var t=e.name,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(null),i=Object(s.a)(l,2),j=i[0],b=i[1],m=Object(n.useState)(0),f=Object(s.a)(m,2),h=f[0],p=f[1],x=Object(n.useState)(!1),_=Object(s.a)(x,2),v=_[0],I=_[1],S=Object(n.useState)(""),k=Object(s.a)(S,2),L=k[0],C=k[1],E=Object(n.useState)("idle"),B=Object(s.a)(E,2),q=B[0],G=B[1];Object(n.useEffect)((function(){p(1)}),[t]),Object(n.useEffect)((function(){""===t?G("idle"):(G("pending"),N.fetchImage(t,h).then((function(e){return o(e.hits)}),G("resolved")).catch((function(e){b(e),G("rejected")})))}),[t,h]);var M=function(e){I(!v)},U=function(e){return C(e.target.alt)};return"idle"===q?Object(u.jsx)("h2",{className:O.a.title,children:"Let's find some images"}):"pending"===q?Object(u.jsx)(w,{}):"rejected"===q?Object(u.jsx)("h2",{className:O.a.title,children:j.message}):"resolved"===q?Object(u.jsxs)(u.Fragment,{children:[v&&Object(u.jsx)(y,{onClose:M,children:Object(u.jsx)("img",{src:L,alt:"www"})}),Object(u.jsx)("ul",{className:O.a.gallery,children:r.map((function(e){return Object(u.jsx)(d,{src:e.webformatURL,alt:e.largeImageURL,openModal:M,largeUrl:U},e.id)}))}),Object(u.jsx)(g,{onClick:function(){return p(h+1)}})]}):void 0}function L(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{inputValue:function(e){return c([e])}}),Object(u.jsx)(k,{name:a})]})}o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1c1854bb.chunk.js.map