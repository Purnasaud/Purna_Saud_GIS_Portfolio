

const navHamburger = document.getElementById("nav-hamburger");
const navLinksMenu = document.getElementById("nav-links");

if (navHamburger && navLinksMenu) {
  navHamburger.addEventListener("click", () => {
    navHamburger.classList.toggle("active");
    navLinksMenu.classList.toggle("open");
  });
}

function closeMenu() {
  if (navHamburger && navLinksMenu) {
    navHamburger.classList.remove("active");
    navLinksMenu.classList.remove("open");
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});







function navigateTo(sectionId){
  const target = document.getElementById(sectionId);
  if(!target) return;

  // flash highlight effect on the target section
  target.style.transition = "background .4s ease";
  const original = target.style.background;
  target.style.background = "rgba(244,98,58,.06)";
  setTimeout(() => {
    target.style.background = original;
  }, 800);

  // smooth scroll
  const offset = target.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: offset, behavior: "smooth" });
}


const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if(window.scrollY > 30){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});




const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const navLinks = document.querySelectorAll(".nav-links a");

const sectionMap = [
  { nav: "hero", el: document.getElementById("hero") },
  { nav: "research", el: document.getElementById("research") },
  { nav: "projects", el: document.getElementById("projects") },
  { nav: "skills", el: document.getElementById("skills") },
  { nav: "about", el: document.getElementById("about") },
  { nav: "contact", el: document.getElementById("contact") }
];

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 140;
  let current = "";

  for (let i = sectionMap.length - 1; i >= 0; i--) {
    const section = sectionMap[i].el;
    if (!section) continue;

    if (scrollPos >= section.offsetTop) {
      current = sectionMap[i].nav;
      break;
    }
  }

  navLinks.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === current) {
      link.classList.add("active");
    }
  });
});

const demoModal = document.getElementById("demo-modal");
const demoFrame = document.getElementById("demo-frame");
const demoTitle = document.getElementById("demo-title");
const demoOpenLink = document.getElementById("demo-open-link");
const demoClose = document.getElementById("demo-close");
const demoLoading = document.getElementById("demo-loading");

function openDemo(title, url){
  demoTitle.textContent = title;
  demoFrame.src = url;
  demoOpenLink.href = url;
  demoModal.classList.add("open");
  document.body.style.overflow = "hidden";
  demoLoading.classList.remove("hidden");
}

demoFrame.addEventListener("load", () => {
  demoLoading.classList.add("hidden");
});

function closeDemo(){
  demoModal.classList.remove("open");
  demoFrame.src = "";
  document.body.style.overflow = "";
}

demoClose.addEventListener("click", closeDemo);

demoModal.addEventListener("click", (e) => {
  if(e.target === demoModal){
    closeDemo();
  }
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeDemo();
  }
});

const researchContainer = document.querySelector(".research-container");

if (researchContainer && window.innerWidth > 950) {
  researchContainer.addEventListener("wheel", function (e) {
    const canScroll =
      researchContainer.scrollHeight > researchContainer.clientHeight;

    if (!canScroll) return;

    e.preventDefault();
    researchContainer.scrollTop += e.deltaY * 1.15;
  }, { passive: false });
}


const infoModal = document.getElementById("info-modal");
const infoTitle = document.getElementById("info-title");
const infoDesc = document.getElementById("info-desc");
const infoClose = document.getElementById("info-close");

document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    infoTitle.textContent = btn.dataset.title;
    infoDesc.innerHTML = btn.dataset.desc;
    infoModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeInfoModal(){
  infoModal.classList.remove("active");
  document.body.style.overflow = "";
}

if (infoClose) {
  infoClose.addEventListener("click", closeInfoModal);
}

if (infoModal) {
  infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) {
      closeInfoModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && infoModal.classList.contains("active")) {
    closeInfoModal();
  }
});


const tagline = document.querySelector(".hero-tagline");
if(tagline){
  const text = tagline.textContent.trim();
  tagline.textContent = "";
  tagline.style.opacity = "1";
  let i = 0;
  const type = () => {
    if(i < text.length){
      tagline.textContent += text[i];
      i++;
      setTimeout(type, 28);
    }
  };
  setTimeout(type, 600);
}










// === DRAMATIC VISIBLE EFFECTS ===

// 1 — HERO SECTION: Slides up from below on load
document.addEventListener("DOMContentLoaded", () => {
  const heroLeft = document.querySelector(".hero-left");
  const heroRight = document.querySelector(".hero-right");

  if(heroLeft){
    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateY(40px)";
    heroLeft.style.transition = "opacity .8s ease, transform .8s ease";
    setTimeout(() => {
      heroLeft.style.opacity = "1";
      heroLeft.style.transform = "translateY(0)";
    }, 200);
  }

  if(heroRight){
    heroRight.style.opacity = "0";
    heroRight.style.transform = "translateY(40px)";
    heroRight.style.transition = "opacity .8s ease, transform .8s ease";
    setTimeout(() => {
      heroRight.style.opacity = "1";
      heroRight.style.transform = "translateY(0)";
    }, 450);
  }
});

// 2 — SKILL PILLS: Pop in one by one with bounce
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const pills = entry.target.querySelectorAll(".sb-pill");
      pills.forEach((pill, i) => {
        pill.style.opacity = "0";
        pill.style.transform = "scale(0.5)";
        pill.style.transition = "none";
        setTimeout(() => {
          pill.style.transition = "opacity .25s ease, transform .25s cubic-bezier(.34,1.56,.64,1)";
          pill.style.opacity = "1";
          pill.style.transform = "scale(1)";
        }, i * 50);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".skill-block").forEach(block => {
  block.querySelectorAll(".sb-pill").forEach(pill => {
    pill.style.opacity = "0";
    pill.style.transform = "scale(0.5)";
  });
  skillObserver.observe(block);
});

// 3 — THEME BANNERS: Slide in from left
const bannerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateX(-30px)";
      entry.target.style.transition = "opacity .6s ease, transform .6s ease";
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
      }, 50);
      bannerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".theme-banner").forEach(b => {
  b.style.opacity = "0";
  bannerObserver.observe(b);
});

// 4 — PROJECT CARDS: Flip in on scroll
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(50px) rotateX(8deg)";
      entry.target.style.transition = `opacity .5s ease ${i * 80}ms, transform .5s ease ${i * 80}ms`;
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) rotateX(0)";
      }, 50);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".proj-card").forEach(card => {
  card.style.opacity = "0";
  cardObserver.observe(card);
});

// 5 — SECTION HEADERS: Wipe in from left
const hdObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const title = entry.target.querySelector(".sec-title");
      const desc = entry.target.querySelector(".sec-desc");
      const eye = entry.target.querySelector(".sec-eye");

      [eye, title, desc].forEach((el, i) => {
        if(!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateX(-24px)";
        setTimeout(() => {
          el.style.transition = "opacity .5s ease, transform .5s ease";
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        }, i * 120);
      });
      hdObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".sec-hd").forEach(hd => hdObserver.observe(hd));

// 6 — HERO PHOTO: Zoom in with ring pulse
document.addEventListener("DOMContentLoaded", () => {
  const photo = document.querySelector(".hero-photo-panel");
  if(photo){
    photo.style.opacity = "0";
    photo.style.transform = "scale(0.7)";
    photo.style.transition = "opacity .6s ease, transform .6s cubic-bezier(.34,1.56,.64,1)";
    setTimeout(() => {
      photo.style.opacity = "1";
      photo.style.transform = "scale(1)";
    }, 100);

    // pulse ring
    setTimeout(() => {
      photo.style.boxShadow = "0 0 0 12px rgba(244,98,58,.2), 0 8px 28px rgba(0,0,0,.12)";
      photo.style.transition = "box-shadow .4s ease";
      setTimeout(() => {
        photo.style.boxShadow = "0 0 0 4px rgba(244,98,58,.1), 0 8px 28px rgba(0,0,0,.12)";
      }, 400);
    }, 700);
  }
});

// 7 — CONTACT LINKS: Bounce in
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const links = entry.target.querySelectorAll(".contact-link");
      links.forEach((link, i) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
        setTimeout(() => {
          link.style.transition = "opacity .4s ease, transform .4s cubic-bezier(.34,1.56,.64,1)";
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
        }, i * 100);
      });
      contactObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".contact-inner").forEach(el => contactObserver.observe(el));





document.getElementById("cf-submit").addEventListener("click", async () => {
  const name    = document.getElementById("cf-name").value.trim();
  const email   = document.getElementById("cf-email").value.trim();
  const subject = document.getElementById("cf-subject").value.trim();
  const message = document.getElementById("cf-message").value.trim();
  const status  = document.getElementById("cf-status");
  const btn     = document.getElementById("cf-submit");
  const btnText = document.getElementById("cf-btn-text");
  const btnIcon = document.getElementById("cf-btn-icon");

  status.className = "cf-status";
  status.textContent = "";

  if(!name || !email || !message){
    status.textContent = "⚠ Please fill in name, email and message.";
    status.classList.add("error");
    return;
  }

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    status.textContent = "⚠ Please enter a valid email address.";
    status.classList.add("error");
    return;
  }

  btnText.textContent = "Sending...";
  btnIcon.textContent = "⏳";
  btn.disabled = true;

  try {
    const res = await fetch("https://formspree.io/f/mkoqlzrj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message })
    });

    if(res.ok){
      status.textContent = "✓ Message sent! I'll get back to you soon.";
      document.getElementById("cf-name").value = "";
      document.getElementById("cf-email").value = "";
      document.getElementById("cf-subject").value = "";
      document.getElementById("cf-message").value = "";
      btnText.textContent = "Send Message";
      btnIcon.textContent = "→";
      btn.disabled = false;
    } else {
      throw new Error("Failed");
    }
  } catch(e) {
    status.textContent = "✗ Something went wrong. Email me directly at psaud@uwyo.edu";
    status.classList.add("error");
    btnText.textContent = "Send Message";
    btnIcon.textContent = "→";
    btn.disabled = false;
  }
});


