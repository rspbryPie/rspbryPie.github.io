/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");




swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
var swiperConts = document.querySelectorAll(".swiper");
var swiperWrappers = document.querySelectorAll(".swiper-wrapper");
var sideMenu = document.querySelector(".aside");
var swiperPags = document.querySelectorAll(".swiper-pagination");
var readNext = document.getElementById("readNext");
var showHide = document.getElementById("showHide");
var showHideDev = document.getElementById("showHide-devices");
var burger = document.querySelector(".header").querySelector(".burger__btn");
var burgerClose = document.querySelector(".aside").querySelector(".burger__btn-close");
var btns = document.querySelectorAll(".btn-pop");
var btnModal = document.querySelectorAll(".btn-modal");
var modalOverlay = document.querySelector(".modal-overlay ");
var modals = document.querySelectorAll(".modal");
var swiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".swiper", {
  // slidesPerView: 1,
  // spaceBetween: 20,
  loop: false,
  // slideClass: 'brend__item',
  enabled: false,
  width: 240,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is <= 320px
    // when window width is <= 640px
    320: {
      enabled: true,
      slidesPerView: 1
    }
  }
});
console.log("first swapps", swiper);

if (window.innerWidth >= 768) {
  swiper[0].destroy();
  swiper[1].destroy();
  swiper[2].destroy();
  swiper.enabled = "false";
  var elements = document.querySelectorAll(".swiper-slide");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.classList.remove("swiper-slide");
  }

  for (var j = 0; j < swiperConts.length; j++) {
    var swiperCont = swiperConts[j];
    swiperCont.classList.remove("swiper");
  }

  for (var w = 0; w < swiperWrappers.length; w++) {
    var swiperWrapper = swiperWrappers[w];
    swiperWrapper.classList.remove("swiper-wrapper");
  }

  for (var p = 0; p < swiperPags.length; p++) {
    var swiperPag = swiperPags[p];
    swiperPag.classList.add("hidden");
  } // window.location.reload();

}

console.log("another swapps", swiper);

var showMe = function showMe(wrap, cont, btn) {
  var wrapper = document.querySelector(wrap);
  var box = document.querySelector(cont);

  if (btn.classList.contains("show")) {
    if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
      box.classList.add("section--mid");
      wrapper.classList.add("wrapper--mid");
      btn.classList.remove("show");
      btn.classList.add("hide");
    } else {
      box.classList.add("section--desc");
      wrapper.classList.add("wrapper--desc");
      btn.classList.remove("show");
      btn.classList.add("hide");
    } // alert('show');

  } else {
    if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
      box.classList.remove("section--mid");
      wrapper.classList.remove("wrapper--mid");
      btn.classList.remove("hide");
      btn.classList.add("show");
    } else {
      box.classList.remove("section--desc");
      wrapper.classList.remove("wrapper--desc");
      btn.classList.remove("hide");
      btn.classList.add("show");
    } // alert('hide');

  }
};

var div = document.querySelector(".aside__wrapper");
sideMenu.addEventListener("click", function (e) {
  var withinBoundaries = e.composedPath().includes(div);

  if (!withinBoundaries) {
    sideMenu.classList.remove("show__aside"); // скрываем элемент т к клик был за его пределами
  }
});

burger.onclick = function () {
  sideMenu.classList.add("show__aside");
};

burgerClose.onclick = function () {
  sideMenu.classList.remove("show__aside");
}; // sideMenu.onclick = function () {
//   sideMenu.classList.remove("show__aside");
// };


readNext.onclick = function () {
  var wrapp = document.querySelector(".services");

  if (readNext.classList.contains("show")) {
    wrapp.classList.add("service-show");
    readNext.classList.remove("show");
    readNext.classList.add("hide");
  } else {
    wrapp.classList.remove("service-show");
    readNext.classList.remove("hide");
    readNext.classList.add("show");
  }
};

showHideDev.onclick = function () {
  return showMe(".devices__wrapper", ".devices__box", showHideDev);
};

showHide.onclick = function () {
  return showMe(".brends__wrapper", ".brends__box", showHide);
};

window.addEventListener("resize", function () {
  window.location.reload();
});
btns.forEach(function (el) {
  el.addEventListener("click", function (e) {
    var path = e.currentTarget.getAttribute("data-path");
    modals.forEach(function (el) {
      el.classList.remove("modal--visible");
    });
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});
btnModal.forEach(function (el) {
  el.onclick = function () {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach(function (el) {
      el.classList.remove("modal--visible");
    });
  };
}); // btnModal.onclick = function () {
//   modalOverlay.classList.remove("modal-overlay--visible");
//   modals.forEach((el) => {
//     el.classList.remove("modal--visible");
//   });
// };

modalOverlay.addEventListener("click", function (e) {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach(function (el) {
      el.classList.remove("modal--visible");
    });
  }
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./img/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Company.png */ "./img/Company.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/go.png */ "./img/go.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewsonic.png */ "./img/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosch.png */ "./img/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offer.png */ "./img/offer.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\n    <title>Kata Webcore Final</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"container\">\n        <div class=\"header__inner\">\n          <div class=\"burger__logo\">\n            <nav class=\"menu__burger\">\n              <button class=\"burger__btn main__btn\"></button>\n            </nav>\n            <div class=\"logo\">\n              <a class=\"logo__link\" href=\"#\">\n                <img class=\"logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\" />\n              </a>\n            </div>\n          </div>\n          <nav class=\"menu\">\n            <div class=\"left__menu\">\n              <button\n                data-path=\"me-popup\"\n                class=\"btn__call main__btn btn-pop\"\n                type=\"button\"\n              ></button>\n              <button\n                data-path=\"form-popup\"\n                class=\"btn__chat main__btn btn-pop\"\n                type=\"button\"\n              ></button>\n              <button class=\"btn__profile main__btn\" type=\"button\"></button>\n            </div>\n            <div class=\"right__menu\">\n              <button class=\"btn__repair main__btn\" type=\"button\"></button>\n              <button class=\"btn__check main__btn\" type=\"button\"></button>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </header>\n    <div class=\"site-container\">\n      <div class=\"modals\">\n        <div class=\"modal-overlay\">\n          <div class=\"modal modal--1\" data-target=\"form-popup\">\n            <div class=\"header-modal\">\n              <button class=\"burger__btn-close main__btn btn-modal\"></button>\n            </div>\n            <div class=\"form-wrapper\">\n              <h2>Обратная связь</h2>\n              <br />\n              <form name=\"form\" method=\"post\">\n                <input\n                  type=\"text\"\n                  name=\"name\"\n                  placeholder=\"Ваше имя\"\n                  required\n                />\n                <br />\n                <input\n                  type=\"tel\"\n                  name=\"phone\"\n                  placeholder=\"Телефон +7-999-999-9999\"\n                  required\n                  pattern=\"+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}\"\n                />\n                <br />\n                <input\n                  type=\"email\"\n                  name=\"email\"\n                  placeholder=\"Электронная почта\"\n                  required\n                />\n                <br />\n                <textarea\n                  cols=\"32\"\n                  name=\"message\"\n                  rows=\"5\"\n                  placeholder=\"Сообщение\"\n                  required\n                ></textarea>\n                <br />\n                <p>\n                  Нажимая “отправить”, вы даете согласие на\n                  <a href=\"#\">обработку персональных данных</a> и соглашаетесь с\n                  нашей <a href=\"#\">политикой конфиденциальности</a>\n                </p>\n                <button class=\"btn-send\"></button>\n              </form>\n            </div>\n          </div>\n          <div class=\"modal modal--2\" data-target=\"me-popup\">\n            <div class=\"header-modal\">\n              <button class=\"burger__btn-close main__btn btn-modal\"></button>\n            </div>\n            <div class=\"form-wrapper\">\n              <h2>Заказать звонок</h2>\n              <br />\n              <form name=\"form\" method=\"post\">\n                <input\n                  type=\"tel\"\n                  name=\"phone\"\n                  placeholder=\"Телефон +7-999-999-9999\"\n                  required\n                  pattern=\"+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}\"\n                />\n                <br />\n                <p>\n                  Нажимая “отправить”, вы даете согласие на\n                  <a href=\"#\">обработку персональных данных</a> и соглашаетесь с\n                  нашей <a href=\"#\">политикой конфиденциальности</a>\n                </p>\n                <button class=\"btn-send\"></button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <section class=\"aside\">\n        <div class=\"aside__wrapper\">\n          <div class=\"burger-head\">\n            <div class=\"container\">\n              <div class=\"burger-logo\">\n                <nav class=\"aside__burger\">\n                  <button class=\"burger__btn-close main__btn\"></button>\n                  <a class=\"logo__link\" href=\"#\">\n                    <img class=\"logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\" />\n                  </a>\n                </nav>\n              </div>\n              <div class=\"search__menu\">\n                <button class=\"btn__search main__btn\" type=\"button\"></button>\n              </div>\n            </div>\n          </div>\n          <div class=\"content\">\n            <nav class=\"content__list\">\n              <ul class=\"service__list\">\n                <li><a href=\"#\">Ремонт техники</a></li>\n                <li><a href=\"#\">Услуги и сервисы</a></li>\n                <li><a href=\"#\">Корпоративным клиентам</a></li>\n                <li><a href=\"#\">Продавцам техники</a></li>\n                <li><a href=\"#\">Партнерам</a></li>\n                <li><a href=\"#\">Производителям</a></li>\n                <li><a href=\"#\">Наши сервисные центры</a></li>\n                <li><a href=\"#\">Контакты</a></li>\n              </ul>\n            </nav>\n\n            <section class=\"aside__footer\">\n              <div class=\"menu__bottom\">\n                <button\n                  data-path=\"me-popup\"\n                  class=\"btn__call main__btn btn-pop\"\n                  type=\"button\"\n                ></button>\n                <button\n                  data-path=\"form-popup\"\n                  class=\"btn__chat main__btn btn-pop\"\n                  type=\"button\"\n                ></button>\n                <button class=\"btn__profile main__btn\" type=\"button\"></button>\n              </div>\n\n              <div class=\"contact\">\n                <a href=\"mailto:mail@cps.com\">mail@cps.com</a>\n              </div>\n\n              <div class=\"phone\">\n                <a href=\"tel:+78008908900\">8 800 890 8900</a>\n              </div>\n\n              <div class=\"lang\">\n                <a href=\"#!\">RU</a>\n                <a href=\"#!\">EN</a>\n                <a href=\"#!\">CH</a>\n              </div>\n            </section>\n          </div>\n        </div>\n      </section>\n      <main class=\"main__content\">\n        <article class=\"services\">\n          <div class=\"s-header\">\n            <div class=\"s-header__items\">\n              <div class=\"item__heading\">\n                <h1>Услуги и сервисы</h1>\n              </div>\n              <div class=\"item__menu\">\n                <div class=\"item__box\">\n                  <div class=\"menu__label\">\n                    <p class=\"label\">Оставить заявку</p>\n                  </div>\n                  <div class=\"menu__btn\">\n                    <button class=\"btn__repair main__btn\"></button>\n                  </div>\n                </div>\n                <div class=\"item__box\">\n                  <div class=\"menu__label\">\n                    <p class=\"label\">Статус ремонта</p>\n                  </div>\n                  <div class=\"menu__btn\">\n                    <button class=\"btn__check main__btn\"></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <section class=\"slide__menu\">\n              <nav class=\"slide__items\">\n                <a class=\"list__item\" href=\"#\">Ремонтируемые устройства</a>\n                <a class=\"list__item\" href=\"#\">Дополнительные услуги</a>\n                <a class=\"list__item\" href=\"#\">Цены и услуги</a>\n                <a class=\"list__item\" href=\"#\">Адреса сервисных центров</a>\n                <a class=\"list__item\" href=\"#\">Специальные цены</a>\n                <a class=\"list__item\" href=\"#\">Отзывы</a>\n              </nav>\n            </section>\n          </div>\n          <section class=\"blog\">\n            <div class=\"blog__cont\">\n              <p class=\"blog__paragraph\">\n                Мы являемся авторизованным сервисным центром по ремонту техники\n                Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\n                официальной гарантией производителя.\n              </p>\n              <p class=\"blog__paragraph\">\n                Мы успешно работаем с 1992 года и заслужили репутацию надежного\n                партнера, что подтверждает большое количество постоянных\n                клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям\n                и, в свою очередь, советуют нас родным и близким.\n              </p>\n              <div class=\"blog__btn\">\n                <button\n                  id=\"readNext\"\n                  class=\"btn__read-next show\"\n                  value=\"read next\"\n                  data-caption=\"Показать все\"\n                ></button>\n                <!-- <a class=\"blog__link\" href=\"#\"\n                  ><img\n                    class=\"blog__link--img\"\n                    src=\"./img/expand.png\"\n                    alt=\"read next\"\n                  />Читать далее</a\n                > -->\n              </div>\n            </div>\n            <img\n              src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n              alt=\"Our Company\"\n              class=\"company__img\"\n            />\n          </section>\n        </article>\n        <section class=\"brends__wrapper\">\n          <header class=\"header__brends\">\n            <h1 class=\"header__title\">Ремонт техники различных брендов</h1>\n          </header>\n          <article class=\"brends__container swiper\">\n            <ul class=\"brends__box swiper-wrapper\">\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img class=\"brend__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"lenovo\" />\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img class=\"brend__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"lenovo\" /><img\n                  class=\"btn__brend\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img class=\"brend__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"lenovo\" /><img\n                  class=\"btn__brend\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img class=\"brend__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"lenovo\" /><img\n                  class=\"btn__brend\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"brend__item swiper-slide\">\n                <img\n                  class=\"brend__img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                  alt=\"lenovo\"\n                /><img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <button\n              id=\"showHide\"\n              class=\"btn__read-next show\"\n              value=\"read next\"\n              data-caption=\"Показать все\"\n            ></button>\n          </article>\n        </section>\n        <section class=\"devices__wrapper\">\n          <header class=\"header__devices\">\n            <h1 class=\"header__title\">Ремонт различных видов техники</h1>\n          </header>\n          <article class=\"devices__container swiper\">\n            <ul class=\"devices__box swiper-wrapper\">\n              <li class=\"devices__item swiper-slide\">\n                <p>Ремонт ноутбуков</p>\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"devices__item swiper-slide\">\n                <p>Ремонт планшетов</p>\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"devices__item swiper-slide\">\n                <p>Ремонт ПК</p>\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"devices__item swiper-slide\">\n                <p>Ремонт мониторов</p>\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"devices__item swiper-slide\">\n                <p>Ремонт оргтехники</p>\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n              <li class=\"devices__item swiper-slide\">\n                <p>Ремонт IOT</p>\n                <img class=\"btn__brend\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\n              </li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <button\n              id=\"showHide-devices\"\n              class=\"btn__read-next show\"\n              value=\"read next\"\n              data-caption=\"Показать все\"\n            ></button>\n          </article>\n        </section>\n        <section class=\"prices__wrapper\">\n          <header class=\"header__prices\">\n            <h1 class=\"header__title\">Ремонт различных видов техники</h1>\n          </header>\n          <article class=\"prices__container swiper\">\n            <!-- <table>\n              <tbody class=\"prices__box swiper-wrapper\">\n                <tr class=\"prices__item swiper-slide\">\n                  <th>Ремонтные услуги</th>\n                  <th>Цена</th>\n                  <th>Срок</th>\n                  <th></th>\n                </tr>\n                <tr class=\"prices__item swiper-slide\">\n                  <td>Диагностика</td>\n                  <td>Бесплатно</td>\n                  <td>30 мин</td>\n                  <td></td>\n                </tr>\n                <tr class=\"prices__item swiper-slide\">\n                  <td>Замена дисплея</td>\n                  <td>1000 &#8381;</td>\n                  <td>30-120 мин</td>\n                  <td></td>\n                </tr>\n                <tr class=\"prices__item swiper-slide\">\n                  <td>Замена полифонического динамика</td>\n                  <td>1000 &#8381;</td>\n                  <td>30-120 мин</td>\n                  <td></td>\n                </tr>\n                <tr class=\"prices__item swiper-slide\">\n                  <td>Тестирование с выдачей технического заключения</td>\n                  <td>1000 &#8381;</td>\n                  <td>30-120 мин</td>\n                  <td></td>\n                </tr>\n                <tr class=\"prices__item swiper-slide\">\n                  <td>Замена программного обеспечения</td>\n                  <td>1000 &#8381;</td>\n                  <td>30-120 мин</td>\n                  <td><img class=\"btn__brend\" src=\"./img/go.png\" /></td>\n                </tr>\n              </tbody>\n            </table> -->\n            <ul class=\"prices__box swiper-wrapper\">\n              <li class=\"prices__item swiper-slide\">\n                <p class=\"serv\">Ремонтные услуги</p>\n                <p class=\"price\">Цена</p>\n                <p class=\"time\">Срок</p>\n                <p class=\"apply\">\n                  <img class=\"btn__offer\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" />\n                </p>\n              </li>\n              <li class=\"prices__item swiper-slide\">\n                <p class=\"serv\">Диагностика</p>\n                <p class=\"price\">Бесплатно</p>\n                <p class=\"time\">30 мин</p>\n                <p class=\"apply\">\n                  <button class=\"btn__offer\"></button>\n                </p>\n              </li>\n              <li class=\"prices__item swiper-slide\">\n                <p class=\"serv\">Замена дисплея</p>\n                <p class=\"price\">1000 &#8381;</p>\n                <p class=\"time\">30-120 мин</p>\n                <button class=\"btn__offer\"></button>\n              </li>\n              <li class=\"prices__item swiper-slide\">\n                <p class=\"serv\">Замена полифонического динамика</p>\n                <p class=\"price\">1000 &#8381;</p>\n                <p class=\"time\">30-120 мин</p>\n                <button class=\"btn__offer\"></button>\n              </li>\n              <li class=\"prices__item swiper-slide\">\n                <p class=\"serv\">\n                  Тестирование с выдачей технического заключения\n                </p>\n                <p class=\"price\">1000 &#8381;</p>\n                <p class=\"time\">30-120 мин</p>\n                <button class=\"btn__offer\"></button>\n              </li>\n              <li class=\"prices__item swiper-slide\">\n                <p class=\"serv\">Замена программного обеспечения</p>\n                <p class=\"price\">1000 &#8381;</p>\n                <p class=\"time\">30-120 мин</p>\n                <button class=\"btn__offer\"></button>\n              </li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <p class=\"nds\">\n              Все цены указаны с учетом НДС. Стоимость ремонта указана на\n              единичную услугу. Для получения коммерческого предложения на\n              постоянное обслуживание, оставьте заявку.\n            </p>\n            <a href=\"#\">\n              <p class=\"offer\">\n                Получить коммерческое предложение <span>&gt;</span>\n              </p>\n            </a>\n          </article>\n        </section>\n        <footer class=\"footer\">\n          <p class=\"footer__text\">\n            &#169; 2019 CPS <br />Разработано командой Apesong\n          </p>\n          <p class=\"footer__text\">Политика конфиденциальности</p>\n          <p class=\"footer__text\">\n            Информация, размещенная на данной странице, не является публичной\n            офертой\n          </p>\n        </footer>\n      </main>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/Company.png":
/*!*************************!*\
  !*** ./img/Company.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Company.png";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bosch.png":
/*!***********************!*\
  !*** ./img/bosch.png ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bosch.png";

/***/ }),

/***/ "./img/go.png":
/*!********************!*\
  !*** ./img/go.png ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/go.png";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ "./img/offer.png":
/*!***********************!*\
  !*** ./img/offer.png ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/offer.png";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/viewsonic.png":
/*!***************************!*\
  !*** ./img/viewsonic.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/viewsonic.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ca966d"], function() { return __webpack_require__("./js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map