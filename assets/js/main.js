
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