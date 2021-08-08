// ACCORDION FUNCTION //
const accordionBoxes = document.querySelectorAll(".accordion__card");
accordionBoxes.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("notactive");
  });
});

// NAVBAR FUNCTION //

// STICKY NAVBAR //

// TEXT ANIMATION //
const NumHolder = document.querySelector(".Num_holder");
// let numberCounting = setInterval(numsDone, 100);
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
