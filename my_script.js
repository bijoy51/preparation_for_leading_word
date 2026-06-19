const themeBtn = document.getElementById("themeBtn");
const copyEmailBtn = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const skills = document.querySelectorAll(".skill");
// CHANGED BY Jisan: Updated email from placeholder to farhantasnim.22@gmail.com
const email = "farhantasnim.22@gmail.com";

// Theme toggle
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "Light";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Copy email to clipboard
copyEmailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email copied: " + email;
  } catch {
    copyStatus.textContent = email;
  }

  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 2600);
});

// Intersection observer for fading/slide-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      if (entry.target.id === "skills") {
        skills.forEach((skill) => {
          skill.style.setProperty("--level", skill.dataset.level + "%");
        });
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

// Smooth active link updates on scroll
window.addEventListener("scroll", () => {
  let activeId = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    // Only toggle active if it points to an anchor on this page
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      link.classList.toggle("active", href === "#" + activeId);
    }
  });
});
