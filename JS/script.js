const btnOpenMenu = document.querySelectorAll(".open-btn");
const navList = document.querySelector(".list");
const body = document.querySelector("body");
const inputEmail = document.querySelector(".email");
const inputAssunto = document.querySelector(".assunto");
const labelEmail = document.querySelector(".emailLabel");
const labelAssunto = document.querySelector(".assuntoLabel");
const allLinks = document.querySelectorAll("a");
const clicked = document.querySelector(".clicked-menu");
const showBtns = document.querySelector(".show-header-btn");
const btnBlock = document.querySelector(".header-btns");
const searchInput = document.querySelector(".search-input");
const searchTab = document.querySelector(".search-tab");
const spiner = document.querySelector(".spiner");
btnOpenMenu.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("open-list");
  });
});
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // clicked.textContent = link.textContent;
    const href = link.getAttribute("href");
    if (href == "#") {
      window.scrollTo({
        top: "0",
        behavior: "smooth",
      });
      btnBlock.classList.remove("show");
    }

    if (href !== "#" && href.startsWith("#")) {
      const selec = document.querySelector(href);
      selec.scrollIntoView({
        behavior: "smooth",
      });

      if (link.classList.contains("main-nav-link")) {
        body.classList.toggle("open-list");
      }
    }
  });
});

window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY >= 18) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }

  // if (window.scrollY >= 0) {
  //   // body.classList.add("sticky");
  //   clicked.textContent = "Home";
  // }
  // if (window.scrollY >= 500) {
  //   // body.classList.add("sticky");
  //   clicked.textContent = "feature";
  // }
  // if (window.scrollY >= 1300) {
  //   // body.classList.add("sticky");
  //   clicked.textContent = "Blog";
  // }
  // if (window.scrollY >= 2000) {
  //   // body.classList.add("sticky");
  //   clicked.textContent = "Service";
  // }
  // if (window.scrollY >= 2500) {
  //   // body.classList.add("sticky");
  //   clicked.textContent = "Team";
  // }
  // if (window.scrollY >= 3000) {
  //   // body.classList.add("sticky");
  //   clicked.textContent = "About";
  // }
});

showBtns.addEventListener("click", function (e) {
  e.preventDefault();
  btnBlock.classList.toggle("show");
  console.log(btnBlock);
});
searchInput.addEventListener("click", function () {
  searchTab.classList.toggle("active");
});
body.addEventListener("click", () => {
  searchTab.classList.remove("active");
});
setTimeout(() => {
  spiner.classList.add("spinner-hide");
}, 1000);
setTimeout(() => {
  spiner.classList.add("spinner-display");
}, 1500);

const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target.classList);
  if (entry.target.classList.contains("hero-section")) {
    clicked.textContent = "Home";
  }
  if (entry.target.classList.contains("section-feature")) {
    clicked.textContent = "Feature";
  }
  if (entry.target.classList.contains("section-blog")) {
    clicked.textContent = "Blog";
  }
  if (entry.target.classList.contains("section-service")) {
    clicked.textContent = "Service";
  }
  if (entry.target.classList.contains("section-team")) {
    clicked.textContent = "Team";
  }
  if (entry.target.classList.contains("section-about")) {
    clicked.textContent = "About";
  }
  entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
