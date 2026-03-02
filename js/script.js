/* =====================================
   SMART UNIVERSITY - MAIN JAVASCRIPT
   Author: Abdul Qadir (Student Project)
   Purpose: Final Term Project
===================================== */

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  } else {
    console.warn("Hamburger or navMenu element not found");
  }
});

/* =====================================
   COUNTER ANIMATION (HOME PAGE)
===================================== */
const counters = document.querySelectorAll(".count");

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const duration = 2000; // total duration in milliseconds
    const stepTime = 10; // update interval in milliseconds
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, stepTime);
      } else {
        counter.innerText = target; // ensure exact target at end
      }
    };

    updateCounter();
  });
};

// Start counter when page loads
window.addEventListener("load", startCounter);

/* =====================================
   SIMPLE HERO SLIDER (OPTIONAL UPGRADE)
===================================== */
const heroSection = document.querySelector(".hero");
const heroImages = [
  "images/hero-img (2).jpg",
  "images/hero-img.webp",
  "images/hero-img (1).jpeg",
  "images/teachers.jpg",
  "images/graduation-cremony.jpg"
];

let currentImage = 0;

function changeHeroImage() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${heroImages[currentImage]}')`;
    currentImage = (currentImage + 1) % heroImages.length;
  }
}

// Change image every 4 seconds
setInterval(changeHeroImage, 4000);

// Initialize first image
if (heroSection) {
  changeHeroImage();
}

/* =====================================
   BASIC NAVBAR ACTIVE LINK
===================================== */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

/* =====================================
   FORM VALIDATION (FOR ADMISSIONS PAGE)
   (Will auto-work when form exists)
===================================== */
function validateAdmissionForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const program = document.getElementById("program");

  if (!name || !email || !program) {
    alert("Form elements not found!");
    return false;
  }

  if (name.value.trim() === "" || email.value.trim() === "" || program.value.trim() === "") {
    alert("Please fill all required fields!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

/* =====================================
   LOGIN VALIDATION (STUDENT PORTAL)
===================================== */
function validateLogin() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (!username || !password) {
    alert("Login form elements not found!");
    return false;
  }

  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Username & Password required!");
    return false;
  }

  // Example credentials, replace with real validation as needed
  if (username.value === "student" && password.value === "12345") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid login credentials!");
    return false;
  }
}