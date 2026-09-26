// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("nav-open");

});


// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("nav-open");

  });

});


// ===============================
// TYPING ANIMATION
// ===============================

const roles = [
  "Python Learner",
  "Aspiring Developer",
  "Quick Learner",
  "Future Professional"
];

const typing = document.getElementById("typing");

let role = 0;
let index = 0;
let deleting = false;


function typeEffect() {

  const word = roles[role];

  if (deleting) {

    typing.textContent =
      word.slice(0, index--);

  } else {

    typing.textContent =
      word.slice(0, index++);

  }


  // Start deleting

  if (!deleting && index > word.length) {

    deleting = true;

    setTimeout(typeEffect, 1100);

    return;

  }


  // Move to next word

  if (deleting && index < 0) {

    deleting = false;

    role = (role + 1) % roles.length;

    index = 0;

  }


  setTimeout(
    typeEffect,
    deleting ? 55 : 90
  );

}

typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


// ===============================
// MOUSE FLOATING EFFECT
// ===============================

document.addEventListener("mousemove", event => {

  const x =
    (event.clientX / window.innerWidth - 0.5) * 10;

  const y =
    (event.clientY / window.innerHeight - 0.5) * 10;


  const card =
    document.querySelector(".profile-card");


  if (card) {

    card.style.transform =
      `translate(${x}px, ${y}px) rotate(3deg)`;

  }

});
