// Rotating hunting tips
const tips = [
  "Scout first — knowledge is the sharpest weapon.",
  "Patience beats speed. Wait for the right moment.",
  "Focus on one target at a time.",
  "Prepare in private, win in public.",
  "The best hunters study their terrain before the hunt.",
  "Discipline today is victory tomorrow.",
  "Aim small, miss small.",
];

let lastIndex = -1;

const quoteBtn = document.getElementById("quoteBtn");
const quoteEl = document.getElementById("quote");

quoteBtn.addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * tips.length);
  } while (index === lastIndex && tips.length > 1);
  lastIndex = index;
  quoteEl.textContent = "💡 " + tips[index];
});

// Highlight active nav link while scrolling
const sections = document.querySelectorAll("section[id], #home");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";
  document.querySelectorAll("[id]").forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute("href") === "#" + current ? "#ffd166" : "";
  });
});
