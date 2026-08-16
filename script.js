<<<<<<< HEAD
/* =====================================================================
   THE DANCE BEAT — script.js
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- nav background on scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 12) {
      nav.style.background = "rgba(5,11,24,0.9)";
      nav.style.borderBottomColor = "rgba(148,163,209,0.22)";
    } else {
      nav.style.background = "rgba(5,11,24,0.65)";
      nav.style.borderBottomColor = "rgba(148,163,209,0.14)";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =====================================================================
     GALLERY
     Add / remove items here — the grid re-flows automatically.
     type: "image" | "video"
     size: "" | "wide" | "tall"   (controls grid span)
     ===================================================================== */
  const GALLERY_ITEMS = [
    { type: "image", src: "image/banner1.jpeg",      label: "Admissions Open", size: "wide" },
    { type: "image", src: "image/img1.jpeg",          label: "In Class",        size: "" },
    { type: "image", src: "image/img2.jpeg",          label: "Freestyle",       size: "" },
    { type: "image", src: "image/founder_dance.jpg",  label: "Studio Session",  size: "" },
    { type: "image", src: "image/compt1.jpeg",        label: "Championship",    size: "wide" },
    { type: "placeholder", label: "More photos coming soon", size: "" },
  ];

  const galleryGrid = document.getElementById("galleryGrid");

  if (galleryGrid) {
    GALLERY_ITEMS.forEach(item => {
      const el = document.createElement("div");
      el.className = `g-item reveal${item.size ? " g-item--" + item.size : ""}${item.type === "placeholder" ? " g-item--placeholder" : ""}`;

      if (item.type === "image") {
        el.innerHTML = `
          <img src="${item.src}" alt="${item.label}" loading="lazy">
          <span class="g-item__label">${item.label}</span>
        `;
      } else if (item.type === "video") {
        el.innerHTML = `
          <video src="${item.src}" poster="${item.poster || ""}" muted loop playsinline preload="metadata"></video>
          <div class="g-item__play"><span>▶</span></div>
          <span class="g-item__label">${item.label}</span>
        `;
        const video = el.querySelector("video");
        el.addEventListener("mouseenter", () => video && video.play().catch(() => {}));
        el.addEventListener("mouseleave", () => { if (video) { video.pause(); video.currentTime = 0; } });
        el.addEventListener("click", () => {
          if (!video) return;
          if (video.paused) { video.play().catch(() => {}); } else { video.pause(); }
        });
      } else {
        el.innerHTML = `
          <span class="plus">+</span>
          <small>${item.label}</small>
        `;
      }

      galleryGrid.appendChild(el);
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".about__copy, .about__visual, .section-title, .p-card, .g-item, .a-card, .founder__copy, .founder__visual, .location__panel"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* =====================================================================
     Ambient equalizer bars (hero + CTA backdrops)
     Purely decorative, generated so markup stays clean.
     ===================================================================== */
  function buildEqualizer(container, barCount) {
    if (!container) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement("span");
      const height = 20 + Math.random() * 60;
      const duration = 0.8 + Math.random() * 1.4;
      const delay = Math.random() * -2;
      bar.style.cssText = `
        position:absolute;
        bottom:0;
        left:${(i / barCount) * 100}%;
        width:${100 / barCount}%;
        height:${height}%;
        background:linear-gradient(180deg, rgba(37,99,235,0.0), rgba(34,211,238,0.10));
        animation: eqPulse ${duration}s ease-in-out ${delay}s infinite;
        transform-origin: bottom;
      `;
      frag.appendChild(bar);
    }
    container.appendChild(frag);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes eqPulse {
      0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
      50% { transform: scaleY(1); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  buildEqualizer(document.getElementById("heroEq"), 40);
  buildEqualizer(document.getElementById("ctaEq"), 40);

});
=======
/* =====================================================================
   THE DANCE BEAT — script.js
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- nav background on scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 12) {
      nav.style.background = "rgba(5,11,24,0.9)";
      nav.style.borderBottomColor = "rgba(148,163,209,0.22)";
    } else {
      nav.style.background = "rgba(5,11,24,0.65)";
      nav.style.borderBottomColor = "rgba(148,163,209,0.14)";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =====================================================================
     GALLERY
     Add / remove items here — the grid re-flows automatically.
     type: "image" | "video"
     size: "" | "wide" | "tall"   (controls grid span)
     ===================================================================== */
  const GALLERY_ITEMS = [
    { type: "image", src: "image/banner1.jpeg",      label: "Admissions Open", size: "wide" },
    { type: "image", src: "image/img1.jpeg",          label: "In Class",        size: "" },
    { type: "image", src: "image/img2.jpeg",          label: "Freestyle",       size: "" },
    { type: "image", src: "image/founder_dance.jpg",  label: "Studio Session",  size: "" },
    { type: "image", src: "image/compt1.jpeg",        label: "Championship",    size: "wide" },
    { type: "placeholder", label: "More photos coming soon", size: "" },
  ];

  const galleryGrid = document.getElementById("galleryGrid");

  if (galleryGrid) {
    GALLERY_ITEMS.forEach(item => {
      const el = document.createElement("div");
      el.className = `g-item reveal${item.size ? " g-item--" + item.size : ""}${item.type === "placeholder" ? " g-item--placeholder" : ""}`;

      if (item.type === "image") {
        el.innerHTML = `
          <img src="${item.src}" alt="${item.label}" loading="lazy">
          <span class="g-item__label">${item.label}</span>
        `;
      } else if (item.type === "video") {
        el.innerHTML = `
          <video src="${item.src}" poster="${item.poster || ""}" muted loop playsinline preload="metadata"></video>
          <div class="g-item__play"><span>▶</span></div>
          <span class="g-item__label">${item.label}</span>
        `;
        const video = el.querySelector("video");
        el.addEventListener("mouseenter", () => video && video.play().catch(() => {}));
        el.addEventListener("mouseleave", () => { if (video) { video.pause(); video.currentTime = 0; } });
        el.addEventListener("click", () => {
          if (!video) return;
          if (video.paused) { video.play().catch(() => {}); } else { video.pause(); }
        });
      } else {
        el.innerHTML = `
          <span class="plus">+</span>
          <small>${item.label}</small>
        `;
      }

      galleryGrid.appendChild(el);
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".about__copy, .about__visual, .section-title, .p-card, .g-item, .a-card, .founder__copy, .founder__visual, .location__panel"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* =====================================================================
     Ambient equalizer bars (hero + CTA backdrops)
     Purely decorative, generated so markup stays clean.
     ===================================================================== */
  function buildEqualizer(container, barCount) {
    if (!container) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement("span");
      const height = 20 + Math.random() * 60;
      const duration = 0.8 + Math.random() * 1.4;
      const delay = Math.random() * -2;
      bar.style.cssText = `
        position:absolute;
        bottom:0;
        left:${(i / barCount) * 100}%;
        width:${100 / barCount}%;
        height:${height}%;
        background:linear-gradient(180deg, rgba(37,99,235,0.0), rgba(34,211,238,0.10));
        animation: eqPulse ${duration}s ease-in-out ${delay}s infinite;
        transform-origin: bottom;
      `;
      frag.appendChild(bar);
    }
    container.appendChild(frag);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes eqPulse {
      0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
      50% { transform: scaleY(1); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  buildEqualizer(document.getElementById("heroEq"), 40);
  buildEqualizer(document.getElementById("ctaEq"), 40);

});
>>>>>>> 7e1724eef1e3ddf70c0affbafc9bde72dc327a80
