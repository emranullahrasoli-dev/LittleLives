(function () {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  function onScroll() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const counters = document.querySelectorAll("[data-counter]");
  counters.forEach((el) => {
    const to = Number(el.getAttribute("data-counter")) || 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1200, 1);
          el.textContent = Math.round(to * p) + "+";
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
  });

  const backTop = document.querySelector(".back-top");
  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const track = document.getElementById("marquee-track");
  if (track) {
    const quote =
      "Lorem ipsum dolor sit amet consectetur. Elit sed laoreet augue adipiscing. Egestas aliquet ipsum mattis porttitor lacinia ut. Fusce suspendisse commodo ac quam imperdiet mattis nulla quis felis.";
    const avatars = [
      "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=120&h=120",
      "https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=120&h=120",
      "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=120&h=120",
      "https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=120&h=120",
    ];
    const countries = ["Malaysia", "Singapore", "Malaysia", "Vietnam"];
    const flags = ["my", "sg", "my", "vn"];
    const photo =
      "https://images.pexels.com/photos/8466774/pexels-photo-8466774.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=400&h=400";
    const sequence = ["card", "photo", "card", "card", "photo", "card"];

    function flagSvg(code) {
      if (code === "sg") {
        return '<svg class="flag" viewBox="0 0 30 20" width="16" height="11"><rect width="30" height="10" fill="#ef3340"/><rect y="10" width="30" height="10" fill="#fff"/><circle cx="7" cy="5" r="3" fill="#fff"/><circle cx="8.2" cy="5" r="3" fill="#ef3340"/></svg>';
      }
      if (code === "vn") {
        return '<svg class="flag" viewBox="0 0 30 20" width="16" height="11"><rect width="30" height="20" fill="#da251d"/><path d="M15 4l1.6 4.8h5l-4 3 1.5 4.8-4.1-3-4.1 3 1.5-4.8-4-3h5z" fill="#ff0"/></svg>';
      }
      return '<svg class="flag" viewBox="0 0 30 20" width="16" height="11"><rect width="14" height="11.4" fill="#010066"/><rect y="0" width="30" height="1.43" fill="#cc0001"/><rect y="2.86" width="30" height="1.43" fill="#cc0001"/><rect y="5.72" width="30" height="1.43" fill="#cc0001"/><rect y="8.58" width="30" height="1.43" fill="#cc0001"/><rect y="11.44" width="30" height="1.43" fill="#cc0001"/><rect y="14.3" width="30" height="1.43" fill="#cc0001"/><rect y="17.16" width="30" height="1.43" fill="#cc0001"/><circle cx="6" cy="5.7" r="3.2" fill="#fc0"/><circle cx="7" cy="5.7" r="2.6" fill="#010066"/></svg>';
    }

    function cardHtml(i) {
      const idx = i % 4;
      return `<article class="testimonial-card card-shadow">
        <div class="testimonial-card-head">
          <img src="${avatars[idx]}" alt="User Name" />
          <div>
            <p class="name">User Name</p>
            <p class="meta">Occupation Here</p>
            <p class="meta">Officename</p>
          </div>
        </div>
        <p class="quote">${quote}</p>
        <div class="country">${flagSvg(flags[idx])} ${countries[idx]}</div>
      </article>`;
    }

    function photoHtml() {
      return `<div class="testimonial-photo"><img src="${photo}" alt="Teacher with child" /></div>`;
    }

    const loop = sequence.concat(sequence);
    track.innerHTML = loop.map((type, i) => (type === "photo" ? photoHtml() : cardHtml(i))).join("");
  }
})();
