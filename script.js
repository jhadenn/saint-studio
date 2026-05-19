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

const barberProfiles = [
  {
    slug: "joshua-lat",
    first: "Joshua",
    last: "Lat",
    name: "Joshua Lat",
    role: "Co-owner / Master Barber",
    portrait: "assets/images/Joshua-Lat.webp",
    instagram: "https://www.instagram.com/",
    description: "Clean structure, steady detail, and a finish that feels considered from every angle.",
    aboutHeading: "Fades, scissors, and everything in between.",
    about: [
      "Fades, scissors, and everything in between. Joshua's work is built on experience and precision, delivering clean, tailored cuts shaped by nearly a decade behind the chair.",
      "Expect a sharp finish, steady hands, and a chair you can trust every time. Book Joshua when you want to walk out feeling fresh, every visit.",
    ],
    gallery: [
      { type: "image", src: "assets/images/gallery-fade.webp", alt: "Textured fade haircut detail", caption: "Mid fade, textured top" },
      { type: "video", src: "assets/images/migi-cut.mp4", alt: "Clipper work during a haircut", caption: "Modern mullet, scissor finish" },
      { type: "image", src: "assets/images/gallery-cut.webp", alt: "Finished cut in the barbershop", caption: "Classic shape, clean taper" },
    ],
  },
  {
    slug: "miguel-lat",
    first: "Miguel",
    last: "Lat",
    name: "Miguel Lat",
    role: "Barber",
    portrait: "assets/images/Miguel-Lat.webp",
    instagram: "https://www.instagram.com/",
    description: "Crisp transitions, disciplined beard work, and cuts designed to grow out clean.",
    aboutHeading: "Crisp transitions shaped to last beyond the appointment.",
    about: [
      "Miguel is known for sharp fades, patient detailing, and practical shapes that hold their line after the appointment.",
      "His chair is a strong fit for clients who want consistency, clean edges, and a finish that feels polished without being overworked.",
    ],
    gallery: [
      { type: "video", src: "assets/images/migi-cut.mp4", alt: "Haircut in progress with clippers", caption: "Low taper, clean blend" },
      { type: "image", src: "assets/images/gallery-fade.webp", alt: "Fade haircut close-up", caption: "Skin fade, soft texture" },
      { type: "image", src: "assets/images/barber-tools.webp", alt: "Barber tools on a workstation", caption: "Detail work, lined finish" },
    ],
  },
  {
    slug: "luis-nunag",
    first: "Luis",
    last: "Nunag",
    name: "Luis Nunag",
    role: "Barber",
    portrait: "assets/images/Luis-Nunag.webp",
    instagram: "https://www.instagram.com/",
    description: "Measured shape, balanced texture, and a softer approach to polished everyday hair.",
    aboutHeading: "Measured shape, movement, and soft texture.",
    about: [
      "Luis brings a careful eye to proportion, movement, and scissor work, especially for clients who want a cut with shape but no stiffness.",
      "His work is steady, thoughtful, and focused on building a silhouette that matches the person wearing it.",
    ],
    gallery: [
      { type: "video", src: "assets/images/nunag-cut.mp4", alt: "Finished haircut shown in profile", caption: "Scissor shape, natural flow" },
      { type: "image", src: "assets/images/gallery-cut.webp", alt: "Modern barbershop haircut detail", caption: "Balanced taper, soft finish" },
      { type: "image", src: "assets/images/gallery-interior.webp", alt: "Barbershop chair and mirror", caption: "Chair-ready detail" },
    ],
  },
  {
    slug: "ash-nadeem",
    first: "Ash",
    last: "Nadeem",
    name: "Ash Nadeem",
    role: "Barber",
    portrait: "assets/images/Ash-Nadeem.webp",
    instagram: "https://www.instagram.com/",
    description: "Strong proportions, beard architecture, and finishes that read clean in person and on camera.",
    aboutHeading: "Strong proportions from every angle.",
    about: [
      "Ash focuses on balance from every angle, pairing careful fade work with beard shaping that frames the face without feeling forced.",
      "Book Ash for a composed, deliberate cut with sharp detail and a calm chair experience.",
    ],
    gallery: [
      { type: "image", src: "assets/images/gallery-fade.webp", alt: "Detailed fade haircut", caption: "Sharp fade, beard balance" },
      { type: "image", src: "assets/images/barber-tools.webp", alt: "Barber tools arranged neatly", caption: "Line work and finish" },
      { type: "image", src: "assets/images/clippers.png", alt: "Clipper tools on a surface", caption: "Precision setup" },
    ],
  },
  {
    slug: "jp-dela-cruz",
    first: "JP",
    last: "Dela Cruz",
    name: "JP Dela Cruz",
    role: "Barber",
    portrait: "assets/images/JP-Dela.webp",
    instagram: "https://www.instagram.com/",
    description: "Editorial detail, wearable shape, and a visual eye that connects barbering with image-making.",
    aboutHeading: "Editorial detail made wearable.",
    about: [
      "JP bridges barbering and creative direction, thinking about silhouette, texture, and how a cut lands in the full look.",
      "His work suits clients who want a cut that feels intentional, styled, and quietly distinctive.",
    ],
    gallery: [
      { type: "image", src: "assets/images/gallery-cut.webp", alt: "Finished barbershop cut", caption: "Editorial shape, clean finish" },
      { type: "image", src: "assets/images/product-photography.jpg", alt: "Studio product photography setup", caption: "Visual direction" },
      { type: "image", src: "assets/images/gallery-interior.webp", alt: "Minimal barbershop interior", caption: "Studio polish" },
    ],
  },
  {
    slug: "justin-estrella",
    first: "Justin",
    last: "Estrella",
    name: "Justin Estrella",
    role: "Barber",
    portrait: "assets/images/Justin-Estrella.webp",
    instagram: "https://www.instagram.com/",
    description: "Quiet precision, clean shape, and wearable cuts with enough detail to carry personality.",
    aboutHeading: "Quiet precision for everyday shape.",
    about: [
      "Justin works with a focused, practical eye, building cuts that are easy to wear and still feel considered.",
      "Expect clean transitions, balanced texture, and a finish that keeps the client's day-to-day routine in mind.",
    ],
    gallery: [
      { type: "image", src: "assets/images/gallery-fade.webp", alt: "Clean fade haircut detail", caption: "Wearable fade, soft top" },
      { type: "video", src: "assets/images/nunag-cut.mp4", alt: "Haircut detail shown in profile", caption: "Textured finish" },
      { type: "image", src: "assets/images/gallery-cut.webp", alt: "Finished haircut in the studio", caption: "Balanced everyday shape" },
    ],
  },
  {
    slug: "gabriel-lat",
    first: "Gabriel",
    last: "Lat",
    name: "Gabriel Lat",
    role: "Barber",
    portrait: "assets/images/Gabriel-Lat.webp",
    instagram: "https://www.instagram.com/",
    description: "Polished grooming, sharp beard work, and a strong sense of overall presentation.",
    aboutHeading: "Polished grooming with a complete finish.",
    about: [
      "Gabriel brings an editorial eye to grooming, using detail and proportion to make each cut feel complete.",
      "His approach pairs beard work, clean lines, and a composed finish for clients who want the full look handled.",
    ],
    gallery: [
      { type: "image", src: "assets/images/barber-tools.webp", alt: "Tools prepared for a barber service", caption: "Beard detail, clean line" },
      { type: "image", src: "assets/images/gallery-fade.webp", alt: "Fade haircut close-up", caption: "Polished transition" },
      { type: "image", src: "assets/images/gallery-cut.webp", alt: "Finished haircut detail", caption: "Complete finish" },
    ],
  },
];

function renderBarberProfile() {
  const profilePage = document.querySelector("[data-barber-profile]");
  if (!profilePage) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("barber") || barberProfiles[0].slug;
  const profileIndex = Math.max(0, barberProfiles.findIndex((item) => item.slug === slug));
  const profile = barberProfiles[profileIndex];
  const previous = barberProfiles[(profileIndex - 1 + barberProfiles.length) % barberProfiles.length];
  const next = barberProfiles[(profileIndex + 1) % barberProfiles.length];

  document.title = `${profile.name} | SAINTstudio`;
  const profileName = profilePage.querySelector("[data-profile-name]");
  profileName.textContent = "";
  [profile.first, profile.last].forEach((namePart) => {
    const line = document.createElement("span");
    line.textContent = namePart;
    profileName.append(line);
  });
  profilePage.querySelector("[data-profile-role]").textContent = profile.role;
  profilePage.querySelector("[data-profile-description]").textContent = profile.description;
  profilePage.querySelector("[data-profile-about-heading]").textContent = profile.aboutHeading;

  const portrait = profilePage.querySelector("[data-profile-portrait]");
  portrait.src = profile.portrait;
  portrait.alt = `Portrait of ${profile.name}`;

  const bookButton = profilePage.querySelector("[data-profile-book]");
  bookButton.textContent = `Book ${profile.first}`;

  const instagramButton = profilePage.querySelector("[data-profile-instagram]");
  instagramButton.href = profile.instagram;

  const about = profilePage.querySelector("[data-profile-about]");
  about.textContent = "";
  profile.about.forEach((copy) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = copy;
    about.append(paragraph);
  });

  const gallery = profilePage.querySelector("[data-barber-gallery]");
  gallery.textContent = "";
  profile.gallery.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "barber-feature reveal";

    const number = document.createElement("div");
    number.className = "barber-feature-meta";
    const numberText = document.createElement("span");
    numberText.textContent = String(index + 1).padStart(2, "0");
    number.append(numberText);

    const figure = document.createElement("figure");

    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", item.alt);
      figure.append(video);
    } else {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt;
      image.loading = "lazy";
      figure.append(image);
    }

    article.append(number, figure);
    gallery.append(article);
  });

  const previousLink = profilePage.querySelector("[data-profile-prev]");
  const nextLink = profilePage.querySelector("[data-profile-next]");
  previousLink.href = `barber-profile.html?barber=${previous.slug}`;
  nextLink.href = `barber-profile.html?barber=${next.slug}`;
  profilePage.querySelector("[data-profile-prev-name]").textContent = previous.name;
  profilePage.querySelector("[data-profile-next-name]").textContent = next.name;
}

renderBarberProfile();

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

function setupHorizontalScroll(scroller) {
  let target = scroller.scrollLeft;
  let rafId = null;
  const ease = 0.18;
  const speed = 1.1;
  const prev = scroller.parentElement.querySelector("[data-scroll-prev]");
  const next = scroller.parentElement.querySelector("[data-scroll-next]");

  const animate = () => {
    const max = scroller.scrollWidth - scroller.clientWidth;
    target = Math.max(0, Math.min(max, target));
    const current = scroller.scrollLeft;
    const diff = target - current;
    if (Math.abs(diff) < 0.5) {
      scroller.scrollLeft = target;
      rafId = null;
      return;
    }
    scroller.scrollLeft = current + diff * ease;
    rafId = requestAnimationFrame(animate);
  };

  const scrollByPage = (direction) => {
    const firstItem = scroller.firstElementChild;
    const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : scroller.clientWidth * 0.8;
    target = scroller.scrollLeft + direction * Math.max(260, itemWidth + 32);
    if (rafId === null) rafId = requestAnimationFrame(animate);
  };

  if (prev) prev.addEventListener("click", () => scrollByPage(-1));
  if (next) next.addEventListener("click", () => scrollByPage(1));

  scroller.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
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

  scroller.addEventListener("scroll", () => {
    if (rafId === null) target = scroller.scrollLeft;
  });
}

document.querySelectorAll(".barber-feature-scroll, [data-horizontal-scroll]").forEach(setupHorizontalScroll);

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
