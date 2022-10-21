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

// WORK SECTION //

import mixitup from 'mixitup';

let mixerPortfolio = mixitup(".work_container", {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

const linWork = document.querySelectorAll(".work_item");

function activeWork() {
    linWork.forEach(l => l.classList.remove("active_work"))
    this.classList.add("active_work")
};

linWork.forEach(l => l.addEventListener("click", activeWork));
