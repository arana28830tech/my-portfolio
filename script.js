/* =========================
MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {


navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {
    menuToggle.textContent = "✕";
} else {
    menuToggle.textContent = "☰";
}


});

/* =========================
CLOSE MOBILE MENU
AFTER CLICKING LINK
========================= */

const navigationLinks =
document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {


link.addEventListener("click", function () {

    navLinks.classList.remove("active");

    menuToggle.textContent = "☰";

});


});

/* =========================
DARK / LIGHT MODE
========================= */

const themeToggle =
document.getElementById("themeToggle");

function updateThemeIcon() {


if (document.body.classList.contains("light-theme")) {

    themeToggle.textContent = "🌙";

} else {

    themeToggle.textContent = "☀️";

}


}

themeToggle.addEventListener("click", function () {


document.body.classList.toggle("light-theme");

const isLight =
    document.body.classList.contains("light-theme");

localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
);

updateThemeIcon();


});

/* =========================
LOAD SAVED THEME
========================= */

const savedTheme =
localStorage.getItem("theme");

if (savedTheme === "light") {


document.body.classList.add("light-theme");


}

updateThemeIcon();

/* =========================
CURRENT YEAR
========================= */

const currentYear =
document.getElementById("currentYear");

currentYear.textContent =
new Date().getFullYear();

/* =========================
SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(
function (entries) {


        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


/*
Add fade-up animation to
important website elements.
*/

const animatedElements =
document.querySelectorAll(
".section-heading, .about-text, .info-card, .skill-card, .project-card, .timeline-item, .contact-info, .contact-form"
);

animatedElements.forEach(function (element) {


element.classList.add("fade-up");

observer.observe(element);


});

/* =========================
CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const yourEmail = "ritadevi7828@gmail.com";

    const emailBody =
        `Name: ${name}\n` +
        `Sender Email: ${email}\n\n` +
        `Message:\n${message}`;

    const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(yourEmail) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(emailBody);

    window.open(gmailURL, "_blank");

    formMessage.textContent =
        "Gmail opened. Please review and send your message.";

});

/* =========================
ACTIVE NAVIGATION
========================= */

const sections =
document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {


let currentSection = "";

sections.forEach(function (section) {

    const sectionTop =
        section.offsetTop - 120;

    const sectionHeight =
        section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {

        currentSection =
            section.getAttribute("id");

    }

});


navigationLinks.forEach(function (link) {

    link.classList.remove("active-link");

    if (
        link.getAttribute("href") ===
        "#" + currentSection
    ) {

        link.classList.add("active-link");

    }

});


});
