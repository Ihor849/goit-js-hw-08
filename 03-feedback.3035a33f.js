function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,l,u,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function E(e){return f=e,l=setTimeout(S,t),c?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=i}function S(){var e=d();if(T(e))return h(e);l=setTimeout(S,function(e){var n=t-(e-u);return s?g(n,i-(e-f)):n}(e))}function h(e){return l=void 0,v&&r?y(e):(r=o=void 0,a)}function j(){var e=d(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===l)return E(u);if(s)return l=setTimeout(S,t),y(u)}return void 0===l&&(l=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=u=o=l=void 0},j.flush=function(){return void 0===l?a:h(d())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};let y={};const E=document.querySelector(".feedback-form"),T=E.firstElementChild,S=(T.nextElementSibling,{formEl:document.querySelector(".feedback-form"),emailEl:E.firstElementChild,messageEl:T.nextElementSibling});function h(e){let t=e.currentTarget.email.value,n=e.currentTarget.message.value;localStorage.setItem("email",`${t}`),localStorage.setItem("message",`${n}`),y.Email=t,y.Message=n,console.log(y)}S.formEl.addEventListener("submit",(function(e){let t=e.currentTarget.email.value,n=e.currentTarget.message.value;e.preventDefault(),h(e),function(e,t){if(""===e||""===t)return console.log("ЗАПОЛНИТЕ ПОЛЯ");event.currentTarget.reset(),localStorage.removeItem("message"),localStorage.removeItem("email"),console.log(localStorage.getItem("message")),console.log(localStorage.getItem("email"))}(`${t}`,`${n}`)})),S.formEl.addEventListener("input",e(t)(h,500));
//# sourceMappingURL=03-feedback.3035a33f.js.map