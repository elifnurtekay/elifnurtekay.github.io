/* Portfolio behavior; verified content lives in data.js. */
const $ = (selector) => document.querySelector(selector);
const render = (selector, html) => { $(selector).innerHTML = html; };

function projectImage(project) {
  return project.image
    ? `<img src="${project.image}" width="${project.imageWidth}" height="${project.imageHeight}" alt="${project.imageAlt}" loading="lazy">`
    : `<div class="project-placeholder" role="img" aria-label="${project.imageAlt}"><span>${project.categories[0]}</span><strong>Project documentation<br>image pending</strong></div>`;
}
function renderProjects(filter = 'All') {
  const visible = filter === 'All' ? portfolio.projects : portfolio.projects.filter((project) => project.categories.includes(filter));
  render('#project-grid', visible.map((project) => `<article class="project-card ${project.featured ? 'featured' : ''}">${projectImage(project)}<div class="project-card-body"><div class="project-meta"><span>${project.status}</span><span>${project.year}</span></div><h3>${project.title}</h3><p>${project.summary}</p><div class="tags">${project.technologies.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="project-actions"><button class="text-button details-button" data-project="${project.id}" type="button">Case study <span>→</span></button>${project.repository ? `<a href="${project.repository}" target="_blank" rel="noopener">GitHub ↗</a>` : `<span class="availability">${project.privacyStatus}</span>`}</div></div></article>`).join(''));
  document.querySelectorAll('.details-button').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.project)));
}
function openProject(id) {
  const p = portfolio.projects.find((project) => project.id === id); if (!p) return;
  render('#dialog-content', `<p class="eyebrow">${p.categories.join(' · ')} · ${p.status}</p><h2 id="dialog-title">${p.title}</h2><p class="dialog-subtitle">${p.subtitle}</p>${projectImage(p)}<dl class="case-study"><div><dt>Challenge</dt><dd>${p.challenge}</dd></div><div><dt>Contribution</dt><dd>${p.contribution}</dd></div><div><dt>Technical approach</dt><dd>${p.approach}</dd></div><div><dt>Outcomes</dt><dd>${p.outcomes}</dd></div></dl>${p.awards.length ? `<p><strong>Recognition:</strong> ${p.awards.join(' · ')}</p>` : ''}<p><strong>Availability:</strong> ${p.privacyStatus}</p>`);
  $('#project-dialog').showModal(); $('#dialog-close').focus();
}
function init() {
  $('#year').textContent = new Date().getFullYear();
  render('#highlights-list', portfolio.highlights.map((item) => `<article><strong>${item.value}</strong><span>${item.label}</span></article>`).join(''));
  render('#experience-list', portfolio.experience.map((item) => `<article><p>${item.period}</p><div><h3>${item.role}</h3><h4>${item.organization}</h4><p>${item.description}</p></div></article>`).join(''));
  const filters = ['All', ...new Set(portfolio.projects.flatMap((project) => project.categories))];
  render('#project-filters', filters.map((filter, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-filter="${filter}" aria-pressed="${index === 0}">${filter}</button>`).join(''));
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach((x) => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); }); button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); renderProjects(button.dataset.filter); })); renderProjects();
  render('#publication-list', portfolio.publications.map((p) => `<article><p>${p.venue} · ${p.year} · ${p.status}</p><h3>${p.title}</h3><p>${p.authors.replace('Elif Nur Tekay', '<strong>Elif Nur Tekay</strong>')}</p>${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi} ↗</a>` : ''}${p.award ? `<span class="award-badge">${p.award}</span>` : ''}</article>`).join(''));
  render('#awards-list', portfolio.awards.map((award) => `<article><p>${award.year}</p><h3>${award.title}</h3><p>${award.organization}</p><small>${award.related}</small></article>`).join(''));
  render('#skills-list', portfolio.skills.map((group) => `<article><h3>${group.category}</h3><div>${group.items.map((item) => `<span>${item}</span>`).join('')}</div></article>`).join(''));
  render('#certificates-list', portfolio.certificates.map((certificate) => `<span>${certificate}</span>`).join(''));
  const dialog = $('#project-dialog'); $('#dialog-close').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  const mobile = $('#mobile-nav'); $('#menu-toggle').addEventListener('click', () => { const open = mobile.hidden; mobile.hidden = !open; $('#menu-toggle').setAttribute('aria-expanded', String(open)); $('#menu-toggle').textContent = open ? '×' : '☰'; }); mobile.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobile.hidden = true; $('#menu-toggle').setAttribute('aria-expanded', 'false'); $('#menu-toggle').textContent = '☰'; }));
  const root = document.documentElement; const storedTheme = localStorage.getItem('theme'); if (storedTheme) root.dataset.theme = storedTheme; $('#theme-toggle').addEventListener('click', () => { const theme = root.dataset.theme === 'light' ? 'dark' : 'light'; root.dataset.theme = theme; localStorage.setItem('theme', theme); });
  $('#copy-email').addEventListener('click', async () => { try { await navigator.clipboard.writeText(portfolio.contact.email); $('#copy-status').textContent = 'Email copied.'; } catch { $('#copy-status').textContent = 'Copy unavailable—please select the email address.'; } });
  const navigationLinks = [...document.querySelectorAll('.desktop-nav a')];
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navigationLinks.forEach((link) => link.classList.toggle('active-link', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
  navigationLinks.forEach((link) => { const section = $(link.getAttribute('href')); if (section) observer.observe(section); });
}
init();
