// import { function } from "prop-types"

// MENU SHOW
const showMenu = (toggleID, navId) => {
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// Remove menu Mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href *=' + sectionId +']').classList.add('active')
        }
        else{
            document.querySelector('.nav__menu a[href *=' + sectionId +']').classList.remove('active')
        }
    })
}



// // SCROLL REVEAL ANIMATION
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })

// // SCROLL HOME
// sr.reveal('.home__title',{})
// sr.reveal('.home__scroll',{delay: 200})
// sr.reveal('.home__img',{origin: right, delay: 400})