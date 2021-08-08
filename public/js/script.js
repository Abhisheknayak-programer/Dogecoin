// ACCORDION FUNCTION //
const accordionBoxes = document.querySelectorAll(".accordion__card");
accordionBoxes.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("notactive");
  });
});

// NAVBAR FUNCTION //
const navLink = document.querySelector(".nav_link");
const navLinksHolder = document.querySelector(".nav_links");
const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line__1");
const line2 = document.querySelector(".line__2");
const line3 = document.querySelector(".line__3");

burger.addEventListener("click", () => {
  navLinksHolder.classList.toggle("navActive");
  burger.classList.toggle("toggle");
});

// STICKY NAVBAR //

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
