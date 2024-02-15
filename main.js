(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=function(e,t){var n=e.querySelectorAll("input");n&&n.forEach((function(e){e.classList.remove(t.inputErrorClass)}));var o=e.querySelectorAll("span");o&&o.forEach((function(e){e.classList.remove(t.errorClass),e.textContent=""}));var r=e.querySelector(t.submitButtonSelector);r&&(r.disabled=!0,r.classList.add("popup__button_disabled"))};function n(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение":"Сохранить"}var o=document.querySelector(".popup_type_image"),r=o.querySelector(".popup__image"),c=o.querySelector(".popup__caption");function a(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&s(e),t.target.classList.contains("popup__close")&&s(e)}))}function u(e){e.querySelector(".card__image").addEventListener("click",(function(){return function(e){var t=e.querySelector("img").getAttribute("src"),n=e.querySelector("img").getAttribute("alt");r.src=t,r.alt=n,c.textContent=n,i(o)}(e)}))}function i(n){t(n,e),document.addEventListener("keydown",l),setTimeout((function(){n.classList.add("popup_is-opened")}),0),n.classList.add("popup_is-animated")}function s(n){setTimeout((function(){n.classList.remove("popup_is-animated")}),1200),n.classList.remove("popup_is-opened"),t(n,e),document.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))}var p=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup_type_change_photo"),f=document.querySelector(".change__icon"),m=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_new-card"),y=document.querySelector(".profile__add-button"),v=document.querySelector('form[name="new-place"]'),h=document.querySelector('form[name="edit-profile"]'),S=(document.querySelector(".popup_type_image"),document.querySelectorAll(".popup")),b={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"ae90b01c-4d6f-4fe0-9bc5-50249125af57","Content-Type":"application/json"}},q=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),L=document.querySelector(".popup__input_type_name"),k=document.querySelector(".popup__input_type_description");var E=function(e){var t=document.querySelector(".profile__title"),n=document.querySelector(".profile__description"),o=document.querySelector(".profile__image");t.textContent=e.name,n.textContent=e.about,o.src=e.avatar};function g(e,t,n){var o;"d8460b2ac8963f12a63f7957"===t&&(o=e,fetch("".concat(b.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:b.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)}))).then((function(){n.remove()}))}function j(e,t,n){var o=e.includes("d8460b2ac8963f12a63f7957");n.textContent=e.length,o?t.classList.add("is-active"):(t.classList.remove("is-active"),n.textContent=e.length)}function x(e,t,n){var o=t.classList.contains("is-active");(function(e,t){return fetch("".concat(b.baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:b.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)}))})(e._id,o).then((function(e){j(e.likes.map((function(e){return e._id})),t,n)}))}function P(e,t){var n=A.querySelector(".places__item").cloneNode(!0),o=n.querySelector(".card__image"),r=n.querySelector(".card__like-button"),c=n.querySelector(".card__delete-button"),a=n.querySelector(".likes__number");return t.openImagePopup(n),"d8460b2ac8963f12a63f7957"!==e.owner._id&&(c.disabled=!0,c.style.display="none"),j(e.likes.map((function(e){return e._id})),r,a),c.addEventListener("click",(function(){t.deleteCard(e._id,e.owner._id,n)})),r.addEventListener("click",(function(){t.likeCard(e,r,a)})),a.textContent=e.likes.length,o.src="".concat(e.link),o.alt=e.name,n.querySelector(".card__title").textContent=e.name,n}function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}var A=document.querySelector("#card-template").content,w=document.querySelector(".places__list");var U,D,B,N,O;O=p,m.addEventListener("click",(function(){i(O),L.value="".concat(q.textContent),k.value="".concat(C.textContent)})),function(e,t){t.addEventListener("click",(function(){var t,n,o;n=(t=v).querySelector(".popup__input_type_card-name"),o=t.querySelector(".popup__input_type_url"),n.value="",o.value="",i(e)}))}(_,y),function(e,t){t.addEventListener("click",(function(){e.querySelector("input").value="",i(e)}))}(d,f),function(e){e.addEventListener("submit",(function(t){n(!0,e);var o={name:L.value,job:k.value,nameContainer:q,jobContainer:C};!function(e,t){e.preventDefault(),t.nameContainer.textContent=t.name,t.jobContainer.textContent=t.job,s(p)}(t,o),function(e,t,n){return fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)}))}(o.name,o.job,b).finally((function(){n(!1,e)}))}))}(h),D=(U=v).querySelector(".popup__input_type_card-name"),B=U.querySelector(".popup__input_type_url"),D.value="",U.addEventListener("submit",(function(e){n(!0,U),e.preventDefault();var t={name:D.value,link:B.value};(function(e,t,n){return fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)}))})(t.name,t.link,b).finally((function(){n(!1,U)})),v.reset(),s(_),setTimeout((function(){return location.reload()}),200)})),function(e){var t=e.querySelector(".popup__input_type_avatar");t.value="",e.addEventListener("submit",(function(o){o.preventDefault(),n(!0,e),function(e,t){return fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)}))}(t.value,b).then((function(e){setTimeout((function(){E(e)}),300)})).finally((function(){n(!1,e)})),s(e)}))}(d),function(e){e.length>1?e.forEach(a):a(e)}(S),N=e,Array.from(document.querySelectorAll(N.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(o){o.addEventListener("input",(function(r){var c,a,u,i;c=e,a=o,u=t.inputErrorClass,i=t.errorClass,a.validity.patternMismatch?a.setCustomValidity(a.dataset.customError):a.setCustomValidity(""),a.validity.valid?function(e,t,n,o){var r=e.querySelector("#".concat(t.id,"-error"));r.classList.remove(o),r.textContent="",t.classList.remove(n)}(c,a,u,i):function(e,t,n,o,r){var c=e.querySelector("#".concat(t.id,"-error"));c.classList.add(r),c.textContent=n,t.classList.add(o)}(c,a,a.validationMessage,u,i),function(e,t,n,o){var r=e.querySelector("".concat(n));!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(r.disabled=!1,r.classList.remove(o)):(r.disabled=!0,r.classList.add(o))}(e,n,t.submitButtonSelector,t.inactiveButtonClass)}))}))}(e,N)})),Promise.all([fetch("".concat(b.baseUrl,"/users/me"),{method:"GET",headers:b.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)})),fetch("".concat(b.baseUrl,"/cards"),{headers:b.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.error(e)}))]).then((function(e){var t={_id:e[0]._id,name:e[0].name,about:e[0].about,avatar:e[0].avatar},n=e[1].map((function(e){return{_id:e._id,name:e.name,link:e.link,likes:e.likes,owner:e.owner}}));E(t),function(e){"object"!==T(e)&&(console.log("не объет"),w.append(P(item,{deleteCard:g,likeCard:x,openImagePopup:u}))),e.forEach((function(e){w.append(P(e,{deleteCard:g,likeCard:x,openImagePopup:u}))}))}(n)}))})();