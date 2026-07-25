const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const wordmark = document.querySelector(".wordmark");
const backToTop = document.querySelector("[data-back-to-top]");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main section[id]")].filter(
  (section) => section.id !== "top"
);

function setMenu(open) {
  if (!navToggle || !siteNav) return;

  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.querySelector(".sr-only").textContent = open
    ? "Close navigation"
    : "Open navigation";
  siteNav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
}

navToggle?.addEventListener("click", () => {
  setMenu(navToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
    navToggle?.focus();
  }
});

const currentYear = new Date().getFullYear();
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(currentYear);
});

function updateCurrentSection() {
  const headerHeight =
    document.querySelector("[data-header]")?.getBoundingClientRect().height ?? 0;
  const marker = window.scrollY + headerHeight + window.innerHeight * 0.28;
  const atPageEnd =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

  let currentId = "";

  if (atPageEnd) {
    currentId = "contact";
  } else {
    sections.forEach((section) => {
      if (section.offsetTop <= marker) {
        currentId = section.id;
      }
    });
  }

  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${currentId}`;
    if (isCurrent) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (currentId) {
    wordmark?.removeAttribute("aria-current");
  } else {
    wordmark?.setAttribute("aria-current", "page");
  }

  backToTop?.classList.toggle("is-visible", window.scrollY > 700);
}

let scrollFrame;
function scheduleSectionUpdate() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    updateCurrentSection();
    scrollFrame = undefined;
  });
}

window.addEventListener("scroll", scheduleSectionUpdate, { passive: true });
window.addEventListener("resize", scheduleSectionUpdate);
window.addEventListener("load", updateCurrentSection);
updateCurrentSection();
