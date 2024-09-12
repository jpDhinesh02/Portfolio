/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 200,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(
  " .work__img, .contact__input,.skills__data_java,.skills__data_selenium,.skills__data_postman,.skills__data_restAssured,.skills__data_appium,.skills__data_jmeter,.skills__data_tcWriting,.skills__data_tcExe,.skills__data_bugReport,.experience__content,.Education__content,.skills__data_accessibility,.Projects__content",
  { interval: 200 }
);

/*===== Download Resume =====*/

document.getElementById("resumeButton").addEventListener("click", function () {
  var buttonText = document.getElementById("buttonText");
  var resumeButton = document.getElementById("resumeButton");

  buttonText.textContent = "Downloading...";
  resumeButton.classList.add("loading");
  setTimeout(function () {
    buttonText.textContent = "Resume";
    resumeButton.classList.remove("loading");
  }, 2000);
});

/*===== Theme Toogle =====*/
document.addEventListener("DOMContentLoaded", (event) => {
  const body = document.querySelector("body");
  const toggle = document.querySelector("#themeToggle");

  let getMode = localStorage.getItem("mode");

  if (getMode === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    toggle.checked = true;
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    toggle.checked = false;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  });

  document.addEventListener("click", function (event) {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navMenu.classList.remove("show");
    }
  });
});
