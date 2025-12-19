const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

// Scroll animations optimisées (remplace AOS)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target); // Une seule fois
    }
  });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".prestation-category, .prestations-gallery, .hero-row"
  );
  animatedElements.forEach((el) => observer.observe(el));
});

//EmailJs
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("BaVxTuoWDf6WyeyUG");

  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_8dyv814", "template_geo0yrh", form).then(
      function (response) {
        console.log("Sent successfully", response);
        alert("Votre message a été envoyé avec succès !");
      },
      function (error) {
        console.log("Failed to send", error);
        alert("Échec de l'envoi du message. Veuillez réessayer.");
      }
    );
  });
});
