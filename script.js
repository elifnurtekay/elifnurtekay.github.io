const $ = (selector) => document.querySelector(selector);
const render = (selector, html) => { $(selector).innerHTML = html; };
let dialogTrigger = null;

function projectCover(project, dialog = false) {
  const className = dialog ? 'dialog-cover' : '';
  return project.image
    ? `<img class="${className}" src="${project.image}" width="${project.imageWidth}" height="${project.imageHeight}" alt="${project.imageAlt}" loading="lazy">`
    : `<div class="project-cover ${className}" role="img" aria-label="${project.imageAlt}"><span>${project.categories[0]}</span><small>Visuals coming soon</small></div>`;
}
function linkedTitles(ids, items) {
  return ids.map((id) => items.find((item) => item.id === id)).filter(Boolean).map((item) => item.title).join(' · ');
}
function openProject(id, trigger) {
  const project = portfolio.projects.find((item) => item.id === id);
  if (!project) return;
  dialogTrigger = trigger;
  const publications = linkedTitles(project.relatedPublications, portfolio.publications);
  const awards = linkedTitles(project.relatedAwards, portfolio.awards);
  const related = linkedTitles(project.relatedProjects || [], portfolio.projects);
  render('#dialog-content', `<p class="eyebrow">${project.categories.join(' · ')} · ${project.status} · ${project.year}</p><h2 id="dialog-title">${project.title}</h2><p class="dialog-subtitle">${project.subtitle}</p><p>${project.overview}</p>${projectCover(project, true)}<dl class="case-study"><div><dt>Objective</dt><dd>${project.challenge}</dd></div><div><dt>Contribution</dt><dd>${project.contribution}</dd></div><div><dt>Technical approach</dt><dd>${project.approach}</dd></div><div><dt>Repository / demo</dt><dd>${project.privacyStatus}</dd></div></dl><h3>Outputs</h3><ul class="dialog-list">${project.outputs.map((item) => `<li>${item}</li>`).join('')}</ul><p class="relationship-list"><strong>Technologies:</strong> ${project.technologies.join(' · ')}</p>${awards ? `<p class="relationship-list"><strong>Related awards:</strong> ${awards}</p>` : ''}${publications ? `<p class="relationship-list"><strong>Related publications:</strong> ${publications}</p>` : ''}${project.relatedPrograms.length ? `<p class="relationship-list"><strong>Programs:</strong> ${project.relatedPrograms.join(' · ')}</p>` : ''}${related ? `<p class="relationship-list"><strong>Related work:</strong> ${related}</p>` : ''}`);
  $('#project-dialog').showModal();
  $('#dialog-close').focus();
}
function renderProjects(filter = 'All') {
  const projects = filter === 'All' ? portfolio.projects : portfolio.projects.filter((project) => project.categories.includes(filter));
  render('#project-grid', projects.map((project) => `<article class="project-card" data-project="${project.id}" tabindex="0" role="button" aria-label="Open ${project.title} case study">${projectCover(project)}<div class="project-card-body"><div class="project-meta"><span>${project.status}</span><span>${project.year}</span></div><h3>${project.title}</h3><p>${project.summary}</p><div class="tags">${project.technologies.slice(0, 4).map((tag) => `<span>${tag}</span>`).join('')}</div><div class="project-actions"><span class="text-button">Case study <span>→</span></span><span class="availability">${project.privacyStatus}</span></div></div></article>`).join(''));
  document.querySelectorAll('.project-card').forEach((card) => { card.addEventListener('click', () => openProject(card.dataset.project, card)); card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(card.dataset.project, card); } }); });
}
function closeDialog() { const dialog = $('#project-dialog'); dialog.close(); if (dialogTrigger) dialogTrigger.focus(); }
function setMobileMenu(open) { const menu = $('#mobile-nav'); const button = $('#menu-toggle'); menu.hidden = !open; button.setAttribute('aria-expanded', String(open)); button.textContent = open ? '×' : '☰'; document.body.classList.toggle('menu-open', open); if (open) menu.querySelector('a').focus(); }
function configureContactForm() {
  const form = $('#contact-form'); const status = $('#form-status');
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); status.textContent = '';
    if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Please complete the required fields with a valid email address.'; return; }
    const data = new FormData(form); if (data.get('website')) return;
    const button = form.querySelector('button[type="submit"]'); button.disabled = true; button.textContent = 'Sending…'; status.textContent = 'Sending message…';
    if (!window.emailjs) { status.textContent = 'The message service is unavailable. Please use the direct email link below.'; button.disabled = false; button.textContent = 'Send message →'; return; }
    try { window.emailjs.init({ publicKey: portfolio.contact.emailJs.publicKey }); await window.emailjs.send(portfolio.contact.emailJs.serviceId, portfolio.contact.emailJs.templateId, { from_name: data.get('name').trim(), reply_to: data.get('email').trim(), subject: data.get('subject').trim(), message: data.get('message').trim() }); form.reset(); status.textContent = 'Message sent successfully. Thank you for getting in touch.'; } catch (error) { console.error('EmailJS error:', error); status.textContent = 'Message could not be sent. Please use the direct email link below.'; } finally { button.disabled = false; button.textContent = 'Send message →'; }
  });
}
function init() {
  $('#year').textContent = new Date().getFullYear();
  render('#highlights-list', portfolio.highlights.map((item) => `<article><strong>${item.value}</strong><span>${item.label}</span></article>`).join(''));
  render('#experience-list', portfolio.experience.map((item) => `<article><p>${item.period}</p><div><h3>${item.role}</h3><h4>${item.organization}</h4><p>${item.description}</p></div></article>`).join(''));
  const filters = ['All', ...new Set(portfolio.projects.flatMap((project) => project.categories))]; render('#project-filters', filters.map((filter, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-filter="${filter}" aria-pressed="${index === 0}">${filter}</button>`).join(''));
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); }); button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); renderProjects(button.dataset.filter); })); renderProjects();
  render('#publication-list', portfolio.publications.map((item) => `<article><p>${item.venue} · ${item.year} · ${item.status}</p><h3>${item.title}</h3><p>${item.authors.replace('Elif Nur Tekay', '<strong>Elif Nur Tekay</strong>')}</p>${item.doi ? `<a href="https://doi.org/${item.doi}" target="_blank" rel="noopener">DOI: ${item.doi} ↗</a>` : ''}${item.award ? `<span class="award-badge">${item.award}</span>` : ''}</article>`).join(''));
  render('#awards-list', portfolio.awards.map((item) => `<article><p>${item.year}</p><h3>${item.title}</h3><p>${item.organization}</p><small>${item.related}</small></article>`).join(''));
  render('#skills-list', portfolio.skills.map((group) => `<article><h3>${group.category}</h3><div>${group.items.map((item) => `<span>${item}</span>`).join('')}</div></article>`).join('')); render('#certificates-list', portfolio.certificates.join(' · '));
  $('#dialog-close').addEventListener('click', closeDialog); $('#project-dialog').addEventListener('click', (event) => { if (event.target === $('#project-dialog')) closeDialog(); });
  $('#menu-toggle').addEventListener('click', () => setMobileMenu($('#mobile-nav').hidden)); $('#mobile-nav').querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMobileMenu(false))); window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !$('#mobile-nav').hidden) setMobileMenu(false); }); window.addEventListener('resize', () => { if (window.innerWidth > 900) setMobileMenu(false); });
  const root = document.documentElement; const saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; $('#theme-toggle').addEventListener('click', () => { const next = root.dataset.theme === 'light' ? 'dark' : 'light'; root.dataset.theme = next; localStorage.setItem('theme', next); });
  $('#copy-email').addEventListener('click', async () => { try { await navigator.clipboard.writeText(portfolio.contact.email); $('#copy-status').textContent = 'Email copied.'; } catch { $('#copy-status').textContent = 'Copy unavailable—please select the email address.'; } }); configureContactForm();
  const links = [...document.querySelectorAll('.desktop-nav a')]; const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) links.forEach((link) => link.classList.toggle('active-link', link.hash === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' }); links.forEach((link) => observer.observe($(link.hash)));
}
init();
