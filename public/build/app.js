"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/variables.css */ "./assets/styles/variables.css");
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/fonts.css */ "./assets/styles/fonts.css");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/base.css */ "./assets/styles/base.css");
/* harmony import */ var _styles_components_buttons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/components/buttons.css */ "./assets/styles/components/buttons.css");
/* harmony import */ var _styles_components_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/components/header.css */ "./assets/styles/components/header.css");
/* harmony import */ var _styles_components_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/components/footer.css */ "./assets/styles/components/footer.css");
/* harmony import */ var _styles_components_scroll_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/components/scroll_bar.css */ "./assets/styles/components/scroll_bar.css");
/* harmony import */ var _styles_sections_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/sections/home.css */ "./assets/styles/sections/home.css");
/* harmony import */ var _styles_sections_about_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/sections/about.css */ "./assets/styles/sections/about.css");
/* harmony import */ var _styles_sections_skills_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/skills.css */ "./assets/styles/sections/skills.css");
/* harmony import */ var _styles_sections_sevices_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/sections/sevices.css */ "./assets/styles/sections/sevices.css");
/* harmony import */ var _styles_sections_grades_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/sections/grades.css */ "./assets/styles/sections/grades.css");
/* harmony import */ var _styles_sections_works_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/sections/works.css */ "./assets/styles/sections/works.css");
/* harmony import */ var _styles_sections_contact_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/sections/contact.css */ "./assets/styles/sections/contact.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/main */ "./assets/js/main.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
















// start the Stimulus application
// import './bootstrap';



/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.from-entries.js */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mixitup */ "./node_modules/mixitup/dist/mixitup.js");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_23__);

















function isServicesCardScrool(event) {
  var eventTrget = event.target;
  var eventClassName = eventTrget.className;
  return;
  eventClassName == "services_info" || eventClassName == "services_title" || eventClassName == "services_card" || eventClassName == "grades_container" || eventClassName == "grades_title" || eventClassName == "grades_card_sub_text";
}
function scrollSections() {
  var isScrolling = false; // Pour éviter un défilement multiple pendant l'animation
  var sections = jquery__WEBPACK_IMPORTED_MODULE_16___default()(".section");
  var currentSection = 0;
  var touchStartY = 0; // Pour enregistrer la position de départ du toucher sur mobile

  // Fonction pour faire défiler vers une section spécifique
  function scrollToSection(index) {
    isScrolling = true;
    document.body.style.overflow = "hidden";
    console.log(jquery__WEBPACK_IMPORTED_MODULE_16___default()(sections[index]));
    jquery__WEBPACK_IMPORTED_MODULE_16___default()("html, body").animate({
      scrollTop: jquery__WEBPACK_IMPORTED_MODULE_16___default()(sections[index]).offset().top
    }, 200, function () {
      isScrolling = false; // Réinitialiser après l'animation
    });
  }

  // Gestion de la roulette de la souris (Desktop)
  jquery__WEBPACK_IMPORTED_MODULE_16___default()(window).on("wheel", function (event) {
    if (isServicesCardScrool(event)) return;
    if (isScrolling) return; // Ignorer si on est déjà en train de scroller

    if (event.originalEvent.deltaY > 0) {
      // Défilement vers le bas
      if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else {
      // Défilement vers le haut
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });

  // Gestion des clics sur les liens de navigation
  jquery__WEBPACK_IMPORTED_MODULE_16___default()(".nav_link").on("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut des ancres
    var index = jquery__WEBPACK_IMPORTED_MODULE_16___default()(this).data("index"); // Récupère l'index depuis l'attribut data-index
    currentSection = index; // Met à jour la section actuelle
    scrollToSection(currentSection); // Fait défiler jusqu'à la section correspondante
    event.preventDefault(); // Empêche le comportement par défaut des ancres
  });

  // Gestion des gestes tactiles (Mobile)
  jquery__WEBPACK_IMPORTED_MODULE_16___default()(window).on("touchstart", function (event) {
    if (isServicesCardScrool(event)) return;
    touchStartY = event.originalEvent.touches[0].clientY; // Position initiale du toucher
  });
  jquery__WEBPACK_IMPORTED_MODULE_16___default()(window).on("touchmove", function (event) {
    if (isServicesCardScrool(event)) return;
    if (isScrolling) return; // Ignorer si on est déjà en train de scroller

    var touchEndY = event.originalEvent.touches[0].clientY; // Position du toucher pendant le mouvement
    var touchDiff = touchStartY - touchEndY; // Différence pour détecter la direction du défilement

    // Seulement si le défilement est suffisamment long pour éviter des mouvements trop sensibles
    if (Math.abs(touchDiff) > 100) {
      if (touchDiff > 0) {
        // Défilement vers le bas
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else {
        // Défilement vers le haut
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }

    // Empêche la propagation de l'événement pour éviter les comportements inattendus
    event.preventDefault();
  });

  // Pour scroller via le menu de navigation
  // $("nav a").on("click", function (e) {
  //   e.preventDefault();
  //   currentSection = $(this).parent().find("a").index(this); // Mettre à jour la section actuelle
  //   scrollToSection(currentSection);
  // });
}
function disableScroll() {
  window.scrollTo(0, 0); // Définit la position de défilement au haut de la page
  // Désactiver le défilement
  document.body.style.overflow = "hidden";

  // Réactiver le défilement après 2 secondes
  setTimeout(function () {
    scrollSections();
  }, 2000);
}
disableScroll();

// SERVICES MODAL //

var modalViews = document.querySelectorAll(".services_modal"),
  modalButtons = document.querySelectorAll(".services_button"),
  modalClose = document.querySelectorAll(".services_modal_close");
var modal = function modal(modalClick) {
  var modalSelected = modalViews[modalClick];
  var modalCassList = modalSelected.classList.value;
  modalCassList.includes("active_modal") ? modalSelected.classList.remove("active_modal") : modalSelected.classList.add("active_modal");
};
modalButtons.forEach(function (mb, i) {
  mb.addEventListener("click", function () {
    modal(i);
  });
});
modalClose.forEach(function (mb, i) {
  mb.addEventListener("click", function () {
    modal(i);
  });
});

// grades SECTION //
// // pagination

var elementsPerPage = 9;
var paginatNbContainer = document.querySelector("#paginate_container");
var loadFilter = "all";
var linkGrades = document.querySelectorAll(".grades_item");
function activegrades() {
  var paginate_container = document.querySelectorAll(".paginate_container_nb");
  var filterClass = this.dataset.filter.replace("_1", "").replace(".", "");
  linkGrades.forEach(function (el) {
    el.classList.remove("active_grades");
  });
  this.classList.add("active_grades");
  paginate_container.forEach(function (el) {
    el.classList.remove("paginate_container_nb_active");
  });
  document.querySelector(".paginatNb-" + filterClass).classList.add("paginate_container_nb_active");
}
linkGrades.forEach(function (el) {
  return linkGradesFn(el);
});
function linkGradesFn(el) {
  var dataFilter = el.dataset.filter;
  dataFilter = dataFilter.replace("_1", "").replace(".", "");
  appendPagesNb(dataFilter);
  el.addEventListener("click", activegrades);
}
function appendPagesNb(className) {
  var parent = document.createElement("div");
  parent.classList.add("paginatNb-" + className);
  parent.classList.add("paginate_container_nb");
  if (className == loadFilter) {
    parent.classList.add("paginate_container_nb_active");
  }
  var maxPg = nbMaxPg(className);
  for (var i = 1; i <= maxPg; i++) {
    var html = document.createElement("div");
    html.classList.add("grades_item_pg");
    html.innerText = i.toString();
    html.dataset.filter = "." + className + "_" + i;
    parent.append(html);
  }
  paginatNbContainer.appendChild(parent);
  document.querySelector("#paginate_container").appendChild(parent);
}
function nbMaxPg(className) {
  var gradesCards = document.querySelectorAll("." + className);
  var gradesCardsCount = gradesCards.length;
  addFilteClassgradesCards(gradesCards, className);
  return Math.ceil(gradesCardsCount / elementsPerPage);
}
function addFilteClassgradesCards(gradesCards, className) {
  gradesCards.forEach(function (el, i) {
    var index = i + 1;
    var classEl = Math.ceil(index / elementsPerPage);
    el.classList.add(className + "_" + classEl);
  });
}

mixitup__WEBPACK_IMPORTED_MODULE_17___default()(".grades_container", {
  selectors: {
    target: ".grades_card"
  },
  animation: {
    duration: 300
  },
  load: {
    filter: "." + loadFilter + "_1"
  }
});

// Home SECTION //

var sr = (0,scrollreveal__WEBPACK_IMPORTED_MODULE_18__["default"])({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 600
});
sr.reveal(".home_data");
sr.reveal(".home_handle", {
  delay: 900
});
sr.reveal(".home_social, .home_scroll", {
  delay: 1100,
  origin: "bottom"
});

// paralaxx

var home_section = document.getElementById("home");
var home_img = document.getElementById("home_img");
home_section.addEventListener("mousemove", parallax);
function parallax(event) {
  var x = (window.innerWidth - event.pageX) / 90;
  var y = -(window.innerHeight - event.pageY) / 90;
  home_img.style.left = x + "px";
  home_img.style.bottom = y >= 0 ? 0 : y + "px";
}

// works section

// core version + navigation, pagination modules:

// import Swiper and modules styles



new swiper__WEBPACK_IMPORTED_MODULE_19__["default"](".works_container", {
  // Optional parameters

  modules: [swiper__WEBPACK_IMPORTED_MODULE_19__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_19__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_19__.Autoplay],
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: false,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
var contactSendBtn = document.querySelector(".contact_send_button");
contactSendBtn.addEventListener("click", sendHttpR);
function sendHttpR() {
  var form = document.querySelector("form");
  var formData = new FormData(form);
  formData = Object.fromEntries(formData);
  var xhr = new XMLHttpRequest();
  var url = "";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      contactSendBtn.textContent = "message sent !!";
      document.querySelectorAll(".contact_form_input").forEach(function (e) {
        e.value = "";
      });
    }
  };
  var data = JSON.stringify(formData);
  xhr.send(data);
}

document.addEventListener("DOMContentLoaded", function () {
  var controller = new (scrollmagic__WEBPACK_IMPORTED_MODULE_23___default().Controller)();
  document.querySelectorAll("section").forEach(function (section) {
    var id = section.getAttribute("id");
    var navLinkSelector = "a[href=\"#".concat(id, "\"]");

    // Vérifiez que l'élément existe avant de le passer à setClassToggle
    if (document.querySelector(navLinkSelector)) {
      new (scrollmagic__WEBPACK_IMPORTED_MODULE_23___default().Scene)({
        triggerElement: "#".concat(id),
        triggerHook: 0.5,
        duration: section.offsetHeight
      }).setClassToggle(navLinkSelector, "active-link").addTo(controller);
    }
  });
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/base.css":
/*!********************************!*\
  !*** ./assets/styles/base.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/components/buttons.css":
/*!**********************************************!*\
  !*** ./assets/styles/components/buttons.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/components/footer.css":
/*!*********************************************!*\
  !*** ./assets/styles/components/footer.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/components/header.css":
/*!*********************************************!*\
  !*** ./assets/styles/components/header.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/components/scroll_bar.css":
/*!*************************************************!*\
  !*** ./assets/styles/components/scroll_bar.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/fonts.css":
/*!*********************************!*\
  !*** ./assets/styles/fonts.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/about.css":
/*!******************************************!*\
  !*** ./assets/styles/sections/about.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/contact.css":
/*!********************************************!*\
  !*** ./assets/styles/sections/contact.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/grades.css":
/*!*******************************************!*\
  !*** ./assets/styles/sections/grades.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/home.css":
/*!*****************************************!*\
  !*** ./assets/styles/sections/home.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/sevices.css":
/*!********************************************!*\
  !*** ./assets/styles/sections/sevices.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/skills.css":
/*!*******************************************!*\
  !*** ./assets/styles/sections/skills.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sections/works.css":
/*!******************************************!*\
  !*** ./assets/styles/sections/works.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/variables.css":
/*!*************************************!*\
  !*** ./assets/styles/variables.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_swiper_modules_navigation_navigation_-7ecd80"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxnQkFBQUMsTUFBQSxDQUFlSCxFQUFFLFFBQUk7O0lBRTFDO0lBQ0EsSUFBSXRJLFFBQVEsQ0FBQzZDLGFBQWEsQ0FBQzJGLGVBQWUsQ0FBQyxFQUFFO01BQzNDLElBQUlOLDJEQUFpQixDQUFDO1FBQ3BCUyxjQUFjLE1BQUFGLE1BQUEsQ0FBTUgsRUFBRSxDQUFFO1FBQ3hCTSxXQUFXLEVBQUUsR0FBRztRQUNoQmpFLFFBQVEsRUFBRTBELE9BQU8sQ0FBQ1E7TUFDcEIsQ0FBQyxDQUFDLENBQ0NDLGNBQWMsQ0FBQ04sZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUM5Q08sS0FBSyxDQUFDWixVQUFVLENBQUM7SUFDdEI7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDMVZGOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jhc2UuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvc2Nyb2xsX2Jhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zZWN0aW9ucy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zZWN0aW9ucy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlY3Rpb25zL2dyYWRlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zZWN0aW9ucy9ob21lLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlY3Rpb25zL3NldmljZXMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2VjdGlvbnMvc2tpbGxzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlY3Rpb25zL3dvcmtzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvdmFyaWFibGVzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2ZvbnRzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Jhc2UuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbXBvbmVudHMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbXBvbmVudHMvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbXBvbmVudHMvc2Nyb2xsX2Jhci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zZWN0aW9ucy9ob21lLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NlY3Rpb25zL2Fib3V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NlY3Rpb25zL3NraWxscy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zZWN0aW9ucy9zZXZpY2VzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NlY3Rpb25zL2dyYWRlcy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zZWN0aW9ucy93b3Jrcy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zZWN0aW9ucy9jb250YWN0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbi8vIGltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4vanMvbWFpbiciLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cblxuZnVuY3Rpb24gaXNTZXJ2aWNlc0NhcmRTY3Jvb2woZXZlbnQpe1xuICAgIGxldCBldmVudFRyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBldmVudENsYXNzTmFtZSA9IGV2ZW50VHJnZXQuY2xhc3NOYW1lO1xuICAgIHJldHVybiBcbiAgICAgIGV2ZW50Q2xhc3NOYW1lID09IFwic2VydmljZXNfaW5mb1wiIHx8XG4gICAgICBldmVudENsYXNzTmFtZSA9PSBcInNlcnZpY2VzX3RpdGxlXCIgfHxcbiAgICAgIGV2ZW50Q2xhc3NOYW1lID09IFwic2VydmljZXNfY2FyZFwiIHx8IFxuICAgICAgZXZlbnRDbGFzc05hbWUgPT0gXCJncmFkZXNfY29udGFpbmVyXCIgfHxcbiAgICAgIGV2ZW50Q2xhc3NOYW1lID09IFwiZ3JhZGVzX3RpdGxlXCIgfHxcbiAgICAgIGV2ZW50Q2xhc3NOYW1lID09IFwiZ3JhZGVzX2NhcmRfc3ViX3RleHRcIiBcblxufVxuZnVuY3Rpb24gc2Nyb2xsU2VjdGlvbnMoKSB7XG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyBQb3VyIMOpdml0ZXIgdW4gZMOpZmlsZW1lbnQgbXVsdGlwbGUgcGVuZGFudCBsJ2FuaW1hdGlvblxuICBjb25zdCBzZWN0aW9ucyA9ICQoXCIuc2VjdGlvblwiKTtcbiAgbGV0IGN1cnJlbnRTZWN0aW9uID0gMDtcbiAgbGV0IHRvdWNoU3RhcnRZID0gMDsgLy8gUG91ciBlbnJlZ2lzdHJlciBsYSBwb3NpdGlvbiBkZSBkw6lwYXJ0IGR1IHRvdWNoZXIgc3VyIG1vYmlsZVxuXG4gIC8vIEZvbmN0aW9uIHBvdXIgZmFpcmUgZMOpZmlsZXIgdmVycyB1bmUgc2VjdGlvbiBzcMOpY2lmaXF1ZVxuICBmdW5jdGlvbiBzY3JvbGxUb1NlY3Rpb24oaW5kZXgpIHtcbiAgICBpc1Njcm9sbGluZyA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgY29uc29sZS5sb2coJChzZWN0aW9uc1tpbmRleF0pKVxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICB7XG4gICAgICAgIHNjcm9sbFRvcDogJChzZWN0aW9uc1tpbmRleF0pLm9mZnNldCgpLnRvcCxcbiAgICAgIH0sXG4gICAgICAyMDAsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzU2Nyb2xsaW5nID0gZmFsc2U7IC8vIFLDqWluaXRpYWxpc2VyIGFwcsOocyBsJ2FuaW1hdGlvblxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBHZXN0aW9uIGRlIGxhIHJvdWxldHRlIGRlIGxhIHNvdXJpcyAoRGVza3RvcClcbiAgJCh3aW5kb3cpLm9uKFwid2hlZWxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGlzU2VydmljZXNDYXJkU2Nyb29sKGV2ZW50KSkgcmV0dXJuO1xuICAgIGlmIChpc1Njcm9sbGluZykgcmV0dXJuOyAvLyBJZ25vcmVyIHNpIG9uIGVzdCBkw6lqw6AgZW4gdHJhaW4gZGUgc2Nyb2xsZXJcblxuICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgIC8vIETDqWZpbGVtZW50IHZlcnMgbGUgYmFzXG4gICAgICBpZiAoY3VycmVudFNlY3Rpb24gPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGN1cnJlbnRTZWN0aW9uKys7XG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbihjdXJyZW50U2VjdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIETDqWZpbGVtZW50IHZlcnMgbGUgaGF1dFxuICAgICAgaWYgKGN1cnJlbnRTZWN0aW9uID4gMCkge1xuICAgICAgICBjdXJyZW50U2VjdGlvbi0tO1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oY3VycmVudFNlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gR2VzdGlvbiBkZXMgY2xpY3Mgc3VyIGxlcyBsaWVucyBkZSBuYXZpZ2F0aW9uXG4kKFwiLm5hdl9saW5rXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gRW1ww6pjaGUgbGUgY29tcG9ydGVtZW50IHBhciBkw6lmYXV0IGRlcyBhbmNyZXNcbiAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YShcImluZGV4XCIpOyAvLyBSw6ljdXDDqHJlIGwnaW5kZXggZGVwdWlzIGwnYXR0cmlidXQgZGF0YS1pbmRleFxuICAgIGN1cnJlbnRTZWN0aW9uID0gaW5kZXg7IC8vIE1ldCDDoCBqb3VyIGxhIHNlY3Rpb24gYWN0dWVsbGVcbiAgICBzY3JvbGxUb1NlY3Rpb24oY3VycmVudFNlY3Rpb24pOyAvLyBGYWl0IGTDqWZpbGVyIGp1c3F1J8OgIGxhIHNlY3Rpb24gY29ycmVzcG9uZGFudGVcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBFbXDDqmNoZSBsZSBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdXQgZGVzIGFuY3Jlc1xuXG59KTtcblxuICAvLyBHZXN0aW9uIGRlcyBnZXN0ZXMgdGFjdGlsZXMgKE1vYmlsZSlcbiAgJCh3aW5kb3cpLm9uKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoaXNTZXJ2aWNlc0NhcmRTY3Jvb2woZXZlbnQpKSByZXR1cm47XG4gICAgdG91Y2hTdGFydFkgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTsgLy8gUG9zaXRpb24gaW5pdGlhbGUgZHUgdG91Y2hlclxuICB9KTtcblxuICAkKHdpbmRvdykub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGlzU2VydmljZXNDYXJkU2Nyb29sKGV2ZW50KSkgcmV0dXJuO1xuICAgIGlmIChpc1Njcm9sbGluZykgcmV0dXJuOyAvLyBJZ25vcmVyIHNpIG9uIGVzdCBkw6lqw6AgZW4gdHJhaW4gZGUgc2Nyb2xsZXJcblxuICAgIGxldCB0b3VjaEVuZFkgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTsgLy8gUG9zaXRpb24gZHUgdG91Y2hlciBwZW5kYW50IGxlIG1vdXZlbWVudFxuICAgIGxldCB0b3VjaERpZmYgPSB0b3VjaFN0YXJ0WSAtIHRvdWNoRW5kWTsgLy8gRGlmZsOpcmVuY2UgcG91ciBkw6l0ZWN0ZXIgbGEgZGlyZWN0aW9uIGR1IGTDqWZpbGVtZW50XG5cbiAgICAvLyBTZXVsZW1lbnQgc2kgbGUgZMOpZmlsZW1lbnQgZXN0IHN1ZmZpc2FtbWVudCBsb25nIHBvdXIgw6l2aXRlciBkZXMgbW91dmVtZW50cyB0cm9wIHNlbnNpYmxlc1xuICAgIGlmIChNYXRoLmFicyh0b3VjaERpZmYpID4gMTAwKSB7XG4gICAgICBpZiAodG91Y2hEaWZmID4gMCkge1xuICAgICAgICAvLyBEw6lmaWxlbWVudCB2ZXJzIGxlIGJhc1xuICAgICAgICBpZiAoY3VycmVudFNlY3Rpb24gPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY3VycmVudFNlY3Rpb24rKztcbiAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oY3VycmVudFNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEw6lmaWxlbWVudCB2ZXJzIGxlIGhhdXRcbiAgICAgICAgaWYgKGN1cnJlbnRTZWN0aW9uID4gMCkge1xuICAgICAgICAgIGN1cnJlbnRTZWN0aW9uLS07XG4gICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKGN1cnJlbnRTZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVtcMOqY2hlIGxhIHByb3BhZ2F0aW9uIGRlIGwnw6l2w6luZW1lbnQgcG91ciDDqXZpdGVyIGxlcyBjb21wb3J0ZW1lbnRzIGluYXR0ZW5kdXNcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICAvLyBQb3VyIHNjcm9sbGVyIHZpYSBsZSBtZW51IGRlIG5hdmlnYXRpb25cbiAgLy8gJChcIm5hdiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY3VycmVudFNlY3Rpb24gPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJhXCIpLmluZGV4KHRoaXMpOyAvLyBNZXR0cmUgw6Agam91ciBsYSBzZWN0aW9uIGFjdHVlbGxlXG4gIC8vICAgc2Nyb2xsVG9TZWN0aW9uKGN1cnJlbnRTZWN0aW9uKTtcbiAgLy8gfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgLy8gRMOpZmluaXQgbGEgcG9zaXRpb24gZGUgZMOpZmlsZW1lbnQgYXUgaGF1dCBkZSBsYSBwYWdlXG4gIC8vIETDqXNhY3RpdmVyIGxlIGTDqWZpbGVtZW50XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIC8vIFLDqWFjdGl2ZXIgbGUgZMOpZmlsZW1lbnQgYXByw6hzIDIgc2Vjb25kZXNcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2Nyb2xsU2VjdGlvbnMoKTtcbiAgfSwgMjAwMCk7XG59XG5cbmRpc2FibGVTY3JvbGwoKVxuXG4vLyBTRVJWSUNFUyBNT0RBTCAvL1xuXG5jb25zdCBtb2RhbFZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19tb2RhbFwiKSxcbiAgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19idXR0b25cIiksXG4gIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX21vZGFsX2Nsb3NlXCIpO1xuXG5sZXQgbW9kYWwgPSAobW9kYWxDbGljaykgPT4ge1xuICBsZXQgbW9kYWxTZWxlY3RlZCA9IG1vZGFsVmlld3NbbW9kYWxDbGlja107XG4gIGxldCBtb2RhbENhc3NMaXN0ID0gbW9kYWxTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWU7XG4gIG1vZGFsQ2Fzc0xpc3QuaW5jbHVkZXMoXCJhY3RpdmVfbW9kYWxcIilcbiAgICA/IG1vZGFsU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9tb2RhbFwiKVxuICAgIDogbW9kYWxTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX21vZGFsXCIpO1xufTtcblxubW9kYWxCdXR0b25zLmZvckVhY2goKG1iLCBpKSA9PiB7XG4gIG1iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwoaSk7XG4gIH0pO1xufSk7XG5cbm1vZGFsQ2xvc2UuZm9yRWFjaCgobWIsIGkpID0+IHtcbiAgbWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbChpKTtcbiAgfSk7XG59KTtcblxuLy8gZ3JhZGVzIFNFQ1RJT04gLy9cbi8vIC8vIHBhZ2luYXRpb25cblxuY29uc3QgZWxlbWVudHNQZXJQYWdlID0gOTtcbmNvbnN0IHBhZ2luYXROYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnaW5hdGVfY29udGFpbmVyXCIpO1xuY29uc3QgbG9hZEZpbHRlciA9IFwiYWxsXCI7XG5cbmNvbnN0IGxpbmtHcmFkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyYWRlc19pdGVtXCIpO1xuXG5mdW5jdGlvbiBhY3RpdmVncmFkZXMoKSB7XG4gIGxldCBwYWdpbmF0ZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2luYXRlX2NvbnRhaW5lcl9uYlwiKTtcblxuICBsZXQgZmlsdGVyQ2xhc3MgPSB0aGlzLmRhdGFzZXQuZmlsdGVyLnJlcGxhY2UoXCJfMVwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcblxuICBsaW5rR3JhZGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9ncmFkZXNcIik7XG4gIH0pO1xuXG4gIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9ncmFkZXNcIik7XG5cbiAgcGFnaW5hdGVfY29udGFpbmVyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2luYXRlX2NvbnRhaW5lcl9uYl9hY3RpdmVcIik7XG4gIH0pO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdE5iLVwiICsgZmlsdGVyQ2xhc3MpXG4gICAgLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0ZV9jb250YWluZXJfbmJfYWN0aXZlXCIpO1xufVxuXG5saW5rR3JhZGVzLmZvckVhY2goKGVsKSA9PiBsaW5rR3JhZGVzRm4oZWwpKTtcblxuZnVuY3Rpb24gbGlua0dyYWRlc0ZuKGVsKSB7XG4gIGxldCBkYXRhRmlsdGVyID0gZWwuZGF0YXNldC5maWx0ZXI7XG4gIGRhdGFGaWx0ZXIgPSBkYXRhRmlsdGVyLnJlcGxhY2UoXCJfMVwiLCBcIlwiKS5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgYXBwZW5kUGFnZXNOYihkYXRhRmlsdGVyKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2ZWdyYWRlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBhZ2VzTmIoY2xhc3NOYW1lKSB7XG4gIGxldCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcInBhZ2luYXROYi1cIiArIGNsYXNzTmFtZSk7XG4gIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGVfY29udGFpbmVyX25iXCIpO1xuXG4gIGlmIChjbGFzc05hbWUgPT0gbG9hZEZpbHRlcikge1xuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGVfY29udGFpbmVyX25iX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIGxldCBtYXhQZyA9IG5iTWF4UGcoY2xhc3NOYW1lKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhQZzsgaSsrKSB7XG4gICAgbGV0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGh0bWwuY2xhc3NMaXN0LmFkZChcImdyYWRlc19pdGVtX3BnXCIpO1xuICAgIGh0bWwuaW5uZXJUZXh0ID0gaS50b1N0cmluZygpO1xuICAgIGh0bWwuZGF0YXNldC5maWx0ZXIgPSBcIi5cIiArIGNsYXNzTmFtZSArIFwiX1wiICsgaTtcbiAgICBwYXJlbnQuYXBwZW5kKGh0bWwpO1xuICB9XG4gIHBhZ2luYXROYkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJlbnQpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2luYXRlX2NvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBuYk1heFBnKGNsYXNzTmFtZSkge1xuICBsZXQgZ3JhZGVzQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgY2xhc3NOYW1lKTtcbiAgbGV0IGdyYWRlc0NhcmRzQ291bnQgPSBncmFkZXNDYXJkcy5sZW5ndGg7XG5cbiAgYWRkRmlsdGVDbGFzc2dyYWRlc0NhcmRzKGdyYWRlc0NhcmRzLCBjbGFzc05hbWUpO1xuXG4gIHJldHVybiBNYXRoLmNlaWwoZ3JhZGVzQ2FyZHNDb3VudCAvIGVsZW1lbnRzUGVyUGFnZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZpbHRlQ2xhc3NncmFkZXNDYXJkcyhncmFkZXNDYXJkcywgY2xhc3NOYW1lKSB7XG4gIGdyYWRlc0NhcmRzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gaSArIDE7XG4gICAgbGV0IGNsYXNzRWwgPSBNYXRoLmNlaWwoaW5kZXggLyBlbGVtZW50c1BlclBhZ2UpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lICsgXCJfXCIgKyBjbGFzc0VsKTtcbiAgfSk7XG59XG5cbmltcG9ydCBtaXhpdHVwIGZyb20gXCJtaXhpdHVwXCI7XG5cbm1peGl0dXAoXCIuZ3JhZGVzX2NvbnRhaW5lclwiLCB7XG4gIHNlbGVjdG9yczoge1xuICAgIHRhcmdldDogXCIuZ3JhZGVzX2NhcmRcIixcbiAgfSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgZHVyYXRpb246IDMwMCxcbiAgfSxcbiAgbG9hZDoge1xuICAgIGZpbHRlcjogXCIuXCIgKyBsb2FkRmlsdGVyICsgXCJfMVwiLFxuICB9LFxufSk7XG5cbi8vIEhvbWUgU0VDVElPTiAvL1xuaW1wb3J0IFNjcm9sbFJldmVhbCBmcm9tIFwic2Nyb2xscmV2ZWFsXCI7XG5jb25zdCBzciA9IFNjcm9sbFJldmVhbCh7XG4gIG9yaWdpbjogXCJ0b3BcIixcbiAgZGlzdGFuY2U6IFwiNjBweFwiLFxuICBkdXJhdGlvbjogMjUwMCxcbiAgZGVsYXk6IDYwMCxcbn0pO1xuXG5zci5yZXZlYWwoXCIuaG9tZV9kYXRhXCIpO1xuc3IucmV2ZWFsKFwiLmhvbWVfaGFuZGxlXCIsIHsgZGVsYXk6IDkwMCB9KTtcbnNyLnJldmVhbChcIi5ob21lX3NvY2lhbCwgLmhvbWVfc2Nyb2xsXCIsIHsgZGVsYXk6IDExMDAsIG9yaWdpbjogXCJib3R0b21cIiB9KTtcblxuLy8gcGFyYWxheHhcblxuY29uc3QgaG9tZV9zZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgaG9tZV9pbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVfaW1nXCIpO1xuXG5ob21lX3NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwYXJhbGxheCk7XG5cbmZ1bmN0aW9uIHBhcmFsbGF4KGV2ZW50KSB7XG4gIGNvbnN0IHggPSAod2luZG93LmlubmVyV2lkdGggLSBldmVudC5wYWdlWCkgLyA5MDtcbiAgY29uc3QgeSA9IC0od2luZG93LmlubmVySGVpZ2h0IC0gZXZlbnQucGFnZVkpIC8gOTA7XG4gIGhvbWVfaW1nLnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICBob21lX2ltZy5zdHlsZS5ib3R0b20gPSB5ID49IDAgPyAwIDogeSArIFwicHhcIjtcbn1cblxuLy8gd29ya3Mgc2VjdGlvblxuXG4vLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uIG1vZHVsZXM6XG5pbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5IH0gZnJvbSBcInN3aXBlclwiO1xuLy8gaW1wb3J0IFN3aXBlciBhbmQgbW9kdWxlcyBzdHlsZXNcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5cbm5ldyBTd2lwZXIoXCIud29ya3NfY29udGFpbmVyXCIsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuXG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheV0sXG5cbiAgc2xpZGVzUGVyVmlldzogMixcbiAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgbG9vcDogdHJ1ZSxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBncmFiQ3Vyc29yOiB0cnVlLFxuXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDI1MDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICAvLyBuYXZpZ2F0aW9uOiB7XG4gIC8vICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgLy8gICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAvLyB9LFxufSk7XG5cbmxldCBjb250YWN0U2VuZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdF9zZW5kX2J1dHRvblwiKTtcbmNvbnRhY3RTZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kSHR0cFIpO1xuXG5mdW5jdGlvbiBzZW5kSHR0cFIoKSB7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgZm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgdmFyIHVybCA9IFwiXCI7XG4gIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29udGFjdFNlbmRCdG4udGV4dENvbnRlbnQgPSBcIm1lc3NhZ2Ugc2VudCAhIVwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWN0X2Zvcm1faW5wdXRcIikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLnZhbHVlID0gXCJcIjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSk7XG4gIHhoci5zZW5kKGRhdGEpO1xufVxuXG5pbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSBcInNjcm9sbG1hZ2ljXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBpZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgY29uc3QgbmF2TGlua1NlbGVjdG9yID0gYGFbaHJlZj1cIiMke2lkfVwiXWA7XG5cbiAgICAvLyBWw6lyaWZpZXogcXVlIGwnw6lsw6ltZW50IGV4aXN0ZSBhdmFudCBkZSBsZSBwYXNzZXIgw6Agc2V0Q2xhc3NUb2dnbGVcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZMaW5rU2VsZWN0b3IpKSB7XG4gICAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogYCMke2lkfWAsXG4gICAgICAgIHRyaWdnZXJIb29rOiAwLjUsXG4gICAgICAgIGR1cmF0aW9uOiBzZWN0aW9uLm9mZnNldEhlaWdodCxcbiAgICAgIH0pXG4gICAgICAgIC5zZXRDbGFzc1RvZ2dsZShuYXZMaW5rU2VsZWN0b3IsIFwiYWN0aXZlLWxpbmtcIilcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwiaXNTZXJ2aWNlc0NhcmRTY3Jvb2wiLCJldmVudCIsImV2ZW50VHJnZXQiLCJ0YXJnZXQiLCJldmVudENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInNjcm9sbFNlY3Rpb25zIiwiaXNTY3JvbGxpbmciLCJzZWN0aW9ucyIsImN1cnJlbnRTZWN0aW9uIiwidG91Y2hTdGFydFkiLCJzY3JvbGxUb1NlY3Rpb24iLCJpbmRleCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsIm9uIiwib3JpZ2luYWxFdmVudCIsImRlbHRhWSIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInRvdWNoZXMiLCJjbGllbnRZIiwidG91Y2hFbmRZIiwidG91Y2hEaWZmIiwiTWF0aCIsImFicyIsImRpc2FibGVTY3JvbGwiLCJzY3JvbGxUbyIsInNldFRpbWVvdXQiLCJtb2RhbFZpZXdzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsQnV0dG9ucyIsIm1vZGFsQ2xvc2UiLCJtb2RhbCIsIm1vZGFsQ2xpY2siLCJtb2RhbFNlbGVjdGVkIiwibW9kYWxDYXNzTGlzdCIsImNsYXNzTGlzdCIsInZhbHVlIiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwibWIiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnRzUGVyUGFnZSIsInBhZ2luYXROYkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkRmlsdGVyIiwibGlua0dyYWRlcyIsImFjdGl2ZWdyYWRlcyIsInBhZ2luYXRlX2NvbnRhaW5lciIsImZpbHRlckNsYXNzIiwiZGF0YXNldCIsImZpbHRlciIsInJlcGxhY2UiLCJlbCIsImxpbmtHcmFkZXNGbiIsImRhdGFGaWx0ZXIiLCJhcHBlbmRQYWdlc05iIiwicGFyZW50IiwiY3JlYXRlRWxlbWVudCIsIm1heFBnIiwibmJNYXhQZyIsImh0bWwiLCJpbm5lclRleHQiLCJ0b1N0cmluZyIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiZ3JhZGVzQ2FyZHMiLCJncmFkZXNDYXJkc0NvdW50IiwiYWRkRmlsdGVDbGFzc2dyYWRlc0NhcmRzIiwiY2VpbCIsImNsYXNzRWwiLCJtaXhpdHVwIiwic2VsZWN0b3JzIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJsb2FkIiwiU2Nyb2xsUmV2ZWFsIiwic3IiLCJvcmlnaW4iLCJkaXN0YW5jZSIsImRlbGF5IiwicmV2ZWFsIiwiaG9tZV9zZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJob21lX2ltZyIsInBhcmFsbGF4IiwieCIsImlubmVyV2lkdGgiLCJwYWdlWCIsInkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwibGVmdCIsImJvdHRvbSIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiQXV0b3BsYXkiLCJtb2R1bGVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJsb29wRmlsbEdyb3VwV2l0aEJsYW5rIiwiY2VudGVyZWRTbGlkZXMiLCJncmFiQ3Vyc29yIiwiYXV0b3BsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJjb250YWN0U2VuZEJ0biIsInNlbmRIdHRwUiIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInRleHRDb250ZW50IiwiZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kIiwiU2Nyb2xsTWFnaWMiLCJjb250cm9sbGVyIiwiQ29udHJvbGxlciIsInNlY3Rpb24iLCJpZCIsImdldEF0dHJpYnV0ZSIsIm5hdkxpbmtTZWxlY3RvciIsImNvbmNhdCIsIlNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJ0cmlnZ2VySG9vayIsIm9mZnNldEhlaWdodCIsInNldENsYXNzVG9nZ2xlIiwiYWRkVG8iXSwic291cmNlUm9vdCI6IiJ9