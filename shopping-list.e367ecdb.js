!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire8630;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire8630=n),n("e3qpK");var l=n("eH1tb");const r=document.querySelectorAll(".log-out-btn"),a=document.querySelector(".auth-component");l.default.authSentry(),localStorage.getItem("userName")&&(a.querySelector(".auth-component__user-name").textContent=localStorage.getItem("userName"),console.log(localStorage.getItem("userName")),document.body.classList.contains("is-logged")||document.body.classList.add("is-logged")),r.length&&r.forEach((e=>{e.addEventListener("click",(()=>{l.default.signOutUser(),window.location.replace("/index.html")}))})),n("d0slW"),n("eZig4"),n("2yFaI")}();
//# sourceMappingURL=shopping-list.e367ecdb.js.map
