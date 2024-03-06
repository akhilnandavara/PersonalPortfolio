/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })

}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'), //Fetch all the skills_contents
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className;//extract class name
    // close all the skill content
    for (i = 0; i < skillsContent.length; i++) {
        // console.log("inside loop", skillsContent[i])
        skillsContent[i].className = 'skills_content skills_close'
    }
    // open only clicked skill content
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => { el.addEventListener('click', toggleSkills) })

/*==================== QUALIFICATION TABS ====================*/
let education = document.getElementById("education")
let work = document.getElementById("work");
let educationHeader = document.getElementById("educationHeader")
let workHeader = document.getElementById("workHeader");
educationHeader.style.color = "var(--first-color)";
workHeader.style.color = "var(--text-color)";

educationHeader.addEventListener('click', () => {
    let condition= education.classList.contains('dropDown_active')
    if (!condition) {
        education.classList.remove('dropDown_inactive');
        work.classList.remove('dropDown_active');
        work.classList.add('dropDown_inactive');
        education.classList.add('dropDown_active');
        educationHeader.style.color = "var(--first-color)";
        workHeader.style.color = "var(--text-color)";
    }
})
workHeader.addEventListener('click', () => {
    let condition= work.classList.contains('dropDown_active')
    if (!condition) {
        education.classList.add('dropDown_inactive');
        education.classList.remove('dropDown_active');
        work.classList.remove('dropDown_inactive');
        work.classList.add('dropDown_active');
        educationHeader.style.color = "var(--text-color)";
        workHeader.style.color = "var(--first-color)";
    }
})


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".swiper", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    direction:"horizontal",
    mousewheel: true,
    speed: 800, // Adjust the speed (in milliseconds)
    effect: "slide",
    keyboard: true,
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ===================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    sections.forEach(current =>{
     const scrollY=window.scrollY; // always true
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");//sytstem theme

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously choosen this theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//change default sytem theme
    if(darkThemeMq.matches){
    document.body.classList.add(darkTheme)
    themeButton.classList.add(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    }
   
    if(!darkThemeMq.matches){
        document.body.classList.remove(darkTheme)
        themeButton.classList.remove(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    }
    

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Typing Animation using Typed JS
var typed = new Typed(".type", {
    strings: ["a Web", "a proficient MERN stack"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 130,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });