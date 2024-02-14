(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=function(e,t,n,o){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass),o&&(r.textContent=o)},n=function(e,t,n){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},o=function(e,t){var n=e.querySelector(t.submitButtonSelector);Array.from(e.querySelectorAll(t.inputSelector)).some((function(e){return e.classList.contains(t.inputErrorClass)}))?(n.disabled=!0,n.classList.add("popup__button_disabled")):(n.disabled=!1,n.classList.remove("popup__button_disabled"))},r=function(e,t){var n=e.querySelectorAll("input");n&&n.forEach((function(e){e.classList.remove(t.inputErrorClass)}));var o=e.querySelectorAll("span");o&&o.forEach((function(e){e.classList.remove(t.errorClass),e.textContent=""}));var r=e.querySelector(t.submitButtonSelector);r&&(r.disabled=!0,r.classList.add("popup__button_disabled"))},a=document.querySelector(".popup_type_image"),c=a.querySelector(".popup__image"),i=a.querySelector(".popup__caption");function u(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&p(e),t.target.classList.contains("popup__close")&&p(e)}))}function s(e){e.querySelector(".card__image").addEventListener("click",(function(){return function(e){var t=e.querySelector("img").getAttribute("src"),n=e.querySelector("img").getAttribute("alt");c.src=t,c.alt=n,i.textContent=n,l(a)}(e)}))}function l(t){r(t,e),document.addEventListener("keydown",d),setTimeout((function(){t.classList.add("popup_is-opened")}),0),t.classList.add("popup_is-animated")}function p(t){setTimeout((function(){t.classList.remove("popup_is-animated")}),800),t.classList.remove("popup_is-opened"),r(t,e),document.removeEventListener("keydown",d)}function d(e){"Escape"===e.key&&p(document.querySelector(".popup_is-opened"))}var _=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_change_photo"),f=document.querySelector(".change__icon"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".popup_type_new-card"),S=document.querySelector(".profile__add-button"),h=document.querySelector('form[name="new-place"]'),b=document.querySelector('form[name="edit-profile"]'),q=(document.querySelector(".popup_type_image"),document.querySelectorAll(".popup")),C=function(e){var t=document.querySelector(".profile__title"),n=document.querySelector(".profile__description"),o=document.querySelector(".profile__image");t.textContent=e.name,n.textContent=e.about,o.src=e.avatar};function L(e){e.remove()}function g(e){e.classList.toggle("is-active")}var E=document.querySelector("#card-template").content,k=document.querySelector(".places__list");var j={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"ae90b01c-4d6f-4fe0-9bc5-50249125af57","Content-Type":"application/json"}};Promise.all([fetch("".concat(j.baseUrl,"/users/me"),{headers:{authorization:j.headers.authorization}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)})),fetch("".concat(j.baseUrl,"/cards"),{headers:{authorization:j.headers.authorization,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))]).then((function(e){var t={_id:e[0].id,name:e[0].name,about:e[0].about,avatar:e[0].avatar},n=e[1].map((function(e){return{_id:e.id,name:e.name,link:e.link,likes:e.likes,owner:e.owner}}));C(t),function(e,t){e.forEach((function(e){k.insertAdjacentElement("afterbegin",function(e,t){var n=E.querySelector(".places__item").cloneNode(!0),o=n.querySelector(".card__image"),r=n.querySelector(".card__like-button"),a=n.querySelector(".card__delete-button");return t.openImagePopup(n),a.addEventListener("click",(function(){t.deleteCard(n)})),r.addEventListener("click",(function(){t.likeCard(r)})),o.src="".concat(e.link),o.alt=e.name,n.querySelector(".card__title").textContent=e.name,n}(e,{deleteCard:L,likeCard:g,openImagePopup:s}))}))}(n)}));var A=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),z=document.querySelector(".popup__input_type_name"),P=document.querySelector(".popup__input_type_description");var T,w,U,B,D;D=_,y.addEventListener("click",(function(){l(D),z.value="".concat(A.textContent),P.value="".concat(x.textContent)})),function(e,t){t.addEventListener("click",(function(){var t,n,o;n=(t=h).querySelector(".popup__input_type_card-name"),o=t.querySelector(".popup__input_type_url"),n.value="",o.value="",l(e)}))}(v,S),function(t,n){n.addEventListener("click",(function(){r(m,e),l(t)}))}(m,f),function(e){e.addEventListener("submit",(function(e){var t={name:z.value,job:P.value,nameContainer:A,jobContainer:x};!function(e,t,n){fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}(t.name,t.job,j),function(e,t){e.preventDefault(),t.nameContainer.textContent=t.name,t.jobContainer.textContent=t.job,p(_)}(e,t)}))}(b),w=(T=h).querySelector(".popup__input_type_card-name"),U=T.querySelector(".popup__input_type_url"),w.value="",T.addEventListener("submit",(function(e){e.preventDefault();var t={name:w.value,link:U.value};!function(e,t,n){fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}(t.name,t.link,j),h.reset(),p(v)})),function(e){var t=e.querySelector(".popup__input_type_avatar");t.value="",e.addEventListener("submit",(function(n){n.preventDefault(),function(e,t){fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:t.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}(t.value,j),setTimeout(C,100),p(e)}))}(m),function(e){e.length>1?e.forEach(u):u(e)}(q),B=e,Array.from(document.querySelectorAll(B.formSelector)).forEach((function(r){r.addEventListener("submit",(function(e){e.preventDefault()})),r.addEventListener("input",(function(){!function(r,a){Array.from(r.querySelectorAll(a.inputSelector)).forEach((function(a){a.addEventListener("input",(function(){!function(r,a){"url"===a.type&&(a.validity.valid?n(r,a,e):t(r,a,e)),/^[a-zA-Zа-яА-ЯЁё\s-\,]*$/.test(a.value)?a.validity.valid?n(r,a,e):t(r,a,e):(o(r,e),t(r,a,e,a.dataset.customError))}(r,a),o(r,e)})),o(r,e)}))}(r,B)}))}))})();