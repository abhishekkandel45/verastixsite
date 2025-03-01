// DEVELOPMENT NOTICE
const devNotice = document.getElementById('devNotice');
const closeDevNotice = document.getElementById('closeDevNotice');
if (closeDevNotice) {
  closeDevNotice.addEventListener('click', () => {
    devNotice.style.display = 'none';
  });
}

// THEME TOGGLE (Dark Mode)
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// MOBILE NAV
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileNav = document.getElementById('mobileNav');

function closeMobileNav() {
  mobileNav.style.display = 'none';
}

hamburgerMenu.addEventListener('click', () => {
  if (mobileNav.style.display === 'flex') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'flex';
    mobileNav.style.flexDirection = 'column';
  }
});

// OPTIONAL: SMOOTH SCROLL
document.querySelectorAll('.nav a, .mobile-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// ========== GSAP Animations ==========
document.addEventListener("DOMContentLoaded", () => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1) Slide down the header on load
  gsap.from("header", {
    y: -80,
    duration: 0.8,
    ease: "power2.out"
  });

  // 2) Fade/slide up hero text
  gsap.from(".hero-title", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  });
  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.4
  });
  gsap.from(".hero-description", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.6
  });
  gsap.from(".hero-image img", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.8
  });

  // 3) Services cards animate on scroll
  gsap.from(".cards .card", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%", // when the .cards section hits 80% from the top
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2 // animate cards in sequence
  });

  // 4) Team cards animate on scroll
  gsap.from(".team-cards .team-card", {
    scrollTrigger: {
      trigger: ".team-cards",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
  });
});