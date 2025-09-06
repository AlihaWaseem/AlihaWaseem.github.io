// script.js

// Select toggle button and nav menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");

// Toggle menu on click
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  
  // Accessibility: update aria-expanded
  const isExpanded = navMenu.classList.contains("show");
  navToggle.setAttribute("aria-expanded", isExpanded);
});

// Auto update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

