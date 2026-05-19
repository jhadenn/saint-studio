const root = document.documentElement;
const body = document.body;
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("is-open");
    body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) {
    element.classList.add("is-visible");
  }
  revealObserver.observe(element);
});

requestAnimationFrame(() => {
  root.classList.add("motion-ready");
});

function setupCarousel(rootElement) {
  const track = rootElement.querySelector("[data-carousel-track]");
  const slides = [...rootElement.querySelectorAll("[data-slide]")];
  const prev = rootElement.querySelector("[data-prev]");
  const next = rootElement.querySelector("[data-next]");

  if (!track || slides.length === 0 || !prev || !next) return;

  let index = 0;

  function visibleCount() {
    if (window.innerWidth <= 680) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function update() {
    const count = visibleCount();
    const maxIndex = Math.max(0, slides.length - count);
    index = Math.min(index, maxIndex);
    const gap = 18;
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * (width + gap)}px)`;
    prev.disabled = index === 0;
    next.disabled = index >= maxIndex;
  }

  prev.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    update();
  });

  next.addEventListener("click", () => {
    index += 1;
    update();
  });

  window.addEventListener("resize", update);
  update();
}

document.querySelectorAll("[data-carousel]").forEach(setupCarousel);

const featureScroll = document.querySelector(".barber-feature-scroll");
if (featureScroll) {
  let target = featureScroll.scrollLeft;
  let rafId = null;
  const ease = 0.18;
  const speed = 1.1;

  const animate = () => {
    const max = featureScroll.scrollWidth - featureScroll.clientWidth;
    target = Math.max(0, Math.min(max, target));
    const current = featureScroll.scrollLeft;
    const diff = target - current;
    if (Math.abs(diff) < 0.5) {
      featureScroll.scrollLeft = target;
      rafId = null;
      return;
    }
    featureScroll.scrollLeft = current + diff * ease;
    rafId = requestAnimationFrame(animate);
  };

  featureScroll.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = featureScroll.scrollWidth - featureScroll.clientWidth;
      if (max <= 0) return;
      const atStart = target <= 0 && event.deltaY < 0;
      const atEnd = target >= max && event.deltaY > 0;
      if (atStart || atEnd) return;
      event.preventDefault();
      target = Math.max(0, Math.min(max, target + event.deltaY * speed));
      if (rafId === null) rafId = requestAnimationFrame(animate);
    },
    { passive: false }
  );

  featureScroll.addEventListener("scroll", () => {
    if (rafId === null) target = featureScroll.scrollLeft;
  });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = form.dataset.success || "Thanks — your request has been received.";
    }
    form.reset();
  });
});

const lightbox = document.querySelector("[data-lightbox]");
if (lightbox) {
  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
  document.querySelectorAll("[data-lightbox-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxImage.src = button.dataset.image;
      lightboxImage.alt = button.dataset.alt;
      lightboxCaption.textContent = button.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox.querySelector("[data-close-dialog]").addEventListener("click", () => lightbox.close());
}

const teamDialog = document.querySelector("[data-team-dialog]");
if (teamDialog) {
  const teamImage = teamDialog.querySelector("[data-team-image]");
  const teamName = teamDialog.querySelector("[data-team-name]");
  const teamRole = teamDialog.querySelector("[data-team-role]");
  const teamBio = teamDialog.querySelector("[data-team-bio]");
  const teamTags = teamDialog.querySelector("[data-team-tags]");

  document.querySelectorAll("[data-team-card]").forEach((card) => {
    card.addEventListener("click", () => {
      teamImage.src = card.dataset.image;
      teamImage.alt = card.dataset.alt;
      teamName.textContent = card.dataset.name;
      teamRole.textContent = card.dataset.role;
      teamBio.textContent = card.dataset.bio;
      teamTags.innerHTML = "";
      card.dataset.tags.split(",").forEach((tag) => {
        const item = document.createElement("span");
        item.textContent = tag.trim();
        teamTags.appendChild(item);
      });
      teamDialog.showModal();
    });
  });

  teamDialog.querySelector("[data-close-dialog]").addEventListener("click", () => teamDialog.close());
}
