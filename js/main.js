/*
 * main.js — render the project grid from js/projects.js, add scroll
 * reveals, handle the mobile nav, and power the signature magnetic CTA.
 */

/* 1. Render the project grid ------------------------------------
   Reads the `projects` array from js/projects.js and builds every
   card. Only `featured: true` projects appear.
   `containerId` — an element on the current page (`homeGrid`,
   `projectsGrid`, ...). `limit` is optional: pass a number to show
   only the first N featured projects (used by the home teaser). */
function renderProjects(containerId, limit) {
  const grid = document.getElementById(containerId);
  if (!grid) return; // element not on this page — nothing to render

  const visible = projects.filter(function (project) {
    return project.featured;
  });
  const cards = typeof limit === "number" ? visible.slice(0, limit) : visible;

  if (cards.length === 0) {
    grid.innerHTML = '<p class="section-sub">Projects coming soon — check back shortly.</p>';
    return;
  }

  grid.innerHTML = cards
    .map(function (project) {
      const tech = project.tech
        .map(function (t) {
          return "<li>" + t + "</li>";
        })
        .join("");

      return (
        '<article class="project-card">' +
        '  <div class="project-reveal" data-reveal>' +
        '    <a class="project-link-area" href="' + project.liveUrl +
        '" target="_blank" rel="noopener" aria-label="Open the ' + project.title + ' project">' +
        '      <div class="project-poster">' +
        '        <img src="' + project.image + '" alt="' + project.title + ' — project poster" loading="lazy" />' +
        "      </div>" +
        '      <div class="project-body">' +
        '        <h3 class="project-title">' + project.title + "</h3>" +
        '        <p class="project-tagline">' + project.tagline + "</p>" +
        '        <dl class="project-facts">' +
        "          <div><dt>Problem</dt><dd>" + project.problem + "</dd></div>" +
        "          <div><dt>Decision</dt><dd>" + project.decision + "</dd></div>" +
        "        </dl>" +
        '        <ul class="project-tech" aria-label="Technologies used">' + tech + "</ul>" +
        '        <span class="project-open">View project <span class="arrow" aria-hidden="true">&rarr;</span></span>' +
        "      </div>" +
        "    </a>" +
        "  </div>" +
        "</article>"
      );
    })
    .join("");
}

// Full grid on Work, first three featured on Home.
renderProjects("projectsGrid");
renderProjects("homeGrid", 3);

/* 2. Scroll reveal ----------------------------------------------
   Fade + slide sections in as they enter the viewport. */
const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  // Slight stagger for project cards so the grid feels considered, not jittery.
  const cards = Array.prototype.slice.call(document.querySelectorAll(".project-reveal"));
  cards.forEach(function (card, index) {
    card.style.transitionDelay = Math.min(index, 3) * 70 + "ms";
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });

  // Clear the stagger delay once each card has finished revealing,
  // so hover transitions respond instantly afterwards.
  cards.forEach(function (card, index) {
    window.setTimeout(function () {
      card.style.transitionDelay = "";
    }, 800 + Math.min(index, 3) * 70);
  });
} else {
  // No observer support: show everything immediately.
  revealElements.forEach(function (el) {
    el.classList.add("is-visible");
  });
}

/* 3. Mobile navigation ------------------------------------------- */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the menu after choosing a destination.
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

/* 4. Signature interaction: magnetic primary CTA ------------------
   The hero button leans toward the cursor. Fine pointers only,
   and skipped entirely for reduced-motion users. */
var heroCta = document.getElementById("heroCta");

if (
  heroCta &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  var pull = 10; // max offset in px

  heroCta.addEventListener("mousemove", function (event) {
    var rect = heroCta.getBoundingClientRect();
    var x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    var y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    heroCta.style.transform =
      "translate(" + (x * pull).toFixed(1) + "px, " + (y * pull).toFixed(1) + "px)";
  });

  heroCta.addEventListener("mouseleave", function () {
    heroCta.style.transform = "";
  });
}