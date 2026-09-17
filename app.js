const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function safeLink(url) {
  return url && url !== "#" ? url : "#";
}

function youtubeEmbed(url) {
  if (!url) return null;
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
  }
  return null;
}

function renderProfile() {
  const p = portfolio.profile;
  $("#brandText").innerHTML = `${p.shortName.toUpperCase()}<span>.</span>`;
  $("#heroIntro").textContent = p.heroIntro;
  $("#aboutText").textContent = p.about;
  $("#basedIn").textContent = p.location;
  $("#contactLine").textContent = p.contactLine;
  $("#emailBtn").href = `mailto:${p.email}`;
  $("#resumeBtn").href = safeLink(p.resumeUrl);
  $("#resumeNav").href = safeLink(p.resumeUrl);
  $("#profileAvatar").textContent = "";
  $("#profileAvatar").style.backgroundImage = "url('./assets/new dp.jfif')";
  $("#profileAvatar").style.backgroundSize = "cover";
  $("#profileAvatar").style.backgroundPosition = "center";
  $("#year").textContent = new Date().getFullYear();
}

function renderProjects() {
  $("#projectGrid").innerHTML = portfolio.projects.map((p, i) => `
    <article class="project-card reveal">
      <div class="project-image">
        <img src="${p.image}" alt="${p.title}">
        <div class="project-overlay"></div>
      </div>
      <div class="project-body">
        <div class="project-meta"><span>${p.category}</span><span>${p.year}</span></div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tag-row">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="project-actions">
          <a class="icon-link" href="${safeLink(p.liveUrl)}" ${p.liveUrl !== "#" ? 'target="_blank" rel="noreferrer"' : ""} aria-label="Live project">
            <i data-lucide="external-link"></i>
          </a>
          <a class="icon-link" href="${safeLink(p.githubUrl)}" ${p.githubUrl !== "#" ? 'target="_blank" rel="noreferrer"' : ""} aria-label="GitHub">
            <i data-lucide="github"></i>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCreative() {
  $("#creativeGrid").innerHTML = portfolio.creativeWork.map((item, i) => `
    <article class="creative-card reveal" data-creative="${i}">
      <img src="${item.thumbnail}" alt="${item.title}">
      <div class="creative-shade"></div>
      <div class="play-orb"><i data-lucide="play"></i></div>
      <div class="creative-copy">
        <span>${item.type}</span>
        <h3>${item.title}</h3>
        <p>${item.brand}</p>
      </div>
    </article>
  `).join("");

  $$("[data-creative]").forEach(card => {
    card.addEventListener("click", () => openCreative(Number(card.dataset.creative)));
  });
}

function openCreative(index) {
  const item = portfolio.creativeWork[index];
  const embed = youtubeEmbed(item.videoUrl);

  if (!embed && item.videoUrl && item.videoUrl !== "#") {
    window.open(item.videoUrl, "_blank", "noopener,noreferrer");
    return;
  }

  $("#videoFrame").innerHTML = embed
    ? `<iframe src="${embed}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
    : `<img src="${item.thumbnail}" alt="${item.title}">`;

  $("#modalType").textContent = `${item.type} · ${item.brand}`;
  $("#modalTitle").textContent = item.title;
  $("#modalDesc").textContent = item.description;
  $("#videoModal").classList.add("show");
  $("#videoModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  $("#videoModal").classList.remove("show");
  $("#videoModal").setAttribute("aria-hidden", "true");
  $("#videoFrame").innerHTML = "";
  document.body.classList.remove("modal-open");
}

function renderSkills() {
  $("#techSkills").innerHTML = portfolio.techSkills.map(s => `<span>${s}</span>`).join("");
  $("#creativeSkills").innerHTML = portfolio.creativeSkills.map(s => `<span>${s}</span>`).join("");
}

function renderJourney() {
  $("#timeline").innerHTML = portfolio.journey.map(j => `
    <article class="timeline-item reveal">
      <div class="date">${j.date}</div>
      <div><h3>${j.title}</h3><p class="place">${j.place}</p></div>
      <p class="desc">${j.description}</p>
    </article>
  `).join("");
}

function renderLinks() {
  $("#linkGrid").innerHTML = portfolio.links.map(l => `
    <a class="social-card reveal" href="${safeLink(l.url)}" ${l.url !== "#" ? 'target="_blank" rel="noreferrer"' : ""}>
      <i data-lucide="${l.icon || "link"}"></i>
      <i class="arrow" data-lucide="arrow-up-right"></i>
      <strong>${l.label}</strong>
    </a>
  `).join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function setupCursor() {
  const glow = $("#cursorGlow");
  window.addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

renderProfile();
renderProjects();
renderCreative();
renderSkills();
renderJourney();
renderLinks();
lucide.createIcons();
setupReveal();
setupCursor();

$$("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => e.key === "Escape" && closeModal());

// Simple mobile menu: toggles links below nav.
$("#menuBtn").addEventListener("click", () => {
  const navLinks = $(".nav-links");
  const open = navLinks.classList.toggle("mobile-open");
  navLinks.style.display = open ? "flex" : "";
  if (open) {
    Object.assign(navLinks.style, {
      position: "absolute",
      top: "70px",
      left: "13px",
      right: "13px",
      padding: "18px",
      flexDirection: "column",
      background: "rgba(10,12,17,.97)",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: "18px"
    });
  } else {
    navLinks.removeAttribute("style");
  }
});
