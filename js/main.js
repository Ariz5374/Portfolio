/*
 * main.js — project rendering, scroll reveals, mobile navigation,
 * and the small magnetic CTA interaction.
 */

function renderProjects(containerId, limit) {
  const grid = document.getElementById(containerId);
  if (!grid || typeof projects === "undefined") return;

  const visibleProjects = projects.filter(function (project) {
    return project.featured;
  });

  const cards = typeof limit === "number"
    ? visibleProjects.slice(0, limit)
    : visibleProjects;

  if (!cards.length) {
    grid.innerHTML = '<p class="section-sub">Projects coming soon — check back shortly.</p>';
    return;
  }

  grid.innerHTML = cards.map(function (project) {
    const tech = project.tech.map(function (item) {
      return `<li>${item}</li>`;
    }).join("");

    const number = project.number || "";
    const category = project.category || "SELECTED PROJECT";

    return `
      <article class="project-card" data-reveal>
        <a class="project-visual-link" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
          aria-label="Open ${project.title} live project">
          <div class="project-poster">
            <img src="${project.image}"
              alt="${project.title} project preview"
              loading="lazy"
              decoding="async"
              onerror="this.closest('.project-poster').classList.add('image-fallback'); this.remove();" />
            <span class="project-preview-label">PROJECT PREVIEW</span>
            <span class="project-preview-arrow" aria-hidden="true">↗</span>
          </div>
        </a>

        <div class="project-body">
          <div class="project-meta">
            <span>${number} / ${category}</span>
            <span class="project-index-mark" aria-hidden="true">AK.</span>
          </div>

          <h3 class="project-title">${project.title}</h3>
          <p class="project-tagline">${project.tagline}</p>

          <dl class="project-facts">
            <div>
              <dt>THE CHALLENGE</dt>
              <dd>${project.problem}</dd>
            </div>
            <div>
              <dt>THE APPROACH</dt>
              <dd>${project.decision}</dd>
            </div>
            ${project.learned ? `<div>
              <dt>WHAT I LEARNED</dt>
              <dd>${project.learned}</dd>
            </div>` : ""}
          </dl>

          <ul class="project-tech" aria-label="Technologies used">${tech}</ul>

          <div class="project-card-footer">
            <a class="project-open" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
              View live project <span class="arrow" aria-hidden="true">↗</span>
            </a>
            <span class="project-footer-number">${number}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Newly rendered cards are observed too, including the homepage preview.
  observeReveals(grid.querySelectorAll("[data-reveal]"));
}

renderProjects("projectsGrid");
renderProjects("homeGrid", 4);

/* Scroll reveal: content remains visible if JavaScript or the API is unavailable. */
document.documentElement.classList.add("js-ready");

function observeReveals(elements) {
  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries, currentObserver) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px"
  });

  elements.forEach(function (element, index) {
    element.style.transitionDelay = Math.min(index, 3) * 65 + "ms";
    observer.observe(element);
  });
}

observeReveals(document.querySelectorAll("[data-reveal]"));

/* Mobile navigation */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  function closeMenu() {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) closeMenu();
  });
}

/* Magnetic CTA: only for mouse/trackpad users who have not requested reduced motion. */
const heroCta = document.getElementById("heroCta");

if (
  heroCta &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const pull = 7;

  heroCta.addEventListener("mousemove", function (event) {
    const rect = heroCta.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    heroCta.style.transform =
      `translate(${(x * pull).toFixed(1)}px, ${(y * pull).toFixed(1)}px)`;
  });

  heroCta.addEventListener("mouseleave", function () {
    heroCta.style.transform = "";
  });
}
