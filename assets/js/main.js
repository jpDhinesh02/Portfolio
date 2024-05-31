/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 200 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal(' .work__img, .contact__input,.skills__data_java,.skills__data_selenium,.skills__data_postman,.skills__data_restAssured,.skills__data_appium,.skills__data_jmeter,.skills__data_tcWriting,.skills__data_tcExe,.skills__data_bugReport,.experience__content,.Education__content,.skills__data_accessibility,.Projects__content', { interval: 200 });

/*===== Download Resume =====*/

document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('resume').addEventListener('click', function (event) {
        event.preventDefault(); 
        const link = document.createElement('a');
        link.href = 'path/to/local.pdf'; 
        link.setAttribute('download', 'resume.pdf'); 
        document.body.appendChild(link);

        
        link.click();

        
        document.body.removeChild(link);
    });
});





/*===== Theme Toogle =====*/
const body = document.querySelector("body");
const toggle = document.querySelector(".theme-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark-mode");
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (!body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
    toggle.classList.toggle("active");
});




