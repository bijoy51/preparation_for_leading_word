const themeBtn = document.getElementById("themeBtn");
const copyEmailBtn = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const skills = document.querySelectorAll(".skill");
const email = "fayezah1010@gmail.com";

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});

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

window.addEventListener("scroll", () => {
  let activeId = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + activeId);
  });
});
