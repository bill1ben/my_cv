// Header changes on scroll //
const scrollHeader = () =>{
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SERVICES MODAL //

const modalViews = document.querySelectorAll(".services_modal"),
      modalButtons = document.querySelectorAll(".services_button"),
      modalClose = document.querySelectorAll(".services_modal_close");

let modal = (modalClick) => {
    let modalSelected =  modalViews[modalClick]
    let modalCassList = modalSelected.classList.value;
    modalCassList.includes("active_modal") ?
        modalSelected.classList.remove('active_modal') :
        modalSelected.classList.add('active_modal')
}

modalButtons.forEach((mb , i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mb , i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

// grades SECTION //
// // pagination

const elementsPerPage = 4;
const paginatNbContainer = document.querySelector('#paginate_container');
const loadFilter = 'all'

const linkGrades = document.querySelectorAll(".grades_item");

function activegrades() {
    let paginate_container = document.querySelectorAll(".paginate_container_nb");

    let filterClass = this.dataset.filter.replace('_1', '').replace('.', '')

    linkGrades.forEach(el => {
        el.classList.remove("active_grades")
    })

    this.classList.add("active_grades")


    paginate_container.forEach(el => {
        el.classList.remove("paginate_container_nb_active")
    })

    document.querySelector(".paginatNb-" + filterClass).classList.add("paginate_container_nb_active");

}

linkGrades.forEach((el) => linkGradesFn(el));

function linkGradesFn(el) {
    let dataFilter = el.dataset.filter;
    dataFilter = dataFilter.replace('_1', '').replace('.', '')
    appendPagesNb(dataFilter)
    el.addEventListener("click", activegrades);
}


function appendPagesNb(className) {
    let parent = document.createElement("div");
    parent.classList.add("paginatNb-" + className)
    parent.classList.add("paginate_container_nb")


    if(className == loadFilter){
        parent.classList.add("paginate_container_nb_active")
    }

    let maxPg = nbMaxPg(className);

    for(let i = 1 ; i <= maxPg ; i++) {
        let html = document.createElement("div")
        html.classList.add("grades_item_pg")
        html.innerText = i.toString();
        html.dataset.filter = "." + className + "_" + i;
        parent.append(html)
    }
    paginatNbContainer.appendChild(parent)
    document.querySelector("#paginate_container").appendChild(parent)
}

function nbMaxPg(className)
{
    let gradesCards  = document.querySelectorAll("." + className)
    let gradesCardsCount = gradesCards.length;

    addFilteClassgradesCards(gradesCards, className)

    return Math.ceil(gradesCardsCount / elementsPerPage);
}


function addFilteClassgradesCards(gradesCards, className)
{
    gradesCards.forEach((el, i) => {
        let index = i + 1;
        let classEl = Math.ceil(index / elementsPerPage)
        el.classList.add(className + "_" + classEl)
    });
}




import mixitup from 'mixitup';

mixitup(".grades_container", {
    selectors: {
        target: '.grades_card'
    },
    animation: {
        duration: 300
    },
    load: {
        filter: "." + loadFilter + "_1"
    }
});






// Home SECTION //
import ScrollReveal from 'scrollreveal';
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 600,
})

sr.reveal('.home_data')
sr.reveal('.home_handle', {delay: 900})
sr.reveal('.home_social, .home_scroll', {delay: 1100, origin: "bottom"})

// paralaxx

const home_section = document.getElementById('home')
const home_img = document.getElementById('home_img')

home_section.addEventListener("mousemove", parallax);

function parallax(event) {
    const x = (window.innerWidth - event.pageX) / 90;
    const y = - (window.innerHeight - event.pageY) / 90;
    home_img.style.left = x + "px";
    home_img.style.bottom =  y >= 0 ? 0 : y + "px";

}

// works section

  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  new Swiper('.works_container', {
    // Optional parameters

    modules: [Navigation, Pagination, Autoplay],

   slidesPerView: 2,
        spaceBetween: 15,
        slidesPerView: 2,
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


  let contactSendBtn = document.querySelector('.contact_send_button');
  contactSendBtn.addEventListener('click', sendHttpR)

  function sendHttpR()
  {

    let form =document.querySelector("form")
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
            document.querySelectorAll(".contact_form_input").forEach(e => {
                e.value = ''
            })
        }
    };
    var data = JSON.stringify(formData);
    xhr.send(data);
  }
