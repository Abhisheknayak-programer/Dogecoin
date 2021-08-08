// ACCORDION FUNCTION //
const accordionBoxes = document.querySelectorAll(".accordion__card");
accordionBoxes.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("notactive");
  });
});

// NAVBAR FUNCTION //
const navLink = document.querySelectorAll(".nav_link");
const navLinksHolder = document.querySelector(".nav_links");
const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line__1");
const line2 = document.querySelector(".line__2");
const line3 = document.querySelector(".line__3");

burger.addEventListener("click", () => {
  navLinksHolder.classList.toggle("navActive");
  burger.classList.toggle("toggle");
});

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    navLinksHolder.classList.remove("navActive");
    burger.classList.remove("toggle");
  });
});

// STICKY NAVBAR //
const sectionHeroEl = document.querySelector(".Main_Layer");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.querySelector(".scrollUpBox").style.display = "block";
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".scrollUpBox").style.display = "none";
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// TEXT ANIMATION //
const NumHolder = document.querySelector(".Num_holder");
let numberCounting = setInterval(numsDone, 70);
let count = 14303;
function numsDone() {
  count = count + 1;
  NumHolder.textContent = count;
  if (count > 30000) {
    count = 1500;
  }
}

// SCROLL TOP FUNCTION //
const upperPart = document.querySelector("main");
const scrollUpBox = document.querySelector(".scrollUpBox");
scrollUpBox.addEventListener("click", () => {
  upperPart.scrollIntoView({ behavior: "smooth" });
});
