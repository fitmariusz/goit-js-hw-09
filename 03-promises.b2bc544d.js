!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector("form");function u(e,n){(function(e,n){return Math.random()>.3?Promise.resolve({position:e,delay:n}):Promise.reject({position:e,delay:n})})(e,n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})})).catch((function(e){var n=e.position,o=e.delay;r.Notify.warning("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=document.querySelector("form"),o=0;o<Number(n.elements.amount.value);o+=1){var t=Number(n.elements.delay.value)+Number(n.elements.step.value)*o;setTimeout((function(e,n){u(e,n)}),t,o+1,t)}n.reset()}))}();
//# sourceMappingURL=03-promises.b2bc544d.js.map
