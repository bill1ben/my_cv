import $ from "jquery";


function isServicesCardScrool(event){
    let eventTrget = event.target;
    let eventClassName = eventTrget.className;
    return 
      eventClassName == "services_info" ||
      eventClassName == "services_title" ||
      eventClassName == "services_card" || 
      eventClassName == "grades_container" ||
      eventClassName == "grades_title" ||
      eventClassName == "grades_card_sub_text" 

}
function scrollSections() {
  let isScrolling = false; // Pour éviter un défilement multiple pendant l'animation
  const sections = $(".section");
  let currentSection = 0;
  let touchStartY = 0; // Pour enregistrer la position de départ du toucher sur mobile

  // Fonction pour faire défiler vers une section spécifique
  function scrollToSection(index) {
    isScrolling = true;
    document.body.style.overflow = "hidden";
    console.log($(sections[index]))
    $("html, body").animate(
      {
        scrollTop: $(sections[index]).offset().top,
      },
      200,
      function () {
        isScrolling = false; // Réinitialiser après l'animation
      }
    );
  }

  // Gestion de la roulette de la souris (Desktop)
  $(window).on("wheel", function (event) {
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
$(".nav_link").on("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut des ancres
    const index = $(this).data("index"); // Récupère l'index depuis l'attribut data-index
    currentSection = index; // Met à jour la section actuelle
    scrollToSection(currentSection); // Fait défiler jusqu'à la section correspondante
    event.preventDefault(); // Empêche le comportement par défaut des ancres

});

  // Gestion des gestes tactiles (Mobile)
  $(window).on("touchstart", function (event) {
    if (isServicesCardScrool(event)) return;
    touchStartY = event.originalEvent.touches[0].clientY; // Position initiale du toucher
  });

  $(window).on("touchmove", function (event) {
    if (isServicesCardScrool(event)) return;
    if (isScrolling) return; // Ignorer si on est déjà en train de scroller

    let touchEndY = event.originalEvent.touches[0].clientY; // Position du toucher pendant le mouvement
    let touchDiff = touchStartY - touchEndY; // Différence pour détecter la direction du défilement

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
  setTimeout(() => {
    scrollSections();
  }, 2000);
}

disableScroll()

// SERVICES MODAL //

const modalViews = document.querySelectorAll(".services_modal"),
  modalButtons = document.querySelectorAll(".services_button"),
  modalClose = document.querySelectorAll(".services_modal_close");

let modal = (modalClick) => {
  let modalSelected = modalViews[modalClick];
  let modalCassList = modalSelected.classList.value;
  modalCassList.includes("active_modal")
    ? modalSelected.classList.remove("active_modal")
    : modalSelected.classList.add("active_modal");
};

modalButtons.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

// grades SECTION //
// // pagination

const elementsPerPage = 9;
const paginatNbContainer = document.querySelector("#paginate_container");
const loadFilter = "all";

const linkGrades = document.querySelectorAll(".grades_item");

function activegrades() {
  let paginate_container = document.querySelectorAll(".paginate_container_nb");

  let filterClass = this.dataset.filter.replace("_1", "").replace(".", "");

  linkGrades.forEach((el) => {
    el.classList.remove("active_grades");
  });

  this.classList.add("active_grades");

  paginate_container.forEach((el) => {
    el.classList.remove("paginate_container_nb_active");
  });

  document
    .querySelector(".paginatNb-" + filterClass)
    .classList.add("paginate_container_nb_active");
}

linkGrades.forEach((el) => linkGradesFn(el));

function linkGradesFn(el) {
  let dataFilter = el.dataset.filter;
  dataFilter = dataFilter.replace("_1", "").replace(".", "");
  appendPagesNb(dataFilter);
  el.addEventListener("click", activegrades);
}

function appendPagesNb(className) {
  let parent = document.createElement("div");
  parent.classList.add("paginatNb-" + className);
  parent.classList.add("paginate_container_nb");

  if (className == loadFilter) {
    parent.classList.add("paginate_container_nb_active");
  }

  let maxPg = nbMaxPg(className);

  for (let i = 1; i <= maxPg; i++) {
    let html = document.createElement("div");
    html.classList.add("grades_item_pg");
    html.innerText = i.toString();
    html.dataset.filter = "." + className + "_" + i;
    parent.append(html);
  }
  paginatNbContainer.appendChild(parent);
  document.querySelector("#paginate_container").appendChild(parent);
}

function nbMaxPg(className) {
  let gradesCards = document.querySelectorAll("." + className);
  let gradesCardsCount = gradesCards.length;

  addFilteClassgradesCards(gradesCards, className);

  return Math.ceil(gradesCardsCount / elementsPerPage);
}

function addFilteClassgradesCards(gradesCards, className) {
  gradesCards.forEach((el, i) => {
    let index = i + 1;
    let classEl = Math.ceil(index / elementsPerPage);
    el.classList.add(className + "_" + classEl);
  });
}

import mixitup from "mixitup";

mixitup(".grades_container", {
  selectors: {
    target: ".grades_card",
  },
  animation: {
    duration: 300,
  },
  load: {
    filter: "." + loadFilter + "_1",
  },
});

// Home SECTION //
import ScrollReveal from "scrollreveal";
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 600,
});

sr.reveal(".home_data");
sr.reveal(".home_handle", { delay: 900 });
sr.reveal(".home_social, .home_scroll", { delay: 1100, origin: "bottom" });

// paralaxx

const home_section = document.getElementById("home");
const home_img = document.getElementById("home_img");

home_section.addEventListener("mousemove", parallax);

function parallax(event) {
  const x = (window.innerWidth - event.pageX) / 90;
  const y = -(window.innerHeight - event.pageY) / 90;
  home_img.style.left = x + "px";
  home_img.style.bottom = y >= 0 ? 0 : y + "px";
}

// works section

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".works_container", {
  // Optional parameters

  modules: [Navigation, Pagination, Autoplay],

  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: false,
  centeredSlides: true,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

let contactSendBtn = document.querySelector(".contact_send_button");
contactSendBtn.addEventListener("click", sendHttpR);

function sendHttpR() {
  let form = document.querySelector("form");
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
      document.querySelectorAll(".contact_form_input").forEach((e) => {
        e.value = "";
      });
    }
  };
  var data = JSON.stringify(formData);
  xhr.send(data);
}

import ScrollMagic from "scrollmagic";
document.addEventListener("DOMContentLoaded", () => {
  const controller = new ScrollMagic.Controller();

  document.querySelectorAll("section").forEach((section) => {
    const id = section.getAttribute("id");
    const navLinkSelector = `a[href="#${id}"]`;

    // Vérifiez que l'élément existe avant de le passer à setClassToggle
    if (document.querySelector(navLinkSelector)) {
      new ScrollMagic.Scene({
        triggerElement: `#${id}`,
        triggerHook: 0.5,
        duration: section.offsetHeight,
      })
        .setClassToggle(navLinkSelector, "active-link")
        .addTo(controller);
    }
  });
});
