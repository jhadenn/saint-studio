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

const visitSection = document.querySelector(".visit-section");

if (visitSection) {
  const visitHours = [
    { day: "Sun", open: null, close: null },
    { day: "Mon", open: null, close: null },
    { day: "Tue", open: "10:30", close: "18:00" },
    { day: "Wed", open: "10:30", close: "18:00" },
    { day: "Thu", open: "10:30", close: "18:00" },
    { day: "Fri", open: "10:30", close: "18:00" },
    { day: "Sat", open: "10:30", close: "18:00" },
  ];

  const parseHour = (value) => {
    if (!value) return null;
    const [hour, minute] = value.split(":").map(Number);
    return hour * 60 + minute;
  };

  const formatHour = (minutes) => {
    if (minutes === null) return "Closed";
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = ((hour + 11) % 12) + 1;
    return minute === 0 ? `${hour12}${period.toLowerCase()}` : `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
  };

  const entries = [...visitSection.querySelectorAll("[data-visit-entry]")];
  const panels = [...visitSection.querySelectorAll("[data-visit-panel]")];
  const currentEntry = visitSection.querySelector("[data-current-visit-entry]");

  function selectVisitEntry(entry) {
    const id = entry.dataset.visitEntry;

    entries.forEach((item) => {
      const isActive = item === entry;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.visitPanel === id;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    if (currentEntry) currentEntry.textContent = id;
  }

  entries.forEach((entry, index) => {
    entry.tabIndex = entry.classList.contains("is-active") ? 0 : -1;

    entry.addEventListener("click", () => selectVisitEntry(entry));

    entry.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % entries.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + entries.length) % entries.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = entries.length - 1;

      entries[nextIndex].focus();
      selectVisitEntry(entries[nextIndex]);
    });
  });

  const hoursGrid = visitSection.querySelector("[data-visit-hours-grid]");

  if (hoursGrid) {
    const today = new Date().getDay();

    visitHours.forEach((item, index) => {
      const cell = document.createElement("div");
      cell.className = "visit-hours__cell";
      if (index === today) cell.classList.add("is-today");
      if (!item.open) cell.classList.add("is-closed");

      const day = document.createElement("div");
      day.className = "visit-hours__day";
      day.textContent = item.day;

      const time = document.createElement("div");
      time.className = "visit-hours__time";

      if (item.open && item.close) {
        time.innerHTML = `${formatHour(parseHour(item.open))}<br>${formatHour(parseHour(item.close))}`;
      } else {
        time.textContent = "Closed";
        const stamp = document.createElement("div");
        stamp.className = "visit-hours__closed";
        stamp.textContent = "Closed";
        cell.append(day, time, stamp);
        hoursGrid.append(cell);
        return;
      }

      cell.append(day, time);
      hoursGrid.append(cell);
    });
  }

  const dotGroup = visitSection.querySelector("[data-visit-dotgrid]");

  if (dotGroup) {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const width = 680;
    const height = 400;
    const columns = 28;
    const rows = 20;
    const pinX = width * 0.56;
    const pinY = height * 0.52;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const x = column * (width / columns) + width / columns / 2;
        const y = row * (height / rows) + height / rows / 2;
        const distance = Math.hypot(x - pinX, y - pinY);
        const radius = Math.max(0.6, 1.6 - distance / 300);
        const opacity = Math.max(0.12, 1 - distance / 280);
        const dot = document.createElementNS(svgNamespace, "circle");

        dot.setAttribute("cx", x.toFixed(2));
        dot.setAttribute("cy", y.toFixed(2));
        dot.setAttribute("r", radius.toFixed(2));
        dot.setAttribute("fill", "currentColor");
        dot.setAttribute("opacity", (opacity * 0.22).toFixed(2));
        dotGroup.append(dot);
      }
    }
  }

  visitSection.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy;
      const label = button.querySelector("span");
      const original = label ? label.textContent : "";

      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
        } else {
          const field = document.createElement("textarea");
          field.value = text;
          field.setAttribute("readonly", "");
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.append(field);
          field.select();
          document.execCommand("copy");
          field.remove();
        }

        if (label) {
          label.textContent = "Copied";
          window.setTimeout(() => {
            label.textContent = original;
          }, 1600);
        }
      } catch {
        if (label) label.textContent = original;
      }
    });
  });
}
