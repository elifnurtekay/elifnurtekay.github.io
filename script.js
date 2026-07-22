const $ = (selector) => document.querySelector(selector);

const render = (selector, html) => {
  const element = $(selector);

  if (element) {
    element.innerHTML = html;
  }
};

let dialogTrigger = null;

function projectCover(project, dialog = false) {
  const className = dialog ? "dialog-cover" : "";

  if (project.image) {
    return `
      <img
        class="${className}"
        src="${project.image}"
        width="${project.imageWidth || 1600}"
        height="${project.imageHeight || 1000}"
        alt="${project.imageAlt}"
        loading="lazy"
      >
    `;
  }

  return `
    <div
      class="project-cover ${className}"
      role="img"
      aria-label="${project.imageAlt}"
    >
      <span>${project.categories[0]}</span>
      <small>Project visual</small>
    </div>
  `;
}

function getProjectById(id) {
  return portfolio.projects.find(
    (project) => project.id === id
  );
}

function getPublicationById(id) {
  return portfolio.publications.find(
    (publication) => publication.id === id
  );
}

function getAwardById(id) {
  return portfolio.awards.find(
    (award) => award.id === id
  );
}

function projectMeta(project) {
  return [project.status, project.year]
    .filter(Boolean)
    .join(" · ");
}

function formatAuthors(authors) {
  return authors
    .map((author) => {
      if (author === "Elif Nur Tekay") {
        return `<strong>${author}</strong>`;
      }

      return author;
    })
    .join(", ");
}

function relatedPublicationMarkup(project) {
  const publications = (project.relatedPublications || [])
    .map(getPublicationById)
    .filter(Boolean);

  if (!publications.length) {
    return "";
  }

  return `
    <div class="dialog-section">
      <h3>Related publications</h3>

      <ul class="dialog-list">
        ${publications
          .map((publication) => {
            const title = publication.link
              ? `
                <a
                  href="${publication.link}"
                  target="_blank"
                  rel="noopener"
                >
                  ${publication.title} ↗
                </a>
              `
              : publication.title;

            return `
              <li>
                ${title} — ${publication.venue}
              </li>
            `;
          })
          .join("")}
      </ul>
    </div>
  `;
}

function relatedAwardMarkup(project) {
  const awards = (project.relatedAwards || [])
    .map(getAwardById)
    .filter(Boolean);

  if (!awards.length) {
    return "";
  }

  return `
    <div class="dialog-section">
      <h3>Related awards</h3>

      <ul class="dialog-list">
        ${awards
          .map(
            (award) => `
              <li>
                ${award.title} — ${award.organization}
              </li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
}

function openProject(id, trigger = null) {
  const project = getProjectById(id);

  if (!project) {
    return;
  }

  dialogTrigger = trigger || document.activeElement;

  const programmes = project.relatedPrograms || [];

  render(
    "#dialog-content",
    `
      <p class="eyebrow">
        ${project.categories.join(" · ")}
        ·
        ${projectMeta(project)}
      </p>

      <h2 id="dialog-title">${project.title}</h2>

      <p class="dialog-subtitle">
        ${project.subtitle}
      </p>

      <p id="dialog-overview" class="dialog-overview">
        ${project.overview}
      </p>

      ${projectCover(project, true)}

      <dl class="case-study">
        <div>
          <dt>Objective</dt>
          <dd>${project.challenge}</dd>
        </div>

        <div>
          <dt>My contribution</dt>
          <dd>${project.contribution}</dd>
        </div>

        <div>
          <dt>Technical approach</dt>
          <dd>${project.approach}</dd>
        </div>

        <div>
          <dt>Project status</dt>
          <dd>${project.privacyStatus}</dd>
        </div>
      </dl>

      <div class="dialog-section">
        <h3>Outputs</h3>

        <ul class="dialog-list">
          ${project.outputs
            .map((output) => `<li>${output}</li>`)
            .join("")}
        </ul>
      </div>

      <div class="dialog-section">
        <h3>Technologies & areas</h3>

        <div class="tags dialog-tags">
          ${project.technologies
            .map(
              (technology) => `
                <span>${technology}</span>
              `
            )
            .join("")}
        </div>
      </div>

      ${relatedAwardMarkup(project)}
      ${relatedPublicationMarkup(project)}

      ${
        programmes.length
          ? `
            <div class="dialog-section">
              <h3>Related programmes</h3>

              <p class="relationship-list">
                ${programmes.join(" · ")}
              </p>
            </div>
          `
          : ""
      }
    `
  );

  const dialog = $("#project-dialog");

  if (!dialog.open) {
    dialog.showModal();
  }

  $("#dialog-close").focus();
}

function projectCard(project) {
  return `
    <article
      class="project-card ${project.featured ? "featured" : ""}"
      data-project="${project.id}"
      tabindex="0"
      role="button"
      aria-label="Open ${project.title} case study"
    >
      ${projectCover(project)}

      <div class="project-card-body">
        <div class="project-meta">
          <span>${project.status}</span>

          ${
            project.year
              ? `<span>${project.year}</span>`
              : ""
          }
        </div>

        <h3>${project.title}</h3>

        <p class="project-subtitle">
          ${project.subtitle}
        </p>

        <p class="project-summary">
          ${project.summary}
        </p>

        <div class="tags">
          ${project.technologies
            .slice(0, 4)
            .map(
              (technology) => `
                <span>${technology}</span>
              `
            )
            .join("")}
        </div>

        <div class="project-actions">
          <span class="text-button">
            View case study
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </article>
  `;
}

function attachProjectCardEvents() {
  document
    .querySelectorAll(".project-card")
    .forEach((card) => {
      card.addEventListener("click", () => {
        openProject(card.dataset.project, card);
      });

      card.addEventListener("keydown", (event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          openProject(
            card.dataset.project,
            card
          );
        }
      });
    });
}

function renderProjects(filter = "All") {
  let projects = portfolio.projects;

  if (filter === "Featured") {
    projects = projects.filter(
      (project) => project.featured
    );
  } else if (filter !== "All") {
    projects = projects.filter(
      (project) =>
        project.categories.includes(filter)
    );
  }

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  render(
    "#featured-project-grid",
    featuredProjects
      .map(projectCard)
      .join("")
  );

  render(
    "#other-project-grid",
    otherProjects
      .map(projectCard)
      .join("")
  );

  $("#featured-projects-group").hidden =
    featuredProjects.length === 0;

  $("#other-projects-group").hidden =
    otherProjects.length === 0;

  attachProjectCardEvents();
}

function closeDialog() {
  const dialog = $("#project-dialog");

  if (dialog.open) {
    dialog.close();
  }

  if (dialogTrigger instanceof HTMLElement) {
    dialogTrigger.focus();
  }
}

function setMobileMenu(open) {
  const menu = $("#mobile-nav");
  const button = $("#menu-toggle");

  menu.hidden = !open;

  button.setAttribute(
    "aria-expanded",
    String(open)
  );

  button.setAttribute(
    "aria-label",
    open
      ? "Close navigation menu"
      : "Open navigation menu"
  );

  button.textContent = open ? "×" : "☰";

  document.body.classList.toggle(
    "menu-open",
    open
  );

  if (open) {
    menu.querySelector("a")?.focus();
  }
}

function configureContactForm() {
  const form = $("#contact-form");
  const status = $("#form-status");

  if (!form || !status) {
    return;
  }

  if (window.emailjs) {
    window.emailjs.init({
      publicKey:
        portfolio.contact.emailJs.publicKey
    });
  }

  form.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      status.textContent = "";
      status.className = "";

      if (!form.checkValidity()) {
        form.reportValidity();

        status.textContent =
          "Please complete the required fields with a valid email address.";

        status.classList.add("error");

        return;
      }

      const data = new FormData(form);

      if (data.get("website")) {
        return;
      }

      const button = form.querySelector(
        'button[type="submit"]'
      );

      const originalButtonText =
        button.innerHTML;

      button.disabled = true;
      button.textContent = "Sending…";

      status.textContent =
        "Sending message…";

      if (!window.emailjs) {
        status.textContent =
          "The message service is unavailable. Please use the direct email link below.";

        status.classList.add("error");

        button.disabled = false;
        button.innerHTML =
          originalButtonText;

        return;
      }

      try {
        await window.emailjs.send(
          portfolio.contact.emailJs.serviceId,
          portfolio.contact.emailJs.templateId,
          {
            from_name:
              String(data.get("name")).trim(),

            reply_to:
              String(data.get("email")).trim(),

            message:
              String(data.get("message")).trim()
          }
        );

        form.reset();

        status.textContent =
          "Message sent successfully. Thank you for getting in touch.";

        status.classList.add("success");
      } catch (error) {
        console.error(
          "EmailJS error:",
          error
        );

        status.textContent =
          "Message could not be sent. Please use the direct email link below.";

        status.classList.add("error");
      } finally {
        button.disabled = false;

        button.innerHTML =
          originalButtonText;
      }
    }
  );
}

function renderExperience() {
  render(
    "#experience-list",

    portfolio.experience
      .map(
        (item) => `
          <article>
            <p class="timeline-period">
              ${item.period}
            </p>

            <div>
              <h3>${item.role}</h3>
              <h4>${item.organization}</h4>

              <ul>
                ${item.bullets
                  .map(
                    (bullet) => `
                      <li>${bullet}</li>
                    `
                  )
                  .join("")}
              </ul>
            </div>
          </article>
        `
      )
      .join("")
  );
}

function renderPublications() {
  render(
    "#publication-list",

    portfolio.publications
      .map(
        (item) => `
          <article>
            <p class="publication-meta">
              ${item.venue}
              ·
              ${item.year}
              ·
              ${item.status}
            </p>

            <h3>${item.title}</h3>

            <p class="publication-authors">
              ${formatAuthors(item.authors)}
            </p>

            ${
              item.note
                ? `
                  <p class="publication-note">
                    ${item.note}
                  </p>
                `
                : ""
            }

            <div class="publication-actions">
              ${
                item.link
                  ? `
                    <a
                      href="${item.link}"
                      target="_blank"
                      rel="noopener"
                    >
                      ${item.linkLabel}
                      ↗
                    </a>
                  `
                  : ""
              }

              ${
                item.award
                  ? `
                    <span class="award-badge">
                      ${item.award}
                    </span>
                  `
                  : ""
              }

              ${
                item.relatedProject
                  ? `
                    <button
                      class="related-project-button publication-project-button"
                      type="button"
                      data-related-project="${item.relatedProject}"
                    >
                      Related project →
                    </button>
                  `
                  : ""
              }
            </div>
          </article>
        `
      )
      .join("")
  );

  document
    .querySelectorAll(
      ".publication-project-button"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          openProject(
            button.dataset.relatedProject,
            button
          );
        }
      );
    });
}

function renderAwards() {
  render(
    "#awards-list",

    portfolio.awards
      .map(
        (item) => `
          <article>
            <p>${item.year}</p>

            <h3>${item.title}</h3>

            <p>${item.organization}</p>

            <small>${item.related}</small>

            <button
              class="related-project-button award-project-button"
              type="button"
              data-related-project="${item.relatedProject}"
            >
              View related project →
            </button>
          </article>
        `
      )
      .join("")
  );

  document
    .querySelectorAll(
      ".award-project-button"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          openProject(
            button.dataset.relatedProject,
            button
          );
        }
      );
    });
}

function configureTheme() {
  const root = document.documentElement;

  const savedTheme =
    localStorage.getItem("theme");

  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    root.dataset.theme = savedTheme;
  }

  $("#theme-toggle").addEventListener(
    "click",
    () => {
      const currentTheme =
        root.dataset.theme ||
        (
          window.matchMedia(
            "(prefers-color-scheme: light)"
          ).matches
            ? "light"
            : "dark"
        );

      const nextTheme =
        currentTheme === "light"
          ? "dark"
          : "light";

      root.dataset.theme = nextTheme;

      localStorage.setItem(
        "theme",
        nextTheme
      );
    }
  );
}

function configureSectionObserver() {
  const links = [
    ...document.querySelectorAll(
      ".desktop-nav a"
    )
  ];

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          links.forEach((link) => {
            link.classList.toggle(
              "active-link",

              link.hash ===
                `#${entry.target.id}`
            );
          });
        });
      },

      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );

  links.forEach((link) => {
    const section = $(link.hash);

    if (section) {
      observer.observe(section);
    }
  });
}

function init() {
  $("#year").textContent =
    new Date().getFullYear();

  render(
    "#highlights-list",

    portfolio.highlights
      .map(
        (item) => `
          <article>
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </article>
        `
      )
      .join("")
  );

  renderExperience();

  const filters = [
    "All",
    "Featured",
    "Artificial Intelligence",
    "Full-Stack",
    "Computer Vision",
    "Research",
    "Web Application",
    "Ongoing"
  ];

  render(
    "#project-filters",

    filters
      .map(
        (filter, index) => `
          <button
            type="button"
            class="${index === 0 ? "active" : ""}"
            data-filter="${filter}"
            aria-pressed="${index === 0}"
          >
            ${filter}
          </button>
        `
      )
      .join("")
  );

  document
    .querySelectorAll("[data-filter]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          document
            .querySelectorAll("[data-filter]")
            .forEach((item) => {
              item.classList.remove("active");

              item.setAttribute(
                "aria-pressed",
                "false"
              );
            });

          button.classList.add("active");

          button.setAttribute(
            "aria-pressed",
            "true"
          );

          renderProjects(
            button.dataset.filter
          );
        }
      );
    });

  renderProjects();
  renderPublications();
  renderAwards();

  render(
    "#skills-list",

    portfolio.skills
      .map(
        (group) => `
          <article>
            <h3>${group.category}</h3>

            <div>
              ${group.items
                .map(
                  (item) => `
                    <span>${item}</span>
                  `
                )
                .join("")}
            </div>
          </article>
        `
      )
      .join("")
  );

  render(
    "#certificates-list",

    portfolio.certificates
      .map(
        (certificate) => `
          <span>${certificate}</span>
        `
      )
      .join("")
  );

  $("#dialog-close").addEventListener(
    "click",
    closeDialog
  );

  $("#project-dialog").addEventListener(
    "click",
    (event) => {
      if (
        event.target ===
        $("#project-dialog")
      ) {
        closeDialog();
      }
    }
  );

  $("#project-dialog").addEventListener(
    "cancel",
    (event) => {
      event.preventDefault();
      closeDialog();
    }
  );

  $("#menu-toggle").addEventListener(
    "click",
    () => {
      setMobileMenu(
        $("#mobile-nav").hidden
      );
    }
  );

  $("#mobile-nav")
    .querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        () => setMobileMenu(false)
      );
    });

  window.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        !$("#mobile-nav").hidden
      ) {
        setMobileMenu(false);
      }
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 900) {
        setMobileMenu(false);
      }
    }
  );

  $("#copy-email").addEventListener(
    "click",
    async () => {
      try {
        await navigator.clipboard.writeText(
          portfolio.contact.email
        );

        $("#copy-status").textContent =
          "Email copied.";
      } catch {
        $("#copy-status").textContent =
          "Copy unavailable—please select the email address.";
      }
    }
  );

  configureTheme();
  configureContactForm();
  configureSectionObserver();
}

init();